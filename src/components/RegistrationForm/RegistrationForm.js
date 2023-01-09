import { Form, Label } from "./RegistrationForm.styled";

export const RegistrationForm = () => {
  return (
    <Form>
      <Label>
        Username
        <input type="text" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <button type="submit">Log in</button>
    </Form>
  );
};
