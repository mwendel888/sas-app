import Axios from './AxiosAPI';
import { AxiosPromise,AxiosResponse } from 'axios';
import AxiosAPI from './AxiosAPI';
import {ICliente, IDepartamento} from '../interfaces/Interfaces';


const Auth = {
    loginProfessor: (data: any): AxiosPromise<any> => {
       return Axios.post('/loginProfessor', data, true).then(
         (res) : AxiosResponse<any> => {
           AxiosAPI.token = res.data.token;
           return res;
         }
       )
    },
}

const Cliente = {
  show: (): AxiosPromise<any> => Axios.get(`/cliente`),
  showId: (id:Number): AxiosPromise<any> => Axios.get(`/cliente/${id}`),
  new: (data: ICliente): AxiosPromise<ICliente> => Axios.post('/cliente', data, true),
  update: (data: ICliente): AxiosPromise<ICliente> => Axios.put('/cliente', data, true),
  delete: (data: ICliente): AxiosPromise<ICliente> => Axios.delete('/cliente', data, true),
}

const Departamento = {
  show: (): AxiosPromise<any> => Axios.get(`/departamento`),
  showId: (id:Number): AxiosPromise<any> => Axios.get(`/departamento/${id}`),
  new: (data: IDepartamento): AxiosPromise<IDepartamento> => Axios.post('/departamento', data, true),
  update: (data: IDepartamento): AxiosPromise<IDepartamento> => Axios.put('/departamento', data, true),
  delete: (data: IDepartamento): AxiosPromise<IDepartamento> => Axios.delete('/departamento', data, true),
}

export default {
  Auth,
  Cliente,
  Departamento  
}
