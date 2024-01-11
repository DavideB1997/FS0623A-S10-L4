import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import MyNav from './components/MyNav';

import fantasy from './data/fantasy.json';

function App() {
	return (
		<Container>
			<MyNav />
			<MyJumbotron />
			<AllTheBooks />
			<BookList books={fantasy} />
			<MyFooter />
		</Container>
	);
}

export default App;
