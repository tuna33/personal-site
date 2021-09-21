import React from "react";
import { Home } from "../views/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Projects } from "../views/Projects";
import { ChakraProvider, VStack, Heading, Text } from "@chakra-ui/react";
import { NavBar } from "./Navbar";
import { SocialLinks } from "./SocialLinks";
import { Endpoint } from "../types";

export const App: React.FC = () => {
  const endpoints: Endpoint[] = [
    { name: "Home", path: "/", view: <Home /> },
    { name: "Projects", path: "/projects", view: <Projects /> },
  ];
  const switchContent = endpoints.map((e) => (
    <Route exact path={e.path} key={e.path}>
      {e.view}
    </Route>
  ));

  return (
    <ChakraProvider>
      <BrowserRouter>
        <VStack m="10vh 10vw" h="80vh" justify="space-between">
          <header>
            <Heading size="xl" fontFamily="fantasy">
              Matias Lago Evia
            </Heading>
            <NavBar endpoints={endpoints} />
          </header>
          <Switch>{switchContent}</Switch>
          <footer>
            <SocialLinks />
            <Text fontSize="xs">
              Want to reach out? Use any of these to do so!
            </Text>
          </footer>
        </VStack>
      </BrowserRouter>
    </ChakraProvider>
  );
};
