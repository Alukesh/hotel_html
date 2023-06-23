
  
$('.mySlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: false,

    centerPadding: '60px',
    
    // slidesToScroll: 2,
    // centerMode: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  let blocked = false;
  let blockTimeout = null;
  let prevDeltaY = 0;
  $(".mySlider").on('mousewheel DOMMouseScroll wheel', (function(e) {
    let deltaX = e.originalEvent.deltaX;
    console.log(deltaX > 0);
    // e.preventDefault();
    // e.stopPropagation();

    clearTimeout(blockTimeout);
    blockTimeout = setTimeout(function(){
        blocked = false;
    }, 0);

    
    if (deltaX > 0 && deltaX > prevDeltaY || deltaX < 0 && deltaX < prevDeltaY || !blocked) {
        blocked = true;
        prevDeltaY = deltaX;

        if (deltaX > 1) {
            $(this).slick('slickNext');
        } else if (deltaX < 0) {
          $(this).slick('slickPrev');
        }
         else {
        }
    }
}));


const workSection = document.querySelector('.section-work-data')

const workObserver = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;


    const counterNum = document.querySelectorAll('.counter-numbers');

    const speed = 24;

    counterNum.forEach((curElem) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curElem.dataset.number);
            // console.log(targetNumber);
            const initialNum = parseInt(curElem.innerText);
            // console.log(initialNum);

            const incrementNumber = Math.trunc(targetNumber / speed);
            // console.log(incrementNumber);
            if (initialNum < targetNumber) {
                curElem.innerText = `${initialNum + incrementNumber}+`;
                setTimeout(updateNumber, 55);
            }
        };

        updateNumber()
    })

}, {
    root: null,
    threshold: 0,
})


workObserver.observe(workSection);