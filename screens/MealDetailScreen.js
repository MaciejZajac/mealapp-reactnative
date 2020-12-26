import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ScrollView,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log('selectedMeal', selectedMeal);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <View style={styles.detail}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text>List of ingredients...</Text>
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((steps) => (
        <ListItem key={steps}>{steps}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favourite'
          iconName='ios-star'
          onPress={() => {
            console.log('Marked as favourite');
          }}
        />
        {/* <Item
          title='Favourite'
          iconName='ios-star'
          onPress={() => {
            console.log('Marked as favourite');
          }}
        /> */}
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  detail: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
