import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection} from '../redux/features/collectionSlice'
import { removeAllToast } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const collection = useSelector(state => state.collection.items)

  const dispatch=useDispatch()
  const removeAll=()=>{
    dispatch(clearCollection())
   dispatch(removeAllToast())
  }
  return (
    <div className='overflow-auto px-10 py-4'>
      <div className='flex justify-between mb-6 items-center'>
        <h2 className='text-xl'>Your Collection</h2>
        <button onClick={()=>{
          removeAll()
        }}
        className='bg-red-700 text-white rounded px-3 py-2 font-xs mt-2 active:scale-95'>Clear All</button>
      </div>
      <div className='flex justify-start flex-wrap gap-5 w-full h-screen'>
        {collection.map((item, idx) => {
          return <div key={idx}>
            <CollectionCard item={item} />
          </div>
        })}
      </div>
    </div>

  )
}

export default CollectionPage