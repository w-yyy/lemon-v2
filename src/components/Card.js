import React from "react";
import { HStack, VStack, Image, Box, Heading, Text } from "@chakra-ui/react";

const Card = ({ title, price, description, imageSrc, imgAlt }) => {
    return (
        <HStack>
            <Box>
                <VStack alignItems="left" background="#E4E0E0" borderRadius={16}>
                    <Image src={imageSrc} alt={imgAlt} borderTopRadius={16} />
                    <Heading as="h2" size="md" pl={15} pr={15}>{title} {price}</Heading>
                    <Text as="h3" pl={15} pr={15}>{description}</Text>
                    <Text as="h3" padding="15px" fontWeight="semiBold"><p>add to cart</p></Text>
                </VStack>
            </Box>
        </HStack>
    );
    return null;
};

export default Card;