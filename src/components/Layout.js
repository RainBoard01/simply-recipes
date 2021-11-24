import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from '@chakra-ui/react';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<Container
				w='90vw'
				maxW='1120px'
				m='0 auto'
				minH='calc(100vh - 10rem)'
				paddingInlineStart='0'
				paddingInlineEnd='0'
			>
				{children}
			</Container>
			<Footer />
		</>
	);
};

export default Layout;
