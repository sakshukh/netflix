export const validateEmail = (email) => {
  const valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!valid) return "Invalid Email Address";

  return null;
};

export const validatePassword = (password) => {
  const valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!valid) return "Invalid Password";

  return null;
};
