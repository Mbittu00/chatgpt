import './foot.css'
import { BiSend } from 'react-icons/bi';
import {useState}from'react'
import axios from'axios'
export default function Foot({setData,setShow,setCount}){
  let [prompt,setPrompt]=useState('')
  let AI=async()=>{
    setShow(true)
    setPrompt('')
try {
  let user={text:prompt,isBot:false}
  setData((n)=>[...n,user])
      let uri='https://chat-gpt-backend.vercel.app/'
   let {data}=await axios.post(uri,{
     prompt
   })
   let bot={text:data.bot,isBot:true}
   setData((n)=>[...n,bot])
   setShow(false)
   console.log(data)
} catch (e) {}
  }
  return (
    <div className='foot'>
<input type='text' className='input'
placeholder='Enter Your Question'
onChange={(e)=>setPrompt(e.target.value)}
value={prompt}
onFocus={()=>{setCount((n)=>n+1)}}
onBlur={()=>{setCount((n)=>n+1)}}/>
    <BiSend size='34' onClick={AI}/>
    </div>
    )
}