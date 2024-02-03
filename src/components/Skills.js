import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faJs, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
 {
    name: 'C/C++',
    des:"Greetings! 👋 I'm a C++ enthusiast with two years of hands-on experience. From laying the groundwork during my undergrad to thriving in the dynamic environment of TCS, my C++ journey has been quite the adventure. At TCS, I honed my skills in socket programming for a high-stakes MCX trading platform, mastering threading for optimal performance. Object-oriented programming and smart pointers became my go-to tools for crafting efficient and scalable solutions. With a strong foundation in the STL, I'm on a mission to elevate C++ development, one project at a time! 🚀👨‍💻 ",
    icon: '/My-Tech-Universe/icon_c++.svg' ,
    keySkills:'Socket Programming ,CMAKE,DSA,Threading,Smart Pointers, Object-Oriented Programming (OOP),STL (Standard Template Library)'
},
{
  name : '🚀 Automation Maestro with Python (TCS)',
  icon:faPython,
  des:"Leveraged Python at TCS for automation, deploying across multiple servers, generating crucial reports, and optimizing live streaming trading data from Apache Kafka. Implemented threading to cut report generation time from 5 days to 3 hours, ensuring indispensable reports for seamless trading operations.💡 Python Enthusiast (Undergraduate Studies):Explored diverse Python frameworks—PyTorch, TensorFlow, Pygame, Flask, Django, Pandas, Dash—during undergrad. Proficient in deep learning, game development, web applications, and data manipulation. Versatile skills span real-time data streaming, creating interactive dashboards, and handling a spectrum of Python projects.",
  keySkills:" Apache Kafka, Threading, Report Optimization, PyTorch, TensorFlow,   Real-Time Data Streaming ,Object-Oriented Programming (OOP),DSA"
},
{
  name:'JavaScript 🚀 Agile Learner: From ML Engineer to ReactJS Novice:',
  icon:faJs,
  keySkills:"Components, JSX, State, Props, Lifecycle Methods, Hooks , React Router, Context API, Redux, Virtual DOM, Responsive Design ,html,css,npm",
  des:"Embarking on my career as an ML engineer in a dynamic startup environment, adaptability became my forte. In the ever-evolving tech landscape, I swiftly grasped ReactJS basics within a tight two-month timeline. The startup's agility demanded quick learning, leading me to successfully integrate machine learning models using TensorFlow.js into React.js applications.Transitioning seamlessly from ML to ReactJS underscored my commitment to versatile skill acquisition. The startup culture not only nurtured my machine learning expertise but also pushed me to explore new territories. As I continue to evolve, this journey exemplifies my resilience and ability to swiftly master diverse technologies to meet the demands of an ever-changing startup landscape."

},
{
  name:'Java (Basics and Core Concepts)',
  icon:faJava,
  des:"Proficient in Java programming with a strong grasp of fundamental concepts gained during undergraduate studies. Well-versed in key aspects such as object-oriented programming, data structures, algorithms, and problem-solving. Eager to apply this foundational knowledge to real-world projects and continue expanding expertise in Java development.",
  keySkills:""
},
{
  name:'C# .NET Adventure 🚀',
  icon:'/My-Tech-Universe/icons-c-sharp.png',
  des:"🤝 Collaborated with an alpha client on C# code for broadcast packet flow, turning complex challenges into shared victories 🕹️ Crafted games in Unity using the magical language of C# during my undergraduate escapades, turning code into interactive experiences 🌟 Though a complete C# beginner, I embarked on a journey of endless possibilities, eager to bring my coding superpowers to life in real-world projects.Ready for the next level of C# adventures and looking forward to turning code into everyday magic! ✨",
  keySkills:""
},{
  name:'Coding Odyssey 🚀: Git Version Control and Debugging Delights 🕵️',
  icon:'/My-Tech-Universe/icons8-git-48.png',
  des:"In my coding journey, 🚀 Git has been my trusty companion, seamlessly woven into every development endeavor. With its version control prowess, I've efficiently managed code repositories, ensuring collaboration flows smoothly. Embracing the art of debugging, I've navigated the intricacies of tools like 🕵️ EDB, GDB, PDB, Cutter, and Ghidra, unraveling complexities and transforming obstacles into insights. Whether it's tracking code changes or delving into the depths of binary analysis, these tools have become indispensable allies, shaping my coding odyssey into a meticulous and insightful adventure. 🛠️",
  keySkills:""
}
  ]);

const SkillsList = ({ keySkills}) => {
  const skillsArray = keySkills.split(',').map(skill => skill.trim());
  return (
    <div className="skills-container">
      {skillsArray.map((skill, index) => (
        <div key={index} className="skill">
          {skill}
        </div>
      ))}
    </div>
  );
}
  return (
    
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
       🛠️ SKILLS 🛠️
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
      <p>Hello there! I'm a well-rounded programmer with a knack for diving into different languages, frameworks, and debugging tools. Think of me as a tech enthusiast who loves to explore and master various aspects of the programming world. Here's a quick peek into what I bring to the table</p>
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              {
              typeof value.icon === 'string' && value.icon.startsWith('/') ?
              <img src={value.icon} alt={value.name} />
                :
                <FontAwesomeIcon icon={value.icon} />
              }     
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
              <SkillsList keySkills={value.keySkills}/>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

