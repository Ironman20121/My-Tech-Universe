import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

function Contacts() {
  const [listContacts] = useState([
    {
      title: '🏠 Home',
      value: '55302-D , 3 Bellamy Place Dahlonega, GA 30533',
    },
    {
      title: '☎️ Phone',
      value: '(706)300-2779',
    },
    {
      title: '✉️ Email',
      value: 'kundan16@hotmail.com',
    },
    {
      title: '🌐 LinkedIn',
      value: 'www.linkedin.com/in/saikundan',
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const openGoogleMaps = (address) => {
    window.open(`https://www.google.com/maps?q=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <section className='contacts' ref={scrollTab}>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
      🤝 Get in Touch
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        <p style={{ display: 'flex', justifyContent: 'center' }}>Let's connect! Whether you prefer the cozy feel of 🏠 home, a friendly ☎️ call, a quick ✉️ email, or a professional touch on 🌐 LinkedIn</p>
      </div>
      <div className='list' ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className='item' key={key}>
            <h3>{value.title}</h3>
            {value.title === '✉️ Email' ? (
              <div>
                <a href={`mailto:${value.value}`}>{value.value}</a>
              </div>
            ) : value.title === '🏠 Home' ? (
              <div>
                <a href='#' onClick={() => openGoogleMaps(value.value)}>
                  {value.value}
                </a>
              </div>
            ) : value.title === '☎️ Phone' ? (
              <div>
                <a href={`tel:${value.value}`}>{value.value}</a>
              </div>
            ) : value.title === '🌐 LinkedIn' ? (
              <div>
                <a href={`https://${value.value}`} target='_blank' rel='noopener noreferrer'>
                  {value.value}
                </a>
              </div>
            ) : (
              <div>{value.value}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
