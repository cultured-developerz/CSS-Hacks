import React from 'react'
import {Container, Box, Text, Tabs, TabList,TabPanel,TabPanels,Tab} from '@chakra-ui/react'
import LLogin from '../components/Authentication/LLogin';
import SSignUp from '../components/Authentication/SSignUp';

const LogInpage = () => {
  return (
    <Container maxW="x1" centerContent>
      <Box
      opacity="90%"
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="30%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borederWidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="Work sans"
          color="black"
          align="center"
        >
          Welcome !
        </Text>
      </Box>
      <Box opacity="95%" bg="white" w="50%" p={4} borderRadius="lg" color = "black "borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab width = "50%">Login</Tab>
            <Tab width = "50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LLogin />
            </TabPanel>
            <TabPanel>
              <SSignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default LogInpage