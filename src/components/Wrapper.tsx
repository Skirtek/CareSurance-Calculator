import { Center, Stack, Heading } from "@chakra-ui/react";

interface WrapperProps {
  heading?: string;
  children?: React.ReactNode;
}

export const Wrapper = (props: WrapperProps) => {
  return (
    <Center bg="#ccc" h="100vh" flexDirection={"column"}>
      {props.heading && (
        <Heading as={"h2"} size="lg">
          {props.heading}
        </Heading>
      )}
      <Stack direction={"column"} bg="white" p={16}>
        {props.children}
      </Stack>
    </Center>
  );
};
