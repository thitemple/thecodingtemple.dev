const path = require("path");
const _ = require("lodash");
const createPaginatedPages = require("gatsby-paginate");

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    let slug;
    if (node.internal.type === "MarkdownRemark") {
        if (
            Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
            Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
        ) {
            slug = `/${_.kebabCase(node.frontmatter.slug)}`;
        }
        if (
            Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
            Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
        ) {
            slug = `/${_.kebabCase(node.frontmatter.title)}`;
        }
        createNodeField({ node, name: "slug", value: slug });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const postPage = path.resolve("src/templates/post.js");
        const categoryPage = path.resolve("src/templates/category.js");
        resolve(
            graphql(`
                {
                    posts: allMarkdownRemark(
                        sort: { fields: [frontmatter___date], order: DESC }
                    ) {
                        edges {
                            node {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                    date(formatString: "YYYY-MM-DD")
                                    category
                                    path
                                }
                                excerpt(pruneLength: 200)
                                timeToRead
                            }
                        }
                    }
                }
            `).then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                createPaginatedPages({
                    edges: result.data.posts.edges,
                    createPage: createPage,
                    pageTemplate: "src/templates/index.js",
                    pageLength: 5, // This is optional and defaults to 10 if not used
                    pathPrefix: "", // This is optional and defaults to an empty string if not used
                    context: {} // This is optional and defaults to an empty object if not used
                });

                const posts = result.data.posts.edges;

                posts.forEach((edge, index) => {
                    const next = index === 0 ? null : posts[index - 1].node;
                    const prev =
                        index === posts.length - 1
                            ? null
                            : posts[index + 1].node;

                    createPage({
                        path: edge.node.frontmatter.path,
                        component: postPage,
                        context: {
                            slug: edge.node.fields.slug,
                            prev,
                            next
                        }
                    });
                });

                let categories = [];

                _.each(posts, edge => {
                    if (_.get(edge, "node.frontmatter.category")) {
                        categories = categories.concat(
                            edge.node.frontmatter.category
                        );
                    }
                });

                categories = _.uniq(categories);

                categories.forEach(category => {
                    createPage({
                        path: `/categories/${_.kebabCase(category)}`,
                        component: categoryPage,
                        context: {
                            category
                        }
                    });
                });
            })
        );
    });
};
