import axios from 'axios';

export default function({ params, store }) {

    return axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        store.commit('init',response.data);
    });
}
