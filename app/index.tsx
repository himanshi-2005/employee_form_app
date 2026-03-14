// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Forms App</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Sign In"
          onPress={() => router.push("/signin")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          onPress={() => router.push("/signup")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Employee Form"
          onPress={() => router.push("/employee-form")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 40,
  },
  buttonContainer: {
    width: "70%",
    marginBottom: 15,
  },
});
