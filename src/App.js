import './App.css';
//  Components
import Nav from './components/Nav';
// Pages
import Home from './pages/Home';
import Books from './pages/Books';
import Music from './pages/Music';
import Projects from './pages/Projects';

import { Route, Switch } from 'react-router-dom';

// ScrollableSection package
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const App = () => {
  return (
    <Switch>
      <ScrollingProvider>
        <Nav />
        <Route>
          <Section id="home">
            <Home />
          </Section>
          <Section id="books">
            <Books />
          </Section>

          <Section id="music">
            <Music />
          </Section>
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </ScrollingProvider>
    </Switch>
  );
};

export default App;
