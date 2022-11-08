import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SignupStackParamList} from '../../App';

export const SignupForm: React.FC = () => {
  const route = useRoute<RouteProp<SignupStackParamList, 'SignupForm'>>();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<SignupStackParamList, 'SignupForm'>
    >();
  const pageTitle = route.params.title;

  useLayoutEffect(() => {
    navigation.setOptions({headerTitle: pageTitle});
  });

  return (
    <View style={styles.containerStyle}>
      <Text>Signup Form</Text>
      <Button
        title={'Go To Consent Screen'}
        onPress={() =>
          navigation.navigate('ConsentScreen', {
            title: pageTitle,
          })
        }
      />
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
