
import './App.css';
import AddProduct from './components/AddProduct';
import Category from './components/Category';
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

   </>
  );
}

export default App;
