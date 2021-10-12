import "./App.css"
import Layout from "./components/Layout/Layout"
import { Switch, Route } from "react-router"
import Home from "./screens/Home/Home"
import Projects from "./screens/Projects/Projects"
import Contact from "./screens/Contact/Contact"
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
