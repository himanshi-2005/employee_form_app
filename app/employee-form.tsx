

import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import { employeeValidationSchema } from "../validation/employeevalidation";

export default function EmployeeForm() {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        position: "",
        employeeId: "",
      }}
      validationSchema={employeeValidationSchema}
      onSubmit={(values) => {
        alert("Employee submitted successfully");
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Employee Form</Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter full name"
            onChangeText={handleChange("fullName")}
            value={values.fullName}
          />
          {touched.fullName && errors.fullName && (
            <Text style={styles.error}>{errors.fullName}</Text>
          )}

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

          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            onChangeText={handleChange("phone")}
            value={values.phone}
          />
          {touched.phone && errors.phone && (
            <Text style={styles.error}>{errors.phone}</Text>
          )}

          <Text style={styles.label}>Position</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter position"
            onChangeText={handleChange("position")}
            value={values.position}
          />
          {touched.position && errors.position && (
            <Text style={styles.error}>{errors.position}</Text>
          )}

          <Text style={styles.label}>Employee ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter employee ID"
            onChangeText={handleChange("employeeId")}
            value={values.employeeId}
          />
          {touched.employeeId && errors.employeeId && (
            <Text style={styles.error}>{errors.employeeId}</Text>
          )}

          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={() => handleSubmit()} />
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
