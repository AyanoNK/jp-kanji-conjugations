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
          title: "Website",
          url: "https://blindblakedown.wixsite.com/tochihata-guiter",
        },
        {
          id: "1.2",
          title: "Instagram",
          url: "https://www.instagram.com/neko.dearu/",
        },
      ],
    },
    {
      id: "2",
      item: "Kanji Documentation",
      who: "Kanji Alive",
      links: [
        {
          id: "2.1",
          title: "Website",
          url: "https://app.kanjialive.com/api/docs",
        },
      ],
    },
    {
      id: "3",
      item: "Chakra UI",
      who: "chakra-ui",
      links: [
        {
          id: "3.1",
          title: "Website",
          url: "https://chakra-ui.com/",
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
            With the wonderful help of
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
