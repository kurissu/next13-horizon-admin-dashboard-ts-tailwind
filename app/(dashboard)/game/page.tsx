"use client"
import Image from 'next/image'
// import Header  from '@/components/header'
// import { SessionProvider } from 'next-auth/react'
// import UserInfo from './user-info'
import { Unity, useUnityContext } from "react-unity-webgl";


export default function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./build/WebGL.loader.js",
    dataUrl: "./build/WebGL.data",
    frameworkUrl: "./build/WebGL.framework.js",
    codeUrl: "./build/WebGL.wasm",
  });

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Unity unityProvider={unityProvider} style={{ width: 440 , height: 600}}/>
    </main>

  )
}
