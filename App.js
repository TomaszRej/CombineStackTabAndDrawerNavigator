import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator, createAppContainer, createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LogoutScreen from './screens/LogoutScreen';


const AuthStackNavigator = createStackNavigator({
    Welcome: WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen
});
const AppTabNavigator = createBottomTabNavigator({
    HomeScreen:{
        screen: HomeScreen
    },
    Settings:{
        screen: SettingsScreen
    }
});

const AppStackNavigator = createStackNavigator({
    AppTabNavigator:{
        screen: AppTabNavigator
    }
});
const AppDrawerNavigator = createDrawerNavigator({
   Home: AppStackNavigator,
    Logout: LogoutScreen

});

const SwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator
});

export default createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
