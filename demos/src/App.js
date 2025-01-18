
import './App.css';
import AddProduct from './components/AddProduct';
import Category from './components/Category';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';
import UserApi from './components/UserApi';

function App() {
  return (
   <>
   <Category />
   <hr></hr>
   <UserApi />
   <hr></hr>
   <AddProduct />
   <hr></hr>
   <ToDoList />
   <hr></hr>
   <Counter />

   </>
  );
}

export default App;
