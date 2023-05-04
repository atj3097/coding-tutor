// components/MessageInput.js
import React, { useState } from "react";
import { Box, InputGroup, Input,  InputRightAddon, IconButton, InputLeftElement } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <Box paddingBottom="2rem" pb="5rem" pr="2rem">
      <InputGroup size="md" width="100%">
        <Input
        width="50%"
          type="text"
          placeholder="Type your message..."
          ml="auto"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <InputRightAddon>
          <IconButton
            h="1.75rem"
            size="sm"
            bg="#4844ec"
            color="white"
            icon={<FaPaperPlane />}
            onClick={handleSend}
          />
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

export default MessageInput;
