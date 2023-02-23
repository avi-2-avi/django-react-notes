import { Text, Heading, HStack, VStack } from "@chakra-ui/react";
import { FC, MouseEventHandler } from "react";

export interface ListItemProps {
  tittle: string;
  body: string;
  updateDate: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const ListItem: FC<ListItemProps> = ({
  onClick,
  tittle,
  body,
  updateDate,
}) => {
  const hoverStyle = {
    bg: "#1E2124",
  };

  return (
    <VStack
      w="full"
      onClick={onClick}
      alignItems="start"
      _hover={hoverStyle}
      px={5}
      py={4}
    >
      <Heading as="h3" size="md">
        {tittle}
      </Heading>
      <HStack w="inherit" textColor="whiteAlpha.800">
        <Text>{updateDate}</Text>
        <Text maxW="full" isTruncated>
          {body}
        </Text>
      </HStack>
    </VStack>
  );
};
