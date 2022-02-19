import logo from './logo.svg';
import './App.css';
import Movie from './components/movie';
import ReviewForm from './components/review-form';

function App() {
  return (
    <div className="App">
      <Movie />
      <ReviewForm />
    </div>
  );
}

export default App;
