import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories screen</Text>
      <Button
        title='Go Back to Categories'
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
