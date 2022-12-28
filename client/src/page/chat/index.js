import './chat.css'
import Head from'./head'
import Foot from'./foot'
import Body from'./body'
import {useState,useEffect,useRef}from'react'
import BotTingking from'../../img/robot.gif'
export default function Popup(){
  let [data,setData]=useState([])
  let [show,setShow]=useState(false)
  let [count,setCount]=useState(0)
  let body=useRef()
  useEffect(()=>{
window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  //  alert(document.body.offsetHeight)
  },[data,show,count])
  return (
    <div className='chat'>
    <Head/>
    <div className='bodyHolder' ref={body}>
{
  data.map((e,i)=>(
  <Body data={e} key={i}/>
  ))
}
{show?
<img src={BotTingking} alt='bot is tinking answer' className='bott'/>:
''
}
</div>
<Foot setData={setData} setShow={setShow} setCount={setCount}/>
    </div>
    )
}