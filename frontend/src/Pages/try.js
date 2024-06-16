import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import TypingEffect from "../components/TypingEffect";

function Trial() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <div className="container">
      <div className="left">
        <img src="/Title_w.png" alt=""></img>
        <TypingEffect />
      </div>
      <div className="right">
        <div className="mobile">
          <img src="/Title_w.png" alt=""></img>
          <TypingEffect />
        </div>
        <Container maxW="xl" centerContent>
          <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
            <Tabs isFitted variant="soft-rounded">
              <TabList mb="1em">
                <Tab>Login</Tab>
                <Tab>Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Signup />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default Trial;
