import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import kebabCase from "lodash/kebabCase";
import PropTypes from "prop-types";

import Subline from "./Subline";
import { media } from "../utils/media";
import Button from "./Button";

const Post = styled.article`
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;

    @media ${media.phone} {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`;

const Divider = styled.div`
    display: block;
    height: 1px;
    width: 6em;
    background-color: #cbc9cf;
    margin: 3em auto;
`;

const Title = styled.h2`
    position: relative;
    text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    margin-bottom: 0.75rem;
`;

const Initiale = styled.span`
    position: absolute;
    font-size: 7rem;
    transform: translate(-50%, -50%);
    opacity: 0.08;
    user-select: none;
    z-index: -1;

    @media ${media.tablet} {
        transform: translate(-30%, -50%);
    }

    @media ${media.phone} {
        display: none;
    }
`;

const Excerpt = styled.p`
    grid-column: -1 / 1;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const ReadMore = styled.div`
    margin: 0 auto;
`;

const Article = ({ title, date, excerpt, timeToRead, category, path }) => {
    const firstChar = title.charAt(0);

    return (
        <Post>
            <Title>
                <Initiale>{firstChar}</Initiale>
                <Link to={path}>{title}</Link>
            </Title>
            <Subline>
                {`${date} - ${timeToRead} Min Read - In `}
                <Link to={`/categories/${kebabCase(category)}`}>
                    {category}
                </Link>
            </Subline>
            <Excerpt>{excerpt}</Excerpt>
            <ReadMore>
                <Link to={path}>
                    <Button>read more...</Button>
                </Link>
            </ReadMore>
            <Divider />
        </Post>
    );
};

Article.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

export default Article;
