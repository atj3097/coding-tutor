// components/MessageThread.js
import React from "react";
import { VStack } from "@chakra-ui/react";
import Message from "./message";

const MessageThread = ({ messages }) => {
  return (
    <VStack
      alignItems="flex-start"
      spacing="2"
      overflowY="auto"
      flexGrow="1"
      px="4"
      py="6"
      backgroundColor="black"
      width="100%"
      pl="8" // Added padding to the left
      pr="8" // Added padding to the right
    >
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message.content}
          userType={message.userType}
        />
      ))}
    </VStack>
  );
};
export default MessageThread;
