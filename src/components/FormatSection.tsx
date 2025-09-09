"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

export default function FormatSection() {
  return (
    <Box bg="white" color="black" py={16}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} mb={4}>
              Database Format:
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
              Every mental bug in the database gets broken down using this
              framework:
            </Text>
          </Box>

          {/* Format Items */}
          <VStack spacing={6} align="start">
            {/* Bug */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">🧠</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  Bug #1 &quot;The exact mental bug we&apos;re tackling&quot;
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                The name and description of the bug that&apos;ll hit you like a
                ton of bricks from the first read.
              </Text>
            </Box>

            {/* How it shows up */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">📡</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  How it shows up in real life
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                Breakdown of common situations where this programming messes
                with your life.
              </Text>
            </Box>

            {/* Related beliefs */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">🧬</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  Related limiting beliefs
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                Additional connected beliefs that are tied to this mental bug.
              </Text>
            </Box>

            {/* How it sounds */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">🗣</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  What this belief sounds like
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                How this programming shows up in everyday conversation with
                people, friends, family, etc.
              </Text>
            </Box>

            {/* Root cause */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">🌳</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  The root of the belief
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                Where this programming came from and how it got installed in
                your head.
              </Text>
            </Box>

            {/* How it limits */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">📉</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  How it&apos;s holding you back
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                We break down situations where you might see yourself reflected.
              </Text>
            </Box>

            {/* New programming */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">💡</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  New programming
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                We do a deep reframe from the old programming to the new. Bonus:
                we install 10 new powerful supporting beliefs.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
