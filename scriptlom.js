(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _inView = _interopRequireDefault(require("in-view"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Anima = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Anima, _Component);

  var _super = _createSuper(Anima);

  function Anima(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Anima);
    _this = _super.call(this, "anima");
    site.components.mount((0, _assertThisInitialized2["default"])(_this));
    _this.counter = site.components.getComponent("counter");
    site.navigation.registerNavigationCallback(_this.enterPageWithDelay.bind((0, _assertThisInitialized2["default"])(_this), 200));
    _this.t = 50;
    _this.base = 100;
    _this.benter = _this.enter.bind((0, _assertThisInitialized2["default"])(_this));
    _this.bexit = _this.exit.bind((0, _assertThisInitialized2["default"])(_this));
    _this.bclear = _this.clear.bind((0, _assertThisInitialized2["default"])(_this));
    _this.browser = site.browser;

    if (site.browser.state.isMobile) {
      _inView["default"].threshold(0);

      _inView["default"].offset(window.innerHeight * 0.05);
    } else {
      _inView["default"].threshold(0);

      _inView["default"].offset(site.browser.state.rem * 8);
    }

    if (site.edit) document.documentElement.classList.add("no-anima"); // this.spanima();

    return _this;
  }

  (0, _createClass2["default"])(Anima, [{
    key: "mount",
    value: function mount(site) {}
  }, {
    key: "enterPageWithDelay",
    value: function enterPageWithDelay(delay) {
      // do spans first
      // this.spanima();
      if (!delay || delay == 0) this.enterPage();else setTimeout(this.enterPage.bind(this), delay);
    }
  }, {
    key: "enterPage",
    value: function enterPage() {
      // console.log("anima enter page now");
      document.querySelectorAll(".entry").forEach(this.run.bind(this));
      (0, _inView["default"])('.scroll').on('enter', this.run.bind(this));
      (0, _inView["default"])('.scroll').check();
    }
  }, {
    key: "run",
    value: function run(el) {
      if (el.classList.contains("anima")) this.enter(el);
      el.querySelectorAll(".anima").forEach(this.benter);
      el.classList.remove("scroll");
    }
  }, {
    key: "enter",
    value: function enter(el) {
      var _this2 = this;

      if (el.classList.contains("in")) return;
      el.classList.remove("out");
      var delay = Number(el.getAttribute("data-anima-delay")) || (this.browser.state.isMobile ? 1 : 0);
      if (this.browser.state.isMobile && el.classList.contains("smd")) delay = 1;
      setTimeout(function () {
        el.classList.add("in");
        if (el.getAttribute("data-count-to")) _this2.counter.count(el);
      }, delay * this.t + this.base);
    }
  }, {
    key: "exit",
    value: function exit(el) {
      el.classList.add("out");
    }
  }, {
    key: "clear",
    value: function clear(el) {
      el.classList.remove("out");
      el.classList.remove("in");
    }
  }, {
    key: "inChildren",
    value: function inChildren(el) {
      if (!el) return;
      var c = el.querySelectorAll(".anima");
      if (!c) return;
      c.forEach(this.benter);
    }
  }, {
    key: "outChildren",
    value: function outChildren(el) {
      if (!el) return;
      var c = el.querySelectorAll(".anima");
      if (!c) return;
      c.forEach(this.bexit);
    }
  }, {
    key: "clearChildren",
    value: function clearChildren(el) {
      if (!el) return;
      var c = el.querySelectorAll(".anima");
      if (!c) return;
      c.forEach(this.bclear);
    }
  }]);
  return Anima;
}(_component["default"]);

exports["default"] = Anima;

},{"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34,"in-view":44}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Car = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Car, _Component);

  var _super = _createSuper(Car);

  function Car(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Car);
    _this = _super.call(this, "car");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    _this.cars = [];
    _this.anima = site.components.getComponent("anima");
    _this.browser = site.browser; // this.wistia = site.components.getComponent("wista-handler");

    site.browser.addToResizeLoop(_this.resize.bind((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }

  (0, _createClass2["default"])(Car, [{
    key: "mount",
    value: function mount(site) {
      this.initCars();
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.cars.forEach(function (car) {
        clearTimeout(car.intervalTimeout);
      });
      this.cars = [];
    }
  }, {
    key: "initCars",
    value: function initCars() {
      document.querySelectorAll("[data-car]").forEach(this.initOneCar.bind(this));
    }
  }, {
    key: "initOneCar",
    value: function initOneCar(el) {
      var _this2 = this;

      var car = {
        el: el,
        id: el.getAttribute("data-car"),
        index: Number(el.getAttribute("data-car-active")) || 0,
        count: Number(el.getAttribute("data-car-count")) || 1,
        wrap: !(el.getAttribute("data-car-wrap") == "false"),
        activeOffset: Number(el.getAttribute("data-car-active-offset")) || 0,
        slides: Array.from(el.querySelectorAll("[data-car-slide], [data-car-goto]")).map(function (el) {
          return {
            el: el,
            index: Number(el.getAttribute("data-car-slide")) || Number(el.getAttribute("data-car-goto")),
            active: false
          };
        }),
        bar: el.querySelector("[data-car-bar]"),
        barOffset: Number(el.getAttribute("data-car-active")) || 0,
        row: el.querySelector("[data-car-row]"),
        timeout: Number(el.getAttribute("data-car-timeout")) || 0,
        interval: Number(el.getAttribute("data-car-interval")) || 0,
        delay: Number(el.getAttribute("data-car-delay")) || 0,
        scrollTop: el.querySelector("[data-car-scrollTop]"),
        canMove: true,
        active: false,
        anima: el.getAttribute("data-car-anima") != undefined ? Number(el.getAttribute("data-car-anima")) : false,
        getHeights: [],
        rail: el.querySelector("[data-car-rail]")
      };
      car.goToPrev = this.goToPrev.bind(this, car);
      car.goToNext = this.goToNext.bind(this, car);
      el.querySelectorAll("[data-car-prev]").forEach(function (el) {
        return el.addEventListener("click", car.goToPrev);
      });
      el.querySelectorAll("[data-car-next]").forEach(function (el) {
        return el.addEventListener("click", car.goToNext);
      });
      el.querySelectorAll("[data-car-goto]").forEach(function (el) {
        return el.addEventListener("click", _this2.goToSlide.bind(_this2, car, Number(el.getAttribute("data-car-goto"))));
      });
      el.querySelectorAll("[data-car-hover]").forEach(function (el) {
        return el.addEventListener("mouseenter", function (e) {
          var index = Number(el.getAttribute("data-car-goto"));

          _this2.goToSlide(car, index);

          _this2.hoverIn(car, index);
        });
      });
      el.querySelectorAll("[data-car-hover]").forEach(function (el) {
        return el.addEventListener("mouseleave", function (e) {
          var index = Number(el.getAttribute("data-car-goto"));

          _this2.hoverOut(car, index);
        });
      });
      el.querySelectorAll("[data-car-get-height]").forEach(function (el) {
        _this2.getHeightFromChildren(el);

        setTimeout(function () {
          _this2.getHeightFromChildren(el);
        }, 1000);
        car.getHeights.push(el);
      });
      car.slides.forEach(function (slide) {
        slide.car = car; // slide.video = slide.el.querySelector("video");
        // if(slide.video){
        //   slide.video.pause();
        // }
        // slide.wistia = slide.el.getAttribute("data-car-wistia");
      });
      car.active = true;
      this.cars.push(car);

      var start = function start() {
        _this2.update(car);

        _this2.setProceedInterval(car);
      };

      if (car.delay == 0) {
        start();
        setTimeout(start.bind(this), 100);
      } else setTimeout(start.bind(this), car.delay);

      setTimeout(function () {
        car.el.classList.add("init");
      }, 0);
    }
  }, {
    key: "goToSlide",
    value: function goToSlide(car, index) {
      if (!car.canMove) return;
      car.index = index;
      car.el.classList.add("move");
      this.update(car);
    }
  }, {
    key: "goToNext",
    value: function goToNext(car) {
      if (!car.canMove) return;

      if (car.wrap) {
        car.index = this.wrap(car.index + 1, car.count);
      } else {
        car.index = Math.min(car.index + 1, car.count - 1);
      }

      car.el.classList.add("move");
      this.update(car);
    }
  }, {
    key: "goToPrev",
    value: function goToPrev(car) {
      if (!car.canMove) return;

      if (car.wrap) {
        car.index = this.wrap(car.index - 1, car.count);
      } else {
        car.index = Math.max(car.index - 1, 0);
      }

      car.el.classList.add("move");
      this.update(car);
    }
  }, {
    key: "wrap",
    value: function wrap(val, count) {
      return (val + count) % count;
    }
  }, {
    key: "setProceedInterval",
    value: function setProceedInterval(car) {
      if (car.interval > 0 && car.active) {
        clearTimeout(car.intervalTimeout);
        car.intervalTimeout = setTimeout(car.goToNext, car.interval);
      }
    }
  }, {
    key: "update",
    value: function update(car) {
      var _this3 = this;

      car.slides.forEach(function (slide) {
        var add = [];
        var remove = [];

        if (slide.active && slide.index != car.index) {
          add.push("was-active");
          if (car.anima != false) _this3.anima.outChildren(slide.el);
        } else {
          remove.push("was-active");
          if (car.anima != false) _this3.anima.clearChildren(slide.el);
        }

        slide.active = slide.index == car.index;

        if (slide.active) {
          add.push("active");
          if (car.anima != false) setTimeout(function () {
            _this3.anima.inChildren(slide.el);
          }, car.anima);

          if (slide.el.classList.contains("slideWidth")) {
            slide.el.parentNode.style.width = slide.el.offsetWidth + "px";
          }
        } else {
          remove.push("active");
        }

        for (var i = 1; i <= car.activeOffset; i++) {
          (slide.index == car.index + i ? add : remove).push("after-active-" + i);
          (slide.index == car.index - i ? add : remove).push("before-active-" + i);
        }

        var draw = function draw() {
          var _slide$el$classList, _slide$el$classList2;

          (_slide$el$classList = slide.el.classList).remove.apply(_slide$el$classList, remove);

          (_slide$el$classList2 = slide.el.classList).add.apply(_slide$el$classList2, add);

          if (slide.video) {
            if (slide.active) slide.video.play();else slide.video.pause();
          } // if (slide.wistia){
          //   if (slide.active) this.wistia.playId(slide.wistia);
          //   else this.wistia.pauseId(slide.wistia);
          // }

        };

        if (car.delay == 0 || add.indexOf("active") == -1) draw();else setTimeout(draw, car.delay);
        car.el.classList[car.index == 0 ? "add" : "remove"]("first-slide");
        car.el.classList[car.index == car.count - 1 ? "add" : "remove"]("last-slide");

        if (car.rail) {
          var active = car.rail.querySelector(".active");

          if (active) {
            var offset = active.offsetLeft;
            car.rail.style.transform = "translateX(".concat(-offset, "px)");
          }
        }
      });

      if (car.bar) {
        car.bar.style.transform = "scaleX(".concat(this.wrap(car.index - car.barOffset, car.count) / Math.max(1, car.count - 1), ")");
      }

      if (car.scrollTop) {
        car.scrollTop.scrollTo(0, 0);
      }

      if (car.row) {
        var amt = this.wrap(car.index - car.barOffset, car.count) / Math.max(1, car.count - 1);
        car.row.style.transform = "translateX(".concat(amt * -100, "%) translateX(").concat(amt * 90, "vw)");
      }

      if (car.timeout > 0) {
        car.canMove = false;
        setTimeout(function () {
          return car.canMove = true;
        }, car.timeout);
      } // if( car.id == "abcar"){
      //   let images = document.getElementById("abcar-images");
      //   let wrap = document.getElementById("abcar-wrap");
      //   let active = document.querySelector(".aboutCarousel__image.active");
      //   if(wrap && active &&  images){
      //     wrap.classList.add("contract");
      //     let width = Number(active.getAttribute("data-image-width"));
      //     let height = Number(active.getAttribute("data-image-height"));
      //     let bounds = images.getBoundingClientRect();
      //     let w = width/830 * bounds.width;
      //     let h = height/700 * bounds.height;
      //     setTimeout(() => {
      //       if(this.w != w){
      //         wrap.style.width = w + "px";
      //         this.w = w;
      //       }
      //       if(this.h != h){
      //         wrap.style.height = h + "px";
      //         this.h = h;
      //       }
      //       wrap.classList.remove("contract");
      //     }, 350);
      //   }
      // }


      this.setProceedInterval(car);
    }
  }, {
    key: "hoverIn",
    value: function hoverIn(car, index) {
      car.slides.forEach(function (slide) {
        if (slide.index == index) slide.el.classList.add("hover");else slide.el.classList.remove("hover");
      });
    }
  }, {
    key: "hoverOut",
    value: function hoverOut(car, index) {
      car.slides.forEach(function (slide) {
        slide.el.classList.remove("hover");
      });
    }
  }, {
    key: "getHeightFromChildren",
    value: function getHeightFromChildren(el) {
      var max = 0;
      el.childNodes.forEach(function (item, i) {
        if (item instanceof Element) {
          max = Math.max(item.getBoundingClientRect().height, max);
        }
      });
      el.style.height = max + "px";
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this4 = this;

      this.cars.forEach(function (car, i) {
        car.getHeights.forEach(function (item, i) {
          _this4.getHeightFromChildren(item);
        });
      });
    }
  }]);
  return Car;
}(_component["default"]);

exports["default"] = Car;

},{"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Component = /*#__PURE__*/function () {
  function Component() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    (0, _classCallCheck2["default"])(this, Component);
    this.name = name;
  }

  (0, _createClass2["default"])(Component, [{
    key: "mount",
    value: function mount() {}
  }, {
    key: "unmount",
    value: function unmount() {}
  }]);
  return Component;
}();

exports["default"] = Component;

},{"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/interopRequireDefault":33}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Contact = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Contact, _Component);

  var _super = _createSuper(Contact);

  function Contact(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Contact);
    _this = _super.call(this, "contact");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Contact, [{
    key: "mount",
    value: function mount(site) {
      var form = document.getElementById("contact-form");

      if (form) {
        form.addEventListener("submit", this.submitForm.bind(this));
      }
    }
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      e.preventDefault();
      console.log(e);
      var formData = new FormData(e.target);
      formData.set("action", "contact-form/send");
      e.target.classList.add("loading");
      fetch('/', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data); // e.target.classList.remove("loading");

        e.target.classList.add("success");
      })["catch"](function (err) {
        alert("Something went wrong, please try again.");
      });
    }
  }]);
  return Contact;
}(_component["default"]);

exports["default"] = Contact;

},{"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _cookies = require("../utility/cookies");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CookieConsent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CookieConsent, _Component);

  var _super = _createSuper(CookieConsent);

  function CookieConsent(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, CookieConsent);
    _this = _super.call(this, "cookie-consent");
    _this.cookie = "rhythm-cookie-consent";
    setTimeout(function () {
      site.components.mount((0, _assertThisInitialized2["default"])(_this));
    }, 3000);
    return _this;
  }

  (0, _createClass2["default"])(CookieConsent, [{
    key: "mount",
    value: function mount(site) {
      this.box = document.getElementById("cookie-box");
      this.accept = document.getElementById("cookie-accept"); // this.decline = document.getElementById("cookie-decline");

      if (!(0, _cookies.getCookie)(this.cookie)) {
        this.box.classList.add("show");
        this.accept.addEventListener("click", this.acceptCookies.bind(this)); // this.decline.addEventListener("click", this.declineCookies.bind(this));
      } else {
        if ((0, _cookies.getCookie)(this.cookie) == "true" && window.allConsentGranted) allConsentGranted();
      }
    }
  }, {
    key: "acceptCookies",
    value: function acceptCookies() {
      (0, _cookies.setCookie)(this.cookie, "true");
      this.box.classList.remove("show");
      if (window.allConsentGranted) allConsentGranted();
    } // declineCookies(){
    //   setCookie(this.cookie, "false");
    //   this.box.classList.remove("show");
    // }

  }]);
  return CookieConsent;
}(_component["default"]);

