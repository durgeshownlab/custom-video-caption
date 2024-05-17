import React, { useRef } from 'react'

const VideoBox = (props) => {

    // const captionId=useRef();
    // const videoId=useRef();

    const timeUpdate = ()=>{
        
    }

    return (
        <div className='rounded-lg overflow-hidden w-full relative'>
            <video className='rounded-lg' src={props.videoUrl} ref={props.videoId} controls onTimeUpdate={timeUpdate}></video>
            <div className="w-full text-white text-center flex justify-center text-2xl absolute bottom-5 z-1 pointer-events-none" >
                <p className='w-fit select-none' ref={props.captionId} style={{backgroundColor: '#00000060'}} ></p>
            </div>
        </div>
    )
}

export default VideoBox
