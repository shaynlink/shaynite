import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Me from '@/components/Me';
import LoopText from '@/components/LoopText';
import styles from '@/styles/page.module.scss';

import shaynite from '@/public/shaynite.webp';

const SkillBar = dynamic(() => import('@/components/SkillBar'), { ssr: true });

function calculateAge(date: Date) {
  const diff = Date.now() - date.getTime();
  const age = new Date(diff);

  return Math.abs(age.getUTCFullYear() - 1970);
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroTitle}>
            <p>future</p>
            <h1>software</h1>
            <h1>engineer</h1>
          </div>
          <div className={styles.heroShortDescription}>
            <p>I am a future engineer.</p>
            <p>Actually living in bordeaux, france student to oc and ynov. I have many years of experiences in web development on self-taught.</p>
          </div>
        </div>

        <div className={styles.streamer}>
          <p>open for alternation ({calculateAge(new Date(2003, 6, 23))} yo)</p>
        </div>
      </div>

      <div className={styles.partTwoContainer}>
        <div className={styles.heroPresentation}>
          <div className={styles.meDescription}>
            <h1>i am know as shaynlink
              <span className={styles.namePronounceSize}>
                (<span className={styles.namePronounceColor}>ʃelɛ̃k</span>)
              </span>
            </h1>

            <p>My name is Rayane Guemmoud i am a french student</p>
            <p>Coding since +6 years on side and open-source project</p>
            <p>I love create thing, website, or functional system of responding to general or personnel everyday problem.</p>
          </div>

          <div>
            <div>
              <Me />
            </div>
          </div>
        </div>

        <div className={styles.someInformationLoop}>
          <LoopText text="some informations" repeat={5} />
        </div>

        <div className={styles.essentialHardSkills}>
          <h1>Essential hard skills</h1>
          <SkillBar text="NodeJS" percent={99} />
          <SkillBar text="ReactJs" percent={95} />
          <SkillBar text="MongoDB" percent={85} />
          <SkillBar text="Conception Front / Back" percent={85} />
          <SkillBar text="UI / UX" percent={78} />
        </div>
      </div>

      <div className={styles.partThreeContainer}>
        <div className={styles.largeCard}>
          <div className={styles.largeCardHeader}>
            <div className={styles.largeCardSvgCircle}>
              <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8334 54.1666C9.34377 54.1666 8.06815 53.6358 7.00648 52.5741C5.94482 51.5124 5.41489 50.2377 5.41669 48.7499V16.2499C5.41669 14.7603 5.94752 13.4847 7.00919 12.423C8.07086 11.3614 9.34558 10.8315 10.8334 10.8333H54.1667C55.6562 10.8333 56.9319 11.3641 57.9935 12.4258C59.0552 13.4874 59.5851 14.7621 59.5833 16.2499V48.7499C59.5833 50.2395 59.0525 51.5151 57.9908 52.5768C56.9292 53.6385 55.6544 54.1684 54.1667 54.1666H10.8334ZM10.8334 48.7499H39.2708V39.2708H10.8334V48.7499ZM44.6875 48.7499H54.1667V24.3749H44.6875V48.7499ZM10.8334 33.8541H39.2708V24.3749H10.8334V33.8541Z" fill="white"/>
              </svg>
            </div>

            <h1>Front End</h1>
          </div>

          <p>I create Single page or complexe website</p>

          <h2>Languages used</h2>

          <p>html, css, scss, javascript, reactJS, nextJS</p>
        
          <h2>Tools</h2>
        
          <ul>
            <li>Visual Studio code</li>
            <li>Docker</li>
            <li>Figma</li>
            <li>Vercel</li>
            <li>GitHub</li>
            <li>Sentry</li>
          </ul>
        </div>

        <div className={styles.largeCard}>
          <div className={styles.largeCardHeader}>
            <div className={styles.largeCardSvgCircle}>
              <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M58.2524 9.44531L55.561 6.75391C55.4595 6.65234 55.3325 6.60791 55.1992 6.60791C55.0659 6.60791 54.939 6.65869 54.8374 6.75391L50.0068 11.5845C47.9069 10.1617 45.4277 9.40308 42.8911 9.40723C39.6411 9.40723 36.3911 10.645 33.9092 13.127L27.4409 19.5952C27.3464 19.6907 27.2934 19.8195 27.2934 19.9539C27.2934 20.0882 27.3464 20.2171 27.4409 20.3125L44.6875 37.5591C44.7891 37.6606 44.916 37.7051 45.0493 37.7051C45.1763 37.7051 45.3096 37.6543 45.4111 37.5591L51.8794 31.0908C56.2529 26.7109 56.7671 19.938 53.4219 14.9995L58.2524 10.1689C58.4492 9.96582 58.4492 9.64209 58.2524 9.44531ZM36.7466 34.7026C36.6511 34.6081 36.5223 34.5551 36.3879 34.5551C36.2536 34.5551 36.1247 34.6081 36.0293 34.7026L31.8018 38.9302L26.0698 33.1982L30.3037 28.9644C30.5005 28.7676 30.5005 28.4438 30.3037 28.2471L27.9932 25.9365C27.8977 25.842 27.7688 25.789 27.6345 25.789C27.5002 25.789 27.3713 25.842 27.2759 25.9365L23.042 30.1704L20.3125 27.4409C20.2651 27.3935 20.2086 27.3561 20.1465 27.331C20.0843 27.3059 20.0177 27.2937 19.9507 27.2949C19.8237 27.2949 19.6904 27.3457 19.5889 27.4409L13.127 33.9092C8.75342 38.2827 8.23926 45.062 11.5845 50.0005L6.7539 54.8311C6.6594 54.9265 6.60638 55.0554 6.60638 55.1897C6.60638 55.324 6.6594 55.4529 6.7539 55.5483L9.44531 58.2397C9.54687 58.3413 9.67383 58.3857 9.80713 58.3857C9.94043 58.3857 10.0674 58.335 10.1689 58.2397L14.9995 53.4092C17.1387 54.8628 19.627 55.5864 22.1152 55.5864C25.3652 55.5864 28.6152 54.3486 31.0972 51.8667L37.5654 45.3984C37.7622 45.2017 37.7622 44.8779 37.5654 44.6812L34.8359 41.9517L39.0698 37.7178C39.2666 37.521 39.2666 37.1973 39.0698 37.0005L36.7466 34.7026Z" fill="white"/>
              </svg>
            </div>

            <h1>Back End</h1>
          </div>

          <p>I create API, micro-service, API state-less of anything</p>

          <h2>Languages used</h2>

          <p>nodeJS, js / ts, golang, mongoDB, postgreSQL</p>
        
          <h2>Tools</h2>
        
          <ul>
            <li>Visual Studio code</li>
            <li>Docker</li>
            <li>GitHub</li>
            <li>CI / CD</li>
            <li>Sentry</li>
          </ul>
        </div>

        <div className={styles.largeCard}>
          <div className={styles.largeCardHeader}>
            <div className={styles.largeCardSvgCircle}>
              <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8333 2.70825H54.1667C54.885 2.70825 55.5738 2.99359 56.0817 3.5015C56.5897 4.00942 56.875 4.69829 56.875 5.41659V16.2499C56.875 16.9682 56.5897 17.6571 56.0817 18.165C55.5738 18.6729 54.885 18.9583 54.1667 18.9583H10.8333C10.115 18.9583 9.42616 18.6729 8.91825 18.165C8.41034 17.6571 8.125 16.9682 8.125 16.2499V5.41659C8.125 4.69829 8.41034 4.00942 8.91825 3.5015C9.42616 2.99359 10.115 2.70825 10.8333 2.70825ZM10.8333 24.3749H54.1667C54.885 24.3749 55.5738 24.6603 56.0817 25.1682C56.5897 25.6761 56.875 26.365 56.875 27.0833V37.9166C56.875 38.6349 56.5897 39.3238 56.0817 39.8317C55.5738 40.3396 54.885 40.6249 54.1667 40.6249H10.8333C10.115 40.6249 9.42616 40.3396 8.91825 39.8317C8.41034 39.3238 8.125 38.6349 8.125 37.9166V27.0833C8.125 26.365 8.41034 25.6761 8.91825 25.1682C9.42616 24.6603 10.115 24.3749 10.8333 24.3749ZM10.8333 46.0416H54.1667C54.885 46.0416 55.5738 46.327 56.0817 46.8349C56.5897 47.3428 56.875 48.0317 56.875 48.7499V59.5833C56.875 60.3016 56.5897 60.9905 56.0817 61.4984C55.5738 62.0063 54.885 62.2916 54.1667 62.2916H10.8333C10.115 62.2916 9.42616 62.0063 8.91825 61.4984C8.41034 60.9905 8.125 60.3016 8.125 59.5833V48.7499C8.125 48.0317 8.41034 47.3428 8.91825 46.8349C9.42616 46.327 10.115 46.0416 10.8333 46.0416ZM24.375 13.5416H27.0833V8.12492H24.375V13.5416ZM24.375 35.2083H27.0833V29.7916H24.375V35.2083ZM24.375 56.875H27.0833V51.4583H24.375V56.875ZM13.5417 8.12492V13.5416H18.9583V8.12492H13.5417ZM13.5417 29.7916V35.2083H18.9583V29.7916H13.5417ZM13.5417 51.4583V56.875H18.9583V51.4583H13.5417Z" fill="white"/>
              </svg>
            </div>

            <h1>Infrastructure</h1>
          </div>

          <p>I can setup CI / CD, deploy and monitor an application</p>
        
          <h2>Tools</h2>
        
          <ul>
            <li>Docker</li>
            <li>Google Cloud Platform</li>
            <li>CI / CD</li>
            <li>Mongo Atlas</li>
            <li>VPS</li>
          </ul>
        </div>
      </div>

      <div className={styles.partFourContainer}>
        <div className={styles.shayniteScreen}>
          <Image src={shaynite} alt="Home screen of my website" />
        </div>
        <div className={styles.shayniteDescription}>
          <p>I developed my website with NextJS and Scss, inspired from some portfolio websitesn dribbble and awwwards websites.</p>
          <p>Used an API for forward Github API from website and manage cache.</p>
          <p>Mockup realized on Figma.</p>
        </div>
      </div>

      <div className={styles.partFiveContainer}>
        <div className={styles.table}>
          <div>
            <Link href="https://technoveille.vercel.app/">shaynlink&apos;s technoveille</Link>
          </div>
          <div>
            <Link href="https://www.institut-coiffure.fr/">institut coiffure</Link>
          </div>
          <div>
            <Link href="https://shaynite.vercel.app/">shaynite</Link>
          </div>
          <div>
            <Link href="https://shaynsadventblog.blogspot.com/">shaynlink&apos;s adventure blog</Link>
          </div>
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
