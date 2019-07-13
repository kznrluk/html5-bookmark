import AddForm from './form/AddForm.js';
import BookmarkList from './list/BookmarkList.js';

export default class View {
    static createDOM(data) {
        const view = document.createElement('div');
        view.appendChild(BookmarkList.createDOM(data));
        view.appendChild(AddForm.createDOM());
        return view;
    }
}
