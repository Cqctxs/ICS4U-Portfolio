import Tilt from 'react-parallax-tilt';

import {projects} from "../constants";
import {styles} from "../styles.js";
import {link} from "../assets/index.js";

const ProjectCard = ({name, description, tags, image, source_code_link,}) => {
    return (
        <div>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                    easing: "cubic-bezier(0.03, 0.98, 0.24, 0.98)",
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={link}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </div>
    );
};
const Projects = () => {
    return (
        <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <div>
                <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Here are some of
                    my</p>
                <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>Projects.</h2>
            </div>

            <div className='w-full flex'>
                <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                    These following projects are a showcase of my finest work. I had a lot of fun and learned a lot
                    creating these projects. I hope you find them interesting!
                </p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default Projects