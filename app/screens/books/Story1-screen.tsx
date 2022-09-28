import React, { FC } from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Header, Screen, GradientBackground, StoryTemplate } from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"

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
export const Story1Screen: FC<StackScreenProps<NavigatorParamList, "story1">> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.goBack()

    const storyContent = [
      `Once upon a time there were three little pigs and the time came for them to leave home and seek their fortunes. Before they left, their mother told them " Whatever you do , do it the best that you can because that's the way to get along in the world.`,
      `The first little pig built his house out of straw because it was the easiest thing to do. The second little pig built his house out of sticks. This was a little bit stronger than a straw house. The third little pig built his house out of bricks.`,
      `One night the big bad wolf, who dearly loved to eat fat little piggies, came along and saw the first little pig in his house of straw. He said "Let me in, Let me in, little pig or I'll huff and I'll puff and I'll blow your house in!" 
      "Not by the hair of my chinny chin chin", said the little pig. But of course the wolf did blow the house in and ate the first little pig.`,
      `The wolf then came to the house of sticks. "Let me in ,Let me in little pig or I'll huff and I'll puff and I'll blow your house in" "Not by the hair of my chinny chin chin", said the little pig. But the wolf blew that house in too, and ate the second little pig.`,
      `The wolf then came to the house of bricks. " Let me in , let me in" cried the wolf "Or I'll huff and I'll puff till I blow your house in" "Not by the hair of my chinny chin chin" said the pigs. Well, the wolf huffed and puffed but he 
      could not blow down that brick house.`,
      `But the wolf was a sly old wolf and he climbed up on the roof to look for a way into the brick house.`,
      `The little pig saw the wolf climb up on the roof and lit a roaring fire in the fireplace and placed on it a large kettle of water.`,
      `When the wolf finally found the hole in the chimney he crawled down and KERSPLASH right into that kettle of water and that was the end of his troubles with the big bad wolf.`,
      `The next day the little pig invited his mother over . She said "You see it is just as I told you. The way to get along in the world is to do things as well as you can." Fortunately for that little pig, he learned that lesson. And he just lived happily ever after!`,
    ]

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header
            headerText="Story 1"
            leftIcon="back"
            onLeftPress={goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
          <StoryTemplate title="The Three Little Pigs" data={storyContent} />
        </Screen>
      </View>
    )
  },
)