exports["default"] = CookieConsent;

},{"../utility/cookies":25,"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DirtyForms = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(DirtyForms, _Component);

  var _super = _createSuper(DirtyForms);

  function DirtyForms(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, DirtyForms);
    _this = _super.call(this, "dirty-forms");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(DirtyForms, [{
    key: "mount",
    value: function mount(site) {
      var _this2 = this;

      document.querySelectorAll(".getDirty").forEach(function (el, i) {
        _this2.check(el);

        el.addEventListener("input", function () {
          _this2.check(el);
        });
        el.addEventListener("focus", function () {
          _this2.check(el);
        });
        el.addEventListener("blur", function () {
          _this2.check(el);
        });
      });
    }
  }, {
    key: "check",
    value: function check(el) {
      if (el.value != "" || document.activeElement == el) {
        el.parentNode.classList.add("dirty");
      } else {
        el.parentNode.classList.remove("dirty");
      }

      if (el.value != "") el.parentNode.classList.add("dd");else el.parentNode.classList.remove("dd");

      if (el == document.activeElement) {
        el.parentNode.classList.add("focus");
      } else {
        el.parentNode.classList.remove("focus");
      }
    }
  }]);
  return DirtyForms;
}(_component["default"]);

exports["default"] = DirtyForms;

},{"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HomeHeader = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(HomeHeader, _Component);

  var _super = _createSuper(HomeHeader);

  function HomeHeader(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, HomeHeader);
    _this = _super.call(this, "home-header");
    _this.browser = site.browser;
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }

  (0, _createClass2["default"])(HomeHeader, [{
    key: "mount",
    value: function mount(site) {
      this.el = document.getElementById("home-header");
      this.inTime = 0;
      this.inited = false;
      this.vidPlayed = false;
      this.interval = 3000;
      this.t = 100;
      this.bgPattern = [[30, 80], [5, 95], [25, 85], [15, 70]];
      this.bgT = 0;
      this.bgIndex = 0;
      this.bgInterval = 6500;
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.el = null;
    }
  }, {
    key: "render",
    value: function render(rate) {
      if (!this.el) return;

      if (this.inTime < 3500) {
        if (this.el.classList.contains("in")) {
          this.inTime += this.browser.state.delta;
        }

        if (!this.vidPlayed) {
          var lastVideo = this.el.querySelector(".homeHeader__mediaCard:last-child video");

          if (lastVideo) {
            lastVideo.play();
            lastVideo.classList.add("init"); // console.log(lastVideo);
          }

          this.vidPlayed = true;
        }
      } else {
        if (!this.inited) {
          this.el.classList.add("inited");
          this.inited = true;
        }

        this.t -= this.browser.state.delta;

        if (this.t < 0) {
          this.t += this.interval;
          this.dropCard();
        }
      } // this.bgT -= this.browser.state.delta; 
      // if(this.bgT < 0){
      //     this.bgT += this.bgInterval;
      //     this.bgRow();
      // }

    }
  }, {
    key: "dropCard",
    value: function dropCard() {
      var _this2 = this;

      var last = this.el.querySelector(".homeHeader__mediaCard:last-child");

      if (last) {
        this.el.classList.add("dropping");
        last.classList.add("drop");
        var x = (0.5 + Math.random() * 0.5) * 50 * (Math.random() > 0.5 ? 1 : -1);
        var y = 30;
        var rotate = (Math.random() - 0.5) * 90;

        if (this.browser.state.isMobile) {
          x *= 0.5;
          y *= 0.5;
        } // last.style.transform = `translate3d(${x}rem, ${y}rem, 0) rotate(${rotate}deg)`;


        setTimeout(function () {
          last.parentElement.prepend(last); // last.style.transform = "";

          last.classList.remove("drop");

          _this2.el.classList.remove("dropping");

          var vid = last.querySelector("video");
          if (vid) vid.pause();
        }, 1000);
      }

      var secondLastVideo = this.el.querySelector(".homeHeader__mediaCard:nth-last-child(2) video");

      if (secondLastVideo) {
        secondLastVideo.play();
        secondLastVideo.classList.add("init");
      }
    } // bgRow(){
    //   var pattern = this.bgPattern[this.bgIndex];
    //   this.bgIndex = (this.bgIndex + 1) % this.bgPattern.length;
    //   pattern.forEach(offset => {
    //     var first = this.el.querySelector(".homeHeader__bgCard:first-child");
    //     first.parentElement.appendChild(first);
    //     first.style.left = offset + "vw";
    //     setTimeout(() => {
    //       first.classList.add("float");
    //     }, 200);
    //     setTimeout(() => {
    //       first.classList.remove("float")
    //     }, 20000);
    //   })
    // }

  }]);
  return HomeHeader;
}(_component["default"]);

exports["default"] = HomeHeader;

},{"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],8:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _easing = _interopRequireDefault(require("../utility/easing"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ImageCircle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ImageCircle, _Component);

  var _super = _createSuper(ImageCircle);

  function ImageCircle(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, ImageCircle);
    _this = _super.call(this, "image-circle");
    _this.browser = site.browser;
    site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    _this.anima = site.components.getComponent("anima");
    _this.cardDuration = 3200;
    _this.contentTime = 1200;
    _this.cardOffset = -30;
    _this.cardDist = 53;
    _this.rot = Math.PI * 1.5;
    return _this;
  }

  (0, _createClass2["default"])(ImageCircle, [{
    key: "mount",
    value: function mount(site) {
      this.el = document.getElementById("image-circle");
      if (!this.el) return;
      this.trigger = document.getElementById("trigger");
      this.content = document.getElementById("content");
      this.circle = document.getElementById("circle");
      this.images = this.circle.querySelectorAll(".image");
      this.t = 0;
      this.inContent = false;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.el) return;
      if (!this.trigger.classList.contains("in")) return;

      if (this.browser.state.isMobile) {
        if (!this.inContent) {
          this.anima.inChildren(this.content);
          this.inContent = true;
        }

        return;
      }

      this.t += this.browser.state.delta; // console.log(this.t);
      // render the cards animation

      if (this.t > 0 && this.t < this.cardDuration) this.renderImages();

      if (!this.inContent && this.t > this.contentTime) {
        this.anima.inChildren(this.content);
        this.inContent = true;
      }
    }
  }, {
    key: "renderImages",
    value: function renderImages() {
      var _this2 = this;

      var p = this.t / this.cardDuration;
      p = _easing["default"].adjust(p);

      var radP = _easing["default"].easeInOutQuint(p);

      var angleP = _easing["default"].easeInOutCubic(p);

      var offsetP = _easing["default"].easeInOutCubic(p);

      var count = this.images.length;
      this.images.forEach(function (image, i) {
        var ap = i / count;

        if (i != 0) {
          if (i % 2 == 1) {
            ap += 0.21 / count;
          } else {
            ap -= 0.21 / count;
          }

          if (i == 5) {
            ap += 0.05 / count;
          }

          if (i == 6) {
            ap -= 0.05 / count;
          }

          if (i == 8) {
            ap -= 0.15 / count;
          }
        } // ap += 0.5/count * (i % 2 == 0 ? -1 : 1);


        var angle = angleP * (_this2.rot + ap * Math.PI * 2);
        var rad = radP * _this2.cardDist;
        var offset = (1 - offsetP * 0.9) * _this2.cardOffset;
        var x = Math.cos(angle) * 1.02 * rad;
        var y = Math.sin(angle) * rad * 0.98 + offset;
        image.style.transform = "translate3d(" + x + "rem, " + y + "rem, 0)";
      });
    }
  }]);
  return ImageCircle;
}(_component["default"]);

exports["default"] = ImageCircle;

},{"../utility/easing":26,"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],9:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Logos = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Logos, _Component);

  var _super = _createSuper(Logos);

  function Logos(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Logos);
    _this = _super.call(this, "logos");
    _this.browser = site.browser;
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
    _this.browser = site.browser;
    return _this;
  }

  (0, _createClass2["default"])(Logos, [{
    key: "mount",
    value: function mount(site) {
      this.wrap = document.getElementById("logos");
      this.logos = document.querySelectorAll("#logos .logo");
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.wrap || this.logos.length == 0) return;
      var bounds = this.wrap.getBoundingClientRect(); // var lagOffset = this.browser.state.scrollLag - this.browser.state.scrollTop;

      if (bounds.top - window.innerHeight < 0 && bounds.bottom > 0) {
        var trigger = this.browser.state.rem * 50;
        var active = null;

        for (var i = 0; i < this.logos.length; i++) {
          var el = this.logos[i];
          var elBounds = el.getBoundingClientRect(); // var elCenter = Math.abs(elBounds.top + elBounds.height/2 - lagOffset - window.innerHeight/1.9);

          if (trigger > elBounds.top && trigger < elBounds.bottom) {
            active = el;
            break;
          }
        }

        var oldActive = document.querySelector(".logo.active");

        if (oldActive != active) {
          if (oldActive) oldActive.classList.remove("active");
          if (active) active.classList.add("active");
        }
      }
    }
  }]);
  return Logos;
}(_component["default"]);

exports["default"] = Logos;

},{"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],10:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Looper = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Looper, _Component);

  var _super = _createSuper(Looper);

  function Looper(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Looper);
    _this = _super.call(this, "looper");
    _this.state = {};
    _this.state.scroll = 0;
    _this.state.prevScroll = 0;
    _this.state.scrollDiff = 0;
    _this.browser = site.browser;
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    _this.loops = [];
    site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
    site.browser.addToResizeLoop(_this.resize.bind((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }

  (0, _createClass2["default"])(Looper, [{
    key: "mount",
    value: function mount(site) {
      var _this2 = this;

      this.initLoops();
      setTimeout(function () {
        _this2.initLoops();
      }, 500);
      setTimeout(function () {
        _this2.initLoops();
      }, 1000);
    }
  }, {
    key: "unmount",
    value: function unmount() {
      // this.cars.forEach((car) => {
      //     clearTimeout(car.intervalTimeout);
      // });
      this.loops = [];
    }
  }, {
    key: "initLoops",
    value: function initLoops() {
      var _this3 = this;

      document.querySelectorAll("[data-looper]").forEach(this.initOneLoop.bind(this));
      this.state.scroll = 0;
      this.state.scrollDiff = 0;
      this.state.prevScroll = 0;
      document.querySelectorAll("[data-looper-scroll-el]").forEach(function (el) {
        el.addEventListener("wheel", _this3.scroll.bind(_this3));
      }); // console.log(this.loops);
    }
  }, {
    key: "scroll",
    value: function scroll(e) {
      this.state.scroll += e.deltaY / this.browser.state.rem;
      this.state.scrollDiff = this.state.scroll - this.state.prevScroll;
      this.state.prevScroll = this.state.scroll;
    }
  }, {
    key: "initOneLoop",
    value: function initOneLoop(el) {
      var loop = {
        el: el,
        parentEl: el.closest(el.getAttribute("data-looper")),
        speed: Number(el.getAttribute("data-looper-speed")) || 1,
        isVertical: el.getAttribute("data-looper-vertical") != undefined,
        isScroll: el.getAttribute("data-looper-scroll") != undefined,
        children: [],
        speedMulti: 1,
        targetSpeedMulti: 1,
        hoverSpeedMulti: Number(el.getAttribute("data-looper-hover-speed")) || 1,
        hoverSpeedLerp: Number(el.getAttribute("data-looper-hover-lerp")) || 0.05
      };
      loop.parentSize = loop.isVertical ? loop.parentEl.offsetHeight : loop.parentEl.offsetWidth;
      loop.railSize = loop.isVertical ? el.offsetHeight : el.offsetWidth;
      var baseOffset = (loop.railSize - loop.parentSize) / 2; // baseOffset 
      // console.log(baseOffset);

      loop.upperLimit = baseOffset;
      loop.lowerLimit = -baseOffset;
      el.addEventListener("mouseenter", function () {
        loop.targetSpeedMulti = loop.hoverSpeedMulti;
      });
      el.addEventListener("mouseleave", function () {
        loop.targetSpeedMulti = 1;
      });

      for (var i = 0; i < el.children.length; i++) {
        var childEl = el.children[i];
        loop.children.push({
          childEl: childEl,
          offset: -baseOffset,
          baseOffset: loop.isVertical ? childEl.offsetTop : childEl.offsetLeft
        });
      }

      this.loops.push(loop);
    }
  }, {
    key: "renderOneLoop",
    value: function renderOneLoop(loop, rate) {
      loop.speedMulti += (loop.targetSpeedMulti - loop.speedMulti) * loop.hoverSpeedLerp * rate;
      var move = rate * loop.speed * loop.speedMulti;

      if (loop.isScroll) {
        var move = this.state.scrollDiff * loop.speed * loop.speedMulti;
      }

      loop.children.forEach(function (child) {
        child.offset += move;
        if (child.offset + child.baseOffset > loop.upperLimit) child.offset -= loop.railSize;
        if (child.offset + child.baseOffset < loop.lowerLimit) child.offset += loop.railSize;

        if (loop.isVertical) {
          child.childEl.style.transform = "translateY(" + child.offset + "px)";
        } else {
          child.childEl.style.transform = "translateX(" + child.offset + "px)";
        }
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      this.loops.forEach(function (loop, i) {});
    }
  }, {
    key: "render",
    value: function render(rate) {
      var _this4 = this;

      this.loops.forEach(function (loop, i) {
        _this4.renderOneLoop(loop, rate);
      });
      this.state.scrollDiff *= 1 - 0.08 * rate;
    }
  }]);
  return Looper;
}(_component["default"]);

exports["default"] = Looper;

},{"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],11:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _access = require("../utility/access");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Menu = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Menu);
    _this = _super.call(this, "menu");

    if (site.navigation.swup) {
      site.navigation.swup.on('clickLink', function (event) {
        var target = event.target.closest("a");
        if (!target) return;
        var url = target.pathname;
        if (url) _this.highlightActivePage(url);
      });
    }

    document.addEventListener('swup:animationOutDone', _this.closeMenu.bind((0, _assertThisInitialized2["default"])(_this)));
    document.addEventListener('swup:samePage', _this.closeMenu.bind((0, _assertThisInitialized2["default"])(_this)));
    site.navigation.registerNavigationCallback(_this.highlightActivePage.bind((0, _assertThisInitialized2["default"])(_this)));
    site.components.mount((0, _assertThisInitialized2["default"])(_this));
    document.documentElement.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
    window.addEventListener('resize', function () {
      document.documentElement.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
    });
    _this.browser = site.browser;
    return _this;
  }

  (0, _createClass2["default"])(Menu, [{
    key: "mount",
    value: function mount(site) {
      this.initEls();
      this.initMenuToggle();
      this.initMenuLinks(); // this.openMenu();
    }
  }, {
    key: "initEls",
    value: function initEls() {
      this.nav = document.getElementById("nav");
      this.menu = document.getElementById("nav-menu"); // this.overlay = document.getElementById("nav-overlay");

      this.navLinks = document.querySelectorAll(".nav__menuLink, .nav__link, .footer__mainLink");
      this.toggle = document.getElementById("nav-toggle");
    }
  }, {
    key: "initMenuToggle",
    value: function initMenuToggle() {
      if (this.toggle) (0, _access.addConfirmListeners)(this.toggle, this.toggleMenu.bind(this));
      if (this.overlay) this.overlay.addEventListener("click", this.closeMenu.bind(this));
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      if (!document.documentElement.classList.contains("menu-open")) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      document.documentElement.classList.add("menu-open");
      this.nav.classList.add("is-open");
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      document.documentElement.classList.remove("menu-open");
      this.nav.classList.remove("is-open"); // this.clearSubmenu();
    }
  }, {
    key: "initMenuLinks",
    value: function initMenuLinks() {
      var _this2 = this;

      document.addEventListener("click", function (e) {
        var menuLink = e.target.closest("#nav a:not(.ignore-nav-close)");

        if (menuLink) {
          _this2.closeMenu();
        }
      });
    }
  }, {
    key: "highlightActivePage",
    value: function highlightActivePage() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var active = this.findActivePages(url);
      this.navLinks.forEach(function (item, i) {
        item.classList.remove("wasActive");

        if (active.indexOf(item) >= 0) {
          item.classList.add("active");
        } else {
          if (item.classList.contains("active")) {
            item.classList.add("wasActive");
          }

          item.classList.remove("active");
        }
      });
    }
  }, {
    key: "findActivePages",
    value: function findActivePages() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var path = url == "" ? window.location.pathname : url;
      var output = [];
      if (path == "/") return output;

      for (var i = 0; i < this.navLinks.length; i++) {
        var item = this.navLinks[i];
        if (item.href.includes(path)) output.push(item);
      }

      ;
      return output;
    }
  }]);
  return Menu;
}(_component["default"]);

