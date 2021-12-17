import axios from "axios";

const baseUrl = '/api/persons';

const getAll = () => {
    return axios.get(baseUrl)
                .then(response =>response.data)
}
const create = newPerson => {
   return axios.post(baseUrl,newPerson)
        .then(response => response.data)
}
const update = (changedContact) =>{
    return axios.put(`${baseUrl}/${changedContact.id}`,changedContact)
                .then(response => response.data)
}
const remove = id => {
    axios.delete(`${baseUrl}/${id}`)
    return getAll()
}

export default {getAll,create,remove,update}
