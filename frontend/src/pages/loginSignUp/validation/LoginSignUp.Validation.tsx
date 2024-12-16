import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
    email: yup.string().required("Name is Required"),
    password: yup.string().required("Password is Required")
})


export const SignupSchema = yup.object().shape({
    name: yup.string().min(4, "Name atleast contain four charcter").required("Name is required"),
    email: yup.string().required("Email id is required"),
    password: yup.string().min(8, "Password atleast be 6 digit").required("Password is required")
})