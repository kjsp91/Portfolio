import NavBar from './NavBar/NavBar';
import Hero  from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Roles from './Roles/Roles';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import CopyRight from './CopyRight';
export default function FullComp(){
    return <>
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Roles/>
      <Projects/>
      <Contact/>
      <CopyRight/>
    </>
}