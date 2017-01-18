import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text} from 'react-native';

export default class Question extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>
					{this.props.questionText}
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
	},
	questionText: {
		width: 200,
		height: 200,
		color: '#343434'
	}
})