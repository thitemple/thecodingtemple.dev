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
import me from "./images/me.jpg";

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

const About = () => {
    return (
        <Layout>
            <Wrapper>
                <Helmet title={`About | ${config.siteTitle}`} />
                <Header>
                    <Link to="/">{config.siteTitle}</Link>
                </Header>
                <Content>
                    <SectionTitle>About</SectionTitle>

                    <h2>Who am I?</h2>
                    <p>
                        <img src={me} alt="Me" className="center-me" />
                    </p>
                    <p>
                        My name is Thiago Temple, I&apos;m Brazilian and
                        I&apos;m living and working in Ottawa/Canada. Some of my
                        friends also call me vintem, which is the handle I user
                        for many things such as&nbsp;
                        <a href="https://twitter.com/vintem12">my twitter</a>
                        &nbsp; and my&nbsp;
                        <a href="mailto:thitemple@gmail.com">email</a>.
                    </p>
                    <p>
                        Vintem doesn&apos;t mean much, it&apos;s just a mix of
                        my middle and last names.
                    </p>

                    <h2>What I do?</h2>
                    <p>
                        I work for&nbsp;
                        <a href="http://wyhn.ca">Wyhn</a>
                        &nbsp;as a developer and for most of the time I&apos;m
                        programming with web and mobile related technologies.
                    </p>

                    <h2>Why I do it?</h2>
                    <p>
                        Even before my family bought its first computer back in
                        the 90&apos;s, I was already fascinated by them. I used
                        to use my neighbour&apos;s computer when I was still 13.
                    </p>
                    <p>
                        Today, I love the craft of writing software, and
                        especially I love the challenge of being up to date with
                        new technologies. I&apos;m sure the fact that
                        technologies are constantly changing is one of the major
                        things keeping me motivated. That and the fact of
                        knowing that people are becoming more productive because
                        of software I&apos;m helping build.
                    </p>

                    <h2>Why this blog?</h2>
                    <p>
                        First, this is a way for me to practice what I&apos;m
                        learning. People tend to say that one learns something
                        when she&apos;s trying to teach somebody else. Well, I
                        think that&apos;s true.
                    </p>
                    <p>
                        I&apos;m also enthusiastic about new things I learn that
                        I want to share it. So, this is my contribution the
                        community. Sharing my experiences.
                    </p>

                    <h2>What I do for fun?</h2>
                    <p>
                        Living in Canada with its hard winters made me discover
                        a new passion:&nbsp;
                        <a href="http://boardgamegeek.com">board games</a>
                        .&nbsp;Now I love them and I have a somewhat growing
                        collection:&nbsp;
                    </p>
                    <p>
                        <a href="https://boardgamegeek.com/user/vintem">
                            <img
                                alt="Board games collection"
                                src="https://boardgamegeek.com/jswidget.php?username=vintem&numitems=5&header=1&text=title&images=medium&show=recentplays&imagesonly=1&imagepos=center&inline=1&domains%5B%5D=boardgame&imagewidget=1"
                                border="0"
                                className="center-me"
                            />
                        </a>
                    </p>
                    <p>
                        I also watch a few&nbsp;
                        <a href="https://www.tvtime.com/en/user/13947508/profile">
                            TV Shows
                        </a>
                        , and I&apos;m constantly reading at least one book.
                    </p>
                    <p>
                        But one thing I love to do is to spend time with my
                        family. I&apos;m married, father of one little girl and
                        two very active greyhounds.
                    </p>
                </Content>
            </Wrapper>
        </Layout>
    );
};

export default About;
