"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Divider,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

export default function PrivacyPolicy() {
  return (
    <Box bg="white" color="gray.800" minH="100vh" py={12}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="xl" mb={4}>
              Privacy Policy
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Last Updated: September 10, 2025
            </Text>
          </Box>

          <Alert status="info" borderRadius="md">
            <AlertIcon />
            <Text>
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, and protect your information.
            </Text>
          </Alert>

          <Divider />

          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h2" size="lg" mb={4}>
                1. Information We Collect
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                We collect information you provide directly to us, such as when
                you create an account, subscribe to our service, or contact us.
                This may include:
              </Text>
              <List spacing={2} pl={4}>
                <ListItem>• Name and email address</ListItem>
                <ListItem>
                  • Payment information (processed securely by third-party
                  providers)
                </ListItem>
                <ListItem>• Communication preferences</ListItem>
                <ListItem>
                  • Any information you provide when contacting us
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                2. Automatically Collected Information
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                We automatically collect certain information when you visit our
                website:
              </Text>
              <List spacing={2} pl={4}>
                <ListItem>• IP address and browser type</ListItem>
                <ListItem>• Device information and operating system</ListItem>
                <ListItem>• Pages visited and time spent on our site</ListItem>
                <ListItem>• Referring website or source</ListItem>
                <ListItem>• Analytics data through Google Analytics</ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                3. How We Use Your Information
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                We use the information we collect to:
              </Text>
              <List spacing={2} pl={4}>
                <ListItem>
                  • Provide, maintain, and improve our services
                </ListItem>
                <ListItem>
                  • Process transactions and send related information
                </ListItem>
                <ListItem>
                  • Send technical notices and support messages
                </ListItem>
                <ListItem>
                  • Communicate about products, services, and promotional offers
                </ListItem>
                <ListItem>• Monitor and analyze trends and usage</ListItem>
                <ListItem>• Detect and prevent fraud and abuse</ListItem>
                <ListItem>• Comply with legal obligations</ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                4. Information Sharing and Disclosure
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                <strong>
                  We do not sell, trade, or rent your personal information to
                  third parties.
                </strong>{" "}
                We may share your information only in the following
                circumstances:
              </Text>
              <List spacing={2} pl={4}>
                <ListItem>
                  • With service providers who assist in our operations (under
                  strict confidentiality agreements)
                </ListItem>
                <ListItem>
                  • When required by law or to respond to legal requests
                </ListItem>
                <ListItem>
                  • To protect our rights, property, or safety, or that of
                  others
                </ListItem>
                <ListItem>
                  • In connection with a business transfer (merger, acquisition,
                  etc.)
                </ListItem>
                <ListItem>• With your explicit consent</ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                5. Data Security
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. These measures
                include:
              </Text>
              <List spacing={2} pl={4}>
                <ListItem>
                  • Encryption of sensitive data in transit and at rest
                </ListItem>
                <ListItem>• Regular security assessments and updates</ListItem>
                <ListItem>
                  • Limited access to personal information on a need-to-know
                  basis
                </ListItem>
                <ListItem>
                  • Secure payment processing through trusted third-party
                  providers
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                6. Data Retention
              </Heading>
              <Text lineHeight={1.8}>
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy, unless a longer retention period is required or
                permitted by law. When we no longer need your information, we
                will securely delete or anonymize it.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                7. Your Rights and Choices
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                Depending on your location, you may have certain rights
                regarding your personal information:
              </Text>
              <List spacing={2} pl={4}>
                <ListItem>
                  • <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </ListItem>
                <ListItem>
                  • <strong>Correction:</strong> Request correction of
                  inaccurate or incomplete information
                </ListItem>
                <ListItem>
                  • <strong>Deletion:</strong> Request deletion of your personal
                  information
                </ListItem>
                <ListItem>
                  • <strong>Portability:</strong> Request transfer of your data
                  to another service
                </ListItem>
                <ListItem>
                  • <strong>Opt-out:</strong> Unsubscribe from marketing
                  communications
                </ListItem>
                <ListItem>
                  • <strong>Restriction:</strong> Request limitation of
                  processing your data
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                8. Cookies and Tracking Technologies
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                We use cookies and similar tracking technologies to enhance your
                experience on our website. You can control cookies through your
                browser settings, but disabling them may affect website
                functionality.
              </Text>
              <Text lineHeight={1.8}>
                We use Google Analytics to understand how our website is used.
                You can opt out of Google Analytics by installing the Google
                Analytics Opt-out Browser Add-on.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                9. Third-Party Links and Services
              </Heading>
              <Text lineHeight={1.8}>
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                these third parties. We encourage you to read their privacy
                policies before providing any information.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                10. Children&apos;s Privacy
              </Heading>
              <Text lineHeight={1.8}>
                Our services are not intended for children under 18 years of
                age. We do not knowingly collect personal information from
                children under 18. If we become aware that we have collected
                such information, we will take steps to delete it immediately.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                11. International Data Transfers
              </Heading>
              <Text lineHeight={1.8}>
                Your information may be transferred to and processed in
                countries other than your own. We ensure that such transfers
                comply with applicable data protection laws and that appropriate
                safeguards are in place to protect your information.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                12. Changes to This Privacy Policy
              </Heading>
              <Text lineHeight={1.8}>
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new Privacy
                Policy on this page and updating the &quot;Last Updated&quot;
                date. We encourage you to review this Privacy Policy
                periodically.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                13. Contact Us
              </Heading>
              <Text lineHeight={1.8}>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </Text>
              <Box mt={4} p={4} bg="gray.50" borderRadius="md">
                <Text>
                  <strong>Email:</strong> privacy@nextmindproject.com
                </Text>
                <Text>
                  <strong>Subject Line:</strong> Privacy Policy Inquiry
                </Text>
              </Box>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
