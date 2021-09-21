import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { ProjectInfo, Project } from "../components/Project";

export const Projects: React.FC = () => {
  const projectList: ProjectInfo[] = [
    {
      title: "Employee Portal",
      url: "https://emp-dir.vercel.app/",
      desc: "A ficticious company's webapp to allow viewing, adding, editing, and removing employees",
      tech: ["React", "Typescript", "ChakraUI", "Jest", "MirageJS", "Webpack"],
      challenge:
        "Using MirageJS alongside Jest to mock API data with tests before frontend",
      result:
        "This strategy vastly simplified the second half of implementing visuals and functionality around the data",
    },
    {
      title: "Random Magic Deck",
      url: "https://ragic.vercel.app/",
      desc: "A minigame to form a random card deck based on Magic The Gathering",
      tech: ["Figma", "React", "Javascript", "Styled Components", "Webpack"],
      challenge:
        "Designing a simple interface on Figma and implementing it from scratch",
      result:
        "Learned more about UI/UX and about different implementation issues",
    },
  ];

  return (
    <Flex flexDir="column" justify="flex-start" align="center">
      {projectList.map((p) => (
        <Box key={p.title} m="5vh auto">
          <Project
            title={p.title}
            url={p.url}
            desc={p.desc}
            tech={p.tech}
            challenge={p.challenge}
            result={p.result}
          />
        </Box>
      ))}
    </Flex>
  );
};
