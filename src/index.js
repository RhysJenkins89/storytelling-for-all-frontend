import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PostDetails from "./views/PostDetails";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <h1>error page from app</h1>
	},
	{
		path: "/about",
		element: <h1>This is the about page.</h1>,
		errorElement: <h1>about error page</h1>
	},
	{
		path: "/contact",
		element: <h1>This is the contact page.</h1>,
		errorElement: <h1>contact error page</h1>
	},
	{
		path: "/posts",
		element: <h1>This is the posts page.</h1>,
		errorElement: <h1>post error page</h1>
	},
	{
		path: "/posts/:id",
		element: <PostDetails />,
		errorElement: <h1>error page</h1>
	},
	{
		path: "/books",
		element: <h1>This is the books page.</h1>,
		errorElement: <h1>books error page</h1>
	},
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);