import * as Yup from "yup";

export const employeeValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  phone: Yup.string()
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),

  position: Yup.string()
    .required("Position is required"),

  employeeId: Yup.string()
    .required("Employee ID is required"),
});
