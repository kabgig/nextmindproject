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
          <Heading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="center"
            mb={8}
          >
            Внутри тебя ждет:
          </Heading>

          {/* Features List */}
          <VStack spacing={8} align="start">
            <HStack align="start" spacing={6}>
              <Box fontSize="3xl" mt={1}>
                💾
              </Box>
              <Box>
                <Heading as="h4" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                  База самых сильных ограничивающих убеждений
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight={1.6}
                  color="gray.700"
                >
                  Постоянно пополняемый список установок, которые мешают тебе
                  быть свободным, достигать больше, реализовывать свой
                  потенциал.
                </Text>
              </Box>
            </HStack>

            <HStack align="start" spacing={6}>
              <Box fontSize="3xl" mt={1}>
                🧠
              </Box>
              <Box>
                <Heading as="h4" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                  Разбор каждого убеждения — простым и точным языком
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight={1.6}
                  color="gray.700"
                >
                  Без теории и мотивации. Только суть: как оно появилось, как
                  работает, чем ограничивает и как проявляется в твоей жизни.
                </Text>
              </Box>
            </HStack>

            <HStack align="start" spacing={6}>
              <Box fontSize="3xl" mt={1}>
                🔧
              </Box>
              <Box>
                <Heading as="h4" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                  Быстрая схема перепрошивки
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight={1.6}
                  color="gray.700"
                >
                  Каждому убеждению — конкретный способ трансформации. Чтобы ты
                  мог не просто понять, а почувствовать и поменять.
                </Text>
              </Box>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
