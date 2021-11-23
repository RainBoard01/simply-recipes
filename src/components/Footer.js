import { Center, Text } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';

const Span = styled.span`
	color: #645cff;
`;

const Footer = () => {
	return (
		<footer>
			<Center bg='black' w='100%' h='72px' p='4' color='white'>
				<Text fontSize='lg'>
					© 2021 <Span>SimplyRecipes</Span>. Built with{' '}
					<Span>
						<a href='https://www.gatsbyjs.com/'>Gatsby</a>
					</Span>
				</Text>
			</Center>
		</footer>
	);
};

export default Footer;
