function includeHTML() {
    let elements = document.querySelectorAll('[w3-include-html]');
    elements.forEach(function (element) {
        let file = element.getAttribute("w3-include-html");
        if (file) {
            fetch(file)
                .then(response => {
                    if (response.ok) return response.text();
                    throw new Error('File not found');
                })
                .then(data => {
                    element.outerHTML = data;
                })
                .catch(error => console.log(error));
        }
    });
}

document.addEventListener("DOMContentLoaded", includeHTML);
