// $(function () {
//     "use strict";
//     $(function () {
//       $(".preloader").fadeOut();
//     }),
//       jQuery(document).on("click", ".mega-dropdown", function (e) {
//         e.stopPropagation();
//       });
//     function e() {
//       (0 < window.innerWidth ? window.innerWidth : this.screen.width) < 1170
//         ? ($("body").addClass("mini-sidebar"),
//           $(".navbar-brand span").hide(),
//           $(".sidebartoggler i").addClass("ti-menu"))
//         : ($("body").removeClass("mini-sidebar"), $(".navbar-brand span").show());
//       var e =
//         (0 < window.innerHeight ? window.innerHeight : this.screen.height) - 1;
//       (e -= 55) < 1 && (e = 1),
//         55 < e && $(".page-wrapper").css("min-height", e + "px");
//     }
//     $(window).ready(e),
//       $(window).on("resize", e),
//       $(".sidebartoggler").on("click", function () {
//         $("body").hasClass("mini-sidebar")
//           ? ($("body").trigger("resize"),
//             $("body").removeClass("mini-sidebar"),
//             $(".navbar-brand span").show())
//           : ($("body").trigger("resize"),
//             $("body").addClass("mini-sidebar"),
//             $(".navbar-brand span").hide());
//       }),
//       $(".nav-toggler").click(function () {
//         $("body").toggleClass("show-sidebar"),
//           $(".nav-toggler i").toggleClass("ti-menu"),
//           $(".nav-toggler i").addClass("ti-close");
//       }),
//       $(".search-box a, .search-box .app-search .srh-btn").on(
//         "click",
//         function () {
//           $(".app-search").toggle(200);
//         }
//       ),
//       $(".right-side-toggle").click(function () {
//         $(".right-sidebar").slideDown(50),
//           $(".right-sidebar").toggleClass("shw-rside");
//       }),
//       $(".floating-labels .form-control")
//         .on("focus blur", function (e) {
//           $(this)
//             .parents(".form-group")
//             .toggleClass("focused", "focus" === e.type || 0 < this.value.length);
//         })
//         .trigger("blur"),
//       $(function () {
//         $('[data-toggle="tooltip"]').tooltip();
//       }),
//       $(function () {
//         $('[data-toggle="popover"]').popover();
//       }),
//       $(
//         ".scroll-sidebar, .right-side-panel, .message-center, .right-sidebar"
//       ).perfectScrollbar(),
//       $("#chat, #msg, #comment, #todo").perfectScrollbar(),
//       $("body").trigger("resize"),
//       $(".list-task li label").click(function () {
//         $(this).toggleClass("task-done");
//       }),
//       $('a[data-action="collapse"]').on("click", function (e) {
//         e.preventDefault(),
//           $(this)
//             .closest(".card")
//             .find('[data-action="collapse"] i')
//             .toggleClass("ti-minus ti-plus"),
//           $(this).closest(".card").children(".card-body").collapse("toggle");
//       }),
//       $('a[data-action="expand"]').on("click", function (e) {
//         e.preventDefault(),
//           $(this)
//             .closest(".card")
//             .find('[data-action="expand"] i')
//             .toggleClass("mdi-arrow-expand mdi-arrow-compress"),
//           $(this).closest(".card").toggleClass("card-fullscreen");
//       }),
//       $('a[data-action="close"]').on("click", function () {
//         $(this).closest(".card").removeClass().slideUp("fast");
//       });
//     var i,
//       a = [
//         "skin-default",
//         "skin-green",
//         "skin-red",
//         "skin-blue",
//         "skin-purple",
//         "skin-megna",
//         "skin-default-dark",
//         "skin-green-dark",
//         "skin-red-dark",
//         "skin-blue-dark",
//         "skin-purple-dark",
//         "skin-megna-dark",
//       ];
//     function s(e) {
//       return (
//         $.each(a, function (e) {
//           $("body").removeClass(a[e]);
//         }),
//         $("body").addClass(e),
//         (function (e, i) {
//           "undefined" != typeof Storage
//             ? localStorage.setItem(e, i)
//             : window.alert(
//                 "Please use a modern browser to properly view this template!"
//               );
//         })("skin", e),
//         !1
//       );
//     }
//     (i = (function (e) {
//       if ("undefined" != typeof Storage) return localStorage.getItem(e);
//       window.alert("Please use a modern browser to properly view this template!");
//     })("skin")) &&
//       $.inArray(i, a) &&
//       s(i),
//       $("[data-skin]").on("click", function (e) {
//         $(this).hasClass("knob") || (e.preventDefault(), s($(this).data("skin")));
//       }),
//       $("#themecolors").on("click", "a", function () {
//         $("#themecolors li a").removeClass("working"),
//           $(this).addClass("working");
//       }),
//       $(".custom-file-input").on("change", function () {
//         var e = $(this).val();
//         $(this).next(".custom-file-label").html(e);
//       });
//   });

//   /*
// Template Name: Admin Template
// Author: Wrappixel

// File: js
// */
// // ============================================================== 
// // Auto select left navbar
// // ============================================================== 
// $(function () {
//     var url = window.location;
//     var element = $('ul#sidebarnav a').filter(function () {
//         return this.href == url;
//     }).addClass('active').parent().addClass('active');
//     while (true) {
//         if (element.is('li')) {
//             element = element.parent().addClass('in').parent().addClass('active').children('a').addClass('active');
            
//         }
//         else {
//             break; 
//         }
//     }
//     $('#sidebarnav a').on('click', function (e) {
        
//             if (!$(this).hasClass("active")) {
//                 // hide any open menus and remove all other classes
//                 $("ul", $(this).parents("ul:first")).removeClass("in");
//                 $("a", $(this).parents("ul:first")).removeClass("active");
                
//                 // open our new menu and add the open class
//                 $(this).next("ul").addClass("in");
//                 $(this).addClass("active");
                
//             }
//             else if ($(this).hasClass("active")) {
//                 $(this).removeClass("active");
//                 $(this).parents("ul:first").removeClass("active");
//                 $(this).next("ul").removeClass("in");
//             }
//     })
//     $('#sidebarnav >li >a.has-arrow').on('click', function (e) {
//         e.preventDefault();
//     });
// });

// !(function (t) {
//     "use strict";
//     function e(t) {
//       return null !== t && t === t.window;
//     }
//     function n(t) {
//       return e(t) ? t : 9 === t.nodeType && t.defaultView;
//     }
//     function a(t) {
//       var e,
//         a,
//         i = { top: 0, left: 0 },
//         o = t && t.ownerDocument;
//       return (
//         (e = o.documentElement),
//         "undefined" != typeof t.getBoundingClientRect &&
//           (i = t.getBoundingClientRect()),
//         (a = n(o)),
//         {
//           top: i.top + a.pageYOffset - e.clientTop,
//           left: i.left + a.pageXOffset - e.clientLeft,
//         }
//       );
//     }
//     function i(t) {
//       var e = "";
//       for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
//       return e;
//     }
//     function o(t) {
//       if (d.allowEvent(t) === !1) return null;
//       for (
//         var e = null, n = t.target || t.srcElement;
//         null !== n.parentElement;
  
