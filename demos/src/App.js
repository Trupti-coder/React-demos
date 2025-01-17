
import './App.css';
import AddProduct from './components/AddProduct';
import Category from './components/Category';
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
   
   </>
  );
}

export default App;
