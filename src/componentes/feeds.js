import React from 'react';


function Post(props){
    const[like, setLike] = React.useState("color-default")
    function reacoes(){
        //console.log("OLaaa");
        function likePost(){
            setLike("curtiu");
        }
    
    }
    return(
        <div class="caixas-conteudo">
            <div class="topo-post">
                <div class="perfil-usuario">
                    <img src={props.image} alt="perfil"/>
                    <span>{props.name}</span>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <div class="conteudo-post" >
                <img src={props.imageFeed} alt="feed"/>
            </div>
            <div class="rodape-post">
                <div class="box-acoes-usuario">
                    <div class="acoes-esquerda">
                        <ion-icon name="heart-outline" class={like} onClick={reacoes}></ion-icon>
                        <ion-icon name="chatbubble-outline" ></ion-icon>
                        <ion-icon name="paper-plane-outline" ></ion-icon>
                    </div>
                    <div class="acoes-direita">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas-usuarios">
                    <img src="imagens/respondeai 1.svg" />
                    <p>Curtido por <strong>{props.curtiu}</strong> e <strong>outras {props.curtidas}</strong></p> 
                </div>
            </div>
        </div>
    )
}

let posts =[
    {image:"imagens/meowed 1.svg",name:"lucas" ,imageFeed:"imagens/dog 1.svg" ,curtiu:"respondeai",curtidas:"101.523,pessoas"},
    {image:"imagens/meowed 1.svg",name:"gabriel" ,imageFeed:"imagens/dog 1.svg" ,curtiu:"respondeai",curtidas:"103.800 pessoas"},
    {image:"imagens/meowed 1.svg",name:"sabrina" ,imageFeed:"imagens/dog 1.svg" ,curtiu:"respondeai" ,curtidas:"101.400 pessoas"}
]

export default function Feeds (){
    return(
        <div class="posts">
            {
               posts.map(publicao => <Post image={publicao.image} name={publicao.name} imageFeed={publicao.imageFeed} curtiu={publicao.curtiu} curtidas={publicao.curtidas}/>) 
            } 
            
        </div>
    )
}