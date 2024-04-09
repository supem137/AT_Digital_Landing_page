import { useState } from 'react';
import CardOne from './components/cardOne/CardOne';
import CardTwo from './components/cardTwo/CardTwo';
import CoverPage from './components/coverPage/CoverPage';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import QuestionSection from './components/questionSection/QuestionSection';
import { MyContext } from './context/GlobalContext';

function App() {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <MyContext.Provider value={{ menuShow, setMenuShow }}>
      <Navbar />
      <CoverPage />
      <CardOne />
      <CardTwo />
      <QuestionSection />
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
