function addMyFuncBarIcon() {
    if (document.querySelector('#id-my-func-bar-icon')) return;

    // 这里的stickerBar是点击表情后弹出的页面的bar
    const stickerBar = document.querySelector('.tabs-container');
    if (!stickerBar) return;

    // 创建新的图标元素
    const newIconContainer = document.createElement('div');
    newIconContainer.className = 'tabs-container-item';
    newIconContainer.id = 'id-my-func-bar-icon'; // 添加唯一ID
    newIconContainer.setAttribute('data-active-packageid', '4');
    newIconContainer.setAttribute('data-v-1233ffbd', ''); // 为了让属性与旁边的元素保持一致

    const newIcon = document.createElement('i');
    newIcon.className = 'q-svg-icon q-icon vue-component';
    newIcon.title = '本地表情包';
    newIcon.style.cssText = 'width: 24px; height: 24px; --340fd034: var(--icon_primary);';

    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('viewBox', '0 -960 960 960');
    svgElement.innerHTML = `<path d="M680-160v-640q33 0 56.5 23.5T760-720v480q0 33-23.5 56.5T680-160ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h360q33 0 56.5 23.5T600-800v640q0 33-23.5 56.5T520-80H160Zm680-160v-480q25 0 42.5 17.5T900-660v360q0 25-17.5 42.5T840-240Zm-680 80h360v-640H160v640Zm0-640v640-640Z"/>`;

    newIcon.appendChild(svgElement);
    newIconContainer.appendChild(newIcon);

    // 插入到第一个 .tabs-container-item 前
    const firstItem = stickerBar.querySelector('.tabs-container-item');
    if (firstItem) {
        stickerBar.insertBefore(newIconContainer, firstItem);
    }

    // 添加点击事件
    newIconContainer.addEventListener('click', () => {
        alert("你点击了我！");
    });
}

function watchAndInjectIcon() {
    const observer = new MutationObserver(() => {
        const stickerBar = document.querySelector('.tabs-container');
        if (stickerBar && !document.querySelector('#id-my-func-bar-icon')) {
            addMyFuncBarIcon();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

watchAndInjectIcon();