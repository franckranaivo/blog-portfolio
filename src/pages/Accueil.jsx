import React from 'react'
import '../assets/css/pages/accueil.css'
import profilImg from '../assets/img/profile-bgless.png'
import Record from "../components/Record/Record";

export default function Accueil() {
    return (
        <main className="container">
            <div className="presentation">
                <div className="presentation--txt">
                    <p className="presentation--name bg-transparent">Hi, I'm <strong>Franck</strong> RANAIVO-HARISOA</p>
                    <p className={"text-3xl text-rose-500 bg-transparent"}>Fullstack Web Developer ReactJS / Symfony</p>
                </div>
                <div className="presentation--img">
                    <img src={profilImg}/>
                </div>
                <div className="hero-pink-gradient"></div>
                <div className="hero-green-gradient"></div>
            </div>
            {/* history */}
            <Record/>

        </main>
    )
}