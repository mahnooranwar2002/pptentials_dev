 const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })

// var sideNav = document.querySelector(".full");
// var sideNavHeading = document.querySelectorAll(".heading");
// var closebtn=document.querySelector("#close_icon");
// var menu=document.querySelector("#menu");
// var tl = gsap.timeline();

// tl.to(sideNav,{
//     right:0,
//     duration:1
// })
// tl.from(sideNavHeading,{
//     x:150,
//     duration:0.7,
//     stagger:0.4,
//     opacity:0
// })
// tl.from(closebtn,{
//     opacity:0
// })
// tl.pause()
// menu.addEventListener("click",function(){
//     tl.play()
// })
// closebtn.addEventListener("click",function(){
//     tl.reverse()
// })// Elements ko select karein
const menuIcon = document.querySelector("#menu");
const closeIcon = document.querySelector("#close_icon");
const sidebar = document.querySelector(".full");

// Menu par click karne se sidebar khulega
menuIcon.addEventListener("click", () => {
    sidebar.classList.add("active");
});

// Close icon par click karne se sidebar band hoga
closeIcon.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// Agar screen ke bahar click karein to bhi band ho jaye (Optional)
window.onclick = function(event) {
    if (event.target == sidebar) {
        sidebar.classList.remove("active");
    }
}

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Kisi aur khule hue item ko band karne ke liye (Optional)
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Current item ko toggle karne ke liye
        item.classList.toggle('active');
    });
});
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Active class hatana aur naye button pe lagana
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block'; // Show card
                } else {
                    card.style.display = 'none'; // Hide card
                }
            });
        });
    });

