import React from "react";
import {
  Flex,
  Text,
  Heading,
  Wrap,
  Tag,
  TagLabel,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import {
  FaPlaneArrival as PlaneIcon,
  FaLanguage as LanguageIcon,
  FaGraduationCap as GradIcon,
  FaStar as HonorIcon,
  FaCode as DevIcon,
} from "react-icons/fa";
import { IconType } from "react-icons";

type LifeFact = {
  brief: string;
  info: string;
  icon: IconType;
};

export const Home: React.FC = () => {
  const techList = [
    "Apache Airflow",
    "C",
    "C++",
    "ChakraUI",
    "Docker",
    "Elasticsearch",
    "Figma",
    "Google Cloud Platform",
    "Java",
    "Javascript",
    "Jest",
    "MirageJS",
    "Node.JS",
    "Postman",
    "Python",
    "React",
    "Redis",
    "SQLite",
    "Styled Components",
    "Typescript",
    "Webpack",
    "ZMQ",
  ];
  const facts: LifeFact[] = [
    {
      brief: "Uruguay move-in",
      info: "Moved from Uruguay during high school",
      icon: PlaneIcon,
    },
    {
      brief: "Bilingual",
      info: "Bilingual (Spanish, English) at a native proficiency level",
      icon: LanguageIcon,
    },
    {
      brief: "CCM grad",
      info: "Received 2 Associates (Math, Game Development) @ County College of Morris",
      icon: GradIcon,
    },
    {
      brief: "NJIT grad",
      info: "Received B.S in Computer Science @ New Jersey Institute of Technology",
      icon: GradIcon,
    },
    {
      brief: "CCM honors",
      info: "Phi Theta Kappa Honor Society (CCM) member — GPA of 3.810",
      icon: HonorIcon,
    },
    {
      brief: "NJIT honors",
      info: "Albert Dorman Honors College (NJIT) member — GPA of 3.723",
      icon: HonorIcon,
    },
    {
      brief: "BLAKFX",
      info: "Part Time Software Engineer @ BLAXFX",
      icon: DevIcon,
    },
    {
      brief: "SoloSegment",
      info: "Internship Dev Team Lead @ SoloSegment",
      icon: DevIcon,
    },
  ];

  return (
    <Flex flexDir="column" justify="flex-start" align="center">
      <Text marginBottom="40px">
        I am a software engineer that enjoys using technology as a tool to
        enhance the lives and experiences of everyone.
      </Text>
      <Heading size="md" marginBottom="20px">
        Tech I&apos;m familiar with
      </Heading>
      <Wrap w="40vw" justify="center" marginBottom="40px">
        {techList.map((t) => (
          <Tag key={t} bg="gray.300" borderRadius="full">
            <TagLabel>{t}</TagLabel>
          </Tag>
        ))}
      </Wrap>
      <Heading size="md" marginBottom="20px">
        More about me
      </Heading>
      <List spacing={2}>
        {facts.map((f) => (
          <ListItem key={f.brief}>
            <ListIcon as={f.icon} />
            {f.info}
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};
