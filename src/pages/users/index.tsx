import { Box, Button, Text, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header/Index";
import { Pagination } from "../../components/Pagination/Index";
import { Sidebar } from "../../components/Sidebar/Index";
import { useQuery } from 'react-query';
import Link from "next/link";

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    return data;
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8' w='90%'>
          <Flex mb='8' justify='space-between' alignItems='center'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>

            <Link href='/users/create' passHref>
              <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} fontSize='20' />}>
                Criar novo
              </Button>
            </Link>

          </Flex>

          {isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme='whiteAlpha'>
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color='gray.300' w='8'>
                      <Checkbox colorScheme='pink' />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th w='8'></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme='pink' />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight='bold'>Gabriel Feitosa</Text>
                        <Text fontSize='sm' color='gray.300'>contato.gabrielfeitosa@gmail.com</Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>04 de Abril, 2022</Td>}
                  </Tr>
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}