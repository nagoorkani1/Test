import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from 'react-native-shadow-cards';
import { SearchBar } from '@rneui/themed'
import { CoursesDetails } from '../../../Constants/Courses'

import NavTab from '../Commons/student_bottom_tab'
import { Button_Name } from '../../../Constants/Button_Name'
import { Button } from '@react-native-material/core'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { TextInput } from 'react-native-gesture-handler';

const HomeSearchResult = ({ navigation, route }) => {
  const [searchtext, setsearchtext] = useState("")


  return (
    <View style={styles.responsiveBox}>
      <Card
        style={{ width: "100%", height: 50, borderRadius: 5, flexDirection: "row", alignItems: "center", backgroundColor: "#27BC7F" }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Card style={{ width: 30, marginLeft: 10 }}>
            <Icon name="chevron-back-outline" size={27} color="black" />
          </Card>
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 15,
            color: 'white',
            fontSize: 16,
          }}
        >
          Courses
        </Text>

      </Card>
      <ScrollView>

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

          <View
            style={{
              alignItems: 'center', width: "80%", height: 40, backgroundColor: "#DCFFF1",
              alignSelf: "center", flexDirection: "row", marginTop: 20, borderRadius: 5,
            }}>
            <Image source={require("../../../Assets/search.png")}
              style={{ width: 15, height: 15, marginLeft: 10 }}></Image>
            <TextInput placeholder='search' value={searchtext} onChangeText={(text => setsearchtext(text))} style={{ color: "#0B774B", fontSize: 14, marginLeft: 15, width: "90%" }}></TextInput>
          </View>
          <Icon
            name="filter"
            size={20}
            style={{ marginTop: 20, marginLeft: wp('3%'), color: '#0B774B' }}
          />
        </View>

        <View>
          {searchtext == '' ?
            <View>
              <Text
                style={{
                  color: '#343434',
                  marginLeft: wp('7%'),
                  marginTop: 15,
                  fontSize: 14,
                }}
              >
                Top Searches
              </Text>
              <View
                flexDirection="row"
                flexWrap="wrap"
                marginLeft={wp('3%')}
                height={hp('70%')}
                marginTop={10}
              >
                {Button_Name.map((item, key) => (

                  <Button
                    title={item}
                    variant="outlined"
                    key={key}
                    height={29}
                    margin={2}
                    color="#0B774B"
                    alignItems="center"
                    justifyContent="center"
                  />
                ))}
              </View>
            </View>
            :
            <View style={{ height: "98%" }}>
              <FlatList
                data={CoursesDetails}

                renderItem={({ item, key }) => (
                  <TouchableOpacity onPress={() => navigation.navigate("StudentDetails")}>

                    <View key={key} style={{ marginTop: 3, alignSelf: "center", width: "95%", marginBottom: 5 }}>
                      <Card style={{ flexDirection: "row", alignItems: "center", width: "100%", marginTop: 5 }}>
                        <Image
                          source={item.img}
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 50,
                            marginLeft: 15, marginTop: 10, marginBottom: 10
                          }}>
                        </Image>
                        <View>
                          <Text
                            style={{
                              fontSize: 13,
                              marginLeft: wp('2%'),
                              fontWeight: 'bold',
                            }}
                          >
                            Miracle Lipshutz

                          </Text>

                          <Text
                            style={{
                              fontSize: 11,
                              marginLeft: wp('2%'),
                              fontWeight: 'bold', marginTop: 5,
                            }}
                          >
                            Mobile Application Development
                          </Text>
                        </View>
                      </Card>
                    </View>
              
                  </TouchableOpacity>


                )
                }
              />
            </View>
          }
        </View>
        {/* <NavTab /> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  responsiveBox: {
    width: wp('100%'),
    height: "100%",
    flexDirection: 'column',
  },
})

export default HomeSearchResult
