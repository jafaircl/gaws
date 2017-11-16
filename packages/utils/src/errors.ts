// Error handling
export const ERROR_MSG = 'An error occured with the @gaws library';

export function logError(message) {
  if(!message) {
    message = ERROR_MSG;
  }
  Logger.log(`gaws Error: ${message}`);
}