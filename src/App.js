import logo from './logo.svg';
import './App.css';
import AddNewTodo from './components/AddNewTodo';
import TodoList from './components/TodoList';
import { Divider } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div style={{width: 400}}>
      <AddNewTodo />
      <Divider style={{margin: '20px 0px'}}/>
      <TodoList />
      </div>
    </div>
  );
}

export default App;
