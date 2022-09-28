import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { FC } from "react"
import { ImageStyle, SafeAreaView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import {} from "mobx-react-lite"
import { Button, Header, Screen, GradientBackground, AutoImage as Image } from "../../components"
import { spacing } from "../../theme"
import { useStores } from "../../models"
import { NavigatorParamList } from "../../navigators"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface StoryTemplateProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const StoryTemplate = observer(function StoryTemplate(props: StoryTemplateProps) {
  const TEXT: TextStyle = {
    color: color.palette.white,
    fontFamily: typography.primary,
  }
  const BOLD: TextStyle = { fontWeight: "bold" }

  const TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 28,
    lineHeight: 38,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  }
  const CONTENT: TextStyle = {
    ...TEXT,
    color: "#BAB6C8",
    fontSize: 18,
    lineHeight: 22,
    marginBottom: spacing[5],
  }
  let x = -1
  return (
    <>
      <Text style={TITLE} preset="header">
        {props.title}
      </Text>
      {props.data.map((el) => {    
        x+=1    
        return <Text key={x} style={CONTENT}>
          {el.replace(/\s+/g, " ")}
        </Text>
      })}
      <View style={{height:20}}></View>
      
    </>
  )
})
