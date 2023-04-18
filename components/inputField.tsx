import React from "react";
import {inputStyles} from "../style/component/inputField"
import {
  View,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";

interface inputFieldProps {
  label: string;
  icon: React.ReactNode;
  inputType?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (key:string)=>void;
  value?: string;
}

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  onChangeText,
  value,
}: inputFieldProps) {
  return (
    <View
      style={
        inputStyles.container
      }
    >
      {icon}
      {inputType == "password" ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          placeholderTextColor="#cccccc9c"
          style={inputStyles.input}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          placeholder={label}
          placeholderTextColor={"#cccccc9c"}
          keyboardType={keyboardType}
          style={inputStyles.input}
          value={value}
          onChangeText={onChangeText}
        />
      )}
    </View>
  );
}
