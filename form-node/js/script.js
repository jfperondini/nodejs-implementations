class Produto {
    constructor() {
        this.id = 1
        this.arrayProdutos = []
        this.editId = null
    }

    salvar() {
        let prod = this.lerDados()
        if (this.validaCampos(prod) == true) {
            if (this.editId == null){
            this.adicionar(prod)
            } else { this.atualizar(this.editId, this.prod)
        }   
        console.log(this.arrayProdutos)
        this.listaTabela()
        this.cancelar()    
        }
    }

    adicionar(prod) {
        prod.preco = parseFloat(prod.precoProduto)        
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
            colunaId.classList.add('center') 

            let colunaNome = newRow.insertCell(1)
            colunaNome.appendChild(document.createTextNode(this.arrayProdutos[i].nomeProduto))
                
            let colunaPreco = newRow.insertCell(2)
            colunaPreco.appendChild(document.createTextNode(this.arrayProdutos[i].precoProduto))

            let colunaAcoes = newRow.insertCell(3)
            let imgEdit = document.createElement('img')
            imgEdit.src = '#',
            imgEdit.setAttribute('onclick', 'produto.editar(' + JSON.stringify(this.arrayProdutos[i]) + ')')

            let imgDelete = document.createElement('img')
            imgDelete.src = '#'
            imgDelete.setAttribute('onclick', 'produto.deletar(' + this.arrayProdutos[i].id + ')')
            
            colunaAcoes.appendChild(imgEdit)
            colunaAcoes.appendChild(imgDelete)

        }
    }

    cancelar() {
        document.getElementById('produto').value = ''
        document.getElementById('preco').value = ''

        document.getElementById('mudarNameBtn').innerText = 'Salvar'
        this.editId = null

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

    editar(idEditar) {
        this.editId = idEditar.id;

        document.getElementById('produto').value = idEditar.nomeProduto
        document.getElementById('preco').value = idEditar.nomePreco

        document.getElementByid('mudarNameBtn').innerText = 'Atualizar'

    }

    atualizar(idAtualizar, prod) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == idAtualizar) {
                this.arrayProdutos[i].nomeProduto = prod.nomeProduto
                this.arrayProduto[i].precoProduto = prod.precoProduto
            }

        }
    }
}



let produto = new Produto()
