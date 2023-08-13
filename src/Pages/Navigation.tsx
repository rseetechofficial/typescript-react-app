import React from 'react';

const Navigation: React.FC = () => {
  return (
    <div className='App-header'>
        <a className='a-paddingR' href="/">Home</a> &nbsp;&nbsp;&nbsp;
        <a className='a-paddingR' href="/api-call">API Call(Axios)</a>
    </div>
    );
};
    
export default Navigation;