export default (string) => {
    const node = document.createElement('div');
    node.innerHTML = string;
    return node.firstElementChild;
}
