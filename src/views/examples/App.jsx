import React from "react";
import './App.css';
import Menu from '../components/Menu';
import Content from '../components/Content';


const App = props => (
    <div className="App">
        <Menu></Menu>
        <Content></Content>
    </div>
)

export default App