function SugestoesPerfis(props){
    return(
        <div class="perfil-item">
            <img src={props.image} alt="perfis"/>
            <div class="descricao-perfil">
                <span>{props.name}</span> 
                <span>Segue você</span>
            </div>
            <a href="#">seguir</a>
        </div>
    )
}


let perfis =[
    {image:"imagens/badvibesmemes 1.svg",name:"bad.vibes.memes"},
    {image:"imagens/badvibesmemes 1.svg",name:"Luquinhas"},
    {image:"imagens/badvibesmemes 1.svg",name:"Renanzinho do pop"},
    {image:"imagens/badvibesmemes 1.svg",name:"Bryan"},
    {image:"imagens/badvibesmemes 1.svg",name:"sei la"}
]


export default function Sugestoes(){
    return(
            <div class="sidebar-fixo">
                <div class="box-sidebar">
                    <div class="topo-sidebar">
                        <img src="imagens/catanacomics 1.svg" alt="perfil"/>
                        <div class="conta-perfil">
                            <span>catanacomics</span>
                            <span>Catana</span>
                        </div>
                    </div>
                    <div class="separador-sidebar"></div>
                    <div class="seguir-perfis-cabecalho">
                        <span>Sugestões para você</span>
                        <a href="#">Ver tudo</a>
                    </div>
                    {
                      perfis.map(perfisUser => <SugestoesPerfis image={perfisUser.image} name={perfisUser.name}/>)  
                    }
                    <div class="rodape-sidebar">
                        <p>
                            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                            Termos • Localizações • Contas mais relevantes • Hashtags • 
                            Idioma
                        </p> 
                        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                    </div>
                </div>
            </div>  
    )
}