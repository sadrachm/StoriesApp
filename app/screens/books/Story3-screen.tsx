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
export const Story3Screen: FC<StackScreenProps<NavigatorParamList, "story3">> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.goBack()

    const storyContent = [
      `A long time ago there was a very beautiful girl named Cinderella.`,
      `Cinderella had long red hair, green eyes, and freckles all over her nose. She was clever and kind, and she loved to tell jokes.`,
      `But she was very unhappy. Her father and mother had died, and Cinderella lived with her stepmother and two stepsisters.`,
      `Although they all lived in a big house, they were actually quite poor. Their money was nearly gone.`,
      `Sad Cinderella`,
      `Cinderella's stepmother wanted one of her daughters to marry a rich man so they would no longer be poor.`,
      `But Cinderella's stepsisters were not as pretty as Cinderella, not as kind as Cinderella, and not as funny as Cinderella.`,
      `The men who came to the house always fell immediately in love with Cinderella, and never noticed the stepsisters.`,
      `This frustrated the stepmother, so she ordered Cinderella to do all the chores.`,
      `"Sweep the hallway!" demanded the stepmother.`,
      `"Clean the kitchen!"  `,
      `"Cook our dinner!"`,
      `"Tidy our bedrooms!"  `,
      `"Mop the bathroom!"`,
      `"Wipe the windows!"`,
      `"Quick! Hurry!"`,
      `The stepmother tried hard to make Cinderella miserable.`,
      `The stepsisters had beautiful dresses and shoes, but Cinderella's dress was made of old rags.`,
      `The stepsisters always ate the most delicious foods, but Cinderella always ate scraps.`,
      `And the stepsisters slept in their comfortable beds in their bedrooms, but Cinderella slept on a straw bed on the kitchen floor.`,
      `Cinderella mopping the floor`,
      `The animals were Cinderella's only friends. In the evening she sat beside the fireplace in the kitchen and told jokes to the family of mice who lived in the wall. She talked to the cat.`,
      `"Things will get better one day," she told the cat.`,
      `"Meow…" the cat replied.`,
      `One day, while Cinderella was in the garden picking pumpkins, a letter arrived at the house. It was an invitation to the king's summer ball.`,
      `Cinderella's stepmother and stepsisters were very excited.`,
      `"The prince will be there!"`,
      `"He is so handsome!"`,
      `"He is so rich!"`,
      `"He needs a wife!"`,
      `The stepsisters spent weeks preparing for the ball. They bought new dresses, new shoes, and new handbags.`,
      `On the day of the ball, Cinderella helped them put on their dresses and do their hair.`,
      `Cinderella dressing her sisters`,
      `"Oh, I have a wonderful idea!" exclaimed the youngest stepsister. "Cinderella, come to the ball with us! It will be more fun if you are there!"`,
      `"Oh, but you don't have anything to wear…" laughed the oldest stepsister. "You can’t meet the prince wearing those dirty old clothes. What a shame. Maybe next time.”`,
      `Cinderella tried not to cry. She finished dressing her sisters and then went down to the kitchen. She sat beside the fire and sighed.`,
      `"Things will get better one day," she told the cat.`,
      `"Meow…" the cat replied.`,
      `Just then, there was flash of light, and an old woman appeared in a corner of the kitchen.`,
      `"Who… who are you?" stammered Cinderella.`,
      `"I am your fairy godmother” said the old woman. "You are an orphan, and all orphans have a fairy godmother."`,
      `The fairy godmother appears`,
      `The fairy godmother stroked the cat.`,
      `"This cat tells me how kind you are. And how you always wish for things to get better one day. Today is that day, Cinderella. You are going to the king's ball. Fetch me a pumpkin!"`,
      `Cinderella ran into the garden and picked a big, orange pumpkin. The fairy godmother touched the pumpkin with her magic wand and it turned into a golden carriage.`,
      `"Come here, little mice!" she said to the mice in the wall. She waved her wand again, and the mice turned into six beautiful horses to pull the carriage.`,
      `"But I don't have a dress!" said Cinderella.`,
      `"Stand still," said the fairy godmother. She waved her wand again, and Cinderella's dirty clothes turned into a spectacular silver dress. Two beautiful glass shoes appeared on Cinderella's feet.`,
      `Cinderella in her beautiful dress`,
      `"Now go to the ball!" said the fairy godmother. "But you must be home by midnight! When the clock strikes twelve, your dress will turn back into rags, and your carriage will turn back into a pumpkin.`,
      `... Have fun!"`,
      `And with another flash of light, the fairy godmother disappeared.`,
      `"I'm going to the ball!" said Cinderella.`,
      `"Meow…" said the cat.`,
      `At the king’s ball, the prince was very bored.  `,
      `He felt like he had danced with every young lady in the kingdom. All of the ladies were wearing beautiful dresses, but none of the ladies were interesting. None of them understood his jokes.`,
      `The prince had just finished dancing with one of Cinderella's stepsisters when the room suddenly fell silent.`,
      `Everybody turned to look as the most beautiful girl walked through the door.`,
      `She had long red hair and kind green eyes. Her dress was silver. Her shoes sparkled, like they were made of glass.`,
      `It was Cinderella, but nobody recognised her. Not even her stepmother and stepsisters!`,
      `The prince meeting Cinderella`,
      `The prince's mouth dropped open. He had never seen a woman as beautiful as Cinderella.`,
      `He asked her to dance. They danced together all evening. The prince thought Cinderella was beautiful, but also kind, clever and funny. She laughed at his jokes, and he laughed at hers.`,
      `Cinderella was having such a wonderful time that she didn't notice that it was so late. The clock began to chime midnight.`,
      `Dong… dong… dong…`,
      `"Oh no! I have to leave!" gasped Cinderella, and she ran out of the ballroom.`,
      `"Don't go! I don't even know your name!" shouted the prince. But Cinderella was already gone.`,
      `Cinderella fled from the palace so fast that she lost one of her glass shoes on the stairs.`,
      `When she got to the bottom of the stairs — DONG! — The clock finished chiming midnight.`,
      `Cinderella's beautiful dress turned back into rags, and her golden carriage turned back into a pumpkin.`,
      `"Drat," said Cinderella.`,
      `Cinderella running from the palace`,
      `Just then, she saw the prince running towards her, holding the glass shoe she had dropped.`,
      `She did not want him to see her dressed in her dirty old rags. She felt ashamed, but there was nowhere to hide!`,
      `"Excuse me, miss," he said, panting. "Did you see where that beautiful girl went? This is her shoe! I must find her!"`,
      `The prince didn’t recognise Cinderella without her beautiful clothes!`,
      `Cinderella shook her head. The prince ran off to continue his search. Cinderella walked all the way home.`,
      `Three weeks passed. The prince couldn't sleep. He could not stop thinking about the beautiful girl at the ball.`,
      `He waited for her to return to the palace, but she did not return. He waited for her to send a letter, but no letters came.`,
      `Finally, in desperation, he gave the glass shoe to a trusted messenger and ordered him to visit every house in the kingdom.`,
      `"Find the girl who this shoe belongs to, and bring her to me!"`,
      `The messenger visited hundreds of houses. At every house, women claimed the glass shoe was theirs. But when they tried on the shoe, their feet were too big, or too wide, or too small.`,
      `Finally, the messenger arrived at Cinderella's house. Cinderella’s stepmother opened the door.`,
      `"Of course! Of course! Come in!”`,
      `She led the messenger into the dining room, where the two stepsisters were waiting.`,
      `The oldest sister said "Thank God! That's my shoe!" But when she tried the shoe, her foot was too wide.  `,
      `The youngest sister said "Silly sister... It's not your shoe, it's my shoe!" But when she tried the shoe, her foot was too small.`,
      `The stepmother said "Get out of the way, girls, it's not your shoe. It's MY shoe!" and tried the shoe. But her foot was too long.  `,
      `"Oh how silly!" said the stepmother. "The shoe must have shrunk in the rain..."`,
      `But the messenger was not so easily fooled. "Are there any other women in this house?" he asked.`,
      `"No one but our serving girl, and the shoe is certainly not hers... " said the stepmother.`,
      `"Fetch her immediately. Every woman in the kingdom must try the shoe," insisted the messenger.`,
      `When Cinderella arrived in the dining room she was wearing her usual rags, and her face was covered in dirt.`,
      ` `,
      `She put her dirty foot into the glass shoe and… amazing! It wasn't too wide. It wasn't too long. It fit perfectly!`,
      `Cinderella trying on the shoe`,
      `In a quiet voice she said, "It's my shoe."`,
      `"Please come with me," said the messenger. And before Cinderella's stepmother and stepsisters could stop them … the messenger hurried Cinderella out the door and into a carriage.`,
      `Cinderella was taken to the palace to meet the prince. She was still wearing her dirty old dress, and her arms, legs and face were dirty. She looked at the floor because she felt so ashamed.`,
      `The prince took Cinderella's hand.`,
      `Cinderella meeting the prince again`,
      `‍"Miss, please look at me," he requested kindly. And when she lifted her head and he saw her kind, green eyes, he knew that she was the girl he had fallen in love with at the ball.`,
      `They were married the next spring, and spent the rest of their lives laughing at each other's jokes.`,
    ]

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header
            headerText="Story 3"
            leftIcon="back"
            onLeftPress={goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
          <StoryTemplate title="Cinderella" data={storyContent} />
        </Screen>
      </View>
    )
  },
)
