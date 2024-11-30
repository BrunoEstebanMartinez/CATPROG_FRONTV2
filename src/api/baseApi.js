import axios from 'axios';

export const baseApi = axios.create({
      baseURL: 'http://10.8.4.62:8000/api/catprog'
    //  baseURL: 'http://10.40.140.28:8000/api/v1'
    //  baseURL: 'https://ddsisem.edomex.gob.mx/sidesa-backend/api/v1'
});


 export const urlBase = 'http://10.8.4.62:8000/api/catprog';
// export const urlBase = 'http://10.40.140.28:8000/api/v1';
// export const urlBase = 'https://ddsisem.edomex.gob.mx/sidesa-backend/api/v1'

export const pass = 'blackmore-page';