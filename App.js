import React from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'

const PlanningItem = (props) => (
  <View style={styles.planningItem}>
    <View style={styles.planningCircle}></View>
    <Text style={styles.planningAmount}>{props.amount}</Text>
    <Text style={styles.planningDay}>In a {props.day} day</Text>
  </View>
)


const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent"/>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTopSection}>
            <Image 
              source={{ uri:'https://www.intheblack.com/-/media/intheblack/allimages/magazine-2020/06-june/farmer-standing-in-field.jpg?rev=a3738b7326974d349044fc34db4db590' }}
              style={styles.userImage}
            />
            <TouchableOpacity>
              <View style={styles.headerButtonInner}>
                <Text style={styles.headerButtonText}>Payday in a week</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.balanceCaption}>Total balance to spend</Text>
          <Text style={styles.balanceAmount}>$5785,55</Text>

        </View>

        <View style={styles.planningWrapper}>
          <View style={styles.planningHeader}>
            <Text style={styles.planningTitle}>Planning Ahead</Text>
            <Text>-$5,819.92</Text>
          </View>
          
          <ScrollView horizontal>
            <PlanningItem amount="30" day="1" />
            <PlanningItem amount="30" day="2"/>
            <PlanningItem amount="30" day="3"/>
            <PlanningItem amount="30" day="4"/>
            <PlanningItem amount="30" day="5"/>
          </ScrollView>
        </View>

      </ScrollView>
    </>
  )
}

const styles = {
  header: {
    backgroundColor: '#36D0B1',
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 20
  },

  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  headerButtonInner: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },

  headerButtonText: {
    color: '#36D0B1',
  },

  headerTopSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  balanceCaption: {
    fontSize: 17,
    color: '#FFFFFF',
  },

  balanceAmount: {

    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  container: { backgroundColor: '#f2f1f7' },
  planningWrapper: { paddingVertical: 30, borderBottomWidth: 1, borderColor: '#aaa' },
  planningHeader: { flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', alignItems: 'center' },
  planningTitle: { fontSize: 17 },
  planningItem: { padding: 20, backgroundColor: '#fff', elevation: 1, marginLeft: 20, marginVertical: 20, borderRadius: 15, width: 120 },
  planningCircle: { width: 25, height: 25, backgroundColor: '#24f', borderRadius: 25, marginBottom: 10 },
  planningAmount: { color: 'teal', marginBottom: 2 },
  planningDay: { color: 'silver' },

}

export default App
