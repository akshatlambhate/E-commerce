import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare,faFacebookSquare , faInstagramSquare,faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
const SocialMediaIcons = () => {
    return (
        <>
            <FontAwesomeIcon icon={faFacebookSquare} class="w-10 h-10 text-blue-900 hover:text-blue-700" />
            <FontAwesomeIcon icon={faTwitterSquare} class="w-10 h-10 text-blue-600 hover:text-blue-400" />
            <FontAwesomeIcon icon={faInstagramSquare} class="w-10 h-10 text-rose-600 hover:text-rose-400" />
            <FontAwesomeIcon icon={faYoutubeSquare} class="w-10 h-10 text-red-700 hover:text-red-500" />
        </>
    )
}

export default SocialMediaIcons