exports["default"] = Menu;

},{"../utility/access":23,"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],12:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MouseFollow = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MouseFollow, _Component);

  var _super = _createSuper(MouseFollow);

  function MouseFollow(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, MouseFollow);
    _this = _super.call(this, "mousefollow");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    _this.follows = [];
    _this.browser = site.browser;
    _this.mouse = site.browser.state.mouse;
    site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }

  (0, _createClass2["default"])(MouseFollow, [{
    key: "mount",
    value: function mount(site) {
      this.initFollows();
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.follows = [];
    }
  }, {
    key: "initFollows",
    value: function initFollows() {
      document.querySelectorAll("[data-follow]").forEach(this.initOneFollow.bind(this));
    }
  }, {
    key: "initOneFollow",
    value: function initOneFollow(el) {
      var _this2 = this;

      var follow = {
        el: el,
        triggerEl: el.closest(el.getAttribute("data-follow")),
        mouseInside: false,
        offset: {
          x: 0,
          y: 0
        },
        rotation: 0,
        t: 0,
        jump: el.getAttribute("data-follow-jump") != undefined,
        diag: el.getAttribute("data-follow-diag") != undefined
      };
      follow.triggerEl.addEventListener("mouseenter", function () {
        follow.mouseInside = true;
        if (follow.jump) _this2.jump(follow);
      });
      follow.triggerEl.addEventListener("mouseleave", function () {
        follow.mouseInside = false;
      });
      this.follows.push(follow);
    }
  }, {
    key: "render",
    value: function render(rate) {
      var _this3 = this;

      if (this.browser.state.isMobile) return;
      this.follows.forEach(function (follow, i) {
        _this3.renderOneFollow(follow, rate);
      });
    }
  }, {
    key: "jump",
    value: function jump(follow) {
      var towards = this.getTowards(follow);
      follow.offset.x += towards.x;
      follow.offset.y += towards.y;
    }
  }, {
    key: "getTowards",
    value: function getTowards(follow) {
      var bounds = follow.el.getBoundingClientRect();
      var towards = {
        x: this.mouse.x - (bounds.left + bounds.width / 2) - (follow.diag ? this.browser.state.rem * 8 : 0),
        y: this.mouse.y - (bounds.top + bounds.height / 2) - (follow.diag ? this.browser.state.rem * -1 : 0) + Math.sin(this.browser.state.t / 750) * this.browser.state.rem * 1
      };
      return towards;
    }
  }, {
    key: "renderOneFollow",
    value: function renderOneFollow(follow, rate) {
      var offset = follow.offset;

      if (follow.mouseInside) {
        var towards = this.getTowards(follow);
        offset.x += towards.x * 0.1 * rate;
        offset.y += towards.y * 0.1 * rate;
        var size = (towards.x + towards.y) / window.innerWidth;
        follow.t += this.browser.state.delta * (1 + size * 50);
        follow.rotation = Math.sin(follow.t / 1250) * (5 + size * 50); // move towards mouse
      } else {
        if (!follow.jump) {
          offset.x += (0 - offset.x) * 0.1 * rate;
          offset.y += (0 - offset.y) * 0.1 * rate; // move towards home

          follow.rotation += (0 - follow.rotation) * 0.1 * rate;
        }
      }

      follow.el.style.transform = "translate3d(" + follow.offset.x + "px, " + follow.offset.y + "px, 0) rotate(" + follow.rotation + "deg)";
    }
  }]);
  return MouseFollow;
}(_component["default"]);

exports["default"] = MouseFollow;

},{"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],13:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _inView = _interopRequireDefault(require("in-view"));

var _easing = _interopRequireDefault(require("../utility/easing"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ScrollPal = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ScrollPal, _Component);

  var _super = _createSuper(ScrollPal);

  function ScrollPal(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, ScrollPal);
    _this = _super.call(this, "scrollpal");
    _this.browser = site.browser;
    _this.images = [];
    site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
    site.browser.addToResizeLoop(_this.resize.bind((0, _assertThisInitialized2["default"])(_this)));
    _this.pals = [];
    _this.center = 0;
    _this.spanner = site.components.getComponent("spanner");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ScrollPal, [{
    key: "unmount",
    value: function unmount(site) {
      this.pals.forEach(function (pal, i) {
        clearInterval(pal.interval);
      });
      this.pals = [];
    }
  }, {
    key: "mount",
    value: function mount(site) {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      document.querySelectorAll(".pal").forEach(this.initEl.bind(this)); // inView('.pal').on('enter', this.show.bind(this));
      // inView('.pal').on('exit', this.hide.bind(this));
      // setTimeout(()=> { this.pals.forEach( (pal) => { this.getOffset.bind(this, pal);} ) }, 100);
      // setTimeout(()=> { this.pals.forEach( (pal) => { this.getOffset.bind(this, pal);} ) }, 500);
      // setTimeout(()=> { this.pals.forEach( (pal) => { this.getOffset.bind(this, pal);} ) }, 1000);
      // setTimeout(()=> { this.pals.forEach( (pal) => { this.getOffset.bind(this, pal);} ) }, 2000);
    }
  }, {
    key: "show",
    value: function show(el) {
      var pal = this.find(el);
      if (pal) pal.showing = true;
    }
  }, {
    key: "hide",
    value: function hide(el) {
      var pal = this.find(el);
      if (pal) pal.showing = false;
    }
  }, {
    key: "find",
    value: function find(el) {
      return this.pals.find(function (o) {
        return o.el == el;
      });
    }
  }, {
    key: "initEl",
    value: function initEl(el) {
      var _this2 = this;

      var pal = {
        el: el,
        offset: 0,
        ratio: 0.5,
        // ability to set this.
        moves: []
      };
      el.querySelectorAll("[data-pal]").forEach(function (item, i) {
        var move = {
          el: item,
          speed: Number(item.getAttribute("data-pal")) || 1,
          xSpeed: Number(item.getAttribute("data-pal-x")) || Number(item.getAttribute("data-pal")) || 1,
          rotateSpeed: Number(item.getAttribute("data-pal-rotate")) || Number(item.getAttribute("data-pal")) || 1,
          push: Number(item.getAttribute("data-pal-push")) || 0,
          offset: 0,
          lerpMove: 0,
          lerp: Number(item.getAttribute("data-pal-lerp")) || 0,
          rotate: item.classList.contains("pal-rotate"),
          moveX: item.classList.contains("pal-moveX"),
          moveY: item.classList.contains("pal-moveY"),
          scale: item.classList.contains("pal-scale"),
          opacity: item.classList.contains("pal-opacity"),
          clamp: item.classList.contains("pal-clamp"),
          reveal: item.classList.contains("pal-reveal"),
          reverseClamp: item.classList.contains("pal-reverse-clamp"),
          runOnMobile: item.classList.contains("pal-mobile"),
          mobileSpeed: Number(item.getAttribute("data-pal-mobile")) || Number(item.getAttribute("data-pal")) || 1,
          mobileOnly: item.classList.contains("pal-mobile-only")
        };
        pal.moves.push(move);

        if (move.reveal) {
          _this2.initReveal(item, move);
        }
      });
      this.getOffset(pal);
      setTimeout(this.getOffset.bind(this, pal), 0);
      pal.interval = setInterval(this.getOffset.bind(this, pal), 300);
      this.pals.push(pal);
      if (!this.browser.state.isMobile) this.renderOne(pal);
    }
  }, {
    key: "initReveal",
    value: function initReveal(el, move) {
      var content = el.innerHTML;
      el.innerHTML = "";
      content = content.replaceAll(" class", "¥class");
      content = content.replaceAll(" src", "¥src");
      content = content.replaceAll("</p>", "</p> ");
      content = content.replaceAll("</picture>", "</picture> ");
      content = content.replaceAll("&nbsp;", "");
      var words = content.split(" ");
      move.words = [];
      move.runOnMobile = true;
      var currentLength = 0;
      var len = 0;
      var inP = false;
      var line = null;
      var inImage = false;
      var imageData = "";

      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word == "") continue;
        if (word == "\n") continue;
        var _short = word;
        _short = _short.replaceAll("<strong>", "");
        _short = _short.replaceAll("</strong>", "");
        _short = _short.replaceAll("<i>", "");
        _short = _short.replaceAll("</i>", "");
        _short = _short.replaceAll("<p>", "");
        _short = _short.replaceAll("</p>", "");
        len = _short.length; // console.log(short);

        var className = "";

        if (word.includes("<p>")) {
          inP = true;
          word = word.replaceAll("<p>", "");
          line = document.createElement("p");
          el.appendChild(line);
        }

        if (word.includes("</p>")) {
          inP = false;
          word = word.replaceAll("</p>", "");
        }

        if (word.includes("<picture>")) {
          inImage = true;
          imageData = "";
        }

        word = word.replaceAll("¥class", " class");
        word = word.replaceAll("¥src", " src");
        word = word + " ";
        var content = word;

        if (inImage) {
          imageData += word;

          if (word.includes("</picture>")) {
            inImage = false;
            word = imageData;
            imageData = "";
            len = 10;
            content = "";
            className = "m";
          }
        }

        if (inImage) continue;
        var span = document.createElement('span');
        span.innerHTML = word;
        span.className = className;

        if (line) {
          line.appendChild(span);
        }

        move.words.push({
          el: span,
          offset: currentLength,
          "in": false
        });
        currentLength += len + 1;
      }

      move.totalLength = currentLength; // console.log(move);
    }
  }, {
    key: "getOffset",
    value: function getOffset(pal) {
      // console.log("this.getOffset");
      var bounds = pal.el.getBoundingClientRect();
      pal.offset = bounds.top + document.documentElement.scrollTop + bounds.height * pal.ratio;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.browser.state.isMobile) return;
      this.center = this.browser.state.scrollTop + window.innerHeight / 2;
      this.pals.forEach(this.renderOne.bind(this));
    }
  }, {
    key: "renderOne",
    value: function renderOne(pal) {
      //if(!pal.showing) return;
      // Base move amount on center of parent pal section (less calcs + better alignment)
      // get scroll offset from center (based on screen height?? / set a max on this of a header height??)
      var offset = this.center - pal.offset; // console.log(offset);

      var move = offset / window.innerWidth * 10;
      var _move = move;
      var isMobile = this.browser.state.isMobile;
      pal.moves.forEach(function (item, i) {
        move = _move;

        if (item.lerp != 0) {
          item.lerpMove += (move - item.lerpMove) / item.lerp;
          move = item.lerpMove;
        }

        if (isMobile && item.runOnMobile || !isMobile && !item.mobileOnly) {
          var speed = isMobile ? item.mobileSpeed : item.speed;
          var y = speed * (move + item.push);
          var x = y * 1 * item.xSpeed / item.speed;
          var deg = item.rotateSpeed * (move + item.push);
          var transform = "";

          if (item.clamp) {
            y = Math.min(y, 0);
            x = Math.min(x, 0);
            deg = Math.min(deg, 0);
          }

          if (item.reverseClamp) {
            y = Math.max(y, 0);
            x = Math.max(x, 0);
            deg = Math.max(deg, 0);
          }

          if (item.moveY) {
            transform += (transform == "" ? "" : " ") + "translateY(" + y + "rem)";
          }

          if (item.moveX) {
            transform += (transform == "" ? "" : " ") + "translateX(" + x + "rem)";
          }

          if (item.rotate) {
            transform += (transform == "" ? "" : " ") + "rotate(" + deg + "deg)";
          }

          if (item.scale) {
            var pp = offset / window.innerWidth * 1.6 + item.push; // if(pp < 0){

            var pm = Math.abs(Math.max(-1, Math.min(1, pp)));

            var mv = _easing["default"].easeInOutQuad(pm); // do some easing


            transform = "scale(" + Math.max(0, 1 - mv * speed) + ")"; // } else {
            //   transform = "scale(1)";
            // }
          }

          if (item.opacity) {
            item.el.style.opacity = y;
          }

          if (item.reveal) {
            var base = speed * (move + item.push);

            for (var _i = 0; _i < item.words.length; _i++) {
              var word = item.words[_i];
              var amt = base * item.totalLength - word.offset;

              if (amt < 0 && word["in"]) {
                word.el.classList.remove("in");
                word["in"] = false;
              }

              if (amt > 1 && !word["in"]) {
                word.el.classList.add("in");
                word["in"] = true;
              } // console.log(amt);
              // word.el.style.opacity = Math.max(0.1, amt); 

            }
          }

          if (transform != "") {
            item.el.style.transform = transform;
          }
        }
      });
    }
  }, {
    key: "resize",
    value: function resize() {}
  }]);
  return ScrollPal;
}(_component["default"]);

exports["default"] = ScrollPal;

},{"../utility/easing":26,"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34,"in-view":44}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _inView = _interopRequireDefault(require("in-view"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SliderCards = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SliderCards, _Component);

  var _super = _createSuper(SliderCards);

  function SliderCards(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderCards);
    _this = _super.call(this, "slider-cards");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    _this.browser = site.browser;

    _this.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));

    (0, _inView["default"])('#slider-cards').on('enter', _this.addVids.bind((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }

  (0, _createClass2["default"])(SliderCards, [{
    key: "unmount",
    value: function unmount(site) {
      this.el = null;
    }
  }, {
    key: "mount",
    value: function mount(site) {
      this.el = document.getElementById("slider-cards");
      if (!this.el) return;
      this.stick = document.getElementById("slider-stick");
      this.rail = document.getElementById("slider-rail");
      this.cards = this.rail.querySelectorAll(".sliderCard");
      this.offset = Number(this.el.getAttribute("data-slider-offset")) || 0;
      setTimeout(this.addVids.bind(this), 5000);
    }
  }, {
    key: "addVids",
    value: function addVids() {
      if (!this.el) return;
      var dataVids = this.el.querySelectorAll("[data-vid]");
      dataVids.forEach(function (el) {
        var video = document.createElement("video");
        video.className = "media vid";
        video.muted = true;
        video.autoplay = false;
        video.loop = true;
        video.setAttribute('playsinline', true);
        var source = document.createElement('source');
        source.setAttribute('src', el.getAttribute("data-vid"));
        var mobVid = el.getAttribute("data-mob-vid");

        if (mobVid) {
          source.setAttribute("media", "(min-width: 800px)");
          el.removeAttribute("data-mob-vid");
          var mobSource = document.createElement('source');
          mobSource.setAttribute('src', mobVid);
          mobSource.setAttribute("media", "(max-width: 800px)");
          video.appendChild(mobSource);
        }

        var poster = el.getAttribute("data-poster");

        if (poster) {
          video.setAttribute("poster", poster);
          el.removeAttribute("data-poster");
        }

        video.appendChild(source);
        el.appendChild(video);
        el.removeAttribute("data-vid");
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.el) return; // TODO: Some perfomance improvements here, cache values where possible.

      var bounds = this.el.getBoundingClientRect();
      var stickBounds = this.stick.getBoundingClientRect();
      var railBounds = this.rail.getBoundingClientRect();
      var o = this.offset * (this.browser.state.isMobile ? 0.5 : 1);
      var p = -bounds.top / (bounds.height - stickBounds.height) + o;
      var so = this.browser.state.isMobile ? 0.1 : 0.25;
      this.el.classList[p > so ? "add" : "remove"]("scrolled");
      this.el.classList[p < 0 ? "add" : "remove"]("before");
      this.el.classList[p > 1 + o ? "add" : "remove"]("after");
      this.el.classList[p > 1 ? "add" : "remove"]("done");
      this.el.classList[p > 0 && p < 1 + o ? "add" : "remove"]("inside");
      var offset = window.innerWidth * 0.6 - railBounds.width * p;
      var activeIndex = Math.floor(p * this.cards.length);

      for (var i = 0; i < this.cards.length; i++) {
        this.cards[i].classList[i == activeIndex ? "add" : "remove"]("active");
        var video = this.cards[i].querySelector("video");

        if (video) {
          if (this.browser.state.isMobile) {
            // force playing for one frame
            if (!video.classList.contains("played")) {
              video.play();

              if (!video.paused && !video.ended && video.currentTime > 0) {
                video.classList.add("played");
              }
            } else {
              if (i == activeIndex) video.play();else video.pause();
            }
          } else {
            if (i == activeIndex) video.play();else video.pause();
          }
        }
      }

      this.rail.style.transform = "translate3d(" + offset + "px,0 ,0)";
    }
  }]);
  return SliderCards;
}(_component["default"]);

exports["default"] = SliderCards;

},{"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34,"in-view":44}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Spanner = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Spanner, _Component);

  var _super = _createSuper(Spanner);

  function Spanner(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Spanner);
    _this = _super.call(this, "spanner");
    _this.parser = new DOMParser();
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Spanner, [{
    key: "mount",
    value: function mount(site) {
      var spanners = document.querySelectorAll("[data-spanner]");

      for (var i = 0; i < spanners.length; i++) {
        this.initSpanner(spanners[i]);
      }
    }
  }, {
    key: "initSpanner",
    value: function initSpanner(el) {
      // console.log(el);
      var className = el.getAttribute("data-spanner"); // console.log(el.innerHTML);
      // this.dig(el, classes, 1);

      this.split(el, className);
    }
  }, {
    key: "split",
    value: function split(el, className) {
      var content = el.innerHTML;
      content = content.replaceAll("<p>", " ¥¥¥ ");
      content = content.replaceAll("</p>", " ### ");
      var words = content.split(" ");
      var output = "";
      var index = 1;
      var inSkip = false;
      var skipContent = "";

      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word == "") continue;
        if (word == "\n") continue;

        if (!inSkip) {
          if (word == "¥¥¥") output += "<p>";else if (word == "###") output += "</p>";else if (word.includes("<span")) {
            inSkip = true;
          } else {
            output += "<span class=\"" + className + "\" data-i=\"" + index + "\">" + word + " </span>";
            index++;
          }
        }

        if (inSkip) {
          skipContent += word + " ";

          if (word.includes("</span>")) {
            inSkip = false;

            if (el.classList.contains("spanSkip")) {
              output += "<span class=\"" + className + " skip \" data-i=\"" + index + "\">" + skipContent + " </span>";
              ;
              index++;
            } else {
              output += skipContent;
            }

            skipContent = "";
          }
        }
      }

      el.innerHTML = output;
      el.classList.add("spanned");
    }
  }]);
  return Spanner;
}(_component["default"]);

