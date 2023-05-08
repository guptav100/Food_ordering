import React, { Component } from 'react'
import { ScrollView, Text, View,Image } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

const FeaturedRow = ({title, description, id}) => {
    return (
      <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#FF0000"/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>


        <ScrollView
        horizantal
        contentContainerStyle={{
            paddingHorizontal:20,
            
        }}
        horizontal
        showsHorizontalScrollIndicator={false}

        >
        {/*Restaurants cards */}
        <RestaurantCards
        id={1}
        imgurl="https://lh3.googleusercontent.com/L9DM20gxZmDp3XZ08lDy__ho0iA8j3jRJHsHGijoZi-W8QY4Sx6Tmj58V9n8BZzT_MN0L-0ZHsyrG33GtBOlKBuVYXMF9oRLHh0_IEze"
        title="Momos"
        rating="4.5"
        address="Dwarka"
        genre="India"
        short_description="Momos is love"
        lat={0}
        long={20}
        />
        <RestaurantCards
        id={1}
        imgurl="https://lh3.googleusercontent.com/L9DM20gxZmDp3XZ08lDy__ho0iA8j3jRJHsHGijoZi-W8QY4Sx6Tmj58V9n8BZzT_MN0L-0ZHsyrG33GtBOlKBuVYXMF9oRLHh0_IEze"
        title="Momos"
        rating="4.5"
        address="Dwarka"
        genre="India"
        short_description="Momos is love"
        lat={0}
        long={20}
        />
        <RestaurantCards
        id={1}
        imgurl="https://lh3.googleusercontent.com/L9DM20gxZmDp3XZ08lDy__ho0iA8j3jRJHsHGijoZi-W8QY4Sx6Tmj58V9n8BZzT_MN0L-0ZHsyrG33GtBOlKBuVYXMF9oRLHh0_IEze"
        title="Momos"
        rating="4.5"
        address="Dwarka"
        genre="India"
        short_description="Momos is love"
        lat={0}
        long={20}
        />
        </ScrollView>

      </View>
    )
  }

export default FeaturedRow
