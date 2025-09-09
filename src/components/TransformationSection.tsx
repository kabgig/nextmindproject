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
    <Box bg="white" color="black" py={16}>
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
                src="/api/placeholder/300/300"
                alt="Museum visitor"
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
              «Исходный код» — это личный инструмент трансформации
            </Heading>

            {/* Features List */}
            <VStack spacing={4} align="start">
              <HStack align="start" spacing={4}>
                <Text fontSize="xl">⚙️</Text>
                <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                  Более 600+ ограничивающих убеждений.
                </Text>
              </HStack>

              <HStack align="start" spacing={4}>
                <Text fontSize="xl">🧠</Text>
                <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                  Разобраны самые важные темы: личность, деньги, бизнес,
                  продажи, отношения, жизнь.
                </Text>
              </HStack>

              <HStack align="start" spacing={4}>
                <Text fontSize="xl">📁</Text>
                <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                  Всё структурировано и подаётся просто и по-взрослому.
                </Text>
              </HStack>
            </VStack>

            {/* Description */}
            <VStack spacing={4} align="start">
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                Ты изучаешь прошивки — и понимаешь, где именно в тебе зарыта
                проблема.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                Без терапии. Без воды. Без драм.
              </Text>
            </VStack>

            {/* What You Get */}
            <Box>
              <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} mb={6}>
                Что ты получишь:
              </Heading>

              <VStack spacing={4} align="start">
                <HStack align="start" spacing={4}>
                  <Text fontSize="xl">🎯</Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                    Быстро находишь и меняешь свои ключевые ограничения.
                  </Text>
                </HStack>

                <HStack align="start" spacing={4}>
                  <Text fontSize="xl">💡</Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                    Осознаёшь, почему застрял (в деньгах, в бизнесе, в жизни, в
                    отношениях).
                  </Text>
                </HStack>

                <HStack align="start" spacing={4}>
                  <Text fontSize="xl">🚀</Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                    Экономишь время и деньги на психологах и ковырянии в себе.
                  </Text>
                </HStack>

                <HStack align="start" spacing={4}>
                  <Text fontSize="xl">🔧</Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
                    Больше не зависишь от чужой обратной связи для собственного
                    развития.
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
              Это не мотивация. Это — чистка системы мышления.
            </Text>

            {/* Brain Icon */}
            <Center>
              <Box
                borderRadius="full"
                bg="black"
                p={8}
                boxSize={{ base: "120px", md: "150px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize={{ base: "3xl", md: "4xl" }} color="cyan.400">
                  🧠
                </Text>
              </Box>
            </Center>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
