"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

export default function InsideSection() {
  return (
    <Box bg="white" color="black" py={16}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <VStack spacing={4} align="stretch" maxW="800px" mx="auto">
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="left"
              mb={8}
            >
              Here&apos;s what&apos;s waiting for you inside:
            </Heading>
          </VStack>

          {/* Features List */}
          <VStack spacing={8} align="stretch" maxW="800px" mx="auto">
            <HStack align="start" spacing={6}>
              <Box fontSize="3xl" mt={1}>
                💾
              </Box>
              <Box>
                <Heading as="h4" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                  The ultimate database of limiting beliefs
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight={1.6}
                  color="gray.700"
                >
                  A constantly updated list of mental patterns that keep you
                  stuck, broke, and unable to reach your full potential.
                </Text>
              </Box>
            </HStack>

            <HStack align="start" spacing={6}>
              <Box fontSize="3xl" mt={1}>
                🧠
              </Box>
              <Box>
                <Heading as="h4" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                  Straight-talk breakdown of every belief
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight={1.6}
                  color="gray.700"
                >
                  No theory or motivational BS. Just the real deal: where it
                  came from, how it works, how it&apos;s limiting you, and what
                  it looks like in your daily life.
                </Text>
              </Box>
            </HStack>

            <HStack align="start" spacing={6}>
              <Box fontSize="3xl" mt={1}>
                🔧
              </Box>
              <Box>
                <Heading as="h4" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                  Quick mental reprogramming methods
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight={1.6}
                  color="gray.700"
                >
                  Every belief comes with a specific transformation method. So
                  you can stop just understanding and start actually changing.
                </Text>
              </Box>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
