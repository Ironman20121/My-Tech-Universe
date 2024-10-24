// components/Publications.js
import React from 'react';
import './Publications.css'; // Optional: Import a CSS file for styling
import CustomHook from './CustomHook';
import { useRef, useState } from 'react' 

const MyThesis = () => {

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <div className="MyThesis"  ref={scrollTab}>
      <h1>📚🔍 MyThesis 📚🔍</h1>

      <section className="publication">
        <h2>A Comparative Analysis of Quantum Neural Nets on Imbalance Dataset</h2>
        <h3>Overview</h3>
        <p>
          A research thesis focused on comparing the performance of Quantum Neural Networks (QNNs) and Deep Neural Networks (DNNs) when applied to imbalanced datasets, a common challenge in fields such as medical diagnostics and fraud detection.
        </p>

        <h3>Motivation</h3>
        <p>
          Solving problems related to imbalanced data in machine learning is crucial, as it affects the performance of models in real-world applications. Quantum computing could potentially offer innovative solutions to these challenges, making it an exciting area of research.
        </p>

        <h3>Methodology</h3>
        <p>
          My approach involved using tools like Qiskit, PyTorch, and hybrid quantum-classical models. I gained hands-on experience with quantum computing frameworks while working with datasets such as Kaggle's Multi-Class Fruit Dataset and SMS Spam Classification, showcasing practical data science applications.
        </p>

        <h3>Key Findings</h3>
        <p>
          The findings indicate that DNNs still outperform QNNs in both text and image classification in terms of accuracy and computational efficiency. Current limitations of quantum hardware were noted, but the potential of QNNs in future developments with more advanced quantum systems is promising.
        </p>

        <h3>Skills and Tools</h3>
        <p>
          Key skills acquired during this research include quantum computing, machine learning, data preprocessing, such as qiskit and TensorFlow Quantum. 
          <a href="https://github.com/Ironman20121/Quantum-on-imbalanced-data-" target="_blank" rel="noopener noreferrer"> View my GitHub repository</a> for the full implementation of my experiments, showcasing my coding expertise.
        </p>

        <h3>Future Directions</h3>
        <p>
          I am interested in exploring hybrid quantum-classical approaches and further refining quantum data encoding techniques to improve QNN performance in the future.
        </p>

        <a href="/My-Tech-Universe/thesis.pdf" target="_blank" rel="noopener noreferrer">Download Thesis</a>
      </section>

      {/* Add other publications here, e.g., short paper and research poster */}
    </div>
  );
};

export default MyThesis;
