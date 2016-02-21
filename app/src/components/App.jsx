import React from 'react'
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'

// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// )

// export default App

import LeftSideBar from './LeftSideBar'
import ContentDiv from './ContentDiv'

const App = () => {
    return <div className="app">
        <header />
        <div className="main-container">
        	<LeftSideBar />
        	<ContentDiv />
        </div>
        <footer />
    </div>
}

export default App
