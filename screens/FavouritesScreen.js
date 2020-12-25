import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavouritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories screen</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
