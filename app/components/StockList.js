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
      key: 'stockDetails',
      title: 'Stock Details'
   }
}

const StockList = ({_handleNavigate}) => {
   return (
   <View style={styles.container}>
      <Text style={styles.title}>Stock List</Text>
      <Button onPress={() => _handleNavigate(route)} label='Go To Stock Details'/>
   </View>
)}

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

export default StockList
