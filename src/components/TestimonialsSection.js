import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
    Flex, Heading, Text
} from "@chakra-ui/react";
import Card from "./Card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserLarge } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
    {
        name: "Name",
        description: "Aliquam sit amet bibendum mi. Vestibulum at eros risus. Nam consectetur eleifend suscipit. Aenean congue rutrum ultrices.",
        starRating: 5,
        // avatar: faUserLarge,
        imageAlt: "Customer avatar",
    },
    {
        name: "Name",
        description: "Aliquam sit amet bibendum mi. Vestibulum at eros risus. Nam consectetur eleifend suscipit. Aenean congue rutrum ultrices.",
        starRating: 5,
        // avatar: faUserLarge,
        imageAlt: "Customer avatar",
    },
    {
        name: "Name",
        description: "Aliquam sit amet bibendum mi. Vestibulum at eros risus. Nam consectetur eleifend suscipit. Aenean congue rutrum ultrices.",
        starRating: 4,
        // avatar: faUserLarge,
        imageAlt: "Customer avatar",
    },
    {
        name: "Name",
        description: "Aliquam sit amet bibendum mi. Vestibulum at eros risus. Nam consectetur eleifend suscipit. Aenean congue rutrum ultrices.",
        starRating: 5,
        // avatar: faUserLarge,
        imageAlt: "Customer avatar",
    },
];

const TestimonialsSection = () => {
    return (
        <FullScreenSection
            backgroundColor="#495E57"
            px="15rem"
            py="5rem"
            alignItems="flex-start"
            spacing={8}
        >
            <Heading as="h1" id="testimonials-section">
                Testimonials
            </Heading>
            <Flex
                display="grid"
                gridTemplateColumns="repeat(4,minmax(0,1fr))"
                gridGap={8}
                wrap
            >
                {testimonials.map((testimonial) => (
                    <Card
                        key={testimonial.name}
                        title={testimonial.name}
                        star={testimonial.starRating}
                        description={testimonial.description}
                    />
                ))}
            </Flex>
        </FullScreenSection>
    );
};

export default TestimonialsSection;