import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs=['photos', 'videos','gif']

    const activeTab=useSelector((state)=>state.search.activeTab)

    const dispatch=useDispatch()

  return (
    <div className='flex gap-5 p-10'>
        {tabs.map(function(elem,idx){
            return (
                <button
                key={idx}
                className={`${(activeTab==elem?'bg-blue-700':'bg-gray-500')} transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
                onClick={()=>{
                    dispatch(setActiveTabs(elem))
                }}
                >
                    {elem}
                </button>
            )
        })}
    </div>
  )
}

export default Tabs