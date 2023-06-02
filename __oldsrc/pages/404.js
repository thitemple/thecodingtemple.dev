import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import { media } from "../utils/media";

import config from "../../config/SiteConfig";

const Content = styled.div`
    grid-column: 2;
    box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
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

const NotFound = () => {
    return (
        <Layout>
            <Wrapper>
                <Helmet title={`Not found | ${config.siteTitle}`} />
                <Header>
                    <Link to="/">{config.siteTitle}</Link>
                </Header>
                <Content>
                    <SectionTitle>Not found</SectionTitle>
                    <p>
                        I'm sorry, but the page you are looking for could not be
                        found.
                    </p>
                </Content>
            </Wrapper>
        </Layout>
    );
};

export default NotFound;
