import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import { signUpValidationSchema } from "../validation/authvalidation";

export default function SignUp() {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={signUpValidationSchema}
      onSubmit={() => alert("Account Created")}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter full name"
            onChangeText={handleChange("fullName")}
            value={values.fullName}
          />
          {touched.fullName && errors.fullName && (
            <Text style={styles.error}>{errors.fullName}</Text>
          )}

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

          <Text>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            secureTextEntry
            onChangeText={handleChange("confirmPassword")}
            value={values.confirmPassword}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}

          <Button title="Sign Up" onPress={() => handleSubmit()} />
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
