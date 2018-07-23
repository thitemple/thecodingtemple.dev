/* eslint no-unused-expressions:0 */

import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import SEO from "../components/SEO";
import theme from "../../config/Theme";
import { media } from "../utils/media";
import TiSocialTwitter from "react-icons/lib/ti/social-twitter";
import TiSocialLinkedin from "react-icons/lib/ti/social-linkedin";
import TiSocialInstagram from "react-icons/lib/ti/social-instagram";
import TiSocialYoutube from "react-icons/lib/ti/social-youtube";
import TiSocialGithub from "react-icons/lib/ti/social-github";
import TiRss from "react-icons/lib/ti/rss";

injectGlobal`
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  body {
    background: ${theme.bg};
    color: ${theme.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.primaryLight};
    text-decoration: none;
    transition: color ${theme.transitionTime};
  }
  a:hover {
    color: ${theme.ultraLight};
  }
  h1, h2, h3, h4 {
    color: ${theme.dark};
    margin-top: 20px;
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Footer = styled.footer`
    padding: 6rem 0 3rem 0;
    background-color: ${theme.footerBg};
    color: ${theme.primary};
    margin-top: -3em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-gap: 1em 5em;

    h4 {
        color: ${theme.primary};
    }

    ul {
        list-style: none;
        margin: 0;
    }

    @media ${media.phone} {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto);
    }
`;

const Copyrights = styled.p`
    grid-column: 1 / -1;
    justify-self: center;

    @media ${media.phone} {
        justify-self: center;
    }
`;

const Menu = styled.div`
    justify-self: end;
    @media ${media.phone} {
        justify-self: start;
        margin-left: 5em;
    }
`;
const FollowMe = styled.div`
    div {
        display: grid;
        grid-template-columns: repeat(3, 40px);
        grid-gap: 2em;
    }

    @media ${media.phone} {
        margin-left: 5em;
    }
`;

const Layout = props => {
    const { children } = props;
    return (
        <StaticQuery
            query={graphql`
                query LayoutQuery {
                    site {
                        siteMetadata {
                            buildTime
                        }
                    }
                }
            `}
            render={data => (
                <ThemeProvider theme={theme}>
                    <React.Fragment>
                        <SEO />
                        {children}
                        <Footer>
                            <Menu>
                                <h4>Menu</h4>
                                <ul>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/categories">Categories</Link>
                                    </li>
                                    <li>
                                        <Link to="/rss.xml">Feed</Link>
                                    </li>
                                    <li>
                                        <Link to="/videos">Videos</Link>
                                    </li>
                                </ul>
                            </Menu>
                            <FollowMe>
                                <h4>Follow me</h4>
                                <div>
                                    <Link to="/rss.xml">
                                        <TiRss size={40} />
                                    </Link>
                                    <a
                                        href="https://twitter.com/vintem12"
                                        target="_blank"
                                    >
                                        <TiSocialTwitter size={40} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/thitemple/"
                                        target="_blank"
                                    >
                                        <TiSocialLinkedin size={40} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/thitemple/"
                                        target="_blank"
                                    >
                                        <TiSocialInstagram size={40} />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/templecoding"
                                        target="_blank"
                                    >
                                        <TiSocialYoutube size={40} />
                                    </a>
                                    <a
                                        href="https://github.com/thitemple"
                                        target="_blank"
                                    >
                                        <TiSocialGithub size={40} />
                                    </a>
                                </div>
                            </FollowMe>
                            <Copyrights>
                                &copy; 2018 by Thiago Temple. All rights
                                reserved.{" "}
                            </Copyrights>
                        </Footer>
                    </React.Fragment>
                </ThemeProvider>
            )}
        />
    );
};

export default Layout;
