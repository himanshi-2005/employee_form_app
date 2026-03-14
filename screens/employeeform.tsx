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
          <Text>Full Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("fullName")}
            value={values.fullName}
          />
          {touched.fullName && errors.fullName && (
            <Text style={styles.error}>{errors.fullName}</Text>
          )}

          <Text>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("email")}
            value={values.email}
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          <Text>Phone</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("phone")}
            value={values.phone}
          />
          {touched.phone && errors.phone && (
            <Text style={styles.error}>{errors.phone}</Text>
          )}

          <Text>Position</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("position")}
            value={values.position}
          />
          {touched.position && errors.position && (
            <Text style={styles.error}>{errors.position}</Text>
          )}

          <Text>Employee ID</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("employeeId")}
            value={values.employeeId}
          />
          {touched.employeeId && errors.employeeId && (
            <Text style={styles.error}>{errors.employeeId}</Text>
          )}

          <Button title="Submit" onPress={() => handleSubmit()} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  error: { color: "red" },
});
