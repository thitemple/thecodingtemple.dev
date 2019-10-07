import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Content from "../components/Content";
import Button from "../components/Button";
import { media } from "../utils/media";

import config from "../../config/SiteConfig";
import "../utils/dracula-prism.css";
import "../utils/styles.css";

const Title = styled.h1`
    margin-bottom: 1rem;

    @media ${media.phone} {
        font-size: 1.5rem;
    }
`;

const PageContent = styled.div`
    margin-top: 3rem;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
`;

const Page = ({
    data: { markdownRemark: pageNode },
    pageContext: { prevPath, prevTitle, nextPath, nextTitle, landingPath }
}) => {
    const page = pageNode.frontmatter;
    return (
        <Layout>
            <Wrapper>
                <SEO postPath={page.path} postNode={pageNode} postSEO />
                <Helmet title={`${page.title} | ${config.siteTitle}`} />
                <Header>
                    <Link to="/">{config.siteTitle}</Link>
                </Header>
                <Content>
                    <Title>{page.title}</Title>
                    {page.series !== page.title ? (
                        <>
                            This article is part of the series:&nbsp;
                            <Link to={landingPath}>{page.series}</Link>
                        </>
                    ) : null}
                    <PageContent
                        dangerouslySetInnerHTML={{ __html: pageNode.html }}
                    />
                    <Footer>
                        {prevPath ? (
                            <Button>
                                <Link to={prevPath}>
                                    &lt;&lt;&nbsp;
                                    {prevTitle}
                                </Link>
                            </Button>
                        ) : (
                            <div />
                        )}
                        {nextPath ? (
                            <Button>
                                <Link to={nextPath}>
                                    {nextTitle}
                                    &nbsp;&gt;&gt;
                                </Link>
                            </Button>
                        ) : (
                            <div />
                        )}
                    </Footer>
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
                path: PropTypes.string,
                series: PropTypes.string
            })
        }).isRequired
    }).isRequired,
    pageContext: PropTypes.shape({
        prevPath: PropTypes.string,
        prevTitle: PropTypes.string,
        nextPath: PropTypes.string,
        nextTitle: PropTypes.string,
        landingPath: PropTypes.string
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
                series
            }
            timeToRead
        }
    }
`;
