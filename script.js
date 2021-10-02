const Storage = {
    get() {
        return JSON.parse(localStorage.getItem("todoList")) || []
    },

    set(items) {
        localStorage.setItem("todoList", JSON.stringify(items))
    }
}

const functionalities = {
    all: Storage.get(),

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

    addItemHTML(item, index) {
        const li = document.createElement('li')

        li.innerHTML = DOM.itemsInnerHTML(item, index)
        li.dataset.index = index
        DOM.listItem.appendChild(li)
    },
    
    itemsInnerHTML(item, index) {
        const html = `
        <div class="box-item">
            <h3>${item.message}</h3>
            <button onclick="functionalities.remove(${index})">Excluir</button>
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
            //Pegando os dados inseridos
            let item = Form.getValues().description
            //salvar
            functionalities.add({
                message: item
            })
            //apagar os dados do formulario
            Form.description.value = ""

        } catch (error) {
            alert(error.message)
        }
    }
}

const App = {
    init() {
        functionalities.all.forEach((item, index) => {
            DOM.addItemHTML(item, index)
        })

        Storage.set(functionalities.all)
    },

    reload() {
        DOM.listItem.innerHTML = ''
        App.init()
    }
}

App.init()