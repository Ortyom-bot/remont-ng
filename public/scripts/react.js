document.addEventListener('DOMContentLoaded', async () => {
    const { pageCalc } = await import('./templates/calc.js');
    const { pageMain } = await import('./templates/main.js');
    const { pagePrice } = await import('./templates/price.js');

    const contentDiv = document.getElementById('root');
    const page1Btn = document.getElementById('btnHome');
    const page2Btn = document.getElementById('btnCalc');
    const page3Btn = document.getElementById('btnPrice');

		/* Переменная для скрытия Калькулятора */
		const toggledClacMain = document.querySelector('.main-calc');

		const toggledMain = document.querySelector('.main');

		/* Функция, которая страбатывает один раз при загрузки стартовой страницы */
		function defualtState() {
			loadPage(pageMain);
			highPageState()
		}

		/* Функция, которая по умолчанию будет прокручивать страницу наверх (использовать на всех страницах!!!)  */
		function highPageState() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}

		/* Загрузка ГЛАВНОЙ страницы */
    page1Btn.addEventListener('click', () => {
        loadPage(pageMain);
				highPageState()
				toggledClacMain.style.display = 'none';
				toggledMain.style.display = 'block'
		});

		/* Загрузка КАЛЬКУЛЯТОР страницы */
    page2Btn.addEventListener('click', () => {
        loadPage(pageCalc);
				highPageState()
				toggledClacMain.style.display = 'block';
				toggledMain.style.display = 'none'
    });

		/* Загрузка ПРАЙС страницы */
    page3Btn.addEventListener('click', () => {
        loadPage(pagePrice);
				highPageState()
				toggledClacMain.style.display = 'none';
				toggledMain.style.display = 'none'
    });

    function loadPage(content) {
        contentDiv.innerHTML = `<h2>${content()}</h2>`;
    }

		defualtState();
});
