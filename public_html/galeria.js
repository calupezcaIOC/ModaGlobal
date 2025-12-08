/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", function() {
    const imatges = document.querySelectorAll(".galeria-item");
    
    imatges.forEach(function(img) {
        img.addEventListener('click', function() {
            if(this.style.transform === 'scale(2)') {
                this.style.transform = "scale(1)";
            } else {
                this.style.transform = "scale(2)";
                this.style.transition = "transform 0.3s ease";
            }
        });
    });
});
