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
      key: 'recipeDetails',
      title: 'Recipe Details'
   }
}

const CustomerList = ({_handleNavigate, _goBack}) => (
   <View style={styles.container}>
      <Text style={styles.title}>Recipe List</Text>
      <Button onPress={() => _handleNavigate(route)} label='Go To Recipe Details'/>
      <Button onPress={_goBack} label="Go Back"/>
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

export default CustomerList