exports["default"] = Spanner;

},{"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Timezone = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Timezone, _Component);

  var _super = _createSuper(Timezone);

  function Timezone(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Timezone);
    _this = _super.call(this, "timezone");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Timezone, [{
    key: "mount",
    value: function mount(site) {
      var _this2 = this;

      this.el = document.getElementById("time");
      if (!this.el) return;
      this.hovers = document.querySelectorAll("[data-timezone");
      this.hovers.forEach(function (el) {
        var tz = el.getAttribute("data-timezone");
        el.addEventListener("mouseenter", function () {
          var d = new Date();
          var tzo = d.getTimezoneOffset() / -60 - tz;
          var hr = (d.getHours() - tzo) % 24;
          var min = d.getMinutes();
          var ampm = "am";

          if (hr < 0) {
            hr = 24 + hr;
          }

          if (hr > 12) {
            hr -= 12;
            ampm = "pm";
          }

          min = min < 10 ? "0" + min : min;
          _this2.el.innerHTML = hr + "<span>:</span>" + min + " " + ampm;
        });
      });
    }
  }]);
  return Timezone;
}(_component["default"]);

exports["default"] = Timezone;

},{"./component":3,"@babel/runtime/helpers/assertThisInitialized":28,"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/possibleConstructorReturn":34}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _vanillaLazyload = _interopRequireDefault(require("vanilla-lazyload"));

var BrowserController = /*#__PURE__*/function () {
  function BrowserController(site) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, BrowserController);
    this.state = {
      scrollTop: this.getScroll(),
      scrollLag: this.getScroll(),
      scrollDiff: 0,
      lag: 5,
      toRender: [],
      toResize: [],
      resizeTimeout: null,
      mouse: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        xLag: window.innerWidth / 2,
        yLag: window.innerHeight / 2,
        xSlowLag: window.innerWidth / 2,
        ySlowLag: window.innerHeight / 2,
        lag: 8,
        down: false
      },
      dpi: Math.min(2, window.devicePixelRatio || 1),
      t: 0,
      d: Date.now(),
      delta: 0,
      rate: 0,
      rem: 0,
      isTablet: false,
      isMobile: false
    };
    this.site = site;
    this.lazy = new _vanillaLazyload["default"]({
      "thresholds": "75% 50%"
    });
    this.state.lenis = new Lenis({
      duration: 0.6,
      easing: function easing(t) {
        return Math.min(1, 1.02 - Math.pow(1.5, -10 * t));
      },
      // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      // vertical, horizontal
      gestureDirection: 'vertical',
      // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 0.9,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false
    });
    window.lenis = this.state.lenis;

    if (site.edit) {
      setInterval(function () {
        _this.lazy.update();
      }, 2000);
    }

    this.init();
  }

  (0, _createClass2["default"])(BrowserController, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.resizeBaseWork(); //window.addEventListener("scroll", this.onScroll.bind(this));

      window.addEventListener('mousemove', this.onMouseMove.bind(this));
      window.addEventListener('mousedown', this.onMouseDown.bind(this));
      window.addEventListener('mouseup', this.onMouseUp.bind(this));
      window.addEventListener("mouseout", function (e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;

        if (!from || from.nodeName == "HTML") {
          _this2.onMouseUp();
        }
      });
      window.addEventListener('resize', this.onResize.bind(this));
      this.boundRender = this.renderLoop.bind(this);
      this.renderLoop(0);
    }
  }, {
    key: "onScroll",
    value: function onScroll(e) {
      var s = this.getScroll();
      this.state.scrollDiff = s - this.state.scrollTop;
      this.state.scrollTop = s;
    }
  }, {
    key: "getScroll",
    value: function getScroll() {
      return document.documentElement.scrollTop;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      this.state.mouse.x = e.clientX;
      this.state.mouse.y = e.clientY;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(e) {
      this.state.mouse.down = true;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      this.state.mouse.down = false;
    }
  }, {
    key: "addToRenderLoop",
    value: function addToRenderLoop(callback) {
      this.state.toRender.push(callback);
    }
  }, {
    key: "renderBaseWork",
    value: function renderBaseWork(time) {
      this.state.lenis.raf(time);
      this.onScroll();
      this.state.delta = Date.now() - this.state.d;
      this.state.t += this.state.delta;
      this.state.d = Date.now();
      this.state.rate = this.state.delta / 16;
      this.state.mouse.xLag += (this.state.mouse.x - this.state.mouse.xLag) / this.state.mouse.lag;
      this.state.mouse.yLag += (this.state.mouse.y - this.state.mouse.yLag) / this.state.mouse.lag;
      this.state.mouse.xSlowLag += (this.state.mouse.x - this.state.mouse.xSlowLag) / this.state.mouse.lag / 2;
      this.state.mouse.ySlowLag += (this.state.mouse.y - this.state.mouse.ySlowLag) / this.state.mouse.lag / 2;
      this.state.scrollLag += (this.state.scrollTop - this.state.scrollLag) / this.state.lag;
    }
  }, {
    key: "renderLoop",
    value: function renderLoop(time) {
      var _this3 = this;

      this.renderBaseWork(time);
      this.state.toRender.forEach(function (callback) {
        callback(_this3.state.rate);
      });
      requestAnimationFrame(this.boundRender);
    }
  }, {
    key: "addToResizeLoop",
    value: function addToResizeLoop(callback) {
      this.state.toResize.push(callback);
      callback();
    }
  }, {
    key: "resizeBaseWork",
    value: function resizeBaseWork() {
      this.state.rem = window.innerWidth / 100 * (1000 / 1680);
      this.state.isTablet = window.innerWidth <= 1000;
      if (this.state.isTablet) this.state.rem = window.innerWidth / 100 * (1000 / 834);
      this.state.isMobile = window.innerWidth <= 600;
      if (this.state.isMobile) this.state.rem = window.innerWidth / 100 * (1000 / 375);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      clearTimeout(this.state.resizeTimeout);
      this.state.resizeTimeout = setTimeout(this.resizeLoop.bind(this), 100);
    }
  }, {
    key: "resizeLoop",
    value: function resizeLoop(e) {
      this.resizeBaseWork();
      this.state.toResize.forEach(function (callback) {
        callback();
      });
    }
  }]);
  return BrowserController;
}();

exports["default"] = BrowserController;

},{"@babel/runtime/helpers/classCallCheck":29,"@babel/runtime/helpers/createClass":30,"@babel/runtime/helpers/interopRequireDefault":33,"vanilla-lazyload":69}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initComponents;

var _componentRegister = _interopRequireDefault(require("./componentRegister"));

function initComponents(site) {
  site.components = {
    site: site,
    debug: site.debug,
    all: [],
    mounted: [],
    attachedToPages: []
  };
  window.components = site.components;
  site.components.getComponent = getComponent.bind(site.components);
  site.components.mount = mount.bind(site.components);
  site.components.unmount = unmount.bind(site.components);
  site.components.attachToPages = attachToPages.bind(site.components);
  site.components.mountPage = mountPage.bind(site.components);
  site.components.unmountPage = unmountPage.bind(site.components);
  (0, _componentRegister["default"])(site);
}

function getComponent(name) {
  return this.all.find(function (c) {
    return c.name == name;
  });
}

function mount(component) {
  this.mounted.push({
    component: component
  });
  component.mount(this.site);
}

function unmount(component) {//loop through and remove
}

function attachToPages(pages, component) {
  var _this = this;

  pages.forEach(function (path) {
    _this.attachedToPages.push({
      component: component,
      path: path
    });
  });
}

function mountPage(path) {
  var _this2 = this;

  this.attachedToPages.forEach(function (attach) {
    if (attach.path == path || attach.path == "all") {
      _this2.mounted.push({
        component: attach.component,
        trigger: {
          path: attach.path
        }
      });

      attach.component.mount(_this2.site);
    }
  });
}

function unmountPage(path) {
  var mount;

  for (var i = this.mounted.length - 1; i >= 0; i--) {
    mount = this.mounted[i];

    if (mount.trigger && (mount.trigger.path == path || mount.trigger.path == "all")) {
      mount.component.unmount(this.site);
      this.mounted.splice(i, 1);
    }
  }
}

},{"./componentRegister":19,"@babel/runtime/helpers/interopRequireDefault":33}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerComponents;

var _anima = _interopRequireDefault(require("../components/anima"));

var _spanner = _interopRequireDefault(require("../components/spanner"));

var _scrollpal = _interopRequireDefault(require("../components/scrollpal"));

var _sliderCards = _interopRequireDefault(require("../components/sliderCards"));

var _logos = _interopRequireDefault(require("../components/logos"));

var _dirtyForms = _interopRequireDefault(require("../components/dirty-forms"));

var _looper = _interopRequireDefault(require("../components/looper"));

var _mouseFollow = _interopRequireDefault(require("../components/mouse-follow"));

var _timezone = _interopRequireDefault(require("../components/timezone"));

var _cookieConstent = _interopRequireDefault(require("../components/cookie-constent"));

var _contact = _interopRequireDefault(require("../components/contact"));

var _car = _interopRequireDefault(require("../components/car"));

var _homeHeader = _interopRequireDefault(require("../components/home-header"));

var _menu = _interopRequireDefault(require("../components/menu"));

var _imageCircle = _interopRequireDefault(require("../components/image-circle"));

// import Accordion from "../components/accordion";
// import Counter from "../components/counter";
// import HTMLClass from "../components/html-class";
function registerComponents(site) {
  // site.components.all.push(new Counter(site));
  site.components.all.push(new _anima["default"](site)); // site.components.all.push(new Accordion(site));

  site.components.all.push(new _spanner["default"](site)); // site.components.all.push(new HTMLClass(site));

  site.components.all.push(new _sliderCards["default"](site));
  site.components.all.push(new _scrollpal["default"](site));
  site.components.all.push(new _logos["default"](site));
  site.components.all.push(new _dirtyForms["default"](site));
  site.components.all.push(new _looper["default"](site));
  site.components.all.push(new _mouseFollow["default"](site));
  site.components.all.push(new _timezone["default"](site));
  site.components.all.push(new _cookieConstent["default"](site));
  site.components.all.push(new _contact["default"](site));
  site.components.all.push(new _car["default"](site));
  site.components.all.push(new _homeHeader["default"](site));
  site.components.all.push(new _menu["default"](site));
  site.components.all.push(new _imageCircle["default"](site));
}

},{"../components/anima":1,"../components/car":2,"../components/contact":4,"../components/cookie-constent":5,"../components/dirty-forms":6,"../components/home-header":7,"../components/image-circle":8,"../components/logos":9,"../components/looper":10,"../components/menu":11,"../components/mouse-follow":12,"../components/scrollpal":13,"../components/sliderCards":14,"../components/spanner":15,"../components/timezone":16,"@babel/runtime/helpers/interopRequireDefault":33}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initNavigation;

var _swupPage = _interopRequireDefault(require("../utility/swup-page"));

function initNavigation(site) {
  site.navigation = {
    site: site,
    debug: site.debug,
    callbacks: []
  };
  site.navigation.enter = enter.bind(site.navigation);
  site.navigation.exit = exit.bind(site.navigation);
  site.navigation.runCallbacks = runCallbacks.bind(site.navigation);
  site.navigation.showPreloader = showPreloader.bind(site.navigation);
  site.navigation.navigateTo = navigateTo.bind(site.navigation);
  site.navigation.registerNavigationCallback = registerNavigationCallback.bind(site.navigation);
  if (!site.edit) site.navigation.swup = (0, _swupPage["default"])(site.navigation);
}

function exit() {
  //console.log("exit", this.path);
  document.documentElement.classList.remove("scrolled");
  document.documentElement.classList.remove("fullscreen-form");
  this.site.components.unmountPage(this.path);
}

function runCallbacks() {
  this.callbacks.forEach(function (callback, i) {
    if (callback) callback();
  });

  if (this.callback) {
    this.callback();
    this.callback = null;
  }
}

function enter(runCallbacks) {
  if (runCallbacks) this.runCallbacks();
  window.scrollTo(0, 0);
  this.site.browser.state.scrollTop = 0;
  this.site.browser.state.scrollLag = 0;
  this.path = parseLocation(); //console.log("enter", this.path);

  this.site.browser.lazy.update();
  this.site.components.mountPage(this.path);
}

function parseLocation(path) {
  if (!path) path = window.location.pathname;
  if (path == "/") return "home";
  return "default";
}

function navigateTo(url) {
  var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  if (callback) this.callback = callback;
  this.swup.loadPage({
    url: url,
    method: 'GET',
    customTransition: transition
  });
}

function registerNavigationCallback(callback) {
  this.callbacks.push(callback);
}

function showPreloader(site) {
  // let preload = document.getElementById("preload");
  // let message = document.getElementById("preload-message");
  // setTimeout(()=> {
  //   message.classList.add("out");
  // }, 1200);
  setTimeout(function () {
    site.navigation.enter(false);
    document.documentElement.classList.remove("is-animating");
    site.navigation.runCallbacks();
  }, 500); // setTimeout(() => {
  //   preload.remove();
  // }, 10000);
}

},{"../utility/swup-page":27,"@babel/runtime/helpers/interopRequireDefault":33}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initSite;

var _browserController = _interopRequireDefault(require("./browserController"));

var _navigationController = _interopRequireDefault(require("./navigationController"));

var _componentController = _interopRequireDefault(require("./componentController"));

function initSite() {
  var site = {
    debug: true,
    edit: window.location !== window.parent.location
  };
  site.browser = new _browserController["default"](site);
  (0, _navigationController["default"])(site);
  (0, _componentController["default"])(site);
  site.navigation.showPreloader(site);
}

},{"./browserController":17,"./componentController":18,"./navigationController":20,"@babel/runtime/helpers/interopRequireDefault":33}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _siteController = _interopRequireDefault(require("./core/siteController"));

window.addEventListener('DOMContentLoaded', _siteController["default"]);

},{"./core/siteController":21,"@babel/runtime/helpers/interopRequireDefault":33}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addConfirmListeners = addConfirmListeners;

function addConfirmListeners(el, callback, newFocus) {
  if (!el) return;
  el.addEventListener("click", callback);
  el.addEventListener("keydown", function (e) {
    if (e.keyCode == 13 || e.keyCode == 32) {
      callback();

      if (newFocus) {
        e.preventDefault();
        newFocus.focus();
      }
    }
  });
}

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = bezier;

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */
// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';

function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}

function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
}

function C(aA1) {
  return 3.0 * aA1;
} // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.


function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
} // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.


function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX,
      currentT,
      i = 0;

  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;

    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

  return currentT;
}

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);

    if (currentSlope === 0.0) {
      return aGuessT;
    }

    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }

  return aGuessT;
}

