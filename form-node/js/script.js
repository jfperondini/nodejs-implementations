class Produto {
    constructor() {
        this.id = 1
        this.arrayProdutos = []
    }

    salvar() {
        let prod = this.lerDados()
        if (this.validaCampos(prod) == true) {
            this.adicionar(prod)
        }
        console.log(this.arrayProdutos)
        this.listaTabela()
        this.cancelar()
    }

    adicionar(prod) {
        this.arrayProdutos.push(prod)
        this.id++
    }

    lerDados() {
        let prod = {}
        prod.id = this.id
        prod.nomeProduto = document.getElementById('produto').value
        prod.precoProduto = document.getElementById('preco').value
        return prod
    }

    validaCampos(prod) {
        let msg = ''
        if (prod.nomeProduto == '') {
            msg += 'Informe o nome do Produto! \n'
        }
        if (prod.precoProduto == '') {
            msg += 'Informe o preço do Produto! \n'
        }
        if (msg != '') {
            alert(msg)
            return false
        }
        return true
    }

    listaTabela() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            // let newText = document.createTextNode(this.arrayProdutos[i].id)
            // newCell.appendChild(newText)

            let newRow = tbody.insertRow(-1) //linha

            //ID
            let colunaID = newRow.insertCell(0)
            colunaID.appendChild(document.createTextNode(this.arrayProdutos[i].id))

            //Nome
            let colunaNome = newRow.insertCell(1) //id
            colunaNome.appendChild(document.createTextNode(this.arrayProdutos[i].nomeProduto))

            let colunaPreco = newRow.insertCell(2) //id
            colunaPreco.appendChild(document.createTextNode(this.arrayProdutos[i].precoProduto))

            let colunaAcoes = newRow.insertCell(3) //id
            let imgEdit = document.createElement('img')
            imgEdit.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'
            imgEdit.setAttribute('onclick', 'produto.editar(' + this.arrayProdutos[i].id + ')')

            let imgDelete = document.createElement('img')
            imgDelete.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
            imgDelete.setAttribute('onclick', 'produto.deletar(' + this.arrayProdutos[i].id + ')')

            colunaAcoes.appendChild(imgEdit)
            colunaAcoes.appendChild(imgDelete)

        }
    }

    cancelar() {
        prod.nomeProduto = document.getElementById('produto').value = ''
        prod.precoProduto = document.getElementById('preco').value = ''
    }

    deletar(idDelete) {
        let tbody = document.getElementById('tbody')
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id === idDelete) {
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
    }

    //editar(idEditar) {
    //document.getElementById('produto').value = this.arrayProdutos[idEditar].id

    //}
}

let produto = new Produto()