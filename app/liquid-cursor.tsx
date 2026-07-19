"use client";
import { useEffect, useRef } from "react";

export function LiquidCursor(){
  const outerRef=useRef<HTMLDivElement>(null);
  const innerRef=useRef<HTMLDivElement>(null);
  const position=useRef({x:-100,y:-100});
  const target=useRef({x:-100,y:-100});
  const pointer=useRef(false);
  useEffect(()=>{
    if(!matchMedia("(pointer: fine)").matches)return;
    let frame=0;
    const update=()=>{
      position.current.x+=(target.current.x-position.current.x)*.15;
      position.current.y+=(target.current.y-position.current.y)*.15;
      const outerScale=pointer.current?1.5:1,innerScale=pointer.current?.5:1;
      if(outerRef.current)outerRef.current.style.transform=`translate3d(${position.current.x}px,${position.current.y}px,0) translate(-50%,-50%) scale(${outerScale})`;
      if(innerRef.current)innerRef.current.style.transform=`translate3d(${position.current.x}px,${position.current.y}px,0) translate(-50%,-50%) scale(${innerScale})`;
      frame=requestAnimationFrame(update);
    };
    const move=(event:MouseEvent)=>{target.current={x:event.clientX,y:event.clientY};const element=(event.target as HTMLElement)?.closest("a,button,input,select,textarea,[role='button']");pointer.current=Boolean(element)};
    addEventListener("mousemove",move,{passive:true});frame=requestAnimationFrame(update);return()=>{removeEventListener("mousemove",move);cancelAnimationFrame(frame)};
  },[]);
  return <><div ref={outerRef} className="original-cursor-outer" aria-hidden="true"/><div ref={innerRef} className="original-cursor-inner" aria-hidden="true"/></>;
}
