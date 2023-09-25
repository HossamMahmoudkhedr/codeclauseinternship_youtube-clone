import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import './App.css';

// Components
import Feed from './components/feed';
import ChannelDetail from './components/channelDetail';
import VideoDetail from './components/videoDetail';
import SearchFeed from './components/searchFeed';

// Pages
import RootLayout from './pages/rootLayout';
import Error from './pages/error';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}>
			<Route
				index
				element={<Feed />}
			/>
			<Route
				path="video/:id"
				element={<VideoDetail />}
			/>
			<Route
				path="channel/:id"
				element={<ChannelDetail />}
			/>
			<Route
				path="search/:searchTerm"
				element={<SearchFeed />}
			/>
			<Route
				path={'*'}
				element={<Error />}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
