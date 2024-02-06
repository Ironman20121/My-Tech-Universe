import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                I AM <span> KUNDAN </span>
            </div>
            <div className="des">
            
            <p>Hello! 👋 I'm Saikundan Sudapalli, an enthusiastic Computer Science master's student with a robust background in C++ and Python development and two years of hands-on experience at TCS. Specialized in customizing trading platforms for the Multi Commodity Exchange client, I thrive in dynamic environments. My passion lies in Artificial Intelligence and Machine Learning, bringing practical skills in developing algorithms and models. Beyond that, I'm venturing into Quantum Computing, eager to apply my development skills, and exploring Cybersecurity to implement best practices in safeguarding digital assets. Let's connect and delve into the multifaceted world of technology together! 🌟 #TechEnthusiast #AI #ML #QuantumComputing #SoftwareDeveloper #CyberSecurity 🚀</p>
            </div>
            
            <a href="/My-Tech-Universe/resume.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
            Discover My Tech Resume 📄✨
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/My-Tech-Universe/avatar.jpg" alt="" />
                <div className="info">
                  <div>SAI KUNDAN SUDDAPALLI</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
