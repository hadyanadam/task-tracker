import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTasks } from './actions/taskActions'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          />
          <Route path='/' exact render={(props) =>(
            <>
              {showAddTask && <AddTask />}
              {tasks.data.length > 0 ? <Tasks /> : 'No Tasks to show'}
            </>
          )} />
          <Route path='/about' component={About} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
