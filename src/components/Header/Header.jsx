import React from "react"
import Cn from "./ImagensHeader/cn.png"
import Jogos from "./ImagensHeader/jogo.png"
import Programacao from "./ImagensHeader/programação.png"
import * as S from "./StyleHeader.jsx"


function Header() {
    return (
        <S.HeaderStyle>
            <img src={Cn} alt="" />

            <S.Section>
                <S.Div>
                    <img src={Jogos} alt="" />
                    <h2>JOGOS</h2>
                </S.Div>

                <S.Div>
                    <img src={Programacao} alt="" />
                    <h2>PROGRAMAÇÃO</h2>
                </S.Div>

            </S.Section>

        </S.HeaderStyle>
    )
}

export default Header