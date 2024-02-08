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
	const heighTypeSelect = document.getElementById("heighType");
	const remontTypeSelect = document.getElementById("repairType"); 
	const scalesCheckbox = document.getElementById("scales");
	const designeProjectCheckbox = document.getElementById("designeProject");
	const enginerProjectCheckbox = document.getElementById("enginerProject");
	const podborMaterialCheckbox = document.getElementById("podborMaterial");
	const priemCheckbox = document.getElementById("priem");
	const lodgeCheckbox = document.getElementById("lodge");

  /* Рассчет вида ремонта  */
	let TypeRemontCost; 
	switch (typesRemonts) 
	{ 
		case "chernovoi": 
		TypeRemontCost = 5500; 
		break;
	 	case "kosmeticheski": 
		TypeRemontCost = 4300; 
		break;
	  case "capital": 
		TypeRemontCost = 8900; 
		break;
		case "designers": 
		TypeRemontCost = 13400;
		break; 
		default: 
		TypeRemontCost = 0; 
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

  /* Рассчет комнат */
  const selectedRepairType = repairTypeSelect.value;

  let costRepairType;
  if (selectedRepairType === "kom4") {
    costRepairType = 50000;
  } else if (selectedRepairType === "kom3") {
    costRepairType = 40000;
  } else if (selectedRepairType === "kom2") {
    costRepairType = 30000;
  } else if (selectedRepairType === "kom1") {
    costRepairType = 20000;
  } else {
    costRepairType = 0;
  }

	  /* Рассчет высоты комнат */
		const selectedHeighType = heighTypeSelect.value;

		let costHeighType;
		if (selectedHeighType === "pot4") {
			costHeighType = 50000;
		} else if (selectedHeighType === "pot3") {
			costHeighType = 40000;
		} else if (selectedHeighType === "pot2") {
			costHeighType = 30000;
		} else if (selectedHeighType === "pot1") {
			costHeighType = 20000;
		} else {
			costHeighType = 0;
		}

		/* Вид ремонат */
		const typeRemont = remontTypeSelect.value;

		let costRemontType;
		if (typeRemont === "standard") {
			costRemontType = 10000;
		} else if (typeRemont === "premium") {
			costRemontType = 20000;
		} else {
			costRemontType = 0;
		}



	let rangeCost = parseInt(rangeInput.value);
  let totalCost = rangeCost * TypeRemontCost + costRepairType + costHeighType + costRemontType + additionalCosnt;
  document.getElementById('cost').innerText = `Стоимость ремонта: ${totalCost} руб.`;
  document.getElementById('result').style.display = 'block';
}