import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import './App.less';
import css from './app.module.less';
import MainComponent from '@/components/main';
import { appApi } from '@/services';

import config from '@/config';

console.log(config);

// console.log(c);
function App() {
  const [size, setSize] = useState(100);
  console.log('aaa');
  useEffect(() => {
    setSize(1000);
    const fetchData = async () => {
      const { token } = await appApi.checkLogin({
        username: 'lz',
        password: 'a',
        verifyCode: 'aa'
      });
      console.log(token);
    };
    fetchData();
  }, []);
  return (
    <div className={css['App']}>
      <Button type="primary">add</Button>
      <MainComponent />
      <div className={css['rect']}>Hover me!</div>
    </div>
  );
}

export default App;
