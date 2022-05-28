import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppStore, apiStore} from './src/store/Store';

const App = () => {
  const bears = useAppStore(state => state.bears);
  const increasePopulation = useAppStore(state => state.increasePopulation);
  const decreasePopulation = useAppStore(state => state.decreasePopulation);
  const setToZero = useAppStore(state => state.removeAllBears);
  const {users, getUsers} = apiStore(state => state);
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:100, alignSelf:'center'}}>{bears}</Text>
      <TouchableOpacity
      onPress={increasePopulation}
      style={{alignSelf:'center', paddingVertical:20}}
      >
        <Text style={{fontSize:30}}>Plus One </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={decreasePopulation}
      style={{alignSelf:'center', paddingVertical:20}}
      >
        <Text style={{fontSize:30}}>Minus One </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={setToZero}
      style={{alignSelf:'center', paddingVertical:20}}
      >
        <Text style={{fontSize:30}}> Set to Zero </Text>
      </TouchableOpacity> */}

      {users &&
        users.map(val => {
          return <Text key={val.id}>{val.name}</Text>;
        })}
      <TouchableOpacity
        onPress={() => {
          getUsers('/users');
        }}
        style={{alignSelf: 'center', paddingVertical: 20}}>
        <Text style={{fontSize: 30}}>Plus One </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100,
  },
});
