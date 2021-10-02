const functionalities = {
    all: [
        {
            message: 'conteudo do item1'
        },
        {
            message: 'conteudo do item2'
        },
        {
            message: 'conteudo do item3'
        },
        {
            message: 'conteudo do item4'
        },
        {
            message: 'conteudo do item5'
        },
    ],

    add(item) {
        functionalities.all.push(item)
        App.reload()
    },

    remove(index) {
        functionalities.all.splice(index, 1)
        App.reload()
    }
}

const DOM = {
    listItem: document.querySelector('#list-todo'),

    addItemHTML(item) {
        const li = document.createElement('li')

        li.innerHTML = DOM.itemsInnerHTML(item)

        DOM.listItem.appendChild(li)
    },
    
    itemsInnerHTML(item) {
        const html = `
        <div class="box-item">
            <h3>${item.message}</h3>
            <button>Excluir</button>
        </div>
        `
        return html
    }
}

const Form = {
    description: document.querySelector('input#description'),

    getValues() {
        return {
            description: Form.description.value
        }    
    },

    validateFilds() {
        const { description } = Form.getValues()

        if (description.trim() === "") {
            throw new Error('Por favor, preencha o campo')
        }
    },
    
    submit(event) {
        event.preventDefault()

        try {
            //verificar se os campos estão preenchidos
            Form.validateFilds()
            let item = Form.getValues().description
            //salvar
            functionalities.add({
                message: item
            })
            //apagar os dados do formulario
            Form.description.value = ""
            //atualizar
            App.reload()

        } catch (error) {
            alert(error.message)
        }
    }
}

const App = {
    init() {
        functionalities.all.forEach((item) => {
            DOM.addItemHTML(item)
        })
    },

    reload() {
        DOM.listItem.innerHTML = ''
        App.init()
    }
}

App.init()

