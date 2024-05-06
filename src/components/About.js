import React from "react";
import { useState } from "react";

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
    });

    const [btntext, setBtnText] = useState("Enable Dark Mode");

    const DarkMode = () => {
        if (myStyle.color == "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            });
            setBtnText("Enable Dark Mode")
        }
    };

    return (
        <div className="container my-3" style={myStyle}>
            <div className="accordion" style={myStyle} id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={myStyle}
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees
                            control the overall appearance, as well as the showing and hiding
                            via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button
                    type="buttone"
                    onClick={DarkMode}
                    classNameName="btn btn-primary"
                >
                    {btntext}
                </button>
            </div>
        </div>
    );
}
