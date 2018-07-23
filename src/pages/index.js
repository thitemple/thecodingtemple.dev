import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Article from "../components/Article";
import Wrapper from "../components/Wrapper";
import SectionTitle from "../components/SectionTitle";
import Menu from "../components/Menu";

import { media } from "../utils/media";

const Content = styled.div`
    grid-column: 2;
    box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    padding: 3rem 6rem;
    background-color: ${props => props.theme.bg};
    @media ${media.tablet} {
        padding: 3rem 2rem;
    }
    @media ${media.phone} {
        padding: 2rem 1.5rem;
    }
    overflow: hidden;
`;

const Hero = styled.div`
    grid-column: 2;
    padding: 3rem 2rem 2rem 2rem;
    text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    color: ${props => props.theme.dark};

    p {
        font-size: 1.68rem;
        margin-top: -1rem;
        @media ${media.phone} {
            font-size: 1.25rem;
        }
        @media ${media.tablet} {
            font-size: 1.45rem;
        }
    }
`;

const MenuWrapper = styled.div`
    padding-right: 2em;
    padding-bottom: 1.6em;
    grid-column: 2;
`;

const IndexPage = props => {
    const postEdges = props.data.allMarkdownRemark.edges;

    return (
        <Layout>
            <Wrapper>
                <Hero>
                    <h1>Hi, I'm Thiago</h1>
                    <p>
                        I&apos;m a developer and I love to code. I also love to
                        learn about code, discuss it and teach what I learn.
                    </p>
                </Hero>
                <MenuWrapper>
                    <Menu current="/" />
                </MenuWrapper>
                <Content>
                    <SectionTitle>Latest stories</SectionTitle>
                    {postEdges.map(post => (
                        <Article
                            title={post.node.frontmatter.title}
                            date={post.node.frontmatter.date}
                            excerpt={post.node.excerpt}
                            timeToRead={post.node.timeToRead}
                            path={post.node.frontmatter.path}
                            category={post.node.frontmatter.category}
                            key={post.node.fields.slug}
                        />
                    ))}
                </Content>
            </Wrapper>
        </Layout>
    );
};

export default IndexPage;

/* eslint no-undef: off */
export const IndexQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`;
