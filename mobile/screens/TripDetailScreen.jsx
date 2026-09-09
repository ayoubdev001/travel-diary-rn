
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useTripDetail } from "../hooks/useTripDetail";

const TripDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { trip, loading, error } = useTripDetail(id);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading trip...</Text>
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
    <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{trip.title}</Text>

      <Text style={styles.label}>Destination</Text>
      <Text style={styles.destination}>{trip.destination}</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Dates</Text>
        <Text style={styles.value}>
          {trip.startDate} → {trip.endDate}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Notes</Text>
        <Text style={styles.value}>{trip.notes || "No notes added."}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backButton: { marginVertical: 20, alignSelf: "flex-start", backgroundColor:"#0011ff", paddingHorizontal:16, borderRadius:30, },
  backButtonText: { color: "#f8f4f4", fontSize: 16, justifyContent:"center", textAlign:"center" },
  container: { flex: 1, backgroundColor: "#fff", padding: 20, marginTop:50, },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom:30 },
  destination: { fontSize: 16, color: "#555",  marginBottom: 20 },
  section: { marginBottom: 20 },
  label: { fontSize: 13, color: "#888", marginBottom: 4, textTransform: "uppercase" },
  value: { fontSize: 16, color: "#222" },
 
});

export default TripDetailScreen;