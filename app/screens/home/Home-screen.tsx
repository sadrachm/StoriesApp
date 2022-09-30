import React, { useEffect, FC } from "react"
import {
  FlatList,
  TextStyle,
  View,
  ViewStyle,
  ImageStyle,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Animated,
  TouchableOpacity
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Header,
  Screen,
  Text,
  AutoImage as Image,
  GradientBackground,
  Button,
  FormRow,
} from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import { NavigatorParamList } from "../../navigators"
export const pig = require("./Pigs.png")
export const cinder = require("./Cinderella.png")
export const hood = require("./RedRidingHood.png")
export const seed = require("./EmperorsSeed.png")

const OFFSET = 40
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2
const ITEM_HEIGHT = 400

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  ({ navigation }) => {
    const scrollX = React.useRef(new Animated.Value(0)).current
    const goBack = () => navigation.goBack()

    const { characterStore } = useStores()
    const { characters } = characterStore
    const stories = [
      { key: "1", title: "The Three Little Pigs", src: pig },
      { key: "2", title: "Little Red Riding Hood", src: hood },
      { key: "3", title: "Cinderella", src: cinder },
      { key: "4", title: "The Emperor's Seed", src: seed },
    ]
    useEffect(() => {
      async function fetchData() {
        await characterStore.getCharacters()
      }

      fetchData()
    }, [])
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
    return (
      <View testID="DemoListScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
          <Header headerText="Home" style={HEADER} titleStyle={HEADER_TITLE} />
          <Text style={HEADER}>Choose A Story</Text>
          {/* Credit to: https://chanonroy.medium.com/building-a-netflix-style-card-carousel-in-react-native-649afcd8d78e */}
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
              horizontal={true}
              decelerationRate={"fast"}
              snapToInterval={ITEM_WIDTH}
              style={{ marginTop: 40, paddingHorizontal: 0 }}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              disableIntervalMomentum
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                useNativeDriver: false,
              })}
              scrollEventThrottle={12}
            >
              {stories.map((item, idx) => {
                const inputRange = [
                  (idx - 1) * ITEM_WIDTH,
                  idx * ITEM_WIDTH,
                  (idx + 1) * ITEM_WIDTH,
                ]

                const translate = scrollX.interpolate({
                  inputRange,
                  outputRange: [0.85, 1, 0.85],
                })

                const opacity = scrollX.interpolate({
                  inputRange,
                  outputRange: [0.5, 1, 0.5],
                })

                return (
                  <AnimatedTouchable
                  onPress={()=> navigation.navigate("story"+item.key)
                  }
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                      marginLeft: idx === 0 ? OFFSET : undefined,
                      marginRight: idx === stories.length - 1 ? OFFSET : undefined,
                      opacity: opacity,
                      transform: [{ scale: translate }],
                    }}
                  >
                      <ImageBackground
                        source={item.src}
                        style={{
                          flex: 1,
                          resizeMode: "cover",
                          justifyContent: "center",
                        }}
                        imageStyle={{ borderRadius: 6 }}
                      />
                  </AnimatedTouchable>
                )
              })}
            </ScrollView>
          </SafeAreaView>
        </Screen>
      </View>
    )
  },
)

const FULL: ViewStyle = {
  flex: 1,
}
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}
const HEADER: TextStyle = {
  paddingBottom: spacing[5] - 1,
  paddingTop: spacing[3],
  textAlign: "center",
  fontSize: 25,
}
const HEADER_TITLE: TextStyle = {
  fontSize: 12,
  fontWeight: "bold",
  letterSpacing: 1.5,
  lineHeight: 15,
  textAlign: "center",
}
const LIST_CONTAINER: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  padding: 10,
}
const LIST_TEXT: TextStyle = {
  marginLeft: 10,
  textAlign: "center",
  fontWeight: "bold",
  fontStyle: "italic",
  fontSize: 20,
  textDecorationLine: "underline",
}

const IGNITE: ImageStyle = {
  marginVertical: spacing[6],
  alignSelf: "center",
  width: 180,
  height: 100,
}
