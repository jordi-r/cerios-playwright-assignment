export type TestUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  address: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  phone: string;
};

/**
 * Creates a valid test user with default data
 */
export function createTestUser(): TestUser {
  const timestamp = Date.now();

  return {
    firstName: "Test",
    lastName: "User",
    email: `test-${timestamp}@example.com`,
    password: "ValidPass123!",
    dateOfBirth: "1990-01-01",
    address: "Test Street 123",
    postalCode: "1234AB",
    city: "Amsterdam",
    state: "North Holland",
    country: "NL",
    phone: "0612345678",
  };
}

// Test data constants for edge cases
export const INVALID_DATA = {
  postalCode: "INVALID",
  weakPassword: "123", // Too short
  wrongPassword: "wrong-password",
  invalidEmail: "nonexistent.user@example.com",
  oldBirthDate: "1940-01-01", // > 75 years old
  futureBirthDate: "2030-01-01",
};
