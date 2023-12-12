import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sidebarOptions } from '../constants/sidebarOptions';


const Sidebar = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    // const [showDetails, setShowDetails] = useState({});
    const navigate = useNavigate();



    const handleShowDetails = (optionId) => {
        setSelectedOption((prevSelectedOption) => (prevSelectedOption === optionId ? null : optionId));
        // setShowDetails((prevShowDetails) => ({
        //     ...prevShowDetails,
        //     [optionId]: !prevShowDetails[optionId]
        // }))
    }

    const navigateToPage = (link) => {
        navigate(link); 
    }

  return (
    <>
      <div className='py-4 bg-blue-400 h-full overflow-y-auto'>
        <h1 onClick={() => navigate('/')} className='font-extrabold text-3xl bg-white text-center w-fit mx-auto p-2 rounded-md cursor-pointer'><span className='text-red-700'>Godot</span><span className='text-blue-700'>Test</span></h1>
        <div className='flex-1 overflow-clip'>
        {sidebarOptions.map((options, index) => (
            <>
                <div onClick={() => handleShowDetails(options.id)} key={index} className='flex justify-between p-6 cursor-pointer'>
                    <h1 className='text-xl text-white font-bold'>{options.name}</h1>
                    {selectedOption === options.id
                        ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-4 h-4'>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>                        
                    }
                </div>
                { selectedOption === options.id 
                    && 
                    <div className='px-6 flex flex-col gap-6 my-6'>
                        {options.details.map((detail, detailIndex) => 
                        <h3 className='text-white cursor-pointer' key={detailIndex} onClick={() => navigateToPage(detail.link)}>
                            {detail.name}
                        </h3>)
                        }
                    </div>
                }
            </>
        ))}
        </div>
       </div>
    </>
  )
}

export default Sidebar