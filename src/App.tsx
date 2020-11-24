import React from 'react';
import { Button } from 'antd';
import './App.less';
import css from './app.module.less';
import MainComponent from '@/components/main';

const a = 'a';
a = 'b';
console.log(c);
function App() {
  return (
    <div className={css['App']}>
      <Button type="primary">add</Button>
      <MainComponent />
    </div>
  );
}

export default App;
