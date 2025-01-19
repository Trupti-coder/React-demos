
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import Category from './components/Category';
import Counter from './components/Counter';
import SignUp from './components/SignUp';
import ToDoList from './components/ToDoList';
import UserApi from './components/UserApi';
import Login from './components/Login';
import ShowList from './components/ShowList';

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
   <Login />
   <Routes>
    
      <Route path='/signup' element={<SignUp />}></Route>

    </Routes>

    <hr></hr>
    <ShowList />

   </>
  );
}

export default App;
