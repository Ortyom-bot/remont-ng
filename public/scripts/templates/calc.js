export function pageCalc() {
    return `
        <%- include('templates/header.ejs') %>

        <main>
            <h1>Калькулятор стоимости ремонта</h1>
            <fieldset style="max-width: 300px; margin: 10px;">
                <legend>ВИД РЕМОНТА</legend>
            
                <label for="TypeRemont">Тип ремонта:</label>
                <select id="TypeRemont" required>
                        <option value="chernovoi">Черновой</option>
                        <option value="kosmeticheski">Косметический</option>
                        <option value="capital">Капитальный</option>
                        <option value="designers">Дизайнерский</option>
                </select>

            </fieldset>

            <fieldset style="max-width: 300px; margin: 10px;">
                <legend>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</legend>
            
                <div>
                    <input type="checkbox" id="scales" name="plan" checked />
                    <label for="plan">Перепланировка</label>
                </div>
            
                <div>
                    <input type="checkbox" id="designeProject" name="horns" />
                    <label for="designeProject">Дизайн-проект</label>
                </div>

                <div>
                    <input type="checkbox" id="enginerProject" name="horns" />
                    <label for="enginerProject">Инженерный проект</label>
                </div>

                <div>
                    <input type="checkbox" id="podborMaterial" name="horns" />
                    <label for="podborMaterial">Подбор чистовых материалов</label>
                </div>

                <div>
                    <input type="checkbox" id="priem" name="horns" />
                    <label for="priem">Приёмка квартиры от застройщика</label>
                </div>

                <div>
                    <input type="checkbox" id="lodge" name="horns" />
                    <label for="lodge">Ремонт лоджии</label>
                </div>
                
            </fieldset>

            <br>
            <br>

            <label for="range">Выберите квадратные метры:</label>
            <input type="range" id="range" name="range" min="20" max="300" step="1">
            <span id="range-value">150 M <sup>2</sup></span>
            
            <br>
            <br>

            <fieldset style="max-width: 300px; margin: 10px;">
                <legend>Комнаты</legend>
            
                <label for="komnatType">Количество комнат:</label>
                <select id="komnatType" required>
                    <option value="kom1">1</option>
                    <option value="kom2">2</option>
                    <option value="kom3">3</option>
                    <option value="kom4">4+</option>
                </select>

            </fieldset>

            <br>

            <fieldset style="max-width: 300px; margin: 10px;">
                <legend>Потолок</legend>
            
                <label for="heighType">Выоста потолка:</label>
                <select id="heighType" required>
                        <option value="pot1">2,5m</option>
                        <option value="pot2">2,7m</option>
                        <option value="pot3">3m</option>
                        <option value="pot4">3,2m</option>
                </select>

            </fieldset>

            <br>
            <br>

            <label for="repairType">Тип ремонта:</label>
            <select id="repairType" required>
                    <option value="standard">Стандартный</option>
                    <option value="premium">Премиум</option>
            </select>

            <br>
            <br>
            
            <button type="button" onclick="calculateCost()">Рассчитать стоимость</button>

            <div id="result">
                <h2>Результат:</h2>
                <p id="cost">Стоимость ремонта: 0 руб.</p>
            </div>
        </main>`;
}