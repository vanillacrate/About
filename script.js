/* =====================================================
   VanillaCrate
   Premium JavaScript
=====================================================*/

// Scroll Reveal
const revealElements = document.querySelectorAll(
"section, .card, .announcement, .community-box div"
);

function reveal(){
    const trigger = window.innerHeight * 0.85;
    revealElements.forEach(el=>{
        const top = el.getBoundingClientRect().top;
        if(top < trigger){
            el.classList.add("show");
        }else{
            el.classList.remove("show");
        }
    });
}

reveal();
window.addEventListener("scroll", reveal);

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const top = section.offsetTop - 120;
        if(window.pageYOffset >= top){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }
    });
});

// Floating Particles
const particleContainer=document.createElement("div");
particleContainer.id="particles";
document.body.appendChild(particleContainer);

for(let i=0;i<45;i++){
    const p=document.createElement("span");
    const size=Math.random()*7+3;
    p.style.width=size+"px";
    p.style.height=size+"px";
    p.style.left=Math.random()*100+"vw";
    p.style.animationDuration=(8+Math.random()*12)+"s";
    p.style.animationDelay=(Math.random()*8)+"s";
    particleContainer.appendChild(p);
}

// Mouse Glow
const glow=document.createElement("div");
glow.id="mouseGlow";
document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{
    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";
});

// Hero fade
const hero=document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{
    if(hero){
        const y=window.scrollY;
        hero.style.opacity=1-y/700;
        hero.style.transform=`translateY(${y*0.25}px)`;
    }
});

// Card tilt
document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mousemove",(e)=>{
        const rect=card.getBoundingClientRect();
        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;
        const rotateY=(x-rect.width/2)/18;
        const rotateX=(rect.height/2-y)/18;
        card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener("mouseleave",()=>{
        card.style.transform="";
    });
});

// Hero glow
const heroTitle=document.querySelector(".hero span");
if(heroTitle){
    setInterval(()=>{
        heroTitle.style.textShadow=`
0 0 ${15+Math.random()*20}px #00ff88,
0 0 ${40+Math.random()*40}px #00ff88,
0 0 ${60+Math.random()*60}px #55ff99`;
    },900);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Footer year
const footer=document.querySelector("footer p:last-child");
if(footer){
    footer.innerHTML="© "+new Date().getFullYear()+" VanillaCrate";
}

// Typewriter
const heroText=document.querySelector(".hero p");
if(heroText){
    const original=heroText.innerHTML;
    heroText.innerHTML="";
    let i=0;
    function type(){
        if(i<original.length){
            heroText.innerHTML+=original.charAt(i++);
            setTimeout(type,20);
        }
    }
    setTimeout(type,500);
}

// Loader
window.addEventListener("load",()=>{
    setTimeout(()=>{
        const loader=document.getElementById("loader");
        if(loader){
            loader.style.opacity="0";
            setTimeout(()=>{
                loader.style.display="none";
            },800);
        }
    },2200);
});

// Scroll Progress
const progress=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{
    if(!progress) return;
    const scrollTop=document.documentElement.scrollTop;
    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    progress.style.width=((scrollTop/height)*100)+"%";
});
