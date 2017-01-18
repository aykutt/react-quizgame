import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text} from 'react-native';

export default class Answer extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.optionIcon}>
					O
				</Text>
				<Text>
					{this.props.answerText}
				</Text>
			</View>
		);
	}
} 

const styles = StyleSheet.create({
	container: {
		padding: 6,
		backgroundColor: '#eeeeee',
		margin: 4,
		paddingTop: 14,
		paddingBottom: 14,
		paddingRight: 18,
		paddingLeft: 18,
		flexDirection: 'row'
	},
	answerText: {
		color: '#343434'
	},
	optionIcon: {
		marginRight: 14,
		alignSelf: 'center'
	}
})