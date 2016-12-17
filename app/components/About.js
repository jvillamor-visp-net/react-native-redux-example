import React from 'react'
import {
   View,
   Text,
   StyleSheet
} from 'react-native'
import Button from './Button'

const route = {
   type: 'push',
   route: {
      key: 'applicationTabs',
      title: 'Application Tabs'
   }
}

const About = ({_goBack, _handleNavigate}) => (
   <View style={styles.container}>
      <Text style={styles.title}>Based from Nader Dabit's Tutorial</Text>
      <Button onPress={() => _handleNavigate(route)} label='Continue'/>
      <Button onPress={_goBack} label='Go back'/>
   </View>
)

const styles = StyleSheet.create({
   title: {
      marginBottom: 20,
      fontSize: 22,
      textAlign: 'center'
   },

   container: {
      paddingTop: 60
   }
});

export default About
