import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import './App.less';
import css from './app.module.less';
import MainComponent from '@/components/main';

import config from '@/config';

console.log(config);

// console.log(c);
function App() {
  const [size, setSize] = useState(100);
  console.log('aaa');
  useEffect(() => {
    setSize(1000);
  }, []);
  return (
    <div className={css['App']}>
      <Button type="primary">add</Button>
      <MainComponent />
      {size}
    </div>
  );
}

export default App;
