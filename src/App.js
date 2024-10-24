import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Exp from './components/Experience'
import Edu from './components/Education'
import Projects from './components/Projects'
import MyThesis from './components/MyThesis'

function App() {

  return (
    <main>
      <NavBar />
      <Home />
       <Edu/>
       <Skills />
       <Exp />
      {/* <Projects/> */}
      <MyThesis/>
      <Contacts />
    </main>
  );
}

export default App;


