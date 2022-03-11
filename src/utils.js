export const transformTextToLowerCase =  (text) => text.toLowerCase();

export const transformTextToUpperCase = (text) => text.toUpperCase();

export const conversionOptions = {
  lowercase: {
    value: 'lowercase',
    textTransformFunction: transformTextToLowerCase,
  }, 
  uppercase: {
    value: 'uppercase',
    textTransformFunction: transformTextToUpperCase,
  }
};