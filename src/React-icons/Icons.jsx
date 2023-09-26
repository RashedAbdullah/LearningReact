//npm install react-icons --save
import { FaCss3, FaDiscord, FaFacebook, FaWhatsapp } from "react-icons/fa6";

import React from 'react'

const IconsofReact = () => {
  return (
    <div>Icons <hr />
        <FaCss3 className="text-light fs-1 m-5" />
        <FaDiscord className="text-light fs-1 m-5" />
        <FaFacebook className="text-light fs-1 m-5" />
        <FaWhatsapp className="text-light fs-1 m-5" />
    </div>
  )
}

export default IconsofReact;