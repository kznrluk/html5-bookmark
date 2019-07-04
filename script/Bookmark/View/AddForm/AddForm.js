import createDOMElementFromString from '../createDOMElementFromString.js';
import PostBookmark from '../../API/PostBookmark.js';

export default class AddForm {
    static createDOM() {
        const html = `
            <form id="AddForm">
                <lavel for="AddFormName">NAME</lavel>
                <input type="text" id="AddFormName">
                <lavel for="AddFormName">URL</lavel>
                <input type="url" id="AddFormUrl">
                <button id="submit">submit</button>
            </form>`;
        const node = createDOMElementFromString(html);
        node.addEventListener('submit', AddForm.submit);
        return node;
    }

    static submit(event) {
        event.preventDefault();
        const { children } = event.currentTarget;
        const { AddFormName, AddFormUrl } = children;
        const name = AddFormName.value;
        const url = AddFormUrl.value;
        PostBookmark.add(name, url);
        const submitted = new Event('BookmarkSubmitted');
        event.currentTarget.dispatchEvent(submitted);
    }
}
