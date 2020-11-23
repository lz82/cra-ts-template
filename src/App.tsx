import React from 'react';
import { Button } from 'antd';
import './App.less';
import css from './app.module.less';
import MainComponent from '@/components/main';

function App() {
	return (
		<div className={css['App']}>
			<Button type="primary">add</Button>
			<MainComponent />
		</div>
	);
}

export default App;