//       ) {
//         if (
//           !(n instanceof SVGElement || -1 === n.className.indexOf("waves-effect"))
//         ) {
//           e = n;
//           break;
//         }
//         if (n.classList.contains("waves-effect")) {
//           e = n;
//           break;
//         }
//         n = n.parentElement;
//       }
//       return e;
//     }
//     function r(e) {
//       var n = o(e);
//       null !== n &&
//         (c.show(e, n),
//         "ontouchstart" in t &&
//           (n.addEventListener("touchend", c.hide, !1),
//           n.addEventListener("touchcancel", c.hide, !1)),
//         n.addEventListener("mouseup", c.hide, !1),
//         n.addEventListener("mouseleave", c.hide, !1));
//     }
//     var s = s || {},
//       u = document.querySelectorAll.bind(document),
//       c = {
//         duration: 750,
//         show: function (t, e) {
//           if (2 === t.button) return !1;
//           var n = e || this,
//             o = document.createElement("div");
//           (o.className = "waves-ripple"), n.appendChild(o);
//           var r = a(n),
//             s = t.pageY - r.top,
//             u = t.pageX - r.left,
//             d = "scale(" + (n.clientWidth / 100) * 10 + ")";
//           "touches" in t &&
//             ((s = t.touches[0].pageY - r.top), (u = t.touches[0].pageX - r.left)),
//             o.setAttribute("data-hold", Date.now()),
//             o.setAttribute("data-scale", d),
//             o.setAttribute("data-x", u),
//             o.setAttribute("data-y", s);
//           var l = { top: s + "px", left: u + "px" };
//           (o.className = o.className + " waves-notransition"),
//             o.setAttribute("style", i(l)),
//             (o.className = o.className.replace("waves-notransition", "")),
//             (l["-webkit-transform"] = d),
//             (l["-moz-transform"] = d),
//             (l["-ms-transform"] = d),
//             (l["-o-transform"] = d),
//             (l.transform = d),
//             (l.opacity = "1"),
//             (l["-webkit-transition-duration"] = c.duration + "ms"),
//             (l["-moz-transition-duration"] = c.duration + "ms"),
//             (l["-o-transition-duration"] = c.duration + "ms"),
//             (l["transition-duration"] = c.duration + "ms"),
//             (l["-webkit-transition-timing-function"] =
//               "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
//             (l["-moz-transition-timing-function"] =
//               "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
//             (l["-o-transition-timing-function"] =
//               "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
//             (l["transition-timing-function"] =
//               "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
//             o.setAttribute("style", i(l));
//         },
//         hide: function (t) {
//           d.touchup(t);
//           var e = this,
//             n = (1.4 * e.clientWidth, null),
//             a = e.getElementsByClassName("waves-ripple");
//           if (!(a.length > 0)) return !1;
//           n = a[a.length - 1];
//           var o = n.getAttribute("data-x"),
//             r = n.getAttribute("data-y"),
//             s = n.getAttribute("data-scale"),
//             u = Date.now() - Number(n.getAttribute("data-hold")),
//             l = 350 - u;
//           0 > l && (l = 0),
//             setTimeout(function () {
//               var t = {
//                 top: r + "px",
//                 left: o + "px",
//                 opacity: "0",
//                 "-webkit-transition-duration": c.duration + "ms",
//                 "-moz-transition-duration": c.duration + "ms",
//                 "-o-transition-duration": c.duration + "ms",
//                 "transition-duration": c.duration + "ms",
//                 "-webkit-transform": s,
//                 "-moz-transform": s,
//                 "-ms-transform": s,
//                 "-o-transform": s,
//                 transform: s,
//               };
//               n.setAttribute("style", i(t)),
//                 setTimeout(function () {
//                   try {
//                     e.removeChild(n);
//                   } catch (t) {
//                     return !1;
//                   }
//                 }, c.duration);
//             }, l);
//         },
//         wrapInput: function (t) {
//           for (var e = 0; e < t.length; e++) {
//             var n = t[e];
//             if ("input" === n.tagName.toLowerCase()) {
//               var a = n.parentNode;
//               if (
//                 "i" === a.tagName.toLowerCase() &&
//                 -1 !== a.className.indexOf("waves-effect")
//               )
//                 continue;
//               var i = document.createElement("i");
//               i.className = n.className + " waves-input-wrapper";
//               var o = n.getAttribute("style");
//               o || (o = ""),
//                 i.setAttribute("style", o),
//                 (n.className = "waves-button-input"),
//                 n.removeAttribute("style"),
//                 a.replaceChild(i, n),
//                 i.appendChild(n);
//             }
//           }
//         },
//       },
//       d = {
//         touches: 0,
//         allowEvent: function (t) {
//           var e = !0;
//           return (
//             "touchstart" === t.type
//               ? (d.touches += 1)
//               : "touchend" === t.type || "touchcancel" === t.type
//               ? setTimeout(function () {
//                   d.touches > 0 && (d.touches -= 1);
//                 }, 500)
//               : "mousedown" === t.type && d.touches > 0 && (e = !1),
//             e
//           );
//         },
//         touchup: function (t) {
//           d.allowEvent(t);
//         },
//       };
//     (s.displayEffect = function (e) {
//       (e = e || {}),
//         "duration" in e && (c.duration = e.duration),
//         c.wrapInput(u(".waves-effect")),
//         "ontouchstart" in t &&
//           document.body.addEventListener("touchstart", r, !1),
//         document.body.addEventListener("mousedown", r, !1);
//     }),
//       (s.attach = function (e) {
//         "input" === e.tagName.toLowerCase() &&
//           (c.wrapInput([e]), (e = e.parentElement)),
//           "ontouchstart" in t && e.addEventListener("touchstart", r, !1),
//           e.addEventListener("mousedown", r, !1);
//       }),
//       (t.Waves = s),
//       document.addEventListener(
//         "DOMContentLoaded",
//         function () {
//           s.displayEffect();
//         },
//         !1
//       );
//   })(window);

  
//   /* ===========================================================
//  * Bootstrap: fileinput.js v3.1.3
//  * http://jasny.github.com/bootstrap/javascript/#fileinput
//  * ===========================================================
//  * Copyright 2012-2014 Arnold Daniels
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License")
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  * http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  * ========================================================== */

// +function ($) { "use strict";

// var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

// // FILEUPLOAD PUBLIC CLASS DEFINITION
// // =================================

// var Fileinput = function (element, options) {
//   this.$element = $(element)
  
//   this.$input = this.$element.find(':file')
//   if (this.$input.length === 0) return

//   this.name = this.$input.attr('name') || options.name

//   this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]')
//   if (this.$hidden.length === 0) {
//     this.$hidden = $('<input type="hidden">').insertBefore(this.$input)
//   }

//   this.$preview = this.$element.find('.fileinput-preview')
//   var height = this.$preview.css('height')
//   if (this.$preview.css('display') !== 'inline' && height !== '0px' && height !== 'none') {
//     this.$preview.css('line-height', height)
//   }
      
//   this.original = {
//     exists: this.$element.hasClass('fileinput-exists'),
//     preview: this.$preview.html(),
//     hiddenVal: this.$hidden.val()
//   }
  
//   this.listen()
// }

// Fileinput.prototype.listen = function() {
//   this.$input.on('change.bs.fileinput', $.proxy(this.change, this))
//   $(this.$input[0].form).on('reset.bs.fileinput', $.proxy(this.reset, this))
  
//   this.$element.find('[data-trigger="fileinput"]').on('click.bs.fileinput', $.proxy(this.trigger, this))
//   this.$element.find('[data-dismiss="fileinput"]').on('click.bs.fileinput', $.proxy(this.clear, this))
// },

// Fileinput.prototype.change = function(e) {
//   var files = e.target.files === undefined ? (e.target && e.target.value ? [{ name: e.target.value.replace(/^.+\\/, '')}] : []) : e.target.files
  
//   e.stopPropagation()

//   if (files.length === 0) {
//     this.clear()
//     return
//   }

//   this.$hidden.val('')
//   this.$hidden.attr('name', '')
//   this.$input.attr('name', this.name)

//   var file = files[0]

//   if (this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match(/^image\/(gif|png|jpeg)$/) : file.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader !== "undefined") {
//     var reader = new FileReader()
//     var preview = this.$preview
//     var element = this.$element

//     reader.onload = function(re) {
//       var $img = $('<img>')
//       $img[0].src = re.target.result
//       files[0].result = re.target.result
      
//       element.find('.fileinput-filename').text(file.name)
      
//       // if parent has max-height, using `(max-)height: 100%` on child doesn't take padding and border into account
//       if (preview.css('max-height') != 'none') $img.css('max-height', parseInt(preview.css('max-height'), 10) - parseInt(preview.css('padding-top'), 10) - parseInt(preview.css('padding-bottom'), 10)  - parseInt(preview.css('border-top'), 10) - parseInt(preview.css('border-bottom'), 10))
      
//       preview.html($img)
//       element.addClass('fileinput-exists').removeClass('fileinput-new')

//       element.trigger('change.bs.fileinput', files)
//     }

//     reader.readAsDataURL(file)
//   } else {
//     this.$element.find('.fileinput-filename').text(file.name)
//     this.$preview.text(file.name)
    
