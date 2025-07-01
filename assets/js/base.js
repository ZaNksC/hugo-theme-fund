window.setMsg = (msg) => {
    const text = document.querySelector('#header-center-text');
    text.innerText = msg;
    const container = document.querySelector('.header-center-board');
    if (container.classList.contains('hidden')) {
        container.classList.replace('hidden', 'show');
    } else {
        container.classList.add('show');
    }
}

window.removeMsg = () => {
    const container = document.querySelector('.header-center-board');
    container.classList.replace('show', 'hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-container');

    // 切换主菜单
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        navContainer.classList.toggle('show');
    });

    // 点击外部区域关闭菜单
    document.addEventListener('click', function(e) {
        if (!navContainer.contains(e.target) && !menuBtn.contains(e.target)) {
            navContainer.classList.remove('show');
        }
    });
});
