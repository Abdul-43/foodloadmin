import { Box, Spacer, Flex } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
function NavigationBar() {
  return (
    <Box bg="green.300" w="100%" p={3} color="white">
      <Flex>
        <Box>Foodlo admin</Box>
        <Spacer />
        <Spacer />
        <Box >

          <AvatarGroup spacing="1rem">

            <Avatar bg="teal.500" />
          </AvatarGroup>
        </Box>
      </Flex>
    </Box>
  );
}

export default NavigationBar;
