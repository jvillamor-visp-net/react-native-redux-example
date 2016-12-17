import React from 'react'
import {
   View,
   Text,
   StyleSheet
} from 'react-native'
import Button from './Button'

const OrderList = () => (
   <View style={styles.container}>
      <Text style={styles.title}>No Orders Yet</Text>
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

export default OrderList
