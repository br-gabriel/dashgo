import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>Gabriel Feitosa</Text>
                <Text color='gray.300' fontSize='small'>
                    contato.gabrielfeitosa@gmail.com
                </Text>
            </Box>
            <Avatar size='md' name='Gabriel Feitosa' src='https://github.com/br-gabriel.png' />
        </Flex>
    );
}