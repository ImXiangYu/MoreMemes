function addMyFuncBarIcon() {
    if (document.querySelector('#id-my-func-bar-icon')) return;

    const newBar = document.querySelector('.sticker-panel__bar.vue-component');
    if (!newBar) return;

    const barIconElement = document.querySelector('.bar-icon')?.cloneNode(true);
    if (!barIconElement) return;

    const iconItem = barIconElement.querySelector('.icon-item');
    const imageElement = barIconElement.querySelector('.q-svg-icon');
    const tooltip = barIconElement.querySelector('.q-tooltips');

    iconItem.id = "id-my-func-bar-icon";
    iconItem.ariaLabel = "我的功能";

    imageElement.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
      </svg>`;

    const tip = document.createElement('div');
    tip.className = 'q-tooltips__content q-tooltips__bottom q-tooltips-div';
    tip.style.cssText = 'bottom: -31px; transform: translateX(-50%); left: calc(50% + 0px);';
    const inner = document.createElement('div');
    inner.className = 'primary-content';
    inner.textContent = '这是我的按钮';
    tip.appendChild(inner);
    tooltip.appendChild(tip);

    iconItem.addEventListener('click', () => {
        alert("你点击了我！");
    });

    newBar.insertBefore(barIconElement, newBar.firstChild); // ⬅️ 改为添加到 sticker-panel__bar
}


function watchAndInjectIcon() {
    const observer = new MutationObserver(() => {
        const newBar = document.querySelector('.sticker-panel__bar.vue-component');
        if (newBar && !document.querySelector('#id-my-func-bar-icon')) {
            addMyFuncBarIcon();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}


watchAndInjectIcon();
