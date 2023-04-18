import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SettingsButtonProps {
  label: string;
  icon: any;
  action?: any;
}
const SettingsButton = ({ label, icon, action }: SettingsButtonProps) => {
  return (
    <View style={{ maxWidth: "50%", marginBottom: 20 }}>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "flex-end" }}
        onPress={action}
      >
        {icon}
        <Text style={{ color: "#ddd", fontSize: 22, fontWeight: "500" }}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsButton;
