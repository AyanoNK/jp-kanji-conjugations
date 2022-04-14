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
      item: "Guide to Learning Japanese",
      who: "Tae Kim",
      links: [
        {
          id: "1.1",
          title: "Website",
          url: "https://guidetojapanese.org/learn/",
        },
      ],
    },
    {
      id: "2",
      item: "Web Magazine in simple Japanese",
      who: "和タのＣ",
      links: [
        {
          id: "2.1",
          title: "Website",
          url: "https://watanoc.com/",
        },
      ],
    },
    {
      id: "3",
      item: "Japanese Dictionary",
      who: "Jisho",
      links: [
        {
          id: "3.1",
          title: "Website",
          url: "https://jisho.org/",
        },
      ],
    },
  ];

  return (
    <Container maxW="6xl" minH="3xl">
      <VStack pt={5} spacing={5} align="stretch">
        <StackItem>
          <Heading
            as="h1"
            size="lg"
            letterSpacing={"tighter"}
            flexDirection="column"
          >
            You can check out the following studying resources
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
                  <List pl={7} pt={3} spacing={2}>
                    {row.links.map((link) => (
                      <ListItem key={link.key}>
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
