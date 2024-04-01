import React from "react";
import FullScreenSection from "./FullScreenSection";
import {Center, Heading, Text, VStack} from "@chakra-ui/react";

export default function IntroSection() {
    return (
        <FullScreenSection className="IntroSection" p={8} spacing={8}>
            <Center>
                <VStack>
                    <Heading as="h1" id="intro-section">Kidoni Software</Heading>
                    <Text>A Software Consultancy</Text>
                </VStack>
            </Center>
        </FullScreenSection>
    );
};