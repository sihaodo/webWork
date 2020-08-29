import axios from '../util/request'

const getRequest = function(url,params){
    return axios.get(url,params)
}

const postRequest = function(url,params){
    return axios.post(url,params)
}

export {getRequest,postRequest}