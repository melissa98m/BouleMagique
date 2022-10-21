import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image ,ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again"
];

export default function App() {
  const [answer, setAnswer] = useState("");

  const getAnswer = (e) => {
      e.preventDefault();
      const index = Math.floor(Math.random() * answers.length);
      setAnswer(answers[index]);
    };
console.log(answer);
return (
<View style={styles.container}>
   <ImageBackground source={require('./assets/boule.png')}  style={{ width: 350, height: 350}}>
   <Button
   onPress={getAnswer}
   title="Voir reponse"
   color="#841584"
   accessibilityLabel="Voir reponse"
   />
   </ImageBackground>

<Text>Reponse: {answer}</Text>
<StatusBar style="auto" />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'white',
alignItems: 'center',
justifyContent: 'center',
position: 'relative',
},
image: {
    justifyContent: "center"
  },
});