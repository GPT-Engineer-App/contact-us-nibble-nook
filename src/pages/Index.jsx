import React from "react";
import { Box, Container, Stack, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, Icon, useColorModeValue, Image, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Stack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="xl" fontWeight="bold">
            Contact Us
          </Heading>
          <Text mt={2} fontSize="lg">
            Get in touch with Nibble Nook
          </Text>
        </Box>

        <Stack direction={{ base: "column", md: "row" }} spacing={8}>
          {/* Contact Information */}
          <Stack flex={1} color={useColorModeValue("gray.700", "gray.200")}>
            <Box>
              <Icon as={FaMapMarkerAlt} boxSize={5} color="teal.500" />
              <Text mt={2} fontSize="md">
                123 Nibble Street, Foodville, Yumland
              </Text>
            </Box>
            <Box>
              <Icon as={FaPhone} boxSize={5} color="teal.500" />
              <Text mt={2} fontSize="md">
                +1 (555) 123-4567
              </Text>
            </Box>
            <Box>
              <Icon as={FaEnvelope} boxSize={5} color="teal.500" />
              <Text mt={2} fontSize="md">
                contact@nibblenook.com
              </Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1483095348487-53dbf97d8d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWJibGUlMjBub29rfGVufDB8fHx8MTcxMDMwMDczM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Nibble Nook Logo" />
            </Box>
          </Stack>

          {/* Contact Form */}
          <Stack flex={2} spacing={5}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button leftIcon={<FaPaperPlane />} colorScheme="teal" variant="solid">
              Send Message
            </Button>
          </Stack>
        </Stack>

        <Box textAlign="center">
          <Text fontSize="sm">&copy; {new Date().getFullYear()} Nibble Nook. All rights reserved.</Text>
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
