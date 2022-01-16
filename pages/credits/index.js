import {
  List,
  ListItem,
  ListIcon,
  Text,
  Flex,
  Link,
  Heading,
  Container,
  VStack,
  StackItem,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ExternalLinkIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function FirstPost() {
  const rows = [
    {
      id: "1",
      item: "Cat Logo",
      who: "neko.dearu",
      links: [
        {
          id: "1.1",
          title: "Instagram",
          url: "https://www.instagram.com/neko.dearu/",
        },
      ],
    },
  ];

  return (
    <Container maxW="6xl">
      <VStack pt={5} spacing={5} align="stretch">
        <StackItem>
          <Heading
            as="h1"
            size="lg"
            letterSpacing={"tighter"}
            flexDirection="column"
          >
            Credits
          </Heading>
        </StackItem>
        <StackItem>
          <Flex>
            <List spacing={5}>
              {rows.map((row) => (
                <ListItem key={row.id}>
                  <Text fontSize="xl">
                    <ListIcon as={ArrowForwardIcon} color="green.500" />
                    {row.item} <ChevronRightIcon /> {row.who}
                  </Text>
                  <List pl={7} pt={2} spacing={3}>
                    {row.links.map((link) => (
                      <ListItem>
                        <Text fontSize="lg">
                          <Link href={link.url} isExternal>
                            <ExternalLinkIcon color="green.500" /> {link.title}
                          </Link>
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                </ListItem>
              ))}
            </List>
          </Flex>
        </StackItem>
      </VStack>
    </Container>
  );
}
