import React, { Component } from "react";
import Home from "./HomeComponent.js";
import Profile from "./ProfileComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Favorites from "./FavoritesComponent";
import Constants from "expo-constants";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";
import SafeAreaView from "react-native-safe-area-view";
import { connect } from "react-redux";
import {
  fetchCampsites,
  fetchComments,
  fetchPromotions,
  fetchPartners,
} from "../redux/ActionCreators";
import Reservation from "./ReservationComponent";

const mapDispatchToProps = {
  fetchCampsites,
  fetchComments,
  fetchPromotions,
  fetchPartners,
};

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <Icon
          name="list"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },

  initialRouteName: "Profile",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#5637DD",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      color: "#fff",
    },
  },
});

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="home"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="info-circle"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="address-card"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: { screen: Favorites },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="heart"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./images/logo.png")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Skate Switch</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="list" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        drawerLabel: "My Favorites",
        drawerIcon: ({ tintColor }) => (
          <Icon name="heart" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: "About Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="info-circle"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        drawerLabel: "Contact Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="address-card"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: "#CEC8FF",
    contentComponent: CustomDrawerContentComponent,
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
        <Text>Hello world!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#5637DD",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default Main;
