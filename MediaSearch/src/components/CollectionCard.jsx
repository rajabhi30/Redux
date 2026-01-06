import React from 'react'
import { useDispatch } from 'react-redux'
import {removeCollection,removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {
    const dispatch=useDispatch()

    const removeFromCollection=(item)=>{
        dispatch(removeCollection(item.id))
        dispatch(removeToast());
    }
    return (
        <div className='w-[20vw] h-60 bg-white rounded relative'>
            <div className='h-full'>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} alt="" /> : ''}
                {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
            </div>
            <div id='bottom' className='text-white absolute bottom-0 w-full px-4 py-4'>
                <h2 className='text-sm font-semibold capitalize'>{item.title}</h2>
                <button
                    onClick={() => {
                        removeFromCollection(item)
                    }}
                    className='bg-red-700 text-white rounded px-3 py-2 font-xs mt-2 active:scale-95'>Remove</button>
            </div>
        </div>
    )
}

export default CollectionCard
