import { Center, Heading } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';

const Error = () => {
	return (
		<Layout>
			<Center>
				<Heading as='h1' size='4xl'>
					404
				</Heading>
				<Heading as='h2' size='xl'>
					page not found
				</Heading>
			</Center>
		</Layout>
	);
};

export default Error;
