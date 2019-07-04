export default class BookmarkList {
    static createDOM(data) {
        const ulElement = document.createElement('ul');
        const liElements = data.map(l => `<li>${l.name} <a href="${l.url}">${l.url}</a></li>`);
        ulElement.innerHTML = liElements.join('');
        return ulElement;
    }
}
