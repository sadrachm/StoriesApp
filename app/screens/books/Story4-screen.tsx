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
export const Story4Screen: FC<StackScreenProps<NavigatorParamList, "story4">> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.goBack()

    const storyContent = [
      `There was once an Emperor who had no children and needed to choose a successor.`,
      `Thousands of children from across the kingdom came to the palace and were surprised when the Emperor exclaimed that he was going to choose one of them. He gave them all a seed. They were to go home to their villages, plant the seed in a pot and tend it for a year. When they return in a year, the Emperor would judge their efforts and choose his successor.`,
      `There was a boy named Ling who received his seed and returned to his village.`,
      `His mother helped him to choose a pot and put some soil into it.`,
      `Ling watered his pot every day.`,
      `Once a week, the children of the village would get together to compare their plants. After a few weeks, there were signs of life in all but Ling’s pot.`,
      `The weeks passed and Ling continued to water his pot every day.`,
      `After a few months, the pots really came to life. Some had trees starting to grow, some had flowers and some had leafy shrubs. Poor old Ling still had nothing growing in his pot, leading the other children to make fun of him.`,       
      `Ling continued to water his pot every day.`,
      `A year passed and it was time to return to the palace to show what had grown and decide on the new heir.`,
      `Ling was anxious as his pot still showed no signs of life. “What if they punish me? They won’t know that I’ve watered it every day, they’ll think that I’m lazy.”`,
      `His mother looked him in the eye and explained that whatever the consequences were, he had to return and show the Emperor his barren pot.`,
      `Ling and the other children entered the palace gates. By now, some of the plants were looking magnificent and the children were wondering which one the Emperor would choose.`,
      `Ling was embarrassed as other children looked at his lifeless pot and scoffed.`,
      `The Emperor came out and started to make his way through the crowd, looking at the many impressive trees, shrubs and flowers that were on display. The boys all puffed their chests out and tried to look as regal as possible, hoping that they would be chosen as the heir to the empire.`,
      `Then the Emperor came to Ling. He looked at the pot then he looked at Ling.`,
      `“What happened here?” He asked.`,
      `“I watered the pot every day, but nothing ever grew.” Ling muttered nervously.`,
      `Then he moved on.`,
      `After a few hours, the Emperor finally finished his assessment looking at wonderful grown plants.`,
      `He stood in front of the children and congratulated them on their efforts.`,
      `“Clearly, some of you desperately want to be Emperor and would do anything to make that happen, but there is one boy that I would like to point out as he has come to me with nothing. Ling, come here please.”`,
      `“Oh no,” thought Ling. He slowly sauntered to the front of the group, holding his barren pot.`,
      `The Emperor held up the pot for all to see and the other children laughed. Then the Emperor continued, “A year ago, I gave you all a seed. I told you to go away, plant the seed and return with your plant. The seeds that I gave you all were boiled until they were no longer viable and wouldn’t grow, but I see before me thousands of plants and only one barren pot. Integrity and courage are more important values for leadership than proud displays, so Ling here will be 
      my heir."`,
    ]

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header
            headerText="Story 4"
            leftIcon="back"
            onLeftPress={goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
          <StoryTemplate title="The Emperor's Seed" data={storyContent} />
        </Screen>
      </View>
    )
  },
)
