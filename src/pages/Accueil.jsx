import React from 'react'
import profilImg from '../assets/img/profile-bgless.jpg'
import '../assets/css/pages/accueil.css'
import Record from "../components/Record/Record";

export default function Accueil() {
    return (
        <main className="container">
            <div className="presentation">
                <div className="presentation--txt">
                    <p className="presentation--name">Hi, I'm <strong>Franck</strong> RANAIVO-HARISOA</p>
                    <p>Fullstack Web Developer ReactJS / Symfony</p>
                </div>
                <div className="presentation--img">
                    <img src={profilImg}/>
                </div>
            </div>
            {/* history */}
            <Record/>

        </main>
    )
}