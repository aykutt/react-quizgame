import React, { Component } from 'react';
import { AppRegistry, Navigator} from 'react-native';

import SplashScreen from "./SplashScreen.js"
import GameScreen from "./GameScreen.js"

export default class App extends Component {

	renderScene(route,nav) {
		switch (route.screen) {
			case "SplashScreen":
				return <SplashScreen navigator={nav} />
			case "GameScreen":
				return <GameScreen navigator={nav} />
		}
	}

	render() {
		return (
			<Navigator
				initialRoute={{screen: 'SplashScreen'}}
				renderScene={(route, nav) => {return this.renderScene(route, nav)}}
			/>			
		);
	}
} 
