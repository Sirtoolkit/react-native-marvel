import React from 'react';
import {Text, View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';

const SearchScreen = () => {
  return (
    <View>
      <View>
        <TextInput />
      </View>
      <FlatList data={[]} renderItem={({item}) => <Text>{item}</Text>} />
    </View>
  );
};

export default SearchScreen;
