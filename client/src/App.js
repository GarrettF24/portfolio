import "./App.css"
import Layout from "./components/Layout/Layout"
import { Switch, Route } from "react-router"

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <h1>This is the app component</h1>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
