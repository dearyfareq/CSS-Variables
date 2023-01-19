const inputs = document.querySelectorAll('.input');

function handleUpdate() {
    //why didnt manually placing "px" work instead of this.dataset?
  const suffix = this.dataset.size || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));