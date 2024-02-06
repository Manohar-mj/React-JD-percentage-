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



//style.css
.donutchart-track {
  fill: transparent;
  stroke: #dae2e5;
  stroke-width: 26;
}
.donutchart-indicator {
  fill: transparent;
  stroke: #009688;
  stroke-width: 26;
  stroke-dasharray: 0 10000;
  transition: stroke-dasharray 0.3s ease;
}

.donutchart {
  margin: 0 auto;
  border-radius: 50%;
  display: block;
}

.donutchart-text {
  font-family: 'Roboto';
  fill: #607580;
}
.donutchart-text-val {
  font-size: 22px;
}
.donutchart-text-percent {
  font-size: 14px;
}
.donutchart-text-label {
  font-size: 9px;
}

body {
  padding: 40px;
  font-family: 'Roboto';
  text-align: center;
}

input {
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 154px;
}

