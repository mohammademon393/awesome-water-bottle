import React, { use } from 'react';

const Bottles = ({ bottlePromies }) => {
    const bottles = use(bottlePromies);
    console.log(bottles);
    
  return (
    <div>
      <h2>bottlessss</h2>
    </div>
  );
};

export default Bottles;