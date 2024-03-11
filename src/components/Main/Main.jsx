import React from "react"
import Scooby from "./ImagensMain/scooby.png"
import Ben10 from "./ImagensMain/ben10.png"
import Looney from "./ImagensMain/looney.png"

import Gumball from "./ImagensMain/gumball.png"
import Meninas from "./ImagensMain/meninas.png"
import TomJerry from "./ImagensMain/tomjerry.png"
import * as S from "./StyleMain"

function Main() {
  return (
    <main>
      <S.PrimeiraSection>
        <img src={Scooby} alt="" />
        <img src={Ben10} alt="" />
        <img src={Looney} alt="" />
      </S.PrimeiraSection>


      <S.SegundaSection>
        <img src={Gumball} alt="" />
        <img src={Meninas} alt="" />
        <img src={TomJerry} alt="" />
      </S.SegundaSection>
    </main>

  )
}

export default Main
