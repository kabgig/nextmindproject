'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Avatar,
  Center,
} from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <Box bg="white" color="black" py={16}>
      <Container maxW="container.lg">
        <VStack spacing={12} align="center">
          {/* Header */}
          <VStack spacing={6} align="center">
            <Heading 
              as="h1" 
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              textAlign="center"
            >
              Исходный код
            </Heading>
            
            <Text 
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="center"
              maxW="600px"
            >
              Новые прошивки → Новые стратегии → Новая реальность
            </Text>
          </VStack>

          {/* Profile Image */}
          <Center>
            <Avatar 
              size="2xl" 
              src="/api/placeholder/200/200" 
              name="Profile"
              boxSize={{ base: "150px", md: "200px" }}
            />
          </Center>

          {/* Main Content */}
          <VStack spacing={8} align="stretch" maxW="800px">
            {/* Introduction */}
            <Box>
              <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} mb={6}>
                Пришло время изменений
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.7}>
                «Исходный код» — это самая большая база ограничивающих убеждений и стратегий, 
                которые мешают тебе жить по своим правилам, кайфовать и зарабатывать больше.
              </Text>
            </Box>

            {/* Why Important */}
            <Box>
              <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} mb={4}>
                Почему это важно?
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.7} mb={6}>
                Твои реальные проблемы — не в дисциплине, мотивации или действиях, 
                а в прошивках, которые ты даже не осознаёшь.
              </Text>
            </Box>

            {/* Examples List */}
            <VStack spacing={3} align="start">
              <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic" lineHeight={1.6}>
                Быть богатым — опасно.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic" lineHeight={1.6}>
                Если я не сам - я никто.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic" lineHeight={1.6}>
                Честным трудом не заработать.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic" lineHeight={1.6}>
                Богатство и духовность несовместимы.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic" lineHeight={1.6}>
                Если ты что-то получил — у тебя это отнимут.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic" lineHeight={1.6}>
                У меня нет права жить легко.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic" lineHeight={1.6}>
                Зарабатывать легко невозможно.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic" lineHeight={1.6}>
                Женщинам нужны только деньги.
              </Text>
            </VStack>

            {/* Conclusion */}
            <VStack spacing={4} align="stretch">
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.7} fontWeight="semibold">
                Вшитые в тебя подобные программы управляют твоими решениями и поведением, 
                а ты даже не замечаешь этого.
              </Text>
              
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.7}>
                Они сливают твои деньги, кайф, энергию, свободу и время.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
