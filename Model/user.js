class User {
  constructor({ id, email, password, firstName, lastName, mobileNumber, role }) {
    this.id = id || null;
    this.email = email || '';
    this.password = password || '';
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.mobileNumber = mobileNumber || null;
    this.role = role || 'user';
  }

  // Example method to get full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Method to update user details
  updateDetails(details) {
    Object.assign(this, details);
  }

  // Method to validate email format (basic example)
  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
 getUserAllDataJson() {
    return JSON.stringify({
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      mobileNumber: this.mobileNumber,
      role: this.role,
    });
  }
}


