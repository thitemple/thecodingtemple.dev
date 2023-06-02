import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import theme from "../../config/Theme";
import { media } from "../utils/media";

const MenuContainer = styled.ul`
    margin: 0;
    font-size: 1.2rem;
    grid-column: 2;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    align-items: center;
    li + li {
        margin-left: 1.5em;
    }

    @media ${media.phone} {
        display: none;
    }
`;

const MenuItem = styled.li`
    display: flex;
    flex-direction: column;
    margin: 0;

    div {
        height: 3px;
        opacity: 0;
        background-color: ${props =>
            props.inverted ? theme.bg : theme.primary};
        transition: opacity ${theme.transitionTime};
    }
    &:hover div {
        opacity: 1;
    }
`;

const Item = props => (
    <MenuItem inverted={props.inverted}>
        <Link to={props.path}>{props.text}</Link>
        <div />
    </MenuItem>
);

const Menu = props => (
    <MenuContainer>
        <Item path="/about" text="About" inverted={props.inverted} />
        <Item path="/categories" text="Categories" inverted={props.inverted} />
        {/* <Item path="/videos" text="Videos" inverted={props.inverted} />
        <Item path="/rss.xml" text="Feed" inverted={props.inverted} /> */}
    </MenuContainer>
);

export default Menu;
