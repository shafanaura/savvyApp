import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import { theme } from '../../styles/ThemeColor'
import { HeaderWrapper } from './HeaderWrapper'
import { useNavigation } from '@react-navigation/native'
import { Text } from '../../styles/Typography'
import styled from 'styled-components'
import Logo from '../../assets/images/logos/skype-logo.png'
import { Container, Row } from '../../styles/ComponentStyle'
import avatar from '../../assets/images/avatar.png'

export const HeaderChat = () => {
  const navigation = useNavigation()
  return (
    <HeaderWrapper>
      <Row align="center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconMaterial name="west" size={30} />
        </TouchableOpacity>
        <Text bold ml="25px" size="18px">
          Audi
        </Text>
      </Row>
      <Row>
        <TouchableOpacity>
          <IconFeather style={styles.icon} name="video" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconFeather style={styles.icon} name="phone" size={24} />
        </TouchableOpacity>
      </Row>
    </HeaderWrapper>
  )
}

export const HeaderAuth = () => {
  return (
    <ContainerAuth>
      <Row align="center" justify="center">
        <Image source={Logo} style={styles.img} />
      </Row>
    </ContainerAuth>
  )
}

const ContainerColor = styled.View`
  background-color: #fff;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.line};
`
const ContainerAuth = styled.View`
  background-color: #fff;
  padding: 10px;
`

const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 80,
    resizeMode: 'contain',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  icon: {
    marginLeft: 20,
  },
})
