const config = require("./config/SiteConfig");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        title: "Temple Coding",
        siteUrl: config.siteUrl + pathPrefix,
        buildTime: new Date(Date.now()).toLocaleString(),
        description: "The personal blog of Thiago Temple."
    },
    plugins: [
        "gatsby-plugin-feed",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "post",
                path: `${__dirname}/blog`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "nofollow noopener noreferrer"
                        }
                    },
                    "gatsby-remark-prismjs",
                    "gatsby-remark-autolink-headers",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 590
                        }
                    },
                    "gatsby-remark-copy-linked-files"
                ]
            }
        },
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography.js"
            }
        },
        "gatsby-plugin-catch-links",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-lodash",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: config.siteTitle,
                short_name: config.siteTitleAlt,
                description: config.siteDescription,
                start_url: config.pathPrefix,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: "fullscreen",
                icon: "src/favicon.jpg"
            }
        },
        // "gatsby-plugin-offline",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-41090209-2",
                head: false,
                anonymize: true,
                respectDNT: true
            }
        }
    ]
};
