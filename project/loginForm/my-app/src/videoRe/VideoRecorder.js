import React, { useRef, useState } from 'react'

function VideoRecorder() {
const webcamRef=useRef(null)
const [recording,setRecording]=useState(false)



const startRecording=()=>{
    setRecording(true)
}

const stopRecording=()=>{
    setRecording(true)
}

const handleStartCapturing=async()=>{
    try{
        const mediaStrem=await navigator.mediaDevices.getDisplayMedia({
            video:true,
            audio:true
        })
        webcamRef.current.srcObject=mediaStrem
    }catch(err){
        console.error(err)
    }
}





  return (
    <div>
<video ref={webcamRef } autoPlay ></video>
<div>
    {!recording?(
        <button onClick={handleStartCapturing}>StartCapturing</button>
        
    ):(<button onClick={stopRecording}>StopRecording</button>)}
    {recording&&(<button onClick={startRecording} >StartRecording</button>)}
</div>
    </div>
  )
}

export default VideoRecorder