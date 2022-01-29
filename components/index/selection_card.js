import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const SelectionCard = ({ link, title, description, isExternal = false }) => {
  return (
    <NextLink href={link} passHref>
      <Link
        border="1px solid black"
        borderRadius="md"
        padding="1.5rem"
        textDecoration="none"
        transition={["ease-in-out", "0.15s"]}
        _hover={{
          color: "blue.700",
          borderColor: "blue.700",
        }}
        isExternal={isExternal}
      >
        <Text paddingBottom="1rem" fontSize="1.5rem">
          {title}
        </Text>
        <Text margin="0" padding="0" fontSize="1.25rem" lineHeight="1.5rem">
          {description}
        </Text>
      </Link>
    </NextLink>
  );
};

export default SelectionCard;
