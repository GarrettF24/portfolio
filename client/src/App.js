import "./App.css"
import Layout from "./components/Layout/Layout"
import { Switch } from "react-router"
import Home from "./screens/Home/Home"
// import Projects from "./screens/Projects/Projects"
// import Contact from "./screens/Contact/Contact"
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Home />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
