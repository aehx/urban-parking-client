import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";

interface inputFieldProps {
  label: string;
  icon: React.ReactNode;
  inputType?: string;
  keyboardType?: KeyboardTypeOptions;
  fieldButtonLabel?: string;
  fieldButtonFunction?: any;
  inputOnChangeFunction?: any;
  onChangeText: any;
  value: string;
  style: any;
  input: "map" | "form";
  forwardRef: React.Ref<TextInput>;
}

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onChangeText,
  value,
  input,
  style,
  forwardRef,
}: inputFieldProps) {
  return (
    <View
      style={
        input === "form"
          ? {
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }
          : {
              flexDirection: "row",
              borderRadius: 20,
              backgroundColor: "#0000009f",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              paddingBottom: 8,
              paddingLeft: 8,
              paddingTop: 8,
              marginBottom: 25,
              position: "absolute",
              top: "10%",
            }
      }
    >
      {icon}
      {inputType == "password" ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          placeholderTextColor="#cccccc9c"
          style={style}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          ref={forwardRef}
          placeholder={label}
          placeholderTextColor={input === "form" ? "#cccccc9c" : "#ddd"}
          keyboardType={keyboardType}
          style={style}
          value={value}
          onChangeText={onChangeText}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: "#2795FF", fontWeight: "700" }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
