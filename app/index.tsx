// // import { Text, View } from "react-native";

// // export default function Index() {
// //   return (
// //     <View
// //       style={{
// //         flex: 1,
// //         justifyContent: "center",
// //         alignItems: "center",
// //       }}
// //     >
// //       <Text>Edit app/index.tsx to edit this screen.</Text>
// //     </View>
// //   );
// // }

// import { Text, View, Button, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";

// export default function Index() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Employee Forms App</Text>

//       <View style={styles.buttonContainer}>
//         <Button
//           title="Sign In"
//           onPress={() => router.push("/signin")}
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button
//           title="Sign Up"
//           onPress={() => router.push("/signup")}
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button
//           title="Employee Form"
//           onPress={() => router.push("/employee-form")}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     marginBottom: 40,
//   },
//   buttonContainer: {
//     width: "70%",
//     marginBottom: 15,
//   },
// });



import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Forms App</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/signin")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/employee-form")}
      >
        <Text style={styles.buttonText}>Employee Form</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#e6f2ff", // soft blue background
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#003366",
    textAlign: "center",
  },
  button: {
    width: "80%",
    backgroundColor: "#007acc",
    paddingVertical: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // for Android shadow
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
