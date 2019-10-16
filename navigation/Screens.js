import React from 'react';
import { Easing, Animated } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Block } from 'galio-framework';

// screens
import Schedule from '../screens/Schedule';
import Artists from '../screens/Artists';
import Settings from '../screens/Settings';

const ScheduleStack = createStackNavigator({
  Schedule: {
    screen: Schedule,
  },
});

const ArtistsStack = createStackNavigator({
  Artists: {
    screen: Artists,
  },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
  },
});

const AppStack = createBottomTabNavigator({
  Schedule: {
    screen: ScheduleStack,
  },
  Artists: {
    screen: ArtistsStack,
  },
  Settings: {
    screen: SettingsStack,
  },
});

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
