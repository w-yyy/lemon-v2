import React from 'react';
import { Box, HStack } from "@chakra-ui/react";

const navLinks = [
    {name: "Home", url: "/home"},
    {name: "About", url: "/about"},
    {name: "Menu", url: "/menu"},
    {name: "Reservations", url: "/reservation"},
    {name: "Order Online", url: "/order"},
    {name: "Login", url: "login"}
]

const Header = (props) => {
    const handleClick = (e, anchor) => {
        e.preventDefault();
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        transform="auto"
        translateY={!props.show ? -200 : 0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#f5f5f5"
        style={{zIndex:1}}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <nav>
                    <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                    >
                    </HStack>
                </nav>
                <nav>
                    <HStack>
                        {navLinks.map(navLink => {
                            return (
                                <a href={navLink.url} key={navLink.url}>{navLink.name}</a>
                            )
                        })}
                        {/* <a href="#home" onClick={(event) => handleClick(event, "home")}>Home</a> */}
                    </HStack>
                </nav>
            </Box>
        </Box>
    );
};

export default Header;