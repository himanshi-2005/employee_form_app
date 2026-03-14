// import React from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import { Formik } from "formik";
// import { signInValidationSchema } from "../validation/authvalidation";

// export default function SignIn() {
//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validationSchema={signInValidationSchema}
//       onSubmit={() => alert("Signed In Successfully")}
//     >
//       {({ handleChange, handleSubmit, values, errors, touched }) => (
//         <View style={styles.container}>
//           <Text>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter email"
//             onChangeText={handleChange("email")}
//             value={values.email}
//           />
//           {touched.email && errors.email && (
//             <Text style={styles.error}>{errors.email}</Text>
//           )}

//           <Text>Password</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter password"
//             secureTextEntry
//             onChangeText={handleChange("password")}
//             value={values.password}
//           />
//           {touched.password && errors.password && (
//             <Text style={styles.error}>{errors.password}</Text>
//           )}

//           <Button title="Sign In" onPress={() => handleSubmit()} />
//         </View>
//       )}
//     </Formik>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//   },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
// });

import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import { signInValidationSchema } from "../validation/authvalidation";

export default function SignIn() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={signInValidationSchema}
      onSubmit={() => alert("Signed In Successfully")}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Sign In</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            keyboardType="email-address"
            onChangeText={handleChange("email")}
            value={values.email}
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={handleChange("password")}
            value={values.password}
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <View style={styles.buttonContainer}>
            <Button title="Sign In" onPress={() => handleSubmit()} />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#e6f2ff",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: "white",
  },

  error: {
    color: "red",
    marginBottom: 10,
  },

  buttonContainer: {
    marginTop: 10,
  },
});
