// components/VerticalNavBar.js
import React from "react";
import { VStack, Box, Text, Spacer } from "@chakra-ui/react";
import { FaHome, FaComments, FaUsers, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const VerticalNavBar = () => {
  return (
    <VStack
      bgColor="#4844ec"
      width="64"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      spacing="10"
    >
      <Text fontSize="xl" fontWeight="bold" color="white">
        Pursuit
      </Text>
    <Link to="/">
      <Box as={FaHome} color="white" fontSize="2xl" mb={3} />
      </Link>

      <Link to="/messaging">
        <Box as={FaComments} color="white" fontSize="2xl" mb={3} />
            </Link>
    </VStack>
  );
};

export default VerticalNavBar;