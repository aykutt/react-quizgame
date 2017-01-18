import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class SplashScreen extends Component {

	startButtonTouched() {
    this.props.navigator.push({ screen: 'GameScreen' });
  }

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.section1}></View>
				<View style={styles.section2}>
					<Text style={styles.gameNameText}>Quiz Game</Text>
				</View>
				<View style={styles.section3}>
					<TouchableOpacity onPress={this.startButtonTouched.bind(this)}>
			      <Text style={styles.startText}>Start</Text>
			    </TouchableOpacity>
				</View>
			</View>
		);
	}
} 


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f8f8f8',
		flex:1,
		flexDirection:'column'
	},
	section1: {
		flex: .3333
	},
	section2: {
		flex: .3333,
		alignItems:'center',
    justifyContent:'center'
	},
	section3: {
		flex: .3333,
		alignItems:'center',
    justifyContent:'center'
	},
	gameNameText: {
		color: '#559df3',
		fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: 'white',
    textAlign: 'center'
	},
	startText: {
		width: 200,
		height: 38,
		color: 'white',
		alignItems:'center',
		fontSize: 18,
    fontWeight: 'bold',
    justifyContent:'center',
		backgroundColor: '#559df3',
		textAlign: 'center'
	}
})