'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')



//Banco de dados Local
const tempClient = {
    nome: "Dc", 
    email:"DanielDcDev@gmail.com",
    celular: "11123459876",
    cidade: "Heaven"
}

//CRUD - Create 
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))
const createClient = (client) => {  
    const dbClient = getLocalStorage() 
    dbClient.push (client)
    setLocalStorage(dbClient)
}//CRUD - Create 

//CRUD - Read
const readClient = () => getLocalStorage()
//CRUD - Read

//CRUD - Update
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}//CRUD - Update

//CRUD - Delete
const deleteClient = (index) =>{
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)

}
//CRUD - Delete

//verificação se os campos são validos
const isValidFIelds = () => {
    return document.getElementById('form').reportValidity();
} 
//verificação se os campos são validos
//interação com o layout


const saveClient = () => {
    if(isValidFIelds()) {
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('cidade').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client)
    }
}
//interação com o layout

//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

    document.getElementById('salvar')
            .addEventListener('click',saveClient)
//eventos


