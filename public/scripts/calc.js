let rangeInput = document.getElementById('range');
let rangeValue = document.getElementById('range-value')

document.addEventListener('click', () => {
	calculateCost();
} );

rangeInput.addEventListener('input', function() {
  rangeValue.innerHTML = `${rangeInput.value} M<sup>2</sup>`;
  calculateCost
});

function calculateCost() {
	const typesRemonts = document.getElementById("TypeRemont").value;
  	const repairTypeSelect = document.getElementById("komnatType");
	const scalesCheckbox = document.getElementById("scales");
	const designeProjectCheckbox = document.getElementById("designeProject");
	const enginerProjectCheckbox = document.getElementById("enginerProject");
	const podborMaterialCheckbox = document.getElementById("podborMaterial");
	const priemCheckbox = document.getElementById("priem");
	const lodgeCheckbox = document.getElementById("lodge");


  /* Рассчет комнат */
  const selectedRepairType = repairTypeSelect.value;
  let costRepairType;
  if (selectedRepairType === "kom4") {
    costRepairType = 4;
  } else if (selectedRepairType === "kom3") {
    costRepairType = 3;
  } else if (selectedRepairType === "kom2") {
    costRepairType = 2;
  } else if (selectedRepairType === "kom1") {
    costRepairType = 1;
  } else {
    costRepairType = 0;
  }

  /* Рассчет вида ремонта  */
	let TypeRemontCost; 
	switch (true) 
	{ 
	case typesRemonts === "kosmeticheski" && costRepairType === 4: 
		TypeRemontCost = 10000;
		deadlineDay = "15-40 дней";
		break;
	case "kosmeticheski" && costRepairType === 3: 
		TypeRemontCost = 11000;
		deadlineDay = "15-40 дней";
		break;
	case typesRemonts === "kosmeticheski" && costRepairType === 2: 
		TypeRemontCost = 12000;
		deadlineDay = "15-40 дней";
		break;
	case typesRemonts === "kosmeticheski" && costRepairType === 1: 
		TypeRemontCost = 13000;
		deadlineDay = "15-40 дней";
		break;
	case typesRemonts === "capital" && costRepairType === 4: 
		TypeRemontCost = 22000;
		deadlineDay = "2-3 месяца";
		break;
	case typesRemonts === "capital" && costRepairType === 3: 
		TypeRemontCost = 23000;
		deadlineDay = "2-3 месяца";
		break;
	case typesRemonts === "capital" && costRepairType === 2: 
		TypeRemontCost = 24000; 
		deadlineDay = "2-3 месяца";
		break;
	case typesRemonts === "capital" && costRepairType === 1: 
		TypeRemontCost = 25000;
		deadlineDay = "2-3 месяца"; 
		break;
	case typesRemonts === "designers" && costRepairType === 4: 
		TypeRemontCost = 22000;
		deadlineDay = "3-6 месяца";
		break;
	case typesRemonts === "designers" && costRepairType === 3: 
		TypeRemontCost = 23000; 
		deadlineDay = "3-6 месяца";
		break;
	case typesRemonts === "designers" && costRepairType === 2: 
		TypeRemontCost = 24000; 
		deadlineDay = "3-6 месяца";
		break;
	case typesRemonts === "designers" && costRepairType === 1: 
		TypeRemontCost = 25000;
		deadlineDay = "3-6 месяца"; 
		break;
	default: 
		TypeRemontCost = 0;
		deadlineDay = "0 дней";
	}

  /* Рассчет дополнительных работ */
  let additionalCosnt = 0; 
	if (scalesCheckbox.checked) {
		 additionalCosnt += 1000; 
	}
	
	if (designeProjectCheckbox.checked) {
		additionalCosnt += 10200; 
	}
	
	if (enginerProjectCheckbox.checked) {
		additionalCosnt += 31000; 
	}
	
	if (podborMaterialCheckbox.checked) {
		additionalCosnt += 12000; 
	}
	
	if (priemCheckbox.checked) {
		additionalCosnt += 4000; 
	}
	
	if (lodgeCheckbox.checked) {
		additionalCosnt += 3000; 
	}


	let rangeCost = parseInt(rangeInput.value);
  let totalCost = rangeCost * TypeRemontCost + additionalCosnt;
  document.getElementById('cost').innerText = `Стоимость ремонта: ${totalCost} руб.`;
  document.getElementById('result').style.display = 'block';
  document.getElementById('deadline-job').innerText = `Примерный срок ремонта: ${deadlineDay}`;
}