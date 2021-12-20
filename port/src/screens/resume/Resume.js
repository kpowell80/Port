import React from 'react';
import Typed from 'react-typed';
import './resume.css';
import { CustomPlaceholder } from 'react-placeholder-image';
import Zoom from 'react-reveal/Zoom';



function Resume() {
    return (
        <div className="about" id="resume">
            <Zoom>
                <h1>Resume&#769;.</h1>
                <Typed
                    strings={[
                        "",
                        "Bootcamps",
                        "Trainings",
                        "Web Master",
                        "Styling",
                        "Maitre 'D",
                        "",
                        "",]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop />
                <CustomPlaceholder className="custom" id="shadow"

                    width={500}
                    height={500}
                    backgroundColor="#f5f5f5"
                    // border="3px solid #444444"
                    textColor="#444444"
                    text="Welcome to Katelin's World Domination!"


                />
            </Zoom>
        </div>



    )
}

export default Resume