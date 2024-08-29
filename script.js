
function clicked() {
    alert("it works!!!");
}



function scrollToSection(id) {
    
    const target = document.getElementById(id);

    
    target.scrollIntoView({ behavior: 'smooth' });
}

