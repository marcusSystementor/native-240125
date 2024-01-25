import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [movie, setMovie] = useState([

   {name: "Titanic", id: 1},
   {name: "Pulp Fiction", id: 2},
   {name: "Interstellar", id: 3},
   {name: "Blood in blood out", id: 4 },
   {name: "James Bond - Dr No", id: 5},
   {name: "Harry Potter - fången från Askeban", id: 6},
   {name: "Oppenheimer", id: 7},
   {name: "Barbie", id: 8}

  ])

  const [band, setBand] = useState([
    {name: "kent", id: 1},
    {name: "Arvingarna", id: 2},
    {name: "Thorleifz", id: 3},
    {name: "Metallica", id: 4},

  ])
 

  return (
    <View style={styles.container}>

    <FlatList
    numColumns={2}
    data={movie}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
      <Text style={styles.item}>{item.name}</Text>
    )}
    
    
    />

   <FlatList
    numColumns={3}
    
    data={band}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
      <Text style={styles.itemBands}>{item.name}</Text>
    )}


     />     
       

      {/* <ScrollView>
      {movie.map((item) => {
        return (
          <View key={item.key}>

          <Text style={styles.item}>{item.name}</Text>

          </View>
          
        )
      })}
      </ScrollView> */}

      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20, 
    alignItems: "center",
    justifyContent: "center",
  },
  item: {

    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    margin: 5,

  },

  itemBands: {

    marginTop: 24,
    padding: 30,
    backgroundColor: "green",
    fontSize: 24,
    margin: 5,

  }


});
