import React from 'react'
import SearchBar from './components/SearchBar'
// import { fetchGif, fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-950 text-white'>

      <SearchBar/>

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