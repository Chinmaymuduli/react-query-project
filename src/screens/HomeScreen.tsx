import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

const HomeScreen = () => {
  return (
    <View>
      <Card>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      </Card>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
