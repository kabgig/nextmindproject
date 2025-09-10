"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export default function WaitlistPage() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank you!",
        description:
          "You&apos;ve been added to our waiting list. We&apos;ll notify you when we launch!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setEmail("");
      setName("");
      setShowEmailForm(false);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Box bg="white" color="gray.800" minH="100vh" py={16}>
      <Container maxW="container.md">
        <VStack spacing={12} align="center">
          {/* Header */}
          <VStack spacing={6} textAlign="center">
            <Heading as="h1" size="xl" color="green.600">
              We&apos;re Almost Ready! 🚀
            </Heading>

            <Alert status="info" borderRadius="lg" maxW="500px">
              <AlertIcon />
              <Text>
                Thank you for your interest in Next Mind Project! We&apos;re
                putting the finishing touches on something amazing.
              </Text>
            </Alert>
          </VStack>

          {/* Main Message */}
          <VStack spacing={6} textAlign="center" maxW="600px">
            <Text fontSize="lg" lineHeight={1.8}>
              Our comprehensive mental transformation database will be launching
              in exactly <strong>one month</strong>. We&apos;re working hard to
              ensure you get the most powerful tool for identifying and
              transforming limiting beliefs.
            </Text>

            <Text fontSize="md" color="gray.600" lineHeight={1.6}>
              Want to be the first to know when we go live? Join our waiting
              list and you&apos;ll get:
            </Text>

            <VStack
              spacing={2}
              align="start"
              bg="gray.50"
              p={6}
              borderRadius="lg"
              w="full"
            >
              <Text>
                ✨ <strong>Early access</strong> before public launch
              </Text>
              <Text>
                🎯 <strong>Exclusive discount</strong> for waiting list members
              </Text>
              <Text>
                🧠 <strong>Free sample content</strong> to get you started
              </Text>
              <Text>
                📧 <strong>Launch notification</strong> as soon as we&apos;re
                live
              </Text>
            </VStack>
          </VStack>

          <Divider maxW="400px" />

          {/* Waitlist Options */}
          <VStack spacing={8} w="full" maxW="500px">
            <Heading as="h2" size="lg" textAlign="center">
              Choose How You&apos;d Like to Join:
            </Heading>

            {/* Email Option */}
            <VStack spacing={4} w="full">
              {!showEmailForm ? (
                <Button
                  size="lg"
                  colorScheme="blue"
                  w="full"
                  py={6}
                  fontSize="md"
                  onClick={() => setShowEmailForm(true)}
                  leftIcon={<Text fontSize="lg">📧</Text>}
                >
                  Join Email Waiting List
                </Button>
              ) : (
                <Box w="full" p={6} bg="gray.50" borderRadius="lg">
                  <form onSubmit={handleEmailSubmit}>
                    <VStack spacing={4}>
                      <FormControl isRequired>
                        <FormLabel>Your Name</FormLabel>
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          bg="white"
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          bg="white"
                        />
                      </FormControl>

                      <VStack spacing={3} w="full">
                        <Button
                          type="submit"
                          colorScheme="green"
                          w="full"
                          isLoading={isSubmitting}
                          loadingText="Joining..."
                        >
                          Join Waiting List
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowEmailForm(false)}
                        >
                          Cancel
                        </Button>
                      </VStack>
                    </VStack>
                  </form>
                </Box>
              )}
            </VStack>

            {/* Telegram Option */}
            <Button
              as="a"
              href="#"
              size="lg"
              colorScheme="cyan"
              w="full"
              py={6}
              fontSize="md"
              leftIcon={<Text fontSize="lg">💬</Text>}
            >
              Telegram Bot
            </Button>
          </VStack>

          {/* Footer Message */}
          <VStack spacing={4} textAlign="center" maxW="500px">
            <Text fontSize="sm" color="gray.500">
              Questions? Feel free to reach out to our team at{" "}
              <Text as="span" color="blue.500" fontWeight="medium">
                hello@nextmindproject.com
              </Text>
            </Text>

            <Button
              as="a"
              href="/"
              variant="link"
              colorScheme="gray"
              fontSize="sm"
            >
              ← Back to Main Page
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
