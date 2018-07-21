import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Menu from "../components/Menu";
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

const Title = styled.h3`
    position: relative;
    text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    margin-bottom: 0.75rem;
`;

const About = props => {
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
                        <img src={me} alt="Me" class="center-me" />
                    </p>
                    <p>
                        My name is Thiago Temple, I'm Brazilian and I'm living
                        and working in Ottawa/Canada. Some of my friends also
                        call me vintem, which is the handle I user for many
                        things such as{" "}
                        <a href="https://twitter.com/vintem12">my twitter</a>{" "}
                        and my <a href="mailto:thitemple@gmail.com">email</a>.
                    </p>
                    <p>
                        Vintem doesn't mean much, it's just a mix of my middle
                        and last names.
                    </p>

                    <h2>What I do?</h2>
                    <p>
                        I work for <a href="http://wyhn.ca">Wyhn</a> as a
                        developer and for most of the time I'm programming with
                        web and mobile related technologies.
                    </p>

                    <h2>Why I do it?</h2>
                    <p>
                        Even before my family bought its first computer back in
                        the 90's, I was already fascinated by them. I used to
                        use my neighbour's computer when I was still 13.{" "}
                    </p>
                    <p>
                        Today, I love the craft of writing software, and
                        especially I love the challenge of being up to date with
                        new technologies. I'm sure the fact that technologies
                        are constantly changing is one of the major things
                        keeping me motivated. That and the fact of knowing that
                        people are becoming more productive because of software
                        I'm helping build.
                    </p>

                    <h2>Why this blog?</h2>
                    <p>
                        First, this is a way for me to practice what I'm
                        learning. People tend to say that one learns something
                        when she's trying to teach somebody else. Well, I think
                        that's true.
                    </p>
                    <p>
                        I'm also enthusiastic about new things I learn that I
                        want to share it. So, this is my contribution the
                        community. Sharing my experiences.
                    </p>

                    <h2>What I do for fun?</h2>
                    <p>
                        Living in Canada with its hard winters made me discover
                        a new passion:{" "}
                        <a href="http://boardgamegeek.com">board games</a>. Now
                        I love them and I have a somewhat growing collection:{" "}
                    </p>
                    <p>
                        <a href="https://boardgamegeek.com/user/vintem">
                            <img
                                src="http://boardgamegeek.com/jswidget.php?username=vintem&numitems=5&header=1&text=title&images=medium&show=recentplays&imagesonly=1&imagepos=center&inline=1&domains%5B%5D=boardgame&imagewidget=1"
                                border="0"
                                class="center-me"
                            />
                        </a>
                    </p>
                    <p>
                        I also watch a few{" "}
                        <a href="https://www.tvtime.com/en/user/13947508/profile">
                            TV Shows
                        </a>, and I'm constantly reading at least one book.
                    </p>
                    <p>
                        But one thing I love to do is to spend time with my
                        family. I'm married, father of one little girl and two
                        very active greyhounds.
                    </p>
                </Content>
            </Wrapper>
        </Layout>
    );
};

export default About;