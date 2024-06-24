"use client"
import Image from 'next/image'
import { Fragment, Suspense, useEffect, useState } from 'react';
// import Header  from '@/components/header'
// import { SessionProvider } from 'next-auth/react'
// import UserInfo from './user-info'
import { Unity, useUnityContext } from "react-unity-webgl";



export default function Home() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "build/WebGL.loader.js",
    dataUrl: "build/WebGL.data",
    frameworkUrl: "build/WebGL.framework.js",
    codeUrl: "build/WebGL.wasm",
  });

  // We'll use a state to store the device pixel ratio.
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  useEffect(
    function () {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );


  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Suspense fallback={<Loading />}> */}
        {/* <Unity unityProvider={unityProvider} style={{ width: 340 , height: 600}}/> */}
        <Fragment>
      {!isLoaded && (
        <p>Loading BOBACHA... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        devicePixelRatio={devicePixelRatio}
        style={{width: 340 , height: 600, visibility: isLoaded ? "visible" : "hidden" } }
      />
    </Fragment>

      {/* </Suspense> */}
    </main>

  )
}
