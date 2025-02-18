/**
 * Generates a unique identifier based on timestamp and random number
 * Returns a number between 0 and 1 that can be used as a seed for IDs
 */
export function getCorrectId(): number {
  // Get current timestamp
  const timestamp = Date.now();
  
  // Generate a random number between 0 and 1
  const random = Math.random();
  
  // Combine timestamp with random number to create a unique seed
  const seed = timestamp * random;
  
  // Normalize the result to be between 0 and 1
  return (seed % 10000) / 10000;
}

/**
 * Generates a process ID using the seed from getCorrectId
 */
export function getProcessId(): number {
  return Math.floor(getCorrectId() * 10000);
}

/**
 * Generates a thread ID using the seed from getCorrectId
 */
export function getThreadId(): number {
  return Math.floor(getCorrectId() * 100);
}

/**
 * Generates a session ID using the seed from getCorrectId
 */
export function getSessionId(): string {
  return getCorrectId().toString(36).substr(2, 9);
}
