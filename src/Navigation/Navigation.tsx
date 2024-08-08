import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../Screens/Screen1';
import { Screen2 } from '../Screens/Screen2';
import { Screen3 } from '../Screens/Screen3';
import { Screen4 } from '../Screens/Screen4';
import { Screen5 } from '../Screens/Screen5';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator    
    screenOptions={{ 
      headerShown: false
    }}>
      <Stack.Screen name="Menu" component={Screen1} />
      <Stack.Screen name="Imagen1" component={Screen2} />
      <Stack.Screen name="Imagen2" component={Screen3} />
      <Stack.Screen name="Mayor" component={Screen4} />
      <Stack.Screen name="Menor" component={Screen5} />
    </Stack.Navigator>
  );
}