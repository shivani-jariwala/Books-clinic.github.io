import axios from 'axios';
import config from '../config';

export function readCsv(email) {
  return axios
    .get(`${config.apiBaseUrl}`)
    .then((resp) => {
      const responseBody = resp.data;
      if (responseBody.message === 'success') {
        return responseBody;
      }
      const err = new Error('Invalid response');
      err.data = responseBody;
      throw err;
    })
    .catch((err) => {
      console.log("err",err)
    });
}

export function findByIsbn(isbn) {
    return axios
      .get(`${config.apiBaseUrl}/${isbn}`)
      .then((resp) => {
        const responseBody = resp.data;
        if (responseBody.message === 'success') {
          return responseBody;
        }
        const err = new Error('Invalid response');
        err.data = responseBody;
        throw err;
      })
      .catch((err) => {
        console.log("err",err)
      });
}
  
export function addBook(body) {
    return axios
      .post(`${config.apiBaseUrl}/add`,body,{
        responseType: 'blob',
      })
      .then((resp) => {
        if(resp.data) {
          return resp
        }
        const err = new Error('Invalid response');
        err.data = resp;
        throw err;
      })
      .catch((err) => {
        console.log("err",err)
      });
  }