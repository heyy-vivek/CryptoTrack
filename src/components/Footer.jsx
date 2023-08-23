import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]}>
        <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
            <VStack w={"full"} alignItems={["center","flex-start"]}>
                <Text fontWeight={"bold"}>
                    About
                </Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>
                    Your personal crypto tracker to track every details of wide range of crypto currency.
                </Text>

            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4", "0"]} />
                <Text>Vivek Upadhyay</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer