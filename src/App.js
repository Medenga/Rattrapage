import './App.css';
import { useEffect, useState } from 'react';
import './uvs.json';
import './ca.json';
import { LineChart, PieChart, CartesianGrid, XAxis,YAxis,Tooltip,Legend,Line,Pie } from 'recharts';

const App = () => {
  const datas = []
  const [data, setData]=useState(datas);

  useEffect(() => {
    fetch('uvs.json')
    .then(function(myJson) {
      console.log(myJson);
      setData(myJson)
    });
  }, []);

  return (
    <div className="App">
      {data}
      <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>

     
    </div>
  );
}

export default App;
