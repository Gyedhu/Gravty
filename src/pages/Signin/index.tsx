import { useState } from "react";
import { CheckBox } from "../../components";
import Input from "../../components/Input";
import { FormContainer } from "../../container";

const Signin = () => {

  // ShowPassword for set password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggling password visibility
  const togglePassword = () =>
    setShowPassword(prev => !prev);

  // Submit form data
  const submitForm = () => {
    alert("signin");
  }

  return <FormContainer
    title="Signin"
    subTitle="Welcome back to Gravty"
    linkTitle="Create a new account?"
    linkTo="/signup"
    onSubmit={submitForm}
  >

    {/* Email field */}
    <Input
      name="email"
      placeholder="Email"
      type="email"
    />

    {/* Password field */}
    <Input
      name="password"
      placeholder="Password"
      type={showPassword ? "text" : "password"}
    />

    {/* Checkbox for toggle password visibility */}
    <CheckBox onChange={togglePassword} title="Show Password" />

  </FormContainer>
}

export default Signin;
