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
    
    //cambiamos el color de los botones
    gardenBtn.style.backgroundColor = "#00a726";
    gardenBtn.style.color = "#fff";

    hiveBtn.style.backgroundColor = "#fff";
    hiveBtn.style.color = "#333";

    //mostramos el contenido de los planes de jardín
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


// Estos son los botones respectivos de Escuela, Familia, Empresa y Colectivo



schoolBtn.addEventListener('click', function() {

    schoolBtn.classList.add('active2');
    familyBtn.classList.remove('active2');
    companyBtn.classList.remove('active2');
    collectiveBtn.classList.remove('active2');


    planContent.innerHTML = "";

    planContent.innerHTML = `

    <div class="image-container">
              <img src="./img/Escuela.png" alt="">
            </div>

            <div class="text-container">
              <p class="text-plan">Become an environmental change agent. Adopt a garden to “Retoñando Vida" and contribute to biodiversity.</p>

              <div class="span-container-main">
                <span class="span-content">
                  <img src="./img/icons/Sprout.png" alt="">
                  <p>Experience in creating their Garden</p>
                </span>
  
                <span class="span-content">
                  <img src="./img/icons/Sprout.png" alt="">
                  <p>Environmental education workshops</p>
                </span>
  
                <span class="span-content">
                  <img src="./img/icons/Sprout.png" alt="">
                  <p>Collective care of their Garden</p>
                </span>
  
                <span class="span-content">
                  <img src="./img/icons/Sprout.png" alt="">
                  <p>Distribution of their harvest</p>
                </span>
              </div>

              <div class="plans-options">
                <p>Adopt to</p>
                <button class="btn-place">6 Months</button>
                <button class="btn-place" >1 Year</button>
                <button class="btn-place">3 Years</button>
                <button class="btn-place">4 Years</button>
              </div>
  
              <button class="adopt-btn">Adopt with $44</button>
              
            </div>
    `;




    // Contenido de los planes de Jardín
    
});

familyBtn.addEventListener('click', function() {

    schoolBtn.classList.remove('active2');
    familyBtn.classList.add('active2');
    companyBtn.classList.remove('active2');
    collectiveBtn.classList.remove('active2');

    planContent.innerHTML = "";

    planContent.innerHTML = `
    <div class="image-container">
    <img src="./img/Escuela.png" alt="">
  </div>

  <div class="text-container">
    <p class="text-plan">Become an environmental change agent. Adopt a garden to “Retoñando Vida" and contribute to biodiversity.</p>

    <div class="span-container-main">
      <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Experience in creating their Garden</p>
      </span>

      <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Adoption certificate</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Training for garden care</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Distribution of production and harvest</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Membership for two members in community workshops</p>
    </span>
    </div>

    <div class="plans-options">
      <p>Adopt to</p>
      <button class="btn-place">6 Months</button>
      <button class="btn-place" >1 Year</button>
      <button class="btn-place">3 Years</button>
      <button class="btn-place">4 Years</button>
    </div>

    <button class="adopt-btn">Adopt whith $44</button>
    
  </div>
    `;


});

companyBtn.addEventListener('click', function() {

    schoolBtn.classList.remove('active2');
    familyBtn.classList.remove('active2');
    companyBtn.classList.add('active2');
    collectiveBtn.classList.remove('active2');

    planContent.innerHTML = "";

    planContent.innerHTML = `

    <div class="image-container">
    <img src="./img/Colectivo.png" alt="">
  </div>

  <div class="text-container">
    <p class="text-plan">Become an environmental change agent. Adopt a garden to “Retoñando Vida" and contribute to biodiversity.</p>

    <div class="span-container-main">
      <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Experience in creating their Garden</p>
      </span>

      <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Physical and digital recognition</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Strengthening of business culture</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Beekeeping experience</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Personalization of Garden and beehive</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Amenities derived from the beehive (5 kg of honey, soaps, propolis)</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Adoption certificate</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Experience in creating their "Jardín Retoñando Vida"</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Environmental awareness workshop</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Harvest basket from their own Garden</p>
    </span>
    
    </div>

    <div class="plans-options">
      <p>Adopt to</p>
      <button class="btn-place">6 Months</button>
      <button class="btn-place" >1 Year</button>
      <button class="btn-place">3 Years</button>
      <button class="btn-place">4 Years</button>
    </div>

    <button class="adopt-btn">Adopt whith $44</button>
    
  </div>
    `;

    
});

collectiveBtn.addEventListener('click', function() {
    
    schoolBtn.classList.remove('active2');
    familyBtn.classList.remove('active2');
    companyBtn.classList.remove('active2');
    collectiveBtn.classList.add('active2');

    planContent.innerHTML = "";

    planContent.innerHTML = `
    <div class="image-container">
    <img src="./img/Colectivo.png" alt="">
  </div>

  <div class="text-container">
    <p class="text-plan">Become an environmental change agent. Adopt a garden to “Retoñando Vida" and contribute to biodiversity.</p>

    <div class="span-container-main">
      <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Experience in creating their Garden</p>
      </span>

      <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Experience in creating their Garden</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Training and care for their Garden</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Physical and digital recognition</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Invitation to acquire a beehive and its benefits</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Harvest basket from their own garden</p>
    </span>
    
    <span class="span-content">
        <img src="./img/icons/Sprout.png" alt="">
        <p>Environmental awareness</p>
    </span>
    
    
    </div>

    <div class="plans-options">
      <p>Adopt to</p>
      <button class="btn-place">6 Months</button>
      <button class="btn-place" >1 Year</button>
      <button class="btn-place">3 Years</button>
      <button class="btn-place">4 Years</button>
    </div>

    <button class="adopt-btn">Adopt whith $44</button>
    
  </div>
    `;
});




