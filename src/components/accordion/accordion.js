import React, { useState } from 'react';
import s from './accordion.module.css'

const Accordion = ({ title, content , id}) => {
  const [isActive, setIsActive] = useState(false);

 function handleClick(e){
     if(e.target.style.color){
        e.target.style.color = "";
        e.target.innerText = e.target.innerText.slice(1);
     }else{
        e.target.style.color = "red"
        e.target.insertAdjacentText("afterBegin","+ ")        
     }
  }
  return (
 <div className={s.accordion_item}>
    <div className={s.accordion_title} onClick={() => setIsActive(!isActive)}>
    <div>{title}</div>
    </div>{isActive && <div className={s.accordion_content}>{content.map((content, item)=>(<p key={item} onClick={(e)=>handleClick(e)}>{content}</p>))}</div>}
 </div>
  );
};

export default Accordion;