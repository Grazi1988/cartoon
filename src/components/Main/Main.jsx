import React from "react"
import * as S from "./StyleMain"
import Scooby from "./ImagensMain/scooby.png"
import Ben10 from "./ImagensMain/ben10.png"
import Looney from "./ImagensMain/looney.png"

import Gumball from "./ImagensMain/gumball.png"
import Meninas from "./ImagensMain/meninas.png"
import TomJerry from "./ImagensMain/tomjerry.png"

function Main() {
  return (
    <S.MainStyle>
      <S.Section>
        <S.Div>
          <img src={Scooby} alt="" />
          <img src={Ben10} alt="" />
          <img src={Looney} alt="" />
        </S.Div>
      </S.Section>

      <S.Section>
        <S.Div>
          <img src={Gumball} alt="" />
          <img src={Meninas} alt="" />
          <img src={TomJerry} alt="" />
        </S.Div>
      </S.Section>

    </S.MainStyle>
  )
}

export default Main
