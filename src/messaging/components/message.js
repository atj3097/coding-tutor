// components/Message.js
import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Message = ({ message, userType }) => {
  const isUser = userType === "user";

  return (
    <Box
      backgroundColor={isUser ? "white" : "#4844ec"}
      borderRadius="1.5rem"
      borderTopLeftRadius={isUser ? "1.5rem" : "0"}
      borderTopRightRadius={isUser ? "0" : "1.5rem"}
      px="4"
      py="2"
      alignSelf={isUser ? "flex-end" : "flex-start"}
      mb="2"
      maxWidth="50%"
      ml={isUser ? "2" : "0"}
      mr={isUser ? "0" : "2"}
    >
      <Text color={isUser ? "black" : "white"}>{message}</Text>
    </Box>
  );
};

export default Message;
