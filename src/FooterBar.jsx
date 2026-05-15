import React from 'react'

const Footer = () => {
  return (
    <footer className="py-5  text-[#ff0088] font-semibold text-[12px]">
        <div className="w-[90%] mb-2 text-center max-w-300 text-[10px] md:text-lg mx-auto">
            "Nothing Is Perfect - But You Can Make It Better."
        </div>

        
        <div className="flex">
            <div className="ml-3 md:ml-10 w-[90%] text-[10px] md:text-sm text-left max-w-300 mx-auto">
                2025. All rights reserved
            </div>
            <div className="mr-3 md:mr-10 w-[90%] text-[10px] md:text-sm text-right max-w-300 mx-auto">
                Views #11623
            </div>
        </div>
    </footer>
  )
}

export default Footer