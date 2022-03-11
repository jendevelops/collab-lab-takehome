export const errorMessages = {
  emptyInput: 'Input needed to convert text.',
  default: 'Error occured. Please try again.'
}

export const transformTextToLowerCase =  (text) => {
  if(!text){
    throw errorMessages.emptyInput;
  }
  return text.toLowerCase();
}

export const transformTextToUpperCase = (text) => {
  if(!text){
    throw errorMessages.emptyInput;
  }
  return text.toUpperCase();
}

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