//     this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
    
//     this.$element.trigger('change.bs.fileinput')
//   }
// },

// Fileinput.prototype.clear = function(e) {
//   if (e) e.preventDefault()
  
//   this.$hidden.val('')
//   this.$hidden.attr('name', this.name)
//   this.$input.attr('name', '')

//   //ie8+ doesn't support changing the value of input with type=file so clone instead
//   if (isIE) { 
//     var inputClone = this.$input.clone(true);
//     this.$input.after(inputClone);
//     this.$input.remove();
//     this.$input = inputClone;
//   } else {
//     this.$input.val('')
//   }

//   this.$preview.html('')
//   this.$element.find('.fileinput-filename').text('')
//   this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
  
//   if (e !== undefined) {
//     this.$input.trigger('change')
//     this.$element.trigger('clear.bs.fileinput')
//   }
// },

// Fileinput.prototype.reset = function() {
//   this.clear()

//   this.$hidden.val(this.original.hiddenVal)
//   this.$preview.html(this.original.preview)
//   this.$element.find('.fileinput-filename').text('')

//   if (this.original.exists) this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
//    else this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
  
//   this.$element.trigger('reset.bs.fileinput')
// },

// Fileinput.prototype.trigger = function(e) {
//   this.$input.trigger('click')
//   e.preventDefault()
// }


// // FILEUPLOAD PLUGIN DEFINITION
// // ===========================

// var old = $.fn.fileinput

// $.fn.fileinput = function (options) {
//   return this.each(function () {
//     var $this = $(this),
//         data = $this.data('bs.fileinput')
//     if (!data) $this.data('bs.fileinput', (data = new Fileinput(this, options)))
//     if (typeof options == 'string') data[options]()
//   })
// }

// $.fn.fileinput.Constructor = Fileinput


// // FILEINPUT NO CONFLICT
// // ====================

// $.fn.fileinput.noConflict = function () {
//   $.fn.fileinput = old
//   return this
// }


// // FILEUPLOAD DATA-API
// // ==================

// $(document).on('click.fileinput.data-api', '[data-provides="fileinput"]', function (e) {
//   var $this = $(this)
//   if ($this.data('bs.fileinput')) return
//   $this.fileinput($this.data())
    
//   var $target = $(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
//   if ($target.length > 0) {
//     e.preventDefault()
//     $target.trigger('click.bs.fileinput')
//   }
// })

// }(window.jQuery);

