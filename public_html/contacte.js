/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", function() {
    
    const formulari = document.getElementById("formulari-contacte");
    
    if(formulari) {
        formulari.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const nom = document.getElementById("nom").value;
            const email = document.getElementById("email").value;
            const missatge = document.getElementById("missatge").value;
            
            formulari.reset();
        });
    }
});
