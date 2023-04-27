console.log("Hello from Final Project")
function onValidateForm(event) {
    console.log(event)
    event.preventDefault()
}
const name = document.getElementById('name').value;
console.log(name)
if (name == '')