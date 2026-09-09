

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TripListScreen from "./screens/TripListScreen";
import TripDetailScreen from "./screens/TripDetailScreen";
import AddTripScreen from "./screens/AddTripScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TripList">
        <Stack.Screen
          name="TripList"
          component={TripListScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="TripDetail"
          component={TripDetailScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="AddTrip"
          component={AddTripScreen}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}