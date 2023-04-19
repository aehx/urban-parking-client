import React, { useContext } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemeContext } from "../context/ThemeContext";

interface SettingsButtonProps {
  label: string;
  icon: React.ReactNode;
  action?: any;
}
const SettingsButton = ({ label, icon, action }: SettingsButtonProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <View style={{ maxWidth: "50%", marginBottom: 20 }}>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "flex-end" }}
        onPress={action}
      >
        {icon}
        <Text style={[theme.primary,{ fontSize: 22, fontWeight: "500" }]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsButton;
