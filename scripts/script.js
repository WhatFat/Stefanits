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
        name: "Paks",
        images: ["pics/paks.jpg","pics/hévíz port.jpg","pics/slider1.jpg"],
        description: "Projekt Neve és Címe: Paks 2 atomfejlesztés és robbantás Kivitelező: Strabag Oszt mennyibe fáj ez?: 10344 milliárd Ft."
    },
    {
        name: "Richter",
        images: ["/api/placeholder/200/150", "/api/placeholder/200/150", "/api/placeholder/200/150"],
        description: "A Projekt 2 egy izgalmas kezdeményezés. Íme néhány részlet róla."
    },
    {
        name: "Hévíz",
        images: ["/api/placeholder/200/150", "/api/placeholder/200/150", "/api/placeholder/200/150"],
        description: "Projekt 3 a legújabb vállalkozásunk. Ezek a fő célkitűzései és jellemzői."
    },
    {
        name: "VGP Csarnok",
        images: ["/api/placeholder/200/150", "/api/placeholder/200/150", "/api/placeholder/200/150"],
        description: "Projekt 4 a legújabb vállalkozásunk. Ezek a fő célkitűzései és jellemzői."
    },
    {
        name: "Budapest",
        images: ["/api/placeholder/200/150", "/api/placeholder/200/150", "/api/placeholder/200/150"],
        description: "Projekt 5 a legújabb vállalkozásunk. Ezek a fő célkitűzései és jellemzői."
    },
    {
        name: "VGP Csarnok",
        images: ["pics/vgp1.jpg", "pics/vgp2.jpg"],
        description: "Hely: Győr Munkanem: Fit-out munkák- Belsőépítészeti generál kivitelezés"
    }, 
    {
        name: "REF2",
        images: ["/api/placeholder/200/150", "/api/placeholder/200/150", "/api/placeholder/200/150"],
        description: "Projekt 7 a legújabb vállalkozásunk. Ezek a fő célkitűzései és jellemzői."
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
