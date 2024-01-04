import { useState } from 'react';
import { nanoid } from 'nanoid';

const Form = ({ data, setData }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      return false;
    }

    setData([...data, { id: nanoid(), inputValue: value }]);
    setValue('');
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='value'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='to do list...'
        />
      </form>
    </section>
  );
};

export default Form;
