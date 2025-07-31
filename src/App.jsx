
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Jonathan Alavez</h1>
        <p>Software Developer | AI Enthusiast | Veteran | Student</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Brief bio about your background, interests, and goals.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>🔧 Project A – Description</li>
          <li>🤖 Project B – Description</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: you@example.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

export default App
