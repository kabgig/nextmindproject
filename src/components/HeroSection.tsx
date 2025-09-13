"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Avatar,
  Center,
  Image,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box bg="white" color="black" py={16}>
      <Container maxW="container.lg">
        <VStack spacing={12} align="stretch">
          {/* Header */}
          <VStack spacing={6} align="center">
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              textAlign="center"
            >
              Next Mind Project
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="center"
              maxW="600px"
            >
              New Programming → New Strategies → New Reality
            </Text>
          </VStack>

          {/* Profile Image */}
          <Center>
            <Box
              borderRadius="full"
              overflow="hidden"
              boxSize={{ base: "200px", md: "250px" }}
              shadow="lg"
            >
              <Image
                src="/123.JPG"
                alt="Next Mind Project"
                w="full"
                h="full"
                objectFit="cover"
                style={{
                  transform: "scale(1.2)",
                  objectPosition: "center center",
                }}
              />
            </Box>
          </Center>

          {/* Main Content */}
          <VStack spacing={8} align="stretch" maxW="800px" mx="auto">
            {/* Introduction */}
            <Box>
              <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} mb={6}>
                It&apos;s Time to Level Up
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.7}>
                &quot;Next Mind Project&quot; is the ultimate database of
                limiting beliefs and mental patterns that are keeping you stuck,
                broke, and playing small in life.
              </Text>
            </Box>

            {/* Why Important */}
            <Box>
              <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                Why This Matters
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.7} mb={6}>
                Your real problems aren&apos;t about discipline, motivation, or
                taking action— it&apos;s the mental programming running in the
                background that you don&apos;t even realize is there.
              </Text>
            </Box>

            {/* Examples List */}
            <VStack spacing={3} align="stretch">
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontStyle="italic"
                lineHeight={1.6}
              >
                Being rich is dangerous.
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontStyle="italic"
                lineHeight={1.6}
              >
                If I didn&apos;t do it myself, I&apos;m nobody.
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontStyle="italic"
                lineHeight={1.6}
              >
                You can&apos;t make good money honestly.
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontStyle="italic"
                lineHeight={1.6}
              >
                Money and spirituality don&apos;t mix.
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontStyle="italic"
                lineHeight={1.6}
              >
                If you get something good, it&apos;ll be taken away.
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontStyle="italic"
                lineHeight={1.6}
              >
                I don&apos;t deserve to have it easy.
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontStyle="italic"
                lineHeight={1.6}
              >
                Easy money doesn&apos;t exist.
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontStyle="italic"
                lineHeight={1.6}
              >
                Women only want your money.
              </Text>
            </VStack>

            {/* Conclusion */}
            <VStack spacing={4} align="stretch">
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight={1.7}
                fontWeight="semibold"
              >
                These deep-seated programs are running your decisions and
                behavior on autopilot, and you don&apos;t even see it happening.
              </Text>

              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.7}>
                They&apos;re draining your money, joy, energy, freedom, and
                time.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
