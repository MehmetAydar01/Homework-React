import { useState } from 'react';
import Form from './Form';
import List from './List';
import { initialData } from './data';

const App = () => {
  const [data, setData] = useState(initialData);

  const handleDelete = (id) => {
    const filteredDelete = data.filter((item) => item.id !== id);
    setData(filteredDelete);
  };

  return (
    <main>
      <div className='container'>
        <h1>todos</h1>
        <Form data={data} setData={setData} />
        <List data={data} handleDelete={handleDelete} />
      </div>
    </main>
  );
};

export default App;
