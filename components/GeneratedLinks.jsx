import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GeneratedLinks = ({ links }) => {
	console.log(links);
	return (
		<View style={styles.footerContainer}>
			{
				links.map((link, index) =>
					<View key={index} style={styles.linkContainer}>
						<View style={styles.leftlinkContainer}>
							<Text style={styles.footerLink}>one.link/{link.domain}</Text>
							<Text style={styles.cardDate1}>Created on <Text style={styles.date}>{new Date(link.createdAt).toLocaleDateString()}</Text>
							</Text>
						</View>
						<View >
							<Text style={styles.rightlinkContainer}>256 clicks</Text>
						</View>
					</View>)
			}
		</View>
	)
}

export default GeneratedLinks

const styles = StyleSheet.create({
	footerContainer: {
		flexDirection: 'column',
		gap: 10,
		marginTop: 8,
	},
	linkContainer: {
		flexDirection: 'row',
		width: '88%',
		backgroundColor: '#F8F7F7',
		height: 53,
		borderRadius: 25,
		marginHorizontal: 'auto',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginTop: 10,
	},
	footerLink: {
		color: '#4D8733',
		fontWeight: '500',
		fontSize: 14
	},
	leftlinkContainer: {
		flexDirection: 'column',
		gap: 5,
	},
	rightlinkContainer: {
		color: 'black',
		fontSize: 9,
		fontWeight: '500',
	},
	date: {
		color: 'black',
		fontSize: 9,
		fontWeight: '500'
	},
	cardDate1: {
		color: '#868686',
		fontSize: 9,
		fontWeight: '500',
	},
})