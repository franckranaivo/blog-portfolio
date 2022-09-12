import React from 'react'
import profilImg from '../assets/img/profil.jpg'

export default function Accueil() {
    return (
        <main className="container">
            <div className="presentation">
                <div>
                    <p className="presentation--name">Hi, I'm <strong>Franck</strong> RANAIVO-HARISOA</p>
                    <p>Fullstack Web Developer ReactJS / Symfony</p>
                </div>
                <div>
                    <img src={profilImg}/>
                </div>
            </div>
        </main>
    )
}