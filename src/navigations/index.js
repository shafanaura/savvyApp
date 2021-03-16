import React, { Component } from 'react'
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
import { HeaderAuth } from '../components/Header/HeaderAuth'
import ManageProfile from '../screens/Profile/ManageProfile'
import RoomChat from '../screens/RoomChat'

import { connect } from 'react-redux'
import { login, autoLogin } from '../redux/actions/auth.action'
import HeaderRoomChat from '../components/Header/HeaderRoomChat'

const Stack = createStackNavigator()

export class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {typeof this.props.auth.token === 'string' ? (
            <>
              {/* Home Screen */}
              <Stack.Screen
                name="home-screen"
                component={TabNavigator}
                options={{
                  headerShown: false,
                }}
              />
              {/* Profile Screen */}
              <Stack.Screen
                name="profileScreen"
                component={ProfileScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="manage-profile"
                component={ManageProfile}
                options={{
                  headerShown: false,
                }}
              />
              {/* RoomChat screen */}
              <Stack.Screen
                name="chat-screen"
                component={RoomChat}
                options={{
                  header: () => <HeaderRoomChat />,
                }}
              />
            </>
          ) : (
            <>
              {/* Login screen */}
              <Stack.Screen
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
              />
              {/* Register Screen */}
              <Stack.Screen
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
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})
const mapDispatchToProps = { login, autoLogin }

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)
