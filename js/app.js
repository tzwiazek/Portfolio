document.addEventListener("DOMContentLoaded", () => {
   'strict mode';

   const slideModule = (function () {

      /***** Nav *****/
      const nav = () => {
         var nav_flag = true;

         document.querySelector(".nav--btn").addEventListener("click", () => {
            if(nav_flag === true) {
               document.querySelector("nav").style="width:100%;height:100%;";
               document.querySelector("#main--menu").style="opacity:1;display:block";
               nav_flag = false;
            } else {
               document.querySelector("nav").style="width:100%;height:90px;";
               document.querySelector("#main--menu").style="opacity:0;display:none;";
               nav_flag = true;
            }
         });

         window.onresize = function(event) {
         let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if(width > 767) {
               document.querySelector("#main--menu").style="opacity:1;display:block";
               document.querySelector("nav").style="width:100%;height:90px;";
            } else {document.querySelector("#main--menu").style="opacity:0;display:none;";}
         }
      }
      /***** /Nav *****/

      /***** Header text animation *****/
      const box_text_effect = () => {
         document.querySelector(".box:nth-child(2) > .box--title").style="color:#f44336";
         var flag=true;
         function box_call($box_number) {
            if(flag) {
               span_transformY($box_number);
               flag=false;
            }
         }
         var boxes = {
            box1:{
               i:"1",
               array_index:"0",
               transformY:"translate(0%, -100%)",
               strings:["simplicity", "opensource", "mobile"],
               box:".box:nth-child(1)",
            },
            box2:{
               i:"1",
               array_index:"0",
               transformY:"translate(0%, -100%)",
               strings:["engagement", "responsive design", "brand identity"],
               box:".box:nth-child(2)",
            },
            box3:{
               i:"1",
               array_index:"0",
               transformY:"translate(0%, -100%)",
               strings:["conversions", "user experience", "usability"],
               box:".box:nth-child(3)",
            }
         }

         function span_transformY($box_number) {
            for(var key of Object.keys(boxes)) {
               if(key === "box"+$box_number) {
                  document.querySelector(boxes[key].box+"> .box__description").appendChild(document.createElement('span'))
                  if(boxes[key].i > 1) {
                     boxes[key].transformY = "translate(0%, -"+((boxes[key].i-1)*100)+"%) translate3d(0,0,0)";
                     for(let i=boxes[key].i;i>0;i--) {document.querySelector(boxes[key].box+"> .box__description > span:nth-child("+i+")").style="transform:"+boxes[key].transformY+";transition:0.8s;transition-delay:0.1s;";}
                     document.querySelector(boxes[key].box+"> .box__description > span:nth-child("+boxes[key].i+")").style="transform:"+boxes[key].transformY+";transition:1s;transition-delay:0.1s;";
                  }
                  document.querySelector(boxes[key].box+"> .box__description").appendChild(document.createElement('span'))
                  document.querySelector(boxes[key].box+"> .box__description > span:nth-child("+(parseInt(boxes[key].i)+1)+")").textContent = (boxes[key].strings[boxes[key].array_index]);

                  boxes[key].i++;
                  boxes[key].array_index++;
                  if (boxes[key].array_index === 3)
                     boxes[key].array_index = 0;
               }
            }
         }

         var box_animation_scroll;
         function box_animation_scroll() {
            box_animation_scroll = setTimeout(() => {
               if(document.querySelector(".box:nth-child(1)").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(1)") || document.querySelector(".box:nth-child(1) > .box__description").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(1) > .box__description")) {box_call(1);}
               if(document.querySelector(".box:nth-child(2)").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(2)") || document.querySelector(".box:nth-child(2) > .box__description").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(2) > .box__description")) {box_call(2);}
               if(document.querySelector(".box:nth-child(3)").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(3)") || document.querySelector(".box:nth-child(3) > .box__description").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(3) > .box__description")) {box_call(3);}
               flag=true;

               box_animation_scroll();
            }, 1500);
         }

         function box_on_hover() {
            if(document.querySelector(".box:nth-child(1)").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(1)")) {box_call(1);}
            if(document.querySelector(".box:nth-child(2)").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(2)")) {box_call(2);}
            if(document.querySelector(".box:nth-child(3)").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(3)")) {box_call(3);}

            setTimeout(() => {
               if(boxes["box1"].i === 1 && document.querySelector(".box:nth-child(1)").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(1)")) {box_call(1);}
               if(boxes["box2"].i === 1 && document.querySelector(".box:nth-child(2)").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(2)")) {box_call(2);}
               if(boxes["box3"].i === 1 && document.querySelector(".box:nth-child(3)").parentElement.querySelector(':hover') === document.querySelector(".box:nth-child(3)")) {box_call(3);}
               flag = true;

               clearTimeout(box_animation_scroll);
            }, 1000);

            setTimeout(() => {
               box_on_hover();
            }, 1200);
         }
         box_on_hover();

         // box1
         document.querySelector(".box:nth-child(1)").addEventListener("mouseover", () => {
            document.querySelector(".box:nth-child(2)").style="transform:translate(250%);transition:0.8s";
            document.querySelector(".box:nth-child(3)").style="transform:translate(250%);transition:0.8s";
            document.querySelector(".box:nth-child(1) > .box__description").style="width:66.66666%;opacity:1";
            document.querySelector(".box:nth-child(1) > .box--title").style="color:#f44336;transition:0.7s";
            document.querySelector(".box:nth-child(2) > .box__description").style="opacity:0";
            document.querySelector(".box:nth-child(3) > .box__description").style="opacity:0";
         });
         document.querySelector(".box:nth-child(1)").addEventListener("mouseout", () => {
            document.querySelector(".box:nth-child(1) > .box--title").style="color:#000";
            document.querySelector(".box:nth-child(2)").style="transform:translate(0%);transition:0.5s;";
            document.querySelector(".box:nth-child(3)").style="transform:translate(0%);transition:0.5s;";
         });

         // box2
         document.querySelector(".box:nth-child(2)").addEventListener("mouseover", () => {
            document.querySelector(".box:nth-child(2)").style="transform:translate(-100%);transition:0.5s";
            document.querySelector(".box:nth-child(1) > .box__description").style="left:100%;width:200%";
            document.querySelector(".box:nth-child(3)").style="transform:translate(100%);transition:0.5s";
            document.querySelector(".box:nth-child(2) > .box--title").style="text-align:right;color:#f44336;transition:0.7s";
            document.querySelector(".box:nth-child(1) > .box__description").style="opacity:0";
            document.querySelector(".box:nth-child(2) > .box__description").style="opacity:1";
            document.querySelector(".box:nth-child(3) > .box__description").style="opacity:0";
         });
         document.querySelector(".box:nth-child(2)").addEventListener("mouseout", () => {
            document.querySelector(".box:nth-child(2) > .box--title").style="text-align:center;color:#f44336;";
            document.querySelector(".box:nth-child(2)").style="transform:translate(0%);transition:0.5s";
            document.querySelector(".box:nth-child(2) > .box__description").style="left:100%";
            document.querySelector(".box:nth-child(3)").style="transform:translate(0%);transition:0.5s";
         });

         //box 3
         document.querySelector(".box:nth-child(3)").addEventListener("mouseover", () => {
            document.querySelector(".box:nth-child(2)").style="transform:translate(-200%);transition:0.5s";
            document.querySelector(".box:nth-child(3)").style="transform:translate(-200%);transition:0.5s";
            document.querySelector(".box:nth-child(3) > .box__description").style="left:100%;width:200%";
            document.querySelector(".box:nth-child(3) > .box--title").style="text-align:right;color:#f44336;transition:0.7s";
            document.querySelector(".box:nth-child(1) > .box__description").style="opacity:0";
            document.querySelector(".box:nth-child(2) > .box__description").style="opacity:0";
            document.querySelector(".box:nth-child(3) > .box__description").style="opacity:1";
         });
         document.querySelector(".box:nth-child(3)").addEventListener("mouseout", () => {
            document.querySelector(".box:nth-child(3)").style="transform:translate(0%);transition:0.5s";
            document.querySelector(".box:nth-child(3) > .box__description").style="left:100%";
            document.querySelector(".box:nth-child(2)").style="transform:translate(0%);transition:0.5s";
            document.querySelector(".box:nth-child(3) > .box--title").style="color:#000";
         });
      }
      /***** /Header text animation *****/

      /***** Section skills *****/
      const skills = () => {
         document.querySelector(".show__left").addEventListener("mouseover", () => {
            document.querySelector("#tablet-frontend").style="clip:rect(0px,400px,600px,0px);transition:0.7s;";
            setTimeout(() => {
               document.querySelector(".description--frontend").classList.add("description__active");
            }, 500);
         });
         document.querySelector(".show__left").addEventListener("mouseout", () => {
            document.querySelector("#tablet-frontend").style="clip:rect(0px,200px,600px,0px);transition:0.6s;";
            setTimeout(() => {
               document.querySelector(".description--frontend").classList.remove("description__active");
            }, 400);
         });
         document.querySelector(".show__right").addEventListener("mouseover", () => {
            document.querySelector("#tablet-frontend").style="clip:rect(0px,0px,600px,0px);transition:0.7s;";
            setTimeout(() => {
               document.querySelector(".description--backend").classList.add("description__active");
            }, 500);
         });
         document.querySelector(".show__right").addEventListener("mouseout", () => {
            document.querySelector("#tablet-frontend").style="clip:rect(0px,200px,600px,0px);transition:0.6s;";
            setTimeout(() => {
               document.querySelector(".description--backend").classList.remove("description__active");
            }, 400);
         });

         var flag_bonus = true;
         document.querySelector(".bonus").addEventListener("click", () => {
            let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
               if(width > 1024) {
                  if(flag_bonus) {
                     document.querySelector(".description--bonus").style="height:500px;margin-top:0;transition:1s;"
                     flag_bonus = false;
                  } else {
                     document.querySelector(".description--bonus").style="height:0px;margin-top:-100;transition:1s;"
                     flag_bonus = true;
                  }
               }
         });
      }
      /***** /Section skills *****/

      /***** Scroll to *****/
      const scroll_to = () => {
         function scroll_to(e) {
            if(navigator.platform == "iPad" || navigator.platform == "iPod" || navigator.platform == "iPhone") {
               document.querySelector(".home_page").addEventListener("click", function() {window.location.assign("#header")});
               document.querySelector(".about").addEventListener("click", function() {window.location.assign("#about")});
               document.querySelector(".portfolio").addEventListener("click", function() {window.location.assign("#portfolio")});
               document.querySelector(".contact").addEventListener("click", function() {window.location.assign("#contact")});
            } else {
               window.scrollTo({
                  behavior:"smooth",
                  left:0,
                  top:e.offsetTop
               });
               let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
               if(width < 767)
                  document.querySelector(".nav--btn").click();
            }
         }

         let home_page = document.querySelectorAll(".home_page");
         let about = document.querySelectorAll(".about");
         let skills = document.querySelectorAll(".skills");
         let portfolio = document.querySelectorAll(".portfolio");
         let contact = document.querySelectorAll(".contact");

         for(let i=0;i<=1;i++) {
            home_page[i].addEventListener('click', () => {scroll_to(document.querySelector("#header"));});
            about[i].addEventListener('click', () => {scroll_to(document.querySelector("#about"));});
            skills[i].addEventListener('click', () => {scroll_to(document.querySelector("#skills"));});
            portfolio[i].addEventListener('click', () => {scroll_to(document.querySelector("#portfolio"));});
            contact[i].addEventListener('click', () => {scroll_to(document.querySelector("#contact"));});
         }
      }
      /***** /Scroll to *****/

      const chapter_circle = () => {
         let scrollTop_chapter = document.querySelector(".chapter").getBoundingClientRect().top + document.documentElement.scrollTop;
         let scrollTop_header = document.querySelector("#header").getBoundingClientRect().top + document.documentElement.scrollTop;
         let scrollTop_second_section = document.querySelector("#second--section").getBoundingClientRect().top + document.documentElement.scrollTop;
         let scrollTop_third_section = document.querySelector("#third--section").getBoundingClientRect().top + document.documentElement.scrollTop;
         let scrollTop_fourth_section = document.querySelector("#fourth--section").getBoundingClientRect().top + document.documentElement.scrollTop;
         let scrollTop_fifth_section = document.querySelector("#fifth--section").getBoundingClientRect().top + document.documentElement.scrollTop;

         for(let i=1;i<=5;i++) {document.querySelector(".chapter--circle--container > a:nth-child("+i+") > .circle > div").style="width:6px;height:6px;transition:0.3s;";}

         if(document.documentElement.scrollTop == 0 || (scrollTop_chapter > scrollTop_header && scrollTop_chapter < scrollTop_second_section)) {document.querySelector(".chapter--circle--container > a:nth-child(1) > .circle > div").style="width:10px;height:10px;transition:0.3s;";}
         else if(scrollTop_chapter > scrollTop_second_section && scrollTop_chapter < scrollTop_third_section) {document.querySelector(".chapter--circle--container > a:nth-child(2) > .circle > div").style="width:10px;height:10px;transition:0.3s;";}
         else if(scrollTop_chapter > scrollTop_third_section && scrollTop_chapter < scrollTop_fourth_section) {document.querySelector(".chapter--circle--container > a:nth-child(3) > .circle > div").style="width:10px;height:10px;transition:0.3s;";}
         else if(scrollTop_chapter > scrollTop_fourth_section && scrollTop_chapter < scrollTop_fifth_section) {document.querySelector(".chapter--circle--container > a:nth-child(4) > .circle > div").style="width:10px;height:10px;transition:0.3s;";}
         else if(scrollTop_chapter > scrollTop_fifth_section) {document.querySelector(".chapter--circle--container > a:nth-child(5) > .circle > div").style="width:10px;height:10px;transition:0.3s;";}


         window.onscroll = () => {
            function chapter_on_scroll() {
               let scrollTop_chapter = document.querySelector(".chapter").getBoundingClientRect().top + document.documentElement.scrollTop;
               let scrollTop_header = document.querySelector("#header").getBoundingClientRect().top + document.documentElement.scrollTop;
               let scrollTop_second_section = document.querySelector("#second--section").getBoundingClientRect().top + document.documentElement.scrollTop;
               let scrollTop_third_section = document.querySelector("#third--section").getBoundingClientRect().top + document.documentElement.scrollTop;
               let scrollTop_fourth_section = document.querySelector("#fourth--section").getBoundingClientRect().top + document.documentElement.scrollTop;
               let scrollTop_fifth_section = document.querySelector("#fifth--section").getBoundingClientRect().top + document.documentElement.scrollTop;

               for(let i=1;i<=5;i++) {document.querySelector(".chapter--circle--container > a:nth-child("+i+") > .circle > div").style="width:6px;height:6px;transition:0.3s;";}

               if(document.documentElement.scrollTop == 0 || (scrollTop_chapter > scrollTop_header && scrollTop_chapter < scrollTop_second_section)) {document.querySelector(".chapter--circle--container > a:nth-child(1) > .circle > div").style="width:10px;height:10px;transition:0.3s;";}
               else if(scrollTop_chapter > scrollTop_second_section && scrollTop_chapter < scrollTop_third_section) {document.querySelector(".chapter--circle--container > a:nth-child(2) > .circle > div").style="width:10px;height:10px;transition:0.3s;";}
               else if(scrollTop_chapter > scrollTop_third_section && scrollTop_chapter < scrollTop_fourth_section) {document.querySelector(".chapter--circle--container > a:nth-child(3) > .circle > div").style="width:10px;height:10px;transition:0.3s;";}
               else if(scrollTop_chapter > scrollTop_fourth_section && scrollTop_chapter < scrollTop_fifth_section) {document.querySelector(".chapter--circle--container > a:nth-child(4) > .circle > div").style="width:10px;height:10px;transition:0.3s;";}
               else if(scrollTop_chapter > scrollTop_fifth_section) {document.querySelector(".chapter--circle--container > a:nth-child(5) > .circle > div").style="width:10px;height:10px;transition:0.3s;";}
            }
            chapter_on_scroll();
         };
      }

      return {
         nav : nav, // mobile nav
         box_text_effect : box_text_effect, // header
         skills : skills, // section skills
         scroll_to : scroll_to,
         chapter_circle : chapter_circle // sidebar nav
      }
   })();

   slideModule.nav();
   slideModule.box_text_effect();
   slideModule.skills();
   slideModule.scroll_to();
   slideModule.chapter_circle();
});
