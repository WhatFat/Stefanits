document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.header .navbar');

    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        navbar.classList.remove('active');
    };

    var swiper = new Swiper('.home-slider', {
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    document.getElementById("Logo").addEventListener("click", function() {
        window.location.href = "file:///C:/Users/herak/OneDrive/Dokumentumok/Project/index.html";
    });

        document.getElementById("facebook-btn").addEventListener("click", function() {
        window.location.href = "https://www.facebook.com/stefanitskft";
    });

    const links = document.querySelectorAll('.header .navbar a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (!this.classList.contains('active')) {
                event.preventDefault();
                links.forEach(function(link) {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                setTimeout(() => {
                    window.location.href = this.href;
                }, 0);
            }
        });
    });

    document.getElementById("home-btn").addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

function toggleContactDetails(employee) {
    var contactDetails = employee.querySelector('.contact-details');
    if (contactDetails.style.display === "none" || contactDetails.style.display === "") {
        contactDetails.style.display = "block";
    } else {
        contactDetails.style.display = "none";
    }
}

const projects = [
    {
        name: "Újhartyán",
        images: ["pics/ujhartyan1.jpg","pics/ujhartyan2.jpg","pics/ujhartyan3.jpg","pics/ujhartyan4.jpg","pics/ujhartyan5.jpg"],
        description: "Projekt:<br>Hely: Újhartyán<br>Munkanem:<br>"
    },
    {
        name: "Mercedes-Akcionáló Csarnok",
        images: ["pics/mercedes1.jpg","pics/mercedes2.jpg","pics/mercedes3.jpg","pics/mercedes4.jpg"],
        description: "Projekt:<br>Hely: Kecskemét<br>Munkanem:<br>"
    },
    {
        name: "Paks Energy",
        images: ["pics/paks1.jpg","pics/paks2.jpg","pics/paks3.jpg","pics/paks4.jpg","pics/paks5.jpg","pics/paks6.jpg","pics/paks7.jpg"],
        description: "Projekt:<br>Hely: Paks<br>Munkanem:<br>"
    },
    {
        name: "Futó4",
        images: ["/api/placeholder/200/150", "/api/placeholder/200/150", "/api/placeholder/200/150"],
        description: "Projekt 4 a legújabb vállalkozásunk. Ezek a fő célkitűzései és jellemzői."
    },
    {
        name: "Futó5",
        images: ["/api/placeholder/200/150", "/api/placeholder/200/150", "/api/placeholder/200/150"],
        description: "Projekt 5 a legújabb vállalkozásunk. Ezek a fő célkitűzései és jellemzői."
    },
    {
        name: "VGP Csarnok",
        images: ["pics/vgp1.jpg","pics/vgp2.jpg"],
        description: "Projekt: <br>Hely: Győr<br>Munkanem: Fit-out munkák- Belsőépítészeti generál kivitelezés<br>"
    }, 
    {
        name: "Richter",
        images: ["pics/richter1.jpg","pics/richter2.jpg","pics/richter3.jpg","pics/richter4.jpg","pics/richter5.jpg"],
        description: "Projekt: <br>Hely: Budapest<br>Munkanem: Szárazépítési és Felületképzési munkák<br>"
    },  
    {
        name: "Átrium",
        images: ["pics/atrium1.jpg","pics/atrium2.jpg","pics/atrium3.jpg"],
        description: "Projekt: <br>Hely: Budapest<br>Munkanem: Szárazépítési és Felületképzési munkák<br>"
    }, 
    {
        name: "Medicover",
        images: ["pics/medicover1.jpg","pics/medicover2.jpg","pics/medicover3.jpg","pics/medicover4.jpg"],
        description: "Hely: Budapest<br>Munkanem: Szárazépítési és Felületképzési munkák<br>"
    },
    {
        name: "Kekszgyár",
        images: ["pics/kekszgyar1.jpg","pics/kekszgyar2.jpg","pics/kekszgyar3.jpg","pics/kekszgyar4.jpg"],
        description: "Projekt: Győri Kekszgyár volt épületének felújítása keretében a Széchenyi István Egyetem Tudományos és Innovációs Park kiépítése, valamint új Művészeti kar oktatási tereinek kialakítása<br>Hely: Győr<br>Munkanem: Szárazépítési munkák, Külső szerelt falak komplett kivitelezése<br>"
    },
    {
        name: "Krisztina Pláza",
        images: ["pics/krisztina1.jpg","pics/krisztina2.jpg","pics/krisztina3.jpg"],
        description: "Projekt: Krisztina Pláza Irodaszint kialakítás<br>Hely: Budapest<br>Munkanem: Szárazépítési és Felületképzési munkák<br>"
    }, 
    {
        name: "Intercity Hotel",
        images: ["pics/Intercity1.jpg","pics/Intercity2.jpg","pics/Intercity3.jpg","pics/Intercity4.jpg","pics/Intercity5.jpg","pics/Intercity6.jpg","pics/Intercity7.jpg"],
        description: "Projekt: Intercity Hotel épület 1-7. emeleteinek szárazépítési kivitelezési munkái<br>Hely: Budapest<br>Munkanem: Szárazépítészeti kivitelezési munkák, beleértve gipszkarton válaszfalak, álmennyezetek és egyéb belsőépítészeti szerkezetek kialakítását.<br>"
    },     
];

