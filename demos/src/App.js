
import './App.css';
import AddProduct from './components/AddProduct';
import Category from './components/Category';
import Counter from './components/Counter';
import SignUp from './components/SignUp';
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
   <hr></hr>
   <SignUp />

   </>
  );
}

export default App;
