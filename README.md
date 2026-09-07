# 🗺️ travel diary

A simple mobile app to help travelers keep track of every trip — where they went, when, and their impressions — without losing notes in paper notebooks or scattered notes apps.

Built for **Nadia Cherkaoui**, a travel blogger based in Agadir, who needed a dedicated, structured place to log her trips.

---

## 📱 About

Paper notebooks get lost. Generic notes apps (Notes, Notion) aren't structured around travel. **Carnet de Route** centralizes each trip in its own dedicated sheet — always accessible, always organized.

- 3 screens: **List**, **Detail**, **Add**
- No authentication
- One data type: the **Trip**

---

## 🏗️ Architecture: MVVM

This project follows the **MVVM** (Model–View–ViewModel) pattern, adapted for React Native:

| Layer | Responsibility | React Native equivalent |
|---|---|---|
| **Model** | Raw data structure. No display logic. | Plain JS object — `Trip` (id, title, destination, startDate, endDate, notes) |
| **View** | Displays what it's given, forwards user actions. No business logic. | Screen components (`.jsx`) |
| **ViewModel** | Bridges Model and View — loading, adding, error/loading state, notifies View of changes. | Custom hooks (`useTrips`, `useTripDetail`, `useAddTrip`) wrapping `useState` + `useEffect` |

Components **never** call the API or contain business logic directly — they consume a hook, and the hook does the work.

---

## 🎯 Screens

### 1. Trip List
Displays all recorded trips as cards (title, destination, dates). A "+" button opens the add screen. Tapping a card opens its details.

### 2. Trip Detail
Shows full details of the selected trip (destination, start date, end date, notes). Includes a back button to return to the list.

### 3. Add a Trip
A form (title, destination, start date, end date, notes) with a "Save" button that submits to the backend and returns to the updated list.

---

## 🧩 File Structure

```
src/
  App.jsx
  hooks/
    useTrips.js          # ViewModel — trip list logic
    useTripDetail.js     # ViewModel — single trip logic
    useAddTrip.js         # ViewModel — form submission logic
  screens/
    TripListScreen.jsx
    TripDetailScreen.jsx
    AddTripScreen.jsx
  components/
    TripCard.jsx
  services/
    apiService.js        # All API calls live here
```

**Flow:** `apiService.js` (Service) → `hooks/` (ViewModel) → `screens/` & `components/` (View)

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/trips` | Returns the list of all trips |
| `GET` | `/trips/:id` | Returns the details of a specific trip |
| `POST` | `/trips` | Creates a new trip |

**POST body:**
```json
{
  "title": "string",
  "destination": "string",
  "startDate": "string",
  "endDate": "string",
  "notes": "string"
}
```

---

## 🛠️ Tech Stack

- **React Native**
- Custom hooks as ViewModels (no external state management library needed)
- REST API backend

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run on iOS
npx react-native run-ios

# Run on Android
npx react-native run-android
```

---

## 📅 Project Timeline

| Day | Task |
|---|---|
| 1 | Figma mockups + project setup (Model + MVVM file structure) |
| 2 | Trip List screen (View + hook) |
| 3 | Trip Detail screen |
| 4 | Add Trip screen + full backend connection |
| 5 | Tests, bug fixes, presentation prep |

---

## 🎨 Design

Screens were mocked up in Figma before development, using a 3-color palette and a consistent font pairing across all views.

---

## 📋 Project Management

- **GitHub Projects** — To Do / In Progress / Done board
- **Jira** — Parent task "Roadbook" split into 5 daily subtasks
