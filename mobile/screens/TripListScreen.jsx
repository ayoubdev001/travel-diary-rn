import { useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeArea, } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTrips } from "../hooks/useTrips";
import TripCard from "../components/TripCard";

const TripListScreen = ({ navigation }) => {
  const { trips, loading, error, refetch } = useTrips();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading trips...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Something went wrong: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TripCard
            trip={item}
            onPress={() => navigation.navigate("TripDetail", { id: item.id })}
          />
        )}
        ListEmptyComponent={
          <View style={styles.center}>
            <Text>No trips yet — add your first one!</Text>
          </View>
        }
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddTrip")}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fafafa", },
  center: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 40 },
  addButton: {
    position: "absolute",
    bottom: 24,
    right: 24,
    backgroundColor: "#007AFF",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  addButtonText: { color: "#fff", fontSize: 28, lineHeight: 32 },
});

export default TripListScreen;