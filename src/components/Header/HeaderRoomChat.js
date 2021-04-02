import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import { HeaderWrapper } from './HeaderWrapper'
import { Text } from '../../styles/Typography'
import { Row } from '../../styles/ComponentStyle'
import { connect } from 'react-redux'
import { userDetail } from '../../redux/actions/user.action'
import { chatView, senderId } from '../../redux/actions/chat.action'

export class HeaderRoomChat extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Row align="center">
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <IconMaterial name="west" size={30} />
          </TouchableOpacity>
          <Text bold ml="25px" size="18px">
            {this.props.chat.sender.senderName}
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
}

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

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  chat: state.chat,
})

const mapDispatchToProps = {
  userDetail,
  chatView,
  senderId,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRoomChat)
