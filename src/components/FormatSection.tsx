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

export default function FormatSection() {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({
    0: true // First item open by default
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
              mb={4}
              textAlign="left"
            >
              Database Format:
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              mb={8}
              textAlign="left"
              lineHeight={1.6}
            >
              Every mental bug in the database gets broken down using this
              framework:
            </Text>
          </VStack>

          {/* Format Items */}
          <VStack spacing={6} align="stretch" maxW="800px" mx="auto">
            {/* Bug */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="xl">🧠</Text>
                <HStack justify="space-between" w="full" align="center">
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                    Bug #1 &quot;The exact mental bug we&apos;re tackling&quot;
                  </Text>
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
                <HStack align="start" spacing={4}>
                  <Text fontSize="xl" opacity={0}>
                    🧠
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    lineHeight={1.6}
                  >
                    The name and description of the bug that&apos;ll hit you
                    like a ton of bricks from the first read.
                  </Text>
                </HStack>
              )}
            </Box>

            {/* How it shows up */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="xl">📡</Text>
                <HStack justify="space-between" w="full" align="center">
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                    How it shows up in real life
                  </Text>
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
                <HStack align="start" spacing={4}>
                  <Text fontSize="xl" opacity={0}>
                    📡
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    lineHeight={1.6}
                  >
                    Breakdown of common situations where this programming messes
                    with your life.
                  </Text>
                </HStack>
              )}
            </Box>

            {/* Related beliefs */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="xl">🧬</Text>
                <HStack justify="space-between" w="full" align="center">
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                    Related limiting beliefs
                  </Text>
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
                <HStack align="start" spacing={4}>
                  <Text fontSize="xl" opacity={0}>
                    🧬
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    lineHeight={1.6}
                  >
                    Additional connected beliefs that are tied to this mental
                    bug.
                  </Text>
                </HStack>
              )}
            </Box>

            {/* How it sounds */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="xl">🗣</Text>
                <HStack justify="space-between" w="full" align="center">
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                    What this belief sounds like
                  </Text>
                  <IconButton
                    aria-label="Toggle description"
                    icon={
                      <Text fontSize="lg">{expandedItems[3] ? "-" : "+"}</Text>
                    }
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleItem(3)}
                  />
                </HStack>
              </HStack>
              {expandedItems[3] && (
                <HStack align="start" spacing={4}>
                  <Text fontSize="xl" opacity={0}>
                    🗣
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    lineHeight={1.6}
                  >
                    How this programming shows up in everyday conversation with
                    people, friends, family, etc.
                  </Text>
                </HStack>
              )}
            </Box>

            {/* Root cause */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="xl">🌳</Text>
                <HStack justify="space-between" w="full" align="center">
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                    The root of the belief
                  </Text>
                  <IconButton
                    aria-label="Toggle description"
                    icon={
                      <Text fontSize="lg">{expandedItems[4] ? "-" : "+"}</Text>
                    }
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleItem(4)}
                  />
                </HStack>
              </HStack>
              {expandedItems[4] && (
                <HStack align="start" spacing={4}>
                  <Text fontSize="xl" opacity={0}>
                    🌳
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    lineHeight={1.6}
                  >
                    Where this programming came from and how it got installed in
                    your head.
                  </Text>
                </HStack>
              )}
            </Box>

            {/* How it limits */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="xl">📉</Text>
                <HStack justify="space-between" w="full" align="center">
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                    How it&apos;s holding you back
                  </Text>
                  <IconButton
                    aria-label="Toggle description"
                    icon={
                      <Text fontSize="lg">{expandedItems[5] ? "-" : "+"}</Text>
                    }
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleItem(5)}
                  />
                </HStack>
              </HStack>
              {expandedItems[5] && (
                <HStack align="start" spacing={4}>
                  <Text fontSize="xl" opacity={0}>
                    📉
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    lineHeight={1.6}
                  >
                    We break down situations where you might see yourself
                    reflected.
                  </Text>
                </HStack>
              )}
            </Box>

            {/* New programming */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="xl">💡</Text>
                <HStack justify="space-between" w="full" align="center">
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                    New programming
                  </Text>
                  <IconButton
                    aria-label="Toggle description"
                    icon={
                      <Text fontSize="lg">{expandedItems[6] ? "-" : "+"}</Text>
                    }
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleItem(6)}
                  />
                </HStack>
              </HStack>
              {expandedItems[6] && (
                <HStack align="start" spacing={4}>
                  <Text fontSize="xl" opacity={0}>
                    💡
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    lineHeight={1.6}
                  >
                    We do a deep reframe from the old programming to the new.
                    Bonus: we install 10 new powerful supporting beliefs.
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
