import React from "react";
import {
  VStack,
  Heading,
  Text,
  Link,
  HStack,
  Tag,
  TagLabel,
  Wrap,
} from "@chakra-ui/react";
import { FaExternalLinkAlt as LinkIcon } from "react-icons/fa";

export type ProjectInfo = {
  title: string;
  url: string;
  desc: string;
  tech: string[];
  challenge: string;
  result: string;
};

export const Project: React.FC<ProjectInfo> = ({
  title,
  url,
  desc,
  tech,
  challenge,
  result,
}) => {
  return (
    <VStack spacing={4}>
      <Heading fontSize="6xl">{title}</Heading>
      <Wrap>
        {tech.map((t) => (
          <Tag key={t} bg="gray.300" borderRadius="full">
            <TagLabel>{t}</TagLabel>
          </Tag>
        ))}
      </Wrap>
      <Link href={url} isExternal>
        <HStack>
          <Text>Check it out</Text>
          <LinkIcon />
        </HStack>
      </Link>
      <Text>{desc}</Text>
      <Heading>Challenge</Heading>
      <Text>{challenge}</Text>
      <Heading>Result</Heading>
      <Text>{result}</Text>
    </VStack>
  );
};
