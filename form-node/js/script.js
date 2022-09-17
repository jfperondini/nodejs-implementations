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
     
            let newRow = tbody.insertRow(-1) //linha

            let colunaId = newRow.insertCell(0)
            colunaId.appendChild(document.createTextNode(this.arrayProdutos[i].id))

            let colunaNome = newRow.insertCell(1)
            colunaNome.appendChild(document.createTextNode(this.arrayProdutos[i].nomeProduto))

            let colunaPreco = newRow.insertCell(2)
            colunaPreco.appendChild(document.createTextNode(this.arrayProdutos[i].precoProduto))

            let colunaAcoes = newRow.insertCell(3)
            let imgEdit = document.createElement('img')
            imgEdit.src = '#',
            imgEdit.setAttribute('onclick', 'produto.editar(' + this.arrayProdutos[i].id + ')')

            let imgDelete = document.createElement('img')
            imgDelete.src = '#'
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