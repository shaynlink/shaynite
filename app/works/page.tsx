import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/works.module.scss';

// active websites
import shaynlinksTechnoveille from '@/public/shaynlinks_technoveille.webp';
import institutCoiffure from '@/public/institut_coiffure.webp';
import shaynite from '@/public/shaynite.webp';
import shaynlinksAdventureBlog from '@/public/shaynlinks_adventure_blog.webp';
// studies projects
import booki from '@/public/booki.webp';
import kesa from '@/public/kesa.webp';
import monVieuxGrimoire from '@/public/mon_vieux_grimoire.webp'
// pinned projects
import tychecker from '@/public/tychecker.webp';
import welcomeTwitch from '@/public/welcome_twitch.webp';
import ongaku from '@/public/ongaku.webp';
import asciiGenerator from '@/public/ascii_generator.webp';
import gentoken from '@/public/gentoken.webp';

export default function Work() {
    return (
        <main className={styles.main}>
            <h1>My Active Websites</h1>

            <div className={styles.activeWebsites}>
                <div>
                    <h2>shaynlink&apos;s technoveille</h2>
                    <Link href="https://technoveille.vercel.app/">
                        <Image
                            src={shaynlinksTechnoveille}
                            alt="Home screen of shaynlink's technoveille website"
                        />
                    </Link>
                </div>
                <div>
                    <h2>L&apos;Institut Coiffure</h2>
                    <Link href="https://www.institut-coiffure.fr/">
                        <Image
                            src={institutCoiffure}
                            alt="Home screen of L'Institut Coiffure website"
                        />
                    </Link>
                </div>
                <div>
                    <h2>shaynite</h2>
                    <Link href="https://shaynite.vercel.app/">
                        <Image
                            src={shaynite}
                            alt="Home screen of shaynite website"
                        />
                    </Link>
                </div>
                <div>
                    <h2>shaynlink&apos;s adventure blog</h2>
                    <Link href="https://shaynsadventblog.blogspot.com/">
                        <Image
                            src={shaynlinksAdventureBlog}
                            alt="Home screen of shaynlink's adventure blog website"
                        />
                    </Link>
                </div>
            </div>

            <h1>Studies Projects</h1>

            <div className={styles.studiesProjects}>
                <div className={styles.project}>
                    <h2>Project: Create home travel agency web page with HTML & CSS</h2>
                    <div className={styles.projectContainer}>
                        <div className={styles.projectDescription}>
                            <p>For this project, I had to correct an existing page in HTML and CSS so that the final rendering was similar to the design</p>
                            <h3>Difficulty encounter</h3>
                            <p>Being able to faithfully reproduce the proposed design and introduce responsiveness</p>
                            <h3>Skills owned</h3>
                            <ul>
                                <li>Implement a responsive interface with HTML & CSS</li>
                                <li>Version project with Git and Github</li>
                                <li>Integrate content according to a model with HTML and CSS</li>
                                <li>Install a front-end development environment</li>
                            </ul>
                        </div>
                        <div className={styles.projectScreen}>
                            <Image
                                src={booki}
                                alt="Home screen of booki website"
                            />
                            <div className={styles.projectActions}>
                                <button className={styles.button}>
                                    <Link href="https://github.com/shaynlink/booki-starter-code" target="_blank">Github</Link>
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <linearGradient id="TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1" x1="16.33" x2="32.293" y1="-2.748" y2="41.109" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1)" d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"></path><path fill="#35c1f1" d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"></path><path fill="#fff" d="M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0,0L33.1,13z"></path><path fill="#d6e0e9" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4	L19.8,27z"></path><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M34.164,12H33.1H24h-9.2h-1.078l0.081,1.075l0.3,4L14.172,18H15.1H24h3.822l-0.15,2H24h-4.6h-1.051 l0.052,1.05l0.2,4L18.649,26H15.8h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6 l0.644-0.212l0.041-0.677l0.7-11.5l0.5-7.998L34.164,12L34.164,12z M20.761,26H24h3.331l-0.185,2.769L24,29.843l-3.128-1.068 l-0.073-1.815L20.761,26L20.761,26z" opacity=".05"></path><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M33.632,12.5H33.1H24h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463H15.1H24h4.361l-0.225,3H24h-4.6h-0.526 l0.026,0.525l0.2,4l0.024,0.475H19.6H24h3.866l-0.242,3.634L24,30.372l-3.614-1.234L20.3,26.98L20.28,26.5H19.8h-4h-0.528 l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6L24,35.626l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.5-7.999 L33.632,12.5L33.632,12.5z" opacity=".07"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.project}>
                    <h2>Project: Create a real estate rental web application with React</h2>
                    <div className={styles.projectContainer}>
                        <div className={styles.projectDescription}>
                            <p>For this project, I had to create a react application from scratch and manipulate data from an API</p>
                            <h3>Difficulty encounter</h3>
                            <p>Set up data so as not to repeat code and queries with notions of caching</p>
                            <h3>Skills owned</h3>
                            <ul>
                                <li>Developing a web interface with Sass</li>
                                <li>Implement CSS Animations</li>
                                <li>Initialize an app with Create React App</li>
                                <li>Configure app page navigation with React Router</li>
                                <li>Develop website interface elements using React components</li>
                            </ul>
                        </div>
                        <div className={styles.projectScreen}>
                            <Image
                                src={kesa}
                                alt="Home screen of kesa website"
                            />
                            <div className={styles.projectActions}>
                                <button className={styles.button}>
                                    <Link href="https://github.com/shaynlink/projet6-openclassrooms" target="_blank">Github</Link>
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
                                    <path fill="#4e7ab5" d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"></path><path fill="#4e7ab5" d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"></path><path fill="#4e7ab5" d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"></path><path fill="#8bb7f0" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4e7ab5" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><path fill="#8bb7f0" d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"></path><path fill="#8bb7f0" d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"></path><g><path fill="#8bb7f0" d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"></path></g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.project}>
                    <h2>Project: Develop the back-end of a book rating site</h2>
                    <div className={styles.projectContainer}>
                        <div className={styles.projectDescription}>
                            <p>For this project, I had to create a Back-End with NodeJS to manipulate data with MongoDB</p>
                            <h3>Difficulty encounter</h3>
                            <p>use ODM with mongoose to manage data with mongoDB</p>
                            <p>setup complexe middleware with multer for manipulate image</p>
                            <h3>Skills owned</h3>
                            <ul>
                                <li>Implement a logical data model in accordance with regulations</li>
                                <li>Store data securely</li>
                                <li>Implement CRUD operations securely</li>
                            </ul>
                        </div>
                        <div className={styles.projectScreen}>
                            <Image
                                src={monVieuxGrimoire}
                                alt="Home screen of mon vieux grimoire website"
                            />
                            <div className={styles.projectActions}>
                                <button className={styles.button}>
                                    <Link href="https://github.com/shaynlink/P7-Dev-Web-livres" target="_blank">Github</Link>
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1>My pinned projects</h1>

            <div className={styles.pinnedProjects}>
                <div className={styles.pinnedProject}>
                    <Link href="https://github.com/shaynlink/tychecker">
                        <Image src={tychecker} alt="Github thumbnail of tychecker project" />
                    </Link>
                </div>
                <div className={styles.pinnedProject}>
                    <Link href="https://github.com/shaynlink/welcome-twitch">
                        <Image src={welcomeTwitch} alt="Github thumbnail of welcome-twitch project" />
                    </Link>
                </div>
                <div className={styles.pinnedProject}>
                    <Link href="https://github.com/shaynlink/ongaku">
                        <Image src={ongaku} alt="Github thumbnail of ongaku project" />
                    </Link>
                </div>
                <div className={styles.pinnedProject}>
                    <Link href="https://github.com/shaynlink/ascii-generator">
                        <Image src={asciiGenerator} alt="Github thumbnail of ascii-generator project" />
                    </Link>
                </div>
                <div className={styles.pinnedProject}>
                    <Link href="https://github.com/shaynlink/gentoken">
                        <Image src={gentoken} alt="Github thumbnail of gentoken project" />
                    </Link>
                </div>
            </div>

            <footer className={styles.footer}>
                <ul>
                    <li><Link href="https://github.com/shaynlink">github</Link></li>
                    <li><Link href="https://www.linkedin.com/in/rayane-guemmoud">linkedin</Link></li>
                    <li><Link href="https://shaynsadventblog.blogspot.com/">blog</Link></li>
                    <li><Link href="https://wakatime.com/@shaynlink">wakatime</Link></li>
                </ul>

                <p>no right reserved and open source</p>
            </footer>
        </main>
    )
}