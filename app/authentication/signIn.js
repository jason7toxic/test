import React, { Component } from "react";
import { View, AsyncStorage, StyleSheet, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../form/input";
import { Button } from "react-native-paper";
import { Form, Field } from "react-native-validate-form";

const required = value => (value ? undefined : "This is a required field.");
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value)
    ? "Please provide a valid email address."
    : undefined;

export default class SignInScreen extends Component {
  static navigationOptions = {};

  state = {
    validate: true,
    errors: [],
    email: ""
  };

  submitForm() {
    let submitResults = this.myForm.validate();

    let errors = [];

    submitResults.forEach(item => {
      errors.push({ field: item.fieldName, error: item.error });
    });

    this.setState({ errors: errors });
  }

  submitSuccess() {
    console.log("Submit Success!");
  }

  submitFailed() {
    console.log("Submit Faield!");
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.content}>
          <Form
            ref={ref => (this.myForm = ref)}
            validate={true}
            submit={this.submitSuccess.bind(this)}
            failed={this.submitFailed.bind(this)}
            errors={this.state.errors}
          >
            <KeyboardAwareScrollView
              contentContainerStyle={{
                flex: 1
              }}
            >
              <View style={styles.loginWrapper}>
                <View style={styles.loginPanel}>
                  <Field
                    required
                    component={Input}
                    validations={[required, email]}
                    name="email"
                    value={this.state.email}
                    onChangeText={val => this.setState({ email: val })}
                    // customStyle={{ width: 100 }}
                  />
                  <Button
                    mode="contained"
                    onPress={() => {}}
                    style={styles.loginBtn}
                  >
                    Sign In
                  </Button>
                </View>
              </View>
            </KeyboardAwareScrollView>
            )}
          </Form>
        </View>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}

var styles = StyleSheet.create({
  root: {
    flex: 1
  },
  content: {
    flex: 1
  },
  loginWrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid"
  },
  loginPanel: {
    width: "50%",
    height: "50%"
  },
  loginBtn: {
    marginTop: 10,
    padding: 10
  },
  footer: {
    height: 50
  },
  slogan: {
    flex: 1,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff"
  }
});
