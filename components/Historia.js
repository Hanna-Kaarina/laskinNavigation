import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Historia({ route, navigation }) {
  const { data } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22 }}>Historia</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});