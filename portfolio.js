document.ready(function () {
    window.scroll(function () {
        
        if (this.scrollTop() > 550) {
            document.getElementByClassName("navbar").classList.add("solid");
            document.getElementByClassName("back-to-top").classList.add("visible");
        } else {
            document.getElementByClassName("navbar").classList.remove("solid");
            document.getElementByClassName("back-to-top").classList.remove("visible");
        }

    });
});


document.ready(function () {
    
    $("a").addEventListener('click', (event) => {

        
        if (this.hash !== "") {
            
            event.preventDefault();

            
            let hash = this.hash;

            
            
            $('html, body').animate({
                scrollTop: hash.offset().top
            }, 800, function () {

                
                window.location.hash = hash;
            });
        } 
    });
});