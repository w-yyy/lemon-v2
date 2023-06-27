import React from "react";
import {
    Box,
    HStack,
    VStack,
    Heading,
    Text,
    Image,
} from "@chakra-ui/react";
import heroImage from '../images/restauranfood.jpg';

const HeroSection = () => {
    return (
        <Box w='full' bg='#495E57'>
            <HStack>
                <VStack>
                    <Heading as='h1' size='2xl'>Little Lemon</Heading>
                    <Heading as='h2' size='xl'>Chicago</Heading>
                    <Text as='h3' size='lg'>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                </VStack>
                <Image
                    boxSize='300px'
                    src={heroImage}
                    alt='A plate of fresh bruschetta'
                    borderRadius={4}
                />
            </HStack>
        </Box>
    );
};

export default HeroSection;