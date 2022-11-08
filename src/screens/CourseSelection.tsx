import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SignupStackParamList} from '../../App';

export const CourseSelection: React.FC = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<SignupStackParamList, 'CourseSelection'>
    >();
  return (
    <View style={styles.containerStyle}>
      <Text>Course Selection</Text>
      <Button
        title={'Stress und Burnout Course'}
        onPress={() =>
          navigation.navigate('SignupForm', {
            title: 'Hello Better Stress und Burnout',
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