function openGallery(projectId) {
    const project = projects[projectId - 1];
    document.getElementById('galleryTitle').textContent = `${project.name} képgaléria`;
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    project.images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = project.name;
        gallery.appendChild(imgElement);
    });
    document.getElementById('galleryModal').style.display = 'block';
}

function openDescription(projectId) {
    const project = projects[projectId - 1];
    document.getElementById('descriptionTitle').textContent = project.name;
    const description = document.getElementById('description');
    description.innerHTML = `
        <img src="${project.images[0]}" alt="${project.name}">
        <p>${project.description}</p>
    `;
    document.getElementById('descriptionModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('galleryModal').style.display = 'none';
    document.getElementById('descriptionModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('galleryModal') || 
        event.target == document.getElementById('descriptionModal')) {
        closeModal();
    }
};

document.getElementById('tovabbGomb').addEventListener('click', function(e) {
    e.preventDefault();
    
    const existingAdditionalText = document.querySelector('.content .additional-text');
    
    if (!existingAdditionalText) {
        const additionalText = document.createElement('p');
        additionalText.className = 'additional-text';
        additionalText.textContent = 'A gipszkarton előtétfalak utólagos hőszigetelést biztosítanak, míg a gipszkarton mennyezetekkel szabályozható a belmagasság, így csökkenthetők a fűtési és hűtési költségek. Tetőtér-beépítéssel új lakóterek hozhatók létre, szálas hőszigeteléssel és párazáró fóliával kiegészítve. Száraz vakolással esztétikus felületek készíthetők gyorsan és tisztán, akár festéshez vagy tapétázáshoz előkészítve. A kazettás álmennyezetek gyorsan szerelhetők, és könnyen hozzáférést biztosítanak a gépészeti és elektromos rendszerekhez, így irodákba, üzletekbe és otthonokba is ideálisak.';
        
        const lessButton = document.createElement('a');
        lessButton.href = '#';
        lessButton.className = 'btn';
        lessButton.id = 'kevesebbGomb';
        lessButton.textContent = '...Kevesebb';
        
        const contentDiv = this.closest('.content');
        contentDiv.appendChild(additionalText);
        contentDiv.appendChild(lessButton);
        
        this.style.display = 'none';
        
        lessButton.addEventListener('click', function(e) {
            e.preventDefault();
            additionalText.remove();
            lessButton.remove();
            document.getElementById('tovabbGomb').style.display = 'inline-block'; // Visszaállítjuk a "Több..." gomb láthatóságát
        });
    } else {
        existingAdditionalText.remove();
        
        const lessButton = document.querySelector('#kevesebbGomb');
        if (lessButton) {
            lessButton.remove();
        }
        
        document.getElementById('tovabbGomb').style.display = 'inline-block';
    }
});
