import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavouritesScreen from '../screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { Platform, Text } from 'react-native';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A screen',
};
const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories',
      },
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavouritesNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenContent = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text
            style={{
              fontFamily: 'open-sans-bold',
              textAlign: 'center',
            }}
          >
            Meals
          </Text>
        ) : (
          'Meals'
        ),
    },
  },
  Favourites: {
    screen: FavouritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text
            style={{
              fontFamily: 'open-sans-bold',
              textAlign: 'center',
            }}
          >
            Favourites
          </Text>
        ) : (
          'Favourites'
        ),
    },
  },
};
const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const MealsFavTabNavigator = createBottomTabNavigator(tabScreenContent, {
  tabBarOptions: {
    activeTintColor: Colors.accentColor,
  },
});

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
  }
);

export default createAppContainer(MainNavigator);
