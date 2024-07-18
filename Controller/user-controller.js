import User from require(/../Modle/user.js)
const user = new User({
  id: 1,
  email: 'example@example.com',
  firstName: 'John',
  lastName: 'Doe',
  mobileNumber: 1234567890,
  role: 'user',
});

console.log(user.getFullName()); // Output: John Doe
console.log(user.validateEmail()); // Output: true