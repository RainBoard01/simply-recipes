import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<ChakraProvider>
			<Navbar />
		</ChakraProvider>
	);
}
