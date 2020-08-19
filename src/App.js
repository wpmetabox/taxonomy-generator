import React, { useState } from 'react';
import PhpSettings from './contexts/PhpSettings';
import DefaultSettings from './constants/DefaultSettings';
import {  } from './constants/Data';
import Control from './components/controls/Control';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CopyBlock, dracula } from 'react-code-blocks';
import PhpCode from './constants/PhpCode';

const App = () => {
	const [state, setState] = useState( DefaultSettings );

	const showCodeBlock = () => {
		setState( state => ( {...state, show_code: true} ) )
	}

	return (
		<PhpSettings.Provider value={[state, setState]}>
			<Tabs forceRenderTabPanel={true}>
				<TabList>
				</TabList>

				<TabPanel>
					
				</TabPanel>
			</Tabs>

			<button className="ctg-button" onClick={showCodeBlock}>Generate Code</button>
			{ true === state.show_code && <CopyBlock text={PhpCode( state )} language={'php'} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock /> }
		</PhpSettings.Provider>
	);
}

export default App;