import './App.css';
import React, { useState } from 'react';
import { conversionOptions, errorMessages } from './utils';

const App = () => {
  const [textInput, setTextInput] = useState('Here is some example text.');
  const [conversionMode, setConversionMode] = useState(conversionOptions.lowercase.value);
  const [textOutput, setTextOutput] = useState('');
  const [textOutputStyle, setTextOutputStyle] = useState('result');
  const [transformError, setTransformError] = useState(null);


  const handleRadioChange = event => {
    setConversionMode(event.target.value);
  }

  const handleTextareaChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTransformError(null); // previous submit errors are reset when a new request is submitted
    try{
      const transformedText = conversionOptions[conversionMode].textTransformFunction(textInput);
      setTextOutputStyle(`result-${conversionMode} result`);
      setTextOutput(transformedText);
    } catch (err) {
      if(!textInput){
        // returns a specific error if input is empty
        setTransformError(errorMessages.emptyInput);
      } else {
        // generic message for all other errors
        setTransformError(errorMessages.default);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab "Moody" message converter</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-control form-control__text">
          <label htmlFor="text">Text to be converted:</label>
          <textarea
            id="text"
            onChange={handleTextareaChange}
            value={textInput}
            aria-required="true"
            aria-invalid={transformError?"true":"false"}
            aria-errormessage="inputError"
          />
          {transformError && <strong id="inputError" role="alert" className="error">{transformError}</strong>}
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-0"
            value={conversionOptions.lowercase.value}
            checked={conversionMode === conversionOptions.lowercase.value}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-0">{`${conversionOptions.lowercase.label} (${conversionOptions.lowercase.description})`}</label>
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-1"
            value={conversionOptions.uppercase.value}
            checked={conversionMode === conversionOptions.uppercase.value}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-1">{`${conversionOptions.uppercase.label} (${conversionOptions.uppercase.description})`}</label>
        </div>
        <button type="submit">Submit</button>
        <div className="form-control form-control__text u-mt-3">
          <label htmlFor="result">Converted text:</label>
          <output id="result" className={textOutputStyle}>{textOutput}</output>
        </div>
      </form>
    </div>
  );
}

export default App;
