document.addEventListener('DOMContentLoaded', function() {
    let details = document.getElementsByClassName('details')
    details = details || [];
    for (let i = 0; i < details.length; i++) {
        let element = details[i]
        const summary = element.getElementsByClassName('details-summary')[0];
        if (summary) {
            summary.addEventListener('click', () => {
                element.classList.toggle('open');
            }, false);
        }
    }
});
