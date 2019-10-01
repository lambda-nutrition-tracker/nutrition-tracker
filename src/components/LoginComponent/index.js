import React from 'react';
import styled from 'styled-components/native';
import { View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import axios from 'react-native-axios';
import { Icon, Text, Content, Form, Item, Input, Button } from 'native-base';

const LoginWrapper = styled.View`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const LoginFormWrapper = styled.View`
  display: flex;
`;

const LogiComponent = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <LoginWrapper>
      <LoginFormWrapper>
        <Icon name="contact" />
      </LoginFormWrapper>
      <Form>
        <Item>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={e => {
              setUsername(e);
            }}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={e => {
              setPassword(e);
            }}
            secureTextEntry
          />
        </Item>
        <Button
          block
          light
          onPress={() => {
            console.log("HERE");
            console.warn(password);
          }}>
          <Text>Log in</Text>
        </Button>
      </Form>
    </LoginWrapper>
  );
};

export default LogiComponent;
