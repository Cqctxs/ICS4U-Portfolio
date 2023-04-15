import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[40px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"/>
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi! I am <span
                        className="text-[#915eff]">Sean</span></h1>

                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I am a student at William Lyon Mackenzie CI <br className="sm:block hidden"/> and I love <span
                        className="text-[#915eff]">astronomy, technology and the arts.</span>
                    </p>
                </div>
            </div>
            <ComputersCanvas/>
        </section>
    )
}

export default Hero