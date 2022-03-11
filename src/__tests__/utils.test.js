import { 
  errorMessages,
  transformTextToLowerCase,
  transformTextToUpperCase,
} from '../utils';

describe('Transform functions tests', () => {
  test('transformTextToLowerCase valid input', () => {
    const inputText = 'Testing one, two, 3.';
    const outputText = transformTextToLowerCase(inputText);
    const expectedOutputText = 'testing one, two, 3.';
    expect(outputText).toEqual(expectedOutputText);
  });

  test('transformTextToLowerCase invalid input', () => {
    const inputText = '';
    const testFn = () => {transformTextToLowerCase(inputText)};
    expect(testFn).toThrow(errorMessages.emptyInput);
  });

  test('transformTextToUpperCase valid input', () => {
    const inputText = 'Testing one, two, 3.';
    const outputText = transformTextToUpperCase(inputText);
    const expectedOutputText = 'TESTING ONE, TWO, 3.';
    expect(outputText).toEqual(expectedOutputText);
  });

  test('transformTextToUpperCase invalid input', () => {
    const inputText = '';
    const testFn = () => {transformTextToUpperCase(inputText)};
    expect(testFn).toThrow(errorMessages.emptyInput);
  });
})