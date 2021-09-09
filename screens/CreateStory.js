import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: 'image_1',
      dropdownHeight: 40,
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      let preview_images = {
        image_1: require('../assets/story_image_1.png'),
        image_2: require('../assets/story_image_2.png'),
        image_3: require('../assets/story_image_3.png'),
        image_4: require('../assets/story_image_4.png'),
        image_5: require('../assets/story_image_5.png'),
      };
      //console.log(this.state.previewImage);
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                style={styles.iconImage}
                source={require('../assets/logo.png')}
              />
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Story</Text>
            </View>
          </View>
          <KeyboardAvoidingView
            style={styles.fieldsContainer}
            behavior="position">
            <ScrollView>
              <Image
                source={preview_images[this.state.previewImage]}
                style={styles.previewImage}
              />
              <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                <DropDownPicker
                  items={[
                    { label: 'Image 1', value: 'image_1' },
                    { label: 'Image 2', value: 'image_2' },
                    { label: 'Image 3', value: 'image_3' },
                    { label: 'Image 4', value: 'image_4' },
                    { label: 'Image 5', value: 'image_5' },
                  ]}
                  containerStyle={{
                    height: 40,
                    borderRadius: 100,
                    marginBottom: 10
                    //backgroundColor:'green'
                  }}
                  style={{
                    backgroundColor: 'transparent'
                  }}
                  dropDownStyle={{ backgroundColor: '#2F345D' }}
                  labelStyle={{ color: 'green', fontFamily: 'Bubblegum-Sans' }}
                  //arrowStyle={{ color: 'white', fontFamily: 'Bubblegum-Sans' }}
                  itemStyle={{ justifyContent: 'flex-start' }}
                  defaultValue={this.state.previewImage}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
                  onChangeItem={(item) => {
                    this.setState({
                      previewImage: item.value,
                    });
                  }}
                />
              </View>
              <TextInput
                style={styles.inputFont}
                placeholder={'Title'}
                placeholderTextColor="white"
                onChangeText={(title) => this.setState({ title })}
              />

              <TextInput
                style={
                  (styles.inputFont, styles.inputFontExtra, styles.inputTextBig)
                }
                placeholder={'Description'}
                placeholderTextColor="white"
                onChangeText={(description) => this.setState({ description })}
                multiline={true}
                numberOfLines={4}
              />

              <TextInput
                style={
                  (styles.inputFont, styles.inputFontExtra, styles.inputTextBig)
                }
                placeholder={'Story'}
                placeholderTextColor="white"
                onChangeText={(story) => this.setState({ story })}
                multiline={true}
                numberOfLines={20}
              />

              <TextInput
                style={
                  (styles.inputFont, styles.inputFontExtra, styles.inputTextBig)
                }
                placeholder={'Moral of the story'}
                placeholderTextColor="white"
                onChangeText={(moral) => this.setState({ moral })}
                multiline={true}
                numberOfLines={3}
              />
            </ScrollView>
          </KeyboardAvoidingView>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: 'top',
    padding: RFValue(5),
  },
});
