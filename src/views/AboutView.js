import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutView(props) {

    return(
        <div>
            <Hero title={props.subtitle} />

            
            <Content>


            <a href="https://www.linkedin.com/in/brian-jenkins-38111631/" rel="noreferrer">
                LinkedIn
            </a>
            <br/>
            <br/>

            <a href="https://github.com/bjenkins63" rel="noreferrer">
                GitHub
            </a>
            <br/>
            <br/>
                
I am a seasoned print designer, artist and photographer. 
After years as a print designer I attended the UNH Full Stack Web Development 
program and have rounded out my professional design, marketing and creative skills 
and can tackle all aspects of brand development, content delivery and marketing strategies. 
As a professional artist I bring a unique creative vision, and enjoy brainstorming many ways to approach a project.
<br/>
<br/>


Adobe Creative Suite professional. I have over 20 years of experience with InDesign, 
Photoshop and Illustrator. I have photography skills including photo shoot direction, 
photo manipulation and creative strategy for image preparation. Web technical skills include : 
HTML, CSS, Javascript, MySQL and Mongo database experience, React for web development. 
            </Content>

        </div>
    );

}

export default AboutView;