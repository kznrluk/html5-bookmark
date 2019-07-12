import Button from './Button.js';
import PostBookmark from '../../API/PostBookmark.js';

export default class EditForm {
    static createDOM(targetId, viewer) {
        const form = document.createElement('form');
        const inputName = document.createElement('input');
        const inputUrl = document.createElement('input');
        const submit = document.createElement('input');

        const [ { innerText: name }, { innerText: url } ] = viewer.children;
        inputName.value = name;
        inputUrl.value = url;

        submit.setAttribute('value', 'submit');
        submit.setAttribute('type', 'submit');
        form.setAttribute('class', 'editor');
        form.append(inputName, inputUrl, submit);

        form.addEventListener('submit', (event) => this.onSubmit(event, targetId));
        return form;
    }

    static onSubmit(event, id) {
        event.preventDefault();
        const [ { value: name }, { value: url } ] = event.currentTarget;
        PostBookmark.edit(id, name, url).then(r => {
            const submitted = new Event('BookmarkChanged');
            event.target.dispatchEvent(submitted);
        });
    }
}
