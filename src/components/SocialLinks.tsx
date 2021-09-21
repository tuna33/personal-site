import React from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import {
  FaLinkedin as LinkedinIcon,
  FaTwitter as TwitterIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa";

type SocialAccount = {
  platform: string;
  icon: JSX.Element;
  url: string;
};

export const SocialLinks: React.FC = () => {
  const socialAccounts: SocialAccount[] = [
    {
      platform: "LinkedIn",
      icon: <LinkedinIcon />,
      url: "https://linkedin.com/in/matias-engineer",
    },
    {
      platform: "Twitter",
      icon: <TwitterIcon />,
      url: "https://twitter.com/tuna33dev",
    },
    {
      platform: "GitHub",
      icon: <GithubIcon />,
      url: "https://github.com/tuna33",
    },
  ];
  return (
    <HStack justify="center">
      {socialAccounts.map((acc) => (
        <a href={acc.url} key={acc.platform}>
          <IconButton aria-label={acc.platform} icon={acc.icon} />
        </a>
      ))}
    </HStack>
  );
};
