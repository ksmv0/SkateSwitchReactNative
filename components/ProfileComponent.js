import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { Tile } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";
import * as Animatable from "react-native-animatable";

const mapStatesToProps = (state) => {
  return {
    campsites: state.campsites,
  };
};

class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderProfileItem = ({ item }) => {
      return (
        <Animatable.View animation="fadeInRightBig" duration={2000}>
          <Tile
            title={item.name}
            caption={item.description}
            featured
            onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
            imageSrc={{ uri: baseUrl + item.image }}
          />
        </Animatable.View>
      );
    };

    if (this.props.campsites.isLoading) {
      return <Loading />;
    }
    if (this.props.campsites.errMess) {
      return (
        <View>
          <Text>{this.props.campsites.errMess}</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.campsites.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default connect(mapStatesToProps)(Profile);
