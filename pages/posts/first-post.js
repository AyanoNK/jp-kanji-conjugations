import { Center, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function FirstPost() {
  // If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.
  return (
    <VStack>
      <Center h="100vh">
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Center>
    </VStack>
  );
}
