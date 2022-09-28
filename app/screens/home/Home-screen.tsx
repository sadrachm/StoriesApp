import React, { useEffect, FC } from "react"
import { FlatList, TextStyle, View, ViewStyle, ImageStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Header,
  Screen,
  Text,
  AutoImage as Image,
  GradientBackground,
  Button,
} from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import { NavigatorParamList } from "../../navigators"

const FULL: ViewStyle = {
  flex: 1,
}
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}
const HEADER: TextStyle = {
  paddingBottom: spacing[5] - 1,
  paddingTop: spacing[3],
  textAlign:"center",
  fontSize:25,
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

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.goBack()

    const { characterStore } = useStores()
    const { characters } = characterStore
    const stories = [
      { key: "1", title: "The Three Little Pigs" },
      { key: "2", title: "Little Red Riding Hood" },
      { key: "3", title: "Cinderella" },
      { key: "4", title: "The Emperor's Seed" },
    ]
    useEffect(() => {
      async function fetchData() {
        await characterStore.getCharacters()
      }

      fetchData()
    }, [])

    return (
      <View testID="DemoListScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
          <Header
            headerText="Home"
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
          <Text style={HEADER}>Choose A Story</Text>
          <FlatList
            data={stories}
            renderItem={({ item }) => (
              <View style={LIST_CONTAINER}>
                <Text
                  style={LIST_TEXT}
                  onPress={() => {
                    const name = "story" + item.key
                    navigation.navigate(name)
                  }}
                >
                  {item.title}
                </Text>
              </View>
            )}
          />
        </Screen>
      </View>
    )
  },
)
