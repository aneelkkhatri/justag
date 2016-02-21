import React from 'react'
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
