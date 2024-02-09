import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { View } from 'react-native'

export default function RootLayout() {
  const [loaded] = useFonts({
    Minecraft: require('../assets/fonts/Minecraft.ttf'),
    Arcade: require('../assets/fonts/Arcade.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  )
}
