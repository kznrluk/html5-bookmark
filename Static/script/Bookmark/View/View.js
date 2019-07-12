import AddForm from './AddForm/AddForm.js';
import BookmarkList from './BookmarkList/BookmarkList.js';

export default class View {
    static createDOM(data) {
        const view = document.createElement('div');
        view.appendChild(BookmarkList.createDOM(data));
        view.appendChild(AddForm.createDOM());
        return view;
    }
}
