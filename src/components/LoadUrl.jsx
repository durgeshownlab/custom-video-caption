import React, { useRef } from 'react'

const LoadUrl = (props) => {

    const videoUrl=useRef();

    const loadVideoUrl=()=>{
        props.setVideoUrl(videoUrl.current.value)
    }

    return (
        <>
            <div className="w-full flex">
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" ref={videoUrl} />

                <button className="btn btn-active btn-primary mx-1" onClick={()=>loadVideoUrl()}>Load Video</button>
            </div>
        </>
    )
}

export default LoadUrl
