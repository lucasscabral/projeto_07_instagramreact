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
                    <SugestoesPerfis image="imagens/badvibesmemes 1.svg" name="bad.vibes.memes"/>
                    <SugestoesPerfis image="imagens/badvibesmemes 1.svg" name="Luquinhas"/>
                    <SugestoesPerfis image="imagens/badvibesmemes 1.svg" name="Renanzinho do pop"/>
                    <SugestoesPerfis image="imagens/badvibesmemes 1.svg" name="Bryan"/>
                    <SugestoesPerfis image="imagens/badvibesmemes 1.svg" name="sei la"/>
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