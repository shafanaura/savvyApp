import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import IconFeather from 'react-native-vector-icons/Feather'
import { theme } from '../../styles/ThemeColor'
import { Text } from '../../styles/Typography'
import styled from 'styled-components'
import { Row } from '../../styles/ComponentStyle'

const HeaderContacts = ({ navigation }) => {
  return (
    <ContainerColor>
      <Row align="center" justify="space-between">
        <IconFeather name="bell" size={24} />
        <Text bold size="18px">
          Contacts
        </Text>
        <Row align="center">
          <TouchableOpacity
            onPress={() => navigation.navigate('search-screen')}>
            <IconFeather name="search" size={24} />
          </TouchableOpacity>
          <IconFeather style={styles.icon} name="more-vertical" size={24} />
        </Row>
      </Row>
    </ContainerColor>
  )
}

const ContainerColor = styled.View`
  background-color: #fff;
  padding: 20px 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.line};
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

export default HeaderContacts
