const myAnimation = (function() {
    const state = {
        fps: 60,
        color: "#aec7e4",
        charset: "0123456789ABCDEFラドクフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ",
        size: 12
    };
  
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
  
    let w, h, p;
    const resize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
  
        p = Array(Math.ceil(w / state.size)).fill(0);
    };
    window.addEventListener("resize", resize);
    resize();
  
    const random = (items) => items[Math.floor(Math.random() * items.length)];
  
    const draw = () => {
        ctx.fillStyle = "rgba(0,0,0,.1)";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = state.color;
  
        ctx.font = state.size + 'px sans-serif'
        for (let i = 0; i < p.length; i++) {
            let v = p[i];
            ctx.fillText(random(state.charset), i * state.size, v);
            p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + state.size;
        }
    };
  
    setTimeout(() => {
        let interval = setInterval(draw, 3000 / state.fps);
    });

    return {
        
    };
})();

const myMenu = (function() {
    const showMenu = (toggleId, navId, headerId, subMenuId) =>{
        const toggle = document.getElementById(toggleId),
              nav = document.getElementById(navId),
              head = document.getElementById(headerId),
              subMenu = document.getElementById(subMenuId)

     
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
            head.classList.toggle('head-expand')
            if (head.classList.contains('headExpand2')) {
                head.classList.remove('headExpand2')
                head.classList.toggle('head-expand')
                subMenu.classList.remove('submenu')
                
            }
            toggle.classList.toggle('show-icon')
        })
     }
     
     showMenu('nav__toggle','nav-menu','header' , 'sub_menu')
})();

const mySubMenu = (function() {
    const showSubMenu = (aboutId, subMenuId, headId, arrowId) => {
        const about = document.getElementById(aboutId), 
              subMenu = document.getElementById(subMenuId),
              head = document.getElementById(headId), 
              arrow = document.getElementById(arrowId)


        about.addEventListener('click', () =>{
            subMenu.classList.toggle('submenu')
            arrow.classList.toggle('arrowRotate')
            if (head.classList.contains('head-expand')) {
                head.classList.remove('head-expand')
                head.classList.add('headExpand2')
            }
            else {
                head.classList.remove('headExpand2')
                head.classList.add('head-expand')
            }
            
        })
    }
    showSubMenu('about_toggle','sub_menu', 'header', 'arrow')
})();


const textShuffleLoad = (function() {
    const random_char = () => {
        const possible = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" +
              "0123456789" +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
              "abcdefghijklmnopqrstuvwxyz";
        return possible.charAt(Math.floor(Math.random() * possible.length));
      };
      
      const mask = (chars, progress) => {
        const masked = [];
      
        for (let i = 0; i < chars.length; i++) {
          const position = (i + 1) / chars.length;
          if (position > progress) {
            masked.push(random_char());
          } else {
            masked.push(chars[i]);
          }
        }
      
        return masked.join('');
      };
      
      const shuffle = el => {
        const chars = el.textContent.split('');
      
        const params = {
          progress: 0
        };
      
        const a = anime({
          targets: params,
          progress: 1,
          delay: 1,
          duration: 500,
          easing: 'easeInQuad',
          update: () => {
            el.textContent = mask(chars, params.progress);
          },
          complete: () => {
            el.classList.add('completed');
          }
        });
        
        el.onmouseover = () => {
          el.classList.remove('completed');
          a.restart();
        };
      };
      
      for (const el of document.querySelectorAll('.shuffle')) {
        shuffle(el);
      }
})();
const navShuffleHover = (function() {
    const random_char = () => {
        const possible = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" +
        "0123456789" +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz";
        return possible.charAt(Math.floor(Math.random() * possible.length));
      };
      
      const mask = (chars, progress) => {
        const masked = [];
      
        for (let i = 0; i < chars.length; i++) {
          const position = (i + 1) / chars.length;
          if (position > progress) {
            masked.push(random_char());
          } else {
            masked.push(chars[i]);
          }
        }
      
        return masked.join('');
      };
      
      const shuffle = el => {
        const chars = el.textContent.split('');
      
        const params = {
          progress: 0
        };
      
        const a = anime({
          targets: params,
          progress: 1,
          delay: 1,
          duration: 500,
          easing: 'easeInQuad',
          update: () => {
            el.textContent = mask(chars, params.progress);
          },
          autoplay: false
        });
        
        el.onmouseover = () => {
          a.restart();
        };
      };
      
      for (const el of document.querySelectorAll('.navShuffle')) {
        shuffle(el);
      }
})();


