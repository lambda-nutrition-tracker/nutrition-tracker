import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmojiComponent = () => {
  const [smile, setSmile] = React.useState('😃 Test');
  return (
    <View style={style.container}>
      <Text> {smile} </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmojiComponent;
