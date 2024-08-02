const gardenBtn = document.getElementById('garden-btn');
const hiveBtn = document.getElementById('hive-btn');

const schoolBtn = document.getElementById('school-btn');
const familyBtn = document.getElementById('family-btn');
const companyBtn = document.getElementById('company-btn');
const collectiveBtn = document.getElementById('collective-btn');


// Estos son los botodes respectivos de Jardín y Colmena
gardenBtn.addEventListener('click', function() {
    // document.getElementById('garden').style.display = 'block';
    // document.getElementById('hive').style.display = 'none';
    
    gardenBtn.classList.add('active');
    hiveBtn.classList.remove('active');
});

hiveBtn.addEventListener('click', function() {
    // document.getElementById('garden').style.display = 'none';
    // document.getElementById('hive').style.display = 'block';
    
    hiveBtn.classList.add('active');
    gardenBtn.classList.remove('active');
});


// Estos son los botones respectivos los planes de Escuela, Familia, Empresa y Colectivo

schoolBtn.addEventListener('click', function() {

    schoolBtn.classList.add('active2');
    familyBtn.classList.remove('active2');
    companyBtn.classList.remove('active2');
    collectiveBtn.classList.remove('active2');
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


