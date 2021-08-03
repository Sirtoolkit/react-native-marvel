import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {ActivityIndicator, View, ScrollView, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import CarouselCharacters from '../components/CarouselCharacters';
import ListComic from '../components/ListComic';

import {useMarvelApi} from '../hooks/useMarvelApi';
import {RootStackParams} from '../routes/StackNavigation';

interface Props extends DrawerScreenProps<RootStackParams, 'HomeScreen'> {}
export const HomeScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="menu-outline"
          size={30}
          // onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerRight: () => (
        <Icon
          name="search-outline"
          size={30}
          onPress={() => {
            navigation.navigate('SearchScreen', characters);
          }}
        />
      ),
      headerShown: true,
    });
  }, []);
  const {characters, comics, isLoading} = useMarvelApi();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size='large' />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <CarouselCharacters characterts={characters} />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 8,
          }}>
          Comics
        </Text>
        <ListComic comics={comics} />
      </View>
    </ScrollView>
  );
};
