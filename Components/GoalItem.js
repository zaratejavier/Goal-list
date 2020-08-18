import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const Goalitem = props => {
  return (
  <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
})

export default Goalitem

//  onPress={() => props.handleSubmit(enteredGoal)}