function LinearEasing(x) {
  return x;
}

function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  } // Precompute samples table


  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }

    --currentSample; // Interpolate to provide an initial guess for t

    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing(x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }

    if (x === 1) {
      return 1;
    }

    return calcBezier(getTForX(x), mY1, mY2);
  };
}

;

},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCookie = deleteCookie;
exports.getCookie = getCookie;
exports.setCookie = setCookie;

function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(name) {
  setCookie(name, '', -1);
}

},{}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bezier = _interopRequireDefault(require("./bezier"));

var _default = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
  count: new _bezier["default"](0.545, 0.005, 0.175, 0.975),
  customEaseInOut: new _bezier["default"](0.255, 0.000, 0.675, 1.000),
  customEaseIn: new _bezier["default"](0.640, 0.000, 0.685, 0.255),
  customEaseOut: new _bezier["default"](0.040, 0.510, 0.365, 1.005),
  adjust: new _bezier["default"](0.050, 0.385, 0.280, 0.285)
};
exports["default"] = _default;

},{"./bezier":24,"@babel/runtime/helpers/interopRequireDefault":33}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initSwup;

var _swup = _interopRequireDefault(require("swup"));

var _preloadPlugin = _interopRequireDefault(require("@swup/preload-plugin"));

var _scriptsPlugin = _interopRequireDefault(require("@swup/scripts-plugin"));

var _scrollPlugin = _interopRequireDefault(require("@swup/scroll-plugin"));

var _gaPlugin = _interopRequireDefault(require("@swup/ga-plugin"));

function initSwup(navigation) {
  var swup = null;
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  var isEdge = /Edge/.test(navigator.userAgent);

  if (!isIE11 && !isEdge) {
    swup = new _swup["default"]({
      linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]):not([data-popup-url]), a[href^="/"]:not([data-no-swup]):not([data-popup-url]), a[href^="#"]:not([data-no-swup]):not([data-popup-url])',
      containers: ['#main'],
      plugins: [// new SwupPreloadPlugin(),
      new _scriptsPlugin["default"]({
        optin: true
      }), new _gaPlugin["default"](), new _scrollPlugin["default"]({
        doScrollingRightAway: false,
        animateScroll: true,
        scrollFriction: 0.1,
        scrollAcceleration: 0.1
      })]
    });
    document.addEventListener('swup:willReplaceContent', navigation.exit.bind(navigation));
    document.addEventListener('swup:contentReplaced', navigation.enter.bind(navigation));
  } else {
    document.querySelectorAll("a").forEach(function (el) {
      var href = el.getAttribute("href");

      if (href && href != "#" && href != "" && !/mailto/.test(href) && !/tel/.test(href) && el.getAttribute("target") != "_blank") {
        el.addEventListener("click", function () {
          document.documentElement.classList.add("is-animating");
        });
      }
    });
  }

  return swup;
}

},{"@babel/runtime/helpers/interopRequireDefault":33,"@swup/ga-plugin":37,"@swup/preload-plugin":39,"@swup/scripts-plugin":40,"@swup/scroll-plugin":41,"swup":55}],28:[function(require,module,exports){
"use strict";

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],29:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],30:[function(require,module,exports){
"use strict";

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],31:[function(require,module,exports){
"use strict";

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],32:[function(require,module,exports){
"use strict";

var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./setPrototypeOf.js":35}],33:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],34:[function(require,module,exports){
"use strict";

var _typeof = require("./typeof.js")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./assertThisInitialized.js":28,"./typeof.js":36}],35:[function(require,module,exports){
"use strict";

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],36:[function(require,module,exports){
"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],37:[function(require,module,exports){
'use strict';

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _plugin = require('@swup/plugin');

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof2["default"])(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GaPlugin = function (_Plugin) {
  _inherits(GaPlugin, _Plugin);

  function GaPlugin(options) {
    _classCallCheck(this, GaPlugin);

    var _this = _possibleConstructorReturn(this, (GaPlugin.__proto__ || Object.getPrototypeOf(GaPlugin)).call(this));

    _this.name = 'GaPlugin';
    var defaultOptions = {
      gaMeasurementId: null
    };
    _this.options = _extends({}, defaultOptions, options);
    return _this;
  }

  _createClass(GaPlugin, [{
    key: 'mount',
    value: function mount() {
      var _this2 = this;

      this.swup.on('contentReplaced', function (event) {
        if (typeof gtag === 'function') {
          var title = document.title;
          var url = window.location.pathname + window.location.search;
          var gaId = _this2.options.gaMeasurementId;

          if (!gaId) {
            throw new Error('gaMeasurementId option is required for gtag.');
          }

          window.gtag('config', gaId, {
            page_title: title,
            page_path: url
          });

          _this2.swup.log('GTAG pageview (url \'' + url + '\').');
        } else if (typeof window.ga === 'function') {
          var _title = document.title;

          var _url = window.location.pathname + window.location.search;

          window.ga('set', 'title', _title);
          window.ga('set', 'page', _url);
          window.ga('send', 'pageview');

          _this2.swup.log('GA pageview (url \'' + _url + '\').');
        } else {
          console.warn("window.gtag and window.ga don't exists.");
        }
      });
    }
  }]);

  return GaPlugin;
}(_plugin2["default"]);

exports["default"] = GaPlugin;

},{"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/typeof":36,"@swup/plugin":38}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Plugin = function () {
  function Plugin() {
    _classCallCheck(this, Plugin);

    this.isSwupPlugin = true;
  }

  _createClass(Plugin, [{
    key: "mount",
    value: function mount() {// this is mount method rewritten by class extending
      // and is executed when swup is enabled with plugin
    }
  }, {
    key: "unmount",
    value: function unmount() {// this is unmount method rewritten by class extending
      // and is executed when swup with plugin is disabled
    }
  }, {
    key: "_beforeMount",
    value: function _beforeMount() {// here for any future hidden auto init
    }
  }, {
    key: "_afterUnmount",
    value: function _afterUnmount() {} // here for any future hidden auto-cleanup
    // this is here so we can tell if plugin was created by extending this class

  }]);

  return Plugin;
}();

exports["default"] = Plugin;

},{}],39:[function(require,module,exports){
'use strict';

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _plugin = require('@swup/plugin');

var _plugin2 = _interopRequireDefault(_plugin);

var _delegate = require('delegate');

var _delegate2 = _interopRequireDefault(_delegate);

var _utils = require('swup/lib/utils');

var _helpers = require('swup/lib/helpers');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof2["default"])(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PreloadPlugin = function (_Plugin) {
  _inherits(PreloadPlugin, _Plugin);

  function PreloadPlugin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PreloadPlugin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PreloadPlugin.__proto__ || Object.getPrototypeOf(PreloadPlugin)).call.apply(_ref, [this].concat(args))), _this), _this.name = "PreloadPlugin", _this.onContentReplaced = function () {
      _this.swup.preloadPages();
    }, _this.onMouseover = function (event) {
      var swup = _this.swup;
      swup.triggerEvent('hoverLink', event);
      var link = new _helpers.Link(event.delegateTarget);

      if (link.getAddress() !== (0, _helpers.getCurrentUrl)() && !swup.cache.exists(link.getAddress()) && swup.preloadPromise == null) {
        swup.preloadPromise = swup.preloadPage(link.getAddress());
        swup.preloadPromise.route = link.getAddress();
        swup.preloadPromise["finally"](function () {
          swup.preloadPromise = null;
        });
      }
    }, _this.preloadPage = function (pathname) {
      var swup = _this.swup;
      var link = new _helpers.Link(pathname);
      return new Promise(function (resolve, reject) {
        if (link.getAddress() != (0, _helpers.getCurrentUrl)() && !swup.cache.exists(link.getAddress())) {
          (0, _helpers.fetch)({
            url: link.getAddress(),
            headers: swup.options.requestHeaders
          }, function (response) {
            if (response.status === 500) {
              swup.triggerEvent('serverError');
              reject();
            } else {
              // get json data
              var page = swup.getPageData(response);

              if (page != null) {
                page.url = link.getAddress();
                swup.cache.cacheUrl(page, swup.options.debugMode);
                swup.triggerEvent('pagePreloaded');
              } else {
                reject(link.getAddress());
                return;
              }

              resolve(swup.cache.getPage(link.getAddress()));
            }
          });
        } else {
          resolve(swup.cache.getPage(link.getAddress()));
        }
      });
    }, _this.preloadPages = function () {
      (0, _utils.queryAll)('[data-swup-preload]').forEach(function (element) {
        _this.swup.preloadPage(element.href);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PreloadPlugin, [{
    key: 'mount',
    value: function mount() {
      var swup = this.swup;
      swup._handlers.pagePreloaded = [];
      swup._handlers.hoverLink = [];
      swup.preloadPage = this.preloadPage;
      swup.preloadPages = this.preloadPages; // register mouseover handler

      swup.delegatedListeners.mouseover = (0, _delegate2["default"])(document.body, swup.options.linkSelector, 'mouseover', this.onMouseover.bind(this)); // initial preload of page form links with [data-swup-preload]

      swup.preloadPages(); // do the same on every content replace

      swup.on('contentReplaced', this.onContentReplaced);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      var swup = this.swup;
      swup._handlers.pagePreloaded = null;
      swup._handlers.hoverLink = null;
      swup.preloadPage = null;
      swup.preloadPages = null;
      swup.delegatedListeners.mouseover.destroy();
      swup.off('contentReplaced', this.onContentReplaced);
    }
  }]);

  return PreloadPlugin;
}(_plugin2["default"]);

exports["default"] = PreloadPlugin;

},{"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/typeof":36,"@swup/plugin":38,"delegate":43,"swup/lib/helpers":52,"swup/lib/utils":66}],40:[function(require,module,exports){
'use strict';

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _plugin = require('@swup/plugin');

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof2["default"])(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var arrayify = function arrayify(list) {
  return Array.prototype.slice.call(list);
};

var ScriptsPlugin = function (_Plugin) {
  _inherits(ScriptsPlugin, _Plugin);

  function ScriptsPlugin(options) {
    _classCallCheck(this, ScriptsPlugin);

    var _this = _possibleConstructorReturn(this, (ScriptsPlugin.__proto__ || Object.getPrototypeOf(ScriptsPlugin)).call(this));

    _this.name = 'ScriptsPlugin';

    _this.runScripts = function () {
      var scope = _this.options.head && _this.options.body ? document : _this.options.head ? document.head : document.body;
      var selector = _this.options.optin ? 'script[data-swup-reload-script]' : 'script:not([data-swup-ignore-script])';
      var scripts = arrayify(scope.querySelectorAll(selector));
      scripts.forEach(function (script) {
        return _this.runScript(script);
      });

      _this.swup.log('Executed ' + scripts.length + ' scripts.');
    };

    _this.runScript = function (originalElement) {
      var element = document.createElement('script');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = arrayify(originalElement.attributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref2 = _step.value;
          var name = _ref2.name,
              value = _ref2.value;
          element.setAttribute(name, value);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      element.textContent = originalElement.textContent;
      element.setAttribute('async', 'false');
      originalElement.replaceWith(element);
      return element;
    };

    var defaultOptions = {
      head: true,
      body: true,
      optin: false
    };
    _this.options = _extends({}, defaultOptions, options);
    return _this;
  }

  _createClass(ScriptsPlugin, [{
    key: 'mount',
    value: function mount() {
      this.swup.on('contentReplaced', this.runScripts);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.swup.off('contentReplaced', this.runScripts);
    }
  }]);

  return ScriptsPlugin;
}(_plugin2["default"]);

exports["default"] = ScriptsPlugin;

},{"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/typeof":36,"@swup/plugin":38}],41:[function(require,module,exports){
'use strict';

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && (0, _typeof3["default"])(Symbol.iterator) === "symbol" ? function (obj) {
  return (0, _typeof3["default"])(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0, _typeof3["default"])(obj);
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _plugin = require('@swup/plugin');

var _plugin2 = _interopRequireDefault(_plugin);

var _scrl = require('scrl');

var _scrl2 = _interopRequireDefault(_scrl);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((0, _typeof3["default"])(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof3["default"])(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ScrollPlugin = function (_Plugin) {
  _inherits(ScrollPlugin, _Plugin);

  function ScrollPlugin(options) {
    _classCallCheck(this, ScrollPlugin);

    var _this = _possibleConstructorReturn(this, (ScrollPlugin.__proto__ || Object.getPrototypeOf(ScrollPlugin)).call(this));

    _this.name = "ScrollPlugin";

    _this.getOffset = function () {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      switch (_typeof(_this.options.offset)) {
        case 'number':
          return _this.options.offset;

        case 'function':
          return parseInt(_this.options.offset(element), 10);

        default:
          return parseInt(_this.options.offset, 10);
      }
    };

    _this.onSamePage = function () {
      _this.swup.scrollTo(0);
    };

    _this.onSamePageWithHash = function (event) {
      var link = event.delegateTarget;
      var element = document.querySelector(link.hash);

      var top = element.getBoundingClientRect().top + window.pageYOffset - _this.getOffset(element);

      _this.swup.scrollTo(top);
    };

    _this.onTransitionStart = function (popstate) {
      if (_this.options.doScrollingRightAway && !_this.swup.scrollToElement) {
        _this.doScrolling(popstate);
      }
    };

    _this.onContentReplaced = function (popstate) {
      if (!_this.options.doScrollingRightAway || _this.swup.scrollToElement) {
        _this.doScrolling(popstate);
      }
    };

    _this.doScrolling = function (popstate) {
      var swup = _this.swup;

      if (!popstate || swup.options.animateHistoryBrowsing) {
        if (swup.scrollToElement != null) {
          var element = document.querySelector(swup.scrollToElement);

          if (element != null) {
            var top = element.getBoundingClientRect().top + window.pageYOffset - _this.getOffset(element);

            swup.scrollTo(top);
          } else {
            console.warn('Element ' + swup.scrollToElement + ' not found');
          }

          swup.scrollToElement = null;
        } else {
          swup.scrollTo(0);
        }
      }
    };

    var defaultOptions = {
      doScrollingRightAway: false,
      animateScroll: true,
      scrollFriction: 0.3,
      scrollAcceleration: 0.04,
      offset: 0
    };
    _this.options = _extends({}, defaultOptions, options);
    return _this;
  }

  _createClass(ScrollPlugin, [{
    key: 'mount',
    value: function mount() {
      var _this2 = this;

      var swup = this.swup; // add empty handlers array for submitForm event

      swup._handlers.scrollDone = [];
      swup._handlers.scrollStart = [];
      this.scrl = new _scrl2["default"]({
        onStart: function onStart() {
          return swup.triggerEvent('scrollStart');
        },
        onEnd: function onEnd() {
          return swup.triggerEvent('scrollDone');
        },
        onCancel: function onCancel() {
          return swup.triggerEvent('scrollDone');
        },
        friction: this.options.scrollFriction,
        acceleration: this.options.scrollAcceleration
      }); // set scrollTo method of swup and animate based on current animateScroll option

      swup.scrollTo = function (offset) {
        if (_this2.options.animateScroll) {
          _this2.scrl.scrollTo(offset);
        } else {
          swup.triggerEvent('scrollStart');
          window.scrollTo(0, offset);
          swup.triggerEvent('scrollDone');
        }
      }; // disable browser scroll control on popstates when
      // animateHistoryBrowsing option is enabled in swup


      if (swup.options.animateHistoryBrowsing) {
        window.history.scrollRestoration = 'manual';
      } // scroll to the top of the page


      swup.on('samePage', this.onSamePage); // scroll to referenced element on the same page

      swup.on('samePageWithHash', this.onSamePageWithHash); // scroll to the referenced element

      swup.on('transitionStart', this.onTransitionStart); // scroll to the referenced element when it's in the page (after render)

      swup.on('contentReplaced', this.onContentReplaced);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.swup.scrollTo = null;
      delete this.scrl;
      this.scrl = null;
      this.swup.off('samePage', this.onSamePage);
      this.swup.off('samePageWithHash', this.onSamePageWithHash);
      this.swup.off('transitionStart', this.onTransitionStart);
      this.swup.off('contentReplaced', this.onContentReplaced);
      this.swup._handlers.scrollDone = null;
      this.swup._handlers.scrollStart = null;
      window.history.scrollRestoration = 'auto';
    }
  }]);

  return ScrollPlugin;
}(_plugin2["default"]);

exports["default"] = ScrollPlugin;

},{"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/typeof":36,"@swup/plugin":38,"scrl":45}],42:[function(require,module,exports){
"use strict";

var DOCUMENT_NODE_TYPE = 9;
/**
 * A polyfill for Element.matches()
 */

if (typeof Element !== 'undefined' && !Element.prototype.matches) {
  var proto = Element.prototype;
  proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
}
/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */


function closest(element, selector) {
  while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
    if (typeof element.matches === 'function' && element.matches(selector)) {
      return element;
    }

    element = element.parentNode;
  }
}

module.exports = closest;

},{}],43:[function(require,module,exports){
"use strict";

var closest = require('./closest');
/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */


function _delegate(element, selector, type, callback, useCapture) {
  var listenerFn = listener.apply(this, arguments);
  element.addEventListener(type, listenerFn, useCapture);
  return {
    destroy: function destroy() {
      element.removeEventListener(type, listenerFn, useCapture);
    }
  };
}
/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */


function delegate(elements, selector, type, callback, useCapture) {
  // Handle the regular Element usage
  if (typeof elements.addEventListener === 'function') {
    return _delegate.apply(null, arguments);
  } // Handle Element-less usage, it defaults to global delegation


  if (typeof type === 'function') {
    // Use `document` as the first parameter, then apply arguments
    // This is a short way to .unshift `arguments` without running into deoptimizations
    return _delegate.bind(null, document).apply(null, arguments);
  } // Handle Selector-based usage


  if (typeof elements === 'string') {
    elements = document.querySelectorAll(elements);
  } // Handle Array-like based usage


  return Array.prototype.map.call(elements, function (element) {
    return _delegate(element, selector, type, callback, useCapture);
  });
}
/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */


function listener(element, selector, type, callback) {
  return function (e) {
    e.delegateTarget = closest(e.target, selector);

    if (e.delegateTarget) {
      callback.call(element, e);
    }
  };
}

module.exports = delegate;

},{"./closest":42}],44:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) && "object" == (typeof module === "undefined" ? "undefined" : (0, _typeof2["default"])(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) ? exports.inView = e() : t.inView = e();
}(void 0, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0);
  }([function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    var i = n(2),
        o = r(i);
    t.exports = o["default"];
  }, function (t, e) {
    function n(t) {
      var e = (0, _typeof2["default"])(t);
      return null != t && ("object" == e || "function" == e);
    }

    t.exports = n;
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var i = n(9),
        o = r(i),
        u = n(3),
        f = r(u),
        s = n(4),
        c = function c() {
      if ("undefined" != typeof window) {
        var t = 100,
            e = ["scroll", "resize", "load"],
            n = {
          history: []
        },
            r = {
          offset: {},
          threshold: 0,
          test: s.inViewport
        },
            i = (0, o["default"])(function () {
          n.history.forEach(function (t) {
            n[t].check();
          });
        }, t);
        e.forEach(function (t) {
          return addEventListener(t, i);
        }), window.MutationObserver && addEventListener("DOMContentLoaded", function () {
          new MutationObserver(i).observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
          });
        });

        var u = function u(t) {
          if ("string" == typeof t) {
            var e = [].slice.call(document.querySelectorAll(t));
            return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, f["default"])(e, r), n.history.push(t)), n[t];
          }
        };

        return u.offset = function (t) {
          if (void 0 === t) return r.offset;

          var e = function e(t) {
            return "number" == typeof t;
          };

          return ["top", "right", "bottom", "left"].forEach(e(t) ? function (e) {
            return r.offset[e] = t;
          } : function (n) {
            return e(t[n]) ? r.offset[n] = t[n] : null;
          }), r.offset;
        }, u.threshold = function (t) {
          return "number" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold;
        }, u.test = function (t) {
          return "function" == typeof t ? r.test = t : r.test;
        }, u.is = function (t) {
          return r.test(t, r);
        }, u.offset(0), u;
      }
    };

    e["default"] = c();
  }, function (t, e) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = function () {
      function t(e, r) {
        n(this, t), this.options = r, this.elements = e, this.current = [], this.handlers = {
          enter: [],
          exit: []
        }, this.singles = {
          enter: [],
          exit: []
        };
      }

      return r(t, [{
        key: "check",
        value: function value() {
          var t = this;
          return this.elements.forEach(function (e) {
            var n = t.options.test(e, t.options),
                r = t.current.indexOf(e),
                i = r > -1,
                o = n && !i,
                u = !n && i;
            o && (t.current.push(e), t.emit("enter", e)), u && (t.current.splice(r, 1), t.emit("exit", e));
          }), this;
        }
      }, {
        key: "on",
        value: function value(t, e) {
          return this.handlers[t].push(e), this;
        }
      }, {
        key: "once",
        value: function value(t, e) {
          return this.singles[t].unshift(e), this;
        }
      }, {
        key: "emit",
        value: function value(t, e) {
          for (; this.singles[t].length;) {
            this.singles[t].pop()(e);
          }

          for (var n = this.handlers[t].length; --n > -1;) {
            this.handlers[t][n](e);
          }

          return this;
        }
      }]), t;
    }();

    e["default"] = function (t, e) {
      return new i(t, e);
    };
  }, function (t, e) {
    "use strict";

    function n(t, e) {
      var n = t.getBoundingClientRect(),
          r = n.top,
          i = n.right,
          o = n.bottom,
          u = n.left,
          f = n.width,
          s = n.height,
          c = {
        t: o,
        r: window.innerWidth - u,
        b: window.innerHeight - r,
        l: i
      },
          a = {
        x: e.threshold * f,
        y: e.threshold * s
      };
      return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x;
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.inViewport = n;
  }, function (t, e) {
    (function (e) {
      var n = "object" == (0, _typeof2["default"])(e) && e && e.Object === Object && e;
      t.exports = n;
    }).call(e, function () {
      return this;
    }());
  }, function (t, e, n) {
    var r = n(5),
        i = "object" == (typeof self === "undefined" ? "undefined" : (0, _typeof2["default"])(self)) && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o;
  }, function (t, e, n) {
    function r(t, e, n) {
      function r(e) {
        var n = x,
            r = m;
        return x = m = void 0, E = e, w = t.apply(r, n);
      }

      function a(t) {
        return E = t, j = setTimeout(h, e), M ? r(t) : w;
      }

      function l(t) {
        var n = t - O,
            r = t - E,
            i = e - n;
        return _ ? c(i, g - r) : i;
      }

      function d(t) {
        var n = t - O,
            r = t - E;
        return void 0 === O || n >= e || n < 0 || _ && r >= g;
      }

      function h() {
        var t = o();
        return d(t) ? p(t) : void (j = setTimeout(h, l(t)));
      }

      function p(t) {
        return j = void 0, T && x ? r(t) : (x = m = void 0, w);
      }

      function v() {
        void 0 !== j && clearTimeout(j), E = 0, x = O = m = j = void 0;
      }

      function y() {
        return void 0 === j ? w : p(o());
      }

      function b() {
        var t = o(),
            n = d(t);

        if (x = arguments, m = this, O = t, n) {
          if (void 0 === j) return a(O);
          if (_) return j = setTimeout(h, e), r(O);
        }

        return void 0 === j && (j = setTimeout(h, e)), w;
      }

      var x,
          m,
          g,
          w,
          j,
          O,
          E = 0,
          M = !1,
          _ = !1,
          T = !0;

      if ("function" != typeof t) throw new TypeError(f);
      return e = u(e) || 0, i(n) && (M = !!n.leading, _ = "maxWait" in n, g = _ ? s(u(n.maxWait) || 0, e) : g, T = "trailing" in n ? !!n.trailing : T), b.cancel = v, b.flush = y, b;
    }

    var i = n(1),
        o = n(8),
        u = n(10),
        f = "Expected a function",
        s = Math.max,
        c = Math.min;
    t.exports = r;
  }, function (t, e, n) {
    var r = n(6),
        i = function i() {
      return r.Date.now();
    };

    t.exports = i;
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = !0,
          f = !0;
      if ("function" != typeof t) throw new TypeError(u);
      return o(n) && (r = "leading" in n ? !!n.leading : r, f = "trailing" in n ? !!n.trailing : f), i(t, e, {
        leading: r,
        maxWait: e,
        trailing: f
      });
    }

    var i = n(7),
        o = n(1),
        u = "Expected a function";
    t.exports = r;
  }, function (t, e) {
    function n(t) {
      return t;
    }

    t.exports = n;
  }]);
});

},{"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/typeof":36}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Scrl = function Scrl(options) {
  var _this = this;

  _classCallCheck(this, Scrl);

  this._raf = null;
  this._positionY = 0;
  this._velocityY = 0;
  this._targetPositionY = 0;
  this._targetPositionYWithOffset = 0;
  this._direction = 0;

  this.scrollTo = function (offset) {
    if (offset && offset.nodeType) {
      // the offset is element
      _this._targetPositionY = Math.round(offset.getBoundingClientRect().top + window.pageYOffset);
    } else if (parseInt(_this._targetPositionY) === _this._targetPositionY) {
      // the offset is a number
      _this._targetPositionY = Math.round(offset);
    } else {
      console.error('Argument must be a number or an element.');
      return;
    } // don't animate beyond the document height


    if (_this._targetPositionY > document.documentElement.scrollHeight - window.innerHeight) {
      _this._targetPositionY = document.documentElement.scrollHeight - window.innerHeight;
    } // calculated required values


    _this._positionY = document.body.scrollTop || document.documentElement.scrollTop;
    _this._direction = _this._positionY > _this._targetPositionY ? -1 : 1;
    _this._targetPositionYWithOffset = _this._targetPositionY + _this._direction;
    _this._velocityY = 0;

    if (_this._positionY !== _this._targetPositionY) {
      // start animation
      _this.options.onStart();

      _this._animate();
    } else {
      // page is already at the position
      _this.options.onAlreadyAtPositions();
    }
  };

  this._animate = function () {
    var distance = _this._update();

    _this._render();

    if (_this._direction === 1 && _this._targetPositionY > _this._positionY || _this._direction === -1 && _this._targetPositionY < _this._positionY) {
      // calculate next position
      _this._raf = requestAnimationFrame(_this._animate);

      _this.options.onTick();
    } else {
      // finish and set position to the final position
      _this._positionY = _this._targetPositionY;

      _this._render();

      _this._raf = null;

      _this.options.onTick();

      _this.options.onEnd(); // this.triggerEvent('scrollDone')

    }
  };

  this._update = function () {
    var distance = _this._targetPositionYWithOffset - _this._positionY;
    var attraction = distance * _this.options.acceleration;
    _this._velocityY += attraction;
    _this._velocityY *= _this.options.friction;
    _this._positionY += _this._velocityY;
    return Math.abs(distance);
  };

  this._render = function () {
    window.scrollTo(0, _this._positionY);
  }; // default options


  var defaults = {
    onAlreadyAtPositions: function onAlreadyAtPositions() {},
    onCancel: function onCancel() {},
    onEnd: function onEnd() {},
    onStart: function onStart() {},
    onTick: function onTick() {},
    friction: .7,
    // 1 - .3
    acceleration: .04 // merge options

  };
  this.options = _extends({}, defaults, options); // set reverse friction

  if (options && options.friction) {
    this.options.friction = 1 - options.friction;
  } // register listener for cancel on wheel event


  window.addEventListener('mousewheel', function (event) {
    if (_this._raf) {
      _this.options.onCancel();

      cancelAnimationFrame(_this._raf);
      _this._raf = null;
    }
  }, {
    passive: true
  });
};

