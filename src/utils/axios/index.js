import axios from 'axios'

export const Get = async (...queries) => {
    let { url, endpoint, body, headers } = queries[0]
    let request = await axios.get(url + endpoint, { params: body, headers: headers })
    return request.data
}

export const Post = async (...params) => {
    let { url, endpoint, body, headers } = params[0]
    let request = await axios.post(url + endpoint, body, { headers: headers })
    return request.data
}

export const Patch = async (...params) => {
    let { url, endpoint, body, headers } = params[0]
    let request = await axios.patch(url + endpoint, body, { headers: headers })
    return request.data
}

export const Delete = async (...params) => {
    let { url, endpoint, headers } = params[0]
    let request = await axios.delete(url + endpoint, { headers: headers })
    return request.data
}