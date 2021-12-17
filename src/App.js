import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const onChange = event => setTodo(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    setTodo('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type='text'
          placeholder='할 일을 적어보세요.'
        />
        <button>추가</button>
      </form>
    </div>
  );
}

export default App;
