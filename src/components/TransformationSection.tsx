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
    <Box bg="white" color="black" py={16} mt={-20}>
      <Container maxW="container.lg">
        <VStack spacing={12} align="stretch">
          {/* Circular Image */}
          <Center>
            <Box
              borderRadius="full"
              overflow="hidden"
              boxSize={{ base: "180px", md: "220px" }}
              // mb={12}
              mt={-30}
              style={{
                transform: "scale(1.2)",
                objectPosition: "center center",
              }}
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
          <VStack spacing={8} align="stretch" maxW="800px" mx="auto">
            {/* Title */}
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="left"
              fontWeight="normal"
            >
              &quot;Next Mind Project&quot; is your personal transformation
              toolkit
            </Heading>

            {/* Features List */}
            <VStack spacing={4} align="stretch">
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                ⚙️ 600+ of the most powerful limiting beliefs documented.
              </Text>

              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                🧠 Covers all the big areas: identity, money, business, sales,
                relationships, and life.
              </Text>

              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                📁 Everything is organized and presented in a straight-up, no-BS
                way.
              </Text>
            </VStack>

            {/* Description */}
            <VStack spacing={4} align="stretch">
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
              <Heading
                as="h3"
                fontSize={{ base: "lg", md: "xl" }}
                mb={6}
                textAlign="left"
              >
                Here&apos;s what you&apos;ll get:
              </Heading>

              <VStack spacing={4} align="stretch">
                <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                  🎯 Quickly identify and shift your biggest mental blocks.
                </Text>

                <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                  💡 Finally understand why you&apos;re stuck (with money,
                  business, life, relationships).
                </Text>

                <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                  🚀 Save time and money on therapists and endless
                  self-analysis.
                </Text>

                <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                  🔧 Stop depending on others for feedback about your own
                  growth.
                </Text>
              </VStack>
            </Box>

            {/* Conclusion */}
            <Text
              fontSize={{ base: "md", md: "lg" }}
              lineHeight={1.6}
              fontWeight="semibold"
              textAlign="left"
            >
              This isn&apos;t motivation. This is mental system cleanup.
            </Text>

            {/* Brain Icon */}
            <Center>
              <Box
                borderRadius="full"
                overflow="hidden"
                boxSize={{ base: "180px", md: "220px" }}
                shadow="lg"
                mt={12}
                mb={-14}
              >
                <Image
                  src="/234.JPG"
                  alt="Next Mind Project"
                  w="full"
                  h="full"
                  objectFit="cover"
                  style={{
                    objectPosition: "20% 10%",
                  }}
                />
              </Box>
            </Center>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
