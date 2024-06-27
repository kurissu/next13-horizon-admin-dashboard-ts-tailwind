"use client"
import Link from 'next/link';
import { Unity, useUnityContext } from "react-unity-webgl";



export default function Home() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "./build/WebGL.loader.js",
    dataUrl: "./build/WebGL.data",
    frameworkUrl: "./build/WebGL.framework.js",
    codeUrl: "./build/WebGL.wasm",
  });

  return (

    <main className="mt-3 flex min-h-screen flex-col items-center p-24">

      {!isLoaded && (
        <p>Loading BOBACHA... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{width: 340 , height: 600, visibility: isLoaded ? "visible" : "hidden" } }
      />
      <Link className='mt-3 underline underline-offset-2' href="/privacy-policy">Privacy Policy</Link>
    </main>

  )
}
