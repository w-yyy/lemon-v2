import React from "react";
import { HStack, VStack, Image, Box, Heading, Text } from "@chakra-ui/react";

const Card = ({ title, price, description, imageSrc, imgAlt }) => {
    return (
        <HStack>
            <Box>
                <VStack>
                    <Image src={imageSrc} alt={imgAlt} borderRadius={20} />
                    <Heading as="h2" size="md" pl={15} pr="15">{title}{price}</Heading>
                    <Text as="h3" pl={15} pr={15}>{description}</Text>
                    <Text as="h3" padding="15px" fontWeight="semiBold"><p>add button</p></Text>
                </VStack>
            </Box>
        </HStack>
    );
    return null;
};

export default Card;