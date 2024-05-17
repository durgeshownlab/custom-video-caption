import { useState, useRef, useEffect } from "react"
import CaptionBox from "./components/CaptionBox"
import LoadUrl from "./components/LoadUrl"
import VideoBox from "./components/VideoBox"

function App() {

  const [videoUrl, setVideoUrl]=useState('');
  const [captionText, setCaptionText]=useState('');
  const [captionTimestamp, setCaptionTimestamp]=useState('');
  const [captions, setCaptions]=useState([]);
  
  

  const captionId=useRef();
  const videoId=useRef();

  useEffect(()=>{
    const updateCaptions = ()=>{
      const currTime=videoId.current.currentTime;
        console.log('object')
        const caption = captions.find(caption=>Math.abs(currTime-caption.time)<1)
        if(caption){
          captionId.current.innerText=caption.text
        }
        else {
          captionId.current.innerText=''
        }
    }

    videoId.current.addEventListener('timeupdate', updateCaptions)

    return ()=> videoId.current.removeEventListener('timeupdate', updateCaptions)
  }, [captions])

  return (
    <>
      <div className="w-full">
        <div className="mx-auto max-w-7xl mt-5">
          <LoadUrl videoUrl={videoUrl} setVideoUrl={setVideoUrl}/>
          <div className="py-3 flex gap-x-4">
            <VideoBox videoUrl={videoUrl} captions={captions} captionId={captionId} videoId={videoId}/>
            <CaptionBox captions={captions} setCaptions={setCaptions} videoUrl={videoUrl} videoId={videoId}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
