import React from "react";
import { NavLink } from "react-router-dom";
import { HStack, Text } from "@chakra-ui/react";
import { Endpoint } from "../types";

export const NavBar: React.FC<{ endpoints: Endpoint[] }> = ({ endpoints }) => {
  const navLinks = endpoints.map((e) => (
    <NavLink exact to={e.path} key={e.path} activeStyle={{ color: "#7f7f7f" }}>
      <Text letterSpacing="wider" fontSize="sm">
        {e.name.toUpperCase()}
      </Text>
    </NavLink>
  ));
  return (
    <nav>
      <HStack
        marginTop="20px"
        marginBottom="40px"
        w="250px"
        justifyContent="space-around"
      >
        {navLinks}
      </HStack>
    </nav>
  );
};
