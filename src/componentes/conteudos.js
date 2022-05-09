import Stores from "./stores"
import Feeds from "./feeds"
import Sugestoes from "./sugestoes"

export default function Conteudo(){
    return(  
            <main>
                <div class="todos-conteudos">
                    <div class="conteudo-primario">
                        <Stores />
                        <Feeds />
                    </div>   
                    <Sugestoes />
                </div>  
            </main>
    )
}