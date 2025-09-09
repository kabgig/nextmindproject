"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import FormatSection from "../components/FormatSection";
import HeroSection from "../components/HeroSection";
import InsideSection from "../components/InsideSection";
import TransformationSection from "../components/TransformationSection";

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
              Get Access from USA - $120/month
            </Button>

            <Button
              size="lg"
              colorScheme="green"
              w="full"
              py={8}
              fontSize="lg"
              fontWeight="bold"
            >
              Get Access from Anywhere Else - €110/month
            </Button>
          </VStack>

          {/* Terms */}
          <Box textAlign="center" fontSize="sm" color="gray.600">
            <Text mb={4}>
              By proceeding to payment, you agree to our{" "}
              <Link color="blue.500" href="#" textDecoration="underline">
                terms of service
              </Link>{" "}
              and consent to the processing of{" "}
              <Link color="blue.500" href="#" textDecoration="underline">
                personal data
              </Link>{" "}
              in accordance with our{" "}
              <Link color="blue.500" href="#" textDecoration="underline">
                privacy policy
              </Link>
            </Text>

            <Text mb={4}>
              Choose your country and currency, then follow the Telegram bot
              instructions. Access to the channel and all materials opens
              automatically after payment.
            </Text>

            <Text>
              For important questions, contact our project manager{" "}
              <Link color="blue.500" href="#" textDecoration="underline">
                @victoria_vish
              </Link>
            </Text>
          </Box>

          {/* Social Links */}
          <Box textAlign="center">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Follow Us
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
                Next Mind Project LLC
                <br />
                Business Registration: NMP-2024-001
                <br />
                Tax ID: 555-123-4567
              </Text>

              <HStack justify="center" spacing={4} flexWrap="wrap">
                <Link color="blue.500" href="#" textDecoration="underline">
                  Terms of Service
                </Link>
                <Link color="blue.500" href="#" textDecoration="underline">
                  Privacy Policy
                </Link>
                <Link color="blue.500" href="#" textDecoration="underline">
                  Data Processing
                </Link>
              </HStack>

              <HStack justify="center" spacing={4} flexWrap="wrap">
                <Link color="blue.500" href="#" textDecoration="underline">
                  Cancel Subscription (USA)
                </Link>
                <Link color="blue.500" href="#" textDecoration="underline">
                  Cancel Subscription (International)
                </Link>
              </HStack>

              <Text mt={4}>
                Information on this site is for informational purposes only and
                does not constitute a public offer.
              </Text>

              <Text color="gray.400" fontSize="xs" mt={4}>
                Built with Next.js
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
