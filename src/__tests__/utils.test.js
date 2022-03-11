import { 
  transformTextToLowerCase,
  transformTextToUpperCase
} from '../utils';

describe('Transform functions tests', () => {
  test('transformTextToLowerCase valid input', () => {
    const inputText = 'Testing one, two, 3.';
    const outputText = transformTextToLowerCase(inputText);
    const expectedOutputText = 'testing one, two, 3.';
    expect(outputText).toEqual(expectedOutputText);
  });

  test('transformTextToUpperCase valid input', () => {
    const inputText = 'Testing one, two, 3.';
    const outputText = transformTextToUpperCase(inputText);
    const expectedOutputText = 'TESTING ONE, TWO, 3.';
    expect(outputText).toEqual(expectedOutputText);
  });
})