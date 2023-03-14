import React from "react";

import Card from "../../organism/card/Card";
import FlashCard from "../../molecules/flashCard/FlashCard";

import styles from "./personInfo.module.css";
function PersonInfo() {
    return (
        <div>
            <div className={styles.personInfo}>
                <section>
                    <Card />
                </section>
                <p>
                    Kathryn Ann Sackhoff is an American actress known for playing
                    Lieutenant Kara "Starbuck" Thrace on the Sci Fi Channel's television
                    program Battlestar Galactica (2004–2009) and for voicing Bitch Pudding
                    on Robot Chicken (2005–present). She was nominated for four Saturn
                    Awards for her work on Battlestar Galactica and won the award for Best
                    Supporting Actress on Television in 2005. Sackhoff also starred in the
                    short-lived TV series The Fearing Mind (2000–2001) and The Education
                    of Max Bickford (2001–2002); had recurring roles in the TV series
                    Bionic Woman (2007), Nip/Tuck (2009), and CSI: Crime Scene
                    Investigation (2010–2011); and had a lead role in the eighth season of
                    24 as Dana Walsh (2010). She voices several characters, including
                    Bitch Pudding, on Adult Swim's stop-motion animated series Robot
                    Chicken. Between 2012 and 2017, she starred in the A&E and Netflix
                    series Longmire as Deputy Sheriff Victoria "Vic" Moretti[3] before
                    recurring on The Flash as Amunet and appearing twice as herself on The
                    Big Bang Theory. Sackhoff has also voiced the Star Wars character
                    Bo-Katan Kryze in Star Wars: The Clone Wars (2012–2020), Star Wars
                    Rebels (2017), and portrayed the character in live action in the
                    second season of the Disney+ original series The Mandalorian (2020).
                    She had lead roles in the films Halloween: Resurrection (2002), White
                    Noise: The Light (2007), Batman: Year One (2011), The Haunting in
                    Connecticut 2: Ghosts of Georgia (2013), Sexy Evil Genius (2013),
                    Riddick (2013), Oculus (2013) and Don't Knock Twice (2016).
                </p>
                <FlashCard />
            </div>
            <div>
                <h2>Known For</h2>
                <div className={styles.container}>
                    <span className="knownForCard">
                        <Card />
                    </span>
                    <span className="knownForCard">
                        <Card />
                    </span>
                    <span className="knownForCard">
                        <Card />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PersonInfo;
