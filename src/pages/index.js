import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { Text } from '@chakra-ui/react';

export default function Home() {
	return (
		<ChakraProvider>
			<Layout>
				<Text
					bgGradient='linear(to-l, #7928CA, #FF0080)'
					bgClip='text'
					fontSize='6xl'
					fontWeight='extrabold'
				>
					Welcome to Chakra UI
				</Text>
			</Layout>
		</ChakraProvider>
	);
}
