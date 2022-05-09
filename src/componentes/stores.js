function StoresItens(props){
    return(
        <div class="stores-itens">
            <div class="background-stores">
                <img src={props.image} />
            </div>
            <span>{props.nameUser}</span>
        </div>
    )

}

export default function Stores(){
    return(
            <div class="stores">
                <StoresItens image="imagens/corinthians2.jpg" nameUser="corinthians"/>
                <StoresItens image="https://pps.whatsapp.net/v/t61.24694-24/187245479_376038703936315_4498380035376139452_n.jpg?ccb=11-4&oh=e041efe79b88a84f2246a757b89ac9d5&oe=6285E50B" nameUser="lucas"/>
                <StoresItens image="imagens/badvibesmemes 1.svg" nameUser="gabriel"/>
                <StoresItens image="imagens/9gag 1.svg" nameUser="joao"/>
                <StoresItens image="imagens/9gag 1.svg" nameUser="rita"/>
                <StoresItens image="imagens/9gag 1.svg" nameUser="sabrina"/>
                <StoresItens image="imagens/9gag 1.svg" nameUser="luana"/>
                <img src="imagens/Vector.svg" class="stores-seta"/>
        </div>
)
}




