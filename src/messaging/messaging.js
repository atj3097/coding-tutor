// pages/Messaging.js
import React, { useState } from "react";
import { Box, VStack, Flex } from "@chakra-ui/react";
import VerticalNavBar from "./components/verticalbar";
import MessageInput from "./components/messaginginput";
import MessageThread from "./components/messagethread";
import FileUpload from "./components/fileupload";
import axios from "axios";


const Messaging = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (content, userType) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { content, userType },
    ]);

    if (userType === "user") {
      try {
        const response = await axios.post("https://madrid-api.herokuapp.com/gpt", { prompt: content });
        const gptResponse = response.data.response;
        console.log("GPT Response:", gptResponse);
        sendMessage(gptResponse, "gpt");
      } catch (error) {
        console.error("Error sending message to GPT:", error);
      }
    }
  };

  const handleSend = (message) => {
    sendMessage(message, "user");
  };

  const handleFileUpload = (extractedText) => {
    sendMessage(extractedText, "user");
  };


  return (
    <Flex backgroundColor="black">
      <VerticalNavBar width="200px" />
      <VStack
        width="100%"
        height="100vh"
        alignItems="center"
        justifyContent="space-between"
        p="6"
      >
        <Box width="95%">
        <MessageThread messages={messages} pr="2rem" pl="2rem" />
        </Box>
        <Box width="100%">
          <MessageInput onSend={handleSend} />
        </Box>
      </VStack>
    </Flex>
  );
};

export default Messaging;
