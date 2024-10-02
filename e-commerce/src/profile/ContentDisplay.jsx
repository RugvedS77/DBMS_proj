import React from 'react';

const ContentDisplay = ({ activeSection, contentMap }) => {
  return (
    <section id="content" className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow flex-grow">
      {contentMap[activeSection]}
    </section>
  );
};

export default ContentDisplay;
