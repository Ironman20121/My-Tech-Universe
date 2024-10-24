import React, { useState, useRef } from 'react'; 
import CustomHook from './CustomHook';
import ScrollingList from './ScrollingList';
import './Edu.css'; // Make sure to create a CSS file for styling

function Edu() {
  const [listProjects] = useState([
    {
      name: 'University Of North Georgia',
      images: '/My-Tech-Universe/mccb.jpg',
      des: "I started my Master's program in Spring 2024, and I really enjoyed my semester learning advanced reverse engineering, deep learning, and business intelligence, achieving 100% in all my subjects, which I loved a lot. Because of this, I became eligible for a presidential fee waiver in the summer semester, which helped me with my tuition fees. In the summer, I took advanced computer security, where I learned about ethical hacking and all major operating systems (Windows, Linux, macOS). I also completed an advanced network security course, doing 10 network labs that helped me understand the core principles of firewalls and other network concepts. Additionally, I studied advanced computer forensics, focusing on digital forensics for specific systems and major operating systems like Windows, Linux, macOS, and Android, using tools like FTK Imager and Autopsy. In the fall, I am learning about operating systems, machine learning, and soft security, which teaches me how to write secure software through defensive programming—skills that are essential today. After this journey, I am looking to take my next step toward a PhD in computer science."
      }
  ]);

  const courseDetails = {
    Spring: [
      {
        title: "Deep Learning (Dr. Tamrat Abegaz)",
        description: "I gained expertise in Deep Neural Networks (DNN) using TensorFlow and PyTorch. I studied Large Language Models (LLM) and AI agents with LangChain. I completed a project on video deepfake detection and authored a paper titled 'LLM vs. DNNs,' which was accepted for presentation at the International Conference on Artificial Intelligence (ICAI)."
      },
      {
        title: "Advanced Reverse Engineering (Dr. Bryson Payne)",
        description: "I learned x64 and ARM64 assembly languages and analyzed binaries using Ghidra, Cutter, and debugging tools like GDB, EDB, and WinDbg. I conducted malware analysis, including a study on the Anubis banking trojan, and authored a related paper."
      },
      {
        title: "Business Intelligence (Dr. Denis)",
        description: "In this course, I learned the importance of using the right tools at the right time to understand business requirements. I gained insights into how analytics should be conducted to make data science more effective."
      }
    ],
    Summer: [
      {
        title: "Advanced Network Security (Dr. Ahmad Ghafarian)",
        description: "I completed advanced labs focusing on network security protocols and practices."
      },
      {
        title: "Advanced Computer Security (Dr. Bryson Payne)",
        description: "I studied ethical hacking techniques and practices, including OSINT, Kali Linux, and Metasploit for car hacking."
      },
      {
        title: "Advanced Computer Forensics (Dr. Ahmad Ghafarian)",
        description: "I conducted forensic investigations using FTK Imager and performed labs on Windows, macOS, Linux, and Android platforms. I also worked on my thesis titled 'A Comparative Analysis of Quantum Neural Networks on Imbalanced Datasets' under the guidance of Dr. Tamrat Abegaz."
      }
      ,
      {
        title:"Thesis :  A Comparative Analysis of Quantum Neural Nets on Imbalance Dataset",
        description:"A research thesis focused on comparing the performance of Quantum Neural Networks (QNNs) and Deep Neural Networks (DNNs) when applied to imbalanced datasets, a common challenge in fields such as medical diagnostics and fraud detection."

      }

    ],
    Fall: [
      {
        title: "Operating Systems (Dr. Park)",
        description: "I explored advanced topics related to operating systems."
      },
      {
        title: "Machine Learning (Dr. Young Wei)",
        description: "I studied advanced concepts in machine learning, including clustering, Graph Neural Networks, Recurrent Neural Networks (RNN), Long Short-Term Memory (LSTM), Transformers, LLMs, and Convolutional Neural Networks (CNN)."
      },
      {
        title: "Software Development Security (Dr. Ahmad Ghafarian)",
        description: "I focused on security practices in software development."
      }
    ]
  };

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='edu' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        🌟 Education 🌟
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {
        <p>
          After 10th grade, I was passionate about becoming a physicist, but after my 12th grade, I started pursuing a bachelor's degree in Computer Science. It was an unexpected turn, but I found it really interesting, which led me to shift my focus from physics and math to programming, hackathons, and coding competitions. Now, I am doing my master's at UNG, which has been the best part of my journey to date.
        </p>
        } {/* Render the description here */}
      </div>
      
      <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des" style={{ display: 'flex', justifyContent: 'center' }}>{value.des}</div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="scroll-container">
  <h3>Course Details by Semester</h3>
  <ScrollingList
    items={Object.keys(courseDetails).map((semester) => (
      <div key={semester}>
        <h4>{semester} 2024:</h4>
        <ul>
          {courseDetails[semester].map((course, index) => (
            <li key={index}>
              <strong>{course.title}</strong>
              <p>{course.description}</p>
            </li>
          ))}
        </ul>
      </div>
    ))}
  />
</div>

    </section>
  );
}

export default Edu;
