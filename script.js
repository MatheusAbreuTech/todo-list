const itemsTodo = [
    {
        id: 1,
        message: 'conteudo do item1'
    },
    {
        id: 2,
        message: 'conteudo do item2'
    },
    {
        id: 3,
        message: 'conteudo do item3'
    },
    {
        id: 4,
        message: 'conteudo do item4'
    },
    {
        id: 5,
        message: 'conteudo do item5'
    },
]

// const addItem = {
//     add(item) {
//         itemsTodo.push(item)
//         App.reload()
//     }
// }

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

const App = {
    init() {
        itemsTodo.forEach((item) => {
            DOM.addItemHTML(item)
        })
    },

    reload() {
        DOM.listItem.innerHTML = ''
        App.init()
    }
}

App.init()

addItem.add({
    id: 6,
    message: "conteudo do item6"
})
