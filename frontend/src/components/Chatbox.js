import { Box } from "@chakra-ui/layout";
import "./styles.css";
import { ChatState } from "../Context/ChatProvider";
import SingleChat from "./SingleChat.js";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      maxHeight="100%"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
