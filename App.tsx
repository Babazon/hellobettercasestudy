/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {Consent} from './src/screens/Consent';
import {CourseSelection} from './src/screens/CourseSelection';
import {SignupForm} from './src/screens/SignupForm';

export type SignupStackParamList = {
  CourseSelection: undefined;
  SignupForm: {title: string};
  ConsentScreen: {title: string};
};

const SignupStack = createNativeStackNavigator<SignupStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <SignupStack.Navigator initialRouteName="CourseSelection">
        <SignupStack.Screen
          name="CourseSelection"
          component={CourseSelection}
          options={{title: 'Sign Up'}}
        />
        <SignupStack.Screen
          name="SignupForm"
          component={SignupForm}
          options={({route}) => ({title: route.params?.title ?? ''})}
        />
        <SignupStack.Screen
          name="ConsentScreen"
          component={Consent}
          options={({route}) => ({title: route.params?.title ?? ''})}
        />
      </SignupStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
