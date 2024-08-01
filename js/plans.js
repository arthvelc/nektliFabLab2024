const gardenBtn = document.getElementById('garden-btn');
const hiveBtn = document.getElementById('hive-btn');

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


