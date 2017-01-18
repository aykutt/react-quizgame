import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet} from 'react-native';

import Answer from './game/answer.js'
import Question from './game/question.js'

export default class GameScreen extends Component {

	render() {
		return (
			<View style={styles.container}>
			<View style={{height: 10}}></View>
			  <Question questionText='Bu uzun bir soru cümlesidir, bir soru cümlesidir, bir soru cümlesidir' />
			  <View style={{height: 20}}></View>
				<Answer answerText='Bu bir cevap cümlesidir 1' />
				<Answer answerText='Bu bir cevap cümlesidir 2Bu bir cevap cümlesidir 2Bu bir cevap cümlesidir 2Bu bir cevap cümlesidir 2' />
				<Answer answerText='Bu bir cevap cümlesidir 3' />
				<Answer answerText='Bu bir cevap cümlesidir 4' />
			</View>
		);
	}
} 

const styles = StyleSheet.create({
	container: {
		margin: 10,
		flex: 1,
		flexDirection: 'column'
	}
})