//
window.onload = () => {
    if(window.scrollY >= 100){
        document.querySelector("header").style.backgroundColor = "white";
        document.querySelector("header").classList.add("pt-3");
        document.querySelector("header").classList.add("pb-3");
        document.querySelector("header .logo .icon").classList.add("black");
        document.querySelector("header .pages ").classList.add("black");
        document.querySelector("header  .add").classList.add("black");
    }
    else{
        document.querySelector("header").style.backgroundColor = "transparent";
        document.querySelector("header").classList.remove("pt-3");
        document.querySelector("header").classList.remove("pb-3");
        document.querySelector("header .logo .icon").classList.remove("black");
        document.querySelector("header .pages ").classList.remove("black");
        document.querySelector("header  .add").classList.remove("black");
    }
};


//formath the toggel 
document.querySelector("header .togg").addEventListener("click",function(){
    document.querySelector("header .links .pages").classList.toggle("open");
    document.querySelector("header .links").classList.toggle("open");
})
document.querySelectorAll("header .pages a").forEach(function(a){
    a.addEventListener("click",function(){
            document.querySelector("header .links .pages").classList.remove("open");
            document.querySelector("header .links ").classList.remove("open");

    })
})

// formath the header color changeing
window.onscroll = () => {
    if(window.scrollY >= 100){
        document.querySelector("header").style.backgroundColor = "white";
        document.querySelector("header").classList.add("pt-3");
        document.querySelector("header").classList.add("pb-3");
        document.querySelector("header .logo .icon").classList.add("black");
        document.querySelector("header .pages ").classList.add("black");
        document.querySelector("header  .add").classList.add("black");
    }
    else{
    document.querySelector("header").style.backgroundColor = "transparent";
    document.querySelector("header").classList.remove("pt-3");
    document.querySelector("header").classList.remove("pb-3");
    document.querySelector("header .logo .icon").classList.remove("black");
    document.querySelector("header .pages ").classList.remove("black");
    document.querySelector("header  .add").classList.remove("black");
    }
};


//format the category part 
document.querySelectorAll(".category .holder .sections .section").forEach((s,ind) => {
    s.addEventListener("click", ( ) => {
        document.querySelectorAll(".category .holder .sections .section").forEach((e) => {
            e.classList.remove("active");

            document.querySelectorAll(".category .holder .show-sec .slide").forEach(e => {
                e.classList.add("hidden");

                setTimeout(() => {
                    e.classList.remove("active");
                    e.classList.remove("hidden");
                    document.querySelectorAll(".category .holder .show-sec .slide")[ind].classList.add("active");

                },300)
            });
            // document.querySelectorAll(".category .holder .show-sec .slide")[ind].classList.add("active");
        })
    s.classList.add("active");

    })
})


