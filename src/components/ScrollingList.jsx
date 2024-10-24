import React, { useEffect, useRef } from 'react';

const ScrollingList = ({ items }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    let scrollPosition = 0;

    const scrollList = () => {
      scrollPosition = (scrollPosition + 1) % list.scrollWidth;
      list.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scrollList, 3000); // Scroll every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="scrolling-list" ref={listRef}>
      {items.map((item, index) => (
        <div key={index} className="scrolling-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default ScrollingList;
