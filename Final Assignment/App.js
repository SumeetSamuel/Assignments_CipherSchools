import React, {
    Component
} from 'react';
import './App.css';
import Main from './Components/main';
import {
    Link
} from 'react-router-dom';
import Img from './PICS/profilePic.png';
import logo1 from './PICS/1.png';
import logo2 from './PICS/2.png';
import logo3 from './PICS/3.png';
import logo4 from './PICS/4.png';
import logo5 from './PICS/5.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "G Sumeet Samuel"
        }
    }
    render() {

        return (

            <
            div className = "container" >
            <
            header className = "header" >
            <
            div >
            <
            nav className = "nav" >
            <
            Link to = "/" > Resume < /Link> <
            Link to = "/contact" > Contact < /Link> <
            Link to = "/blog" > My Blogs < /Link> < /
            nav > <
            div className = "info" >
            <
            h1 > {
                this.state.name
            } < /h1> <
            div >
            <
            p > Student, Lovely Professional University < /p> <
            p > A self - motivated, creative, and aspiring Web Developer < /p> <
            h5 > Web Designing < /h5> <
            h5 > FrontEnd Development < /h5> < /
            div >

            <
            /
            div >
            <
            /div> <
            div className = "image" >
            <
            img src = {
                Img
            }
            alt = "Profile Pic" / > <
            /div> 

            <
            /header> <
            Main / >
            
            <footer className="footer">
            
            <div>
            Email : gsumeetsamuel1@gmail.com
            <br/>
            <br/>
            Phone: 8250608219
            </div>
            <div>
            <a href="#"><img src={logo1} /></a>
            <a href="#"><img src={logo2} /></a>
            <a href="#"><img src={logo3} /></a>
            <a href="#"><img src={logo4} /></a>
            <a href="#"><img src={logo5} /></a>
            </div>
            </footer>
            <
            /
            div >

        );
    }


}


export default App;
