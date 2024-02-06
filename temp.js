import React, { useState } from 'react';

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset style={{ border: `2px solid #00D8FF`, padding: '10px', marginBottom: '10px' }}>
      <legend style={{ color: '#00D8FF' }}>Enter temperature in {scale}:</legend>
      <input
        type="text"
        value={temperature}
        onChange={handleChange}
        style={{ width: '50%', padding: '5px' }}
      />
    </fieldset>
  );
};

const BoilingVerdict = ({ celsius }) => {
  return celsius >= 100 ? (
    <p style={{ color: '#00D8FF' }}>The water would boil.</p>
  ) : (
    <p style={{ color: '#00D8FF' }}>The water would not boil.</p>
  );
};

const Calculator = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale('c');
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div style={{ textAlign: 'center' }}>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};

const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

export default Calculator;
