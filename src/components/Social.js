import React from "react";
import styled from "styled-components";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    RedditShareButton,
    EmailShareButton,
    TwitterIcon,
    LinkedinIcon,
    RedditIcon,
    FacebookIcon,
    EmailIcon
} from "react-share";
import { siteUrl } from "../../config/SiteConfig";

const SocialBar = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0;
`;

const SocialLink = styled.div`
    margin: 0 10px;
    cursor: pointer;
`;

const Social = props => {
    const { path, title } = props;
    const url = `${siteUrl}${path}`;
    return (
        <SocialBar>
            <SocialLink>
                <TwitterShareButton url={url} title={title}>
                    <TwitterIcon round size={40} />
                </TwitterShareButton>
            </SocialLink>
            <SocialLink>
                <LinkedinShareButton url={url} title={title}>
                    <LinkedinIcon round size={40} />
                </LinkedinShareButton>
            </SocialLink>
            <SocialLink>
                <RedditShareButton url={url} title={title}>
                    <RedditIcon round size={40} />
                </RedditShareButton>
            </SocialLink>
            <SocialLink>
                <FacebookShareButton url={url} quote={title}>
                    <FacebookIcon round size={40} />
                </FacebookShareButton>
            </SocialLink>
            <SocialLink>
                <EmailShareButton url={url} subject={title}>
                    <EmailIcon round size={40} />
                </EmailShareButton>
            </SocialLink>
        </SocialBar>
    );
};

export default Social;