exports["default"] = Scrl;

},{}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Link = function () {
  function Link(elementOrUrl) {
    _classCallCheck(this, Link);

    if (elementOrUrl instanceof Element || elementOrUrl instanceof SVGElement) {
      this.link = elementOrUrl;
    } else {
      this.link = document.createElement('a');
      this.link.href = elementOrUrl;
    }
  }

  _createClass(Link, [{
    key: 'getPath',
    value: function getPath() {
      var path = this.link.pathname;

      if (path[0] !== '/') {
        path = '/' + path;
      }

      return path;
    }
  }, {
    key: 'getAddress',
    value: function getAddress() {
      var path = this.link.pathname + this.link.search;

      if (this.link.getAttribute('xlink:href')) {
        path = this.link.getAttribute('xlink:href');
      }

      if (path[0] !== '/') {
        path = '/' + path;
      }

      return path;
    }
  }, {
    key: 'getHash',
    value: function getHash() {
      return this.link.hash;
    }
  }]);

  return Link;
}();

exports["default"] = Link;

},{}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var classify = function classify(text) {
  var output = text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
  .replace(/\//g, '-') // Replace / with -
  .replace(/[^\w\-]+/g, '') // Remove all non-word chars
  .replace(/\-\-+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, ''); // Trim - from end of text

  if (output[0] === '/') output = output.splice(1);
  if (output === '') output = 'homepage';
  return output;
};

exports["default"] = classify;

},{}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHistoryRecord = function createHistoryRecord(url) {
  window.history.pushState({
    url: url || window.location.href.split(window.location.hostname)[1],
    random: Math.random(),
    source: 'swup'
  }, document.getElementsByTagName('title')[0].innerText, url || window.location.href.split(window.location.hostname)[1]);
};

exports["default"] = createHistoryRecord;

},{}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var fetch = function fetch(setOptions) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var defaults = {
    url: window.location.pathname + window.location.search,
    method: 'GET',
    data: null,
    headers: {}
  };

  var options = _extends({}, defaults, setOptions);

  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status !== 500) {
        callback(request);
      } else {
        callback(request);
      }
    }
  };

  request.open(options.method, options.url, true);
  Object.keys(options.headers).forEach(function (key) {
    request.setRequestHeader(key, options.headers[key]);
  });
  request.send(options.data);
  return request;
};

exports["default"] = fetch;

},{}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getCurrentUrl = function getCurrentUrl() {
  return window.location.pathname + window.location.search;
};

exports["default"] = getCurrentUrl;

},{}],51:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && (0, _typeof3["default"])(Symbol.iterator) === "symbol" ? function (obj) {
  return (0, _typeof3["default"])(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0, _typeof3["default"])(obj);
};

var _utils = require('../utils');

var getDataFromHtml = function getDataFromHtml(html, containers) {
  var fakeDom = document.createElement('html');
  fakeDom.innerHTML = html;
  var blocks = [];

  var _loop = function _loop(i) {
    if (fakeDom.querySelector(containers[i]) == null) {
      // page in invalid
      return {
        v: null
      };
    } else {
      (0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
        (0, _utils.queryAll)(containers[i], fakeDom)[index].setAttribute('data-swup', blocks.length); // marks element with data-swup

        blocks.push((0, _utils.queryAll)(containers[i], fakeDom)[index].outerHTML);
      });
    }
  };

  for (var i = 0; i < containers.length; i++) {
    var _ret = _loop(i);

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }

  var json = {
    title: fakeDom.querySelector('title').innerText,
    pageClass: fakeDom.querySelector('body').className,
    originalContent: html,
    blocks: blocks
  }; // to prevent memory leaks

  fakeDom.innerHTML = '';
  fakeDom = null;
  return json;
};

exports["default"] = getDataFromHtml;

},{"../utils":66,"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/typeof":36}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.markSwupElements = exports.getCurrentUrl = exports.transitionEnd = exports.fetch = exports.getDataFromHtml = exports.createHistoryRecord = exports.classify = undefined;

var _classify = require('./classify');

var _classify2 = _interopRequireDefault(_classify);

var _createHistoryRecord = require('./createHistoryRecord');

var _createHistoryRecord2 = _interopRequireDefault(_createHistoryRecord);

var _getDataFromHtml = require('./getDataFromHtml');

var _getDataFromHtml2 = _interopRequireDefault(_getDataFromHtml);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _transitionEnd = require('./transitionEnd');

var _transitionEnd2 = _interopRequireDefault(_transitionEnd);

var _getCurrentUrl = require('./getCurrentUrl');

var _getCurrentUrl2 = _interopRequireDefault(_getCurrentUrl);

var _markSwupElements = require('./markSwupElements');

