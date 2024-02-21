import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
// import Login from './components/login/Login';
// import { PrivateComponent } from './components/privateComponent/PrivateComponent';
  import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import WedingModal from './components/wedingModal/WeddingModal';
import AnnualFunctionModal from './components/annualFunction/AnnualFunctionModal';
import { SliderData } from './components/wedingModal/SliderData';
// import { LibraryData } from './components/libraryModal/LibraryData';
import { ImagesData } from './components/annualFunction/ImagesData';

import DanceClassesImages from './components/danceClassesImages/DanceClassesImages';
import { DanceClassesImagesData } from './components/danceClassesImages/DanceClassesImagesData';

import GymnasticsClassesImages from './components/gymnasticsClassesImages/GymnasticsClassesImages';
import { GymnasticsClassesImagesData } from './components/gymnasticsClassesImages/GymnasticsClassesImagesData';

import ArtCraftLibrary from './components/art&craftLibrary/ArtCraftLibrary';
import { ArtCraftImages } from './components/art&craftLibrary/ArtCraftImages';
// import Enquire from './components/enquire/Enquire';
// import Signup from './components/signUp/Signup';
// import Admin from './components/admin/Admin';
// import Alert from './components/alert/Alert';



const App = () => {
  // const [alert, setAlert] = React.useState(null);

  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg: message,
  //     type:type
  //   })
  //   setTimeout(()=>{
  //     setAlert(null)
  //   },3000)
  // }

  return (
    <div> 
        
      <BrowserRouter>
      {/* <div className='app'> */}
      <Navbar/>
      {/* <div className="appContainer"> */}
      {/* <Alert alert={alert}/> */}
      <Routes>
      {/* <Route  element={<PrivateComponent/>}> 
      </Route> */}
        <Route exact path='/' element={ <Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/wedding' element={<WedingModal slides={SliderData}  /> } />
        <Route path='/annual' element={<AnnualFunctionModal slides={ImagesData}  /> } />
        <Route path='/artcraft' element={<ArtCraftLibrary slides={ArtCraftImages}  /> } />
        <Route path='/danceclasses' element={<DanceClassesImages slides={DanceClassesImagesData}  /> } />
        <Route path='/gymnastics' element={<GymnasticsClassesImages slides={GymnasticsClassesImagesData}  /> } />
        {/* <Route path='/login' element={ <Login />} />
        <Route path='/enquire' element={ <Enquire />} />
        <Route path='/signup' element={ <Signup />} /> */}
        {/* <Route path='/admin' element={ <A />} /> */}
      </Routes>
      {/* </div> */}  
      {/* </div> */}
      </BrowserRouter>
     
    </div>
  )
}

export default App

