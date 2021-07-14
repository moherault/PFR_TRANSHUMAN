var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 12000,
    delay: (el, i) => 900 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 11000,
    delay: (el, i) => 100 + 30 * i
  });

//   const ratio = .1
//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: ratio
//   }
  
//   const handleIntersect = function (entries, observer) {
//       entries.forEach(function (entry) {
//           if (entry.intersectionRatio > ratio) {
//               entry.target.classList.add('reveal.visible')
//               observer.unobserve(entry.target)
//           }
//       })
//   }

//   const observer = new IntersectionObserver(handleIntersect, options)
//   observer.observe(document.querySelector('.reveal'))