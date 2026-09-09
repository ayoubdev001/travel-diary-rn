import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useAddTrip } from "../hooks/useAddTrip";

const AddTripScreen = ({ navigation }) => {
  const { submitTrip, loading, error } = useAddTrip();

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = async () => {
    if (!title || !destination || !startDate || !endDate) {
      Alert.alert("Missing fields", "Title, destination, start date and end date are required.");
      return;
    }

    try {
      await submitTrip({ title, destination, startDate, endDate, notes });
      navigation.navigate("TripList");
    } catch (err) {
      Alert.alert("Error", "Could not save the trip. Please try again.");
    }
  };

  return (
    <ScrollView style={styles.container}
    contentContainerStyle={{flexGrow:1, justifyContent:"center"}}>

        
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="e.g. Sahara Trip" />

      <Text style={styles.label}>Destination</Text>
      <TextInput style={styles.input} value={destination} onChangeText={setDestination} placeholder="e.g. Merzouga" />

      <Text style={styles.label}>Start Date</Text>
      <TextInput style={styles.input} value={startDate} onChangeText={setStartDate} placeholder="YYYY-MM-DD" />

      <Text style={styles.label}>End Date</Text>
      <TextInput style={styles.input} value={endDate} onChangeText={setEndDate} placeholder="YYYY-MM-DD" />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={[styles.input, styles.notesInput]}
        value={notes}
        onChangeText={setNotes}
        placeholder="Your impressions..."
        multiline
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.saveButtonText}>Save</Text>}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fffffe", padding: 20 },
  label: { fontSize: 13, color: "#888", marginTop: 16, marginBottom: 4, textTransform: "uppercase" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  notesInput: { height: 100, textAlignVertical: "top" },
  errorText: { color: "red", marginTop: 12 },
  saveButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 24,
    marginBottom: 40,
  },
  saveButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default AddTripScreen;