import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Container } from 'native-base';
import Button from './Common/Button';

import CardItem from './Common/CardItem';
import Input from './Common/Input';
import Index from './reducer/Index';
import { loginUser } from './actions/AuthAction';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate('Home');
    }
  }

  _onLoginPressed() {
    const { username, password } = this.state;
    this.props.loginUser({ username, password });
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={require('./image/backImage.png')}
          style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Image
              source={require('./image/Group 18.png')}
              style={styles.image}
            />
            <CardItem>
              <Input
                label="البريد الألكتروني"
                secureTextEntry={false}
                onChangeText={username => this.setState({ username })}
              />
            </CardItem>

            <CardItem>
              <Input
                label="كلمة المرور"
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
              />
            </CardItem>
            <Button onPress={this._onLoginPressed.bind(this)}>
              تسجيل الدخول
            </Button>
            <Text style={styles.text}>لديك حساب-تسجيل الدخول</Text>
            <Text style={styles.errorStyle}>{this.props.error}</Text>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 17,
    alignSelf: 'center',
    color: '#fff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  image: {
    height: 100,
    width: 120,
    marginLeft: 130,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    alignSelf: 'center',
    color: '#fff',
    marginBottom: 50,
    marginTop: 0,
  },
});
const mapStateToProps = state => {
  return {
    error: state.auth.error,
    user: state.auth.user,
  };
};
export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
