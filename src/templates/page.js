import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import { DiscussionEmbed } from "disqus-react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import { media } from "../utils/media";

import config from "../../config/SiteConfig";
import "../utils/dracula-prism.css";
import "../utils/styles.css";

const Content = styled.article`
    grid-column: 2;
    box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    border-radius: 1rem;
    padding: 2rem 4rem;
    background-color: ${props => props.theme.bg};
    z-index: 9000;
    margin-top: -3rem;
    @media ${media.tablet} {
        padding: 3rem 3rem;
    }
    @media ${media.phone} {
        padding: 2rem 1.5rem;
    }
`;

const Title = styled.h1`
    margin-bottom: 1rem;

    @media ${media.phone} {
        font-size: 2rem;
    }
`;

const PostContent = styled.div`
    margin-top: 4rem;
`;

const Page = ({ data: { markdownRemark: postNode } }) => {
    const page = postNode.frontmatter;
    const url = `${config.siteUrl}${page.path}`;
    const disqusConfig = {
        identifier: url,
        url,
        title: page.title
    };
    return (
        <Layout>
            <Wrapper>
                <SEO postPath={page.path} postNode={postNode} postSEO />
                <Helmet title={`${page.title} | ${config.siteTitle}`} />
                <Header>
                    <Link to="/">{config.siteTitle}</Link>
                </Header>
                <Content>
                    <Title>{page.title}</Title>

                    <PostContent
                        dangerouslySetInnerHTML={{ __html: postNode.html }}
                    />

                    <DiscussionEmbed
                        shortname={config.disqusShortName}
                        config={disqusConfig}
                    />
                </Content>
            </Wrapper>
        </Layout>
    );
};

export default Page;
Page.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            html: PropTypes.string,
            frontmatter: PropTypes.shape({
                title: PropTypes.string,
                path: PropTypes.string
            })
        }).isRequired
    }).isRequired
};

/* eslint no-undef: off */
export const pageQuery = graphql`
    query pageByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
                path
                # lastUpdated
            }
            timeToRead
        }
    }
`;
