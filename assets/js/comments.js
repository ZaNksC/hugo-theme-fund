document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#md-container')) {
        const metaEnvId = document.querySelector('meta[name="twikoo-env-id"]').getAttribute('content');
        twikoo.init({
            envId: metaEnvId,
            el: '#tcomment', // 容器元素
        });
    }
});