var _markSwupElements2 = _interopRequireDefault(_markSwupElements);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var classify = exports.classify = _classify2["default"];
var createHistoryRecord = exports.createHistoryRecord = _createHistoryRecord2["default"];
var getDataFromHtml = exports.getDataFromHtml = _getDataFromHtml2["default"];
var fetch = exports.fetch = _fetch2["default"];
var transitionEnd = exports.transitionEnd = _transitionEnd2["default"];
var getCurrentUrl = exports.getCurrentUrl = _getCurrentUrl2["default"];
var markSwupElements = exports.markSwupElements = _markSwupElements2["default"];
var Link = exports.Link = _Link2["default"];

},{"./Link":46,"./classify":47,"./createHistoryRecord":48,"./fetch":49,"./getCurrentUrl":50,"./getDataFromHtml":51,"./markSwupElements":53,"./transitionEnd":54}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var markSwupElements = function markSwupElements(element, containers) {
  var blocks = 0;

  var _loop = function _loop(i) {
    if (element.querySelector(containers[i]) == null) {
      console.warn('Element ' + containers[i] + ' is not in current page.');
    } else {
      (0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
        (0, _utils.queryAll)(containers[i], element)[index].setAttribute('data-swup', blocks);
        blocks++;
      });
    }
  };

  for (var i = 0; i < containers.length; i++) {
    _loop(i);
  }
};

exports["default"] = markSwupElements;

},{"../utils":66}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var transitionEnd = function transitionEnd() {
  var el = document.createElement('div');
  var transEndEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  for (var name in transEndEventNames) {
    if (el.style[name] !== undefined) {
      return transEndEventNames[name];
    }
  }

  return false;
};

exports["default"] = transitionEnd;

},{}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}(); // modules


var _delegate = require('delegate');

var _delegate2 = _interopRequireDefault(_delegate);

var _Cache = require('./modules/Cache');

var _Cache2 = _interopRequireDefault(_Cache);

var _loadPage = require('./modules/loadPage');

var _loadPage2 = _interopRequireDefault(_loadPage);

var _renderPage = require('./modules/renderPage');

var _renderPage2 = _interopRequireDefault(_renderPage);

var _triggerEvent = require('./modules/triggerEvent');

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _on = require('./modules/on');

var _on2 = _interopRequireDefault(_on);

var _off = require('./modules/off');

var _off2 = _interopRequireDefault(_off);

var _updateTransition = require('./modules/updateTransition');

var _updateTransition2 = _interopRequireDefault(_updateTransition);

var _getAnimationPromises = require('./modules/getAnimationPromises');

var _getAnimationPromises2 = _interopRequireDefault(_getAnimationPromises);

var _getPageData = require('./modules/getPageData');

var _getPageData2 = _interopRequireDefault(_getPageData);

var _plugins = require('./modules/plugins');

var _utils = require('./utils');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Swup = function () {
  function Swup(setOptions) {
    _classCallCheck(this, Swup); // default options


    var defaults = {
      animateHistoryBrowsing: false,
      animationSelector: '[class*="transition-"]',
      linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
      cache: true,
      containers: ['#swup'],
      requestHeaders: {
        'X-Requested-With': 'swup',
        Accept: 'text/html, application/xhtml+xml'
      },
      plugins: [],
      skipPopStateHandling: function skipPopStateHandling(event) {
        return !(event.state && event.state.source === 'swup');
      }
    }; // merge options

    var options = _extends({}, defaults, setOptions); // handler arrays


    this._handlers = {
      animationInDone: [],
      animationInStart: [],
      animationOutDone: [],
      animationOutStart: [],
      animationSkipped: [],
      clickLink: [],
      contentReplaced: [],
      disabled: [],
      enabled: [],
      openPageInNewTab: [],
      pageLoaded: [],
      pageRetrievedFromCache: [],
      pageView: [],
      popState: [],
      samePage: [],
      samePageWithHash: [],
      serverError: [],
      transitionStart: [],
      transitionEnd: [],
      willReplaceContent: []
    }; // variable for id of element to scroll to after render

    this.scrollToElement = null; // variable for promise used for preload, so no new loading of the same page starts while page is loading

    this.preloadPromise = null; // variable for save options

    this.options = options; // variable for plugins array

    this.plugins = []; // variable for current transition object

    this.transition = {}; // variable for keeping event listeners from "delegate"

    this.delegatedListeners = {}; // so we are able to remove the listener

    this.boundPopStateHandler = this.popStateHandler.bind(this); // make modules accessible in instance

    this.cache = new _Cache2["default"]();
    this.cache.swup = this;
    this.loadPage = _loadPage2["default"];
    this.renderPage = _renderPage2["default"];
    this.triggerEvent = _triggerEvent2["default"];
    this.on = _on2["default"];
    this.off = _off2["default"];
    this.updateTransition = _updateTransition2["default"];
    this.getAnimationPromises = _getAnimationPromises2["default"];
    this.getPageData = _getPageData2["default"];

    this.log = function () {}; // here so it can be used by plugins


    this.use = _plugins.use;
    this.unuse = _plugins.unuse;
    this.findPlugin = _plugins.findPlugin; // enable swup

    this.enable();
  }

  _createClass(Swup, [{
    key: 'enable',
    value: function enable() {
      var _this = this; // check for Promise support


      if (typeof Promise === 'undefined') {
        console.warn('Promise is not supported');
        return;
      } // add event listeners


      this.delegatedListeners.click = (0, _delegate2["default"])(document, this.options.linkSelector, 'click', this.linkClickHandler.bind(this));
      window.addEventListener('popstate', this.boundPopStateHandler); // initial save to cache

      var page = (0, _helpers.getDataFromHtml)(document.documentElement.outerHTML, this.options.containers);
      page.url = page.responseURL = (0, _helpers.getCurrentUrl)();

      if (this.options.cache) {
        this.cache.cacheUrl(page);
      } // mark swup blocks in html


      (0, _helpers.markSwupElements)(document.documentElement, this.options.containers); // mount plugins

      this.options.plugins.forEach(function (plugin) {
        _this.use(plugin);
      }); // modify initial history record

      window.history.replaceState(Object.assign({}, window.history.state, {
        url: window.location.href,
        random: Math.random(),
        source: 'swup'
      }), document.title, window.location.href); // trigger enabled event

      this.triggerEvent('enabled'); // add swup-enabled class to html tag

      document.documentElement.classList.add('swup-enabled'); // trigger page view event

      this.triggerEvent('pageView');
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this2 = this; // remove delegated listeners


      this.delegatedListeners.click.destroy(); // remove popstate listener

      window.removeEventListener('popstate', this.boundPopStateHandler); // empty cache

      this.cache.empty(); // unmount plugins

      this.options.plugins.forEach(function (plugin) {
        _this2.unuse(plugin);
      }); // remove swup data atributes from blocks

      (0, _utils.queryAll)('[data-swup]').forEach(function (element) {
        element.removeAttribute('data-swup');
      }); // remove handlers

      this.off(); // trigger disable event

      this.triggerEvent('disabled'); // remove swup-enabled class from html tag

      document.documentElement.classList.remove('swup-enabled');
    }
  }, {
    key: 'linkClickHandler',
    value: function linkClickHandler(event) {
      // no control key pressed
      if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
        // index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
        if (event.button === 0) {
          this.triggerEvent('clickLink', event);
          event.preventDefault();
          var link = new _helpers.Link(event.delegateTarget);

          if (link.getAddress() == (0, _helpers.getCurrentUrl)() || link.getAddress() == '') {
            // link to the same URL
            if (link.getHash() != '') {
              // link to the same URL with hash
              this.triggerEvent('samePageWithHash', event);
              var element = document.querySelector(link.getHash());

              if (element != null) {
                history.replaceState({
                  url: link.getAddress() + link.getHash(),
                  random: Math.random(),
                  source: 'swup'
                }, document.title, link.getAddress() + link.getHash());
              } else {
                // referenced element not found
                console.warn('Element for offset not found (' + link.getHash() + ')');
              }
            } else {
              // link to the same URL without hash
              this.triggerEvent('samePage', event);
            }
          } else {
            // link to different url
            if (link.getHash() != '') {
              this.scrollToElement = link.getHash();
            } // get custom transition from data


            var customTransition = event.delegateTarget.getAttribute('data-swup-transition'); // load page

            this.loadPage({
              url: link.getAddress(),
              customTransition: customTransition
            }, false);
          }
        }
      } else {
        // open in new tab (do nothing)
        this.triggerEvent('openPageInNewTab', event);
      }
    }
  }, {
    key: 'popStateHandler',
    value: function popStateHandler(event) {
      if (this.options.skipPopStateHandling(event)) return;
      var link = new _helpers.Link(event.state ? event.state.url : window.location.pathname);

      if (link.getHash() !== '') {
        this.scrollToElement = link.getHash();
      } else {
        event.preventDefault();
      }

      this.triggerEvent('popState', event);
      this.loadPage({
        url: link.getAddress()
      }, event);
    }
  }]);

  return Swup;
}();

exports["default"] = Swup;

},{"./helpers":52,"./modules/Cache":56,"./modules/getAnimationPromises":57,"./modules/getPageData":58,"./modules/loadPage":59,"./modules/off":60,"./modules/on":61,"./modules/plugins":62,"./modules/renderPage":63,"./modules/triggerEvent":64,"./modules/updateTransition":65,"./utils":66,"delegate":68}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Cache = exports.Cache = function () {
  function Cache() {
    _classCallCheck(this, Cache);

    this.pages = {};
    this.last = null;
  }

  _createClass(Cache, [{
    key: 'cacheUrl',
    value: function cacheUrl(page) {
      if (page.url in this.pages === false) {
        this.pages[page.url] = page;
      }

      this.last = this.pages[page.url];
      this.swup.log('Cache (' + Object.keys(this.pages).length + ')', this.pages);
    }
  }, {
    key: 'getPage',
    value: function getPage(url) {
      return this.pages[url];
    }
  }, {
    key: 'getCurrentPage',
    value: function getCurrentPage() {
      return this.getPage(window.location.pathname + window.location.search);
    }
  }, {
    key: 'exists',
    value: function exists(url) {
      return url in this.pages;
    }
  }, {
    key: 'empty',
    value: function empty() {
      this.pages = {};
      this.last = null;
      this.swup.log('Cache cleared');
    }
  }, {
    key: 'remove',
    value: function remove(url) {
      delete this.pages[url];
    }
  }]);

  return Cache;
}();

exports["default"] = Cache;

},{}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _helpers = require('../helpers');

var getAnimationPromises = function getAnimationPromises() {
  var promises = [];
  var animatedElements = (0, _utils.queryAll)(this.options.animationSelector);
  animatedElements.forEach(function (element) {
    var promise = new Promise(function (resolve) {
      element.addEventListener((0, _helpers.transitionEnd)(), function (event) {
        if (element == event.target) {
          resolve();
        }
      });
    });
    promises.push(promise);
  });
  return promises;
};

exports["default"] = getAnimationPromises;

},{"../helpers":52,"../utils":66}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

var getPageData = function getPageData(request) {
  // this method can be replaced in case other content than html is expected to be received from server
  // this function should always return {title, pageClass, originalContent, blocks, responseURL}
  // in case page has invalid structure - return null
  var html = request.responseText;
  var pageObject = (0, _helpers.getDataFromHtml)(html, this.options.containers);

  if (pageObject) {
    pageObject.responseURL = request.responseURL ? request.responseURL : window.location.href;
  } else {
    console.warn('Received page is invalid.');
    return null;
  }

  return pageObject;
};

exports["default"] = getPageData;

},{"../helpers":52}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _helpers = require('../helpers');

var loadPage = function loadPage(data, popstate) {
  var _this = this; // create array for storing animation promises


  var animationPromises = [],
      xhrPromise = void 0;

  var animateOut = function animateOut() {
    _this.triggerEvent('animationOutStart'); // handle classes


    document.documentElement.classList.add('is-changing');
    document.documentElement.classList.add('is-leaving');
    document.documentElement.classList.add('is-animating');

    if (popstate) {
      document.documentElement.classList.add('is-popstate');
    }

    document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.url)); // animation promise stuff

    animationPromises = _this.getAnimationPromises('out');
    Promise.all(animationPromises).then(function () {
      _this.triggerEvent('animationOutDone');
    }); // create history record if this is not a popstate call

    if (!popstate) {
      // create pop element with or without anchor
      var state = void 0;

      if (_this.scrollToElement != null) {
        state = data.url + _this.scrollToElement;
      } else {
        state = data.url;
      }

      (0, _helpers.createHistoryRecord)(state);
    }
  };

  this.triggerEvent('transitionStart', popstate); // set transition object

  if (data.customTransition != null) {
    this.updateTransition(window.location.pathname, data.url, data.customTransition);
    document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.customTransition));
  } else {
    this.updateTransition(window.location.pathname, data.url);
  } // start/skip animation


  if (!popstate || this.options.animateHistoryBrowsing) {
    animateOut();
  } else {
    this.triggerEvent('animationSkipped');
  } // start/skip loading of page


  if (this.cache.exists(data.url)) {
    xhrPromise = new Promise(function (resolve) {
      resolve();
    });
    this.triggerEvent('pageRetrievedFromCache');
  } else {
    if (!this.preloadPromise || this.preloadPromise.route != data.url) {
      xhrPromise = new Promise(function (resolve, reject) {
        (0, _helpers.fetch)(_extends({}, data, {
          headers: _this.options.requestHeaders
        }), function (response) {
          if (response.status === 500) {
            _this.triggerEvent('serverError');

            reject(data.url);
            return;
          } else {
            // get json data
            var page = _this.getPageData(response);

            if (page != null) {
              page.url = data.url;
            } else {
              reject(data.url);
              return;
            } // render page


            _this.cache.cacheUrl(page);

            _this.triggerEvent('pageLoaded');
          }

          resolve();
        });
      });
    } else {
      xhrPromise = this.preloadPromise;
    }
  } // when everything is ready, handle the outcome


  Promise.all(animationPromises.concat([xhrPromise])).then(function () {
    // render page
    _this.renderPage(_this.cache.getPage(data.url), popstate);

    _this.preloadPromise = null;
  })["catch"](function (errorUrl) {
    // rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
    _this.options.skipPopStateHandling = function () {
      window.location = errorUrl;
      return true;
    }; // go back to the actual page were still at


    window.history.go(-1);
  });
};

exports["default"] = loadPage;

},{"../helpers":52}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var off = function off(event, handler) {
  var _this = this;

  if (event != null) {
    if (handler != null) {
      if (this._handlers[event] && this._handlers[event].filter(function (savedHandler) {
        return savedHandler === handler;
      }).length) {
        var toRemove = this._handlers[event].filter(function (savedHandler) {
          return savedHandler === handler;
        })[0];

        var index = this._handlers[event].indexOf(toRemove);

        if (index > -1) {
          this._handlers[event].splice(index, 1);
        }
      } else {
        console.warn("Handler for event '" + event + "' no found.");
      }
    } else {
      this._handlers[event] = [];
    }
  } else {
    Object.keys(this._handlers).forEach(function (keys) {
      _this._handlers[keys] = [];
    });
  }
};

exports["default"] = off;

},{}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var on = function on(event, handler) {
  if (this._handlers[event]) {
    this._handlers[event].push(handler);
  } else {
    console.warn("Unsupported event " + event + ".");
  }
};

exports["default"] = on;

},{}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var use = exports.use = function use(plugin) {
  if (!plugin.isSwupPlugin) {
    console.warn('Not swup plugin instance ' + plugin + '.');
    return;
  }

  this.plugins.push(plugin);
  plugin.swup = this;

  if (typeof plugin._beforeMount === 'function') {
    plugin._beforeMount();
  }

  plugin.mount();
  return this.plugins;
};

var unuse = exports.unuse = function unuse(plugin) {
  var pluginReference = void 0;

  if (typeof plugin === 'string') {
    pluginReference = this.plugins.find(function (p) {
      return plugin === p.name;
    });
  } else {
    pluginReference = plugin;
  }

  if (!pluginReference) {
    console.warn('No such plugin.');
    return;
  }

  pluginReference.unmount();

  if (typeof pluginReference._afterUnmount === 'function') {
    pluginReference._afterUnmount();
  }

  var index = this.plugins.indexOf(pluginReference);
  this.plugins.splice(index, 1);
  return this.plugins;
};

var findPlugin = exports.findPlugin = function findPlugin(pluginName) {
  return this.plugins.find(function (p) {
    return pluginName === p.name;
  });
};

},{}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _utils = require('../utils');

var _helpers = require('../helpers');

