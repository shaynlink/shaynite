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
                        <div className={styles.projectScreen}>
                            <Image
                                src={booki}
                                alt="Home screen of booki website"
                            />
                        </div>
                        <div className={styles.projectDescription}>
                            <h3>Skills</h3>
                            <ul>
                                <li>Implement a responsive interface with HTML & CSS</li>
                                <li>Version project with Git and Github</li>
                                <li>Integrate content according to a model with HTML and CSS</li>
                                <li>Install a front-end development environment</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.project}>
                    <h2>Project: Create a real estate rental web application with React</h2>
                    <div className={styles.projectContainer}>
                        <div className={styles.projectScreen}>
                            <Image
                                src={kesa}
                                alt="Home screen of kesa website"
                            />
                        </div>
                        <div className={styles.projectDescription}>
                            <h3>Skills</h3>
                            <ul>
                                <li>Developing a web interface with Sass</li>
                                <li>Implement CSS Animations</li>
                                <li>Initialize an app with Create React App</li>
                                <li>Configure app page navigation with React Router</li>
                                <li>Develop website interface elements using React components</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.project}>
                    <h2>Project: Develop the back-end of a book rating site</h2>
                    <div className={styles.projectContainer}>
                        <div className={styles.projectScreen}>
                            <Image
                                src={monVieuxGrimoire}
                                alt="Home screen of mon vieux grimoire website"
                            />
                        </div>
                        <div className={styles.projectDescription}>
                            <h3>Skills</h3>
                            <ul>
                                <li>Implement a logical data model in accordance with regulations</li>
                                <li>Store data securely</li>
                                <li>Implement CRUD operations securely</li>
                            </ul>
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