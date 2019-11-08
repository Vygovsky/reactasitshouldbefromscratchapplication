export default class Services {
    constructor() {
        this._apiBase = "http://localhost:8080";
    }

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok) {
            throw new Error(`Cloud not fetch ${url}; received ${response.status} `)
        }
        return await response.json();
    };

    getAllCards = async () => {
        return await this.getResource('/api/users');
    };

    removeCardsById = async (id) => {
        return await fetch(`${this._apiBase}/api/users/delete/` + id, {method: 'DELETE'});
    };

    getCardsById = async (id) => {
        return await fetch(`${this._apiBase}/api/users/` + id, {method: 'GET'});
    }
}