import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: '🚀 Tata Consultancy Services',
    images: '/My-Tech-Universe/project1.svg',
    des:"As a C++ and Python Software Developer at Tata Consultancy Services (November 2021 to November 2023), I elevated the MCX trading platforms with expertise in components like Order Book Interface, Market Data Distribution, and Kafka integration. Notably, I optimized the Enhanced Order Book Interface, resulting in a 1 million user increase. My contributions extended to engineering a low-latency Info Feed, seamless Git flow implementation, and a robust CI/CD pipeline, reducing deployment time by 40%. My Python-powered deployment symphony cut deployment time by 50% across 100 servers. Automation efforts included SLA report extraction (30% time reduction) and automated system checks (20% manual effort reduction). 🚀🌐"
  },
  {
    name: "Stock Prediction System Journey 📈: LSTM, APIs, and Transformative Advances 🚀",
    images: '/My-Tech-Universe/project2.svg',
    des: "Implemented LSTM Model:Developed a Stock Prediction System using Long Short-Term Memory (LSTM) model, leveraging its ability to capture and analyze sequential patterns in stock data for accurate predictions.Integration with Zerodha and Yahoo API:Utilized Zerodha API for real-time stock data and Yahoo API for historical data, ensuring a comprehensive dataset for robust model training.Transition to Transformer Model:Currently in the process of upgrading the prediction system by integrating a Transformer model, anticipating improved accuracy and enhanced performance.Stay tuned for exciting advancements in this dynamic stock prediction project! 📊✨"
  },
  {
    name: 'Air Interface Scribbling Pad ✨',
    images: '/My-Tech-Universe/project3.svg',
    des:"Unleashing Creativity with OpenCV 🌈 | Crafted an innovative Human-Computer Interaction project that transforms the air into a digital canvas. By capturing objects of a specific color, this project brings drawings to life on a virtual white pad using Python and OpenCV."
  }
 

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
       🌟 Life Experience 🌟
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
       <p>🌌 Passion to Mastery: My journey began with a love for physics, leading me to the vast world of computer science after 12th grade. 🚀 Startup ML Engineer: In a startup, I swiftly embraced the role of an ML engineer. In just two months, I learned React and deployed ML models using TensorFlow.js and scikit-learn. 🚀 Dynamic TCS Adventure: Mastering C++, threading, and automation, I thrived in a high-stakes MCX project. My unique automation approach showcased adaptability and creative problem-solving. 👨‍💻 Master's at UNG: Pursuing Cybersecurity, Reverse Engineering, and Machine Learning at the University of North Georgia. This journey promises continuous learning and growth. 🌟🔍 </p>       
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
                <div className="des">{value.des}</div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
