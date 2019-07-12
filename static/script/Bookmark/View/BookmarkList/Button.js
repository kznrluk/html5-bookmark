import PostBookmark from '../../API/PostBookmark.js';

export default class Button {
    static createDeleteButton(targetId) {
        return Button.createButtonFromString('✖️', targetId, (event) => {
            const { currentTarget } = event;
            PostBookmark.delete(currentTarget.getAttribute('targetId'));
            const submitted = new Event('BookmarkChanged');
            event.currentTarget.dispatchEvent(submitted);
        })
    }

    static createEditButton(viewer, editor) {
        const button = document.createElement('button');
        button.textContent = '✒';
        button.addEventListener('click', (event) => {
            button.textContent = button.textContent === '✒' ? 'キャンセル' : '✒';
            const inEditorMode = button.textContent !== '✒';
            if (inEditorMode) {
                viewer.style.display = 'none';
                editor.style.display = 'inline';
            } else {
                viewer.style.display = 'inline';
                editor.style.display = 'none';
            }
        });
        return button;
    }

    static createButtonFromString(str, targetId, func) {
        const button = document.createElement('button');
        button.setAttribute('targetId', targetId);
        button.textContent = str;
        button.addEventListener('click', func);
        return button;
    }
}
