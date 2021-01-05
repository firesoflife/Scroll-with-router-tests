import './App.css';
//  Components
import Nav from './components/Nav';
// Pages
import Home from './pages/Home';
import Books from './pages/Books';
import Music from './pages/Music';
import Projects from './pages/Projects';

// ScrollableSection package
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const App = () => {
  return (
    <ScrollingProvider>
      <Nav />
      <Section id="home" component={Home}>
        <Home />
      </Section>
      <Section id="books">
        <Books />
      </Section>

      <Section id="music">
        <Music />
      </Section>
      <Projects />
    </ScrollingProvider>
  );
};

export default App;
