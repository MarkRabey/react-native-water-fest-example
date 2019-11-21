import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// screens
import Schedule from '../screens/Schedule';
import Artists from '../screens/Artists';
import ArtistDetails from '../screens/ArtistDetails';
import UserProfile from '../screens/UserProfile';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Settings from '../screens/Settings';

import Header from '../components/Header';

const ScheduleStack = createStackNavigator({
  Schedule: {
    screen: Schedule,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Schedule" navigation={ navigation } />
    }),
  },
});

const ArtistsStack = createStackNavigator({
  Artists: {
    screen: Artists,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Artists" navigation={ navigation } />
    }),
  },
  ArtistDetails: {
    screen: ArtistDetails,
    navigationOptions: ({ navigation }) => {
      const artist = navigation.getParam('artist');
      return ({
        header: <Header back title={ artist ? artist.name : 'Artist Details' } navigation={ navigation } />
      });
    },
  },
});

const UserStack = createStackNavigator({
  UserProfile: {
    screen: UserProfile,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="User Profile" navigation={ navigation } />
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: <Header back title="Login" navigation={ navigation } />
    }),
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      header: <Header back title="Sign Up" navigation={ navigation } />
    }),
  },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Settings" navigation={ navigation } />
    }),
  },
});

const AppStack = createBottomTabNavigator({
  Schedule: {
    screen: ScheduleStack,
  },
  Artists: {
    screen: ArtistsStack,
  },
  User: {
    screen: UserStack,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  initialRouteName: 'Artists',
});

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
