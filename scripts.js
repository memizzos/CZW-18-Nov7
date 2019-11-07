const random = document.querySelector("#random-module");
const random_min = random.querySelector("#random-min");
const random_max = random.querySelector("#random-max");
const random_generate = random.querySelector("#random-generate");
const random_solution = random.querySelector("#random-solution");


function rand(min, max){
    return Math.floor( Math.random()*(max-min+1) ) + min;
}
function randGenerate(){
    const min = parseInt(random_min.value);
    const max = parseInt(random_max.value);
    random_solution.textContent = rand(min,max);
}
random_generate.addEventListener('click', randGenerate);

const silnja = document.querySelector("#silnia-module");
const silnia_num = document.querySelector('#silnia-number');
const silnia_solution = document.querySelector('#silnia-solution');
const silnia_generate = silnja.querySelector("#silnia-generate");

function silnia(n){
    if(n <= 0) return 1;
    return n * silnia(n-1);
}
function silniaGenerate(){
    const n = parseInt(silnia_num.value);
    silnia_solution.innerText = silnia(n);
}
silnia_generate.addEventListener('click', silniaGenerate);