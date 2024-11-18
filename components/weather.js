import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Card, IconButton } from 'react-native-paper';


import { useNavigation } from '@react-navigation/native';

const SectionCard = ({ title, routeName  }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity onPress={() => navigation.navigate(routeName,  { section: title })}>
			<Card style={styles.card}>
				<Card.Content style={styles.cardContent}>
					<IconButton
						icon="file-document" 
						boolean="true"
						color="#6200ee"
						size={24}
					/>
					<Text style={styles.cardText}>{title}</Text>
				</Card.Content>
			</Card>
		</TouchableOpacity>

	);
};




const Weather = () => {
	const sections = [
		{ title: 'Silabus', routeName: 'Silabus' },
		{ title: 'Maruza ', routeName: 'Section2' },
		{ title: 'Test', routeName: 'Section3' },
		{ title: 'Adabiyotlar', routeName: 'Section4' },
		{ title: 'Video', routeName: 'Section5' },
		{ title: 'Golossary', routeName: 'Section6' },
		{ title: 'Nazorat savollar', routeName: 'Section7' },
	];

	return (
		<PaperProvider>
			<View style={styles.container}>
				{sections.map((section, index) => (
					<SectionCard
						key={index}
						title={section.title}
						routeName={section.routeName}
					/>
				))}
			</View>
		</PaperProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		padding: 10,
		margin: 15,
	},
	cardContainer: {
		width: '45%', 
		margin: 10,
	},
	card: {
		borderWidth: 1,
		borderColor: '#6200ee',
		borderRadius: 8,
		margin: 10,
	},
	cardContent: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
	},
	cardText: {
		fontSize: 16,
		color: '#6200ee',
		textAlign: 'center',
	},
});

export default Weather;
