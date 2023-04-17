import {
  View,
  ImageBackground,
} from "react-native";
import {styles} from "../style/screen/SettingScreen"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useContext } from "react";
import SettingsButton from "../components/SettingsButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";

const SettingScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
    >
      <View style={styles.favoriteContainer}>
        <SettingsButton
          label="Favoris"
          icon={
            <Ionicons
              name="heart-outline"
              size={22}
              style={styles.icon}
            />
          }
          action={() => {
            navigation.navigate("Favorites");
          }}
        />
        <SettingsButton
          label="profil"
          icon={
            <Ionicons
              name="person-outline"
              size={22}
              style={styles.icon}
            />
          }
          action={() => {
            navigation.navigate("Profil");
          }}
        />
        <SettingsButton
          label="Thème"
          icon={
            <Icon
              name="theme-light-dark"
              size={22}
              style={styles.icon}
            />
          }
          action={() => {}}
        />
      </View>
      <View style={{ paddingLeft: 40 }}>
        <SettingsButton
          label="Déconnexion"
          icon={
            <Icon
              name="logout"
              size={22}
              style={styles.icon}
            />
          }
          action={() => {
            logout();
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default SettingScreen;
