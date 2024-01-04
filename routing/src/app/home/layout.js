import React from 'react';

const layout = ({children}) => {
  return (
    <>
    <div>
<div className='bg-slate-500'>home header</div>
   {children}
    </div>
    </>
  );
};

export default layout;
