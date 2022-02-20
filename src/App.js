import {React} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Login,Dashbaord,Home,
        Category,AddProduct,ListProduct,Pos} from './pages';
import PrivateRoute from './Routes/PrivateRoutes';


const App=()=>{
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Login/>} excat={true}/>
    
     <Route path="/" element={<PrivateRoute/>}>
     <Route path="/admin/pos" element={<Pos/>} excat={true}/>
       <Route  path="admin" element={<Dashbaord/>}>
         <Route index element={<Home/>}/>     
         <Route  path="category" element={<Category/>}/>
         <Route path="addproduct" element={<AddProduct/>}/>
         <Route path="listproduct" element={<ListProduct/>}/>
       </Route> 
     </Route>
     <Route path="*"element={<h1>Page is not Found</h1>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
