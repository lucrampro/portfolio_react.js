import React from 'react'
import './App.css'
import Lowpoly from './img/me_low_poly.png'

class About extends React.Component{
    render(){
        return(
            <div className="wrapper__about reveal">
                <h2> <div className="black"></div> <span>“Il faut toujours se réserver le droit de rire <br/> le lendemain de ses idées de la veille. ” </span>
                    <span className="autor">Napoléon bonaparte</span>
                </h2>
                <p>
                    <div className="black"></div>
                    <span>
                    Je suis Lucien développeur web front-end créatif, <br/>
                    étudiant supérieur en web dans l'école HETIC <br/> je développe pour mes clients
                    des sites vivants et intéractifs pour rendre les utilisateurs,
                    clients et moi-même le plus satisfait possible. 😬
                    </span>
                </p>
            <div className="skill">
                        <ul>
                            Compétences
                            <li> <span>Intégration</span> Html / SASS / Jekyll </li>
                            <li><span>Développement</span> Vanilla.js / JQuery / GSAP</li>
                            <li><span>Design</span> PhotoShop / Illustrator / Sketch</li>
                        </ul>
                        <ul>
                            Experiences
                            <li> <span>Polkatulk</span> Startup</li>
                            <li><span>Scenso</span> Startup</li>
                            <li><span>Tristan</span>Freelance</li>
                        </ul>
                    </div>
                <img src={Lowpoly} alt="auto portrait en low poly art"/>
                {/* fin du conponent */}
            </div>
        )
    }
}

export default About;