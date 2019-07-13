import PostBookmark from '../../api/PostBookmark.js';

export default class Button {
    static createDeleteButton(targetId) {
        return Button.createButtonFromString('✖', targetId, (event) => {
            const { currentTarget } = event;
            PostBookmark.delete(currentTarget.getAttribute('targetId'));
            const submitted = new Event('BookmarkChanged');
            event.currentTarget.dispatchEvent(submitted);
        })
    }

    static createEditButton(viewer, editor) {
        return Button.createButtonFromString('✒', null, (event) => {
            const button = event.currentTarget;
            button.textContent = button.textContent === '✒' ? 'キャンセル' : '✒';

            const inEditorMode = button.textContent !== '✒';
            viewer.style.display = (inEditorMode) ? 'none' : 'inline';
            editor.style.display = (!inEditorMode) ? 'none' : 'inline';
        });
    }

    static createButtonFromString(str, targetId, func) {
        const button = document.createElement('button');
        button.setAttribute('targetId', targetId);
        button.textContent = str;
        button.addEventListener('click', func);
        return button;
    }
}
