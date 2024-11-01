
import Login from './screens/login'
// import Model1 from './Models/F1/model1'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Mainpage from './screens/Mainpage'
import Create from './screens/create'
import Show from './components/Mainpage/More'
import Signin from './components/login/signin'
// import Model2 from './Models/F2/Model2'
import Post from './components/Admin/Post'
import Forget from './components/Forget'
import Index from './screens/Index'
// import Model from './screens/model';
import Middle1 from './Models/F3/middle1';
// import Model3 from './Models/F3/mainpage';

import { Model3router } from './AppRouting';
import Model from './screens/model';
import Form3 from './components/Form/form';
import Card from './screens/Display_userCard';
import { Model1,Model2,Model3 } from './exports/exportsModule';
import Preview from './screens/preview';
import GeneralWedding from './components/Form/GeneralWedding';
import WeddingPlannerForm from './components/Form/Model3form';
// import Model3form from './components/Form/Model3form';
import Model4 from './Models/F4/mainpage';
// import { useAuthContext } from './context/useAuthcontext';
import Final from './screens/Final';
import UserDisplay from './screens/UserDisplay';
import { useContext } from 'react';
import AuthContext from './components/login/authcontextprovider';
import AuthenticatedLayout from './components/login/Authlayout';
import AdminPanel from './components/Mainpage/AdminPanel';

function App() {
  
  const { isAuthenticated} = useContext(AuthContext)
  console.log(isAuthenticated)
  // const {authUser}=useAuthContext();
  // console.log(authUser);
  return (
    
    <BrowserRouter>
    <Routes>

      <Route path="/" element={ isAuthenticated ? <Navigate to={"/main"}/>:<Index />} />
      
      <Route element={<AuthenticatedLayout/>}>
       <Route path="/main" element={<Mainpage />} />
      </Route>
      <Route path="/preview" element={<Preview />} />
      <Route path='/final' element={<Final/>} />
      <Route path="/general" element={< WeddingPlannerForm/>} />
      <Route path="formtext" element={<WeddingPlannerForm/>} />
      <Route path='/preview' element={<Preview/>} />
      <Route path='/preview/model2' element={<Preview/>} />
      <Route path='/preview/model4' element={<Preview/>} />
      <Route path = '/:id' element={<UserDisplay/>} />
      <Route path='/preview/model3' element={<Preview/>} >
      {Model3router.map((route,index)=>(
              <Route key={index} path={route.path} element={route.component} />
            ))}
        </Route>
        <Route path='/admin' element={<AdminPanel/>} />
      <Route path="/Create" element={<Create />} />
      <Route path="/More" element={<Post />} />
      <Route path="/show" element={<Show />} >
        <Route path='model3' element={<Model3/>} />
        <Route path='model1' element={<Model1/>} />
        <Route path='model2' element={<Model2/>} />
        <Route path='model4' element={<Model4/>} />
      </Route>
      <Route path="/signUp" element={ isAuthenticated ? <Navigate to={"/main"}/>:<Login />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/signin" element={isAuthenticated? <Navigate to={"/main"}/>:<Signin />} /> 
      {/* <Route path="/main/model1" element={<Form3 Model={Model1} Modelname={'model1'} Formname={GeneralWedding}/>} /> */}
      {/* <Route path="/main/model2" element={<Form3 Model={Model2} Modelname={'model2'} Formname={GeneralWedding}/>} /> */}
      <Route path="/main/:modelId" element={<Form3 />} />
      {/* <Route path='/main/model3' element={<Form3 Model={Model3} Modelname={'model3'} Formname={Model3form}/>} >
            {/* <Route path='map' element={<Map/>} />
            <Route path='album' element={<Album/>} />
            <Route path='' element={<Middle1/>} /> */}
            {/* {Model3router.map((route,index)=>(
              <Route key={index} path={route.path} element={route.component} />
            ))}   */}
      {/* </Route>  */} 
      <Route path='/user/:id/Model1' element={<Card Model={Model1}/>} />
      <Route path='/user/:id/Model2' element={<Card Model={Model2}/>} />
      <Route path='/user/:id/Model3' element={<Card Model={Model3}/>} >
      {Model3router.map((route,index)=>(
              <Route key={index} path={route.path} element={route.component} />
            ))} 
      </Route>



    </Routes>
  </BrowserRouter>
  )
}

export default App



// const Changes = () =>{


//   return (
//     <Routes>
//        <Route path='/x' element={<Album/>} />
//     </Routes>
//   )
// }