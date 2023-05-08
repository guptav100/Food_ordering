import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'

const CategoriesCard = ({imgUrl, title}) => {
    return (
      <TouchableOpacity>
        <Image 
            source={{
                uri: imgUrl,
            }}
            className="h-20 w-20 m-2 "
        />
        <Text className="absolute bottom-1 left-1 text-white font-bold mb-1 ml-2.5"
        >{title}</Text>
      </TouchableOpacity>
    );
  };


export default CategoriesCard
