"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Flex,
  SimpleGrid,
  Link,
  Icon,
  Divider,
} from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import TransformationSection from "../components/TransformationSection";
import FormatSection from "../components/FormatSection";
import InsideSection from "../components/InsideSection";

export default function Home() {
  return (
    <Box bg="white" color="gray.800" minH="100vh">
      {/* Hero Section */}
      <HeroSection />

      {/* Transformation Section */}
      <TransformationSection />

      {/* Format Section */}
      <FormatSection />

      {/* Inside Section */}
      <InsideSection />

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={12} align="stretch">
          {/* Pricing Buttons */}
          <VStack spacing={4} w="full" maxW="600px" mx="auto">
            <Button
              size="lg"
              colorScheme="blue"
              w="full"
              py={8}
              fontSize="lg"
              fontWeight="bold"
            >
              Подключиться из России с оплатой в рублях 10 000₽ в месяц
            </Button>

            <Button
              size="lg"
              colorScheme="green"
              w="full"
              py={8}
              fontSize="lg"
              fontWeight="bold"
            >
              Подключиться из любой точки Мира в Euro 110€ в месяц
            </Button>
          </VStack>

          {/* Terms */}
          <Box textAlign="center" fontSize="sm" color="gray.600">
            <Text mb={4}>
              Переходя на страницу оплаты, вы соглашаетесь{" "}
              <Link color="blue.500" href="#" textDecoration="underline">
                с офертой
              </Link>{" "}
              и даете согласие на обработку{" "}
              <Link color="blue.500" href="#" textDecoration="underline">
                персональных данных
              </Link>{" "}
              в соответствии с{" "}
              <Link color="blue.500" href="#" textDecoration="underline">
                политикой конфиденциальности
              </Link>
            </Text>

            <Text mb={4}>
              Выберите свою страну, валюту и следуйте инструкциям Telegram-бота.
              Доступ к каналу и всем материалам откроется автоматически после
              оплаты.
            </Text>

            <Text>
              По важным вопросам можно связаться с менеджером проекта{" "}
              <Link color="blue.500" href="#" textDecoration="underline">
                @victoria_vish
              </Link>
            </Text>
          </Box>

          {/* Social Links */}
          <Box textAlign="center">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Соц. сети
            </Text>
            <HStack justify="center" spacing={6}>
              <Link color="blue.500" href="#" fontSize="lg">
                YouTube
              </Link>
              <Link color="blue.500" href="#" fontSize="lg">
                Telegram
              </Link>
            </HStack>
          </Box>

          <Divider />

          {/* Footer */}
          <Box textAlign="center" fontSize="sm" color="gray.600">
            <VStack spacing={3}>
              <Text>
                ИП Вишняков Владислав Александрович
                <br />
                ИНН 590425932875
                <br />
                ОГРНИП 324237500017232
              </Text>

              <HStack justify="center" spacing={4} flexWrap="wrap">
                <Link color="blue.500" href="#" textDecoration="underline">
                  Договор оферты
                </Link>
                <Link color="blue.500" href="#" textDecoration="underline">
                  Политика конфиденциальности
                </Link>
                <Link color="blue.500" href="#" textDecoration="underline">
                  Обработка персональных данных
                </Link>
              </HStack>

              <HStack justify="center" spacing={4} flexWrap="wrap">
                <Link color="blue.500" href="#" textDecoration="underline">
                  Отмена подписки для России
                </Link>
                <Link color="blue.500" href="#" textDecoration="underline">
                  Отмена подписки для Мира
                </Link>
              </HStack>

              <Text mt={4}>
                Информация на сайте носит исключительно информационный характер
                и не является публичной офертой.
              </Text>

              <Text color="gray.400" fontSize="xs" mt={4}>
                Made on Tilda
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
