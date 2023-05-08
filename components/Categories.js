import React from 'react'
import { View,Text, ScrollView } from 'react-native'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 15,
        padding: 5,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
    {/*CategoriesCard */}
    <CategoriesCard imgUrl="https://lh3.googleusercontent.com/J-SwpK6sPu_Sfs1So7gDrviHl0XLtQvTrHBRoqkkBTm-QCJbWLzWMsBlk8ya3hFNLgSTlIzznGKg5uSgJ6RgBsvDQagIuQatTB-vS22quA" title="Dishes1"/>

    <CategoriesCard imgUrl="https://lh3.googleusercontent.com/jJbYlb9NZWoTkR9T6KFgjk7DYe12Atxnz2VmxKCmtvFPFK1BuaQ_ogfCozt8r_DtMwhEz-nAWLsHidrk6p7X3LkJnG86b3APRckSUejahg" title="Dishes2"/>

    <CategoriesCard imgUrl="https://lh3.googleusercontent.com/4aqs2xd9AHtylXbVlEjLqIjpEGylVYr3DaIvvVxngtsGRl_TmUAjkvvhkJusGrEPzQr-Y4l-hgkM-8pclVr0lHFBOTM-4PDBddPPtqiX" title="Dishes3"/>

    <CategoriesCard imgUrl="https://lh3.googleusercontent.com/4JP2rMyDXLV11DFSknosBZSlDhMKsOxSgfOY7Ojx2xHb_G5rK9tbpaKsLgoEV52q7h4jfg2kOy3nCXmw96YSrN7FrUEVRUD38jc3NIkf" title="Dishes4"/>
    <CategoriesCard imgUrl="https://lh3.googleusercontent.com/ATTbF4f-6upBqBEuogvRFJQOqUnUmGtbY7_WgQJmVsXC7lTnhH_3_JRYk9Q9lms6dT8hu1OmjhK__y5t83XpDVD15urvLf3kPwrXDre5YQ" title="Dishes5"/>

    <CategoriesCard imgUrl="https://lh3.googleusercontent.com/7X9Sk13z3hkKZqUnuhZixRo4umVuQ5tLrIq6OijIvmM7Zta35w3uN8P8nuJIwGhiAHQUNPo7A-WBsK43ocj4WsFJNQTWl7TIPJEPJdQ" title="Dishes6"/>

    <CategoriesCard imgUrl="https://lh3.googleusercontent.com/FSa6KQnA0CK0H9rSby60VdGG4GtTiphn1F6MRiKRSrzWHrjeptvifzSCk9LH7acZ2vEoHjoqlWvmPfY5SFn0mKuJ9uRMGGwJvdhvyIk" title="Dishes7"/>

    </ScrollView>
  );
};

export default Categories
