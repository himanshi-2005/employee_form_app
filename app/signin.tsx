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
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            onChangeText={handleChange("email")}
            value={values.email}
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          <Text>Password</Text>
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

          <Button title="Sign In" onPress={() => handleSubmit()} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
