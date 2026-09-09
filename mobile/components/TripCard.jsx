
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const TripCard = ({ trip, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{trip.title}</Text>
      <Text style={styles.destination}>{trip.destination}</Text>
      <Text style={styles.dates}>
        {trip.startDate} → {trip.endDate}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  destination: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  dates: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
});

export default TripCard;