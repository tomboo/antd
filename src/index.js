import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message, Alert } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

function App() {
  const [ date, setDate ] = useState(null);

  function handleChange(date) {
    message.info(fdate(date));
    setDate(date);
  };

  function fdate(date) {
    return `Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`;
  }

  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 20 }}>
        <Alert
          message={fdate(date)}
          type="success"
        />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));