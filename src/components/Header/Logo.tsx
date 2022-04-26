import { Text } from '@chakra-ui/react'
import Link from 'next/link';

export function Logo() {
    return (
        <Link href='/dashboard'>
            <Text
                fontSize={['2xl', '3xl']}
                fontWeight='bold'
                letterSpacing='light'
                w='64'
                cursor='pointer'
            >
                dashgo
                <Text as='span' ml='1' color='pink.500'>.</Text>
            </Text>
        </Link>

    );
}