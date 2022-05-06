function Icones(props) {
    return(
        <ion-icon name={props.nome}></ion-icon>
    )
}




export default function Topo(){
    return(
            <header>
                <div class="topo">
                    <div class="logos">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div class="borda"></div>
                        <img src="imagens/logo.png" alt=""/>
                    </div>
                    
                    <input type="text" placeholder="Pesquisar"/>
                    <div class="icones-acoes">
                        <Icones nome="paper-plane-outline"/>
                        <Icones nome="compass-outline"/>
                        <Icones nome="heart-outline"/>
                        <Icones nome="person-outline"/>
                      
                    </div>
                </div>
            </header>
    )
}