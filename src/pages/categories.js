import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import Content from "../components/Content";
import config from "../../config/SiteConfig";

const Title = styled.h3`
    position: relative;
    text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    margin-bottom: 0.75rem;
`;

const Category = props => {
    const { group } = props.data.allMarkdownRemark;

    return (
        <Layout>
            <Wrapper>
                <Helmet title={`Categories | ${config.siteTitle}`} />
                <Header>
                    <Link to="/">{config.siteTitle}</Link>
                </Header>
                <Content>
                    <SectionTitle>Categories</SectionTitle>
                    {group.map(category => (
                        <Title>
                            <Link
                                to={`/categories/${kebabCase(
                                    category.fieldValue
                                )}`}
                            >
                                {category.fieldValue}
                            </Link>{" "}
                            ({category.totalCount})
                        </Title>
                    ))}
                </Content>
            </Wrapper>
        </Layout>
    );
};

export default Category;

/* eslint no-undef: off */
export const postQuery = graphql`
    query CategoriesPage {
        allMarkdownRemark {
            group(field: frontmatter___category) {
                fieldValue
                totalCount
            }
        }
    }
`;
