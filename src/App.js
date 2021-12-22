import logo from './logo.svg';
import './App.css';
import ScrollReveal from 'scrollreveal';
import ScrollRevealContainer from './ScrollRevealContainer';

function App() {
  ScrollReveal().reveal('.App');

  return (
    <div className="App">
      <div style={{ marginBottom: '400px' }}></div>
      <ScrollRevealContainer move="right">
        <h1>右から登場</h1>
        <h2>Edit to see some magic happen!</h2>
      </ScrollRevealContainer>
      <ScrollRevealContainer move="left">
        <h1>左から登場</h1>
        <h2>Edit to see some magic happen!</h2>
      </ScrollRevealContainer>
      <ScrollRevealContainer move="top">
        <h1>上から登場</h1>
        <h2>Edit to see some magic happen!</h2>
      </ScrollRevealContainer>
      {/* ↓props「move」に何も指定しなければ「origin」は「bottom」になる */}
      <ScrollRevealContainer>
        <h1>下から登場</h1>
        <h2>Edit to see some magic happen!</h2>
      </ScrollRevealContainer>
    </div>
  );
}

export default App;