const homeCarousel = (function() {
	const details = gsap.utils.toArray(".rightItem:not(:first-child)")
	const icons = gsap.utils.toArray(".icondiv:not(:first-child)")
	
	
	gsap.set(icons, {yPercent:101})
	
	const allIcons = gsap.utils.toArray(".icondiv")
	
	
	
	let mm = gsap.matchMedia();
	
	
	mm.add("(min-width: 600px)", () => {
	  ScrollTrigger.create({
		trigger:".carouselHome",
		start:"top top",
		end:"bottom bottom",
		pin:".left"
	})
	
	
	details.forEach((detail, index)=> {
	
		let headline = detail.querySelector("h1")
		let animation = gsap.timeline()
		   .to(icons[index], {yPercent:0})
		   .to(allIcons[index], { autoAlpha: 1, duration: 0.5, ease: "power1.inOut" }, 0)
       .fromTo(allIcons[index], {autoAlpha: 1}, {autoAlpha: 0, duration: 0.5, ease: "power1.inOut"}, 0);
		ScrollTrigger.create({
			trigger:headline,
			start:"top 80%",
			end:"top 50%",
			animation:animation,
			scrub: true,
			markers:false
		})
	})
	
	});
})();

        
        
const carouselShadow = (function() {
  window.addEventListener('load', function() {
    const carouselContainer = document.getElementById('carouselContainer');
    const carouselShadow = document.querySelector('.carouselShadow');

    function updateShadowDimensionsAndPosition() {
        const carouselRect = carouselContainer.getBoundingClientRect(); 

    
        carouselShadow.style.width = `${carouselRect.width}px`;
        carouselShadow.style.height = `${carouselRect.height}px`;

       
        carouselShadow.style.top = `${carouselRect.top + window.scrollY}px`;
        carouselShadow.style.left = `${carouselRect.left}px`;
    }

    updateShadowDimensionsAndPosition(); 

    window.addEventListener('resize', updateShadowDimensionsAndPosition);
    window.addEventListener('scroll', updateShadowDimensionsAndPosition);
});
})();

const myResume = (function() {
    $('.skills-prog li').find('.skills-bar').each(function(i) {
      $(this).find('.bar').delay(i * 150).animate({
        width: $(this).parents().attr('data-percent') + '%'
      }, 1000, 'linear', function() {
        return $(this).css({
          'transition-duration': '.5s'
        });
          
      });
      
    });
  
    $('.skills-soft li').find('svg').each(function(i) {
      var c, cbar, circle, percent, r;
      circle = $(this).children('.cbar');
      r = circle.attr('r');
      c = Math.PI * (r * 2);
      percent = $(this).parent().data('percent');
      cbar = ((100 - percent) / 100) * c;
      circle.css({
        'stroke-dashoffset': c,
        'stroke-dasharray': c
      });
      circle.delay(i * 150).animate({
        strokeDashoffset: cbar
      }, 1000, 'linear', function() {
        return circle.css({
          'transition-duration': '.3s'
        });
      });
      $(this).siblings('small').prop('Counter', 0).delay(i * 150).animate({
        Counter: percent
      }, {
        duration: 1000,
        step: function(now) {
          return $(this).text(Math.ceil(now) + '%');
        }
      });
    });
}).call(this);











