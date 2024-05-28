document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll('header ul li a');

    for(const link of links){
        link.addEventListener('click', function(e){
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        })
    }

    const topBtn = document.getElementById('top');

    topBtn.addEventListener('click', function(e){
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    })
})