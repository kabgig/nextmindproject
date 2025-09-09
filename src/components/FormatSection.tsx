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
              Формат базы:
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
              Каждый баг внутри базы разбирается по следующему формату:
            </Text>
          </Box>

          {/* Format Items */}
          <VStack spacing={6} align="start">
            {/* Баг */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">🧠</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  Баг №1 «Какой именно баг мы разбираем»
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                Название и описание бага, которое откликнется в тебе с первого
                прочтения.
              </Text>
            </Box>

            {/* Как проявляется в жизни */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">📡</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  Как проявляется в жизни
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                Разбор распространенных ситуаций, как эта прошивка проявляется в
                твоей жизни.
              </Text>
            </Box>

            {/* Сопутствующие убеждения */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">🧬</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  Сопутствующие ограничивающие убеждения
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                Дополнительные смежные убеждения, которые связанный с этим
                багом.
              </Text>
            </Box>

            {/* Как говорит это убеждение */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">🗣</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  Как говорит это убеждение
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                Как данная прошивка звучит в повседневной речи у людей, друзей,
                родственников и т.п.
              </Text>
            </Box>

            {/* Глубинный корень */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">🌳</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  Глубинный корень убеждения
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                Откуда взялась прошивка и как была в тебя загружена.
              </Text>
            </Box>

            {/* Как ограничивает */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">📉</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  Как оно тебя ограничивает
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                Разбираем ситуации в которых ты можешь увидеть отражение себя.
              </Text>
            </Box>

            {/* Новая прошивка */}
            <Box>
              <HStack align="start" spacing={4} mb={3}>
                <Text fontSize="2xl">💡</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  Новая прошивка
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                pl={12}
              >
                Делаем глубокий рефрейминг старой прошивки на новую. Бонусом
                встраиваем в себя +10 новых мощных поддерживающих прошивок.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
