
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

let stores=[
    {image:"imagens/corinthians2.jpg",nameUser:"corinthians"},
    {image:"https://pps.whatsapp.net/v/t61.24694-24/187245479_376038703936315_4498380035376139452_n.jpg?ccb=11-4&oh=e041efe79b88a84f2246a757b89ac9d5&oe=6285E50B",nameUser:"lucas"},
    {image:"imagens/badvibesmemes 1.svg",nameUser:"gabriel"},
    {image:"imagens/9gag 1.svg",nameUser:"joao"},
    {image:"imagens/9gag 1.svg",nameUser:"rita"},
    {image:"imagens/9gag 1.svg",nameUser:"sabrina"},
    {image:"imagens/9gag 1.svg",nameUser:"luana"}
    ]


export default function Stores(){
    return(
            <div class="stores">
                {
                   stores.map(itensStores => <StoresItens image={itensStores.image} nameUser={itensStores.nameUser}/>) 
                }
                <img src="imagens/Vector.svg" class="stores-seta"/>
        </div>
)
}

