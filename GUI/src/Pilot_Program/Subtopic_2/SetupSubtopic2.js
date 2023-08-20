import React, { useEffect, useState } from "react";
import PilotProgram from "./Subtopic/Business";

const SetupSubtopic2 = () => {
    useEffect(() => {
        const PilotPr = document.querySelector(".Business_program ");
        const Btnsub2 = document.querySelectorAll(".subtopicProject .btn");
        
        Btnsub2.forEach((btn, index) => {
            if (index === 0) {
                btn.addEventListener("click", () => {
                    PilotPr.style.display = "flex";
                });
            }
            if (index === 1) {
                btn.addEventListener("click", () => {
                    PilotPr.style.display = "flex";
                });
            }
            if (index === 2) {
                btn.addEventListener("click", () => {
                    PilotPr.style.display = "flex";
                });
            }
        });
    }, []);


};

export default SetupSubtopic2;
