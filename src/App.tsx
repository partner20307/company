import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routers from './routes';

function App() {
	return (
		<React.Fragment>
			<RouterProvider router={routers} />
		</React.Fragment>
	);
}

export default App;