var renderPage = function renderPage(page, popstate) {
  var _this = this;

  document.documentElement.classList.remove('is-leaving'); // replace state in case the url was redirected

  var link = new _helpers.Link(page.responseURL);

  if (window.location.pathname !== link.getPath()) {
    window.history.replaceState({
      url: link.getPath(),
      random: Math.random(),
      source: 'swup'
    }, document.title, link.getPath()); // save new record for redirected url

    this.cache.cacheUrl(_extends({}, page, {
      url: link.getPath()
    }));
  } // only add for non-popstate transitions


  if (!popstate || this.options.animateHistoryBrowsing) {
    document.documentElement.classList.add('is-rendering');
  }

  this.triggerEvent('willReplaceContent', popstate); // replace blocks

  for (var i = 0; i < page.blocks.length; i++) {
    document.body.querySelector('[data-swup="' + i + '"]').outerHTML = page.blocks[i];
  } // set title


  document.title = page.title;
  this.triggerEvent('contentReplaced', popstate);
  this.triggerEvent('pageView', popstate); // empty cache if it's disabled (because pages could be preloaded and stuff)

  if (!this.options.cache) {
    this.cache.empty();
  } // start animation IN


  setTimeout(function () {
    if (!popstate || _this.options.animateHistoryBrowsing) {
      _this.triggerEvent('animationInStart');

      document.documentElement.classList.remove('is-animating');
    }
  }, 10); // handle end of animation

  if (!popstate || this.options.animateHistoryBrowsing) {
    var animationPromises = this.getAnimationPromises('in');
    Promise.all(animationPromises).then(function () {
      _this.triggerEvent('animationInDone');

      _this.triggerEvent('transitionEnd', popstate); // remove "to-{page}" classes


      document.documentElement.className.split(' ').forEach(function (classItem) {
        if (new RegExp('^to-').test(classItem) || classItem === 'is-changing' || classItem === 'is-rendering' || classItem === 'is-popstate') {
          document.documentElement.classList.remove(classItem);
        }
      });
    });
  } else {
    this.triggerEvent('transitionEnd', popstate);
  } // reset scroll-to element


  this.scrollToElement = null;
};

exports["default"] = renderPage;

},{"../helpers":52,"../utils":66}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var triggerEvent = function triggerEvent(eventName, originalEvent) {
  // call saved handlers with "on" method and pass originalEvent object if available
  this._handlers[eventName].forEach(function (handler) {
    try {
      handler(originalEvent);
    } catch (error) {
      console.error(error);
    }
  }); // trigger event on document with prefix "swup:"


  var event = new CustomEvent('swup:' + eventName, {
    detail: eventName
  });
  document.dispatchEvent(event);
};

exports["default"] = triggerEvent;

},{}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var updateTransition = function updateTransition(from, to, custom) {
  // transition routes
  this.transition = {
    from: from,
    to: to,
    custom: custom
  };
};

exports["default"] = updateTransition;

},{}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var query = exports.query = function query(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  if (typeof selector !== 'string') {
    return selector;
  }

  return context.querySelector(selector);
};

var queryAll = exports.queryAll = function queryAll(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  if (typeof selector !== 'string') {
    return selector;
  }

  return Array.prototype.slice.call(context.querySelectorAll(selector));
};

},{}],67:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],68:[function(require,module,exports){
"use strict";

var closest = require('./closest');
/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */


function delegate(element, selector, type, callback, useCapture) {
  var listenerFn = listener.apply(this, arguments);
  element.addEventListener(type, listenerFn, useCapture);
  return {
    destroy: function destroy() {
      element.removeEventListener(type, listenerFn, useCapture);
    }
  };
}
/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */


function listener(element, selector, type, callback) {
  return function (e) {
    e.delegateTarget = closest(e.target, selector);

    if (e.delegateTarget) {
      callback.call(element, e);
    }
  };
}

module.exports = delegate;

},{"./closest":67}],69:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

!function (n, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).LazyLoad = t();
}(void 0, function () {
  "use strict";

  function n() {
    return n = Object.assign || function (n) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];

        for (var i in e) {
          Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
        }
      }

      return n;
    }, n.apply(this, arguments);
  }

  var t = "undefined" != typeof window,
      e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
      i = t && "IntersectionObserver" in window,
      o = t && "classList" in document.createElement("p"),
      a = t && window.devicePixelRatio > 1,
      r = {
    elements_selector: ".lazy",
    container: e || t ? document : null,
    threshold: 300,
    thresholds: null,
    data_src: "src",
    data_srcset: "srcset",
    data_sizes: "sizes",
    data_bg: "bg",
    data_bg_hidpi: "bg-hidpi",
    data_bg_multi: "bg-multi",
    data_bg_multi_hidpi: "bg-multi-hidpi",
    data_poster: "poster",
    class_applied: "applied",
    class_loading: "loading",
    class_loaded: "loaded",
    class_error: "error",
    class_entered: "entered",
    class_exited: "exited",
    unobserve_completed: !0,
    unobserve_entered: !1,
    cancel_on_exit: !0,
    callback_enter: null,
    callback_exit: null,
    callback_applied: null,
    callback_loading: null,
    callback_loaded: null,
    callback_error: null,
    callback_finish: null,
    callback_cancel: null,
    use_native: !1
  },
      c = function c(t) {
    return n({}, r, t);
  },
      u = function u(n, t) {
    var e,
        i = "LazyLoad::Initialized",
        o = new n(t);

    try {
      e = new CustomEvent(i, {
        detail: {
          instance: o
        }
      });
    } catch (n) {
      (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
        instance: o
      });
    }

    window.dispatchEvent(e);
  },
      l = "src",
      s = "srcset",
      f = "sizes",
      d = "poster",
      _ = "llOriginalAttrs",
      g = "loading",
      v = "loaded",
      b = "applied",
      p = "error",
      h = "native",
      m = "data-",
      E = "ll-status",
      I = function I(n, t) {
    return n.getAttribute(m + t);
  },
      y = function y(n) {
    return I(n, E);
  },
      A = function A(n, t) {
    return function (n, t, e) {
      var i = "data-ll-status";
      null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
    }(n, 0, t);
  },
      k = function k(n) {
    return A(n, null);
  },
      L = function L(n) {
    return null === y(n);
  },
      w = function w(n) {
    return y(n) === h;
  },
      x = [g, v, b, p],
      O = function O(n, t, e, i) {
    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
  },
      N = function N(n, t) {
    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
  },
      C = function C(n, t) {
    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
  },
      M = function M(n) {
    return n.llTempImage;
  },
      z = function z(n, t) {
    if (t) {
      var e = t._observer;
      e && e.unobserve(n);
    }
  },
      R = function R(n, t) {
    n && (n.loadingCount += t);
  },
      T = function T(n, t) {
    n && (n.toLoadCount = t);
  },
      G = function G(n) {
    for (var t, e = [], i = 0; t = n.children[i]; i += 1) {
      "SOURCE" === t.tagName && e.push(t);
    }

    return e;
  },
      D = function D(n, t) {
    var e = n.parentNode;
    e && "PICTURE" === e.tagName && G(e).forEach(t);
  },
      V = function V(n, t) {
    G(n).forEach(t);
  },
      F = [l],
      j = [l, d],
      P = [l, s, f],
      S = function S(n) {
    return !!n[_];
  },
      U = function U(n) {
    return n[_];
  },
      $ = function $(n) {
    return delete n[_];
  },
      q = function q(n, t) {
    if (!S(n)) {
      var e = {};
      t.forEach(function (t) {
        e[t] = n.getAttribute(t);
      }), n[_] = e;
    }
  },
      H = function H(n, t) {
    if (S(n)) {
      var e = U(n);
      t.forEach(function (t) {
        !function (n, t, e) {
          e ? n.setAttribute(t, e) : n.removeAttribute(t);
        }(n, t, e[t]);
      });
    }
  },
      B = function B(n, t, e) {
    N(n, t.class_loading), A(n, g), e && (R(e, 1), O(t.callback_loading, n, e));
  },
      J = function J(n, t, e) {
    e && n.setAttribute(t, e);
  },
      K = function K(n, t) {
    J(n, f, I(n, t.data_sizes)), J(n, s, I(n, t.data_srcset)), J(n, l, I(n, t.data_src));
  },
      Q = {
    IMG: function IMG(n, t) {
      D(n, function (n) {
        q(n, P), K(n, t);
      }), q(n, P), K(n, t);
    },
    IFRAME: function IFRAME(n, t) {
      q(n, F), J(n, l, I(n, t.data_src));
    },
    VIDEO: function VIDEO(n, t) {
      V(n, function (n) {
        q(n, F), J(n, l, I(n, t.data_src));
      }), q(n, j), J(n, d, I(n, t.data_poster)), J(n, l, I(n, t.data_src)), n.load();
    }
  },
      W = ["IMG", "IFRAME", "VIDEO"],
      X = function X(n, t) {
    !t || function (n) {
      return n.loadingCount > 0;
    }(t) || function (n) {
      return n.toLoadCount > 0;
    }(t) || O(n.callback_finish, t);
  },
      Y = function Y(n, t, e) {
    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
  },
      Z = function Z(n, t, e) {
    n.removeEventListener(t, e);
  },
      nn = function nn(n) {
    return !!n.llEvLisnrs;
  },
      tn = function tn(n) {
    if (nn(n)) {
      var t = n.llEvLisnrs;

      for (var e in t) {
        var i = t[e];
        Z(n, e, i);
      }

      delete n.llEvLisnrs;
    }
  },
      en = function en(n, t, e) {
    !function (n) {
      delete n.llTempImage;
    }(n), R(e, -1), function (n) {
      n && (n.toLoadCount -= 1);
    }(e), C(n, t.class_loading), t.unobserve_completed && z(n, e);
  },
      on = function on(n, t, e) {
    var i = M(n) || n;
    nn(i) || function (n, t, e) {
      nn(n) || (n.llEvLisnrs = {});
      var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
      Y(n, i, t), Y(n, "error", e);
    }(i, function (o) {
      !function (n, t, e, i) {
        var o = w(t);
        en(t, e, i), N(t, e.class_loaded), A(t, v), O(e.callback_loaded, t, i), o || X(e, i);
      }(0, n, t, e), tn(i);
    }, function (o) {
      !function (n, t, e, i) {
        var o = w(t);
        en(t, e, i), N(t, e.class_error), A(t, p), O(e.callback_error, t, i), o || X(e, i);
      }(0, n, t, e), tn(i);
    });
  },
      an = function an(n, t, e) {
    !function (n) {
      n.llTempImage = document.createElement("IMG");
    }(n), on(n, t, e), function (n) {
      S(n) || (n[_] = {
        backgroundImage: n.style.backgroundImage
      });
    }(n), function (n, t, e) {
      var i = I(n, t.data_bg),
          o = I(n, t.data_bg_hidpi),
          r = a && o ? o : i;
      r && (n.style.backgroundImage = 'url("'.concat(r, '")'), M(n).setAttribute(l, r), B(n, t, e));
    }(n, t, e), function (n, t, e) {
      var i = I(n, t.data_bg_multi),
          o = I(n, t.data_bg_multi_hidpi),
          r = a && o ? o : i;
      r && (n.style.backgroundImage = r, function (n, t, e) {
        N(n, t.class_applied), A(n, b), e && (t.unobserve_completed && z(n, t), O(t.callback_applied, n, e));
      }(n, t, e));
    }(n, t, e);
  },
      rn = function rn(n, t, e) {
    !function (n) {
      return W.indexOf(n.tagName) > -1;
    }(n) ? an(n, t, e) : function (n, t, e) {
      on(n, t, e), function (n, t, e) {
        var i = Q[n.tagName];
        i && (i(n, t), B(n, t, e));
      }(n, t, e);
    }(n, t, e);
  },
      cn = function cn(n) {
    n.removeAttribute(l), n.removeAttribute(s), n.removeAttribute(f);
  },
      un = function un(n) {
    D(n, function (n) {
      H(n, P);
    }), H(n, P);
  },
      ln = {
    IMG: un,
    IFRAME: function IFRAME(n) {
      H(n, F);
    },
    VIDEO: function VIDEO(n) {
      V(n, function (n) {
        H(n, F);
      }), H(n, j), n.load();
    }
  },
      sn = function sn(n, t) {
    (function (n) {
      var t = ln[n.tagName];
      t ? t(n) : function (n) {
        if (S(n)) {
          var t = U(n);
          n.style.backgroundImage = t.backgroundImage;
        }
      }(n);
    })(n), function (n, t) {
      L(n) || w(n) || (C(n, t.class_entered), C(n, t.class_exited), C(n, t.class_applied), C(n, t.class_loading), C(n, t.class_loaded), C(n, t.class_error));
    }(n, t), k(n), $(n);
  },
      fn = ["IMG", "IFRAME", "VIDEO"],
      dn = function dn(n) {
    return n.use_native && "loading" in HTMLImageElement.prototype;
  },
      _n = function _n(n, t, e) {
    n.forEach(function (n) {
      return function (n) {
        return n.isIntersecting || n.intersectionRatio > 0;
      }(n) ? function (n, t, e, i) {
        var o = function (n) {
          return x.indexOf(y(n)) >= 0;
        }(n);

        A(n, "entered"), N(n, e.class_entered), C(n, e.class_exited), function (n, t, e) {
          t.unobserve_entered && z(n, e);
        }(n, e, i), O(e.callback_enter, n, t, i), o || rn(n, e, i);
      }(n.target, n, t, e) : function (n, t, e, i) {
        L(n) || (N(n, e.class_exited), function (n, t, e, i) {
          e.cancel_on_exit && function (n) {
            return y(n) === g;
          }(n) && "IMG" === n.tagName && (tn(n), function (n) {
            D(n, function (n) {
              cn(n);
            }), cn(n);
          }(n), un(n), C(n, e.class_loading), R(i, -1), k(n), O(e.callback_cancel, n, t, i));
        }(n, t, e, i), O(e.callback_exit, n, t, i));
      }(n.target, n, t, e);
    });
  },
      gn = function gn(n) {
    return Array.prototype.slice.call(n);
  },
      vn = function vn(n) {
    return n.container.querySelectorAll(n.elements_selector);
  },
      bn = function bn(n) {
    return function (n) {
      return y(n) === p;
    }(n);
  },
      pn = function pn(n, t) {
    return function (n) {
      return gn(n).filter(L);
    }(n || vn(t));
  },
      hn = function hn(n, e) {
    var o = c(n);
    this._settings = o, this.loadingCount = 0, function (n, t) {
      i && !dn(n) && (t._observer = new IntersectionObserver(function (e) {
        _n(e, n, t);
      }, function (n) {
        return {
          root: n.container === document ? null : n.container,
          rootMargin: n.thresholds || n.threshold + "px"
        };
      }(n)));
    }(o, this), function (n, e) {
      t && window.addEventListener("online", function () {
        !function (n, t) {
          var e;
          (e = vn(n), gn(e).filter(bn)).forEach(function (t) {
            C(t, n.class_error), k(t);
          }), t.update();
        }(n, e);
      });
    }(o, this), this.update(e);
  };

  return hn.prototype = {
    update: function update(n) {
      var t,
          o,
          a = this._settings,
          r = pn(n, a);
      T(this, r.length), !e && i ? dn(a) ? function (n, t, e) {
        n.forEach(function (n) {
          -1 !== fn.indexOf(n.tagName) && function (n, t, e) {
            n.setAttribute("loading", "lazy"), on(n, t, e), function (n, t) {
              var e = Q[n.tagName];
              e && e(n, t);
            }(n, t), A(n, h);
          }(n, t, e);
        }), T(e, 0);
      }(r, a, this) : (o = r, function (n) {
        n.disconnect();
      }(t = this._observer), function (n, t) {
        t.forEach(function (t) {
          n.observe(t);
        });
      }(t, o)) : this.loadAll(r);
    },
    destroy: function destroy() {
      this._observer && this._observer.disconnect(), vn(this._settings).forEach(function (n) {
        $(n);
      }), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
    },
    loadAll: function loadAll(n) {
      var t = this,
          e = this._settings;
      pn(n, e).forEach(function (n) {
        z(n, t), rn(n, e, t);
      });
    },
    restoreAll: function restoreAll() {
      var n = this._settings;
      vn(n).forEach(function (t) {
        sn(t, n);
      });
    }
  }, hn.load = function (n, t) {
    var e = c(t);
    rn(n, e);
  }, hn.resetStatus = function (n) {
    k(n);
  }, t && function (n, t) {
    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) {
      u(n, e);
    } else u(n, t);
  }(hn, window.lazyLoadOptions), hn;
});

},{"@babel/runtime/helpers/interopRequireDefault":33,"@babel/runtime/helpers/typeof":36}]},{},[22]);
