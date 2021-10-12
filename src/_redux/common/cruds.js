import axios from "axios";

export function search(identifier) {
    return axios.post(`/search`, {type: 'identifier', value: identifier});
}