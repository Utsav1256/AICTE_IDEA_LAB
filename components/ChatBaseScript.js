import React, { useEffect } from "react";
import { embeddedChatbotConfig } from "./chatbotConfig"; // Import the configuration

const ChatBaseScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.chatbotId = "rDVPHVQHuS0SxzmBY9nH_";
    script.domain = "www.chatbase.co";
    script.defer = true;

    document.head.appendChild(script);

    return () => {
      // Clean up by removing the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return null; // You don't need to render anything for the script inclusion
};

export default ChatBaseScript;
