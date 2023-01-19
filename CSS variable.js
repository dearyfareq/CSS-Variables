var inputs = document.querySelectorAll('.input')

function update(){
    console.log(this.value);
    
}

inputs.forEach(function change(param){
param.addEventListener('mousemove', update)
param.addEventListener('change', update)
})