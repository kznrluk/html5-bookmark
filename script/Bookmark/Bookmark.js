import View from './View/View.js';
import GetBookmark from './API/GetBookmark.js';

export default class Bookmark {
    constructor(dom) {
        window.getList = [{ id: 1, name: 'ほげ', url: 'http://google.com', addedDay: '10290938' }];
        this.dom = dom;
        this.renderApp();
    }

    async renderApp() {
        const data = await GetBookmark.getList();
        const view = View.createDOM(data);
        view.addEventListener('BookmarkSubmitted', e => this.renderApp(e), true);
        this.dom.innerHTML = '';
        this.dom.append(view);
    }
}
