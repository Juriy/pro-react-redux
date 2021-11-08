import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwither />
    </div>
  );
};

const HookSwither = () => {
  const [color, setColor] = useState('gray');
  const [fontSize, setFontSize] = useState(14);

  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: color,
        fontSize: `${fontSize}px`, }}>
      Hello React
      <button onClick={() => setColor('gray')}>
        Dark
      </button>
      <button onClick={() => setColor('white')}>
        Light
      </button>
      <button
        onClick={() => setFontSize((s) => s + 2)}>
      +
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
