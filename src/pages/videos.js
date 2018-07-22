import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import { media } from "../utils/media";

import config from "../../config/SiteConfig";
import es6Cover from "./images/es6-videos-cover.png";

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

const Title = styled.h3`
    position: relative;
    text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    margin-bottom: 0.75rem;
`;

const Videos = props => {
    return (
        <Layout>
            <Wrapper>
                <Helmet title={`Videos | ${config.siteTitle}`} />
                <Header>
                    <Link to="/">{config.siteTitle}</Link>
                </Header>
                <Content>
                    <SectionTitle>Videos</SectionTitle>
                    <h2>ES2015 / ES6</h2>
                    <img src={es6Cover} alt="ES6 videos" />

                    <p>
                        A series of videos about some of the new features of
                        ES2015 (a.k.a. ES6).
                    </p>
                    <p>Here are the topics I've covered so far:</p>

                    <ul>
                        <li>
                            <a href="https://youtu.be/9b_9PbuB2eg">
                                how to setup using Babel and Gulp
                            </a>
                        </li>
                        <li>
                            <a href="https://youtu.be/4q-awpEJQJU">
                                let and const
                            </a>
                        </li>
                        <li>
                            <a href="https://youtu.be/gjnDaey_5MQ">
                                rest and spread
                            </a>
                        </li>
                        <li>
                            <a href="https://youtu.be/JoFq8e6kgEQ">
                                destructuring
                            </a>
                        </li>
                        <li>
                            <a href="https://youtu.be/Lq0UbHdjlc4">
                                arrow functions
                            </a>
                        </li>
                        <li>
                            <a href="https://youtu.be/p1jCfPIBh0M">classes</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/XIgxohyeTUM">objects</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/5P04OK6KlXA">modules</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/bZil2xFUf0o">promises</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/EyEggHAuVgo">
                                map and set
                            </a>
                        </li>
                    </ul>
                    <p>
                        Or if you want to access{" "}
                        <a href="https://www.youtube.com/playlist?list=PLI3B_tXbkuVVeWEHELV16nWFSbP5Tabzf">
                            the playlist on YouTube
                        </a>
                    </p>
                </Content>
            </Wrapper>
        </Layout>
    );
};

export default Videos;
