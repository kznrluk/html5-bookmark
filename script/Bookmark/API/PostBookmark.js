export default class PostBookmark {
    doPost(formData, url) {
        return fetch(url, { body: formData, method: 'POST' });
    }

    static add(name, url) {
        window.getList.push({ id: window.getList.length++, name, url, addedDay: '10290938' })
    }
}
