import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {UserIcon,
        ChevronDownIcon,
        SearchIcon,
        AdjustmentsIcon,
} from 'react-native-heroicons/solid'
export default function HomeScreen() {
    const navigation = useNavigation();
    useLayoutEffect(()=>{

        navigation.setOptions({
            headerShown : false,
        })
    },[])
  return (
    <SafeAreaView>
      <Text className ="text-red-500">
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Image
            source={{
                uri:'https://links.papareact.com/wru'
            }
            }
            className='h-9 w-9 bg-gray-300 p-4 rounded-full'
            />
            <View>
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">Current Location
                <ChevronDownIcon size={20} color='#00CCBB'/>
                </Text>
            </View>
        </View>
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})