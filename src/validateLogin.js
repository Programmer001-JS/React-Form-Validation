export default function validateLogin(values) {
    let errors = {};
    if (!values.email) {
        errors.email ="Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }


    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password needs to be more 8 characters"
    }
    return errors;
}