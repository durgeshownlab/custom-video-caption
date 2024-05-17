import {useRef} from 'react'

const CaptionBox = (props) => {
    
    const captionTextRef=useRef();
    const captionTimestampRef=useRef();

    const addCaption = async ()=>{
        if(props.videoUrl===''){
            alert('Please load a video first')
        }
        else if(captionTextRef.current.value===''){
            alert('Please Enter Caption Text')
        }
        else if(isNaN(captionTimestampRef.current.value) || captionTimestampRef.current.value<0){
            alert('Please Enter Timestamp')
        }
        else {
            if(captionTimestampRef.current.value<=props.videoId.current.duration) {

                console.log(captionTextRef.current.value, captionTimestampRef.current.value, props.captions.length)
            
                await props.setCaptions(prev=>[...prev, {text: captionTextRef.current.value, time: parseFloat(captionTimestampRef.current.value) }])
    
                captionTextRef.current.value=''
                captionTimestampRef.current.value=''
                
                console.log(props.captions)
            }
            else {
                alert('Please Provide Timestamp les then video time duration')
            }
        }

    }

    return (
        <div className='w-1/3 shadow-lg border border-blue-400 border-1 rounded-lg flex flex-col gap-y-2 p-2'>
            <textarea type="text" placeholder="Type Caption" className="textarea textarea-primary w-full h-20" ref={captionTextRef} ></textarea>
            <input type="text" placeholder="Time Stamp in Second" className="input input-bordered input-primary w-full" ref={captionTimestampRef} />

            <button className="btn btn-active btn-primary mx-1" onClick={addCaption}>Add Caption</button>
        </div>
    )
}

export default CaptionBox
