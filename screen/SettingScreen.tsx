import React, { useContext } from "react";
import { View, ImageBackground, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";
import { styles } from "../style/screen/SettingScreen";
import SettingsButton from "../components/SettingsButton";
import { SettingScreenProps } from "../typescript/navigation/navigation.types";
import { ThemeContext } from "../context/ThemeContext";

const SettingScreen = ({ navigation }: SettingScreenProps) => {
  const { logout } = useContext(AuthContext);
  const { updateTheme,theme } = useContext(ThemeContext)
  return (
    <ImageBackground
      source={theme.imageBackground}
      style={[styles.container,theme.background]}
    >
      <View style={styles.titleContainer}>
        <Text style={[styles.title,theme.primary]}>Urban Parkings</Text>
      </View>
      <View style={styles.favoriteContainer}>
        <SettingsButton
          label="Favoris"
          icon={<Ionicons name="heart-outline" size={22} style={[styles.icon,theme.primary]} />}
          action={() => {
            navigation.navigate("Favorites");
          }}
        />
        <SettingsButton
          label="Thème"
          icon={<Icon name="theme-light-dark" size={22} style={[styles.icon,theme.primary]} />}
          action={updateTheme}
        />
      </View>
      <View style={{ paddingLeft: 40 }}>
        <SettingsButton
          label="Déconnexion"
          icon={<Icon name="logout" size={22} style={[styles.icon,theme.primary]} />}
          action={() => {
            logout();
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default SettingScreen;
