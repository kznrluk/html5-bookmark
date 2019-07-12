import View from './View/View.js';
import GetBookmark from './API/GetBookmark.js';

export default class Bookmark {
    constructor(dom) {
        this.dom = dom;
        this.renderApp();
    }

    async renderApp() {
        const data = await GetBookmark.getList();
        const view = View.createDOM(data);
        view.addEventListener('BookmarkChanged', e => this.renderApp(e), true);
        this.dom.innerHTML = '';
        this.dom.append(view);
    }
}
