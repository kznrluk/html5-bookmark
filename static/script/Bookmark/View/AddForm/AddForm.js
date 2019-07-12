import PostBookmark from '../../API/PostBookmark.js';

export default class AddForm {
    static createDOM() {
        const addForm = document.createElement('form');
        addForm.innerHTML = `
            <lavel for="AddFormName">NAME</lavel>
            <input type="text" id="AddFormName">
            <lavel for="AddFormName">URL</lavel>
            <input type="url" id="AddFormUrl">
            <button id="submit">submit</button>
        `;

        addForm.addEventListener('submit', AddForm.submit);
        return addForm;
    }

    static submit(event) {
        event.preventDefault();
        const { children } = event.currentTarget;
        const { AddFormName, AddFormUrl } = children;
        const name = AddFormName.value;
        const url = AddFormUrl.value;
        PostBookmark.add(name, url).then(r => {
            const submitted = new Event('BookmarkChanged');
            event.target.dispatchEvent(submitted);
        });
    }
}
