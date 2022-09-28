import React, { FC } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"

const bowserLogo = require("./bowser.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: "italic",
}
const BOWSER: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 343,
  height: 230,
}
const CONTENT: TextStyle = {
  ...TEXT,
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.deepPurple,
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const FOOTER: ViewStyle = { backgroundColor: "#20162D" }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("home")

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Text style={TITLE} preset="header">
            The Three Little Pigs
          </Text>
          <Text style={CONTENT}>
            Once upon a time there were three little pigs living with their mom. One day, her mom
            told them it was time to make their own homes and live their own lives. So the three
            little pigs go out and look for places to build their homes.
          </Text>
          <Text style={CONTENT}>
            The youngest pig finds a place with lots of hay. So he grabs some hay and forms a house
            out of them. He finishes quickly and rests inside his house as he drinks lemonade. The
            other two pigs continue to look for suitable materials.
          </Text>
          <Text style={CONTENT}>
            After some time the oldest pig finds some trees and lots of sticks on the floor. So he
            decides to chop some trees down and pick up some sticks to build his home. He was able
            to build his home in a few days. The youngest pig makes fun of him because of how long
            he took to build a house. The oldest pig says "At least I am not take as long as our
            brother!" They both laugh at the middle brother his just been collecting clay this
            entire time.
          </Text>
          <Text style={CONTENT}>
            The middle pig collects an enormous amount of clay. He then cooks his clay in ovens to
            create bricks. He takes several weeks to create enough bricks to build his home. All
            this time, the other pigs are making fun of him since they are playing games, having
            fun, while the other pig is working. Eventually the pig finishes his home made out of
            bricks. The pigs then have fun together.
          </Text>
          <Text style={CONTENT}>
            One day, a big bad wolf comes to the youngest pig that made a house out of hay. The wolf
            says, "Open the door!!!", the pig stays quiet.
          </Text>
          <Text style={CONTENT}>
            "Then I will huff, and puff, and blow you away!", the house falls over and the pig runs
            to his brother's house made of sticks. The wolf chases the pig and says the same thing,
            "Open the door!!!", the pigs stay quiet.
          </Text>
          <Text style={CONTENT}>
            "Then I will huff, and puff, and blow you away!", the wooden house also falls over and
            the pigs run to their brother's brick house. The wolf angrily chases the pigs. They then
            arrive at the brick house and the wolf repeats the same thing. "Open the door! NOW!" the
            pigs stay quiet.
          </Text>
          <Text style={CONTENT}>
            "Then I will huff, and puff, and blow you away!", the brick house stays firmly standing.
            The wolf is confused since the house did not fall. The wolf tries again, "Then I will
            huff, and puff, and blow you away!! Why is this not working???" After several more
            attempts the wolf gives up and leaves the pigs alone.
          </Text>
          <Text style={CONTENT}>
            The pigs then work together to build 2 more brick houses to make sure they are always
            safe from the big bad wolf. After the work was done, they played, and had lots of fun.
          </Text>
        </Screen>
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}>
            <Button
              testID="next-screen-button"
              style={CONTINUE}
              textStyle={CONTINUE_TEXT}
              tx="welcomeScreen.continue"
              onPress={nextScreen}
            />
          </View>
        </SafeAreaView>
      </View>
    )
  },
)
