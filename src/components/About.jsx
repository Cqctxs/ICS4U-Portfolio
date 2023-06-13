import Hero from "./Hero.jsx";
import Projects from "./Projects.jsx";
import {styles} from "../styles.js";

const About = () => {
    return (
        <div>
            <Hero/>
            <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <div>
                    <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>A little
                        more</p>
                    <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>About
                        Me.</h2>
                </div>
                <div className='w-full'>
                    <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                        I am relatively new to programming, coding on and off for about three years now. Over these
                        three years, I have experimented with many aspects of programming, from game development to
                        competitive programming. What makes me so excited to continue coding and keep going is the
                        limitless possibilities. I have the power and the freedom to create anything that I want with
                        the power of code.
                    </p>
                    <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                        I also love science and math, specifically astronomy and astrophysics. I find learning about the
                        inner engine of our universe and how it works mind-blowing and fills me with awe. I also enjoy
                        more artistic hobbies as well, which range from creating origami to playing the clarinet.
                    </p>
                </div>
            </div>
            <Projects/>
        </div>
    )
}

export default About