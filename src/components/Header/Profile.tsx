import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Gabriel Feitosa</Text>
                    <Text color='gray.300' fontSize='small'>
                        contato.gabrielfeitosa@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size='md' name='Gabriel Feitosa' src='https://github.com/br-gabriel.png' />
        </Flex>
    );
}