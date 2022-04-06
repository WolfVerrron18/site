// let isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function () {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//     }
// };
//
// let body = document.querySelector('body')
// if (isMobile.any()) {
//     body.classList.add('touch')
//
//     let arrows = document.querySelectorAll('.dropdown-button')
//
//     arrows.forEach(arrow => {
//         arrow.classList.remove("active-dropdown-button")
//         arrow.nextElementSibling.classList.remove('open')
//
//         arrow.addEventListener("click", (e) => {
//             let elem = e.target.closest(".dropdown-button");
//
//             arrows.forEach((prevArrow, index) => {
//                 if (index !== 0) {
//                     console.log(prevArrow)
//                     prevArrow.nextElementSibling.classList.remove('open')
//                     prevArrow.classList.remove("active-dropdown-button")
//                 }
//             })
//
//             if (!elem.classList.contains("dropdown-button__screen")) {
//                 elem.classList.toggle("active-dropdown-button")
//
//             }
//             elem.nextElementSibling.classList.add('open')
//         })
//     })
//
//     // Клик по корневому узлу
//     const firstArrow = document.querySelector('.dropdown-button__screen')
//     const dropDownClick = document.querySelector('.sub-menu__screen')
//     firstArrow.addEventListener('click', function () {
//         dropDownClick.classList.toggle('sub-menu__mobile')
//         firstArrow.classList.toggle('active-dropdown-button')
//
//         if (!dropDownClick.classList.contains("sub-menu__mobile")) {
//             arrows.forEach((arrow, index) => {
//                 arrow.nextElementSibling.classList.remove("open")
//             })
//         }
//     })
//
// } else {
//     body.classList.add('mouse')
// }
//
//


let body = document.querySelector('body')
const windowInnerWidth = document.documentElement.clientWidth

if (windowInnerWidth <= 981) {
    body.classList.add('touch')

    let arrows = document.querySelectorAll('.dropdown-button')

    arrows.forEach(arrow => {
        arrow.classList.remove("active-dropdown-button")
        arrow.nextElementSibling.classList.remove('open')

        arrow.addEventListener("click", (e) => {
            let elem = e.target.closest(".dropdown-button");

            arrows.forEach((prevArrow, index) => {
                if (index !== 0) {
                    console.log(prevArrow)
                    prevArrow.nextElementSibling.classList.remove('open')
                    prevArrow.classList.remove("active-dropdown-button")
                }
            })

            if (!elem.classList.contains("dropdown-button__screen")) {
                elem.classList.toggle("active-dropdown-button")

            }
            elem.nextElementSibling.classList.add('open')
        })
    })

    // Клик по корневому узлу
    const firstArrow = document.querySelector('.dropdown-button__screen')
    const dropDownClick = document.querySelector('.sub-menu__screen')
    firstArrow.addEventListener('click', function () {
        dropDownClick.classList.toggle('sub-menu__mobile')
        firstArrow.classList.toggle('active-dropdown-button')

        if (!dropDownClick.classList.contains("sub-menu__mobile")) {
            arrows.forEach((arrow, index) => {
                arrow.nextElementSibling.classList.remove("open")
            })
        }
    })

} else {
    body.classList.add('mouse')
}


