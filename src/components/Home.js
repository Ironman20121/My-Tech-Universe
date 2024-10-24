import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                I AM <span> KUNDAN  </span>
            </div>
            <div className="des">
            
            <p>Everything we study is built upon the lifelong work of individuals who have changed the course of history. One day, I aspire to contribute knowledge that gives my life meaning through research and teaching.</p>
            <p>My research interests include Large Language Models (LLMs), Computer Vision, Machine Learning, Quantum Computing, Human-Computer Interaction, Operating Systems, and Software Threat Analysis</p>
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
