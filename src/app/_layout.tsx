import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Stack } from 'expo-router/stack'

import { Provider } from '@contexts/Provider'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </Provider>
  )
}
