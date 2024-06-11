import Image from "next/image"
import './header.scss'

export function Header(){
    return(    
        <div className="header">
          <div>
            <h1>Oi, Eu sou o Italo!</h1>
            <h2>Desenvolvedor Web</h2>
          </div>

          <Image
            src="/me.png"
            alt="Italo Silva"
            width={325}
            height={310}
            priority
          />
        </div>)

    
}