import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const ListData = ({ id, inputValue, handleDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='list'>
      <div>
        <input
          type='checkbox'
          name='complete'
          id='complete'
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <h2
          style={{
            textDecoration: isChecked ? 'line-through #ccc' : 'none',
            color: isChecked && 'gray',
          }}
        >
          {inputValue}
        </h2>
      </div>
      <button type='button' onClick={() => handleDelete(id)} className='btn'>
        <FaTrash />
      </button>
    </div>
  );
};

export default ListData;
