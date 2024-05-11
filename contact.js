const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(myForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        openAlert();
});


function openAlert() {
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var contno = document.getElementById("contno");
var messag = document.getElementById("messag");
var radios = document.querySelectorAll('input[type="radio"]');
var select = document.getElementById("topic");
let blurb = document.getElementById("blur");
const popup = document.getElementById("popup");
const popupbad = document.getElementById("popupbad");
blurb.classList.add("no-pointer-events");
blurb.addEventListener("click", function(event) {
  event.stopPropagation();
});
const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

console.log("First Name:", firstname.value);
console.log("Last Name:", lastname.value);
console.log("Email:", email.value);
console.log("Contact Number:", contno.value);
console.log("Message:", messag.value);

let radioSelected = false;
radios.forEach(radio => {
  if (radio.checked) {
      radioSelected = true;
  }
});
console.log("Radio Selected:", radioSelected);


const selectValue = select.value;
console.log("Select Value:", selectValue);

const selectValid = selectValue !== "Topic";
console.log("Select Valid:", selectValid);

if (
firstname.value === "" ||
lastname.value === "" ||
email.value === "" ||
contno.value === "" ||
messag.value === "" ||
!radioSelected ||
!selectValid


) {
popupbad.classList.add("open-popupbad");
blurb.classList.add("regblur");
 document.body.style.overflow = "hidden";


} else {
  const formData = new FormData(document.getElementById("myForm"));
  const obj = {};
  for (const [key, value] of formData.entries()) {
    obj[key] = value;
  }
  obj["topic"] = selectValue;

const json = JSON.stringify(obj);
localStorage.setItem("myForm", json); 
localStorage.setItem("selectedOption", selectValue);
console.log(obj); 
popup.classList.add("open-popup");
blurb.classList.add("regblur");
console.log("bet");

document.querySelectorAll('input[type="radio"]').forEach(radio => {
radio.checked = false;
});

document.body.style.overflow = "hidden";
myForm.reset();
select.selectedIndex = 0; 
document.querySelector(".c-select").textContent = "Topic";

}



}
function closeAlert() {
const popupbad = document.getElementById("popupbad");
const popup = document.getElementById("popup");
let blurb = document.getElementById("blur");
popupbad.classList.remove("open-popupbad");
popup.classList.remove("open-popup");
blurb.classList.remove("regblur");
document.body.style.overflow = "auto";
blurb.classList.remove("no-pointer-events");
const overlay = document.querySelector(".overlay");
    if (overlay) {
        overlay.remove();
    }
}

const mySelection = (function() {
$(document).ready(function() {

  $('select').each(function() {

    var select = $(this),
        options = $(this).children('option'),
        num_of_options = options.length;

    select.wrap('<div class="c-select-wrap"></div>');
    
    $('<div class="c-select"></div>').insertAfter(select).text(options.eq(0).text());

    $('<ul class="options"></ul>').insertAfter('.c-select');

    for (var i = 0; i < num_of_options; i++) {
      var option_val = options.eq(i).text();
      $('<li class="option" data-option="' + option_val + '">' + option_val + '</li>')
        .appendTo('.options');
    }

    var custom_select = $('.c-select');

    custom_select.on('click', function(e) {
      e.stopPropagation();
      $(this).toggleClass('open');
    });

    $('.option').on('click', function() {
      var selected_option_val = $(this).attr('data-option');
      $('.c-select').text(selected_option_val);
      $('.option').removeClass('selected');
      $(this).addClass('selected');
      select.val(selected_option_val);
    });


    
    $(document).on('click', function(e) {
      custom_select.removeClass('open');
    });

    
    $('.options li:first-child').remove();

  });

});
})();

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
