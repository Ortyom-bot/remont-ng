document.addEventListener('DOMContentLoaded', async () => {
    const { pageCalc } = await import('./templates/calc.js');
    const { pageMain } = await import('./templates/main.js');
    const { pagePrice } = await import('./templates/price.js');

    const contentDiv = document.getElementById('root');
    const page1Btn = document.getElementById('btnHome');
    const page2Btn = document.getElementById('btnCalc');
    const page3Btn = document.getElementById('btnPrice');
    loadPage(pageMain);

    page1Btn.addEventListener('click', () => {
        loadPage(pageMain);
    });

    page2Btn.addEventListener('click', () => {
        loadPage(pageCalc);
    });

    page3Btn.addEventListener('click', () => {
        loadPage(pagePrice);
    });

    function loadPage(content) {
        contentDiv.innerHTML = `<h2>${content()}</h2>`;
    }
});
