import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const SelectionCard = ({ link, title, content, isExternal = false }) => {
  return (
    <NextLink href={link} passHref>
      <Link isExternal={isExternal}>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </Link>
    </NextLink>
  );
};

export default SelectionCard;
