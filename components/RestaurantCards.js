import React, { Component } from 'react'
import { Text, Touchable, TouchableOpacity, View,Image } from 'react-native'
import { StarIcon } from 'react-native-heroicons/outline'

const RestaurantCards = ({id,imgurl,title,rating,address,dishes,long,lat,short_description,genre}) => {
  
    return (
      <TouchableOpacity className="bg-white mr-3 shadow-sm">
      <Image 
        source={{uri: imgurl,}}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon size={22} color="#FF0000" />
          <Text className="text-xs">
          <Text className="text-red-500">{rating}</Text> {genre}
          </Text>
        </View>

        
      </View>
      </TouchableOpacity>
    )
  }

export default RestaurantCards
