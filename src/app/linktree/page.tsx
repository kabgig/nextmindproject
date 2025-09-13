"use client";

import {
  Box,
  Container,
  VStack,
  Button,
  Avatar,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
import {
  FaYoutube,
  FaSpotify,
  FaApple,
  FaAmazon,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaBrain,
} from "react-icons/fa";
import { SiIheartradio } from "react-icons/si";

const links = [
  {
    name: "Next Mind Project",
    url: "https://nextmindproject.com/?utm_source=social_media&utm_medium=linktree",
    icon: FaBrain,
    color: "gray.600",
  },
  {
    name: "YouTube",
    url: "youtube://www.youtube.com/@NextMindProject",
    icon: FaYoutube,
    color: "#FF0000",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/7ovL3r5nbYY0ncfBjOwvru",
    icon: FaSpotify,
    color: "#1DB954",
  },
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/us/podcast/next-mind-project/id1838395252",
    icon: FaApple,
    color: "#000000",
  },
  {
    name: "Amazon Podcast",
    url: "https://music.amazon.com/podcasts/66a4b2f1-6b5f-4f40-ab01-0b93616c3110/next-mind-project",
    icon: FaAmazon,
    color: "#FF9900",
  },
  {
    name: "iHeartRadio",
    url: "https://www.iheart.com/podcast/269-next-mind-project-292971629",
    icon: SiIheartradio,
    color: "#C6002B",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/nextmindproject",
    icon: FaInstagram,
    color: "#E4405F",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@nextmindproject.com",
    icon: FaTiktok,
    color: "#000000",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/nextmindproject",
    icon: FaTwitter,
    color: "#000000",
  },
];

export default function TreePage() {
  return (
    <Box bg="white" minH="100vh" py={8}>
      <Container maxW="sm">
        <VStack spacing={8} align="center">
          {/* Avatar */}
          <Center>
            <Avatar
              size="2xl"
              src="/icon.webp"
              name="Next Mind Project"
              boxSize="120px"
              borderRadius="full"
              shadow="lg"
            />
          </Center>

          {/* Title */}
          <VStack spacing={2} textAlign="center">
            <Heading as="h1" size="lg" color="gray.800" fontWeight="600">
              Next Mind Project
            </Heading>
            <Text color="gray.600" fontSize="md">
              Mental transformation resources
            </Text>
          </VStack>

          {/* Links */}
          <VStack spacing={4} w="full">
            {links.map((link) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={link.name}
                  as="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  w="full"
                  h="56px"
                  bg="white"
                  border="1px solid"
                  borderColor="gray.300"
                  color="gray.800"
                  fontSize="md"
                  fontWeight={link.name === "Amazon Podcast" ? "bold" : "500"}
                  borderRadius="12px"
                  leftIcon={
                    <IconComponent
                      size={20}
                      color={link.color}
                      style={{ marginRight: "8px" }}
                    />
                  }
                  _hover={{
                    bg: "gray.50",
                    borderColor: "gray.400",
                    transform: "translateY(-2px)",
                    shadow: "md",
                  }}
                  _active={{
                    bg: "gray.100",
                    transform: "translateY(0)",
                  }}
                  transition="all 0.2s ease"
                >
                  {link.name}
                </Button>
              );
            })}
          </VStack>

          {/* Footer */}
          <Text fontSize="sm" color="gray.500" textAlign="center" mt={8}>
            Transform your mind, transform your reality
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
