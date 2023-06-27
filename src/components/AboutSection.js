import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import chefsMarioAdrian from "../images/Mario and Adrian A.jpg";

const AboutSection = () => {
    return (
        <Box as="section" py={{base: '16'}} px="16px">
            <Box max="4xl" margin="0 auto">
                <Flex justifyContent="space-between" mt="40px" mb="90px" gap="40px">
                    <Box>
                        <Heading variant="primary" alignItems="center">Little Lemon</Heading>
                        <Heading variant="primary" size="lg" pb="10px">Chicago</Heading>
                        <Text fontSize="md" width="39ch">
                        Founded by Chefs Mario and Adrian, Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                        </Text>
                    </Box>
                    <Box>
                        <Image src={chefsMarioAdrian} rounded="16px" boxShadow='lg' maxW="370px" zIndex="1" mt="120px" ml="-120" position="absolute" />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default AboutSection;