/* blur event for all input fields in form */
document.querySelectorAll("#form input").forEach(function(element) {
    element.addEventListener('blur', function() {
        // if input field passes validation remove the error class, else add it
        if(this.checkValidity())
            this.classList.remove('error-input');
        else
            this.classList.add('error-input');
    });
});

/* submit event on form */
document.querySelector("#form").addEventListener('submit', function(e) {
    // if form has not passed validation 
    if(!this.checkValidity()) {
        // check validation for each input field inside the form
        // if input field is valid then remove the error class, else add it
        this.querySelectorAll("input").forEach(function(element) {
            if(element.checkValidity())
                element.classList.remove('error-input');
            else
                element.classList.add('error-input');
        });

        alert('Error');
        e.preventDefault();
    }
});