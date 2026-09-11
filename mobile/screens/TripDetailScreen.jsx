import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTripDetail } from "../hooks/useTripDetail";

const TripDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { trip, loading, error } = useTripDetail(id);

  if (loading) {
    return (
      <View style={styles.center}>
        <View style={styles.loadingCard}>
          <Text style={styles.loadingIcon}>✈️</Text>
          <Text style={styles.loadingText}>Loading your trip...</Text>
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <View style={styles.errorCard}>
          <Text style={styles.errorIcon}>⚠️</Text>
          <Text style={styles.errorTitle}>Oops!</Text>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.eyebrow}>YOUR TRIP</Text>
        <Text style={styles.title}>{trip.title}</Text>
      </View>

      {/* Destination Card */}
      <View style={styles.destinationCard}>
        <View style={styles.destinationIcon}>
          <Text style={styles.iconText}>📍</Text>
        </View>

        <View style={styles.destinationContent}>
          <Text style={styles.cardLabel}>DESTINATION</Text>
          <Text style={styles.destination}>{trip.destination}</Text>
        </View>
      </View>

      {/* Dates */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.smallIcon}>
            <Text>📅</Text>
          </View>
          <Text style={styles.cardLabel}>TRAVEL DATES</Text>
        </View>

        <View style={styles.dateRow}>
          <View style={styles.dateItem}>
            <Text style={styles.dateLabel}>START</Text>
            <Text style={styles.date}>{trip.startDate}</Text>
          </View>

          <View style={styles.dateItem}>
            <Text style={styles.dateLabel}>END</Text>
            <Text style={styles.date}>{trip.endDate}</Text>
          </View>
        </View>
      </View>

      {/* Notes */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.smallIcon}>
            <Text>📝</Text>
          </View>
          <Text style={styles.cardLabel}>NOTES</Text>
        </View>

        <Text style={styles.notes}>
          {trip.notes || "No notes added for this trip."}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F8FC",
    padding: 20,
    
  },

  header: {
    marginBottom: 24,
    marginTop: 10,
  },

  eyebrow: {
    fontSize: 12,
    fontWeight: "700",
    color: "#a09001",
    letterSpacing: 1.5,
    marginBottom: 8,
    alignSelf:"center",
  },

  title: {
    fontSize: 30,
    fontWeight:"bold",
    color: "#080808",
    alignSelf:"center",
  },


  destinationCard: {
    backgroundColor: "#ecf571",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },

  destinationIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "rgba(201, 199, 199, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  iconText: {
    fontSize: 24,
  },

  destinationContent: {
    flex: 1,
  },

  destination: {
    fontSize: 21,
    fontWeight: "700",
    color: "#020202",
    marginTop: 5,
  },

 
  card: {
    backgroundColor: "#f7f7f7",
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  smallIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F0EFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  cardLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#7c7b7b",
    letterSpacing: 1,
  },


  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dateItem: {
    flex: 1,
  },

  dateLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#a0a0a0",
    marginBottom: 5,
  },

  date: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333333",
  },



  notes: {
    fontSize: 16,
    lineHeight: 25,
    color: "#525252",
  },

  loadingCard: {
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignItems: "center",
    elevation: 2,
  },

  loadingIcon: {
    fontSize: 35,
    marginBottom: 12,
  },

  loadingText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444451",
  },


  errorCard: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
    elevation: 2,
  },

  errorIcon: {
    fontSize: 35,
    marginBottom: 10,
  },

  errorTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#222",
    marginBottom: 6,
  },

  errorText: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
});

export default TripDetailScreen;
