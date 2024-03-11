import React from "react"
import Warner from "./ImagensFooter/warner.png"

import Git from "./ImagensFooter/git.png"
import Linkedin from "./ImagensFooter/linkedin.png"

import * as S from "./StyleFooter.jsx"

function Footer() {
    return (
        <footer>
            <S.PrimeiraSection>
                <img src={Warner} alt="" />


                <S.Ul>
                    <li>Sobre nós</li>
                    <li>Produtos</li>
                    <li>Personagens</li>
                </S.Ul>


                <img src={Git} alt="" />
                <img src={Linkedin} alt="" />

            </S.PrimeiraSection>

            <S.P>&copy; 2024 Cartoon Network</S.P>

        </footer>

    )
}
export default Footer