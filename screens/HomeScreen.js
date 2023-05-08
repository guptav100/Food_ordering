import React, { useLayoutEffect } from 'react'
import {View,Text, Image, Touchable, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {ChevronDownIcon,UserIcon, MagnifyingGlassIcon, FunnelIcon, MapIcon} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
 
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect (() => {
        navigation.setOptions({ 
            headerShown: false,
        });
    }, []);

  return (
    <SafeAreaView>
   
        <View className='flex-row pb-3 items-center mx-4 space-x-2 mt-2' >
            <Image 
                source={{uri: "https://lh3.googleusercontent.com/gbg7ApQm9ZKqTXoxMbk7Grvs8gKFHU_4nkJ7cldLZh7HFb275MCQ7yKd1KkZn8RNGbDzj-poZdYvJXRuIBLu6w1W1sUbZR62K3P5-9aqRQ",}}
                className="h-11 mt-1.5 w-9 bg-n"
            />
            <View className='flex-1'>
            <Text className='font-bold'>Current location 
            <ChevronDownIcon size={20} color='#FF0000'/>
            </Text>
            <Text className="text-xm text-gray-600">Your Address</Text>
        </View>
        <TouchableOpacity>
        <UserIcon size={35} color='#FF0000'/>
        </TouchableOpacity>
        </View>

        {/*Search */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4 '>
        <TouchableOpacity>
            <View className="flex-row space-x-2  bg-gray-200 p-2.5 mt-2 mr-8">
                <MagnifyingGlassIcon size={22} color="gray"/>
                <TextInput 
                className= "border-radius-10 "
                placeholder="Search your fav. Place or Dishes "
                keyboardType="default"
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <FunnelIcon size={30} color="#FF0000" className="ml-2"/>
        </TouchableOpacity>
        </View>

        {/*Body */}
        <ScrollView>
            {/*Categories */}
            <Text className="font-bold text-lg ml-5 mt-3 mb-1">Categories</Text>
            <Categories/>

            {/*Featured Rows*/}
            
            <FeaturedRow
            id={1}
            title="Today's Special"
            description="Catch up trending for today..."
            featuredCategory="featured"
            />
            <FeaturedRow
            id={2}
            title="offers for today.."
            description="Offers are going on....Catch them soon"
            featuredCategory="featured"
            />
            <FeaturedRow
            id={3}
            title="Pure Veg "
            description="Top pics for Vegeterians"
            featuredCategory="featured"
            />
            <FeaturedRow
            id={4}
            title="Rating 4.0+"
            description="Quality Food Only"
            featuredCategory="featured"
            />
            <FeaturedRow
            id={5}
            title="Nearest "
            description="Nearest the outlet...Tastiest the Food"
            featuredCategory="featured"
            />

        </ScrollView>
    </SafeAreaView>
  )
  }

export default HomeScreen

