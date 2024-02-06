import React, { useState } from 'react';
import './style.css';

const DonutChart = ({ value, valuelabel = 'Completed', size = 116, strokewidth = 26 }) => {
  const halfsize = size * 0.5;
  const radius = halfsize - strokewidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const dashval = `${(value * circumference) / 100} ${circumference}`;

  return (
    <svg width={size} height={size} className="donutchart">
      <circle
        r={radius}
        cx={halfsize}
        cy={halfsize}
        transform={`rotate(-90 ${halfsize},${halfsize})`}
        style={{ strokeWidth: strokewidth }}
        className="donutchart-track"
      />
      <circle
        r={radius}
        cx={halfsize}
        cy={halfsize}
        transform={`rotate(-90 ${halfsize},${halfsize})`}
        style={{ strokeWidth: strokewidth, strokeDasharray: dashval }}
        className="donutchart-indicator"
      />
      <text
        className="donutchart-text"
        x={halfsize}
        y={halfsize}
        style={{ textAnchor: 'middle' }}
      >
        <tspan className="donutchart-text-val">{value}</tspan>
        <tspan className="donutchart-text-percent">%</tspan>
        <tspan className="donutchart-text-label" x={halfsize} y={halfsize + 10}>
          {valuelabel}
        </tspan>
      </text>
    </svg>
  );
};

const App = () => {
  const [donutval, setDonutVal] = useState(55);

  const updateVal = (e) => {
    setDonutVal(e.target.value);
  };

  return (
    <div>
      <DonutChart value={donutval} />
      <br />
      <label>
        Enter a value from 1-100
        <br />
        <input onChange={updateVal} type="number" min="0" max="100" />
      </label>
    </div>
  );
};

export default App;
