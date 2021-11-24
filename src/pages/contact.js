import React from 'react';
import {
	Flex,
	Heading,
	Text,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Grid,
	Button
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';

const Paragraph = styled(Text)`
	margin-bottom: 1rem;
	max-width: 40em;
	font-weight: 400;
	line-height: 1.75;
	font-family: 'Montserrat', sans-serif;
	color: #333538;
	font-size: 18px;
`;

const Contact = () => {
	return (
		<Layout>
			<section>
				<Grid
					templateColumns='1fr 1fr'
					gap='2rem 3rem'
					pb='3rem'
					letterSpacing='1px'
				>
					<Flex direction='column' justify='center'>
						<Heading
							as='h3'
							fontSize='1.953rem'
							fontWeight='400'
							mb='1.38rem'
							lineHeight='1.3'
							fontFamily='Inconsolata, monospace'
						>
							Want To Get In Touch?
						</Heading>
						<Paragraph>
							Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke
							mlkshk intelligentsia edison bulb synth.
						</Paragraph>
						<Paragraph>
							Cardigan prism bicycle rights put a bird on it deep v.
						</Paragraph>
						<Paragraph>
							Hashtag swag health goth ait plant, raclette listicle fingerstache
							cold-pressed fanny pack bicycle rights cardigan poke.
						</Paragraph>
					</Flex>
					<FormControl
						bgColor='white'
						p='2rem 2.5rem'
						borderRadius='0.25rem'
						boxShadow='0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)'
					>
						<FormLabel>Your Name</FormLabel>
						<Input type='text' variant='outline' mb='1rem' />
						<FormLabel>Your Email</FormLabel>
						<Input type='email' variant='outline' mb='1rem' />
						<FormLabel>Message</FormLabel>
						<Textarea />
						<Button w='100%' mt='1rem' type='submit'>
							Submit
						</Button>
					</FormControl>
				</Grid>
			</section>
		</Layout>
	);
};

export default Contact;
