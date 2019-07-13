import Button from './Button.js';
import EditForm from './EditForm.js';

export default class BookmarkList {
    static createDOM(data) {
        const ulElement = document.createElement('ul');
        const liElements = data.map(l => {
            const liElement = document.createElement('li');
            liElement.setAttribute('class', 'record');

            const viewer = document.createElement('span');
            viewer.setAttribute('class', 'view');
            viewer.innerHTML = `
                <span class="name">${l.name}</span>
                <a class="url" href="${l.url}">${l.url}</a>
            `;

            const editor = EditForm.createDOM(l.id, viewer);
            editor.style.display = 'none';
            liElement.append(
                viewer,
                editor,
                Button.createEditButton(viewer, editor),
                Button.createDeleteButton(l.id),
            );
            return liElement;
        });
        ulElement.append(...liElements);
        return ulElement;
    }
}
