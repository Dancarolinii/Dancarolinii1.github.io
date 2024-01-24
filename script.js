document.addEventListener('DOMContentLoaded', function () {
    const researchTab = document.getElementById('research-tab');
    const miscellaneousTab = document.getElementById('miscellaneous-tab');
    const researchContent = document.getElementById('research-content');
    const miscellaneousContent = document.getElementById('miscellaneous-content');

    researchTab.addEventListener('click', function () {
        researchContent.style.display = 'flex';
        miscellaneousContent.style.display = 'none';
        researchTab.classList.add('active');
        miscellaneousTab.classList.remove('active');
    });

    miscellaneousTab.addEventListener('click', function () {
        researchContent.style.display = 'none';
        miscellaneousContent.style.display = 'block';
        researchTab.classList.remove('active');
        miscellaneousTab.classList.add('active');
    });
});
