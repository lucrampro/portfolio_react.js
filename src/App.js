// import React, {useEffect, useRef} from 'react';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// css
import './App.css'
// component enfant
import About from './About.js'
import Logo from './Logo.js'
import Menu from './menu.js'
// import librairie
import {TweenMax,TimelineMax} from 'gsap';
// import assets
import img_lr from './img/lr.png'

// React app
class App extends React.Component{
// constructor
  constructor(props) {
    super(props)
    this.state = { menuCheack: true };
  }
// animation menu 
  animationMenu = () => {
    
    var tl = new TimelineMax();
    var menu = '.wrapper__menu'

if(this.menuCheack === true){
  tl.set(menu,{
    height: '100vh'
  })
  .to('.left',0.5,{
    height: '100vh',
    ease: "Expo.easeInOut"
  },"test")
  .to('.right',0.5,{
    height: '100vh',
    ease: "Expo.easeInOut"
  },"test+=0.1")
  .staggerTo('.button__burger div',0.1,{
    backgroundColor: 'white'
  },0.2)
  .staggerTo('.menu ul li', 0.5, {
    y:0,
    opacity: 1,
    ease: "Expo.easeInOut"
  },0.1,"test+=0.2")
  //  this.menu = !this.menu
    this.menuCheack = !this.menuCheack
   
} 
else {
  tl.staggerTo('.menu ul li', 0.3, {
    y: '-100px',
    opacity: 0,
    ease: "Expo.easeInOut"
  },0.1 )
  .to('.right',0.2,{
    height: 0,
    ease: "Expo.easeInOut"
  },"test")
  .to('.left',0.2,{
    height: 0,
    ease: "Expo.easeInOut"
  },"test+=0.1")
  .staggerTo('.button__burger div',0.1,{
    backgroundColor: 'black'
  },0.2)
  .set(menu,{
    height: 0
  })
this.menuCheack = !this.menuCheack
  }
  console.log(this.menuCheack)
  }
  // component did mount
  componentDidMount(){
// animation home 
    var tl = new TimelineMax();

    setTimeout( () => { 
      tl.set('.logo__lr, .home__text p',{
        y:"20%"
      })
      .staggerTo('.home__img .black, .home__text .black ', 0.3,{
        width: '100%',
        ease: "Expo.easeInOut"
      },0.1,"start")

      .staggerTo('.home__img .black, .home__text .black ', 0.3,{
        left: "100%",
        ease: "Expo.easeInOut"
      },0.1,"go")

      .staggerTo('.logo__lr, .home__text p', 0.5,{
        opacity: 1,
        y:"0%",
        ease: "Expo.easeInOut"
      },0.1,"go")
      .to('.wrapper__logo',1,{
        opacity: 1
      },"go+=0.2")
      // animation about
      
      TweenMax.set('.wrapper__about h2 span, .wrapper__about p span, .skill',{
        opacity: 0,
        y: '20%'
      })
      TweenMax.set('.wrapper__about img',{
        opacity:0,
        x:'100%',
        scale:0.9
      })
      var revealLimit = 500
      window.addEventListener('scroll', animationOnScroll)
      function animationOnScroll(){
        var toRevealContent = document.querySelectorAll('.reveal')

	if (toRevealContent.length > 0 && toRevealContent[0].getBoundingClientRect().top < (window.innerHeight - revealLimit)) {
		if (toRevealContent[0].classList.contains('wrapper__about')) {
			toRevealContent[0].classList.remove('reveal');

      var tl = new TimelineMax();
      
      tl.staggerTo('.wrapper__about h2 .black, .wrapper__about p .black', 0.3,{
        width: '100%',
        ease: "Expo.easeInOut"
      },0.2)
      .staggerTo('.wrapper__about h2 .black, .wrapper__about p .black', 0.3,{
        left: '100%',
        ease: "Expo.easeInOut"
      },0.2, "go")
      .staggerTo('.wrapper__about h2 span, .wrapper__about p span, .skill', 0.3,{
        opacity: 1,
        y: '0%',
        ease: "Expo.easeInOut"
      },0.05, "go+=0.1")
      .to('.wrapper__about img', 0.2,{
        opacity: 1,
        x:"0%",
      },"go+=0.1")
      .to('.wrapper__about img', 3,{
        scale:1,
        ease: "Expo.easeInOut"
      })
      }
    }
  }
      // fin du set time
     }, 500)

    }

  // render
  render() {
    return(
        <div className="wrapper__all">
          <Router>
          <Menu />
          <Route path="/" exact component={App} />
          </Router>
          <div onClick={this.animationMenu} className="button__burger">
            <div className="trait"></div>
            <div className="trait"></div>
            <div className="trait"></div>
          </div>
             <div className="wrapper__home">
             <Logo />
              <div className="home__img">
                <div className="black"></div>
              <img className="logo__lr"src={img_lr} alt=""/>
              </div>
              <div className="home__text">
                <div className="black"></div>
              <p>Developpeur front end <b>créatif</b> junior</p>
              </div>
             </div>
             <About />
             {/* fin du conponent */}
        </div>
    )
  }
}

export default App;

//
