import Nav from "./components/Nav";
import backgroundVideo from './assets/images/background2.mp4'
import { useRef, useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./components/Contact";
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import DistortedSphere from "./components/DistortedSphere";
import Marquee from "./components/TechMarquee";
import TechMarquee from "./components/TechMarquee";


function App() {

  function download() {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'ValentinaPeraltaCV.pdf';
    link.click();
  }
  const videoRef = useRef(null);
  const videoElement = videoRef.current;
  console.log(videoElement)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: .7 },
    });

    tl
      .fromTo(
        '.hi',
        { x: '-200%' },
        {
          x: '0%',
          ease: 'back.out',
        }
      )
      .fromTo(
        '.im',
        { x: '300%' },
        {
          x: '0%',
          ease: 'back.out',
        }, '-=.7'
      )
      .fromTo('nav', { y: '-100%' }, { y: '0%', ease: 'bounce.out', })
      .fromTo('.description',
        { x: '-200%' },
        {
          x: '0%',
          ease: 'back.out'
        }, '-=1')
  }, [isLoading]);



  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.4 },

    });




    tl.fromTo('.i', { y: '1000%' }, { y: '0%', ease: 'bounce.out' })
      .to('.i', { opacity: 0, y: '100%', ease: 'power3.inOut', delay: 0.01, duration: 0.3 })
      .fromTo('.make', { y: '-1000%' }, { y: '0%', ease: 'bounce.out' })
      .to('.make', { opacity: 0, y: '100%', ease: 'power3.inOut', delay: 0.01, duration: 0.3 })
      .fromTo('.things', { x: '-1000%' }, { x: '0%', ease: 'bounce.out' })
      .to('.things', { opacity: 0, y: '100%', ease: 'power3.inOut', delay: 0.01, duration: 0.3 })
      .fromTo('.work', { x: '1000%' }, { x: '0%', ease: 'bounce.out' })


      ;



  }, []);



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about',
        start: 'top 35%',
        end: 'bottom 35%',
        scrub: true,
        repeat: 1
      },
      defaults: { duration: 1 }
    });

    tl.fromTo('.icreate', { x: '200%', opacity: '0' }, { x: '0', opacity: '1', ease: 'power3.out' },)
      .fromTo('.developing', { x: '-200%' }, { x: '0', ease: 'power3.out' }, '-=1')
      .fromTo('.distortSphere', { y: '0', x: '0' }, { y: '-10%', x: '40%', ease: 'power3.out' }, '-=1')

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 35%',
        end: 'bottom 35%',
        scrub: true,
        repeat: 1,
      },
      defaults: { duration: 2 }
    });

    tl2.to('.distortSphere', { y: '10%', x: '-40%', ease: 'power3.out' })


  }, [isLoading]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills',
        //        start: 'top 80%',
        //      end: 'bottom 0%',
        scrub: true,
        // repeat: -1
      },
    });

    tl.fromTo('.contact h2', { x: '2250%' }, { x: '0%', ease: 'power3.out' })
  }, [isLoading]);

  const [working, setWorking] = useState(false)

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">
          <h2 className="i">I</h2>
          <h2 className="make">make</h2>
          <h2 className="things">things</h2>
          <h2 className="work">work</h2>

        </div>)
        :
        (<>
          <Nav />
          <Canvas
            className="distortSphere"
            style={{
              position: 'fixed',
              left: '0%',
              width: '100%',
              height: '100vh',
              zIndex: 1,
              backgroundColor: 'transparent',
            }}
          >
            <OrbitControls
              enableZoom={false}
              autoRotate={true}
              rotateSpeed={4}
            />
            <ambientLight
              intensity={.8}
              color='#5FC5C0'

            />
            <directionalLight
              position={[4, 1, 20]}

            />
            <DistortedSphere
            />
          </Canvas>
          {/* <div className="sphere1">
            <Planet
              color='#8c97f5'
              radius='3'
              lightX='0'
              lightY='10'
              lightZ='10'
              lightIntensity='1'
              littleSphere
            />
          </div>
          <div className="sphere2">
            <Planet
              color='#FFFFFF'
              radius='2'
              lightX='-10'
              lightY='-10'
              lightZ='0'
              lightIntensity='0.1' />
          </div>
 */}


          <div className="main" >
            {working ? (<div className="working">Working on it</div>) : null}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                maxWidth: '1400px',
                height: '100%',
                objectFit: 'cover',
                opacity: .8,
              }}
            >
              <source src={backgroundVideo} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>

            <h1
              style={{
                zIndex: 50
              }}
              className="title hi">
              Hi,
            </h1>

            <h1

              className="title im">
              I'm Valentina
            </h1>

            <p className="description">Creative web developer and mathematics enthusiast</p>


          </div>

          <div className="about" id="about">

            <h2 className="icreate">I create solutions</h2>
            <p className="developing">developing successful digital experiences that exceed expectations</p>
          </div>
          <div className="skills">
            <TechMarquee />
          </div>
          <div className="contact" id="contact">
            <h2>Get in touch</h2>

            <Contact />
            <div className="social">
              <a className='pulse' href="https://www.linkedin.com/in/valentinaperaltavila/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width='18'>
                  <path fill="#FFFFFF" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a className='pulse' href="https://github.com/Valentina-Peralta" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="64px" height="64px" fillOpacity="1" fill="#FFFFFF" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                  <g transform="scale(4,4)">
                    <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path>
                  </g>
                </svg>
              </a>{/* 
              <a href="../public/CV.pdf" download="ValentinaPeraltaCV.pdf">

                <svg className="pulse"
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M9 15L12 18M12 18L15 15M12 18L12 12M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </a> */}
              <svg
                onClick={download}
                className="pulse"
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M9 15L12 18M12 18L15 15M12 18L12 12M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

            </div>
          </div>
        </>)
      }

    </div >
  );
}

export default App;
   /*             <p>I firmly believe that knowledge is power and solving problems brings me joy</p>
*/