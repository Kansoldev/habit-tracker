export type SignupFormProps = {
  email: string;
  password: string;
  formErrors: {
    email: string;
    password: string;
  };
  onSetEmail: (val: string) => void;
  onSetPassword: (val: string) => void;
  onSignupSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};
