import { List, ListItem, ListIcon, Text, Flex, Link } from "@chakra-ui/react";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export default function FirstPost() {
  const rows = [
    {
      id: "1",
      item: "Cat Logo",
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
    <Flex p={10}>
      <List spacing={5}>
        {rows.map((row) => (
          <ListItem key={row.id}>
            <Text fontSize="xl">
              <ListIcon as={ArrowForwardIcon} color="green.500" />
              {row.item}
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
  );
}
