import Nav from "./components/Nav";
import backgroundVideo from './assets/images/background.mp4'
import { useRef, useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./components/Contact";
import Marquee from "./components/Marquee";
import Tech from "./components/Tech";


function App() {
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
        trigger: '.icreate',
        //start: 'top 80%',
        //end: 'bottom -10%',
        scrub: true,
        repeat: -1
      }
    });

    tl.fromTo('.icreate', { x: '150%' }, { x: '0%', ease: 'power3.out' },)
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

  const [working, setWorking] = useState(true)

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

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: .8
            }}
          >
            <source src={backgroundVideo} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>

          <div
            className="main"
          >
            {working ? (<div className="working">Working on it</div>) : null}
            <h1 className="title hi">
              Hi,
            </h1>

            <h1 className="title im">
              I'm Valentina
            </h1>
            <p className="description">Creative web developer and mathematics enthusiast</p>
          </div>

          <div className="about">
            <h2 className="icreate">I create solutions</h2>
            <p className="developing">developing successful digital experiences that exceed expectations</p>
          </div>
          <div className="skills">            <Marquee />
          </div>
          <div className="contact">
            <h2>Get in touch</h2>

            <Contact />
            <div className="social">
              <a href="https://www.linkedin.com/in/valentinaperaltavila/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width='18'>
                  <path fill="#FFFFFF" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a href="https://github.com/Valentina-Peralta" target="_blank">
              </a>
            </div>
          </div>
        </>)}

    </div>
  );
}

export default App;
   /*             <p>I firmly believe that knowledge is power and solving problems brings me joy</p>
*/