import React, { useEffect, useState } from 'react'
import '../Stylesheets/projects.css'
import space from '../assets/images/space.jpeg'
import todo from '../assets/images/todo.jpeg'
import audn from '../assets/images/audn.jpeg'
function projects() {

    const [project, setproject] = useState('space')
    const [hover, setHover] = useState(false)
    useEffect(() => console.log(project, hover), [project, hover])

    return (
        <div
            className="projects" id='projects'
        >
            <h2>Projects</h2>
            <div className="project-wrapper"
                onClick={() => {
                    setHover(false)

                }}
            >
                <h3
                    id={project === 'space' ? 'active' : null}
                    onMouseEnter={() => {
                        setproject('space')
                        setHover(false)

                    }}

                >Space tourism</h3>
                <h3
                    id={project === 'todo' ? 'active' : null}
                    onMouseEnter={() => {
                        setproject('todo')
                        setHover(false)
                    }}

                >Todo list</h3>
                <h3
                    id={project === 'audn' ? 'active' : null}
                    onMouseEnter={() => {
                        setproject('audn')
                        setHover(false)
                    }}
                >Audn</h3>

            </div>
            <div

                onMouseEnter={() => setHover(true)}
                className="project-img">
                {project === 'space' ? <img src={space} alt='space tourism' /> : project === 'todo' ? <img src={todo} alt='todo' /> : project === 'audn' ? <img src={audn} alt='audn' /> : null}
            </div>
            {hover && project !== '' ? <div className="project-img blur">
                <div className="icons">
                    <a href={project === 'space' ? 'https://github.com/Valentina-Peralta/Space-tourism.git' : project === 'todo' ? 'https://github.com/Valentina-Peralta/Todo-list.git' : project === 'audn' ? 'https://github.com/Valentina-Peralta/proyecto-final-senpai.git' : null} target='_blank'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="64px" height="64px" fillOpacity="1" fill="#FFFFFF" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                            <g transform="scale(4,4)">
                                <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path>
                            </g>
                        </svg>
                    </a>
                    <a href={project === 'space' ? 'https://vperaltaspacetourism.netlify.app/' : project === 'todo' ? 'https://todolistvperalta.netlify.app/' : project === 'audn' ? 'https://proyecto-final-senpai.vercel.app/' : null} target='_blank'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.982 19.61c.454-.7.909-1.6 1.236-2.755.755.29 1.273.636 1.591.909a8.182 8.182 0 0 1-2.864 1.845h.037v.001zm-8.8-1.855c.336-.273.845-.61 1.6-.91.336 1.164.773 2.064 1.236 2.764A8.2 8.2 0 0 1 6.2 17.755h-.018zm10.636-6.664c-.028-.81-.11-1.619-.245-2.418 1-.364 1.727-.8 2.236-1.2a8.136 8.136 0 0 1 1.282 3.618h-3.273zm-8.973-4.2a5.936 5.936 0 0 1-1.481-.8 8.2 8.2 0 0 1 2.654-1.7c-.427.636-.845 1.454-1.182 2.5h.01-.001zm7.137-2.5a8.145 8.145 0 0 1 2.654 1.7 6.01 6.01 0 0 1-1.481.8 9.58 9.58 0 0 0-1.182-2.5h.009zM14.8 9.118c.09.6.182 1.246.2 1.973H9c.027-.727.09-1.382.182-1.973 1.855.334 3.754.334 5.609 0h.009zM12 7.545c-.91 0-1.71-.072-2.39-.181.726-2.237 1.854-3.137 2.39-3.455.518.318 1.655 1.227 2.382 3.455A15.04 15.04 0 0 1 12 7.545zm-6.818-.072a8.03 8.03 0 0 0 2.245 1.2 18.368 18.368 0 0 0-.245 2.418h-3.31a8.13 8.13 0 0 1 1.319-3.618h-.01.001zm-1.3 5.436h3.3c.036.782.09 1.5.2 2.155a7.682 7.682 0 0 0-2.31 1.272 8.11 8.11 0 0 1-1.2-3.427h.01zM12 14.364c-1.09 0-2.027.09-2.845.236A16.91 16.91 0 0 1 9 12.91h6c-.027.608-.073 1.18-.145 1.69A15.388 15.388 0 0 0 12 14.355v.009zm0 5.727c-.545-.327-1.745-1.3-2.473-3.727A14.095 14.095 0 0 1 12 16.182c.955 0 1.773.063 2.482.182-.727 2.454-1.927 3.4-2.473 3.727H12zm6.927-3.764a7.634 7.634 0 0 0-2.309-1.272 17.95 17.95 0 0 0 .2-2.146h3.31a8.11 8.11 0 0 1-1.2 3.418h-.001zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#ffffff"></path></g></svg>
                    </a>
                </div>
            </div>
                : null
            }

            <div
                onClick={() => {
                    setHover(false)

                }}

                className="description">{project === 'space' ? <p>Solution of the Space tourism website challenge from Frontend Mentor.
                    Built with React and improved using Three.js
                </p> : project === 'todo' ? <p>Solution of the Todo app challenge from Frontend Mentor.
                    Built with React.
                </p> : project === 'audn' ? <p>Final project of the Full Stack Web Developer bootcamp. Built with React and Node.</p> : null}</div>
        </div >

    )
}

export default projects
{/*  <p>Solution of the Space tourism website challenge in Frontend Mentor.
        Built with React and improved using Three.js
    </p> */}