
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const click = document.getElementById('submit')
  click.addEventListener('click', function(event){
    //let submit = 'preventDefault.'
    event.preventDefault();
    return 'defaultPrevented';
  });
});
