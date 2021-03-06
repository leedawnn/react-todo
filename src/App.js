import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = event => setToDo(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDo('');
    setToDos(currentArray => [toDo, ...currentArray]);
  };
  return (
    <div>
      <h1>λμ ν  μΌ πͺπ»</h1>
      <h3>νμ¬ {toDos.length}κ°μ ν  μΌμ΄ λ¨μμμ΅λλ€.</h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='ν  μΌμ μ μ΄λ³΄μΈμ.'
        />
        <button>μΆκ°</button>
      </form>

      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
