import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SpecialsSection from "./components/SpecialsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {

  // const [position, setPosition] = useState(window.pageYOffset);
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let moving = window.pageYOffset

  //     setVisible(position > moving);
  //     setPosition(moving)
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return (() => {
  //     window.removeEventListener("scroll", handleScroll);
  //   });
  // });

  return (
    <ChakraProvider>
      <main>
        <Header />
        <HeroSection />
        <SpecialsSection />
        <TestimonialsSection />
        <AboutSection />
        <Footer />
      </main>
  </ChakraProvider>

    // <ChakraProvider theme={theme}>
    //   <Box textAlign="center" fontSize="xl">
    //     <Grid minH="100vh" p={3}>
    //       <ColorModeSwitcher justifySelf="flex-end" />
    //       <VStack spacing={8}>
    //         <Logo h="40vmin" pointerEvents="none" />
    //         <Text>
    //           Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
    //         </Text>
    //         <Link
    //           color="teal.500"
    //           href="https://chakra-ui.com"
    //           fontSize="2xl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn Chakra
    //         </Link>
    //       </VStack>
    //     </Grid>
    //   </Box>
    // </ChakraProvider>
  );
}

export default App;
