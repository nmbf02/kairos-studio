"use client";
import { Shader, ChromaFlow, Swirl } from "shaders/react";

export function LiquidBackground({ subtle = false }: { subtle?: boolean }){
  return <div className={`liquid-shader${subtle ? " liquid-subtle" : ""}`} aria-hidden="true">
    <Shader className="liquid-shader-canvas">
      <Swirl colorA="#c89968" colorB="#e8d5b7" speed={0.8} detail={0.8} blend={50} coarseX={40} coarseY={40} mediumX={40} mediumY={40} fineX={40} fineY={40}/>
      <ChromaFlow baseColor="#d4a574" upColor="#e8d5b7" downColor="#c89968" leftColor="#b08968" rightColor="#ddb892" intensity={0.9} radius={1.8} momentum={25} maskType="alpha" opacity={0.97}/>
    </Shader>
    <div className="liquid-shader-shade"/>
  </div>;
}
