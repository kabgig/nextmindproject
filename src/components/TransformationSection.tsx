"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Center,
} from "@chakra-ui/react";

export default function TransformationSection() {
  return (
    <Box bg="white" color="black" py={1}>
      <Container maxW="container.lg">
        <VStack spacing={12} align="center">
          {/* Circular Image */}
          <Center>
            <Box
              borderRadius="full"
              overflow="hidden"
              boxSize={{ base: "200px", md: "300px" }}
            >
              <Image
                src="/icon.webp"
                alt="Next Mind Project"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Center>

          {/* Main Content */}
          <VStack spacing={8} align="stretch" maxW="800px">
            {/* Title */}
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="center"
              fontWeight="normal"
            >
              &quot;Next Mind Project&quot; is your personal transformation
              toolkit
            </Heading>

            {/* Features List */}
            <VStack spacing={4} align="start">
              <HStack align="start" spacing={4}>
                <Text fontSize="xl">⚙️</Text>
                <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                  600+ of the most powerful limiting beliefs documented.
                </Text>
              </HStack>

              <HStack align="start" spacing={4}>
                <Text fontSize="xl">🧠</Text>
                <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                  Covers all the big areas: identity, money, business, sales,
                  relationships, and life.
                </Text>
              </HStack>

              <HStack align="start" spacing={4}>
                <Text fontSize="xl">📁</Text>
                <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                  Everything is organized and presented in a straight-up, no-BS
                  way.
                </Text>
              </HStack>
            </VStack>

            {/* Description */}
            <VStack spacing={4} align="start">
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                You study the programming—and finally see exactly where your
                roadblocks are hiding.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                No therapy. No fluff. No drama.
              </Text>
            </VStack>

            {/* What You Get */}
            <Box>
              <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} mb={6}>
                Here&apos;s what you&apos;ll get:
              </Heading>

              <VStack spacing={4} align="start">
                <HStack align="start" spacing={4}>
                  <Text fontSize="xl">🎯</Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                    Quickly identify and shift your biggest mental blocks.
                  </Text>
                </HStack>

                <HStack align="start" spacing={4}>
                  <Text fontSize="xl">💡</Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                    Finally understand why you&apos;re stuck (with money,
                    business, life, relationships).
                  </Text>
                </HStack>

                <HStack align="start" spacing={4}>
                  <Text fontSize="xl">🚀</Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                    Save time and money on therapists and endless self-analysis.
                  </Text>
                </HStack>

                <HStack align="start" spacing={4}>
                  <Text fontSize="xl">🔧</Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                    Stop depending on others for feedback about your own growth.
                  </Text>
                </HStack>
              </VStack>
            </Box>

            {/* Conclusion */}
            <Text
              fontSize={{ base: "md", md: "lg" }}
              lineHeight={1.6}
              fontWeight="semibold"
              textAlign="center"
            >
              This isn&apos;t motivation. This is mental system cleanup.
            </Text>

            {/* Brain Icon */}
            <Center>
              <Box
                borderRadius="full"
                overflow="hidden"
                boxSize={{ base: "120px", md: "150px" }}
                shadow="lg"
              >
                <Image
                  src="/icon.webp"
                  alt="Next Mind Project"
                  w="full"
                  h="full"
                  objectFit="cover"
                />
              </Box>
            </Center>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
