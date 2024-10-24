import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';

function Exp() {
const [listProjects] = useState([
 
  {
    name:"University of North Georgia",
    images:'/My-Tech-Universe/llm.jpg',
    des:"As a graduate research assistant, I am working with Dr. Yong Wei, my machine learning professor, where my work involves training LLMs for drug discovery using NanoGPT and CrystalLLM, which provide new crystal structures for unknown components. I also work under Dr. Tao for the Quantum Computing initiative, where I introduce the basics of quantum computing and the effective use of IBM's Qiskit and quantum computers to freshmen."

  },
  
  {
    name: '🚀 Tata Consultancy Services',
    images: '/My-Tech-Universe/project1.svg',
    des:"As a C++ and Python Software Developer at Tata Consultancy Services (November 2021 to November 2023), I elevated the MCX trading platforms with expertise in components like Order Book Interface, Market Data Distribution, and Kafka integration. Notably, I optimized the Enhanced Order Book Interface, resulting in a 1 million user increase. My contributions extended to engineering a low-latency Info Feed, seamless Git flow implementation, and a robust CI/CD pipeline, reducing deployment time by 40%. My Python-powered deployment symphony cut deployment time by 50% across 100 servers. Automation efforts included SLA report extraction (30% time reduction) and automated system checks (20% manual effort reduction). 🚀🌐"
  },

  {
    name :'River Bend Data Solutions',
    images:'/My-Tech-Universe/mlops.png',
    des:"I specialized in developing cutting-edge ML-based analytics for wearable devices during my 2 years and 7 months at River Bend Data Solutions. I contributed to the development of a medical chatbot assistant by creating advanced algorithms to process data from smartwatches. My expertise includes time series analysis for heart rate patterns, and I successfully transformed raw data into actionable insights through rigorous data preprocessing and feature engineering, improving model accuracy by 10%. Additionally, I gained experience integrating ML models into complex systems and contributed to frontend development using ReactJS to visualize key metrics."
  },
  {
    name:"Defence Research and Development Laboratory (DRDL) ",
    images:'/My-Tech-Universe/drdl.jpg',
    des:"As a Missile Study Intern, I collaborated with Scientist B to develop a machine learning model for predicting missile failures, focusing on identifying key factors that affect missile system reliability and performance. My role involved data collection and preprocessing using SQLite, where I cleaned and transformed extensive datasets related to missile performance and failure incidents. I identified crucial features impacting performance and engineered new features to enhance predictive power. I explored various machine learning algorithms in Python, particularly deep learning techniques with TensorFlow and Keras, and optimized models through hyperparameter tuning. I evaluated model performance using metrics like accuracy and F1-score, and performed cross-validation for robustness. Additionally, I analyzed results to identify significant failure factors and prepared reports to communicate findings to the scientific team. Technologies used included Python, Pandas, NumPy, TensorFlow, Keras, Jupyter Notebook, SQLite, and Git, leading to the development of a deep learning model that improved prediction accuracy and provided valuable insights for enhancing missile reliability."
  },
  {
    name:"Unisys",
    images:'/My-Tech-Universe/unisys.png',
    des:"As a Machine Learning Intern at Unisys from December 2017 to October 2018, I developed a machine learning model to predict flight delays using historical flight data in BCP file format, aiming to enhance operational efficiency and passenger satisfaction. My responsibilities included data collection and preprocessing with Pandas, where I addressed missing values and transformed categorical data. I identified key features influencing flight delays, such as flight schedules and weather conditions, and employed machine learning algorithms like Logistic Regression and Random Forest using Scikit-learn and TensorFlow, optimizing models through hyperparameter tuning. I evaluated model performance using accuracy, precision, recall, and F1-score metrics, and collaborated with a team to integrate the predictive model into Unisys's existing system. My work led to significant improvements in prediction accuracy, a reduction in unexpected delays, and commendations from senior management for the impact of the prediction tool."
  }
  // {
  //   name: "Stock Prediction System Journey 📈: LSTM, APIs, and Transformative Advances 🚀",
  //   images: '/My-Tech-Universe/project2.svg',
  //   des: "Implemented LSTM Model:Developed a Stock Prediction System using Long Short-Term Memory (LSTM) model, leveraging its ability to capture and analyze sequential patterns in stock data for accurate predictions.Integration with Zerodha and Yahoo API:Utilized Zerodha API for real-time stock data and Yahoo API for historical data, ensuring a comprehensive dataset for robust model training.Transition to Transformer Model:Currently in the process of upgrading the prediction system by integrating a Transformer model, anticipating improved accuracy and enhanced performance.Stay tuned for exciting advancements in this dynamic stock prediction project! 📊✨"
  // },
  // {
  //   name: 'Air Interface Scribbling Pad ✨',
  //   images: '/My-Tech-Universe/project3.svg',
  //   des:"Unleashing Creativity with OpenCV 🌈 | Crafted an innovative Human-Computer Interaction project that transforms the air into a digital canvas. By capturing objects of a specific color, this project brings drawings to life on a virtual white pad using Python and OpenCV."
  // }
  
 

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='xp' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
       🌟 Experience 🌟
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
                <div className="des" style={{ display: 'flex', justifyContent: 'center' }}>{value.des}</div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Exp
