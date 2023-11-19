// Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados

// Escolha uma das opções para interagir com o sistema:

// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática

// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos
// com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000

// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário
// atualize somente a cor e o preço.

// 5 - Remover veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo

// 6 - Sair do sistema

// Regras:
// - Os dados de um veículo são: identificador, modelo, marca,
// ano, cor, preco
// - A opção de filtro deve ser por marca e ordenada pelo preco
// - A lista de veículos deve estar ordenada pelo preco.
// - Só deve ser possível atualizar a cor e o preço do veículo.

let carros = []

function menu() {
    alert(`Bem-vindo ao sistema de CRUD de veículos:\n No momento, o sistema tem ${carros.length} carros cadastrados\n Escolha uma das opções para interagir com o sistema:\n 1 - Cadastrar veículo\n 2 - Listar todos os veículos\n 3 - Filtrar veículos por marca\n 4 - Atualizar veículo\n 5 - Remover veículo\n 6 - Sair do sistema`)

    let opcoes = prompt("Escolha uma opção:")
    switch (opcoes) {
        case "1":
            cadastro()
            break;
        case "2":
            listar()
            break;
        case "3":
            filtrar()
            break;
        case "4":
            atualizar()
            break;
        case "5":
            remover()
            break;
        case "6":
            alert("Saindo. Até logo!")
            break;
        default:
            alert("Opção inválida. Tente novamente.")
            menu()
    } 
}

function cadastro() {
    let modelo = prompt("Digite o modelo do veículo:")
    let marca = prompt("Digite a marca do veículo:")
    let ano = prompt("Digite o ano do veículo:")
    let cor = prompt("Digite a cor do veículo:")
    let preco = prompt("Digite o preço do veículo:")
    let id = carros.length + 1

    carros.push({
        id: id,
        modelo: modelo,
        marca: marca,
        ano: ano,
        cor: cor,
        preco: preco
    })

    alert("O veículo foi cadastrado com sucesso!")
    menu()
}

function listar() {
    carros.sort((a, b) => a.preco - b.preco)

    for (let i = 0; i < carros.length; i++) {
        let veiculo = carros[i]
        alert("ID: " + veiculo.id + " Modelo: " + veiculo.modelo + " Marca: " + veiculo.marca +
              " Ano: " + veiculo.ano + " Cor: " + veiculo.cor + " Preço: R$" + veiculo.preco)
    }

    menu()
}

function filtrar() {
    let marcaFiltro = prompt("Digite a marca para filtrar:")

    let veiculosFiltrados = carros.filter((veiculo) => veiculo.marca.toLowerCase() === marcaFiltro.toLowerCase())

    veiculosFiltrados.sort((a, b) => a.preco - b.preco)
    
    for (let i = 0; i < veiculosFiltrados.length; i++) {
        let veiculoFiltrado = veiculosFiltrados[i]
        alert("ID: " + veiculoFiltrado.id + " Modelo: " + veiculoFiltrado.modelo +
              " Cor: " + veiculoFiltrado.cor + " Preço: R$" + veiculoFiltrado.preco)
    }

    menu()
}


function atualizar() {
    let idAtualizar = prompt("Digite o ID do veículo:")

    let atualizarVeiculo = carros.find((veiculo) => veiculo.id == idAtualizar)

    if (atualizarVeiculo) {
        atualizarVeiculo.cor = prompt("Digite a nova cor do veículo:")
        atualizarVeiculo.preco = prompt("Digite o novo preço do veículo:")

        alert("Veículo atualizado com sucesso!")
    } else {
        alert("Veículo não encontrado. Voltando para o menu inicial.");
    }

    menu()
}

function remover() {
    let idRemover = prompt("Digite o ID do veículo:")

    let removerVeiculo = carros.findIndex((veiculo) => veiculo.id == idRemover)

    if (removerVeiculo !== -1) {
        carros.splice(removerVeiculo, 1)
        alert("Veículo removido com sucesso!")
    } else {
        alert("Veículo não encontrado.")
    }

    menu()
}

menu()