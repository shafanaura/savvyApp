import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
import EnterPassword from '../screens/Login/EnterPassword'
import EnterEmail from '../screens/Register/EnterEmail'
import CreatePassword from '../screens/Register/CreatePassword'
import EnterName from '../screens/Register/EnterName'
import TabNavigator from './TabNavigator'
import ProfileScreen from '../screens/Profile'
import HeaderHome from '../components/Header/HeaderHome'
import HeaderAuth from '../components/Header/HeaderAuth'
import HeaderProfile from '../components/Header/HeaderProfile'

const Stack = createStackNavigator()

export class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* Login screen */}
          {/* <Stack.Screen
            name="login"
            component={Login}
            options={{
              header: () => <HeaderAuth />,
            }}
          />
          <Stack.Screen
            name="enter-password"
            component={EnterPassword}
            options={{
              header: () => <HeaderAuth />,
            }}
          /> */}
          {/* Register Screen */}
          {/* <Stack.Screen
            name="register"
            component={Register}
            options={{
              header: () => <HeaderAuth />,
            }}
          />
          <Stack.Screen
            name="enter-email"
            component={EnterEmail}
            options={{
              header: () => <HeaderAuth />,
            }}
          />
          <Stack.Screen
            name="create-password"
            component={CreatePassword}
            options={{
              header: () => <HeaderAuth />,
            }}
          />
          <Stack.Screen
            name="enter-name"
            component={EnterName}
            options={{
              header: () => <HeaderAuth />,
            }}
          /> */}
          {/* Home Screen */}
          <Stack.Screen
            name="tab-navigator"
            component={TabNavigator}
            options={{
              header: () => <HeaderHome />,
            }}
          />
          {/* Profile Screen */}
          <Stack.Screen
            name="profile-screen"
            component={ProfileScreen}
            options={{
              header: () => <HeaderProfile />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default AppNavigator