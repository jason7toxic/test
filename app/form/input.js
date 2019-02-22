import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

class Input extends PureComponent {
  render() {
    const {
      name, // field name - required
      customStyle,
      onChangeText, // event
      value, // field value
      disabled,
      placeholder,
      errors, // this array prop is automatically passed down to this component from <Form />,
      ...rest
    } = this.props;
    return (
      <View style={styles.root}>
        <TextInput
          mode="outlined"
          value={value && value}
          onChangeText={onChangeText ? val => onChangeText(val) : null}
          placeholder={placeholder ? placeholder : ""}
          disabled={disabled}
          style={customStyle ? customStyle : {}}
        />
        {errors &&
          errors.length > 0 &&
          errors.map((item, index) =>
            item.field === name && item.error ? (
              <HelperText type="error">{item.error}</HelperText>
            ) : (
              <View />
            )
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    alignSelf: "center"
  }
});

export default Input;
