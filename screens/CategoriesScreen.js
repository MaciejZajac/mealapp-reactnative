import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories screen</Text>
      <Button
        title='Go to meals'
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals' });
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});