import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/Profile/My posts/MyPosts";
import Post from "./components/Profile/My posts/Posts/Post";


let App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<Profile />
			<MyPosts />
			<Post />
		</div>
	);
}

export default App;

