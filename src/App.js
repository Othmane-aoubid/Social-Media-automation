import './App.css';
import RootLayout from './components/RootLayout'; // Importing the RootLayout component
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <RootLayout>
      <LandingPage />
    </RootLayout>
  );
}

export default App;