// /* perfect-scrollbar v0.7.1 */
// !(function t(e, n, r) {
//     function o(i, s) {
//       if (!n[i]) {
//         if (!e[i]) {
//           var a = "function" == typeof require && require;
//           if (!s && a) return a(i, !0);
//           if (l) return l(i, !0);
//           var c = new Error("Cannot find module '" + i + "'");
//           throw ((c.code = "MODULE_NOT_FOUND"), c);
//         }
//         var u = (n[i] = { exports: {} });
//         e[i][0].call(
//           u.exports,
//           function (t) {
//             var n = e[i][1][t];
//             return o(n ? n : t);
//           },
//           u,
//           u.exports,
//           t,
//           e,
//           n,
//           r
//         );
//       }
//       return n[i].exports;
//     }
//     for (
//       var l = "function" == typeof require && require, i = 0;
//       i < r.length;
//       i++
//     )
//       o(r[i]);
//     return o;
//   })(
//     {
//       1: [
//         function (t, e, n) {
//           "use strict";
//           function r(t) {
//             t.fn.perfectScrollbar = function (t) {
//               return this.each(function () {
//                 if ("object" == typeof t || "undefined" == typeof t) {
//                   var e = t;
//                   l.get(this) || o.initialize(this, e);
//                 } else {
//                   var n = t;
//                   "update" === n
//                     ? o.update(this)
//                     : "destroy" === n && o.destroy(this);
//                 }
//               });
//             };
//           }
//           var o = t("../main"),
//             l = t("../plugin/instances");
//           if ("function" == typeof define && define.amd) define(["jquery"], r);
//           else {
//             var i = window.jQuery ? window.jQuery : window.$;
//             "undefined" != typeof i && r(i);
//           }
//           e.exports = r;
//         },
//         { "../main": 7, "../plugin/instances": 18 },
//       ],
//       2: [
//         function (t, e, n) {
//           "use strict";
//           function r(t, e) {
//             var n = t.className.split(" ");
//             n.indexOf(e) < 0 && n.push(e), (t.className = n.join(" "));
//           }
//           function o(t, e) {
//             var n = t.className.split(" "),
//               r = n.indexOf(e);
//             r >= 0 && n.splice(r, 1), (t.className = n.join(" "));
//           }
//           (n.add = function (t, e) {
//             t.classList ? t.classList.add(e) : r(t, e);
//           }),
//             (n.remove = function (t, e) {
//               t.classList ? t.classList.remove(e) : o(t, e);
//             }),
//             (n.list = function (t) {
//               return t.classList
//                 ? Array.prototype.slice.apply(t.classList)
//                 : t.className.split(" ");
//             });
//         },
//         {},
//       ],
//       3: [
//         function (t, e, n) {
//           "use strict";
//           function r(t, e) {
//             return window.getComputedStyle(t)[e];
//           }
//           function o(t, e, n) {
//             return (
//               "number" == typeof n && (n = n.toString() + "px"),
//               (t.style[e] = n),
//               t
//             );
//           }
//           function l(t, e) {
//             for (var n in e) {
//               var r = e[n];
//               "number" == typeof r && (r = r.toString() + "px"), (t.style[n] = r);
//             }
//             return t;
//           }
//           var i = {};
//           (i.e = function (t, e) {
//             var n = document.createElement(t);
//             return (n.className = e), n;
//           }),
//             (i.appendTo = function (t, e) {
//               return e.appendChild(t), t;
//             }),
//             (i.css = function (t, e, n) {
//               return "object" == typeof e
//                 ? l(t, e)
//                 : "undefined" == typeof n
//                 ? r(t, e)
//                 : o(t, e, n);
//             }),
//             (i.matches = function (t, e) {
//               return "undefined" != typeof t.matches
//                 ? t.matches(e)
//                 : "undefined" != typeof t.matchesSelector
//                 ? t.matchesSelector(e)
//                 : "undefined" != typeof t.webkitMatchesSelector
//                 ? t.webkitMatchesSelector(e)
//                 : "undefined" != typeof t.mozMatchesSelector
//                 ? t.mozMatchesSelector(e)
//                 : "undefined" != typeof t.msMatchesSelector
//                 ? t.msMatchesSelector(e)
//                 : void 0;
//             }),
//             (i.remove = function (t) {
//               "undefined" != typeof t.remove
//                 ? t.remove()
//                 : t.parentNode && t.parentNode.removeChild(t);
//             }),
//             (i.queryChildren = function (t, e) {
//               return Array.prototype.filter.call(t.childNodes, function (t) {
//                 return i.matches(t, e);
//               });
//             }),
//             (e.exports = i);
//         },
//         {},
//       ],
//       4: [
//         function (t, e, n) {
//           "use strict";
//           var r = function (t) {
//             (this.element = t), (this.events = {});
//           };
//           (r.prototype.bind = function (t, e) {
//             "undefined" == typeof this.events[t] && (this.events[t] = []),
//               this.events[t].push(e),
//               this.element.addEventListener(t, e, !1);
//           }),
//             (r.prototype.unbind = function (t, e) {
//               var n = "undefined" != typeof e;
//               this.events[t] = this.events[t].filter(function (r) {
//                 return (
//                   !(!n || r === e) ||
//                   (this.element.removeEventListener(t, r, !1), !1)
//                 );
//               }, this);
//             }),
//             (r.prototype.unbindAll = function () {
//               for (var t in this.events) this.unbind(t);
//             });
//           var o = function () {
//             this.eventElements = [];
//           };
//           (o.prototype.eventElement = function (t) {
//             var e = this.eventElements.filter(function (e) {
//               return e.element === t;
//             })[0];
//             return (
//               "undefined" == typeof e &&
//                 ((e = new r(t)), this.eventElements.push(e)),
//               e
//             );
//           }),
//             (o.prototype.bind = function (t, e, n) {
//               this.eventElement(t).bind(e, n);
//             }),
//             (o.prototype.unbind = function (t, e, n) {
//               this.eventElement(t).unbind(e, n);
//             }),
//             (o.prototype.unbindAll = function () {
//               for (var t = 0; t < this.eventElements.length; t++)
//                 this.eventElements[t].unbindAll();
//             }),
//             (o.prototype.once = function (t, e, n) {
//               var r = this.eventElement(t),
//                 o = function (t) {
//                   r.unbind(e, o), n(t);
//                 };
//               r.bind(e, o);
//             }),
//             (e.exports = o);
//         },
//         {},
//       ],
//       5: [
//         function (t, e, n) {
//           "use strict";
//           e.exports = (function () {
//             function t() {
//               return Math.floor(65536 * (1 + Math.random()))
//                 .toString(16)
//                 .substring(1);
//             }
//             return function () {
//               return (
//                 t() +
//                 t() +
//                 "-" +
//                 t() +
//                 "-" +
//                 t() +
//                 "-" +
//                 t() +
//                 "-" +
//                 t() +
//                 t() +
//                 t()
//               );
//             };
//           })();
//         },
//         {},
//       ],
//       6: [
//         function (t, e, n) {
//           "use strict";
//           function r(t) {
//             return function (e, n) {
//               t(e, "ps--in-scrolling"),
//                 "undefined" != typeof n
//                   ? t(e, "ps--" + n)
//                   : (t(e, "ps--x"), t(e, "ps--y"));
//             };
//           }
//           var o = t("./class"),
//             l = t("./dom"),
//             i = (n.toInt = function (t) {
//               return parseInt(t, 10) || 0;
//             }),
//             s = (n.clone = function (t) {
//               if (t) {
//                 if (Array.isArray(t)) return t.map(s);
//                 if ("object" == typeof t) {
//                   var e = {};
//                   for (var n in t) e[n] = s(t[n]);
//                   return e;
//                 }
//                 return t;
//               }
//               return null;
//             });
//           (n.extend = function (t, e) {
//             var n = s(t);
//             for (var r in e) n[r] = s(e[r]);
//             return n;
//           }),
//             (n.isEditable = function (t) {
//               return (
//                 l.matches(t, "input,[contenteditable]") ||
//                 l.matches(t, "select,[contenteditable]") ||
//                 l.matches(t, "textarea,[contenteditable]") ||
//                 l.matches(t, "button,[contenteditable]")
//               );
//             }),
//             (n.removePsClasses = function (t) {
//               for (var e = o.list(t), n = 0; n < e.length; n++) {
//                 var r = e[n];
//                 0 === r.indexOf("ps-") && o.remove(t, r);
//               }
//             }),
//             (n.outerWidth = function (t) {
//               return (
//                 i(l.css(t, "width")) +
//                 i(l.css(t, "paddingLeft")) +
//                 i(l.css(t, "paddingRight")) +
//                 i(l.css(t, "borderLeftWidth")) +
//                 i(l.css(t, "borderRightWidth"))
//               );
//             }),
//             (n.startScrolling = r(o.add)),
//             (n.stopScrolling = r(o.remove)),
//             (n.env = {
//               isWebKit:
//                 "undefined" != typeof document &&
//                 "WebkitAppearance" in document.documentElement.style,
//               supportsTouch:
//                 "undefined" != typeof window &&
//                 ("ontouchstart" in window ||
//                   (window.DocumentTouch &&
//                     document instanceof window.DocumentTouch)),
//               supportsIePointer:
//                 "undefined" != typeof window &&
//                 null !== window.navigator.msMaxTouchPoints,
//             });
//         },
//         { "./class": 2, "./dom": 3 },
//       ],
//       7: [
//         function (t, e, n) {
//           "use strict";
//           var r = t("./plugin/destroy"),
//             o = t("./plugin/initialize"),
//             l = t("./plugin/update");
//           e.exports = { initialize: o, update: l, destroy: r };
//         },
//         {
//           "./plugin/destroy": 9,
//           "./plugin/initialize": 17,
//           "./plugin/update": 21,
//         },
//       ],
//       8: [
//         function (t, e, n) {
//           "use strict";
//           e.exports = {
//             handlers: [
//               "click-rail",
//               "drag-scrollbar",
//               "keyboard",
//               "wheel",
//               "touch",
//             ],
//             maxScrollbarLength: null,
//             minScrollbarLength: null,
//             scrollXMarginOffset: 0,
//             scrollYMarginOffset: 0,
//             suppressScrollX: !1,
//             suppressScrollY: !1,
//             swipePropagation: !0,
//             swipeEasing: !0,
//             useBothWheelAxes: !1,
//             wheelPropagation: !1,
//             wheelSpeed: 1,
//             theme: "default",
//           };
//         },
//         {},
//       ],
//       9: [
//         function (t, e, n) {
//           "use strict";
//           var r = t("../lib/helper"),
//             o = t("../lib/dom"),
//             l = t("./instances");
//           e.exports = function (t) {
//             var e = l.get(t);
//             e &&
//               (e.event.unbindAll(),
//               o.remove(e.scrollbarX),
//               o.remove(e.scrollbarY),
//               o.remove(e.scrollbarXRail),
//               o.remove(e.scrollbarYRail),
//               r.removePsClasses(t),
//               l.remove(t));
//           };
//         },
//         { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 },
//       ],
//       10: [
//         function (t, e, n) {
//           "use strict";
//           function r(t, e) {
//             function n(t) {
//               return t.getBoundingClientRect();
//             }
//             var r = function (t) {
//               t.stopPropagation();
//             };
//             e.event.bind(e.scrollbarY, "click", r),
//               e.event.bind(e.scrollbarYRail, "click", function (r) {
//                 var o = r.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
//                   s = o > e.scrollbarYTop ? 1 : -1;
//                 i(t, "top", t.scrollTop + s * e.containerHeight),
//                   l(t),
//                   r.stopPropagation();
//               }),
//               e.event.bind(e.scrollbarX, "click", r),
//               e.event.bind(e.scrollbarXRail, "click", function (r) {
//                 var o = r.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
//                   s = o > e.scrollbarXLeft ? 1 : -1;
//                 i(t, "left", t.scrollLeft + s * e.containerWidth),
//                   l(t),
//                   r.stopPropagation();
//               });
//           }
//           var o = t("../instances"),
//             l = t("../update-geometry"),
//             i = t("../update-scroll");
//           e.exports = function (t) {
//             var e = o.get(t);
//             r(t, e);
//           };
//         },
//         { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
//       ],
//       11: [
//         function (t, e, n) {
//           "use strict";
//           function r(t, e) {
//             function n(n) {
//               var o = r + n * e.railXRatio,
//                 i =
//                   Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) +
//                   e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
//               o < 0
//                 ? (e.scrollbarXLeft = 0)
//                 : o > i
//                 ? (e.scrollbarXLeft = i)
//                 : (e.scrollbarXLeft = o);
//               var s =
//                 l.toInt(
//                   (e.scrollbarXLeft * (e.contentWidth - e.containerWidth)) /
//                     (e.containerWidth - e.railXRatio * e.scrollbarXWidth)
//                 ) - e.negativeScrollAdjustment;
//               c(t, "left", s);
//             }
//             var r = null,
//               o = null,
//               s = function (e) {
//                 n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault();
//               },
//               u = function () {
//                 l.stopScrolling(t, "x"),
//                   e.event.unbind(e.ownerDocument, "mousemove", s);
//               };
//             e.event.bind(e.scrollbarX, "mousedown", function (n) {
//               (o = n.pageX),
//                 (r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio),
//                 l.startScrolling(t, "x"),
//                 e.event.bind(e.ownerDocument, "mousemove", s),
//                 e.event.once(e.ownerDocument, "mouseup", u),
//                 n.stopPropagation(),
//                 n.preventDefault();
//             });
//           }
//           function o(t, e) {
//             function n(n) {
//               var o = r + n * e.railYRatio,
//                 i =
//                   Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) +
//                   e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
//               o < 0
//                 ? (e.scrollbarYTop = 0)
//                 : o > i
//                 ? (e.scrollbarYTop = i)
//                 : (e.scrollbarYTop = o);
//               var s = l.toInt(
//                 (e.scrollbarYTop * (e.contentHeight - e.containerHeight)) /
//                   (e.containerHeight - e.railYRatio * e.scrollbarYHeight)
//               );
//               c(t, "top", s);
//             }
//             var r = null,
//               o = null,
//               s = function (e) {
//                 n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault();
//               },
//               u = function () {
//                 l.stopScrolling(t, "y"),
//                   e.event.unbind(e.ownerDocument, "mousemove", s);
//               };
//             e.event.bind(e.scrollbarY, "mousedown", function (n) {
//               (o = n.pageY),
//                 (r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio),
//                 l.startScrolling(t, "y"),
//                 e.event.bind(e.ownerDocument, "mousemove", s),
//                 e.event.once(e.ownerDocument, "mouseup", u),
//                 n.stopPropagation(),
//                 n.preventDefault();
//             });
//           }
//           var l = t("../../lib/helper"),
//             i = t("../../lib/dom"),
//             s = t("../instances"),
//             a = t("../update-geometry"),
//             c = t("../update-scroll");
//           e.exports = function (t) {
//             var e = s.get(t);
//             r(t, e), o(t, e);
//           };
//         },
//         {
//           "../../lib/dom": 3,
//           "../../lib/helper": 6,
//           "../instances": 18,
//           "../update-geometry": 19,
//           "../update-scroll": 20,
//         },
//       ],
//       12: [
//         function (t, e, n) {
//           "use strict";
//           function r(t, e) {
//             function n(n, r) {
//               var o = t.scrollTop;
//               if (0 === n) {
//                 if (!e.scrollbarYActive) return !1;
//                 if (
//                   (0 === o && r > 0) ||
//                   (o >= e.contentHeight - e.containerHeight && r < 0)
//                 )
//                   return !e.settings.wheelPropagation;
//               }
//               var l = t.scrollLeft;
//               if (0 === r) {
//                 if (!e.scrollbarXActive) return !1;
//                 if (
//                   (0 === l && n < 0) ||
//                   (l >= e.contentWidth - e.containerWidth && n > 0)
//                 )
//                   return !e.settings.wheelPropagation;
//               }
//               return !0;
//             }
//             var r = !1;
//             e.event.bind(t, "mouseenter", function () {
//               r = !0;
//             }),
//               e.event.bind(t, "mouseleave", function () {
//                 r = !1;
//               });
//             var i = !1;
//             e.event.bind(e.ownerDocument, "keydown", function (c) {
//               if (
//                 !(
//                   (c.isDefaultPrevented && c.isDefaultPrevented()) ||
//                   c.defaultPrevented
//                 )
//               ) {
//                 var u =
//                   l.matches(e.scrollbarX, ":focus") ||
//                   l.matches(e.scrollbarY, ":focus");
//                 if (r || u) {
//                   var d = document.activeElement
//                     ? document.activeElement
//                     : e.ownerDocument.activeElement;
//                   if (d) {
//                     if ("IFRAME" === d.tagName)
//                       d = d.contentDocument.activeElement;
//                     else for (; d.shadowRoot; ) d = d.shadowRoot.activeElement;
//                     if (o.isEditable(d)) return;
//                   }
//                   var p = 0,
//                     f = 0;
//                   switch (c.which) {
//                     case 37:
//                       p = c.metaKey
//                         ? -e.contentWidth
//                         : c.altKey
//                         ? -e.containerWidth
//                         : -30;
//                       break;
//                     case 38:
//                       f = c.metaKey
//                         ? e.contentHeight
//                         : c.altKey
//                         ? e.containerHeight
//                         : 30;
//                       break;
//                     case 39:
//                       p = c.metaKey
//                         ? e.contentWidth
//                         : c.altKey
//                         ? e.containerWidth
//                         : 30;
//                       break;
//                     case 40:
//                       f = c.metaKey
//                         ? -e.contentHeight
//                         : c.altKey
//                         ? -e.containerHeight
//                         : -30;
//                       break;
//                     case 33:
//                       f = 90;
//                       break;
//                     case 32:
//                       f = c.shiftKey ? 90 : -90;
//                       break;
//                     case 34:
//                       f = -90;
//                       break;
//                     case 35:
//                       f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
//                       break;
//                     case 36:
//                       f = c.ctrlKey ? t.scrollTop : e.containerHeight;
//                       break;
//                     default:
//                       return;
//                   }
//                   a(t, "top", t.scrollTop - f),
//                     a(t, "left", t.scrollLeft + p),
//                     s(t),
//                     (i = n(p, f)),
//                     i && c.preventDefault();
//                 }
//               }
//             });
//           }
//           var o = t("../../lib/helper"),
//             l = t("../../lib/dom"),
//             i = t("../instances"),
//             s = t("../update-geometry"),
//             a = t("../update-scroll");
//           e.exports = function (t) {
//             var e = i.get(t);
//             r(t, e);
//           };
//         },
//         {
//           "../../lib/dom": 3,
//           "../../lib/helper": 6,
//           "../instances": 18,
//           "../update-geometry": 19,
//           "../update-scroll": 20,
//         },
//       ],
//       13: [
//         function (t, e, n) {
//           "use strict";
//           function r(t, e) {
//             function n(n, r) {
//               var o = t.scrollTop;
//               if (0 === n) {
//                 if (!e.scrollbarYActive) return !1;
//                 if (
//                   (0 === o && r > 0) ||
//                   (o >= e.contentHeight - e.containerHeight && r < 0)
//                 )
//                   return !e.settings.wheelPropagation;
//               }
//               var l = t.scrollLeft;
//               if (0 === r) {
//                 if (!e.scrollbarXActive) return !1;
//                 if (
//                   (0 === l && n < 0) ||
//                   (l >= e.contentWidth - e.containerWidth && n > 0)
//                 )
//                   return !e.settings.wheelPropagation;
//               }
//               return !0;
//             }
//             function r(t) {
//               var e = t.deltaX,
//                 n = -1 * t.deltaY;
//               return (
//                 ("undefined" != typeof e && "undefined" != typeof n) ||
//                   ((e = (-1 * t.wheelDeltaX) / 6), (n = t.wheelDeltaY / 6)),
//                 t.deltaMode && 1 === t.deltaMode && ((e *= 10), (n *= 10)),
//                 e !== e && n !== n && ((e = 0), (n = t.wheelDelta)),
//                 t.shiftKey ? [-n, -e] : [e, n]
//               );
//             }
//             function o(e, n) {
//               var r = t.querySelector(
//                 "textarea:hover, select[multiple]:hover, .ps-child:hover"
//               );
//               if (r) {
//                 var o = window.getComputedStyle(r),
//                   l = [o.overflow, o.overflowX, o.overflowY].join("");
//                 if (!l.match(/(scroll|auto)/)) return !1;
//                 var i = r.scrollHeight - r.clientHeight;
//                 if (
//                   i > 0 &&
//                   !((0 === r.scrollTop && n > 0) || (r.scrollTop === i && n < 0))
//                 )
//                   return !0;
//                 var s = r.scrollLeft - r.clientWidth;
//                 if (
//                   s > 0 &&
//                   !(
//                     (0 === r.scrollLeft && e < 0) ||
//                     (r.scrollLeft === s && e > 0)
//                   )
//                 )
//                   return !0;
//               }
//               return !1;
//             }
//             function s(s) {
//               var c = r(s),
//                 u = c[0],
//                 d = c[1];
//               o(u, d) ||
//                 ((a = !1),
//                 e.settings.useBothWheelAxes
//                   ? e.scrollbarYActive && !e.scrollbarXActive
//                     ? (d
//                         ? i(t, "top", t.scrollTop - d * e.settings.wheelSpeed)
//                         : i(t, "top", t.scrollTop + u * e.settings.wheelSpeed),
//                       (a = !0))
//                     : e.scrollbarXActive &&
//                       !e.scrollbarYActive &&
//                       (u
//                         ? i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)
//                         : i(t, "left", t.scrollLeft - d * e.settings.wheelSpeed),
//                       (a = !0))
//                   : (i(t, "top", t.scrollTop - d * e.settings.wheelSpeed),
//                     i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)),
//                 l(t),
//                 (a = a || n(u, d)),
//                 a && (s.stopPropagation(), s.preventDefault()));
//             }
//             var a = !1;
//             "undefined" != typeof window.onwheel
//               ? e.event.bind(t, "wheel", s)
//               : "undefined" != typeof window.onmousewheel &&
//                 e.event.bind(t, "mousewheel", s);
//           }
//           var o = t("../instances"),
//             l = t("../update-geometry"),
//             i = t("../update-scroll");
//           e.exports = function (t) {
//             var e = o.get(t);
//             r(t, e);
//           };
//         },
//         { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
//       ],
//       14: [
//         function (t, e, n) {
//           "use strict";
//           function r(t, e) {
//             e.event.bind(t, "scroll", function () {
//               l(t);
//             });
//           }
//           var o = t("../instances"),
//             l = t("../update-geometry");
//           e.exports = function (t) {
//             var e = o.get(t);
//             r(t, e);
//           };
//         },
//         { "../instances": 18, "../update-geometry": 19 },
//       ],
//       15: [
//         function (t, e, n) {
//           "use strict";
//           function r(t, e) {
//             function n() {
//               var t = window.getSelection
//                 ? window.getSelection()
//                 : document.getSelection
//                 ? document.getSelection()
//                 : "";
//               return 0 === t.toString().length
//                 ? null
//                 : t.getRangeAt(0).commonAncestorContainer;
//             }
//             function r() {
//               c ||
//                 (c = setInterval(function () {
//                   return l.get(t)
//                     ? (s(t, "top", t.scrollTop + u.top),
//                       s(t, "left", t.scrollLeft + u.left),
//                       void i(t))
//                     : void clearInterval(c);
//                 }, 50));
//             }
//             function a() {
//               c && (clearInterval(c), (c = null)), o.stopScrolling(t);
//             }
//             var c = null,
//               u = { top: 0, left: 0 },
//               d = !1;
//             e.event.bind(e.ownerDocument, "selectionchange", function () {
//               t.contains(n()) ? (d = !0) : ((d = !1), a());
//             }),
//               e.event.bind(window, "mouseup", function () {
//                 d && ((d = !1), a());
//               }),
//               e.event.bind(window, "keyup", function () {
//                 d && ((d = !1), a());
//               }),
//               e.event.bind(window, "mousemove", function (e) {
//                 if (d) {
//                   var n = { x: e.pageX, y: e.pageY },
//                     l = {
//                       left: t.offsetLeft,
//                       right: t.offsetLeft + t.offsetWidth,
//                       top: t.offsetTop,
//                       bottom: t.offsetTop + t.offsetHeight,
//                     };
//                   n.x < l.left + 3
//                     ? ((u.left = -5), o.startScrolling(t, "x"))
//                     : n.x > l.right - 3
//                     ? ((u.left = 5), o.startScrolling(t, "x"))
//                     : (u.left = 0),
//                     n.y < l.top + 3
//                       ? (l.top + 3 - n.y < 5 ? (u.top = -5) : (u.top = -20),
//                         o.startScrolling(t, "y"))
//                       : n.y > l.bottom - 3
//                       ? (n.y - l.bottom + 3 < 5 ? (u.top = 5) : (u.top = 20),
//                         o.startScrolling(t, "y"))
//                       : (u.top = 0),
//                     0 === u.top && 0 === u.left ? a() : r();
//                 }
//               });
//           }
//           var o = t("../../lib/helper"),
//             l = t("../instances"),
//             i = t("../update-geometry"),
//             s = t("../update-scroll");
//           e.exports = function (t) {
//             var e = l.get(t);
//             r(t, e);
//           };
//         },
//         {
//           "../../lib/helper": 6,
//           "../instances": 18,
//           "../update-geometry": 19,
//           "../update-scroll": 20,
//         },
//       ],
//       16: [
//         function (t, e, n) {
//           "use strict";
//           function r(t, e, n, r) {
//             function o(n, r) {
//               var o = t.scrollTop,
//                 l = t.scrollLeft,
//                 i = Math.abs(n),
//                 s = Math.abs(r);
//               if (s > i) {
//                 if (
//                   (r < 0 && o === e.contentHeight - e.containerHeight) ||
//                   (r > 0 && 0 === o)
//                 )
//                   return !e.settings.swipePropagation;
//               } else if (
//                 i > s &&
//                 ((n < 0 && l === e.contentWidth - e.containerWidth) ||
//                   (n > 0 && 0 === l))
//               )
//                 return !e.settings.swipePropagation;
//               return !0;
//             }
//             function a(e, n) {
//               s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), i(t);
//             }
//             function c() {
//               w = !0;
//             }
//             function u() {
//               w = !1;
//             }
//             function d(t) {
//               return t.targetTouches ? t.targetTouches[0] : t;
//             }
//             function p(t) {
//               return (
//                 !(!t.targetTouches || 1 !== t.targetTouches.length) ||
//                 !(
//                   !t.pointerType ||
//                   "mouse" === t.pointerType ||
//                   t.pointerType === t.MSPOINTER_TYPE_MOUSE
//                 )
//               );
//             }
//             function f(t) {
//               if (p(t)) {
//                 Y = !0;
//                 var e = d(t);
//                 (g.pageX = e.pageX),
//                   (g.pageY = e.pageY),
//                   (v = new Date().getTime()),
//                   null !== y && clearInterval(y),
//                   t.stopPropagation();
//               }
//             }
//             function h(t) {
//               if ((!Y && e.settings.swipePropagation && f(t), !w && Y && p(t))) {
//                 var n = d(t),
//                   r = { pageX: n.pageX, pageY: n.pageY },
//                   l = r.pageX - g.pageX,
//                   i = r.pageY - g.pageY;
//                 a(l, i), (g = r);
//                 var s = new Date().getTime(),
//                   c = s - v;
//                 c > 0 && ((m.x = l / c), (m.y = i / c), (v = s)),
//                   o(l, i) && (t.stopPropagation(), t.preventDefault());
//               }
//             }
//             function b() {
//               !w &&
//                 Y &&
//                 ((Y = !1),
//                 e.settings.swipeEasing &&
//                   (clearInterval(y),
//                   (y = setInterval(function () {
//                     return l.get(t) && (m.x || m.y)
//                       ? Math.abs(m.x) < 0.01 && Math.abs(m.y) < 0.01
//                         ? void clearInterval(y)
//                         : (a(30 * m.x, 30 * m.y), (m.x *= 0.8), void (m.y *= 0.8))
//                       : void clearInterval(y);
//                   }, 10))));
//             }
//             var g = {},
//               v = 0,
//               m = {},
//               y = null,
//               w = !1,
//               Y = !1;
//             n
//               ? (e.event.bind(window, "touchstart", c),
//                 e.event.bind(window, "touchend", u),
//                 e.event.bind(t, "touchstart", f),
//                 e.event.bind(t, "touchmove", h),
//                 e.event.bind(t, "touchend", b))
//               : r &&
//                 (window.PointerEvent
//                   ? (e.event.bind(window, "pointerdown", c),
//                     e.event.bind(window, "pointerup", u),
//                     e.event.bind(t, "pointerdown", f),
//                     e.event.bind(t, "pointermove", h),
//                     e.event.bind(t, "pointerup", b))
//                   : window.MSPointerEvent &&
//                     (e.event.bind(window, "MSPointerDown", c),
//                     e.event.bind(window, "MSPointerUp", u),
//                     e.event.bind(t, "MSPointerDown", f),
//                     e.event.bind(t, "MSPointerMove", h),
//                     e.event.bind(t, "MSPointerUp", b)));
//           }
//           var o = t("../../lib/helper"),
//             l = t("../instances"),
//             i = t("../update-geometry"),
//             s = t("../update-scroll");
//           e.exports = function (t) {
//             if (o.env.supportsTouch || o.env.supportsIePointer) {
//               var e = l.get(t);
//               r(t, e, o.env.supportsTouch, o.env.supportsIePointer);
//             }
//           };
//         },
//         {
//           "../../lib/helper": 6,
//           "../instances": 18,
//           "../update-geometry": 19,
//           "../update-scroll": 20,
//         },
//       ],
//       17: [
//         function (t, e, n) {
//           "use strict";
//           var r = t("../lib/helper"),
//             o = t("../lib/class"),
//             l = t("./instances"),
//             i = t("./update-geometry"),
//             s = {
//               "click-rail": t("./handler/click-rail"),
//               "drag-scrollbar": t("./handler/drag-scrollbar"),
//               keyboard: t("./handler/keyboard"),
//               wheel: t("./handler/mouse-wheel"),
//               touch: t("./handler/touch"),
//               selection: t("./handler/selection"),
//             },
//             a = t("./handler/native-scroll");
//           e.exports = function (t, e) {
//             (e = "object" == typeof e ? e : {}), o.add(t, "ps");
//             var n = l.add(t);
//             (n.settings = r.extend(n.settings, e)),
//               o.add(t, "ps--theme_" + n.settings.theme),
//               n.settings.handlers.forEach(function (e) {
//                 s[e](t);
//               }),
//               a(t),
//               i(t);
//           };
//         },
//         {
//           "../lib/class": 2,
//           "../lib/helper": 6,
//           "./handler/click-rail": 10,
//           "./handler/drag-scrollbar": 11,
//           "./handler/keyboard": 12,
//           "./handler/mouse-wheel": 13,
//           "./handler/native-scroll": 14,
//           "./handler/selection": 15,
//           "./handler/touch": 16,
//           "./instances": 18,
//           "./update-geometry": 19,
//         },
//       ],
//       18: [
//         function (t, e, n) {
//           "use strict";
//           function r(t) {
//             function e() {
//               a.add(t, "ps--focus");
//             }
//             function n() {
//               a.remove(t, "ps--focus");
//             }
//             var r = this;
//             (r.settings = s.clone(c)),
//               (r.containerWidth = null),
//               (r.containerHeight = null),
//               (r.contentWidth = null),
//               (r.contentHeight = null),
//               (r.isRtl = "rtl" === u.css(t, "direction")),
//               (r.isNegativeScroll = (function () {
//                 var e = t.scrollLeft,
//                   n = null;
//                 return (
//                   (t.scrollLeft = -1),
//                   (n = t.scrollLeft < 0),
//                   (t.scrollLeft = e),
//                   n
//                 );
//               })()),
//               (r.negativeScrollAdjustment = r.isNegativeScroll
//                 ? t.scrollWidth - t.clientWidth
//                 : 0),
//               (r.event = new d()),
//               (r.ownerDocument = t.ownerDocument || document),
//               (r.scrollbarXRail = u.appendTo(
//                 u.e("div", "ps__scrollbar-x-rail"),
//                 t
//               )),
//               (r.scrollbarX = u.appendTo(
//                 u.e("div", "ps__scrollbar-x"),
//                 r.scrollbarXRail
//               )),
//               r.scrollbarX.setAttribute("tabindex", 0),
//               r.event.bind(r.scrollbarX, "focus", e),
//               r.event.bind(r.scrollbarX, "blur", n),
//               (r.scrollbarXActive = null),
//               (r.scrollbarXWidth = null),
//               (r.scrollbarXLeft = null),
//               (r.scrollbarXBottom = s.toInt(u.css(r.scrollbarXRail, "bottom"))),
//               (r.isScrollbarXUsingBottom =
//                 r.scrollbarXBottom === r.scrollbarXBottom),
//               (r.scrollbarXTop = r.isScrollbarXUsingBottom
//                 ? null
//                 : s.toInt(u.css(r.scrollbarXRail, "top"))),
//               (r.railBorderXWidth =
//                 s.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) +
//                 s.toInt(u.css(r.scrollbarXRail, "borderRightWidth"))),
//               u.css(r.scrollbarXRail, "display", "block"),
//               (r.railXMarginWidth =
//                 s.toInt(u.css(r.scrollbarXRail, "marginLeft")) +
//                 s.toInt(u.css(r.scrollbarXRail, "marginRight"))),
//               u.css(r.scrollbarXRail, "display", ""),
//               (r.railXWidth = null),
//               (r.railXRatio = null),
//               (r.scrollbarYRail = u.appendTo(
//                 u.e("div", "ps__scrollbar-y-rail"),
//                 t
//               )),
//               (r.scrollbarY = u.appendTo(
//                 u.e("div", "ps__scrollbar-y"),
//                 r.scrollbarYRail
//               )),
//               r.scrollbarY.setAttribute("tabindex", 0),
//               r.event.bind(r.scrollbarY, "focus", e),
//               r.event.bind(r.scrollbarY, "blur", n),
//               (r.scrollbarYActive = null),
//               (r.scrollbarYHeight = null),
//               (r.scrollbarYTop = null),
//               (r.scrollbarYRight = s.toInt(u.css(r.scrollbarYRail, "right"))),
//               (r.isScrollbarYUsingRight =
//                 r.scrollbarYRight === r.scrollbarYRight),
//               (r.scrollbarYLeft = r.isScrollbarYUsingRight
//                 ? null
//                 : s.toInt(u.css(r.scrollbarYRail, "left"))),
//               (r.scrollbarYOuterWidth = r.isRtl
//                 ? s.outerWidth(r.scrollbarY)
//                 : null),
//               (r.railBorderYWidth =
//                 s.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) +
//                 s.toInt(u.css(r.scrollbarYRail, "borderBottomWidth"))),
//               u.css(r.scrollbarYRail, "display", "block"),
//               (r.railYMarginHeight =
//                 s.toInt(u.css(r.scrollbarYRail, "marginTop")) +
//                 s.toInt(u.css(r.scrollbarYRail, "marginBottom"))),
//               u.css(r.scrollbarYRail, "display", ""),
//               (r.railYHeight = null),
//               (r.railYRatio = null);
//           }
//           function o(t) {
//             return t.getAttribute("data-ps-id");
//           }
//           function l(t, e) {
//             t.setAttribute("data-ps-id", e);
//           }
//           function i(t) {
//             t.removeAttribute("data-ps-id");
//           }
//           var s = t("../lib/helper"),
//             a = t("../lib/class"),
//             c = t("./default-setting"),
//             u = t("../lib/dom"),
//             d = t("../lib/event-manager"),
//             p = t("../lib/guid"),
//             f = {};
//           (n.add = function (t) {
//             var e = p();
//             return l(t, e), (f[e] = new r(t)), f[e];
//           }),
//             (n.remove = function (t) {
//               delete f[o(t)], i(t);
//             }),
//             (n.get = function (t) {
//               return f[o(t)];
//             });
//         },
//         {
//           "../lib/class": 2,
//           "../lib/dom": 3,
//           "../lib/event-manager": 4,
//           "../lib/guid": 5,
//           "../lib/helper": 6,
//           "./default-setting": 8,
//         },
//       ],
//       19: [
//         function (t, e, n) {
//           "use strict";
//           function r(t, e) {
//             return (
//               t.settings.minScrollbarLength &&
//                 (e = Math.max(e, t.settings.minScrollbarLength)),
//               t.settings.maxScrollbarLength &&
//                 (e = Math.min(e, t.settings.maxScrollbarLength)),
//               e
//             );
//           }
//           function o(t, e) {
//             var n = { width: e.railXWidth };
//             e.isRtl
//               ? (n.left =
//                   e.negativeScrollAdjustment +
//                   t.scrollLeft +
//                   e.containerWidth -
//                   e.contentWidth)
//               : (n.left = t.scrollLeft),
//               e.isScrollbarXUsingBottom
//                 ? (n.bottom = e.scrollbarXBottom - t.scrollTop)
//                 : (n.top = e.scrollbarXTop + t.scrollTop),
//               s.css(e.scrollbarXRail, n);
//             var r = { top: t.scrollTop, height: e.railYHeight };
//             e.isScrollbarYUsingRight
//               ? e.isRtl
//                 ? (r.right =
//                     e.contentWidth -
//                     (e.negativeScrollAdjustment + t.scrollLeft) -
//                     e.scrollbarYRight -
//                     e.scrollbarYOuterWidth)
//                 : (r.right = e.scrollbarYRight - t.scrollLeft)
//               : e.isRtl
//               ? (r.left =
//                   e.negativeScrollAdjustment +
//                   t.scrollLeft +
//                   2 * e.containerWidth -
//                   e.contentWidth -
//                   e.scrollbarYLeft -
//                   e.scrollbarYOuterWidth)
//               : (r.left = e.scrollbarYLeft + t.scrollLeft),
//               s.css(e.scrollbarYRail, r),
//               s.css(e.scrollbarX, {
//                 left: e.scrollbarXLeft,
//                 width: e.scrollbarXWidth - e.railBorderXWidth,
//               }),
//               s.css(e.scrollbarY, {
//                 top: e.scrollbarYTop,
//                 height: e.scrollbarYHeight - e.railBorderYWidth,
//               });
//           }
//           var l = t("../lib/helper"),
//             i = t("../lib/class"),
//             s = t("../lib/dom"),
//             a = t("./instances"),
//             c = t("./update-scroll");
//           e.exports = function (t) {
//             var e = a.get(t);
//             (e.containerWidth = t.clientWidth),
//               (e.containerHeight = t.clientHeight),
//               (e.contentWidth = t.scrollWidth),
//               (e.contentHeight = t.scrollHeight);
//             var n;
//             t.contains(e.scrollbarXRail) ||
//               ((n = s.queryChildren(t, ".ps__scrollbar-x-rail")),
//               n.length > 0 &&
//                 n.forEach(function (t) {
//                   s.remove(t);
//                 }),
//               s.appendTo(e.scrollbarXRail, t)),
//               t.contains(e.scrollbarYRail) ||
//                 ((n = s.queryChildren(t, ".ps__scrollbar-y-rail")),
//                 n.length > 0 &&
//                   n.forEach(function (t) {
//                     s.remove(t);
//                   }),
//                 s.appendTo(e.scrollbarYRail, t)),
//               !e.settings.suppressScrollX &&
//               e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
//                 ? ((e.scrollbarXActive = !0),
//                   (e.railXWidth = e.containerWidth - e.railXMarginWidth),
//                   (e.railXRatio = e.containerWidth / e.railXWidth),
//                   (e.scrollbarXWidth = r(
//                     e,
//                     l.toInt((e.railXWidth * e.containerWidth) / e.contentWidth)
//                   )),
//                   (e.scrollbarXLeft = l.toInt(
//                     ((e.negativeScrollAdjustment + t.scrollLeft) *
//                       (e.railXWidth - e.scrollbarXWidth)) /
//                       (e.contentWidth - e.containerWidth)
//                   )))
//                 : (e.scrollbarXActive = !1),
//               !e.settings.suppressScrollY &&
//               e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
//                 ? ((e.scrollbarYActive = !0),
//                   (e.railYHeight = e.containerHeight - e.railYMarginHeight),
//                   (e.railYRatio = e.containerHeight / e.railYHeight),
//                   (e.scrollbarYHeight = r(
//                     e,
//                     l.toInt((e.railYHeight * e.containerHeight) / e.contentHeight)
//                   )),
//                   (e.scrollbarYTop = l.toInt(
//                     (t.scrollTop * (e.railYHeight - e.scrollbarYHeight)) /
//                       (e.contentHeight - e.containerHeight)
//                   )))
//                 : (e.scrollbarYActive = !1),
//               e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
//                 (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
//               e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
//                 (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
//               o(t, e),
//               e.scrollbarXActive
//                 ? i.add(t, "ps--active-x")
//                 : (i.remove(t, "ps--active-x"),
//                   (e.scrollbarXWidth = 0),
//                   (e.scrollbarXLeft = 0),
//                   c(t, "left", 0)),
//               e.scrollbarYActive
//                 ? i.add(t, "ps--active-y")
//                 : (i.remove(t, "ps--active-y"),
//                   (e.scrollbarYHeight = 0),
//                   (e.scrollbarYTop = 0),
//                   c(t, "top", 0));
//           };
//         },
//         {
//           "../lib/class": 2,
//           "../lib/dom": 3,
//           "../lib/helper": 6,
//           "./instances": 18,
//           "./update-scroll": 20,
//         },
//       ],
//       20: [
//         function (t, e, n) {
//           "use strict";
//           var r = t("./instances"),
//             o = function (t) {
//               var e = document.createEvent("Event");
//               return e.initEvent(t, !0, !0), e;
//             };
//           e.exports = function (t, e, n) {
//             if ("undefined" == typeof t)
//               throw "You must provide an element to the update-scroll function";
//             if ("undefined" == typeof e)
//               throw "You must provide an axis to the update-scroll function";
//             if ("undefined" == typeof n)
//               throw "You must provide a value to the update-scroll function";
//             "top" === e &&
//               n <= 0 &&
//               ((t.scrollTop = n = 0), t.dispatchEvent(o("ps-y-reach-start"))),
//               "left" === e &&
//                 n <= 0 &&
//                 ((t.scrollLeft = n = 0), t.dispatchEvent(o("ps-x-reach-start")));
//             var l = r.get(t);
//             "top" === e &&
//               n >= l.contentHeight - l.containerHeight &&
//               ((n = l.contentHeight - l.containerHeight),
//               n - t.scrollTop <= 1 ? (n = t.scrollTop) : (t.scrollTop = n),
//               t.dispatchEvent(o("ps-y-reach-end"))),
//               "left" === e &&
//                 n >= l.contentWidth - l.containerWidth &&
//                 ((n = l.contentWidth - l.containerWidth),
//                 n - t.scrollLeft <= 1 ? (n = t.scrollLeft) : (t.scrollLeft = n),
//                 t.dispatchEvent(o("ps-x-reach-end"))),
//               void 0 === l.lastTop && (l.lastTop = t.scrollTop),
//               void 0 === l.lastLeft && (l.lastLeft = t.scrollLeft),
//               "top" === e && n < l.lastTop && t.dispatchEvent(o("ps-scroll-up")),
//               "top" === e &&
//                 n > l.lastTop &&
//                 t.dispatchEvent(o("ps-scroll-down")),
//               "left" === e &&
//                 n < l.lastLeft &&
//                 t.dispatchEvent(o("ps-scroll-left")),
//               "left" === e &&
//                 n > l.lastLeft &&
//                 t.dispatchEvent(o("ps-scroll-right")),
//               "top" === e &&
//                 n !== l.lastTop &&
//                 ((t.scrollTop = l.lastTop = n),
//                 t.dispatchEvent(o("ps-scroll-y"))),
//               "left" === e &&
//                 n !== l.lastLeft &&
//                 ((t.scrollLeft = l.lastLeft = n),
//                 t.dispatchEvent(o("ps-scroll-x")));
//           };
//         },
//         { "./instances": 18 },
//       ],
//       21: [
//         function (t, e, n) {
//           "use strict";
//           var r = t("../lib/helper"),
//             o = t("../lib/dom"),
//             l = t("./instances"),
//             i = t("./update-geometry"),
//             s = t("./update-scroll");
//           e.exports = function (t) {
//             var e = l.get(t);
//             e &&
//               ((e.negativeScrollAdjustment = e.isNegativeScroll
//                 ? t.scrollWidth - t.clientWidth
//                 : 0),
//               o.css(e.scrollbarXRail, "display", "block"),
//               o.css(e.scrollbarYRail, "display", "block"),
//               (e.railXMarginWidth =
//                 r.toInt(o.css(e.scrollbarXRail, "marginLeft")) +
//                 r.toInt(o.css(e.scrollbarXRail, "marginRight"))),
//               (e.railYMarginHeight =
//                 r.toInt(o.css(e.scrollbarYRail, "marginTop")) +
//                 r.toInt(o.css(e.scrollbarYRail, "marginBottom"))),
//               o.css(e.scrollbarXRail, "display", "none"),
//               o.css(e.scrollbarYRail, "display", "none"),
//               i(t),
//               s(t, "top", t.scrollTop),
//               s(t, "left", t.scrollLeft),
//               o.css(e.scrollbarXRail, "display", ""),
//               o.css(e.scrollbarYRail, "display", ""));
//           };
//         },
//         {
//           "../lib/dom": 3,
//           "../lib/helper": 6,
//           "./instances": 18,
//           "./update-geometry": 19,
//           "./update-scroll": 20,
//         },
//       ],
//     },
//     {},
//     [1]
//   );
  