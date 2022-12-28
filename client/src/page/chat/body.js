import './body.css'
import { CiUser } from 'react-icons/ci';
export default function Body({data}){
 // let isBot=false
  return (
    <div className={data.isBot?'bot':'user'}>
   {data.isBot?
   ('')
   :(<CiUser size={24} color='white'
   style={{marginRight:'5px'}}/>)
   }
   <span className={data.isBot?'botTxt':''}>
   {data.text.trim()}
   </span>
    </div>
    )
}