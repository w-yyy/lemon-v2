import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
    Box,
    Heading,
} from "@chakra-ui/react";
import Card from "./Card";

const specials = [
    {
        title: "Greek Salad",
        price: "$11.99",
        description: "The famous Greek Salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        getImageSrc: () => require("../images/greek salad.jpg"),
        imgAlt: "Greek salad",
    },
    {
        title: "Bruschetta",
        price: "$6.49",
        description: "Our Bruschetta is made from grilled bread that has beens meared with garlic paste, seasoned with salt and olive oil, then topped with fresh-cut tomatoes.",
        getImageSrc: () => require("../images/bruchetta.jpg"),
        imgAlt: "Bruschetta",
      },
      {
        title: "Lemon Dessert",
        price: "$6.49",
        description: "Our made-from-scratch Lemon Dessert comes straight from grandma's recipe book. Each ingredient has been locally sourced and is as authentic as one can imagine.",
        getImageSrc: () => require("../images/lemon dessert.jpg"),
        imgAlt: "Lemon dessert"
      },
];

const SpecialsSection = () => {
    return (
        <FullScreenSection
            backgroundColor="#FFFFFF"
            px="15rem"
            py="5rem"
            alignItems="flex-start"
            spacing={8}
        >
            <Heading as="h1" id="specials-section">
                Our Weekly Specials
            </Heading>
            <Box
                display="grid"
                gridTemplateColumns="repeat(3,minmax(0,1fr))"
                gridGap={8}
            >
                {specials.map((special) => (
                    <Card
                        key={special.title}
                        imageSrc={special.getImageSrc()}
                        title={special.title}
                        price={special.price}
                        description={special.description}
                    />
                ))}
            </Box>
        </FullScreenSection>
    );
};

export default SpecialsSection;