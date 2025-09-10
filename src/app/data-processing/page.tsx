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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function DataProcessing() {
  return (
    <Box bg="white" color="gray.800" minH="100vh" py={12}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="xl" mb={4}>
              Data Processing Agreement
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Last Updated: September 10, 2025
            </Text>
          </Box>

          <Alert status="warning" borderRadius="md">
            <AlertIcon />
            <Text>
              This document outlines how we process personal data in compliance
              with applicable data protection laws including GDPR, CCPA, and
              other privacy regulations.
            </Text>
          </Alert>

          <Divider />

          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h2" size="lg" mb={4}>
                1. Purpose and Scope
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                This Data Processing Agreement (&quot;DPA&quot;) sets forth the
                terms and conditions under which Next Mind Project processes
                personal data on behalf of and at the direction of our users and
                subscribers. This DPA is designed to meet the requirements of:
              </Text>
              <List spacing={2} pl={4}>
                <ListItem>• General Data Protection Regulation (GDPR)</ListItem>
                <ListItem>• California Consumer Privacy Act (CCPA)</ListItem>
                <ListItem>
                  • Other applicable data protection and privacy laws
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                2. Definitions
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                For the purposes of this DPA:
              </Text>
              <List spacing={3} pl={4}>
                <ListItem>
                  <strong>&quot;Personal Data&quot;</strong> means any
                  information relating to an identified or identifiable natural
                  person.
                </ListItem>
                <ListItem>
                  <strong>&quot;Processing&quot;</strong> means any operation
                  performed on personal data, including collection, recording,
                  organization, structuring, storage, adaptation, retrieval,
                  consultation, use, disclosure, dissemination, restriction,
                  erasure, or destruction.
                </ListItem>
                <ListItem>
                  <strong>&quot;Data Controller&quot;</strong> means the entity
                  that determines the purposes and means of processing personal
                  data.
                </ListItem>
                <ListItem>
                  <strong>&quot;Data Processor&quot;</strong> means the entity
                  that processes personal data on behalf of the Data Controller.
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                3. Nature and Purpose of Processing
              </Heading>
              <TableContainer>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Processing Activity</Th>
                      <Th>Purpose</Th>
                      <Th>Data Categories</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Account Management</Td>
                      <Td>User registration and authentication</Td>
                      <Td>Name, email, preferences</Td>
                    </Tr>
                    <Tr>
                      <Td>Service Delivery</Td>
                      <Td>Providing educational content and resources</Td>
                      <Td>Usage data, progress tracking</Td>
                    </Tr>
                    <Tr>
                      <Td>Payment Processing</Td>
                      <Td>Subscription management and billing</Td>
                      <Td>Payment information (via third parties)</Td>
                    </Tr>
                    <Tr>
                      <Td>Communications</Td>
                      <Td>Customer support and updates</Td>
                      <Td>Contact information, communication history</Td>
                    </Tr>
                    <Tr>
                      <Td>Analytics</Td>
                      <Td>Service improvement and optimization</Td>
                      <Td>Usage patterns, device information</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                4. Data Subject Categories
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                We process personal data of the following categories of data
                subjects:
              </Text>
              <List spacing={2} pl={4}>
                <ListItem>
                  • Website visitors and prospective customers
                </ListItem>
                <ListItem>• Registered users and subscribers</ListItem>
                <ListItem>• Customer support contacts</ListItem>
                <ListItem>
                  • Newsletter subscribers and marketing contacts
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                5. Legal Basis for Processing
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                We process personal data based on the following legal grounds:
              </Text>
              <List spacing={3} pl={4}>
                <ListItem>
                  <strong>Contract Performance:</strong> Processing necessary
                  for the performance of our service agreement with you
                </ListItem>
                <ListItem>
                  <strong>Legitimate Interest:</strong> Processing for our
                  legitimate business interests, such as improving our services
                  and preventing fraud
                </ListItem>
                <ListItem>
                  <strong>Consent:</strong> Where you have given explicit
                  consent for specific processing activities
                </ListItem>
                <ListItem>
                  <strong>Legal Obligation:</strong> Processing required to
                  comply with applicable laws and regulations
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                6. Data Security Measures
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                We implement comprehensive security measures to protect personal
                data:
              </Text>
              <VStack spacing={4} align="stretch">
                <Box>
                  <Heading as="h3" size="md" mb={2}>
                    Technical Safeguards:
                  </Heading>
                  <List spacing={1} pl={4}>
                    <ListItem>
                      • End-to-end encryption for data in transit
                    </ListItem>
                    <ListItem>• AES-256 encryption for data at rest</ListItem>
                    <ListItem>
                      • Multi-factor authentication for admin access
                    </ListItem>
                    <ListItem>
                      • Regular security audits and penetration testing
                    </ListItem>
                    <ListItem>
                      • Automated backup and disaster recovery systems
                    </ListItem>
                  </List>
                </Box>
                <Box>
                  <Heading as="h3" size="md" mb={2}>
                    Organizational Safeguards:
                  </Heading>
                  <List spacing={1} pl={4}>
                    <ListItem>
                      • Staff training on data protection principles
                    </ListItem>
                    <ListItem>
                      • Access controls on a need-to-know basis
                    </ListItem>
                    <ListItem>
                      • Regular review of data processing activities
                    </ListItem>
                    <ListItem>
                      • Incident response and breach notification procedures
                    </ListItem>
                    <ListItem>
                      • Confidentiality agreements with all personnel
                    </ListItem>
                  </List>
                </Box>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                7. Data Subject Rights
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                Data subjects have the following rights regarding their personal
                data:
              </Text>
              <List spacing={3} pl={4}>
                <ListItem>
                  <strong>Right of Access:</strong> Obtain confirmation that
                  personal data is being processed and access to such data
                </ListItem>
                <ListItem>
                  <strong>Right to Rectification:</strong> Correct inaccurate or
                  incomplete personal data
                </ListItem>
                <ListItem>
                  <strong>Right to Erasure:</strong> Request deletion of
                  personal data under certain circumstances
                </ListItem>
                <ListItem>
                  <strong>Right to Restrict Processing:</strong> Limit how
                  personal data is processed
                </ListItem>
                <ListItem>
                  <strong>Right to Data Portability:</strong> Receive personal
                  data in a structured, machine-readable format
                </ListItem>
                <ListItem>
                  <strong>Right to Object:</strong> Object to processing based
                  on legitimate interests or direct marketing
                </ListItem>
                <ListItem>
                  <strong>Right to Withdraw Consent:</strong> Withdraw consent
                  at any time where processing is based on consent
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                8. Data Retention
              </Heading>
              <TableContainer>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Data Type</Th>
                      <Th>Retention Period</Th>
                      <Th>Justification</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Account Information</Td>
                      <Td>Duration of account + 2 years</Td>
                      <Td>Legal obligations, dispute resolution</Td>
                    </Tr>
                    <Tr>
                      <Td>Payment Records</Td>
                      <Td>7 years after last transaction</Td>
                      <Td>Tax and financial regulations</Td>
                    </Tr>
                    <Tr>
                      <Td>Marketing Data</Td>
                      <Td>Until consent withdrawn</Td>
                      <Td>Consent-based processing</Td>
                    </Tr>
                    <Tr>
                      <Td>Support Communications</Td>
                      <Td>3 years after resolution</Td>
                      <Td>Service improvement, quality assurance</Td>
                    </Tr>
                    <Tr>
                      <Td>Website Analytics</Td>
                      <Td>26 months (Google Analytics)</Td>
                      <Td>Service optimization, legitimate interest</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                9. International Data Transfers
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                When personal data is transferred outside the country of
                collection, we ensure adequate protection through:
              </Text>
              <List spacing={2} pl={4}>
                <ListItem>
                  • Adequacy decisions by relevant data protection authorities
                </ListItem>
                <ListItem>
                  • Standard Contractual Clauses (SCCs) approved by the European
                  Commission
                </ListItem>
                <ListItem>
                  • Binding Corporate Rules (BCRs) where applicable
                </ListItem>
                <ListItem>
                  • Certification schemes and codes of conduct
                </ListItem>
                <ListItem>
                  • Explicit consent from data subjects where required
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                10. Data Breach Procedures
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                In the event of a personal data breach, we will:
              </Text>
              <List spacing={2} pl={4}>
                <ListItem>
                  • Detect and assess the breach within 24 hours
                </ListItem>
                <ListItem>
                  • Notify relevant supervisory authorities within 72 hours
                  (where required)
                </ListItem>
                <ListItem>
                  • Notify affected data subjects without undue delay (where
                  required)
                </ListItem>
                <ListItem>
                  • Document the breach and our response measures
                </ListItem>
                <ListItem>
                  • Implement additional safeguards to prevent future breaches
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                11. Sub-processors
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                We may engage sub-processors to assist in providing our
                services. Current sub-processors include:
              </Text>
              <TableContainer>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Sub-processor</Th>
                      <Th>Service</Th>
                      <Th>Location</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Google Analytics</Td>
                      <Td>Website analytics</Td>
                      <Td>United States</Td>
                    </Tr>
                    <Tr>
                      <Td>Payment Processors</Td>
                      <Td>Payment processing</Td>
                      <Td>Various (as required)</Td>
                    </Tr>
                    <Tr>
                      <Td>Cloud Hosting Providers</Td>
                      <Td>Infrastructure and hosting</Td>
                      <Td>United States, EU</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                12. Contact and Compliance
              </Heading>
              <Text lineHeight={1.8} mb={4}>
                For questions about data processing or to exercise your data
                subject rights, contact:
              </Text>
              <Box p={4} bg="gray.50" borderRadius="md">
                <Text>
                  <strong>Data Protection Officer:</strong>{" "}
                  dpo@nextmindproject.com
                </Text>
                <Text>
                  <strong>Legal Department:</strong> legal@nextmindproject.com
                </Text>
                <Text>
                  <strong>Subject Line:</strong> Data Processing Inquiry
                </Text>
                <Text>
                  <strong>Response Time:</strong> We will respond to requests
                  within 30 days
                </Text>
              </Box>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                13. Updates to This Agreement
              </Heading>
              <Text lineHeight={1.8}>
                We may update this Data Processing Agreement to reflect changes
                in our practices or applicable laws. Material changes will be
                communicated through our usual channels with at least 30
                days&apos; notice before taking effect.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
