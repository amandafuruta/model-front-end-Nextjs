import {Card} from '../styles/card'

const content = [
    {id: 1, title: "Assessoria Fiscal,Contábil, Previdenciária e Trabalhista;"},
    {id: 2, title: "Processos Licitatórios;"},
    {id: 3, title: "Regularizações de Obras de Construção Civil;"},
    {id: 4, title: "Administração de Condomínios;"},
    {id: 5, title: "Processos de CCIR e ITR"},
    {id: 6, title: "Contabilidade Rural;"},
    {id: 7, title: "Livro Caixa e Carnê Leão para Profissionais Liberais;"},
    {id: 8, title: "Assessoria na implantação e utilização de Nota Fiscal Eletrônica."},
]

export default function Cards(){
    
    return(
        <>
            {content.map((item) => {
                return(
                    <Card key={item.id}>
                        <p className="p2-Bold">{item.title}</p>
                    </Card>
                )
            })}
        </>
    )
}