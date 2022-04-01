// import "./Item.module.css"
// import {FaBeer} from "@react-icons/all-files/fa/FaBeer";                                         
import "./Item.css"
import useDoubleClick from 'use-double-click';

import {AiFillCaretDown} from "@react-icons/all-files/ai/AiFillCaretDown"
import {BsThreeDotsVertical} from "@react-icons/all-files/bs/BsThreeDotsVertical";
import { useRef, useState } from "react";
import { useStore } from "react-redux";


export const Item =({item}:any)=>{
    const [toggleVis,setToggleVis]= useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);

    useDoubleClick({
        onSingleClick: e => {
          setToggleVis(!toggleVis);  
          console.log('single click');
        },
        onDoubleClick: e => {
          console.log( 'double click');
        },
        ref: buttonRef,
        latency: 250
      });
      

    return<div>{
        item.map((v:any,i:number)=>{
            return<div key={i} 
                           
                className="card">
                <div className="title_handel"
               
                > 
                    <span className="tit">{v.title}</span>
                    <div 
                    className="top"
                    style={{backgroundColor:"red"}}
                    ref={buttonRef} >
                        <AiFillCaretDown /></div>
                    <BsThreeDotsVertical/>
                </div>
                {toggleVis &&
                    <div className="de">
                        {/* <button >hi</button> */}
                       { 
                    v.description
                    }</div>
                }
             </div>
        })
    }
</div>
}