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
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
   
  },
  title: {
    color: "#202020",
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
    color: "#7a7a7a",
    marginTop: 4,
  },
});

export default TripCard;