import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Article from "../components/Article";
import Wrapper from "../components/Wrapper";
import SectionTitle from "../components/SectionTitle";
import Menu from "../components/Menu";

import { media } from "../utils/media";
import { siteTitle } from "../../config/SiteConfig";
import theme from "../../config/Theme";

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
    display: flex;
    justify-content: space-between;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SiteTitle = styled.h2`
    color: ${theme.primary};
    text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
`;

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const IndexPage = props => {
    const { group, index, pageCount } = props.pageContext;
    const postEdges = group;

    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();
    const first = index === 1;
    const last = index === pageCount;

    return (
        <Layout>
            <Wrapper>
                {index === 1 ? (
                    <Hero>
                        <h1>Hi, I'm Thiago</h1>
                        <p>
                            I&apos;m a developer and I love to code. I also love
                            to learn about code, discuss it and teach what I
                            learn.
                        </p>
                    </Hero>
                ) : null}
                <MenuWrapper>
                    {index > 1 ? <SiteTitle>{siteTitle}</SiteTitle> : <span />}
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
                    <Pagination>
                        <NavLink
                            test={first}
                            url={previousUrl}
                            text="Previous Page"
                        />
                        <NavLink test={last} url={nextUrl} text="Next Page" />
                    </Pagination>
                </Content>
            </Wrapper>
        </Layout>
    );
};

export default IndexPage;
