"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Divider,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export default function TermsOfService() {
  return (
    <Box bg="white" color="gray.800" minH="100vh" py={12}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="xl" mb={4}>
              Terms of Service
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Last Updated: September 10, 2025
            </Text>
          </Box>

          <Divider />

          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h2" size="lg" mb={4}>
                1. Acceptance of Terms
              </Heading>
              <Text lineHeight={1.8}>
                By accessing or using Next Mind Project (&quot;the
                Service&quot;), you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you disagree with any part of these
                terms, you may not access the Service. These Terms apply to all
                visitors, users, and others who access or use the Service.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                2. Description of Service
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                Next Mind Project provides educational content, resources, and
                materials related to mental transformation and personal
                development. The Service includes but is not limited to:
              </Text>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Educational content about limiting beliefs
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Mental transformation resources
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Podcast content and related materials
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Community access and interaction
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                3. User Accounts and Responsibilities
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                When you create an account with us, you must provide information
                that is accurate, complete, and current at all times. You are
                responsible for safeguarding the password and for maintaining
                the confidentiality of your account.
              </Text>
              <Text lineHeight={1.8}>
                You agree not to disclose your password to any third party and
                to take sole responsibility for activities that occur under your
                account.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                4. Subscription and Payment Terms
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                Some aspects of the Service are provided on a subscription
                basis. By subscribing, you agree to pay the applicable fees as
                described on our pricing page. All fees are non-refundable
                except as expressly stated in these Terms.
              </Text>
              <Text lineHeight={1.8}>
                Subscriptions automatically renew unless cancelled. You may
                cancel your subscription at any time through your account
                settings or by contacting us directly.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                5. Intellectual Property Rights
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of Next
                Mind Project and its licensors. The Service is protected by
                copyright, trademark, and other laws.
              </Text>
              <Text lineHeight={1.8}>
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, or transmit any of the material on our Service
                without prior written consent.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                6. Prohibited Uses
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                You may not use our Service:
              </Text>
              <List spacing={2}>
                <ListItem>
                  • For any unlawful purpose or to solicit others to unlawful
                  acts
                </ListItem>
                <ListItem>
                  • To violate any international, federal, provincial, or state
                  regulations, rules, laws, or local ordinances
                </ListItem>
                <ListItem>
                  • To infringe upon or violate our intellectual property rights
                  or the intellectual property rights of others
                </ListItem>
                <ListItem>
                  • To harass, abuse, insult, harm, defame, slander, disparage,
                  intimidate, or discriminate
                </ListItem>
                <ListItem>• To submit false or misleading information</ListItem>
                <ListItem>
                  • To upload or transmit viruses or any other type of malicious
                  code
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                7. Disclaimers and Limitation of Liability
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                The information on this Service is provided on an &quot;as
                is&quot; basis. To the fullest extent permitted by law, Next
                Mind Project excludes all representations, warranties,
                conditions, and terms whether express or implied.
              </Text>
              <Text lineHeight={1.8} mb={4}>
                <strong>EDUCATIONAL PURPOSES ONLY:</strong> All content provided
                is for educational and informational purposes only and should
                not be considered as professional medical, psychological, or
                therapeutic advice.
              </Text>
              <Text lineHeight={1.8}>
                In no event shall Next Mind Project be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                8. Indemnification
              </Heading>
              <Text lineHeight={1.8}>
                You agree to defend, indemnify, and hold harmless Next Mind
                Project from and against any and all claims, damages,
                obligations, losses, liabilities, costs, or debt, and expenses
                (including but not limited to attorney&apos;s fees) resulting
                from your use of the Service or violation of these Terms.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                9. Termination
              </Heading>
              <Text lineHeight={1.8}>
                We may terminate or suspend your access immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms. Upon termination,
                your right to use the Service will cease immediately.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                10. Governing Law
              </Heading>
              <Text lineHeight={1.8}>
                These Terms shall be interpreted and governed by the laws of the
                United States, without regard to its conflict of law provisions.
                Any legal action or proceeding arising under these Terms will be
                brought exclusively in the federal or state courts located in
                the United States.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                11. Changes to Terms
              </Heading>
              <Text lineHeight={1.8}>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days&apos; notice prior to any
                new terms taking effect.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                12. Contact Information
              </Heading>
              <Text lineHeight={1.8}>
                If you have any questions about these Terms of Service, please
                contact us at: legal@nextmindproject.com
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
