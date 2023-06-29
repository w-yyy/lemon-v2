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
                <Box width='50%' pl='15rem'>
                    <VStack align='left'>
                        <Heading as='h1' size='2xl' textColor='#F4CE14'>Little Lemon</Heading>
                        <Heading as='h2' size='xl' textColor='#FFFFFF'>Chicago</Heading>
                        <Text as='h3' size='lg' textColor='#FFFFFF' display='-ms-inline-flexbox'>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                    </VStack>
                </Box>
                <Image
                    position='relative'
                    left='10rem'
                    right='20rem'
                    top='3rem'
                    boxSize='300px'
                    objectFit='cover'
                    width='40%'
                    src={heroImage}
                    alt='A plate of fresh bruschetta'
                    borderRadius={16}
                    pr='15rem'
                    py=''
                />
            </HStack>
        </Box>
    );
};

export default HeroSection;