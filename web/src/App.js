import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './SideBar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  async function handleDeleteDev(data) {
    const response = await api.delete(`/devs?_id=${data._id}`)
    console.log(response.data.message);
    if (response.status === 200 && response.data.message === "Ok.")
      setDevs(devs.filter(e => e._id !== data._id));
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} onClick={handleDeleteDev} />
          ))}

        </ul>

      </main>
    </div>
  );
}

export default App;
