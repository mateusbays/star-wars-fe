import axios from 'axios';

export default class HttpRequest {

    static _basePath = 'https://swapi.dev/api/';

    static get(url) {
        return axios.get(HttpRequest._basePath + url)
            .then((data, error) => {
                if (error) {
                    return error;
                }
                return data.data;
            })
    }
}
