const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const validateUsername = (username) => {
  if (username.length < 2) {
    throw new Error('Your username needs to be a little longer');
  }
  if (username.length > 16) {
    throw new Error(
      'Have a shorter one? The max username length is 16 characters'
    );
  }
};

export const validateEmail = (email) => {
  if (!email.trim()) throw new Error('Please enter your email');
  if (!validEmail.test(email)) throw new Error('Please enter a valid email');
};

export const validatePassword = (password) => {
  if (!password.trim()) throw new Error('Please enter your password');
  if (password.length < 8)
    throw new Error('Try entering a password at least 8 characters');
  if (password.length > 32)
    throw new Error(
      'Have a shorter one? The max password length is 72 characters'
    );
  if (password[0] === ' ')
    throw new Error('Please enter a password without spaces at the beginning');
  if (password[password.length - 1] === ' ')
    throw new Error('Please enter a password without spaces at the end');
};
