import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TripListScreen from "./screens/TripListScreen";
import TripDetailScreen from "./screens/TripDetailScreen";
import AddTripScreen from "./screens/AddTripScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TripList"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ff9100",
          },

          headerTintColor: "#ffffff",
        }}
      >
        <Stack.Screen
          name="TripList"
          component={TripListScreen}
          options={{
            title: "My Trips",
          }}
        />

        <Stack.Screen
          name="TripDetail"
          component={TripDetailScreen}
          options={{
            title: "Trip Details",
          }}
        />

        <Stack.Screen
          name="AddTrip"
          component={AddTripScreen}
          options={{
            title: "Add a Trip",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
