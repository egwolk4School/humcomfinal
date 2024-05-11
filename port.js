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




        
        

