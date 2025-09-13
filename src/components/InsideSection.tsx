"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";

export default function InsideSection() {
  const [expandedItems, setExpandedItems] = useState<{
    [key: number]: boolean;
  }>({
    0: true, // First item open by default
  });

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
            <Box>
              <HStack align="start" spacing={4}>
                <Text fontSize="xl">💾</Text>
                <HStack justify="space-between" w="full" align="center">
                  <Heading as="h4" fontSize={{ base: "lg", md: "xl" }}>
                    The ultimate database of limiting beliefs
                  </Heading>
                  <IconButton
                    aria-label="Toggle description"
                    icon={
                      <Text fontSize="lg">{expandedItems[0] ? "-" : "+"}</Text>
                    }
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleItem(0)}
                  />
                </HStack>
              </HStack>
              {expandedItems[0] && (
                <HStack align="start" spacing={4} mt={4}>
                  <Text fontSize="xl" opacity={0}>
                    💾
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight={1.6}
                    color="gray.700"
                  >
                    A constantly updated list of mental patterns that keep you
                    stuck, broke, and unable to reach your full potential.
                  </Text>
                </HStack>
              )}
            </Box>

            <Box>
              <HStack align="start" spacing={4}>
                <Text fontSize="xl">🧠</Text>
                <HStack justify="space-between" w="full" align="center">
                  <Heading as="h4" fontSize={{ base: "lg", md: "xl" }}>
                    Straight-talk breakdown of every belief
                  </Heading>
                  <IconButton
                    aria-label="Toggle description"
                    icon={
                      <Text fontSize="lg">{expandedItems[1] ? "-" : "+"}</Text>
                    }
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleItem(1)}
                  />
                </HStack>
              </HStack>
              {expandedItems[1] && (
                <HStack align="start" spacing={4} mt={4}>
                  <Text fontSize="xl" opacity={0}>
                    🧠
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight={1.6}
                    color="gray.700"
                  >
                    No theory or motivational BS. Just the real deal: where it
                    came from, how it works, how it&apos;s limiting you, and
                    what it looks like in your daily life.
                  </Text>
                </HStack>
              )}
            </Box>

            <Box>
              <HStack align="start" spacing={4}>
                <Text fontSize="xl">🔧</Text>
                <HStack justify="space-between" w="full" align="center">
                  <Heading as="h4" fontSize={{ base: "lg", md: "xl" }}>
                    Quick mental reprogramming methods
                  </Heading>
                  <IconButton
                    aria-label="Toggle description"
                    icon={
                      <Text fontSize="lg">{expandedItems[2] ? "-" : "+"}</Text>
                    }
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleItem(2)}
                  />
                </HStack>
              </HStack>
              {expandedItems[2] && (
                <HStack align="start" spacing={4} mt={4}>
                  <Text fontSize="xl" opacity={0}>
                    🔧
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight={1.6}
                    color="gray.700"
                  >
                    Every belief comes with a specific transformation method. So
                    you can stop just understanding and start actually changing.
                  </Text>
                </HStack>
              )}
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
