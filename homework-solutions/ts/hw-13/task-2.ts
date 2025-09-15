function validatePassword(password: string): boolean {
  const isUpperCase = /[A-Z]/.test(password);
  const isLowerCase = /[a-z]/.test(password);
  const isNumber = /\d/.test(password);
  const isValidLength = password.length >= 8;
  const isNotBlank = password.trim().length > 0;

  return isUpperCase && isLowerCase && isNumber && isValidLength && isNotBlank;
}

console.log(validatePassword("Admin12345"));
console.log(validatePassword("admin12345"));
console.log(validatePassword("ADMIN12345"));
console.log(validatePassword("Admin1"));
console.log(validatePassword("      "));
