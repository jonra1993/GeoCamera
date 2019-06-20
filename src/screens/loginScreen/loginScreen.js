import React, { Component } from "react";
import {Container, Text, Content, Form, Item, Input, Label , Button} from "native-base";
import { Col} from "react-native-easy-grid";
import styles from "./styles";

class LoginScreen extends Component {
  render() {
    return (
      <Container >
        <Content >
          <Form>
            <Col style={{ height: 200, alignSelf: "auto" ,justifyContent: "center",alignItems: "center" }}>
              <Text style={styles.titleText} >GeoCam</Text>
            </Col>
            <Item floatingLabel>
              <Label>Phone</Label>
              <Input keyboardType={"numeric"} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
            <Col style={{padding:20, height: 150,justifyContent: "center",alignItems: "center"}}>
                <Button primary full rounded
                onPress={()=>this.props.navigation.navigate("CameraScreen")}
                >
                  <Text> Login </Text>
                </Button>
            </Col>
            <Col style={{ height: 50, alignSelf: "center", justifyContent: "center",alignItems: "center"}}>
              <Button transparent  >
                <Text> Forgot your password?</Text>
              </Button>
            </Col>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default (LoginScreen);

