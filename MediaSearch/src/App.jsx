import React from 'react'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import { Routes,Route } from 'react-router-dom'
import Nav from './components/Nav'
 import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <div className=' min-h-screenl w-full bg-gray-950 text-white'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/collection' element={<CollectionPage/>}></Route>
      </Routes>
     
     <ToastContainer/>
      {/* <button className='bg-green-400 px-4 py-2 m-5' onClick={async()=>{
        const data=await fetchPhotos('cat')

        console.log(data)
      }}>Get Photos</button>

       <button className='bg-green-400 px-4 py-2 m-5' onClick={async()=>{
        const data=await fetchVideos('cat')

        console.log(data.videos)
      }}>Get Videos</button>

       <button className='bg-green-400 px-4 py-2 m-5' onClick={async()=>{
        const data=await fetchGif('cat')

        console.log(data.data.results)
      }}>Get Videos</button> */}
      
    </div>
  )
}

export default App