import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SignupStackParamList} from '../../App';

export const Consent: React.FC = () => {
  const route = useRoute<RouteProp<SignupStackParamList, 'ConsentScreen'>>();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<SignupStackParamList, 'ConsentScreen'>
    >();
  const pageTitle = route.params.title;

  useLayoutEffect(() => {
    navigation.setOptions({headerTitle: pageTitle});
  });
  return (
    <View style={styles.containerStyle}>
      <Text>Consent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
