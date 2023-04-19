import React, { useContext } from "react";
import {inputStyles} from "../style/component/inputField"
import {
  View,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";

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
  const { theme } = useContext(ThemeContext)
  return (
    <View
      style={
        [inputStyles.container,theme.authColor.inputBorder]
      }
    >
      {icon}
      {inputType == "password" ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          placeholderTextColor={theme.authColor.primary.color}
          style={[inputStyles.input,theme.authColor.primary]}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          placeholder={label}
          placeholderTextColor={theme.authColor.primary.color}
          keyboardType={keyboardType}
          style={[inputStyles.input,theme.authColor.primary]}
          value={value}
          onChangeText={onChangeText}
        />
      )}
    </View>
  );
}
