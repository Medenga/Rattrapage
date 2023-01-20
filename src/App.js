import './App.css';
import { useEffect, useState } from 'react';
import './uvs.json';
import './ca.json';
import { LineChart, PieChart, CartesianGrid, XAxis,YAxis,Tooltip,Legend,Line,Pie } from 'recharts';

const App = () => {
  const dt =[]
  const [data, setData] = useState(dt);
  const [data1, setData1] = useState(dt);

  useEffect(() => {
    fetch('uvs.json')
    .then(function(myJson) {
      setData(myJson)
    });
  }, []);

  useEffect(() => {
    fetch('ca.json')
    .then(function(myJson) {
      setData1(myJson)
    });
  }, []);

  return (
    <div className="App">
      <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>

      <PieChart width={730} height={250}>
        <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      </PieChart>

     
    </div>
  );
}

export default App;
