const gardenBtn = document.getElementById('garden-btn');
const hiveBtn = document.getElementById('hive-btn');

const schoolBtn = document.getElementById('school-btn');
const familyBtn = document.getElementById('family-btn');
const companyBtn = document.getElementById('company-btn');
const collectiveBtn = document.getElementById('collective-btn');

//contenedor de planes
const planContent = document.getElementById("plans-container-all")

//btn de planes gardern
const gardenPlanBtn = document.getElementById('set-btns-garden');
const hivePlanBtn = document.getElementById('set-btns-hive');


// Estos son los botodes respectivos de Jardín y Colmena
gardenBtn.addEventListener('click', function() {
    // document.getElementById('garden').style.display = 'block';
    // document.getElementById('hive').style.display = 'none';
    
    gardenBtn.style.backgroundColor = "#00a726";
    gardenBtn.style.color = "#fff";

    hiveBtn.style.backgroundColor = "#fff";
    hiveBtn.style.color = "#333";

    gardenPlanBtn.style.display = "flex";
    hivePlanBtn.style.display = "none";

    planContent.style.backgroundColor = "#00a726";


});

hiveBtn.addEventListener('click', function() {
    // document.getElementById('garden').style.display = 'none';
    // document.getElementById('hive').style.display = 'block';
    
    gardenBtn.style.backgroundColor = "#fff";
    gardenBtn.style.color = "#333";

    hiveBtn.style.backgroundColor = "#ffb000";
    hiveBtn.style.color = "#fff";


    gardenPlanBtn.style.display = "none";
    hivePlanBtn.style.display = "flex";

    planContent.style.backgroundColor = "#ffb000";
});


// Estos son los botones respectivos los planes de Escuela, Familia, Empresa y Colectivo

schoolBtn.addEventListener('click', function() {

    schoolBtn.classList.add('active2');
    familyBtn.classList.remove('active2');
    companyBtn.classList.remove('active2');
    collectiveBtn.classList.remove('active2');


    planContent.innerHTML = "";

    planContent.innerHTML = `
    
    `


    // Contenido de los planes de Jardín
    
});

familyBtn.addEventListener('click', function() {

    schoolBtn.classList.remove('active2');
    familyBtn.classList.add('active2');
    companyBtn.classList.remove('active2');
    collectiveBtn.classList.remove('active2');
});

companyBtn.addEventListener('click', function() {

    schoolBtn.classList.remove('active2');
    familyBtn.classList.remove('active2');
    companyBtn.classList.add('active2');
    collectiveBtn.classList.remove('active2');
});

collectiveBtn.addEventListener('click', function() {
    
    schoolBtn.classList.remove('active2');
    familyBtn.classList.remove('active2');
    companyBtn.classList.remove('active2');
    collectiveBtn.classList.add('active2');
});


