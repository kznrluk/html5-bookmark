export default class PostBookmark {
    static add(name, url) {
        const param = new URLSearchParams();
        param.append('name', name);
        param.append('url', url);
        return this.doPost('/addBookmark', param);
    }

    static delete(id) {
        const param = new URLSearchParams();
        param.append('id', id);
        return this.doPost('/deleteBookmark', param);
    }

    static edit(id, name, url) {
        const param = new URLSearchParams();
        param.append('id', id);
        param.append('name', name);
        param.append('url', url);
        return this.doPost('/editBookmark', param);
    }

    static doPost(url, body) {
        return fetch(url, { method: 'POST', body });
    }
}
