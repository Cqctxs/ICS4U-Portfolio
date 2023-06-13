import React from 'react'
import {styles} from "../styles.js";
import Heading from "./Heading.jsx";
import {
    intro,
    level1_1,
    level1_2,
    level1_3,
    level2_1,
    level2_2,
    level2_3,
    level2_4,
    level3_1, level3_2, level3_3, level3_4,
    mainmenu
} from "../assets";

const Bibliography = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} max-w-5xl mx-auto flex flex-row items-start gap-5 pb-32`}>
                <div>
                    <p className={`${styles.sectionHeadText}`}>Finals Frenzy</p>
                    <p className={`${styles.sectionText}`}>Finals Frenzy is a single-player game targeted towards people
                        of ages 14 and 15 year olds who want help to make it through exams. Our goal is to help people
                        succeed in their exams and build good study habits to help them succeed in school.</p>
                    <Heading text={`Vision`}/>
                    <p className={`${styles.sectionText}`}>Our vision for Finals Frenzy was to create a game that all
                        teenagers could relate with. We wanted to create a game that would help anybody have less
                        stressful time during exam season. By teaching and testing the player through a series of level,
                        we tried to accomplish our vision.</p>
                    <Heading text={`Game Objective`}/>
                    <p className={`${styles.sectionText}`}>A survey in the United States has shown that on an average
                        day, 61% of teenagers feel stress from school. The source of this stress stems from many places,
                        but mainly <span className={`${styles.sectionBold}`}>family tensions and external pressure, time management stress and meeting deadlines, academic stress and exam pressure</span>.
                        Our game aims to remove two of these factors which are time management stress and exam pressure,
                        which we know we can solve.</p>
                    <p className={`${styles.sectionText}`}>The main objective of Finals Frenzy is for the player to
                        learn how to build good study habits and manage time efficiently to succeed during exam season.
                        By the end of the game, players should have built good study skills and time management, as well
                        as learned how to stay focused during exam season. We wanted to make a game that would help
                        everyone avoid stressful experiences such as cramming for exams or not meeting deadlines on
                        time.</p>
                    <Heading text={`Level Overview`}/>
                    <p className={`${styles.sectionBold}`}>Level 1:</p>
                    <p className={`${styles.sectionText}`}>In this level, the player will interact with the digital
                        character named "Pixel" who will teach them essential skills. The mouse is used to navigate
                        through the level. Clicking the buttons and clicking the slides will allow the player to
                        continue, and change the dialogue.</p>
                    <p className={`${styles.sectionBold}`}>Level 2:</p>
                    <p className={`${styles.sectionText}`}>In this level, the player will move through a maze, answering
                        questions to earn points. Arrow keys are used to navigate through the maze, and the mouse is
                        used to answer the questions. Once all questions are answered correctly, the player is allowed
                        to move on to level 3.</p>
                    <p className={`${styles.sectionBold}`}>Level 3:</p>
                    <p className={`${styles.sectionText}`}>In this level, the player will dodge a series of objects,
                        while collecting others. Once the player collects 20 study or work related objects, the player
                        will successfully beat the level. If the player loses all three lives, by touching distractions,
                        the the player will lose. Arrow keys are used to control the character to dodge and collect.</p>
                    <Heading text={`Gameplay Demo`}/>
                    <img src={`${intro}`} alt={"splash screen"} className={'mt-8'}/>
                    <img src={`${mainmenu}`} alt={"main menu"} className={'mt-8'}/>
                    <img src={`${level1_1}`} alt={"level 1"} className={'mt-8'}/>
                    <img src={`${level1_2}`} alt={"level 1"} className={'mt-8'}/>
                    <img src={`${level1_3}`} alt={"level 1"} className={'mt-8'}/>
                    <img src={`${level2_1}`} alt={"level 2"} className={'mt-8'}/>
                    <img src={`${level2_2}`} alt={"level 2"} className={'mt-8'}/>
                    <img src={`${level2_3}`} alt={"level 2"} className={'mt-8'}/>
                    <img src={`${level2_4}`} alt={"level 2"} className={'mt-8'}/>
                    <img src={`${level3_1}`} alt={"level 3"} className={'mt-8'}/>
                    <img src={`${level3_2}`} alt={"level 3"} className={'mt-8'}/>
                    <img src={`${level3_3}`} alt={"level 3"} className={'mt-8'}/>
                    <img src={`${level3_4}`} alt={"level 3"} className={'mt-8'}/>

                    <p className={`${styles.sectionText}`}></p>
                    <Heading text={`My Part In The Project`}/>
                    <p className={`${styles.sectionText}`}>For my part in the project, I mainly focused on creating the
                        art for the game, as well as making level 3. I created all of the art for the game, which
                        includes the sprites and the backgrounds. I also created level 3, along with the player movement
                        and key-press detection. I created both the Player class, which is responsible for just general
                        player movement, as well as the Player2 class, which is used solely in level 2. Furthermore, I
                        created the Obstacle and Falling Obstacle classes, which are responsible for being obstacles
                        which the player can interact with.</p>
                </div>
            </div>
        </section>
    )
}

export default Bibliography