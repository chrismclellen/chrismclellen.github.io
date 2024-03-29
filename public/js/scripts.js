
  !(function () {
    setTimeout(function () {
      $(".pre-loader")
        .css({ opacity: "0" })
        .one(
          "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
          function () {
            $(this).hide();
          }
        );
    }, 1000);
  })();

  if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
  +(function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (
      (b[0] < 2 && b[1] < 9) ||
      (1 == b[0] && 9 == b[1] && b[2] < 1) ||
      b[0] > 2
    )
      throw new Error(
        "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3"
      );
  })(jQuery),
    +(function (a) {
      "use strict";
      function b() {
        var a = document.createElement("bootstrap"),
          b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend",
          };
        for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
        return !1;
      }
      (a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
          d = this;
        a(this).one("bsTransitionEnd", function () {
          c = !0;
        });
        var e = function () {
          c || a(d).trigger(a.support.transition.end);
        };
        return setTimeout(e, b), this;
      }),
        a(function () {
          (a.support.transition = b()),
            a.support.transition &&
              (a.event.special.bsTransitionEnd = {
                bindType: a.support.transition.end,
                delegateType: a.support.transition.end,
                handle: function (b) {
                  return a(b.target).is(this)
                    ? b.handleObj.handler.apply(this, arguments)
                    : void 0;
                },
              });
        });
    })(jQuery),
    +(function (a) {
      "use strict";
      function b(b) {
        return this.each(function () {
          var c = a(this),
            e = c.data("bs.alert");
          e || c.data("bs.alert", (e = new d(this))),
            "string" == typeof b && e[b].call(c);
        });
      }
      var c = '[data-dismiss="alert"]',
        d = function (b) {
          a(b).on("click", c, this.close);
        };
      (d.VERSION = "3.3.6"),
        (d.TRANSITION_DURATION = 150),
        (d.prototype.close = function (b) {
          function c() {
            g.detach().trigger("closed.bs.alert").remove();
          }
          var e = a(this),
            f = e.attr("data-target");
          f ||
            ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
          var g = a(f);
          b && b.preventDefault(),
            g.length || (g = e.closest(".alert")),
            g.trigger((b = a.Event("close.bs.alert"))),
            b.isDefaultPrevented() ||
              (g.removeClass("in"),
              a.support.transition && g.hasClass("fade")
                ? g
                    .one("bsTransitionEnd", c)
                    .emulateTransitionEnd(d.TRANSITION_DURATION)
                : c());
        });
      var e = a.fn.alert;
      (a.fn.alert = b),
        (a.fn.alert.Constructor = d),
        (a.fn.alert.noConflict = function () {
          return (a.fn.alert = e), this;
        }),
        a(document).on("click.bs.alert.data-api", c, d.prototype.close);
    })(jQuery),
    +(function (a) {
      "use strict";
      function b(b) {
        return this.each(function () {
          var d = a(this),
            e = d.data("bs.button"),
            f = "object" == typeof b && b;
          e || d.data("bs.button", (e = new c(this, f))),
            "toggle" == b ? e.toggle() : b && e.setState(b);
        });
      }
      var c = function (b, d) {
        (this.$element = a(b)),
          (this.options = a.extend({}, c.DEFAULTS, d)),
          (this.isLoading = !1);
      };
      (c.VERSION = "3.3.6"),
        (c.DEFAULTS = { loadingText: "loading..." }),
        (c.prototype.setState = function (b) {
          var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
          (b += "Text"),
            null == f.resetText && d.data("resetText", d[e]()),
            setTimeout(
              a.proxy(function () {
                d[e](null == f[b] ? this.options[b] : f[b]),
                  "loadingText" == b
                    ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                    : this.isLoading &&
                      ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
              }, this),
              0
            );
        }),
        (c.prototype.toggle = function () {
          var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
          if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type")
              ? (c.prop("checked") && (a = !1),
                b.find(".active").removeClass("active"),
                this.$element.addClass("active"))
              : "checkbox" == c.prop("type") &&
                (c.prop("checked") !== this.$element.hasClass("active") &&
                  (a = !1),
                this.$element.toggleClass("active")),
              c.prop("checked", this.$element.hasClass("active")),
              a && c.trigger("change");
          } else
            this.$element.attr(
              "aria-pressed",
              !this.$element.hasClass("active")
            ),
              this.$element.toggleClass("active");
        });
      var d = a.fn.button;
      (a.fn.button = b),
        (a.fn.button.Constructor = c),
        (a.fn.button.noConflict = function () {
          return (a.fn.button = d), this;
        }),
        a(document)
          .on(
            "click.bs.button.data-api",
            '[data-toggle^="button"]',
            function (c) {
              var d = a(c.target);
              d.hasClass("btn") || (d = d.closest(".btn")),
                b.call(d, "toggle"),
                a(c.target).is('input[type="radio"]') ||
                  a(c.target).is('input[type="checkbox"]') ||
                  c.preventDefault();
            }
          )
          .on(
            "focus.bs.button.data-api blur.bs.button.data-api",
            '[data-toggle^="button"]',
            function (b) {
              a(b.target)
                .closest(".btn")
                .toggleClass("focus", /^focus(in)?$/.test(b.type));
            }
          );
    })(jQuery),
    +(function (a) {
      "use strict";
      function b(b) {
        return this.each(function () {
          var d = a(this),
            e = d.data("bs.carousel"),
            f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
            g = "string" == typeof b ? b : f.slide;
          e || d.data("bs.carousel", (e = new c(this, f))),
            "number" == typeof b
              ? e.to(b)
              : g
              ? e[g]()
              : f.interval && e.pause().cycle();
        });
      }
      var c = function (b, c) {
        (this.$element = a(b)),
          (this.$indicators = this.$element.find(".carousel-indicators")),
          (this.options = c),
          (this.paused = null),
          (this.sliding = null),
          (this.interval = null),
          (this.$active = null),
          (this.$items = null),
          this.options.keyboard &&
            this.$element.on(
              "keydown.bs.carousel",
              a.proxy(this.keydown, this)
            ),
          "hover" == this.options.pause &&
            !("ontouchstart" in document.documentElement) &&
            this.$element
              .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
              .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
      };
      (c.VERSION = "3.3.6"),
        (c.TRANSITION_DURATION = 600),
        (c.DEFAULTS = {
          interval: 5e3,
          pause: "hover",
          wrap: !0,
          keyboard: !0,
        }),
        (c.prototype.keydown = function (a) {
          if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
              case 37:
                this.prev();
                break;
              case 39:
                this.next();
                break;
              default:
                return;
            }
            a.preventDefault();
          }
        }),
        (c.prototype.cycle = function (b) {
          return (
            b || (this.paused = !1),
            this.interval && clearInterval(this.interval),
            this.options.interval &&
              !this.paused &&
              (this.interval = setInterval(
                a.proxy(this.next, this),
                this.options.interval
              )),
            this
          );
        }),
        (c.prototype.getItemIndex = function (a) {
          return (
            (this.$items = a.parent().children(".item")),
            this.$items.index(a || this.$active)
          );
        }),
        (c.prototype.getItemForDirection = function (a, b) {
          var c = this.getItemIndex(b),
            d =
              ("prev" == a && 0 === c) ||
              ("next" == a && c == this.$items.length - 1);
          if (d && !this.options.wrap) return b;
          var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
          return this.$items.eq(f);
        }),
        (c.prototype.to = function (a) {
          var b = this,
            c = this.getItemIndex(
              (this.$active = this.$element.find(".item.active"))
            );
          return a > this.$items.length - 1 || 0 > a
            ? void 0
            : this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                b.to(a);
              })
            : c == a
            ? this.pause().cycle()
            : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
        }),
        (c.prototype.pause = function (b) {
          return (
            b || (this.paused = !0),
            this.$element.find(".next, .prev").length &&
              a.support.transition &&
              (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
            (this.interval = clearInterval(this.interval)),
            this
          );
        }),
        (c.prototype.next = function () {
          return this.sliding ? void 0 : this.slide("next");
        }),
        (c.prototype.prev = function () {
          return this.sliding ? void 0 : this.slide("prev");
        }),
        (c.prototype.slide = function (b, d) {
          var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
          if (f.hasClass("active")) return (this.sliding = !1);
          var j = f[0],
            k = a.Event("slide.bs.carousel", {
              relatedTarget: j,
              direction: h,
            });
          if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
            if (
              ((this.sliding = !0), g && this.pause(), this.$indicators.length)
            ) {
              this.$indicators.find(".active").removeClass("active");
              var l = a(this.$indicators.children()[this.getItemIndex(f)]);
              l && l.addClass("active");
            }
            var m = a.Event("slid.bs.carousel", {
              relatedTarget: j,
              direction: h,
            });
            return (
              a.support.transition && this.$element.hasClass("slide")
                ? (f.addClass(b),
                  f[0].offsetWidth,
                  e.addClass(h),
                  f.addClass(h),
                  e
                    .one("bsTransitionEnd", function () {
                      f.removeClass([b, h].join(" ")).addClass("active"),
                        e.removeClass(["active", h].join(" ")),
                        (i.sliding = !1),
                        setTimeout(function () {
                          i.$element.trigger(m);
                        }, 0);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION))
                : (e.removeClass("active"),
                  f.addClass("active"),
                  (this.sliding = !1),
                  this.$element.trigger(m)),
              g && this.cycle(),
              this
            );
          }
        });
      var d = a.fn.carousel;
      (a.fn.carousel = b),
        (a.fn.carousel.Constructor = c),
        (a.fn.carousel.noConflict = function () {
          return (a.fn.carousel = d), this;
        });
      var e = function (c) {
        var d,
          e = a(this),
          f = a(
            e.attr("data-target") ||
              ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
          );
        if (f.hasClass("carousel")) {
          var g = a.extend({}, f.data(), e.data()),
            h = e.attr("data-slide-to");
          h && (g.interval = !1),
            b.call(f, g),
            h && f.data("bs.carousel").to(h),
            c.preventDefault();
        }
      };
      a(document)
        .on("click.bs.carousel.data-api", "[data-slide]", e)
        .on("click.bs.carousel.data-api", "[data-slide-to]", e),
        a(window).on("load", function () {
          a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data());
          });
        });
    })(jQuery),
    +(function (a) {
      "use strict";
      function b(b) {
        var c,
          d =
            b.attr("data-target") ||
            ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
        return a(d);
      }
      function c(b) {
        return this.each(function () {
          var c = a(this),
            e = c.data("bs.collapse"),
            f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
          !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
            e || c.data("bs.collapse", (e = new d(this, f))),
            "string" == typeof b && e[b]();
        });
      }
      var d = function (b, c) {
        (this.$element = a(b)),
          (this.options = a.extend({}, d.DEFAULTS, c)),
          (this.$trigger = a(
            '[data-toggle="collapse"][href="#' +
              b.id +
              '"],[data-toggle="collapse"][data-target="#' +
              b.id +
              '"]'
          )),
          (this.transitioning = null),
          this.options.parent
            ? (this.$parent = this.getParent())
            : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
          this.options.toggle && this.toggle();
      };
      (d.VERSION = "3.3.6"),
        (d.TRANSITION_DURATION = 350),
        (d.DEFAULTS = { toggle: !0 }),
        (d.prototype.dimension = function () {
          var a = this.$element.hasClass("width");
          return a ? "width" : "height";
        }),
        (d.prototype.show = function () {
          if (!this.transitioning && !this.$element.hasClass("in")) {
            var b,
              e =
                this.$parent &&
                this.$parent.children(".panel").children(".in, .collapsing");
            if (
              !(
                e &&
                e.length &&
                ((b = e.data("bs.collapse")), b && b.transitioning)
              )
            ) {
              var f = a.Event("show.bs.collapse");
              if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
                e &&
                  e.length &&
                  (c.call(e, "hide"), b || e.data("bs.collapse", null));
                var g = this.dimension();
                this.$element
                  .removeClass("collapse")
                  .addClass("collapsing")
                  [g](0)
                  .attr("aria-expanded", !0),
                  this.$trigger
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                  (this.transitioning = 1);
                var h = function () {
                  this.$element
                    .removeClass("collapsing")
                    .addClass("collapse in")
                    [g](""),
                    (this.transitioning = 0),
                    this.$element.trigger("shown.bs.collapse");
                };
                if (!a.support.transition) return h.call(this);
                var i = a.camelCase(["scroll", g].join("-"));
                this.$element
                  .one("bsTransitionEnd", a.proxy(h, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
                  [g](this.$element[0][i]);
              }
            }
          }
        }),
        (d.prototype.hide = function () {
          if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
              var c = this.dimension();
              this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element
                  .addClass("collapsing")
                  .removeClass("collapse in")
                  .attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                (this.transitioning = 1);
              var e = function () {
                (this.transitioning = 0),
                  this.$element
                    .removeClass("collapsing")
                    .addClass("collapse")
                    .trigger("hidden.bs.collapse");
              };
              return a.support.transition
                ? void this.$element[c](0)
                    .one("bsTransitionEnd", a.proxy(e, this))
                    .emulateTransitionEnd(d.TRANSITION_DURATION)
                : e.call(this);
            }
          }
        }),
        (d.prototype.toggle = function () {
          this[this.$element.hasClass("in") ? "hide" : "show"]();
        }),
        (d.prototype.getParent = function () {
          return a(this.options.parent)
            .find(
              '[data-toggle="collapse"][data-parent="' +
                this.options.parent +
                '"]'
            )
            .each(
              a.proxy(function (c, d) {
                var e = a(d);
                this.addAriaAndCollapsedClass(b(e), e);
              }, this)
            )
            .end();
        }),
        (d.prototype.addAriaAndCollapsedClass = function (a, b) {
          var c = a.hasClass("in");
          a.attr("aria-expanded", c),
            b.toggleClass("collapsed", !c).attr("aria-expanded", c);
        });
      var e = a.fn.collapse;
      (a.fn.collapse = c),
        (a.fn.collapse.Constructor = d),
        (a.fn.collapse.noConflict = function () {
          return (a.fn.collapse = e), this;
        }),
        a(document).on(
          "click.bs.collapse.data-api",
          '[data-toggle="collapse"]',
          function (d) {
            var e = a(this);
            e.attr("data-target") || d.preventDefault();
            var f = b(e),
              g = f.data("bs.collapse"),
              h = g ? "toggle" : e.data();
            c.call(f, h);
          }
        );
    })(jQuery),
    +(function (a) {
      "use strict";
      function b(b) {
        var c = b.attr("data-target");
        c ||
          ((c = b.attr("href")),
          (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
        var d = c && a(c);
        return d && d.length ? d : b.parent();
      }
      function c(c) {
        (c && 3 === c.which) ||
          (a(e).remove(),
          a(f).each(function () {
            var d = a(this),
              e = b(d),
              f = { relatedTarget: this };
            e.hasClass("open") &&
              ((c &&
                "click" == c.type &&
                /input|textarea/i.test(c.target.tagName) &&
                a.contains(e[0], c.target)) ||
                (e.trigger((c = a.Event("hide.bs.dropdown", f))),
                c.isDefaultPrevented() ||
                  (d.attr("aria-expanded", "false"),
                  e
                    .removeClass("open")
                    .trigger(a.Event("hidden.bs.dropdown", f)))));
          }));
      }
      function d(b) {
        return this.each(function () {
          var c = a(this),
            d = c.data("bs.dropdown");
          d || c.data("bs.dropdown", (d = new g(this))),
            "string" == typeof b && d[b].call(c);
        });
      }
      var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function (b) {
          a(b).on("click.bs.dropdown", this.toggle);
        };
      (g.VERSION = "3.3.6"),
        (g.prototype.toggle = function (d) {
          var e = a(this);
          if (!e.is(".disabled, :disabled")) {
            var f = b(e),
              g = f.hasClass("open");
            if ((c(), !g)) {
              "ontouchstart" in document.documentElement &&
                !f.closest(".navbar-nav").length &&
                a(document.createElement("div"))
                  .addClass("dropdown-backdrop")
                  .insertAfter(a(this))
                  .on("click", c);
              var h = { relatedTarget: this };
              if (
                (f.trigger((d = a.Event("show.bs.dropdown", h))),
                d.isDefaultPrevented())
              )
                return;
              e.trigger("focus").attr("aria-expanded", "true"),
                f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
            }
            return !1;
          }
        }),
        (g.prototype.keydown = function (c) {
          if (
            /(38|40|27|32)/.test(c.which) &&
            !/input|textarea/i.test(c.target.tagName)
          ) {
            var d = a(this);
            if (
              (c.preventDefault(),
              c.stopPropagation(),
              !d.is(".disabled, :disabled"))
            ) {
              var e = b(d),
                g = e.hasClass("open");
              if ((!g && 27 != c.which) || (g && 27 == c.which))
                return (
                  27 == c.which && e.find(f).trigger("focus"),
                  d.trigger("click")
                );
              var h = " li:not(.disabled):visible a",
                i = e.find(".dropdown-menu" + h);
              if (i.length) {
                var j = i.index(c.target);
                38 == c.which && j > 0 && j--,
                  40 == c.which && j < i.length - 1 && j++,
                  ~j || (j = 0),
                  i.eq(j).trigger("focus");
              }
            }
          }
        });
      var h = a.fn.dropdown;
      (a.fn.dropdown = d),
        (a.fn.dropdown.Constructor = g),
        (a.fn.dropdown.noConflict = function () {
          return (a.fn.dropdown = h), this;
        }),
        a(document)
          .on("click.bs.dropdown.data-api", c)
          .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
            a.stopPropagation();
          })
          .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
          .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
          .on(
            "keydown.bs.dropdown.data-api",
            ".dropdown-menu",
            g.prototype.keydown
          );
    })(jQuery),
    +(function (a) {
      "use strict";
      function b(b, d) {
        return this.each(function () {
          var e = a(this),
            f = e.data("bs.modal"),
            g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
          f || e.data("bs.modal", (f = new c(this, g))),
            "string" == typeof b ? f[b](d) : g.show && f.show(d);
        });
      }
      var c = function (b, c) {
        (this.options = c),
          (this.$body = a(document.body)),
          (this.$element = a(b)),
          (this.$dialog = this.$element.find(".modal-dialog")),
          (this.$backdrop = null),
          (this.isShown = null),
          (this.originalBodyPad = null),
          (this.scrollbarWidth = 0),
          (this.ignoreBackdropClick = !1),
          this.options.remote &&
            this.$element.find(".modal-content").load(
              this.options.remote,
              a.proxy(function () {
                this.$element.trigger("loaded.bs.modal");
              }, this)
            );
      };
      (c.VERSION = "3.3.6"),
        (c.TRANSITION_DURATION = 300),
        (c.BACKDROP_TRANSITION_DURATION = 150),
        (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
        (c.prototype.toggle = function (a) {
          return this.isShown ? this.hide() : this.show(a);
        }),
        (c.prototype.show = function (b) {
          var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });
          this.$element.trigger(e),
            this.isShown ||
              e.isDefaultPrevented() ||
              ((this.isShown = !0),
              this.checkScrollbar(),
              this.setScrollbar(),
              this.$body.addClass("modal-open"),
              this.escape(),
              this.resize(),
              this.$element.on(
                "click.dismiss.bs.modal",
                '[data-dismiss="modal"]',
                a.proxy(this.hide, this)
              ),
              this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                  a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
                });
              }),
              this.backdrop(function () {
                var e = a.support.transition && d.$element.hasClass("fade");
                d.$element.parent().length || d.$element.appendTo(d.$body),
                  d.$element.show().scrollTop(0),
                  d.adjustDialog(),
                  e && d.$element[0].offsetWidth,
                  d.$element.addClass("in"),
                  d.enforceFocus();
                var f = a.Event("shown.bs.modal", { relatedTarget: b });
                e
                  ? d.$dialog
                      .one("bsTransitionEnd", function () {
                        d.$element.trigger("focus").trigger(f);
                      })
                      .emulateTransitionEnd(c.TRANSITION_DURATION)
                  : d.$element.trigger("focus").trigger(f);
              }));
        }),
        (c.prototype.hide = function (b) {
          b && b.preventDefault(),
            (b = a.Event("hide.bs.modal")),
            this.$element.trigger(b),
            this.isShown &&
              !b.isDefaultPrevented() &&
              ((this.isShown = !1),
              this.escape(),
              this.resize(),
              a(document).off("focusin.bs.modal"),
              this.$element
                .removeClass("in")
                .off("click.dismiss.bs.modal")
                .off("mouseup.dismiss.bs.modal"),
              this.$dialog.off("mousedown.dismiss.bs.modal"),
              a.support.transition && this.$element.hasClass("fade")
                ? this.$element
                    .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : this.hideModal());
        }),
        (c.prototype.enforceFocus = function () {
          a(document)
            .off("focusin.bs.modal")
            .on(
              "focusin.bs.modal",
              a.proxy(function (a) {
                this.$element[0] === a.target ||
                  this.$element.has(a.target).length ||
                  this.$element.trigger("focus");
              }, this)
            );
        }),
        (c.prototype.escape = function () {
          this.isShown && this.options.keyboard
            ? this.$element.on(
                "keydown.dismiss.bs.modal",
                a.proxy(function (a) {
                  27 == a.which && this.hide();
                }, this)
              )
            : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
        }),
        (c.prototype.resize = function () {
          this.isShown
            ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
            : a(window).off("resize.bs.modal");
        }),
        (c.prototype.hideModal = function () {
          var a = this;
          this.$element.hide(),
            this.backdrop(function () {
              a.$body.removeClass("modal-open"),
                a.resetAdjustments(),
                a.resetScrollbar(),
                a.$element.trigger("hidden.bs.modal");
            });
        }),
        (c.prototype.removeBackdrop = function () {
          this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
        }),
        (c.prototype.backdrop = function (b) {
          var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
          if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (
              ((this.$backdrop = a(document.createElement("div"))
                .addClass("modal-backdrop " + e)
                .appendTo(this.$body)),
              this.$element.on(
                "click.dismiss.bs.modal",
                a.proxy(function (a) {
                  return this.ignoreBackdropClick
                    ? void (this.ignoreBackdropClick = !1)
                    : void (
                        a.target === a.currentTarget &&
                        ("static" == this.options.backdrop
                          ? this.$element[0].focus()
                          : this.hide())
                      );
                }, this)
              ),
              f && this.$backdrop[0].offsetWidth,
              this.$backdrop.addClass("in"),
              !b)
            )
              return;
            f
              ? this.$backdrop
                  .one("bsTransitionEnd", b)
                  .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
              : b();
          } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
              d.removeBackdrop(), b && b();
            };
            a.support.transition && this.$element.hasClass("fade")
              ? this.$backdrop
                  .one("bsTransitionEnd", g)
                  .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
              : g();
          } else b && b();
        }),
        (c.prototype.handleUpdate = function () {
          this.adjustDialog();
        }),
        (c.prototype.adjustDialog = function () {
          var a =
            this.$element[0].scrollHeight >
            document.documentElement.clientHeight;
          this.$element.css({
            paddingLeft:
              !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight:
              this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
          });
        }),
        (c.prototype.resetAdjustments = function () {
          this.$element.css({ paddingLeft: "", paddingRight: "" });
        }),
        (c.prototype.checkScrollbar = function () {
          var a = window.innerWidth;
          if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left);
          }
          (this.bodyIsOverflowing = document.body.clientWidth < a),
            (this.scrollbarWidth = this.measureScrollbar());
        }),
        (c.prototype.setScrollbar = function () {
          var a = parseInt(this.$body.css("padding-right") || 0, 10);
          (this.originalBodyPad = document.body.style.paddingRight || ""),
            this.bodyIsOverflowing &&
              this.$body.css("padding-right", a + this.scrollbarWidth);
        }),
        (c.prototype.resetScrollbar = function () {
          this.$body.css("padding-right", this.originalBodyPad);
        }),
        (c.prototype.measureScrollbar = function () {
          var a = document.createElement("div");
          (a.className = "modal-scrollbar-measure"), this.$body.append(a);
          var b = a.offsetWidth - a.clientWidth;
          return this.$body[0].removeChild(a), b;
        });
      var d = a.fn.modal;
      (a.fn.modal = b),
        (a.fn.modal.Constructor = c),
        (a.fn.modal.noConflict = function () {
          return (a.fn.modal = d), this;
        }),
        a(document).on(
          "click.bs.modal.data-api",
          '[data-toggle="modal"]',
          function (c) {
            var d = a(this),
              e = d.attr("href"),
              f = a(
                d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
              ),
              g = f.data("bs.modal")
                ? "toggle"
                : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
            d.is("a") && c.preventDefault(),
              f.one("show.bs.modal", function (a) {
                a.isDefaultPrevented() ||
                  f.one("hidden.bs.modal", function () {
                    d.is(":visible") && d.trigger("focus");
                  });
              }),
              b.call(f, g, this);
          }
        );
    })(jQuery),
    +(function (a) {
      "use strict";
      function b(b) {
        return this.each(function () {
          var d = a(this),
            e = d.data("bs.tooltip"),
            f = "object" == typeof b && b;
          (e || !/destroy|hide/.test(b)) &&
            (e || d.data("bs.tooltip", (e = new c(this, f))),
            "string" == typeof b && e[b]());
        });
      }
      var c = function (a, b) {
        (this.type = null),
          (this.options = null),
          (this.enabled = null),
          (this.timeout = null),
          (this.hoverState = null),
          (this.$element = null),
          (this.inState = null),
          this.init("tooltip", a, b);
      };
      (c.VERSION = "3.3.6"),
        (c.TRANSITION_DURATION = 150),
        (c.DEFAULTS = {
          animation: !0,
          placement: "top",
          selector: !1,
          template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          container: !1,
          viewport: { selector: "body", padding: 0 },
        }),
        (c.prototype.init = function (b, c, d) {
          if (
            ((this.enabled = !0),
            (this.type = b),
            (this.$element = a(c)),
            (this.options = this.getOptions(d)),
            (this.$viewport =
              this.options.viewport &&
              a(
                a.isFunction(this.options.viewport)
                  ? this.options.viewport.call(this, this.$element)
                  : this.options.viewport.selector || this.options.viewport
              )),
            (this.inState = { click: !1, hover: !1, focus: !1 }),
            this.$element[0] instanceof document.constructor &&
              !this.options.selector)
          )
            throw new Error(
              "`selector` option must be specified when initializing " +
                this.type +
                " on the window.document object!"
            );
          for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
              this.$element.on(
                "click." + this.type,
                this.options.selector,
                a.proxy(this.toggle, this)
              );
            else if ("manual" != g) {
              var h = "hover" == g ? "mouseenter" : "focusin",
                i = "hover" == g ? "mouseleave" : "focusout";
              this.$element.on(
                h + "." + this.type,
                this.options.selector,
                a.proxy(this.enter, this)
              ),
                this.$element.on(
                  i + "." + this.type,
                  this.options.selector,
                  a.proxy(this.leave, this)
                );
            }
          }
          this.options.selector
            ? (this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: "",
              }))
            : this.fixTitle();
        }),
        (c.prototype.getDefaults = function () {
          return c.DEFAULTS;
        }),
        (c.prototype.getOptions = function (b) {
          return (
            (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
            b.delay &&
              "number" == typeof b.delay &&
              (b.delay = { show: b.delay, hide: b.delay }),
            b
          );
        }),
        (c.prototype.getDelegateOptions = function () {
          var b = {},
            c = this.getDefaults();
          return (
            this._options &&
              a.each(this._options, function (a, d) {
                c[a] != d && (b[a] = d);
              }),
            b
          );
        }),
        (c.prototype.enter = function (b) {
          var c =
            b instanceof this.constructor
              ? b
              : a(b.currentTarget).data("bs." + this.type);
          return (
            c ||
              ((c = new this.constructor(
                b.currentTarget,
                this.getDelegateOptions()
              )),
              a(b.currentTarget).data("bs." + this.type, c)),
            b instanceof a.Event &&
              (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
            c.tip().hasClass("in") || "in" == c.hoverState
              ? void (c.hoverState = "in")
              : (clearTimeout(c.timeout),
                (c.hoverState = "in"),
                c.options.delay && c.options.delay.show
                  ? void (c.timeout = setTimeout(function () {
                      "in" == c.hoverState && c.show();
                    }, c.options.delay.show))
                  : c.show())
          );
        }),
        (c.prototype.isInStateTrue = function () {
          for (var a in this.inState) if (this.inState[a]) return !0;
          return !1;
        }),
        (c.prototype.leave = function (b) {
          var c =
            b instanceof this.constructor
              ? b
              : a(b.currentTarget).data("bs." + this.type);
          return (
            c ||
              ((c = new this.constructor(
                b.currentTarget,
                this.getDelegateOptions()
              )),
              a(b.currentTarget).data("bs." + this.type, c)),
            b instanceof a.Event &&
              (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
            c.isInStateTrue()
              ? void 0
              : (clearTimeout(c.timeout),
                (c.hoverState = "out"),
                c.options.delay && c.options.delay.hide
                  ? void (c.timeout = setTimeout(function () {
                      "out" == c.hoverState && c.hide();
                    }, c.options.delay.hide))
                  : c.hide())
          );
        }),
        (c.prototype.show = function () {
          var b = a.Event("show.bs." + this.type);
          if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(
              this.$element[0].ownerDocument.documentElement,
              this.$element[0]
            );
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
              f = this.tip(),
              g = this.getUID(this.type);
            this.setContent(),
              f.attr("id", g),
              this.$element.attr("aria-describedby", g),
              this.options.animation && f.addClass("fade");
            var h =
                "function" == typeof this.options.placement
                  ? this.options.placement.call(this, f[0], this.$element[0])
                  : this.options.placement,
              i = /\s?auto?\s?/i,
              j = i.test(h);
            j && (h = h.replace(i, "") || "top"),
              f
                .detach()
                .css({ top: 0, left: 0, display: "block" })
                .addClass(h)
                .data("bs." + this.type, this),
              this.options.container
                ? f.appendTo(this.options.container)
                : f.insertAfter(this.$element),
              this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
              l = f[0].offsetWidth,
              m = f[0].offsetHeight;
            if (j) {
              var n = h,
                o = this.getPosition(this.$viewport);
              (h =
                "bottom" == h && k.bottom + m > o.bottom
                  ? "top"
                  : "top" == h && k.top - m < o.top
                  ? "bottom"
                  : "right" == h && k.right + l > o.width
                  ? "left"
                  : "left" == h && k.left - l < o.left
                  ? "right"
                  : h),
                f.removeClass(n).addClass(h);
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
              var a = e.hoverState;
              e.$element.trigger("shown.bs." + e.type),
                (e.hoverState = null),
                "out" == a && e.leave(e);
            };
            a.support.transition && this.$tip.hasClass("fade")
              ? f
                  .one("bsTransitionEnd", q)
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : q();
          }
        }),
        (c.prototype.applyPlacement = function (b, c) {
          var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
          isNaN(g) && (g = 0),
            isNaN(h) && (h = 0),
            (b.top += g),
            (b.left += h),
            a.offset.setOffset(
              d[0],
              a.extend(
                {
                  using: function (a) {
                    d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                  },
                },
                b
              ),
              0
            ),
            d.addClass("in");
          var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
          "top" == c && j != f && (b.top = b.top + f - j);
          var k = this.getViewportAdjustedDelta(c, b, i, j);
          k.left ? (b.left += k.left) : (b.top += k.top);
          var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
          d.offset(b), this.replaceArrow(m, d[0][n], l);
        }),
        (c.prototype.replaceArrow = function (a, b, c) {
          this.arrow()
            .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
            .css(c ? "top" : "left", "");
        }),
        (c.prototype.setContent = function () {
          var a = this.tip(),
            b = this.getTitle();
          a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
            a.removeClass("fade in top bottom left right");
        }),
        (c.prototype.hide = function (b) {
          function d() {
            "in" != e.hoverState && f.detach(),
              e.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + e.type),
              b && b();
          }
          var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
          return (
            this.$element.trigger(g),
            g.isDefaultPrevented()
              ? void 0
              : (f.removeClass("in"),
                a.support.transition && f.hasClass("fade")
                  ? f
                      .one("bsTransitionEnd", d)
                      .emulateTransitionEnd(c.TRANSITION_DURATION)
                  : d(),
                (this.hoverState = null),
                this)
          );
        }),
        (c.prototype.fixTitle = function () {
          var a = this.$element;
          (a.attr("title") ||
            "string" != typeof a.attr("data-original-title")) &&
            a
              .attr("data-original-title", a.attr("title") || "")
              .attr("title", "");
        }),
        (c.prototype.hasContent = function () {
          return this.getTitle();
        }),
        (c.prototype.getPosition = function (b) {
          b = b || this.$element;
          var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
          null == e.width &&
            (e = a.extend({}, e, {
              width: e.right - e.left,
              height: e.bottom - e.top,
            }));
          var f = d ? { top: 0, left: 0 } : b.offset(),
            g = {
              scroll: d
                ? document.documentElement.scrollTop || document.body.scrollTop
                : b.scrollTop(),
            },
            h = d
              ? { width: a(window).width(), height: a(window).height() }
              : null;
          return a.extend({}, e, g, h, f);
        }),
        (c.prototype.getCalculatedOffset = function (a, b, c, d) {
          return "bottom" == a
            ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
            : "top" == a
            ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
            : "left" == a
            ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
            : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
        }),
        (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
          var e = { top: 0, left: 0 };
          if (!this.$viewport) return e;
          var f = (this.options.viewport && this.options.viewport.padding) || 0,
            g = this.getPosition(this.$viewport);
          if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
              i = b.top + f - g.scroll + d;
            h < g.top
              ? (e.top = g.top - h)
              : i > g.top + g.height && (e.top = g.top + g.height - i);
          } else {
            var j = b.left - f,
              k = b.left + f + c;
            j < g.left
              ? (e.left = g.left - j)
              : k > g.right && (e.left = g.left + g.width - k);
          }
          return e;
        }),
        (c.prototype.getTitle = function () {
          var a,
            b = this.$element,
            c = this.options;
          return (a =
            b.attr("data-original-title") ||
            ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
        }),
        (c.prototype.getUID = function (a) {
          do a += ~~(1e6 * Math.random());
          while (document.getElementById(a));
          return a;
        }),
        (c.prototype.tip = function () {
          if (
            !this.$tip &&
            ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
          )
            throw new Error(
              this.type +
                " `template` option must consist of exactly 1 top-level element!"
            );
          return this.$tip;
        }),
        (c.prototype.arrow = function () {
          return (this.$arrow =
            this.$arrow || this.tip().find(".tooltip-arrow"));
        }),
        (c.prototype.enable = function () {
          this.enabled = !0;
        }),
        (c.prototype.disable = function () {
          this.enabled = !1;
        }),
        (c.prototype.toggleEnabled = function () {
          this.enabled = !this.enabled;
        }),
        (c.prototype.toggle = function (b) {
          var c = this;
          b &&
            ((c = a(b.currentTarget).data("bs." + this.type)),
            c ||
              ((c = new this.constructor(
                b.currentTarget,
                this.getDelegateOptions()
              )),
              a(b.currentTarget).data("bs." + this.type, c))),
            b
              ? ((c.inState.click = !c.inState.click),
                c.isInStateTrue() ? c.enter(c) : c.leave(c))
              : c.tip().hasClass("in")
              ? c.leave(c)
              : c.enter(c);
        }),
        (c.prototype.destroy = function () {
          var a = this;
          clearTimeout(this.timeout),
            this.hide(function () {
              a.$element.off("." + a.type).removeData("bs." + a.type),
                a.$tip && a.$tip.detach(),
                (a.$tip = null),
                (a.$arrow = null),
                (a.$viewport = null);
            });
        });
      var d = a.fn.tooltip;
      (a.fn.tooltip = b),
        (a.fn.tooltip.Constructor = c),
        (a.fn.tooltip.noConflict = function () {
          return (a.fn.tooltip = d), this;
        });
    })(jQuery),
    +(function (a) {
      "use strict";
      function b(b) {
        return this.each(function () {
          var d = a(this),
            e = d.data("bs.popover"),
            f = "object" == typeof b && b;
          (e || !/destroy|hide/.test(b)) &&
            (e || d.data("bs.popover", (e = new c(this, f))),
            "string" == typeof b && e[b]());
        });
      }
      var c = function (a, b) {
        this.init("popover", a, b);
      };
      if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
      (c.VERSION = "3.3.6"),
        (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        })),
        (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
        (c.prototype.constructor = c),
        (c.prototype.getDefaults = function () {
          return c.DEFAULTS;
        }),
        (c.prototype.setContent = function () {
          var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
          a.find(".popover-title")[this.options.html ? "html" : "text"](b),
            a
              .find(".popover-content")
              .children()
              .detach()
              .end()
              [
                this.options.html
                  ? "string" == typeof c
                    ? "html"
                    : "append"
                  : "text"
              ](c),
            a.removeClass("fade top bottom left right in"),
            a.find(".popover-title").html() || a.find(".popover-title").hide();
        }),
        (c.prototype.hasContent = function () {
          return this.getTitle() || this.getContent();
        }),
        (c.prototype.getContent = function () {
          var a = this.$element,
            b = this.options;
          return (
            a.attr("data-content") ||
            ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
          );
        }),
        (c.prototype.arrow = function () {
          return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
        });
      var d = a.fn.popover;
      (a.fn.popover = b),
        (a.fn.popover.Constructor = c),
        (a.fn.popover.noConflict = function () {
          return (a.fn.popover = d), this;
        });
    })(jQuery),
    +(function (a) {
      "use strict";
      function b(c, d) {
        (this.$body = a(document.body)),
          (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
          (this.options = a.extend({}, b.DEFAULTS, d)),
          (this.selector = (this.options.target || "") + " .nav li > a"),
          (this.offsets = []),
          (this.targets = []),
          (this.activeTarget = null),
          (this.scrollHeight = 0),
          this.$scrollElement.on(
            "scroll.bs.scrollspy",
            a.proxy(this.process, this)
          ),
          this.refresh(),
          this.process();
      }
      function c(c) {
        return this.each(function () {
          var d = a(this),
            e = d.data("bs.scrollspy"),
            f = "object" == typeof c && c;
          e || d.data("bs.scrollspy", (e = new b(this, f))),
            "string" == typeof c && e[c]();
        });
      }
      (b.VERSION = "3.3.6"),
        (b.DEFAULTS = { offset: 10 }),
        (b.prototype.getScrollHeight = function () {
          return (
            this.$scrollElement[0].scrollHeight ||
            Math.max(
              this.$body[0].scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (b.prototype.refresh = function () {
          var b = this,
            c = "offset",
            d = 0;
          (this.offsets = []),
            (this.targets = []),
            (this.scrollHeight = this.getScrollHeight()),
            a.isWindow(this.$scrollElement[0]) ||
              ((c = "position"), (d = this.$scrollElement.scrollTop())),
            this.$body
              .find(this.selector)
              .map(function () {
                var b = a(this),
                  e = b.data("target") || b.attr("href"),
                  f = /^#./.test(e) && a(e);
                return (
                  (f &&
                    f.length &&
                    f.is(":visible") && [[f[c]().top + d, e]]) ||
                  null
                );
              })
              .sort(function (a, b) {
                return a[0] - b[0];
              })
              .each(function () {
                b.offsets.push(this[0]), b.targets.push(this[1]);
              });
        }),
        (b.prototype.process = function () {
          var a,
            b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
          if ((this.scrollHeight != c && this.refresh(), b >= d))
            return g != (a = f[f.length - 1]) && this.activate(a);
          if (g && b < e[0]) return (this.activeTarget = null), this.clear();
          for (a = e.length; a--; )
            g != f[a] &&
              b >= e[a] &&
              (void 0 === e[a + 1] || b < e[a + 1]) &&
              this.activate(f[a]);
        }),
        (b.prototype.activate = function (b) {
          (this.activeTarget = b), this.clear();
          var c =
              this.selector +
              '[data-target="' +
              b +
              '"],' +
              this.selector +
              '[href="' +
              b +
              '"]',
            d = a(c).parents("li").addClass("active");
          d.parent(".dropdown-menu").length &&
            (d = d.closest("li.dropdown").addClass("active")),
            d.trigger("activate.bs.scrollspy");
        }),
        (b.prototype.clear = function () {
          a(this.selector)
            .parentsUntil(this.options.target, ".active")
            .removeClass("active");
        });
      var d = a.fn.scrollspy;
      (a.fn.scrollspy = c),
        (a.fn.scrollspy.Constructor = b),
        (a.fn.scrollspy.noConflict = function () {
          return (a.fn.scrollspy = d), this;
        }),
        a(window).on("load.bs.scrollspy.data-api", function () {
          a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data());
          });
        });
    })(jQuery),
    +(function (a) {
      "use strict";
      function b(b) {
        return this.each(function () {
          var d = a(this),
            e = d.data("bs.tab");
          e || d.data("bs.tab", (e = new c(this))),
            "string" == typeof b && e[b]();
        });
      }
      var c = function (b) {
        this.element = a(b);
      };
      (c.VERSION = "3.3.6"),
        (c.TRANSITION_DURATION = 150),
        (c.prototype.show = function () {
          var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
          if (
            (d ||
              ((d = b.attr("href")),
              (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
            !b.parent("li").hasClass("active"))
          ) {
            var e = c.find(".active:last a"),
              f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
              g = a.Event("show.bs.tab", { relatedTarget: e[0] });
            if (
              (e.trigger(f),
              b.trigger(g),
              !g.isDefaultPrevented() && !f.isDefaultPrevented())
            ) {
              var h = a(d);
              this.activate(b.closest("li"), c),
                this.activate(h, h.parent(), function () {
                  e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                    b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
                });
            }
          }
        }),
        (c.prototype.activate = function (b, d, e) {
          function f() {
            g
              .removeClass("active")
              .find("> .dropdown-menu > .active")
              .removeClass("active")
              .end()
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !1),
              b
                .addClass("active")
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
              h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
              b.parent(".dropdown-menu").length &&
                b
                  .closest("li.dropdown")
                  .addClass("active")
                  .end()
                  .find('[data-toggle="tab"]')
                  .attr("aria-expanded", !0),
              e && e();
          }
          var g = d.find("> .active"),
            h =
              e &&
              a.support.transition &&
              ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
          g.length && h
            ? g
                .one("bsTransitionEnd", f)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : f(),
            g.removeClass("in");
        });
      var d = a.fn.tab;
      (a.fn.tab = b),
        (a.fn.tab.Constructor = c),
        (a.fn.tab.noConflict = function () {
          return (a.fn.tab = d), this;
        });
      var e = function (c) {
        c.preventDefault(), b.call(a(this), "show");
      };
      a(document)
        .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
        .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
    })(jQuery),
    +(function (a) {
      "use strict";
      function b(b) {
        return this.each(function () {
          var d = a(this),
            e = d.data("bs.affix"),
            f = "object" == typeof b && b;
          e || d.data("bs.affix", (e = new c(this, f))),
            "string" == typeof b && e[b]();
        });
      }
      var c = function (b, d) {
        (this.options = a.extend({}, c.DEFAULTS, d)),
          (this.$target = a(this.options.target)
            .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
            .on(
              "click.bs.affix.data-api",
              a.proxy(this.checkPositionWithEventLoop, this)
            )),
          (this.$element = a(b)),
          (this.affixed = null),
          (this.unpin = null),
          (this.pinnedOffset = null),
          this.checkPosition();
      };
      (c.VERSION = "3.3.6"),
        (c.RESET = "affix affix-top affix-bottom"),
        (c.DEFAULTS = { offset: 0, target: window }),
        (c.prototype.getState = function (a, b, c, d) {
          var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
          if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
          if ("bottom" == this.affixed)
            return null != c
              ? e + this.unpin <= f.top
                ? !1
                : "bottom"
              : a - d >= e + g
              ? !1
              : "bottom";
          var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
          return null != c && c >= e
            ? "top"
            : null != d && i + j >= a - d
            ? "bottom"
            : !1;
        }),
        (c.prototype.getPinnedOffset = function () {
          if (this.pinnedOffset) return this.pinnedOffset;
          this.$element.removeClass(c.RESET).addClass("affix");
          var a = this.$target.scrollTop(),
            b = this.$element.offset();
          return (this.pinnedOffset = b.top - a);
        }),
        (c.prototype.checkPositionWithEventLoop = function () {
          setTimeout(a.proxy(this.checkPosition, this), 1);
        }),
        (c.prototype.checkPosition = function () {
          if (this.$element.is(":visible")) {
            var b = this.$element.height(),
              d = this.options.offset,
              e = d.top,
              f = d.bottom,
              g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d),
              "function" == typeof e && (e = d.top(this.$element)),
              "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
              null != this.unpin && this.$element.css("top", "");
              var i = "affix" + (h ? "-" + h : ""),
                j = a.Event(i + ".bs.affix");
              if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
              (this.affixed = h),
                (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
                this.$element
                  .removeClass(c.RESET)
                  .addClass(i)
                  .trigger(i.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == h && this.$element.offset({ top: g - b - f });
          }
        });
      var d = a.fn.affix;
      (a.fn.affix = b),
        (a.fn.affix.Constructor = c),
        (a.fn.affix.noConflict = function () {
          return (a.fn.affix = d), this;
        }),
        a(window).on("load", function () {
          a('[data-spy="affix"]').each(function () {
            var c = a(this),
              d = c.data();
            (d.offset = d.offset || {}),
              null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
              null != d.offsetTop && (d.offset.top = d.offsetTop),
              b.call(c, d);
          });
        });
    })(jQuery);

  /*!
   * Smooth Scroll v1.4.4
   */

  if (
    document.documentMode ||
    /Edge|Version\/[\d\.]+.*Safari/.test(navigator.userAgent)
  ) {
    $("body").append(
      '<style type="text/css">.parallax > .background-image {top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);}</style>'
    );
  } else {
    !(function () {
      function e() {
        z.keyboardSupport && m("keydown", a);
      }
      function t() {
        if (!A && document.body) {
          A = !0;
          var t = document.body,
            o = document.documentElement,
            n = window.innerHeight,
            r = t.scrollHeight;
          if (
            ((B = document.compatMode.indexOf("CSS") >= 0 ? o : t),
            (D = t),
            e(),
            top != self)
          )
            X = !0;
          else if (r > n && (t.offsetHeight <= n || o.offsetHeight <= n)) {
            var a = document.createElement("div");
            (a.style.cssText =
              "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
              B.scrollHeight +
              "px"),
              document.body.appendChild(a);
            var i;
            (T = function () {
              i ||
                (i = setTimeout(function () {
                  L ||
                    ((a.style.height = "0"),
                    (a.style.height = B.scrollHeight + "px"),
                    (i = null));
                }, 500));
            }),
              setTimeout(T, 10),
              m("resize", T);
            var l = { attributes: !0, childList: !0, characterData: !1 };
            if (((M = new W(T)), M.observe(t, l), B.offsetHeight <= n)) {
              var c = document.createElement("div");
              (c.style.clear = "both"), t.appendChild(c);
            }
          }
          z.fixedBackground ||
            L ||
            ((t.style.backgroundAttachment = "scroll"),
            (o.style.backgroundAttachment = "scroll"));
        }
      }
      function o() {
        M && M.disconnect(),
          w(_, r),
          w("mousedown", i),
          w("keydown", a),
          w("resize", T),
          w("load", t);
      }
      function n(e, t, o) {
        if ((p(t, o), 1 != z.accelerationMax)) {
          var n = Date.now(),
            r = n - j;
          if (r < z.accelerationDelta) {
            var a = (1 + 50 / r) / 2;
            a > 1 && ((a = Math.min(a, z.accelerationMax)), (t *= a), (o *= a));
          }
          j = Date.now();
        }
        if (
          (q.push({
            x: t,
            y: o,
            lastX: 0 > t ? 0.99 : -0.99,
            lastY: 0 > o ? 0.99 : -0.99,
            start: Date.now(),
          }),
          !P)
        ) {
          var i = e === document.body,
            l = function (n) {
              for (var r = Date.now(), a = 0, c = 0, u = 0; u < q.length; u++) {
                var d = q[u],
                  s = r - d.start,
                  f = s >= z.animationTime,
                  m = f ? 1 : s / z.animationTime;
                z.pulseAlgorithm && (m = x(m));
                var w = (d.x * m - d.lastX) >> 0,
                  h = (d.y * m - d.lastY) >> 0;
                (a += w),
                  (c += h),
                  (d.lastX += w),
                  (d.lastY += h),
                  f && (q.splice(u, 1), u--);
              }
              i
                ? window.scrollBy(a, c)
                : (a && (e.scrollLeft += a), c && (e.scrollTop += c)),
                t || o || (q = []),
                q.length ? V(l, e, 1e3 / z.frameRate + 1) : (P = !1);
            };
          V(l, e, 0), (P = !0);
        }
      }
      function r(e) {
        A || t();
        var o = e.target,
          r = u(o);
        if (!r || e.defaultPrevented || e.ctrlKey) return !0;
        if (
          h(D, "embed") ||
          (h(o, "embed") && /\.pdf/i.test(o.src)) ||
          h(D, "object") ||
          o.shadowRoot
        )
          return !0;
        var a = -e.wheelDeltaX || e.deltaX || 0,
          i = -e.wheelDeltaY || e.deltaY || 0;
        return (
          O &&
            (e.wheelDeltaX &&
              b(e.wheelDeltaX, 120) &&
              (a = -120 * (e.wheelDeltaX / Math.abs(e.wheelDeltaX))),
            e.wheelDeltaY &&
              b(e.wheelDeltaY, 120) &&
              (i = -120 * (e.wheelDeltaY / Math.abs(e.wheelDeltaY)))),
          a || i || (i = -e.wheelDelta || 0),
          1 === e.deltaMode && ((a *= 40), (i *= 40)),
          !z.touchpadSupport && v(i)
            ? !0
            : (Math.abs(a) > 1.2 && (a *= z.stepSize / 120),
              Math.abs(i) > 1.2 && (i *= z.stepSize / 120),
              n(r, a, i),
              e.preventDefault(),
              void l())
        );
      }
      function a(e) {
        var t = e.target,
          o =
            e.ctrlKey ||
            e.altKey ||
            e.metaKey ||
            (e.shiftKey && e.keyCode !== K.spacebar);
        document.body.contains(D) || (D = document.activeElement);
        var r = /^(textarea|select|embed|object)$/i,
          a = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (
          e.defaultPrevented ||
          r.test(t.nodeName) ||
          (h(t, "input") && !a.test(t.type)) ||
          h(D, "video") ||
          g(e) ||
          t.isContentEditable ||
          o
        )
          return !0;
        if (
          (h(t, "button") || (h(t, "input") && a.test(t.type))) &&
          e.keyCode === K.spacebar
        )
          return !0;
        if (h(t, "input") && "radio" == t.type && R[e.keyCode]) return !0;
        var i,
          c = 0,
          d = 0,
          s = u(D),
          f = s.clientHeight;
        switch ((s == document.body && (f = window.innerHeight), e.keyCode)) {
          case K.up:
            d = -z.arrowScroll;
            break;
          case K.down:
            d = z.arrowScroll;
            break;
          case K.spacebar:
            (i = e.shiftKey ? 1 : -1), (d = -i * f * 0.9);
            break;
          case K.pageup:
            d = 0.9 * -f;
            break;
          case K.pagedown:
            d = 0.9 * f;
            break;
          case K.home:
            d = -s.scrollTop;
            break;
          case K.end:
            var m = s.scrollHeight - s.scrollTop - f;
            d = m > 0 ? m + 10 : 0;
            break;
          case K.left:
            c = -z.arrowScroll;
            break;
          case K.right:
            c = z.arrowScroll;
            break;
          default:
            return !0;
        }
        n(s, c, d), e.preventDefault(), l();
      }
      function i(e) {
        D = e.target;
      }
      function l() {
        clearTimeout(E),
          (E = setInterval(function () {
            I = {};
          }, 1e3));
      }
      function c(e, t) {
        for (var o = e.length; o--; ) I[F(e[o])] = t;
        return t;
      }
      function u(e) {
        var t = [],
          o = document.body,
          n = B.scrollHeight;
        do {
          var r = I[F(e)];
          if (r) return c(t, r);
          if ((t.push(e), n === e.scrollHeight)) {
            var a = s(B) && s(o),
              i = a || f(B);
            if ((X && d(B)) || (!X && i)) return c(t, $());
          } else if (d(e) && f(e)) return c(t, e);
        } while ((e = e.parentElement));
      }
      function d(e) {
        return e.clientHeight + 10 < e.scrollHeight;
      }
      function s(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "hidden" !== t;
      }
      function f(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "scroll" === t || "auto" === t;
      }
      function m(e, t) {
        window.addEventListener(e, t, !1);
      }
      function w(e, t) {
        window.removeEventListener(e, t, !1);
      }
      function h(e, t) {
        return (e.nodeName || "").toLowerCase() === t.toLowerCase();
      }
      function p(e, t) {
        (e = e > 0 ? 1 : -1),
          (t = t > 0 ? 1 : -1),
          (Y.x !== e || Y.y !== t) && ((Y.x = e), (Y.y = t), (q = []), (j = 0));
      }
      function v(e) {
        return e
          ? (N.length || (N = [e, e, e]),
            (e = Math.abs(e)),
            N.push(e),
            N.shift(),
            clearTimeout(C),
            (C = setTimeout(function () {
              window.localStorage &&
                (localStorage.SS_deltaBuffer = N.join(","));
            }, 1e3)),
            !y(120) && !y(100))
          : void 0;
      }
      function b(e, t) {
        return Math.floor(e / t) == e / t;
      }
      function y(e) {
        return b(N[0], e) && b(N[1], e) && b(N[2], e);
      }
      function g(e) {
        var t = e.target,
          o = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
          do
            if (
              (o = t.classList && t.classList.contains("html5-video-controls"))
            )
              break;
          while ((t = t.parentNode));
        return o;
      }
      function S(e) {
        var t, o, n;
        return (
          (e *= z.pulseScale),
          1 > e
            ? (t = e - (1 - Math.exp(-e)))
            : ((o = Math.exp(-1)),
              (e -= 1),
              (n = 1 - Math.exp(-e)),
              (t = o + n * (1 - o))),
          t * z.pulseNormalize
        );
      }
      function x(e) {
        return e >= 1
          ? 1
          : 0 >= e
          ? 0
          : (1 == z.pulseNormalize && (z.pulseNormalize /= S(1)), S(e));
      }
      function k(e) {
        for (var t in e) H.hasOwnProperty(t) && (z[t] = e[t]);
      }
      var D,
        M,
        T,
        E,
        C,
        H = {
          frameRate: 150,
          animationTime: 400,
          stepSize: 100,
          pulseAlgorithm: !0,
          pulseScale: 4,
          pulseNormalize: 1,
          accelerationDelta: 50,
          accelerationMax: 3,
          keyboardSupport: !0,
          arrowScroll: 50,
          touchpadSupport: !1,
          fixedBackground: !0,
          excluded: "",
        },
        z = H,
        L = !1,
        X = !1,
        Y = { x: 0, y: 0 },
        A = !1,
        B = document.documentElement,
        N = [],
        O = /^Mac/.test(navigator.platform),
        K = {
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          spacebar: 32,
          pageup: 33,
          pagedown: 34,
          end: 35,
          home: 36,
        },
        R = { 37: 1, 38: 1, 39: 1, 40: 1 },
        q = [],
        P = !1,
        j = Date.now(),
        F = (function () {
          var e = 0;
          return function (t) {
            return t.uniqueID || (t.uniqueID = e++);
          };
        })(),
        I = {};
      window.localStorage &&
        localStorage.SS_deltaBuffer &&
        (N = localStorage.SS_deltaBuffer.split(","));
      var _,
        V = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (e, t, o) {
              window.setTimeout(e, o || 1e3 / 60);
            }
          );
        })(),
        W =
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver,
        $ = (function () {
          var e;
          return function () {
            if (!e) {
              var t = document.createElement("div");
              (t.style.cssText = "height:10000px;width:1px;"),
                document.body.appendChild(t);
              var o = document.body.scrollTop;
              document.documentElement.scrollTop;
              window.scrollBy(0, 3),
                (e =
                  document.body.scrollTop != o
                    ? document.body
                    : document.documentElement),
                window.scrollBy(0, -3),
                document.body.removeChild(t);
            }
            return e;
          };
        })(),
        U = window.navigator.userAgent,
        G = /Edge/.test(U),
        J = /chrome/i.test(U) && !G,
        Q = /safari/i.test(U) && !G,
        Z = /mobile/i.test(U),
        ee = /Windows NT 6.1/i.test(U) && /rv:11/i.test(U),
        te = (J || Q || ee) && !Z;
      "onwheel" in document.createElement("div")
        ? (_ = "wheel")
        : "onmousewheel" in document.createElement("div") && (_ = "mousewheel"),
        _ && te && (m(_, r), m("mousedown", i), m("load", t)),
        (k.destroy = o),
        window.SmoothScrollOptions && k(window.SmoothScrollOptions),
        "function" == typeof define && define.amd
          ? define(function () {
              return k;
            })
          : "object" == typeof exports
          ? (module.exports = k)
          : (window.SmoothScroll = k);
    })();
  }

  /*!
   * Vossen Parallax v2.0
   */
  function parallaxVossen() {
    function a() {
      function a(a) {
        for (var b = 0; b < a.length; b++)
          if ("undefined" != typeof document.body.style[a[b]]) return a[b];
        return null;
      }
      function b(a, b, c) {
        var d = a - 1;
        return (
          (d /= c),
          (a /= c),
          d--,
          a--,
          b * (a * a * a * a * a + 1) + j - (b * (d * d * d * d * d + 1) + j)
        );
      }
      function c() {
        if (F) {
          for (var a = k.length, f = e(); a--; ) d(k[a], f, o, p);
          F = !1;
        }
        s &&
          ((D += -v * b(u, 0, A, C)),
          (D > B || -B > D) && (E.scrollBy(0, D), (D = 0)),
          u++,
          u > C &&
            ((u = 0), (s = !1), (t = !0), (v = 0), (w = 0), (x = 0), (D = 0))),
          l(c);
      }
      function d(a, b, c, d) {
        var e = i();
        e
          ? b + q - r > a.elemTop &&
            b - r < a.elemBottom &&
            (a.isFirstSection
              ? (a.backgroundImage.style[n] = c + b / 2 + d)
              : (a.backgroundImage.style[n] = c + (b - a.elemTop - r) / 2 + d))
          : b + q > a.elemTop &&
            b < a.elemBottom &&
            (a.isFirstSection
              ? (a.backgroundImage.style[n] = c + b / 2 + d)
              : (a.backgroundImage.style[n] = c + (b + q - a.elemTop) / 2 + d));
      }
      function e() {
        return E != window
          ? E.scrollTop
          : 0 === document.documentElement.scrollTop
          ? document.body.scrollTop
          : document.documentElement.scrollTop;
      }
      function f() {
        F = !0;
      }
      function g(a) {
        G.vosSa === !0 &&
          (a.preventDefault && a.preventDefault(),
          (v = a.vorw
            ? -a.deltaY / 4
            : 1 == a.deltaMode
            ? -a.deltaY / 3
            : 100 === Math.abs(a.deltaY)
            ? -a.deltaY / 120
            : -a.deltaY / 40),
          (v = -y > v ? -y : v),
          (v = v > y ? y : v),
          (s = !0),
          (u = z));
      }
      function h(a) {
        var b = {};
        return a && "[object Function]" === b.toString.call(a);
      }
      function i() {}
      function j() {}
      var k,
        l =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame,
        m = [
          "transform",
          "msTransform",
          "webkitTransform",
          "mozTransform",
          "oTransform",
        ],
        n = a(m),
        o = "translate3d(0,",
        p = "px,0)",
        q = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        ),
        r = 0,
        s = !1,
        t = !0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 2.2,
        z = 2,
        A = 350,
        B = 1,
        C = 35,
        D = 0,
        E = window,
        F = (i(), !1),
        G = this;
      jQuery(document).ready(function () {
        G.documentReady();
      }),
        jQuery(window).load(function () {
          G.windowLoad();
        }),
        (this.scrollStat = function () {
          return u > 0;
        }),
        (this.documentReady = function (a) {
          return (
            (q = Math.max(
              document.documentElement.clientHeight,
              window.innerHeight || 0
            )),
            /Android|iPad|iPhone|iPod|BlackBerry|Windows Phone|Edge|MSIE|Trident\/|Version\/[\d\.]+.*Safari/i.test(
              navigator.userAgent || navigator.vendor || window.opera
            )
              ? jQuery(".parallax")
              : l && (G.vope(), G.vops()),
            h(a) ? void a() : void 0
          );
        }),
        (this.windowLoad = function () {
          (q = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
          )),
            (r = j()),
            window.vossenParallax.vope();
        }),
        (this.vops = function () {
          i() &&
            ((E = jQuery().get(0)),
            "undefined" != typeof E &&
              (E.scrollBy = function (a) {
                (this.scrollTop += j), (this.scrollLeft += a);
              })),
            "undefined" != typeof E &&
              (E.addEventListener("scroll", f, !1),
              window.addWheelListener(E, g, !1),
              window.addEventListener(
                "resize",
                function () {
                  (q = Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                  )),
                    (r = j()),
                    G.vope();
                },
                !1
              ),
              c());
        }),
        (this.vope = function () {
          (k = []), (r = j());
          var a = i(),
            b =
              ".parallax > .background-image, .hero-slider div.slide .background-image";
          a && (b = ".hero-slider div.slide .background-image"),
            jQuery(b).each(function (b) {
              var c = jQuery(this).closest(".parallax"),
                d = a ? c.position().top : c.offset().top;
              k.push({
                section: c.get(0),
                outerHeight: c.outerHeight(),
                elemTop: d,
                elemBottom: d + c.outerHeight(),
                isFirstSection: !!c.is(":nth-of-type(1)"),
                backgroundImage: jQuery(this).get(0),
              }),
                a
                  ? a &&
                    (c.is(":nth-of-type(1)")
                      ? G.vostt(jQuery(this).get(0), 0 === e() ? 0 : e() / 2)
                      : G.vostt(jQuery(this).get(0), (e() - d - r) / 2))
                  : c.is(":nth-of-type(1)")
                  ? G.vostt(jQuery(this).get(0), 0 === e() ? 0 : e() / 2)
                  : G.vostt(jQuery(this).get(0), (e() + q - d) / 2);
            });
        }),
        (this.vostt = function (a) {
          a.style[n] = o + j + p;
        });
    }
    (window.vossenParallax = new a()),
      (function (a, b) {
        function c(b, c, g, h) {
          b[d](
            f + c,
            "wheel" == e
              ? g
              : function (b) {
                  !b && (b = a.event);
                  var c = {
                    originalEvent: b,
                    target: b.target || b.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == b.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    vorw: 1,
                    preventDefault: function () {
                      b.preventDefault
                        ? b.preventDefault()
                        : (b.returnValue = !1);
                    },
                  };
                  return (
                    "mousewheel" == e
                      ? ((c.deltaY = -0.025 * b.wheelDelta),
                        b.wheelDeltaX && (c.deltaX = -0.025 * b.wheelDeltaX))
                      : (c.deltaY = b.detail / 3),
                    g(c)
                  );
                },
            h || !1
          );
        }
        var d,
          e,
          f = "";
        a.addEventListener
          ? (d = "addEventListener")
          : ((d = "attachEvent"), (f = "on")),
          (e =
            "onwheel" in b.createElement("div")
              ? "wheel"
              : "undefined" != typeof b.onmousewheel
              ? "mousewheel"
              : "DOMMouseScroll"),
          (a.addWheelListener = function (a, b, d) {
            c(a, e, b, d),
              "DOMMouseScroll" == e && c(a, "MozMousePixelScroll", b, d);
          });
      })(window, document);
    var a = (function (a, b, c) {
      function d(b) {
        (b = "undefined" == typeof b ? a : b),
          g.documentReady.forEach(function (a) {
            a(b);
          });
      }
      function e(b) {
        (b = "object" == typeof b ? a : b),
          g.windowLoad.forEach(function (a) {
            a(b);
          });
      }
      var f = {},
        g = { documentReady: [], windowLoad: [] };
      return (
        a(c).ready(d),
        a(b).load(e),
        (f.setContext = function (b) {
          var c = a;
          return "undefined" != typeof b
            ? function (c) {
                return a(b).find(c);
              }
            : c;
        }),
        (f.components = g),
        (f.documentReady = d),
        (f.windowLoad = e),
        f
      );
    })(jQuery, window, document);
    !(function (a, b, c) {
      var d = function (a) {
        a(".background-image").each(function () {
          var b = a(this).children("img").attr("src");
          a(this)
            .css("background-image", 'url("' + b + '")')
            .css("opacity", "1");
        });
      };
      return (
        (a.backgrounds = { documentReady: d }),
        a.components.documentReady.push(d),
        a
      );
      var d;
    })(a),
      function (a, b, c) {};
  }

  /**
   * Owl carousel v2.0.0
   */
  !(function (a, b, c, d) {
    function e(b, c) {
      (this.settings = null),
        (this.options = a.extend({}, e.Defaults, c)),
        (this.$element = a(b)),
        (this.drag = a.extend({}, m)),
        (this.state = a.extend({}, n)),
        (this.e = a.extend({}, o)),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._invalidated = {}),
        (this._pipe = []),
        a.each(
          e.Plugins,
          a.proxy(function (a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this);
          }, this)
        ),
        a.each(
          e.Pipe,
          a.proxy(function (b, c) {
            this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    function f(a) {
      if (a.touches !== d)
        return { x: a.touches[0].pageX, y: a.touches[0].pageY };
      if (a.touches === d) {
        if (a.pageX !== d) return { x: a.pageX, y: a.pageY };
        if (a.pageX === d) return { x: a.clientX, y: a.clientY };
      }
    }
    function g(a) {
      var b,
        d,
        e = c.createElement("div"),
        f = a;
      for (b in f)
        if (((d = f[b]), "undefined" != typeof e.style[d]))
          return (e = null), [d, b];
      return [!1];
    }
    function h() {
      return g([
        "transition",
        "WebkitTransition",
        "MozTransition",
        "OTransition",
      ])[1];
    }
    function i() {
      return g([
        "transform",
        "WebkitTransform",
        "MozTransform",
        "OTransform",
        "msTransform",
      ])[0];
    }
    function j() {
      return g([
        "perspective",
        "webkitPerspective",
        "MozPerspective",
        "OPerspective",
        "MsPerspective",
      ])[0];
    }
    function k() {
      return "ontouchstart" in b || !!navigator.msMaxTouchPoints;
    }
    function l() {
      return b.navigator.msPointerEnabled;
    }
    var m, n, o;
    (m = {
      start: 0,
      startX: 0,
      startY: 0,
      current: 0,
      currentX: 0,
      currentY: 0,
      offsetX: 0,
      offsetY: 0,
      distance: null,
      startTime: 0,
      endTime: 0,
      updatedX: 0,
      targetEl: null,
    }),
      (n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1,
      }),
      (o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null,
      }),
      (e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active",
      }),
      (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (e.Plugins = {}),
      (e.Pipe = [
        {
          filter: ["width", "items", "settings"],
          run: function (a) {
            a.current =
              this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var a = this._clones,
              b = this.$stage.children(".cloned");
            (b.length !== a.length || (!this.settings.loop && a.length > 0)) &&
              (this.$stage.children(".cloned").remove(), (this._clones = []));
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var a,
              b,
              c = this._clones,
              d = this._items,
              e = this.settings.loop
                ? c.length - Math.max(2 * this.settings.items, 4)
                : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++)
              e > 0
                ? (this.$stage
                    .children()
                    .eq(d.length + c.length - 1)
                    .remove(),
                  c.pop(),
                  this.$stage.children().eq(0).remove(),
                  c.pop())
                : (c.push(c.length / 2),
                  this.$stage.append(
                    d[c[c.length - 1]].clone().addClass("cloned")
                  ),
                  c.push(d.length - 1 - (c.length - 1) / 2),
                  this.$stage.prepend(
                    d[c[c.length - 1]].clone().addClass("cloned")
                  ));
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var a,
              b,
              c,
              d = this.settings.rtl ? 1 : -1,
              e = (this.width() / this.settings.items).toFixed(3),
              f = 0;
            for (
              this._coordinates = [],
                b = 0,
                c = this._clones.length + this._items.length;
              c > b;
              b++
            )
              (a = this._mergers[this.relative(b)]),
                (a =
                  (this.settings.mergeFit &&
                    Math.min(a, this.settings.items)) ||
                  a),
                (f +=
                  (this.settings.autoWidth
                    ? this._items[this.relative(b)].width() +
                      this.settings.margin
                    : e * a) * d),
                this._coordinates.push(f);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var b,
              c,
              d = (this.width() / this.settings.items).toFixed(3),
              e = {
                width:
                  Math.abs(this._coordinates[this._coordinates.length - 1]) +
                  2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || "",
              };
            if (
              (this.$stage.css(e),
              (e = {
                width: this.settings.autoWidth
                  ? "auto"
                  : d - this.settings.margin,
              }),
              (e[this.settings.rtl ? "margin-left" : "margin-right"] =
                this.settings.margin),
              !this.settings.autoWidth &&
                a.grep(this._mergers, function (a) {
                  return a > 1;
                }).length > 0)
            )
              for (b = 0, c = this._coordinates.length; c > b; b++)
                (e.width =
                  Math.abs(this._coordinates[b]) -
                  Math.abs(this._coordinates[b - 1] || 0) -
                  this.settings.margin),
                  this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (a) {
            a.current && this.reset(this.$stage.children().index(a.current));
          },
        },
        {
          filter: ["position"],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function () {
            var a,
              b,
              c,
              d,
              e = this.settings.rtl ? 1 : -1,
              f = 2 * this.settings.stagePadding,
              g = this.coordinates(this.current()) + f,
              h = g + this.width() * e,
              i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++)
              (a = this._coordinates[c - 1] || 0),
                (b = Math.abs(this._coordinates[c]) + f * e),
                ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                  (this.op(b, "<", g) && this.op(b, ">", h))) &&
                  i.push(c);
            this.$stage
              .children("." + this.settings.activeClass)
              .removeClass(this.settings.activeClass),
              this.$stage
                .children(":eq(" + i.join("), :eq(") + ")")
                .addClass(this.settings.activeClass),
              this.settings.center &&
                (this.$stage
                  .children("." + this.settings.centerClass)
                  .removeClass(this.settings.centerClass),
                this.$stage
                  .children()
                  .eq(this.current())
                  .addClass(this.settings.centerClass));
          },
        },
      ]),
      (e.prototype.initialize = function () {
        if (
          (this.trigger("initialize"),
          this.$element
            .addClass(this.settings.baseClass)
            .addClass(this.settings.themeClass)
            .toggleClass("owl-rtl", this.settings.rtl),
          this.browserSupport(),
          this.settings.autoWidth && this.state.imagesLoaded !== !0)
        ) {
          var b, c, e;
          if (
            ((b = this.$element.find("img")),
            (c = this.settings.nestedItemSelector
              ? "." + this.settings.nestedItemSelector
              : d),
            (e = this.$element.children(c).width()),
            b.length && 0 >= e)
          )
            return this.preloadAutoWidthImages(b), !1;
        }
        this.$element.addClass("owl-loading"),
          (this.$stage = a(
            "<" + this.settings.stageElement + ' class="owl-stage"/>'
          ).wrap('<div class="owl-stage-outer">')),
          this.$element.append(this.$stage.parent()),
          this.replace(this.$element.children().not(this.$stage.parent())),
          (this._width = this.$element.width()),
          this.refresh(),
          this.$element.removeClass("owl-loading").addClass("owl-loaded"),
          this.eventsCall(),
          this.internalEvents(),
          this.addTriggerableEvents(),
          this.trigger("initialized");
      }),
      (e.prototype.setup = function () {
        var b = this.viewport(),
          c = this.options.responsive,
          d = -1,
          e = null;
        c
          ? (a.each(c, function (a) {
              b >= a && a > d && (d = Number(a));
            }),
            (e = a.extend({}, this.options, c[d])),
            delete e.responsive,
            e.responsiveClass &&
              this.$element
                .attr("class", function (a, b) {
                  return b.replace(/\b owl-responsive-\S+/g, "");
                })
                .addClass("owl-responsive-" + d))
          : (e = a.extend({}, this.options)),
          (null === this.settings || this._breakpoint !== d) &&
            (this.trigger("change", {
              property: { name: "settings", value: e },
            }),
            (this._breakpoint = d),
            (this.settings = e),
            this.invalidate("settings"),
            this.trigger("changed", {
              property: { name: "settings", value: this.settings },
            }));
      }),
      (e.prototype.optionsLogic = function () {
        this.$element.toggleClass("owl-center", this.settings.center),
          this.settings.loop &&
            this._items.length < this.settings.items &&
            (this.settings.loop = !1),
          this.settings.autoWidth &&
            ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", { content: b });
        return (
          c.data ||
            (c.data = a("<" + this.settings.itemElement + "/>")
              .addClass(this.settings.itemClass)
              .append(b)),
          this.trigger("prepared", { content: c.data }),
          c.data
        );
      }),
      (e.prototype.update = function () {
        for (
          var b = 0,
            c = this._pipe.length,
            d = a.proxy(function (a) {
              return this[a];
            }, this._invalidated),
            e = {};
          c > b;

        )
          (this._invalidated.all ||
            a.grep(this._pipe[b].filter, d).length > 0) &&
            this._pipe[b].run(e),
            b++;
        this._invalidated = {};
      }),
      (e.prototype.width = function (a) {
        switch ((a = a || e.Width.Default)) {
          case e.Width.Inner:
          case e.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (e.prototype.refresh = function () {
        if (0 === this._items.length) return !1;
        new Date().getTime();
        this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$stage.addClass("owl-refresh"),
          this.update(),
          this.$stage.removeClass("owl-refresh"),
          (this.state.orientation = b.orientation),
          this.watchVisibility(),
          this.trigger("refreshed");
      }),
      (e.prototype.eventsCall = function () {
        (this.e._onDragStart = a.proxy(function (a) {
          this.onDragStart(a);
        }, this)),
          (this.e._onDragMove = a.proxy(function (a) {
            this.onDragMove(a);
          }, this)),
          (this.e._onDragEnd = a.proxy(function (a) {
            this.onDragEnd(a);
          }, this)),
          (this.e._onResize = a.proxy(function (a) {
            this.onResize(a);
          }, this)),
          (this.e._transitionEnd = a.proxy(function (a) {
            this.transitionEnd(a);
          }, this)),
          (this.e._preventClick = a.proxy(function (a) {
            this.preventClick(a);
          }, this));
      }),
      (e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer),
          (this.resizeTimer = b.setTimeout(
            this.e._onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (e.prototype.onResize = function () {
        return this._items.length
          ? this._width === this.$element.width()
            ? !1
            : this.trigger("resize").isDefaultPrevented()
            ? !1
            : ((this._width = this.$element.width()),
              this.invalidate("width"),
              this.refresh(),
              void this.trigger("resized"))
          : !1;
      }),
      (e.prototype.eventsRouter = function (a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b
          ? this.onDragStart(a)
          : "mousemove" === b || "touchmove" === b
          ? this.onDragMove(a)
          : "mouseup" === b || "touchend" === b
          ? this.onDragEnd(a)
          : "touchcancel" === b && this.onDragEnd(a);
      }),
      (e.prototype.internalEvents = function () {
        var c = (k(), l());
        this.settings.mouseDrag
          ? (this.$stage.on(
              "mousedown",
              a.proxy(function (a) {
                this.eventsRouter(a);
              }, this)
            ),
            this.$stage.on("dragstart", function () {
              return !1;
            }),
            (this.$stage.get(0).onselectstart = function () {
              return !1;
            }))
          : this.$element.addClass("owl-text-select-on"),
          this.settings.touchDrag &&
            !c &&
            this.$stage.on(
              "touchstart touchcancel",
              a.proxy(function (a) {
                this.eventsRouter(a);
              }, this)
            ),
          this.transitionEndVendor &&
            this.on(
              this.$stage.get(0),
              this.transitionEndVendor,
              this.e._transitionEnd,
              !1
            ),
          this.settings.responsive !== !1 &&
            this.on(b, "resize", a.proxy(this.onThrottledResize, this));
      }),
      (e.prototype.onDragStart = function (d) {
        var e, g, h, i;
        if (
          ((e = d.originalEvent || d || b.event),
          3 === e.which || this.state.isTouch)
        )
          return !1;
        if (
          ("mousedown" === e.type && this.$stage.addClass("owl-grab"),
          this.trigger("drag"),
          (this.drag.startTime = new Date().getTime()),
          this.speed(0),
          (this.state.isTouch = !0),
          (this.state.isScrolling = !1),
          (this.state.isSwiping = !1),
          (this.drag.distance = 0),
          (g = f(e).x),
          (h = f(e).y),
          (this.drag.offsetX = this.$stage.position().left),
          (this.drag.offsetY = this.$stage.position().top),
          this.settings.rtl &&
            (this.drag.offsetX =
              this.$stage.position().left +
              this.$stage.width() -
              this.width() +
              this.settings.margin),
          this.state.inMotion && this.support3d)
        )
          (i = this.getTransformProperty()),
            (this.drag.offsetX = i),
            this.animate(i),
            (this.state.inMotion = !0);
        else if (this.state.inMotion && !this.support3d)
          return (this.state.inMotion = !1), !1;
        (this.drag.startX = g - this.drag.offsetX),
          (this.drag.startY = h - this.drag.offsetY),
          (this.drag.start = g - this.drag.startX),
          (this.drag.targetEl = e.target || e.srcElement),
          (this.drag.updatedX = this.drag.start),
          ("IMG" === this.drag.targetEl.tagName ||
            "A" === this.drag.targetEl.tagName) &&
            (this.drag.targetEl.draggable = !1),
          a(c).on(
            "mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",
            a.proxy(function (a) {
              this.eventsRouter(a);
            }, this)
          );
      }),
      (e.prototype.onDragMove = function (a) {
        var c, e, g, h, i, j;
        this.state.isTouch &&
          (this.state.isScrolling ||
            ((c = a.originalEvent || a || b.event),
            (e = f(c).x),
            (g = f(c).y),
            (this.drag.currentX = e - this.drag.startX),
            (this.drag.currentY = g - this.drag.startY),
            (this.drag.distance = this.drag.currentX - this.drag.offsetX),
            this.drag.distance < 0
              ? (this.state.direction = this.settings.rtl ? "right" : "left")
              : this.drag.distance > 0 &&
                (this.state.direction = this.settings.rtl ? "left" : "right"),
            this.settings.loop
              ? this.op(
                  this.drag.currentX,
                  ">",
                  this.coordinates(this.minimum())
                ) && "right" === this.state.direction
                ? (this.drag.currentX -=
                    (this.settings.center && this.coordinates(0)) -
                    this.coordinates(this._items.length))
                : this.op(
                    this.drag.currentX,
                    "<",
                    this.coordinates(this.maximum())
                  ) &&
                  "left" === this.state.direction &&
                  (this.drag.currentX +=
                    (this.settings.center && this.coordinates(0)) -
                    this.coordinates(this._items.length))
              : ((h = this.coordinates(
                  this.settings.rtl ? this.maximum() : this.minimum()
                )),
                (i = this.coordinates(
                  this.settings.rtl ? this.minimum() : this.maximum()
                )),
                (j = this.settings.pullDrag ? this.drag.distance / 5 : 0),
                (this.drag.currentX = Math.max(
                  Math.min(this.drag.currentX, h + j),
                  i + j
                ))),
            (this.drag.distance > 8 || this.drag.distance < -8) &&
              (c.preventDefault !== d
                ? c.preventDefault()
                : (c.returnValue = !1),
              (this.state.isSwiping = !0)),
            (this.drag.updatedX = this.drag.currentX),
            (this.drag.currentY > 16 || this.drag.currentY < -16) &&
              this.state.isSwiping === !1 &&
              ((this.state.isScrolling = !0),
              (this.drag.updatedX = this.drag.start)),
            this.animate(this.drag.updatedX)));
      }),
      (e.prototype.onDragEnd = function (b) {
        var d, e, f;
        if (this.state.isTouch) {
          if (
            ("mouseup" === b.type && this.$stage.removeClass("owl-grab"),
            this.trigger("dragged"),
            this.drag.targetEl.removeAttribute("draggable"),
            (this.state.isTouch = !1),
            (this.state.isScrolling = !1),
            (this.state.isSwiping = !1),
            0 === this.drag.distance && this.state.inMotion !== !0)
          )
            return (this.state.inMotion = !1), !1;
          (this.drag.endTime = new Date().getTime()),
            (d = this.drag.endTime - this.drag.startTime),
            (e = Math.abs(this.drag.distance)),
            (e > 3 || d > 300) && this.removeClick(this.drag.targetEl),
            (f = this.closest(this.drag.updatedX)),
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(f),
            this.invalidate("position"),
            this.update(),
            this.settings.pullDrag ||
              this.drag.updatedX !== this.coordinates(f) ||
              this.transitionEnd(),
            (this.drag.distance = 0),
            a(c).off(".owl.dragEvents");
        }
      }),
      (e.prototype.removeClick = function (c) {
        (this.drag.targetEl = c),
          a(c).on("click.preventClick", this.e._preventClick),
          b.setTimeout(function () {
            a(c).off("click.preventClick");
          }, 300);
      }),
      (e.prototype.preventClick = function (b) {
        b.preventDefault ? b.preventDefault() : (b.returnValue = !1),
          b.stopPropagation && b.stopPropagation(),
          a(b.target).off("click.preventClick");
      }),
      (e.prototype.getTransformProperty = function () {
        var a, c;
        return (
          (a = b
            .getComputedStyle(this.$stage.get(0), null)
            .getPropertyValue(this.vendorName + "transform")),
          (a = a.replace(/matrix(3d)?\(|\)/g, "").split(",")),
          (c = 16 === a.length),
          c !== !0 ? a[4] : a[12]
        );
      }),
      (e.prototype.closest = function (b) {
        var c = -1,
          d = 30,
          e = this.width(),
          f = this.coordinates();
        return (
          this.settings.freeDrag ||
            a.each(
              f,
              a.proxy(function (a, g) {
                return (
                  b > g - d && g + d > b
                    ? (c = a)
                    : this.op(b, "<", g) &&
                      this.op(b, ">", f[a + 1] || g - e) &&
                      (c = "left" === this.state.direction ? a + 1 : a),
                  -1 === c
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(b, ">", f[this.minimum()])
              ? (c = b = this.minimum())
              : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())),
          c
        );
      }),
      (e.prototype.animate = function (b) {
        this.trigger("translate"),
          (this.state.inMotion = this.speed() > 0),
          this.support3d
            ? this.$stage.css({
                transform: "translate3d(" + b + "px,0px, 0px)",
                transition: this.speed() / 1e3 + "s",
              })
            : this.state.isTouch
            ? this.$stage.css({ left: b + "px" })
            : this.$stage.animate(
                { left: b },
                this.speed() / 1e3,
                this.settings.fallbackEasing,
                a.proxy(function () {
                  this.state.inMotion && this.transitionEnd();
                }, this)
              );
      }),
      (e.prototype.current = function (a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (((a = this.normalize(a)), this._current !== a)) {
          var b = this.trigger("change", {
            property: { name: "position", value: a },
          });
          b.data !== d && (a = this.normalize(b.data)),
            (this._current = a),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current },
            });
        }
        return this._current;
      }),
      (e.prototype.invalidate = function (a) {
        this._invalidated[a] = !0;
      }),
      (e.prototype.reset = function (a) {
        (a = this.normalize(a)),
          a !== d &&
            ((this._speed = 0),
            (this._current = a),
            this.suppress(["translate", "translated"]),
            this.animate(this.coordinates(a)),
            this.release(["translate", "translated"]));
      }),
      (e.prototype.normalize = function (b, c) {
        var e = c
          ? this._items.length
          : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e
          ? d
          : (b = this._clones.length
              ? ((b % e) + e) % e
              : Math.max(this.minimum(c), Math.min(this.maximum(c), b)));
      }),
      (e.prototype.relative = function (a) {
        return (
          (a = this.normalize(a)),
          (a -= this._clones.length / 2),
          this.normalize(a, !0)
        );
      }),
      (e.prototype.maximum = function (a) {
        var b,
          c,
          d,
          e = 0,
          f = this.settings;
        if (a) return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
          if (f.loop || f.center) b = this._items.length + f.items;
          else {
            if (!f.autoWidth && !f.merge)
              throw "Can not detect maximum absolute position.";
            for (
              revert = f.rtl ? 1 : -1,
                c = this.$stage.width() - this.$element.width();
              (d = this.coordinates(e)) && !(d * revert >= c);

            )
              b = ++e;
          }
        else b = this._items.length - f.items;
        return b;
      }),
      (e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2;
      }),
      (e.prototype.items = function (a) {
        return a === d
          ? this._items.slice()
          : ((a = this.normalize(a, !0)), this._items[a]);
      }),
      (e.prototype.mergers = function (a) {
        return a === d
          ? this._mergers.slice()
          : ((a = this.normalize(a, !0)), this._mergers[a]);
      }),
      (e.prototype.clones = function (b) {
        var c = this._clones.length / 2,
          e = c + this._items.length,
          f = function (a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
          };
        return b === d
          ? a.map(this._clones, function (a, b) {
              return f(b);
            })
          : a.map(this._clones, function (a, c) {
              return a === b ? f(c) : null;
            });
      }),
      (e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed;
      }),
      (e.prototype.coordinates = function (b) {
        var c = null;
        return b === d
          ? a.map(
              this._coordinates,
              a.proxy(function (a, b) {
                return this.coordinates(b);
              }, this)
            )
          : (this.settings.center
              ? ((c = this._coordinates[b]),
                (c +=
                  ((this.width() - c + (this._coordinates[b - 1] || 0)) / 2) *
                  (this.settings.rtl ? -1 : 1)))
              : (c = this._coordinates[b - 1] || 0),
            c);
      }),
      (e.prototype.duration = function (a, b, c) {
        return (
          Math.min(Math.max(Math.abs(b - a), 1), 6) *
          Math.abs(c || this.settings.smartSpeed)
        );
      }),
      (e.prototype.to = function (c, d) {
        if (this.settings.loop) {
          var e = c - this.relative(this.current()),
            f = this.current(),
            g = this.current(),
            h = this.current() + e,
            i = 0 > g - h ? !0 : !1,
            j = this._clones.length + this._items.length;
          h < this.settings.items && i === !1
            ? ((f = g + this._items.length), this.reset(f))
            : h >= j - this.settings.items &&
              i === !0 &&
              ((f = g - this._items.length), this.reset(f)),
            b.clearTimeout(this.e._goToLoop),
            (this.e._goToLoop = b.setTimeout(
              a.proxy(function () {
                this.speed(this.duration(this.current(), f + e, d)),
                  this.current(f + e),
                  this.update();
              }, this),
              30
            ));
        } else
          this.speed(this.duration(this.current(), c, d)),
            this.current(c),
            this.update();
      }),
      (e.prototype.next = function (a) {
        (a = a || !1), this.to(this.relative(this.current()) + 1, a);
      }),
      (e.prototype.prev = function (a) {
        (a = a || !1), this.to(this.relative(this.current()) - 1, a);
      }),
      (e.prototype.transitionEnd = function (a) {
        return a !== d &&
          (a.stopPropagation(),
          (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
          ? !1
          : ((this.state.inMotion = !1), void this.trigger("translated"));
      }),
      (e.prototype.viewport = function () {
        var d;
        if (this.options.responsiveBaseElement !== b)
          d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
          if (!c.documentElement || !c.documentElement.clientWidth)
            throw "Can not detect viewport width.";
          d = c.documentElement.clientWidth;
        }
        return d;
      }),
      (e.prototype.replace = function (b) {
        this.$stage.empty(),
          (this._items = []),
          b && (b = b instanceof jQuery ? b : a(b)),
          this.settings.nestedItemSelector &&
            (b = b.find("." + this.settings.nestedItemSelector)),
          b
            .filter(function () {
              return 1 === this.nodeType;
            })
            .each(
              a.proxy(function (a, b) {
                (b = this.prepare(b)),
                  this.$stage.append(b),
                  this._items.push(b),
                  this._mergers.push(
                    1 *
                      b
                        .find("[data-merge]")
                        .andSelf("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            a.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (e.prototype.add = function (a, b) {
        (b = b === d ? this._items.length : this.normalize(b, !0)),
          this.trigger("add", { content: a, position: b }),
          0 === this._items.length || b === this._items.length
            ? (this.$stage.append(a),
              this._items.push(a),
              this._mergers.push(
                1 *
                  a
                    .find("[data-merge]")
                    .andSelf("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[b].before(a),
              this._items.splice(b, 0, a),
              this._mergers.splice(
                b,
                0,
                1 *
                  a
                    .find("[data-merge]")
                    .andSelf("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this.invalidate("items"),
          this.trigger("added", { content: a, position: b });
      }),
      (e.prototype.remove = function (a) {
        (a = this.normalize(a, !0)),
          a !== d &&
            (this.trigger("remove", { content: this._items[a], position: a }),
            this._items[a].remove(),
            this._items.splice(a, 1),
            this._mergers.splice(a, 1),
            this.invalidate("items"),
            this.trigger("removed", { content: null, position: a }));
      }),
      (e.prototype.addTriggerableEvents = function () {
        var b = a.proxy(function (b, c) {
          return a.proxy(function (a) {
            a.relatedTarget !== this &&
              (this.suppress([c]),
              b.apply(this, [].slice.call(arguments, 1)),
              this.release([c]));
          }, this);
        }, this);
        a.each(
          {
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove,
          },
          a.proxy(function (a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"));
          }, this)
        );
      }),
      (e.prototype.watchVisibility = function () {
        function c(a) {
          return a.offsetWidth > 0 && a.offsetHeight > 0;
        }
        function d() {
          c(this.$element.get(0)) &&
            (this.$element.removeClass("owl-hidden"),
            this.refresh(),
            b.clearInterval(this.e._checkVisibile));
        }
        c(this.$element.get(0)) ||
          (this.$element.addClass("owl-hidden"),
          b.clearInterval(this.e._checkVisibile),
          (this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500)));
      }),
      (e.prototype.preloadAutoWidthImages = function (b) {
        var c, d, e, f;
        (c = 0),
          (d = this),
          b.each(function (g, h) {
            (e = a(h)),
              (f = new Image()),
              (f.onload = function () {
                c++,
                  e.attr("src", f.src),
                  e.css("opacity", 1),
                  c >= b.length &&
                    ((d.state.imagesLoaded = !0), d.initialize());
              }),
              (f.src =
                e.attr("src") ||
                e.attr("data-src") ||
                e.attr("data-src-retina"));
          });
      }),
      (e.prototype.destroy = function () {
        this.$element.hasClass(this.settings.themeClass) &&
          this.$element.removeClass(this.settings.themeClass),
          this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"),
          this.transitionEndVendor &&
            this.off(
              this.$stage.get(0),
              this.transitionEndVendor,
              this.e._transitionEnd
            );
        for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) &&
          (this.$stage.off("mousedown touchstart touchcancel"),
          a(c).off(".owl.dragEvents"),
          (this.$stage.get(0).onselectstart = function () {}),
          this.$stage.off("dragstart", function () {
            return !1;
          })),
          this.$element.off(".owl"),
          this.$stage.children(".cloned").remove(),
          (this.e = null),
          this.$element.removeData("owlCarousel"),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$stage.unwrap();
      }),
      (e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
          case "<":
            return d ? a > c : c > a;
          case ">":
            return d ? c > a : a > c;
          case ">=":
            return d ? c >= a : a >= c;
          case "<=":
            return d ? a >= c : c >= a;
        }
      }),
      (e.prototype.on = function (a, b, c, d) {
        a.addEventListener
          ? a.addEventListener(b, c, d)
          : a.attachEvent && a.attachEvent("on" + b, c);
      }),
      (e.prototype.off = function (a, b, c, d) {
        a.removeEventListener
          ? a.removeEventListener(b, c, d)
          : a.detachEvent && a.detachEvent("on" + b, c);
      }),
      (e.prototype.trigger = function (b, c, d) {
        var e = { item: { count: this._items.length, index: this.current() } },
          f = a.camelCase(
            a
              .grep(["on", b, d], function (a) {
                return a;
              })
              .join("-")
              .toLowerCase()
          ),
          g = a.Event(
            [b, "owl", d || "carousel"].join(".").toLowerCase(),
            a.extend({ relatedTarget: this }, e, c)
          );
        return (
          this._supress[b] ||
            (a.each(this._plugins, function (a, b) {
              b.onTrigger && b.onTrigger(g);
            }),
            this.$element.trigger(g),
            this.settings &&
              "function" == typeof this.settings[f] &&
              this.settings[f].apply(this, g)),
          g
        );
      }),
      (e.prototype.suppress = function (b) {
        a.each(
          b,
          a.proxy(function (a, b) {
            this._supress[b] = !0;
          }, this)
        );
      }),
      (e.prototype.release = function (b) {
        a.each(
          b,
          a.proxy(function (a, b) {
            delete this._supress[b];
          }, this)
        );
      }),
      (e.prototype.browserSupport = function () {
        if (((this.support3d = j()), this.support3d)) {
          this.transformVendor = i();
          var a = [
            "transitionend",
            "webkitTransitionEnd",
            "transitionend",
            "oTransitionEnd",
          ];
          (this.transitionEndVendor = a[h()]),
            (this.vendorName = this.transformVendor.replace(/Transform/i, "")),
            (this.vendorName =
              "" !== this.vendorName
                ? "-" + this.vendorName.toLowerCase() + "-"
                : "");
        }
        this.state.orientation = b.orientation;
      }),
      (a.fn.owlCarousel = function (b) {
        return this.each(function () {
          a(this).data("owlCarousel") ||
            a(this).data("owlCarousel", new e(this, b));
        });
      }),
      (a.fn.owlCarousel.Constructor = e);
  })(window.Zepto || window.jQuery, window, document),
    (function (a, b) {
      var c = function (b) {
        (this._core = b),
          (this._loaded = []),
          (this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function (
              b
            ) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              )
                for (
                  var c = this._core.settings,
                    d = (c.center && Math.ceil(c.items / 2)) || c.items,
                    e = (c.center && -1 * d) || 0,
                    f =
                      ((b.property && b.property.value) ||
                        this._core.current()) + e,
                    g = this._core.clones().length,
                    h = a.proxy(function (a, b) {
                      this.load(b);
                    }, this);
                  e++ < d;

                )
                  this.load(g / 2 + this._core.relative(f)),
                    g && a.each(this._core.clones(this._core.relative(f++)), h);
            },
            this),
          }),
          (this._core.options = a.extend({}, c.Defaults, this._core.options)),
          this._core.$element.on(this._handlers);
      };
      (c.Defaults = { lazyLoad: !1 }),
        (c.prototype.load = function (c) {
          var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
          !e ||
            a.inArray(d.get(0), this._loaded) > -1 ||
            (e.each(
              a.proxy(function (c, d) {
                var e,
                  f = a(d),
                  g =
                    (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                    f.attr("data-src");
                this._core.trigger("load", { element: f, url: g }, "lazy"),
                  f.is("img")
                    ? f
                        .one(
                          "load.owl.lazy",
                          a.proxy(function () {
                            f.css("opacity", 1),
                              this._core.trigger(
                                "loaded",
                                { element: f, url: g },
                                "lazy"
                              );
                          }, this)
                        )
                        .attr("src", g)
                    : ((e = new Image()),
                      (e.onload = a.proxy(function () {
                        f.css({
                          "background-image": "url(" + g + ")",
                          opacity: "1",
                        }),
                          this._core.trigger(
                            "loaded",
                            { element: f, url: g },
                            "lazy"
                          );
                      }, this)),
                      (e.src = g));
              }, this)
            ),
            this._loaded.push(d.get(0)));
        }),
        (c.prototype.destroy = function () {
          var a, b;
          for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
          for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null);
        }),
        (a.fn.owlCarousel.Constructor.Plugins.Lazy = c);
    })(window.Zepto || window.jQuery, window, document),
    (function (a) {
      var b = function (c) {
        (this._core = c),
          (this._handlers = {
            "initialized.owl.carousel": a.proxy(function () {
              this._core.settings.autoHeight && this.update();
            }, this),
            "changed.owl.carousel": a.proxy(function (a) {
              this._core.settings.autoHeight &&
                "position" == a.property.name &&
                this.update();
            }, this),
            "loaded.owl.lazy": a.proxy(function (a) {
              this._core.settings.autoHeight &&
                a.element.closest("." + this._core.settings.itemClass) ===
                  this._core.$stage.children().eq(this._core.current()) &&
                this.update();
            }, this),
          }),
          (this._core.options = a.extend({}, b.Defaults, this._core.options)),
          this._core.$element.on(this._handlers);
      };
      (b.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
        (b.prototype.update = function () {
          this._core.$stage
            .parent()
            .height(
              this._core.$stage.children().eq(this._core.current()).height()
            )
            .addClass(this._core.settings.autoHeightClass);
        }),
        (b.prototype.destroy = function () {
          var a, b;
          for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
          for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null);
        }),
        (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c) {
      var d = function (b) {
        (this._core = b),
          (this._videos = {}),
          (this._playing = null),
          (this._fullscreen = !1),
          (this._handlers = {
            "resize.owl.carousel": a.proxy(function (a) {
              this._core.settings.video &&
                !this.isInFullScreen() &&
                a.preventDefault();
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
              this._playing && this.stop();
            }, this),
            "prepared.owl.carousel": a.proxy(function (b) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }, this),
          }),
          (this._core.options = a.extend({}, d.Defaults, this._core.options)),
          this._core.$element.on(this._handlers),
          this._core.$element.on(
            "click.owl.video",
            ".owl-video-play-icon",
            a.proxy(function (a) {
              this.play(a);
            }, this)
          );
      };
      (d.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
        (d.prototype.fetch = function (a, b) {
          var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
          if (!g) throw new Error("Missing video URL.");
          if (
            ((d = g.match(
              /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
            )),
            d[3].indexOf("youtu") > -1)
          )
            c = "youtube";
          else {
            if (!(d[3].indexOf("vimeo") > -1))
              throw new Error("Video URL not supported.");
            c = "vimeo";
          }
          (d = d[6]),
            (this._videos[g] = { type: c, id: d, width: e, height: f }),
            b.attr("data-video", g),
            this.thumbnail(a, this._videos[g]);
        }),
        (d.prototype.thumbnail = function (b, c) {
          var d,
            e,
            f,
            g =
              c.width && c.height
                ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"'
                : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function (a) {
              (e = '<div class="owl-video-play-icon"></div>'),
                (d = k.lazyLoad
                  ? '<div class="owl-video-tn ' +
                    j +
                    '" ' +
                    i +
                    '="' +
                    a +
                    '"></div>'
                  : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                    a +
                    ')"></div>'),
                b.after(d),
                b.after(e);
            };
          return (
            b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
            this._core.settings.lazyLoad &&
              ((i = "data-src"), (j = "owl-lazy")),
            h.length
              ? (l(h.attr(i)), h.remove(), !1)
              : void ("youtube" === c.type
                  ? ((f =
                      "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg"),
                    l(f))
                  : "vimeo" === c.type &&
                    a.ajax({
                      type: "GET",
                      url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
                      jsonp: "callback",
                      dataType: "jsonp",
                      success: function (a) {
                        (f = a[0].thumbnail_large), l(f);
                      },
                    }))
          );
        }),
        (d.prototype.stop = function () {
          this._core.trigger("stop", null, "video"),
            this._playing.find(".owl-video-frame").remove(),
            this._playing.removeClass("owl-video-playing"),
            (this._playing = null);
        }),
        (d.prototype.play = function (b) {
          this._core.trigger("play", null, "video"),
            this._playing && this.stop();
          var c,
            d,
            e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height();
          "youtube" === g.type
            ? (c =
                '<iframe width="' +
                h +
                '" height="' +
                i +
                '" src="http://www.youtube.com/embed/' +
                g.id +
                "?autoplay=1&v=" +
                g.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === g.type &&
              (c =
                '<iframe src="http://player.vimeo.com/video/' +
                g.id +
                '?autoplay=1" width="' +
                h +
                '" height="' +
                i +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
            f.addClass("owl-video-playing"),
            (this._playing = f),
            (d = a(
              '<div style="height:' +
                i +
                "px; width:" +
                h +
                'px" class="owl-video-frame">' +
                c +
                "</div>"
            )),
            e.after(d);
        }),
        (d.prototype.isInFullScreen = function () {
          var d =
            c.fullscreenElement ||
            c.mozFullScreenElement ||
            c.webkitFullscreenElement;
          return (
            d &&
              a(d).parent().hasClass("owl-video-frame") &&
              (this._core.speed(0), (this._fullscreen = !0)),
            d && this._fullscreen && this._playing
              ? !1
              : this._fullscreen
              ? ((this._fullscreen = !1), !1)
              : this._playing && this._core.state.orientation !== b.orientation
              ? ((this._core.state.orientation = b.orientation), !1)
              : !0
          );
        }),
        (d.prototype.destroy = function () {
          var a, b;
          this._core.$element.off("click.owl.video");
          for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
          for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null);
        }),
        (a.fn.owlCarousel.Constructor.Plugins.Video = d);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
      var e = function (b) {
        (this.core = b),
          (this.core.options = a.extend({}, e.Defaults, this.core.options)),
          (this.swapping = !0),
          (this.previous = d),
          (this.next = d),
          (this.handlers = {
            "change.owl.carousel": a.proxy(function (a) {
              "position" == a.property.name &&
                ((this.previous = this.core.current()),
                (this.next = a.property.value));
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
              a.proxy(function (a) {
                this.swapping = "translated" == a.type;
              }, this),
            "translate.owl.carousel": a.proxy(function () {
              this.swapping &&
                (this.core.options.animateOut || this.core.options.animateIn) &&
                this.swap();
            }, this),
          }),
          this.core.$element.on(this.handlers);
      };
      (e.Defaults = { animateOut: !1, animateIn: !1 }),
        (e.prototype.swap = function () {
          if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b,
              c = a.proxy(this.clear, this),
              d = this.core.$stage.children().eq(this.previous),
              e = this.core.$stage.children().eq(this.next),
              f = this.core.settings.animateIn,
              g = this.core.settings.animateOut;
            this.core.current() !== this.previous &&
              (g &&
                ((b =
                  this.core.coordinates(this.previous) -
                  this.core.coordinates(this.next)),
                d
                  .css({ left: b + "px" })
                  .addClass("animated owl-animated-out")
                  .addClass(g)
                  .one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    c
                  )),
              f &&
                e
                  .addClass("animated owl-animated-in")
                  .addClass(f)
                  .one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    c
                  ));
          }
        }),
        (e.prototype.clear = function (b) {
          a(b.target)
            .css({ left: "" })
            .removeClass("animated owl-animated-out owl-animated-in")
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut),
            this.core.transitionEnd();
        }),
        (e.prototype.destroy = function () {
          var a, b;
          for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
          for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null);
        }),
        (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c) {
      var d = function (b) {
        (this.core = b),
          (this.core.options = a.extend({}, d.Defaults, this.core.options)),
          (this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(
              function () {
                this.autoplay();
              },
              this
            ),
            "play.owl.autoplay": a.proxy(function (a, b, c) {
              this.play(b, c);
            }, this),
            "stop.owl.autoplay": a.proxy(function () {
              this.stop();
            }, this),
            "mouseover.owl.autoplay": a.proxy(function () {
              this.core.settings.autoplayHoverPause && this.pause();
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function () {
              this.core.settings.autoplayHoverPause && this.autoplay();
            }, this),
          }),
          this.core.$element.on(this.handlers);
      };
      (d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1,
      }),
        (d.prototype.autoplay = function () {
          this.core.settings.autoplay && !this.core.state.videoPlay
            ? (b.clearInterval(this.interval),
              (this.interval = b.setInterval(
                a.proxy(function () {
                  this.play();
                }, this),
                this.core.settings.autoplayTimeout
              )))
            : b.clearInterval(this.interval);
        }),
        (d.prototype.play = function () {
          return c.hidden === !0 ||
            this.core.state.isTouch ||
            this.core.state.isScrolling ||
            this.core.state.isSwiping ||
            this.core.state.inMotion
            ? void 0
            : this.core.settings.autoplay === !1
            ? void b.clearInterval(this.interval)
            : void this.core.next(this.core.settings.autoplaySpeed);
        }),
        (d.prototype.stop = function () {
          b.clearInterval(this.interval);
        }),
        (d.prototype.pause = function () {
          b.clearInterval(this.interval);
        }),
        (d.prototype.destroy = function () {
          var a, c;
          b.clearInterval(this.interval);
          for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
          for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null);
        }),
        (a.fn.owlCarousel.Constructor.Plugins.autoplay = d);
    })(window.Zepto || window.jQuery, window, document),
    (function (a) {
      "use strict";
      var b = function (c) {
        (this._core = c),
          (this._initialized = !1),
          (this._pages = []),
          (this._controls = {}),
          (this._templates = []),
          (this.$element = this._core.$element),
          (this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to,
          }),
          (this._handlers = {
            "prepared.owl.carousel": a.proxy(function (b) {
              this._core.settings.dotsData &&
                this._templates.push(
                  a(b.content)
                    .find("[data-dot]")
                    .andSelf("[data-dot]")
                    .attr("data-dot")
                );
            }, this),
            "add.owl.carousel": a.proxy(function (b) {
              this._core.settings.dotsData &&
                this._templates.splice(
                  b.position,
                  0,
                  a(b.content)
                    .find("[data-dot]")
                    .andSelf("[data-dot]")
                    .attr("data-dot")
                );
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
              this._core.settings.dotsData &&
                this._templates.splice(a.position, 1);
            }, this),
            "change.owl.carousel": a.proxy(function (a) {
              if (
                "position" == a.property.name &&
                !this._core.state.revert &&
                !this._core.settings.loop &&
                this._core.settings.navRewind
              ) {
                var b = this._core.current(),
                  c = this._core.maximum(),
                  d = this._core.minimum();
                a.data =
                  a.property.value > c
                    ? b >= c
                      ? d
                      : c
                    : a.property.value < d
                    ? c
                    : a.property.value;
              }
            }, this),
            "changed.owl.carousel": a.proxy(function (a) {
              "position" == a.property.name && this.draw();
            }, this),
            "refreshed.owl.carousel": a.proxy(function () {
              this._initialized ||
                (this.initialize(), (this._initialized = !0)),
                this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation");
            }, this),
          }),
          (this._core.options = a.extend({}, b.Defaults, this._core.options)),
          this.$element.on(this._handlers);
      };
      (b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls",
      }),
        (b.prototype.initialize = function () {
          var b,
            c,
            d = this._core.settings;
          d.dotsData ||
            (this._templates = [
              a("<div>")
                .addClass(d.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
            (d.navContainer && d.dotsContainer) ||
              (this._controls.$container = a("<div>")
                .addClass(d.controlsClass)
                .appendTo(this.$element)),
            (this._controls.$indicators = d.dotsContainer
              ? a(d.dotsContainer)
              : a("<div>")
                  .hide()
                  .addClass(d.dotsClass)
                  .appendTo(this._controls.$container)),
            this._controls.$indicators.on(
              "click",
              "div",
              a.proxy(function (b) {
                var c = a(b.target).parent().is(this._controls.$indicators)
                  ? a(b.target).index()
                  : a(b.target).parent().index();
                b.preventDefault(), this.to(c, d.dotsSpeed);
              }, this)
            ),
            (b = d.navContainer
              ? a(d.navContainer)
              : a("<div>")
                  .addClass(d.navContainerClass)
                  .prependTo(this._controls.$container)),
            (this._controls.$next = a("<" + d.navElement + ">")),
            (this._controls.$previous = this._controls.$next.clone()),
            this._controls.$previous
              .addClass(d.navClass[0])
              .html(d.navText[0])
              .hide()
              .prependTo(b)
              .on(
                "click",
                a.proxy(function () {
                  this.prev(d.navSpeed);
                }, this)
              ),
            this._controls.$next
              .addClass(d.navClass[1])
              .html(d.navText[1])
              .hide()
              .appendTo(b)
              .on(
                "click",
                a.proxy(function () {
                  this.next(d.navSpeed);
                }, this)
              );
          for (c in this._overrides) this._core[c] = a.proxy(this[c], this);
        }),
        (b.prototype.destroy = function () {
          var a, b, c, d;
          for (a in this._handlers) this.$element.off(a, this._handlers[a]);
          for (b in this._controls) this._controls[b].remove();
          for (d in this.overides) this._core[d] = this._overrides[d];
          for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null);
        }),
        (b.prototype.update = function () {
          var a,
            b,
            c,
            d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g =
              d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
          if (
            ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)),
            d.dots || "page" == d.slideBy)
          )
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)
              (b >= g || 0 === b) &&
                (this._pages.push({ start: a - e, end: a - e + g - 1 }),
                (b = 0),
                ++c),
                (b += this._core.mergers(this._core.relative(a)));
        }),
        (b.prototype.draw = function () {
          var b,
            c,
            d = "",
            e = this._core.settings,
            f =
              (this._core.$stage.children(),
              this._core.relative(this._core.current()));
          if (
            (!e.nav ||
              e.loop ||
              e.navRewind ||
              (this._controls.$previous.toggleClass("disabled", 0 >= f),
              this._controls.$next.toggleClass(
                "disabled",
                f >= this._core.maximum()
              )),
            this._controls.$previous.toggle(e.nav),
            this._controls.$next.toggle(e.nav),
            e.dots)
          ) {
            if (
              ((b =
                this._pages.length -
                this._controls.$indicators.children().length),
              e.dotData && 0 !== b)
            ) {
              for (c = 0; c < this._controls.$indicators.children().length; c++)
                d += this._templates[this._core.relative(c)];
              this._controls.$indicators.html(d);
            } else
              b > 0
                ? ((d = new Array(b + 1).join(this._templates[0])),
                  this._controls.$indicators.append(d))
                : 0 > b &&
                  this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"),
              this._controls.$indicators
                .children()
                .eq(a.inArray(this.current(), this._pages))
                .addClass("active");
          }
          this._controls.$indicators.toggle(e.dots);
        }),
        (b.prototype.onTrigger = function (b) {
          var c = this._core.settings;
          b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size:
              c &&
              (c.center || c.autoWidth || c.dotData
                ? 1
                : c.dotsEach || c.items),
          };
        }),
        (b.prototype.current = function () {
          var b = this._core.relative(this._core.current());
          return a
            .grep(this._pages, function (a) {
              return a.start <= b && a.end >= b;
            })
            .pop();
        }),
        (b.prototype.getPosition = function (b) {
          var c,
            d,
            e = this._core.settings;
          return (
            "page" == e.slideBy
              ? ((c = a.inArray(this.current(), this._pages)),
                (d = this._pages.length),
                b ? ++c : --c,
                (c = this._pages[((c % d) + d) % d].start))
              : ((c = this._core.relative(this._core.current())),
                (d = this._core.items().length),
                b ? (c += e.slideBy) : (c -= e.slideBy)),
            c
          );
        }),
        (b.prototype.next = function (b) {
          a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
        }),
        (b.prototype.prev = function (b) {
          a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
        }),
        (b.prototype.to = function (b, c, d) {
          var e;
          d
            ? a.proxy(this._overrides.to, this._core)(b, c)
            : ((e = this._pages.length),
              a.proxy(this._overrides.to, this._core)(
                this._pages[((b % e) + e) % e].start,
                c
              ));
        }),
        (a.fn.owlCarousel.Constructor.Plugins.Navigation = b);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b) {
      "use strict";
      var c = function (d) {
        (this._core = d),
          (this._hashes = {}),
          (this.$element = this._core.$element),
          (this._handlers = {
            "initialized.owl.carousel": a.proxy(function () {
              "URLHash" == this._core.settings.startPosition &&
                a(b).trigger("hashchange.owl.navigation");
            }, this),
            "prepared.owl.carousel": a.proxy(function (b) {
              var c = a(b.content)
                .find("[data-hash]")
                .andSelf("[data-hash]")
                .attr("data-hash");
              this._hashes[c] = b.content;
            }, this),
          }),
          (this._core.options = a.extend({}, c.Defaults, this._core.options)),
          this.$element.on(this._handlers),
          a(b).on(
            "hashchange.owl.navigation",
            a.proxy(function () {
              var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = (this._hashes[a] && c.index(this._hashes[a])) || 0;
              return a ? void this._core.to(d, !1, !0) : !1;
            }, this)
          );
      };
      (c.Defaults = { URLhashListener: !1 }),
        (c.prototype.destroy = function () {
          var c, d;
          a(b).off("hashchange.owl.navigation");
          for (c in this._handlers)
            this._core.$element.off(c, this._handlers[c]);
          for (d in Object.getOwnPropertyNames(this))
            "function" != typeof this[d] && (this[d] = null);
        }),
        (a.fn.owlCarousel.Constructor.Plugins.Hash = c);
    })(window.Zepto || window.jQuery, window, document);

  /*
   * jQuery Waypoints v2.0.3
   */
  (function () {
    var t =
        [].indexOf ||
        function (t) {
          for (var e = 0, n = this.length; e < n; e++) {
            if (e in this && this[e] === t) return e;
          }
          return -1;
        },
      e = [].slice;
    (function (t, e) {
      if (typeof define === "function" && define.amd) {
        return define("waypoints", ["jquery"], function (n) {
          return e(n, t);
        });
      } else {
        return e(t.jQuery, t);
      }
    })(this, function (n, r) {
      var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
      i = n(r);
      c = t.call(r, "ontouchstart") >= 0;
      s = { horizontal: {}, vertical: {} };
      f = 1;
      a = {};
      u = "waypoints-context-id";
      p = "resize.waypoints";
      y = "scroll.waypoints";
      v = 1;
      w = "waypoints-waypoint-ids";
      g = "waypoint";
      m = "waypoints";
      o = (function () {
        function t(t) {
          var e = this;
          this.$element = t;
          this.element = t[0];
          this.didResize = false;
          this.didScroll = false;
          this.id = "context" + f++;
          this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
          this.waypoints = { horizontal: {}, vertical: {} };
          t.data(u, this.id);
          a[this.id] = this;
          t.bind(y, function () {
            var t;
            if (!(e.didScroll || c)) {
              e.didScroll = true;
              t = function () {
                e.doScroll();
                return (e.didScroll = false);
              };
              return r.setTimeout(t, n[m].settings.scrollThrottle);
            }
          });
          t.bind(p, function () {
            var t;
            if (!e.didResize) {
              e.didResize = true;
              t = function () {
                n[m]("refresh");
                return (e.didResize = false);
              };
              return r.setTimeout(t, n[m].settings.resizeThrottle);
            }
          });
        }
        t.prototype.doScroll = function () {
          var t,
            e = this;
          t = {
            horizontal: {
              newScroll: this.$element.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.$element.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
          if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
            n[m]("refresh");
          }
          n.each(t, function (t, r) {
            var i, o, l;
            l = [];
            o = r.newScroll > r.oldScroll;
            i = o ? r.forward : r.backward;
            n.each(e.waypoints[t], function (t, e) {
              var n, i;
              if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                return l.push(e);
              } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                return l.push(e);
              }
            });
            l.sort(function (t, e) {
              return t.offset - e.offset;
            });
            if (!o) {
              l.reverse();
            }
            return n.each(l, function (t, e) {
              if (e.options.continuous || t === l.length - 1) {
                return e.trigger([i]);
              }
            });
          });
          return (this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll,
          });
        };
        t.prototype.refresh = function () {
          var t,
            e,
            r,
            i = this;
          r = n.isWindow(this.element);
          e = this.$element.offset();
          this.doScroll();
          t = {
            horizontal: {
              contextOffset: r ? 0 : e.left,
              contextScroll: r ? 0 : this.oldScroll.x,
              contextDimension: this.$element.width(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: r ? 0 : e.top,
              contextScroll: r ? 0 : this.oldScroll.y,
              contextDimension: r
                ? n[m]("viewportHeight")
                : this.$element.height(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          };
          return n.each(t, function (t, e) {
            return n.each(i.waypoints[t], function (t, r) {
              var i, o, l, s, f;
              i = r.options.offset;
              l = r.offset;
              o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
              if (n.isFunction(i)) {
                i = i.apply(r.element);
              } else if (typeof i === "string") {
                i = parseFloat(i);
                if (r.options.offset.indexOf("%") > -1) {
                  i = Math.ceil((e.contextDimension * i) / 100);
                }
              }
              r.offset = o - e.contextOffset + e.contextScroll - i;
              if ((r.options.onlyOnScroll && l != null) || !r.enabled) {
                return;
              }
              if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                return r.trigger([e.backward]);
              } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                return r.trigger([e.forward]);
              } else if (l === null && e.oldScroll >= r.offset) {
                return r.trigger([e.forward]);
              }
            });
          });
        };
        t.prototype.checkEmpty = function () {
          if (
            n.isEmptyObject(this.waypoints.horizontal) &&
            n.isEmptyObject(this.waypoints.vertical)
          ) {
            this.$element.unbind([p, y].join(" "));
            return delete a[this.id];
          }
        };
        return t;
      })();
      l = (function () {
        function t(t, e, r) {
          var i, o;
          r = n.extend({}, n.fn[g].defaults, r);
          if (r.offset === "bottom-in-view") {
            r.offset = function () {
              var t;
              t = n[m]("viewportHeight");
              if (!n.isWindow(e.element)) {
                t = e.$element.height();
              }
              return t - n(this).outerHeight();
            };
          }
          this.$element = t;
          this.element = t[0];
          this.axis = r.horizontal ? "horizontal" : "vertical";
          this.callback = r.handler;
          this.context = e;
          this.enabled = r.enabled;
          this.id = "waypoints" + v++;
          this.offset = null;
          this.options = r;
          e.waypoints[this.axis][this.id] = this;
          s[this.axis][this.id] = this;
          i = (o = t.data(w)) != null ? o : [];
          i.push(this.id);
          t.data(w, i);
        }
        t.prototype.trigger = function (t) {
          if (!this.enabled) {
            return;
          }
          if (this.callback != null) {
            this.callback.apply(this.element, t);
          }
          if (this.options.triggerOnce) {
            return this.destroy();
          }
        };
        t.prototype.disable = function () {
          return (this.enabled = false);
        };
        t.prototype.enable = function () {
          this.context.refresh();
          return (this.enabled = true);
        };
        t.prototype.destroy = function () {
          delete s[this.axis][this.id];
          delete this.context.waypoints[this.axis][this.id];
          return this.context.checkEmpty();
        };
        t.getWaypointsByElement = function (t) {
          var e, r;
          r = n(t).data(w);
          if (!r) {
            return [];
          }
          e = n.extend({}, s.horizontal, s.vertical);
          return n.map(r, function (t) {
            return e[t];
          });
        };
        return t;
      })();
      d = {
        init: function (t, e) {
          var r;
          if (e == null) {
            e = {};
          }
          if ((r = e.handler) == null) {
            e.handler = t;
          }
          this.each(function () {
            var t, r, i, s;
            t = n(this);
            i = (s = e.context) != null ? s : n.fn[g].defaults.context;
            if (!n.isWindow(i)) {
              i = t.closest(i);
            }
            i = n(i);
            r = a[i.data(u)];
            if (!r) {
              r = new o(i);
            }
            return new l(t, r, e);
          });
          n[m]("refresh");
          return this;
        },
        disable: function () {
          return d._invoke(this, "disable");
        },
        enable: function () {
          return d._invoke(this, "enable");
        },
        destroy: function () {
          return d._invoke(this, "destroy");
        },
        prev: function (t, e) {
          return d._traverse.call(this, t, e, function (t, e, n) {
            if (e > 0) {
              return t.push(n[e - 1]);
            }
          });
        },
        next: function (t, e) {
          return d._traverse.call(this, t, e, function (t, e, n) {
            if (e < n.length - 1) {
              return t.push(n[e + 1]);
            }
          });
        },
        _traverse: function (t, e, i) {
          var o, l;
          if (t == null) {
            t = "vertical";
          }
          if (e == null) {
            e = r;
          }
          l = h.aggregate(e);
          o = [];
          this.each(function () {
            var e;
            e = n.inArray(this, l[t]);
            return i(o, e, l[t]);
          });
          return this.pushStack(o);
        },
        _invoke: function (t, e) {
          t.each(function () {
            var t;
            t = l.getWaypointsByElement(this);
            return n.each(t, function (t, n) {
              n[e]();
              return true;
            });
          });
          return this;
        },
      };
      n.fn[g] = function () {
        var t, r;
        (r = arguments[0]),
          (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
        if (d[r]) {
          return d[r].apply(this, t);
        } else if (n.isFunction(r)) {
          return d.init.apply(this, arguments);
        } else if (n.isPlainObject(r)) {
          return d.init.apply(this, [null, r]);
        } else if (!r) {
          return n.error(
            "jQuery Waypoints needs a callback function or handler option."
          );
        } else {
          return n.error(
            "The " + r + " method does not exist in jQuery Waypoints."
          );
        }
      };
      n.fn[g].defaults = {
        context: r,
        continuous: true,
        enabled: true,
        horizontal: false,
        offset: 0,
        triggerOnce: false,
      };
      h = {
        refresh: function () {
          return n.each(a, function (t, e) {
            return e.refresh();
          });
        },
        viewportHeight: function () {
          var t;
          return (t = r.innerHeight) != null ? t : i.height();
        },
        aggregate: function (t) {
          var e, r, i;
          e = s;
          if (t) {
            e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
          }
          if (!e) {
            return [];
          }
          r = { horizontal: [], vertical: [] };
          n.each(r, function (t, i) {
            n.each(e[t], function (t, e) {
              return i.push(e);
            });
            i.sort(function (t, e) {
              return t.offset - e.offset;
            });
            r[t] = n.map(i, function (t) {
              return t.element;
            });
            return (r[t] = n.unique(r[t]));
          });
          return r;
        },
        above: function (t) {
          if (t == null) {
            t = r;
          }
          return h._filter(t, "vertical", function (t, e) {
            return e.offset <= t.oldScroll.y;
          });
        },
        below: function (t) {
          if (t == null) {
            t = r;
          }
          return h._filter(t, "vertical", function (t, e) {
            return e.offset > t.oldScroll.y;
          });
        },
        left: function (t) {
          if (t == null) {
            t = r;
          }
          return h._filter(t, "horizontal", function (t, e) {
            return e.offset <= t.oldScroll.x;
          });
        },
        right: function (t) {
          if (t == null) {
            t = r;
          }
          return h._filter(t, "horizontal", function (t, e) {
            return e.offset > t.oldScroll.x;
          });
        },
        enable: function () {
          return h._invoke("enable");
        },
        disable: function () {
          return h._invoke("disable");
        },
        destroy: function () {
          return h._invoke("destroy");
        },
        extendFn: function (t, e) {
          return (d[t] = e);
        },
        _invoke: function (t) {
          var e;
          e = n.extend({}, s.vertical, s.horizontal);
          return n.each(e, function (e, n) {
            n[t]();
            return true;
          });
        },
        _filter: function (t, e, r) {
          var i, o;
          i = a[n(t).data(u)];
          if (!i) {
            return [];
          }
          o = [];
          n.each(i.waypoints[e], function (t, e) {
            if (r(i, e)) {
              return o.push(e);
            }
          });
          o.sort(function (t, e) {
            return t.offset - e.offset;
          });
          return n.map(o, function (t) {
            return t.element;
          });
        },
      };
      n[m] = function () {
        var t, n;
        (n = arguments[0]),
          (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
        if (h[n]) {
          return h[n].apply(null, t);
        } else {
          return h.aggregate.call(null, n);
        }
      };
      n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
      return i.load(function () {
        return n[m]("refresh");
      });
    });
  }.call(this));

  /*!
   * Isotope PACKAGED v2.1.0
   * Filter & sort magical layouts
   * http://isotope.metafizzy.co
   */

  (function (t) {
    function e() {}
    function i(t) {
      function i(e) {
        e.prototype.option ||
          (e.prototype.option = function (e) {
            t.isPlainObject(e) &&
              (this.options = t.extend(!0, this.options, e));
          });
      }
      function n(e, i) {
        t.fn[e] = function (n) {
          if ("string" == typeof n) {
            for (
              var s = o.call(arguments, 1), a = 0, u = this.length;
              u > a;
              a++
            ) {
              var p = this[a],
                h = t.data(p, e);
              if (h)
                if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                  var f = h[n].apply(h, s);
                  if (void 0 !== f) return f;
                } else r("no such method '" + n + "' for " + e + " instance");
              else
                r(
                  "cannot call methods on " +
                    e +
                    " prior to initialization; " +
                    "attempted to call '" +
                    n +
                    "'"
                );
            }
            return this;
          }
          return this.each(function () {
            var o = t.data(this, e);
            o
              ? (o.option(n), o._init())
              : ((o = new i(this, n)), t.data(this, e, o));
          });
        };
      }
      if (t) {
        var r =
          "undefined" == typeof console
            ? e
            : function (t) {
                console.error(t);
              };
        return (
          (t.bridget = function (t, e) {
            i(e), n(t, e);
          }),
          t.bridget
        );
      }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery.bridget", ["jquery"], i)
      : "object" == typeof exports
      ? i(require("jquery"))
      : i(t.jQuery);
  })(window),
    (function (t) {
      function e(e) {
        var i = t.event;
        return (i.target = i.target || i.srcElement || e), i;
      }
      var i = document.documentElement,
        o = function () {};
      i.addEventListener
        ? (o = function (t, e, i) {
            t.addEventListener(e, i, !1);
          })
        : i.attachEvent &&
          (o = function (t, i, o) {
            (t[i + o] = o.handleEvent
              ? function () {
                  var i = e(t);
                  o.handleEvent.call(o, i);
                }
              : function () {
                  var i = e(t);
                  o.call(t, i);
                }),
              t.attachEvent("on" + i, t[i + o]);
          });
      var n = function () {};
      i.removeEventListener
        ? (n = function (t, e, i) {
            t.removeEventListener(e, i, !1);
          })
        : i.detachEvent &&
          (n = function (t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
              delete t[e + i];
            } catch (o) {
              t[e + i] = void 0;
            }
          });
      var r = { bind: o, unbind: n };
      "function" == typeof define && define.amd
        ? define("eventie/eventie", r)
        : "object" == typeof exports
        ? (module.exports = r)
        : (t.eventie = r);
    })(this),
    (function (t) {
      function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t));
      }
      function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || o();
      }
      function o() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
          var o = s[t];
          o();
        }
      }
      function n(n) {
        return (
          "complete" === r.readyState
            ? o()
            : (n.bind(r, "DOMContentLoaded", i),
              n.bind(r, "readystatechange", i),
              n.bind(t, "load", i)),
          e
        );
      }
      var r = t.document,
        s = [];
      (e.isReady = !1),
        "function" == typeof define && define.amd
          ? define("doc-ready/doc-ready", ["eventie/eventie"], n)
          : "object" == typeof exports
          ? (module.exports = n(require("eventie")))
          : (t.docReady = n(t.eventie));
    })(window),
    function () {
      function t() {}
      function e(t, e) {
        for (var i = t.length; i--; ) if (t[i].listener === e) return i;
        return -1;
      }
      function i(t) {
        return function () {
          return this[t].apply(this, arguments);
        };
      }
      var o = t.prototype,
        n = this,
        r = n.EventEmitter;
      (o.getListeners = function (t) {
        var e,
          i,
          o = this._getEvents();
        if (t instanceof RegExp) {
          e = {};
          for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i]);
        } else e = o[t] || (o[t] = []);
        return e;
      }),
        (o.flattenListeners = function (t) {
          var e,
            i = [];
          for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
          return i;
        }),
        (o.getListenersAsObject = function (t) {
          var e,
            i = this.getListeners(t);
          return i instanceof Array && ((e = {}), (e[t] = i)), e || i;
        }),
        (o.addListener = function (t, i) {
          var o,
            n = this.getListenersAsObject(t),
            r = "object" == typeof i;
          for (o in n)
            n.hasOwnProperty(o) &&
              -1 === e(n[o], i) &&
              n[o].push(r ? i : { listener: i, once: !1 });
          return this;
        }),
        (o.on = i("addListener")),
        (o.addOnceListener = function (t, e) {
          return this.addListener(t, { listener: e, once: !0 });
        }),
        (o.once = i("addOnceListener")),
        (o.defineEvent = function (t) {
          return this.getListeners(t), this;
        }),
        (o.defineEvents = function (t) {
          for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
          return this;
        }),
        (o.removeListener = function (t, i) {
          var o,
            n,
            r = this.getListenersAsObject(t);
          for (n in r)
            r.hasOwnProperty(n) &&
              ((o = e(r[n], i)), -1 !== o && r[n].splice(o, 1));
          return this;
        }),
        (o.off = i("removeListener")),
        (o.addListeners = function (t, e) {
          return this.manipulateListeners(!1, t, e);
        }),
        (o.removeListeners = function (t, e) {
          return this.manipulateListeners(!0, t, e);
        }),
        (o.manipulateListeners = function (t, e, i) {
          var o,
            n,
            r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
          if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--; ) r.call(this, e, i[o]);
          else
            for (o in e)
              e.hasOwnProperty(o) &&
                (n = e[o]) &&
                ("function" == typeof n
                  ? r.call(this, o, n)
                  : s.call(this, o, n));
          return this;
        }),
        (o.removeEvent = function (t) {
          var e,
            i = typeof t,
            o = this._getEvents();
          if ("string" === i) delete o[t];
          else if (t instanceof RegExp)
            for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
          else delete this._events;
          return this;
        }),
        (o.removeAllListeners = i("removeEvent")),
        (o.emitEvent = function (t, e) {
          var i,
            o,
            n,
            r,
            s = this.getListenersAsObject(t);
          for (n in s)
            if (s.hasOwnProperty(n))
              for (o = s[n].length; o--; )
                (i = s[n][o]),
                  i.once === !0 && this.removeListener(t, i.listener),
                  (r = i.listener.apply(this, e || [])),
                  r === this._getOnceReturnValue() &&
                    this.removeListener(t, i.listener);
          return this;
        }),
        (o.trigger = i("emitEvent")),
        (o.emit = function (t) {
          var e = Array.prototype.slice.call(arguments, 1);
          return this.emitEvent(t, e);
        }),
        (o.setOnceReturnValue = function (t) {
          return (this._onceReturnValue = t), this;
        }),
        (o._getOnceReturnValue = function () {
          return this.hasOwnProperty("_onceReturnValue")
            ? this._onceReturnValue
            : !0;
        }),
        (o._getEvents = function () {
          return this._events || (this._events = {});
        }),
        (t.noConflict = function () {
          return (n.EventEmitter = r), t;
        }),
        "function" == typeof define && define.amd
          ? define("eventEmitter/EventEmitter", [], function () {
              return t;
            })
          : "object" == typeof module && module.exports
          ? (module.exports = t)
          : (n.EventEmitter = t);
    }.call(this),
    (function (t) {
      function e(t) {
        if (t) {
          if ("string" == typeof o[t]) return t;
          t = t.charAt(0).toUpperCase() + t.slice(1);
          for (var e, n = 0, r = i.length; r > n; n++)
            if (((e = i[n] + t), "string" == typeof o[e])) return e;
        }
      }
      var i = "Webkit Moz ms Ms O".split(" "),
        o = document.documentElement.style;
      "function" == typeof define && define.amd
        ? define("get-style-property/get-style-property", [], function () {
            return e;
          })
        : "object" == typeof exports
        ? (module.exports = e)
        : (t.getStyleProperty = e);
    })(window),
    (function (t) {
      function e(t) {
        var e = parseFloat(t),
          i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e;
      }
      function i() {}
      function o() {
        for (
          var t = {
              width: 0,
              height: 0,
              innerWidth: 0,
              innerHeight: 0,
              outerWidth: 0,
              outerHeight: 0,
            },
            e = 0,
            i = s.length;
          i > e;
          e++
        ) {
          var o = s[e];
          t[o] = 0;
        }
        return t;
      }
      function n(i) {
        function n() {
          if (!d) {
            d = !0;
            var o = t.getComputedStyle;
            if (
              ((p = (function () {
                var t = o
                  ? function (t) {
                      return o(t, null);
                    }
                  : function (t) {
                      return t.currentStyle;
                    };
                return function (e) {
                  var i = t(e);
                  return (
                    i ||
                      r(
                        "Style returned " +
                          i +
                          ". Are you running this code in a hidden iframe on Firefox? " +
                          "See http://bit.ly/getsizebug1"
                      ),
                    i
                  );
                };
              })()),
              (h = i("boxSizing")))
            ) {
              var n = document.createElement("div");
              (n.style.width = "200px"),
                (n.style.padding = "1px 2px 3px 4px"),
                (n.style.borderStyle = "solid"),
                (n.style.borderWidth = "1px 2px 3px 4px"),
                (n.style[h] = "border-box");
              var s = document.body || document.documentElement;
              s.appendChild(n);
              var a = p(n);
              (f = 200 === e(a.width)), s.removeChild(n);
            }
          }
        }
        function a(t) {
          if (
            (n(),
            "string" == typeof t && (t = document.querySelector(t)),
            t && "object" == typeof t && t.nodeType)
          ) {
            var i = p(t);
            if ("none" === i.display) return o();
            var r = {};
            (r.width = t.offsetWidth), (r.height = t.offsetHeight);
            for (
              var a = (r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h])),
                d = 0,
                l = s.length;
              l > d;
              d++
            ) {
              var c = s[d],
                y = i[c];
              y = u(t, y);
              var m = parseFloat(y);
              r[c] = isNaN(m) ? 0 : m;
            }
            var g = r.paddingLeft + r.paddingRight,
              v = r.paddingTop + r.paddingBottom,
              _ = r.marginLeft + r.marginRight,
              I = r.marginTop + r.marginBottom,
              L = r.borderLeftWidth + r.borderRightWidth,
              z = r.borderTopWidth + r.borderBottomWidth,
              b = a && f,
              x = e(i.width);
            x !== !1 && (r.width = x + (b ? 0 : g + L));
            var S = e(i.height);
            return (
              S !== !1 && (r.height = S + (b ? 0 : v + z)),
              (r.innerWidth = r.width - (g + L)),
              (r.innerHeight = r.height - (v + z)),
              (r.outerWidth = r.width + _),
              (r.outerHeight = r.height + I),
              r
            );
          }
        }
        function u(e, i) {
          if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
          var o = e.style,
            n = o.left,
            r = e.runtimeStyle,
            s = r && r.left;
          return (
            s && (r.left = e.currentStyle.left),
            (o.left = i),
            (i = o.pixelLeft),
            (o.left = n),
            s && (r.left = s),
            i
          );
        }
        var p,
          h,
          f,
          d = !1;
        return a;
      }
      var r =
          "undefined" == typeof console
            ? i
            : function (t) {
                console.error(t);
              },
        s = [
          "paddingLeft",
          "paddingRight",
          "paddingTop",
          "paddingBottom",
          "marginLeft",
          "marginRight",
          "marginTop",
          "marginBottom",
          "borderLeftWidth",
          "borderRightWidth",
          "borderTopWidth",
          "borderBottomWidth",
        ];
      "function" == typeof define && define.amd
        ? define(
            "get-size/get-size",
            ["get-style-property/get-style-property"],
            n
          )
        : "object" == typeof exports
        ? (module.exports = n(require("desandro-get-style-property")))
        : (t.getSize = n(t.getStyleProperty));
    })(window),
    (function (t) {
      function e(t, e) {
        return t[s](e);
      }
      function i(t) {
        if (!t.parentNode) {
          var e = document.createDocumentFragment();
          e.appendChild(t);
        }
      }
      function o(t, e) {
        i(t);
        for (
          var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length;
          r > n;
          n++
        )
          if (o[n] === t) return !0;
        return !1;
      }
      function n(t, o) {
        return i(t), e(t, o);
      }
      var r,
        s = (function () {
          if (t.matchesSelector) return "matchesSelector";
          for (
            var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length;
            o > i;
            i++
          ) {
            var n = e[i],
              r = n + "MatchesSelector";
            if (t[r]) return r;
          }
        })();
      if (s) {
        var a = document.createElement("div"),
          u = e(a, "div");
        r = u ? e : n;
      } else r = o;
      "function" == typeof define && define.amd
        ? define("matches-selector/matches-selector", [], function () {
            return r;
          })
        : "object" == typeof exports
        ? (module.exports = r)
        : (window.matchesSelector = r);
    })(Element.prototype),
    (function (t) {
      function e(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      }
      function i(t) {
        for (var e in t) return !1;
        return (e = null), !0;
      }
      function o(t) {
        return t.replace(/([A-Z])/g, function (t) {
          return "-" + t.toLowerCase();
        });
      }
      function n(t, n, r) {
        function a(t, e) {
          t &&
            ((this.element = t),
            (this.layout = e),
            (this.position = { x: 0, y: 0 }),
            this._create());
        }
        var u = r("transition"),
          p = r("transform"),
          h = u && p,
          f = !!r("perspective"),
          d = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend",
          }[u],
          l = [
            "transform",
            "transition",
            "transitionDuration",
            "transitionProperty",
          ],
          c = (function () {
            for (var t = {}, e = 0, i = l.length; i > e; e++) {
              var o = l[e],
                n = r(o);
              n && n !== o && (t[o] = n);
            }
            return t;
          })();
        e(a.prototype, t.prototype),
          (a.prototype._create = function () {
            (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
              this.css({ position: "absolute" });
          }),
          (a.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t);
          }),
          (a.prototype.getSize = function () {
            this.size = n(this.element);
          }),
          (a.prototype.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
              var o = c[i] || i;
              e[o] = t[i];
            }
          }),
          (a.prototype.getPosition = function () {
            var t = s(this.element),
              e = this.layout.options,
              i = e.isOriginLeft,
              o = e.isOriginTop,
              n = parseInt(t[i ? "left" : "right"], 10),
              r = parseInt(t[o ? "top" : "bottom"], 10);
            (n = isNaN(n) ? 0 : n), (r = isNaN(r) ? 0 : r);
            var a = this.layout.size;
            (n -= i ? a.paddingLeft : a.paddingRight),
              (r -= o ? a.paddingTop : a.paddingBottom),
              (this.position.x = n),
              (this.position.y = r);
          }),
          (a.prototype.layoutPosition = function () {
            var t = this.layout.size,
              e = this.layout.options,
              i = {};
            e.isOriginLeft
              ? ((i.left = this.position.x + t.paddingLeft + "px"),
                (i.right = ""))
              : ((i.right = this.position.x + t.paddingRight + "px"),
                (i.left = "")),
              e.isOriginTop
                ? ((i.top = this.position.y + t.paddingTop + "px"),
                  (i.bottom = ""))
                : ((i.bottom = this.position.y + t.paddingBottom + "px"),
                  (i.top = "")),
              this.css(i),
              this.emitEvent("layout", [this]);
          });
        var y = f
          ? function (t, e) {
              return "translate3d(" + t + "px, " + e + "px, 0)";
            }
          : function (t, e) {
              return "translate(" + t + "px, " + e + "px)";
            };
        (a.prototype._transitionTo = function (t, e) {
          this.getPosition();
          var i = this.position.x,
            o = this.position.y,
            n = parseInt(t, 10),
            r = parseInt(e, 10),
            s = n === this.position.x && r === this.position.y;
          if ((this.setPosition(t, e), s && !this.isTransitioning))
            return this.layoutPosition(), void 0;
          var a = t - i,
            u = e - o,
            p = {},
            h = this.layout.options;
          (a = h.isOriginLeft ? a : -a),
            (u = h.isOriginTop ? u : -u),
            (p.transform = y(a, u)),
            this.transition({
              to: p,
              onTransitionEnd: { transform: this.layoutPosition },
              isCleaning: !0,
            });
        }),
          (a.prototype.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition();
          }),
          (a.prototype.moveTo = h
            ? a.prototype._transitionTo
            : a.prototype.goTo),
          (a.prototype.setPosition = function (t, e) {
            (this.position.x = parseInt(t, 10)),
              (this.position.y = parseInt(e, 10));
          }),
          (a.prototype._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
          }),
          (a.prototype._transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration))
              return this._nonTransition(t), void 0;
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
              (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
              this.css(t.from);
              var o = this.element.offsetHeight;
              o = null;
            }
            this.enableTransition(t.to),
              this.css(t.to),
              (this.isTransitioning = !0);
          });
        var m = p && o(p) + ",opacity";
        (a.prototype.enableTransition = function () {
          this.isTransitioning ||
            (this.css({
              transitionProperty: m,
              transitionDuration: this.layout.options.transitionDuration,
            }),
            this.element.addEventListener(d, this, !1));
        }),
          (a.prototype.transition =
            a.prototype[u ? "_transition" : "_nonTransition"]),
          (a.prototype.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t);
          }),
          (a.prototype.onotransitionend = function (t) {
            this.ontransitionend(t);
          });
        var g = {
          "-webkit-transform": "transform",
          "-moz-transform": "transform",
          "-o-transform": "transform",
        };
        (a.prototype.ontransitionend = function (t) {
          if (t.target === this.element) {
            var e = this._transn,
              o = g[t.propertyName] || t.propertyName;
            if (
              (delete e.ingProperties[o],
              i(e.ingProperties) && this.disableTransition(),
              o in e.clean &&
                ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
              o in e.onEnd)
            ) {
              var n = e.onEnd[o];
              n.call(this), delete e.onEnd[o];
            }
            this.emitEvent("transitionEnd", [this]);
          }
        }),
          (a.prototype.disableTransition = function () {
            this.removeTransitionStyles(),
              this.element.removeEventListener(d, this, !1),
              (this.isTransitioning = !1);
          }),
          (a.prototype._removeStyles = function (t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e);
          });
        var v = { transitionProperty: "", transitionDuration: "" };
        return (
          (a.prototype.removeTransitionStyles = function () {
            this.css(v);
          }),
          (a.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element),
              this.emitEvent("remove", [this]);
          }),
          (a.prototype.remove = function () {
            if (!u || !parseFloat(this.layout.options.transitionDuration))
              return this.removeElem(), void 0;
            var t = this;
            this.on("transitionEnd", function () {
              return t.removeElem(), !0;
            }),
              this.hide();
          }),
          (a.prototype.reveal = function () {
            delete this.isHidden, this.css({ display: "" });
            var t = this.layout.options;
            this.transition({
              from: t.hiddenStyle,
              to: t.visibleStyle,
              isCleaning: !0,
            });
          }),
          (a.prototype.hide = function () {
            (this.isHidden = !0), this.css({ display: "" });
            var t = this.layout.options;
            this.transition({
              from: t.visibleStyle,
              to: t.hiddenStyle,
              isCleaning: !0,
              onTransitionEnd: {
                opacity: function () {
                  this.isHidden && this.css({ display: "none" });
                },
              },
            });
          }),
          (a.prototype.destroy = function () {
            this.css({
              position: "",
              left: "",
              right: "",
              top: "",
              bottom: "",
              transition: "",
              transform: "",
            });
          }),
          a
        );
      }
      var r = t.getComputedStyle,
        s = r
          ? function (t) {
              return r(t, null);
            }
          : function (t) {
              return t.currentStyle;
            };
      "function" == typeof define && define.amd
        ? define(
            "outlayer/item",
            [
              "eventEmitter/EventEmitter",
              "get-size/get-size",
              "get-style-property/get-style-property",
            ],
            n
          )
        : "object" == typeof exports
        ? (module.exports = n(
            require("wolfy87-eventemitter"),
            require("get-size"),
            require("desandro-get-style-property")
          ))
        : ((t.Outlayer = {}),
          (t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty)));
    })(window),
    (function (t) {
      function e(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      }
      function i(t) {
        return "[object Array]" === f.call(t);
      }
      function o(t) {
        var e = [];
        if (i(t)) e = t;
        else if (t && "number" == typeof t.length)
          for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
        else e.push(t);
        return e;
      }
      function n(t, e) {
        var i = l(e, t);
        -1 !== i && e.splice(i, 1);
      }
      function r(t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      }
      function s(i, s, f, l, c, y) {
        function m(t, i) {
          if (("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)))
            return (
              u &&
                u.error("Bad " + this.constructor.namespace + " element: " + t),
              void 0
            );
          (this.element = t),
            (this.options = e({}, this.constructor.defaults)),
            this.option(i);
          var o = ++g;
          (this.element.outlayerGUID = o),
            (v[o] = this),
            this._create(),
            this.options.isInitLayout && this.layout();
        }
        var g = 0,
          v = {};
        return (
          (m.namespace = "outlayer"),
          (m.Item = y),
          (m.defaults = {
            containerStyle: { position: "relative" },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
            visibleStyle: { opacity: 1, transform: "scale(1)" },
          }),
          e(m.prototype, f.prototype),
          (m.prototype.option = function (t) {
            e(this.options, t);
          }),
          (m.prototype._create = function () {
            this.reloadItems(),
              (this.stamps = []),
              this.stamp(this.options.stamp),
              e(this.element.style, this.options.containerStyle),
              this.options.isResizeBound && this.bindResize();
          }),
          (m.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children);
          }),
          (m.prototype._itemize = function (t) {
            for (
              var e = this._filterFindItemElements(t),
                i = this.constructor.Item,
                o = [],
                n = 0,
                r = e.length;
              r > n;
              n++
            ) {
              var s = e[n],
                a = new i(s, this);
              o.push(a);
            }
            return o;
          }),
          (m.prototype._filterFindItemElements = function (t) {
            t = o(t);
            for (
              var e = this.options.itemSelector, i = [], n = 0, r = t.length;
              r > n;
              n++
            ) {
              var s = t[n];
              if (d(s))
                if (e) {
                  c(s, e) && i.push(s);
                  for (
                    var a = s.querySelectorAll(e), u = 0, p = a.length;
                    p > u;
                    u++
                  )
                    i.push(a[u]);
                } else i.push(s);
            }
            return i;
          }),
          (m.prototype.getItemElements = function () {
            for (var t = [], e = 0, i = this.items.length; i > e; e++)
              t.push(this.items[e].element);
            return t;
          }),
          (m.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t =
              void 0 !== this.options.isLayoutInstant
                ? this.options.isLayoutInstant
                : !this._isLayoutInited;
            this.layoutItems(this.items, t), (this._isLayoutInited = !0);
          }),
          (m.prototype._init = m.prototype.layout),
          (m.prototype._resetLayout = function () {
            this.getSize();
          }),
          (m.prototype.getSize = function () {
            this.size = l(this.element);
          }),
          (m.prototype._getMeasurement = function (t, e) {
            var i,
              o = this.options[t];
            o
              ? ("string" == typeof o
                  ? (i = this.element.querySelector(o))
                  : d(o) && (i = o),
                (this[t] = i ? l(i)[e] : o))
              : (this[t] = 0);
          }),
          (m.prototype.layoutItems = function (t, e) {
            (t = this._getItemsForLayout(t)),
              this._layoutItems(t, e),
              this._postLayout();
          }),
          (m.prototype._getItemsForLayout = function (t) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
              var n = t[i];
              n.isIgnored || e.push(n);
            }
            return e;
          }),
          (m.prototype._layoutItems = function (t, e) {
            function i() {
              o.emitEvent("layoutComplete", [o, t]);
            }
            var o = this;
            if (!t || !t.length) return i(), void 0;
            this._itemsOn(t, "layout", i);
            for (var n = [], r = 0, s = t.length; s > r; r++) {
              var a = t[r],
                u = this._getItemLayoutPosition(a);
              (u.item = a), (u.isInstant = e || a.isLayoutInstant), n.push(u);
            }
            this._processLayoutQueue(n);
          }),
          (m.prototype._getItemLayoutPosition = function () {
            return { x: 0, y: 0 };
          }),
          (m.prototype._processLayoutQueue = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
              var o = t[e];
              this._positionItem(o.item, o.x, o.y, o.isInstant);
            }
          }),
          (m.prototype._positionItem = function (t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i);
          }),
          (m.prototype._postLayout = function () {
            this.resizeContainer();
          }),
          (m.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
              var t = this._getContainerSize();
              t &&
                (this._setContainerMeasure(t.width, !0),
                this._setContainerMeasure(t.height, !1));
            }
          }),
          (m.prototype._getContainerSize = h),
          (m.prototype._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
              var i = this.size;
              i.isBorderBox &&
                (t += e
                  ? i.paddingLeft +
                    i.paddingRight +
                    i.borderLeftWidth +
                    i.borderRightWidth
                  : i.paddingBottom +
                    i.paddingTop +
                    i.borderTopWidth +
                    i.borderBottomWidth),
                (t = Math.max(t, 0)),
                (this.element.style[e ? "width" : "height"] = t + "px");
            }
          }),
          (m.prototype._itemsOn = function (t, e, i) {
            function o() {
              return n++, n === r && i.call(s), !0;
            }
            for (
              var n = 0, r = t.length, s = this, a = 0, u = t.length;
              u > a;
              a++
            ) {
              var p = t[a];
              p.on(e, o);
            }
          }),
          (m.prototype.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0);
          }),
          (m.prototype.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored;
          }),
          (m.prototype.stamp = function (t) {
            if ((t = this._find(t))) {
              this.stamps = this.stamps.concat(t);
              for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this.ignore(o);
              }
            }
          }),
          (m.prototype.unstamp = function (t) {
            if ((t = this._find(t)))
              for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                n(o, this.stamps), this.unignore(o);
              }
          }),
          (m.prototype._find = function (t) {
            return t
              ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
                (t = o(t)))
              : void 0;
          }),
          (m.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
              this._getBoundingRect();
              for (var t = 0, e = this.stamps.length; e > t; t++) {
                var i = this.stamps[t];
                this._manageStamp(i);
              }
            }
          }),
          (m.prototype._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
              e = this.size;
            this._boundingRect = {
              left: t.left + e.paddingLeft + e.borderLeftWidth,
              top: t.top + e.paddingTop + e.borderTopWidth,
              right: t.right - (e.paddingRight + e.borderRightWidth),
              bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
            };
          }),
          (m.prototype._manageStamp = h),
          (m.prototype._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
              i = this._boundingRect,
              o = l(t),
              n = {
                left: e.left - i.left - o.marginLeft,
                top: e.top - i.top - o.marginTop,
                right: i.right - e.right - o.marginRight,
                bottom: i.bottom - e.bottom - o.marginBottom,
              };
            return n;
          }),
          (m.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t);
          }),
          (m.prototype.bindResize = function () {
            this.isResizeBound ||
              (i.bind(t, "resize", this), (this.isResizeBound = !0));
          }),
          (m.prototype.unbindResize = function () {
            this.isResizeBound && i.unbind(t, "resize", this),
              (this.isResizeBound = !1);
          }),
          (m.prototype.onresize = function () {
            function t() {
              e.resize(), delete e.resizeTimeout;
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100);
          }),
          (m.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout();
          }),
          (m.prototype.needsResizeLayout = function () {
            var t = l(this.element),
              e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth;
          }),
          (m.prototype.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e;
          }),
          (m.prototype.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e));
          }),
          (m.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
              var i = this.items.slice(0);
              (this.items = e.concat(i)),
                this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(e, !0),
                this.reveal(e),
                this.layoutItems(i);
            }
          }),
          (m.prototype.reveal = function (t) {
            var e = t && t.length;
            if (e)
              for (var i = 0; e > i; i++) {
                var o = t[i];
                o.reveal();
              }
          }),
          (m.prototype.hide = function (t) {
            var e = t && t.length;
            if (e)
              for (var i = 0; e > i; i++) {
                var o = t[i];
                o.hide();
              }
          }),
          (m.prototype.getItem = function (t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
              var o = this.items[e];
              if (o.element === t) return o;
            }
          }),
          (m.prototype.getItems = function (t) {
            if (t && t.length) {
              for (var e = [], i = 0, o = t.length; o > i; i++) {
                var n = t[i],
                  r = this.getItem(n);
                r && e.push(r);
              }
              return e;
            }
          }),
          (m.prototype.remove = function (t) {
            t = o(t);
            var e = this.getItems(t);
            if (e && e.length) {
              this._itemsOn(e, "remove", function () {
                this.emitEvent("removeComplete", [this, e]);
              });
              for (var i = 0, r = e.length; r > i; i++) {
                var s = e[i];
                s.remove(), n(s, this.items);
              }
            }
          }),
          (m.prototype.destroy = function () {
            var t = this.element.style;
            (t.height = ""), (t.position = ""), (t.width = "");
            for (var e = 0, i = this.items.length; i > e; e++) {
              var o = this.items[e];
              o.destroy();
            }
            this.unbindResize();
            var n = this.element.outlayerGUID;
            delete v[n],
              delete this.element.outlayerGUID,
              p && p.removeData(this.element, this.constructor.namespace);
          }),
          (m.data = function (t) {
            var e = t && t.outlayerGUID;
            return e && v[e];
          }),
          (m.create = function (t, i) {
            function o() {
              m.apply(this, arguments);
            }
            return (
              Object.create
                ? (o.prototype = Object.create(m.prototype))
                : e(o.prototype, m.prototype),
              (o.prototype.constructor = o),
              (o.defaults = e({}, m.defaults)),
              e(o.defaults, i),
              (o.prototype.settings = {}),
              (o.namespace = t),
              (o.data = m.data),
              (o.Item = function () {
                y.apply(this, arguments);
              }),
              (o.Item.prototype = new y()),
              s(function () {
                for (
                  var e = r(t),
                    i = a.querySelectorAll(".js-" + e),
                    n = "data-" + e + "-options",
                    s = 0,
                    h = i.length;
                  h > s;
                  s++
                ) {
                  var f,
                    d = i[s],
                    l = d.getAttribute(n);
                  try {
                    f = l && JSON.parse(l);
                  } catch (c) {
                    u &&
                      u.error(
                        "Error parsing " +
                          n +
                          " on " +
                          d.nodeName.toLowerCase() +
                          (d.id ? "#" + d.id : "") +
                          ": " +
                          c
                      );
                    continue;
                  }
                  var y = new o(d, f);
                  p && p.data(d, t, y);
                }
              }),
              p && p.bridget && p.bridget(t, o),
              o
            );
          }),
          (m.Item = y),
          m
        );
      }
      var a = t.document,
        u = t.console,
        p = t.jQuery,
        h = function () {},
        f = Object.prototype.toString,
        d =
          "function" == typeof HTMLElement || "object" == typeof HTMLElement
            ? function (t) {
                return t instanceof HTMLElement;
              }
            : function (t) {
                return (
                  t &&
                  "object" == typeof t &&
                  1 === t.nodeType &&
                  "string" == typeof t.nodeName
                );
              },
        l = Array.prototype.indexOf
          ? function (t, e) {
              return t.indexOf(e);
            }
          : function (t, e) {
              for (var i = 0, o = t.length; o > i; i++)
                if (t[i] === e) return i;
              return -1;
            };
      "function" == typeof define && define.amd
        ? define(
            "outlayer/outlayer",
            [
              "eventie/eventie",
              "doc-ready/doc-ready",
              "eventEmitter/EventEmitter",
              "get-size/get-size",
              "matches-selector/matches-selector",
              "./item",
            ],
            s
          )
        : "object" == typeof exports
        ? (module.exports = s(
            require("eventie"),
            require("doc-ready"),
            require("wolfy87-eventemitter"),
            require("get-size"),
            require("desandro-matches-selector"),
            require("./item")
          ))
        : (t.Outlayer = s(
            t.eventie,
            t.docReady,
            t.EventEmitter,
            t.getSize,
            t.matchesSelector,
            t.Outlayer.Item
          ));
    })(window),
    (function (t) {
      function e(t) {
        function e() {
          t.Item.apply(this, arguments);
        }
        (e.prototype = new t.Item()),
          (e.prototype._create = function () {
            (this.id = this.layout.itemGUID++),
              t.Item.prototype._create.call(this),
              (this.sortData = {});
          }),
          (e.prototype.updateSortData = function () {
            if (!this.isIgnored) {
              (this.sortData.id = this.id),
                (this.sortData["original-order"] = this.id),
                (this.sortData.random = Math.random());
              var t = this.layout.options.getSortData,
                e = this.layout._sorters;
              for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this);
              }
            }
          });
        var i = e.prototype.destroy;
        return (
          (e.prototype.destroy = function () {
            i.apply(this, arguments), this.css({ display: "" });
          }),
          e
        );
      }
      "function" == typeof define && define.amd
        ? define("isotope/js/item", ["outlayer/outlayer"], e)
        : "object" == typeof exports
        ? (module.exports = e(require("outlayer")))
        : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window),
    (function (t) {
      function e(t, e) {
        function i(t) {
          (this.isotope = t),
            t &&
              ((this.options = t.options[this.namespace]),
              (this.element = t.element),
              (this.items = t.filteredItems),
              (this.size = t.size));
        }
        return (
          (function () {
            function t(t) {
              return function () {
                return e.prototype[t].apply(this.isotope, arguments);
              };
            }
            for (
              var o = [
                  "_resetLayout",
                  "_getItemLayoutPosition",
                  "_manageStamp",
                  "_getContainerSize",
                  "_getElementOffset",
                  "needsResizeLayout",
                ],
                n = 0,
                r = o.length;
              r > n;
              n++
            ) {
              var s = o[n];
              i.prototype[s] = t(s);
            }
          })(),
          (i.prototype.needsVerticalResizeLayout = function () {
            var e = t(this.isotope.element),
              i = this.isotope.size && e;
            return i && e.innerHeight !== this.isotope.size.innerHeight;
          }),
          (i.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments);
          }),
          (i.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width");
          }),
          (i.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height");
          }),
          (i.prototype.getSegmentSize = function (t, e) {
            var i = t + e,
              o = "outer" + e;
            if ((this._getMeasurement(i, o), !this[i])) {
              var n = this.getFirstItemSize();
              this[i] = (n && n[o]) || this.isotope.size["inner" + e];
            }
          }),
          (i.prototype.getFirstItemSize = function () {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element);
          }),
          (i.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments);
          }),
          (i.prototype.getSize = function () {
            this.isotope.getSize(), (this.size = this.isotope.size);
          }),
          (i.modes = {}),
          (i.create = function (t, e) {
            function o() {
              i.apply(this, arguments);
            }
            return (
              (o.prototype = new i()),
              e && (o.options = e),
              (o.prototype.namespace = t),
              (i.modes[t] = o),
              o
            );
          }),
          i
        );
      }
      "function" == typeof define && define.amd
        ? define(
            "isotope/js/layout-mode",
            ["get-size/get-size", "outlayer/outlayer"],
            e
          )
        : "object" == typeof exports
        ? (module.exports = e(require("get-size"), require("outlayer")))
        : ((t.Isotope = t.Isotope || {}),
          (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window),
    (function (t) {
      function e(t, e) {
        var o = t.create("masonry");
        return (
          (o.prototype._resetLayout = function () {
            this.getSize(),
              this._getMeasurement("columnWidth", "outerWidth"),
              this._getMeasurement("gutter", "outerWidth"),
              this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--; ) this.colYs.push(0);
            this.maxY = 0;
          }),
          (o.prototype.measureColumns = function () {
            if ((this.getContainerWidth(), !this.columnWidth)) {
              var t = this.items[0],
                i = t && t.element;
              this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
            }
            (this.columnWidth += this.gutter),
              (this.cols = Math.floor(
                (this.containerWidth + this.gutter) / this.columnWidth
              )),
              (this.cols = Math.max(this.cols, 1));
          }),
          (o.prototype.getContainerWidth = function () {
            var t = this.options.isFitWidth
                ? this.element.parentNode
                : this.element,
              i = e(t);
            this.containerWidth = i && i.innerWidth;
          }),
          (o.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
              o = e && 1 > e ? "round" : "ceil",
              n = Math[o](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (
              var r = this._getColGroup(n),
                s = Math.min.apply(Math, r),
                a = i(r, s),
                u = { x: this.columnWidth * a, y: s },
                p = s + t.size.outerHeight,
                h = this.cols + 1 - r.length,
                f = 0;
              h > f;
              f++
            )
              this.colYs[a + f] = p;
            return u;
          }),
          (o.prototype._getColGroup = function (t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
              var n = this.colYs.slice(o, o + t);
              e[o] = Math.max.apply(Math, n);
            }
            return e;
          }),
          (o.prototype._manageStamp = function (t) {
            var i = e(t),
              o = this._getElementOffset(t),
              n = this.options.isOriginLeft ? o.left : o.right,
              r = n + i.outerWidth,
              s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            (a -= r % this.columnWidth ? 0 : 1),
              (a = Math.min(this.cols - 1, a));
            for (
              var u =
                  (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight,
                p = s;
              a >= p;
              p++
            )
              this.colYs[p] = Math.max(u, this.colYs[p]);
          }),
          (o.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = { height: this.maxY };
            return (
              this.options.isFitWidth &&
                (t.width = this._getContainerFitWidth()),
              t
            );
          }),
          (o.prototype._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
            return (this.cols - t) * this.columnWidth - this.gutter;
          }),
          (o.prototype.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth;
          }),
          o
        );
      }
      var i = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var i = 0, o = t.length; o > i; i++) {
              var n = t[i];
              if (n === e) return i;
            }
            return -1;
          };
      "function" == typeof define && define.amd
        ? define(
            "masonry/masonry",
            ["outlayer/outlayer", "get-size/get-size"],
            e
          )
        : "object" == typeof exports
        ? (module.exports = e(require("outlayer"), require("get-size")))
        : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window),
    (function (t) {
      function e(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      }
      function i(t, i) {
        var o = t.create("masonry"),
          n = o.prototype._getElementOffset,
          r = o.prototype.layout,
          s = o.prototype._getMeasurement;
        e(o.prototype, i.prototype),
          (o.prototype._getElementOffset = n),
          (o.prototype.layout = r),
          (o.prototype._getMeasurement = s);
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function () {
          (this.items = this.isotope.filteredItems), a.call(this);
        };
        var u = o.prototype._manageStamp;
        return (
          (o.prototype._manageStamp = function () {
            (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
              (this.options.isOriginTop = this.isotope.options.isOriginTop),
              u.apply(this, arguments);
          }),
          o
        );
      }
      "function" == typeof define && define.amd
        ? define(
            "isotope/js/layout-modes/masonry",
            ["../layout-mode", "masonry/masonry"],
            i
          )
        : "object" == typeof exports
        ? (module.exports = i(
            require("../layout-mode"),
            require("masonry-layout")
          ))
        : i(t.Isotope.LayoutMode, t.Masonry);
    })(window),
    (function (t) {
      function e(t) {
        var e = t.create("fitRows");
        return (
          (e.prototype._resetLayout = function () {
            (this.x = 0),
              (this.y = 0),
              (this.maxY = 0),
              this._getMeasurement("gutter", "outerWidth");
          }),
          (e.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
              i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x &&
              e + this.x > i &&
              ((this.x = 0), (this.y = this.maxY));
            var o = { x: this.x, y: this.y };
            return (
              (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
              (this.x += e),
              o
            );
          }),
          (e.prototype._getContainerSize = function () {
            return { height: this.maxY };
          }),
          e
        );
      }
      "function" == typeof define && define.amd
        ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e)
        : "object" == typeof exports
        ? (module.exports = e(require("../layout-mode")))
        : e(t.Isotope.LayoutMode);
    })(window),
    (function (t) {
      function e(t) {
        var e = t.create("vertical", { horizontalAlignment: 0 });
        return (
          (e.prototype._resetLayout = function () {
            this.y = 0;
          }),
          (e.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e =
                (this.isotope.size.innerWidth - t.size.outerWidth) *
                this.options.horizontalAlignment,
              i = this.y;
            return (this.y += t.size.outerHeight), { x: e, y: i };
          }),
          (e.prototype._getContainerSize = function () {
            return { height: this.y };
          }),
          e
        );
      }
      "function" == typeof define && define.amd
        ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e)
        : "object" == typeof exports
        ? (module.exports = e(require("../layout-mode")))
        : e(t.Isotope.LayoutMode);
    })(window),
    (function (t) {
      function e(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      }
      function i(t) {
        return "[object Array]" === h.call(t);
      }
      function o(t) {
        var e = [];
        if (i(t)) e = t;
        else if (t && "number" == typeof t.length)
          for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
        else e.push(t);
        return e;
      }
      function n(t, e) {
        var i = f(e, t);
        -1 !== i && e.splice(i, 1);
      }
      function r(t, i, r, u, h) {
        function f(t, e) {
          return function (i, o) {
            for (var n = 0, r = t.length; r > n; n++) {
              var s = t[n],
                a = i.sortData[s],
                u = o.sortData[s];
              if (a > u || u > a) {
                var p = void 0 !== e[s] ? e[s] : e,
                  h = p ? 1 : -1;
                return (a > u ? 1 : -1) * h;
              }
            }
            return 0;
          };
        }
        var d = t.create("isotope", {
          layoutMode: "masonry",
          isJQueryFiltering: !0,
          sortAscending: !0,
        });
        (d.Item = u),
          (d.LayoutMode = h),
          (d.prototype._create = function () {
            (this.itemGUID = 0),
              (this._sorters = {}),
              this._getSorters(),
              t.prototype._create.call(this),
              (this.modes = {}),
              (this.filteredItems = this.items),
              (this.sortHistory = ["original-order"]);
            for (var e in h.modes) this._initLayoutMode(e);
          }),
          (d.prototype.reloadItems = function () {
            (this.itemGUID = 0), t.prototype.reloadItems.call(this);
          }),
          (d.prototype._itemize = function () {
            for (
              var e = t.prototype._itemize.apply(this, arguments),
                i = 0,
                o = e.length;
              o > i;
              i++
            ) {
              var n = e[i];
              n.id = this.itemGUID++;
            }
            return this._updateItemsSortData(e), e;
          }),
          (d.prototype._initLayoutMode = function (t) {
            var i = h.modes[t],
              o = this.options[t] || {};
            (this.options[t] = i.options ? e(i.options, o) : o),
              (this.modes[t] = new i(this));
          }),
          (d.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout
              ? (this.arrange(), void 0)
              : (this._layout(), void 0);
          }),
          (d.prototype._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(),
              this._manageStamps(),
              this.layoutItems(this.filteredItems, t),
              (this._isLayoutInited = !0);
          }),
          (d.prototype.arrange = function (t) {
            this.option(t),
              this._getIsInstant(),
              (this.filteredItems = this._filter(this.items)),
              this._sort(),
              this._layout();
          }),
          (d.prototype._init = d.prototype.arrange),
          (d.prototype._getIsInstant = function () {
            var t =
              void 0 !== this.options.isLayoutInstant
                ? this.options.isLayoutInstant
                : !this._isLayoutInited;
            return (this._isInstant = t), t;
          }),
          (d.prototype._filter = function (t) {
            function e() {
              f.reveal(n), f.hide(r);
            }
            var i = this.options.filter;
            i = i || "*";
            for (
              var o = [],
                n = [],
                r = [],
                s = this._getFilterTest(i),
                a = 0,
                u = t.length;
              u > a;
              a++
            ) {
              var p = t[a];
              if (!p.isIgnored) {
                var h = s(p);
                h && o.push(p),
                  h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p);
              }
            }
            var f = this;
            return this._isInstant ? this._noTransition(e) : e(), o;
          }),
          (d.prototype._getFilterTest = function (t) {
            return s && this.options.isJQueryFiltering
              ? function (e) {
                  return s(e.element).is(t);
                }
              : "function" == typeof t
              ? function (e) {
                  return t(e.element);
                }
              : function (e) {
                  return r(e.element, t);
                };
          }),
          (d.prototype.updateSortData = function (t) {
            var e;
            t ? ((t = o(t)), (e = this.getItems(t))) : (e = this.items),
              this._getSorters(),
              this._updateItemsSortData(e);
          }),
          (d.prototype._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
              var i = t[e];
              this._sorters[e] = l(i);
            }
          }),
          (d.prototype._updateItemsSortData = function (t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
              var o = t[i];
              o.updateSortData();
            }
          });
        var l = (function () {
          function t(t) {
            if ("string" != typeof t) return t;
            var i = a(t).split(" "),
              o = i[0],
              n = o.match(/^\[(.+)\]$/),
              r = n && n[1],
              s = e(r, o),
              u = d.sortDataParsers[i[1]];
            return (t = u
              ? function (t) {
                  return t && u(s(t));
                }
              : function (t) {
                  return t && s(t);
                });
          }
          function e(t, e) {
            var i;
            return (i = t
              ? function (e) {
                  return e.getAttribute(t);
                }
              : function (t) {
                  var i = t.querySelector(e);
                  return i && p(i);
                });
          }
          return t;
        })();
        (d.sortDataParsers = {
          parseInt: function (t) {
            return parseInt(t, 10);
          },
          parseFloat: function (t) {
            return parseFloat(t);
          },
        }),
          (d.prototype._sort = function () {
            var t = this.options.sortBy;
            if (t) {
              var e = [].concat.apply(t, this.sortHistory),
                i = f(e, this.options.sortAscending);
              this.filteredItems.sort(i),
                t !== this.sortHistory[0] && this.sortHistory.unshift(t);
            }
          }),
          (d.prototype._mode = function () {
            var t = this.options.layoutMode,
              e = this.modes[t];
            if (!e) throw Error("No layout mode: " + t);
            return (e.options = this.options[t]), e;
          }),
          (d.prototype._resetLayout = function () {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout();
          }),
          (d.prototype._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t);
          }),
          (d.prototype._manageStamp = function (t) {
            this._mode()._manageStamp(t);
          }),
          (d.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize();
          }),
          (d.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout();
          }),
          (d.prototype.appended = function (t) {
            var e = this.addItems(t);
            if (e.length) {
              var i = this._filterRevealAdded(e);
              this.filteredItems = this.filteredItems.concat(i);
            }
          }),
          (d.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
              var i = this.items.slice(0);
              (this.items = e.concat(i)),
                this._resetLayout(),
                this._manageStamps();
              var o = this._filterRevealAdded(e);
              this.layoutItems(i),
                (this.filteredItems = o.concat(this.filteredItems));
            }
          }),
          (d.prototype._filterRevealAdded = function (t) {
            var e = this._noTransition(function () {
              return this._filter(t);
            });
            return this.layoutItems(e, !0), this.reveal(e), t;
          }),
          (d.prototype.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
              var i,
                o,
                n = e.length;
              for (i = 0; n > i; i++)
                (o = e[i]), this.element.appendChild(o.element);
              var r = this._filter(e);
              for (
                this._noTransition(function () {
                  this.hide(r);
                }),
                  i = 0;
                n > i;
                i++
              )
                e[i].isLayoutInstant = !0;
              for (this.arrange(), i = 0; n > i; i++)
                delete e[i].isLayoutInstant;
              this.reveal(r);
            }
          });
        var c = d.prototype.remove;
        return (
          (d.prototype.remove = function (t) {
            t = o(t);
            var e = this.getItems(t);
            if ((c.call(this, t), e && e.length))
              for (var i = 0, r = e.length; r > i; i++) {
                var s = e[i];
                n(s, this.filteredItems);
              }
          }),
          (d.prototype.shuffle = function () {
            for (var t = 0, e = this.items.length; e > t; t++) {
              var i = this.items[t];
              i.sortData.random = Math.random();
            }
            (this.options.sortBy = "random"), this._sort(), this._layout();
          }),
          (d.prototype._noTransition = function (t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return (this.options.transitionDuration = e), i;
          }),
          (d.prototype.getFilteredItemElements = function () {
            for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)
              t.push(this.filteredItems[e].element);
            return t;
          }),
          d
        );
      }
      var s = t.jQuery,
        a = String.prototype.trim
          ? function (t) {
              return t.trim();
            }
          : function (t) {
              return t.replace(/^\s+|\s+$/g, "");
            },
        u = document.documentElement,
        p = u.textContent
          ? function (t) {
              return t.textContent;
            }
          : function (t) {
              return t.innerText;
            },
        h = Object.prototype.toString,
        f = Array.prototype.indexOf
          ? function (t, e) {
              return t.indexOf(e);
            }
          : function (t, e) {
              for (var i = 0, o = t.length; o > i; i++)
                if (t[i] === e) return i;
              return -1;
            };
      "function" == typeof define && define.amd
        ? define(
            [
              "outlayer/outlayer",
              "get-size/get-size",
              "matches-selector/matches-selector",
              "isotope/js/item",
              "isotope/js/layout-mode",
              "isotope/js/layout-modes/masonry",
              "isotope/js/layout-modes/fit-rows",
              "isotope/js/layout-modes/vertical",
            ],
            r
          )
        : "object" == typeof exports
        ? (module.exports = r(
            require("outlayer"),
            require("get-size"),
            require("desandro-matches-selector"),
            require("./item"),
            require("./layout-mode"),
            require("./layout-modes/masonry"),
            require("./layout-modes/fit-rows"),
            require("./layout-modes/vertical")
          ))
        : (t.Isotope = r(
            t.Outlayer,
            t.getSize,
            t.matchesSelector,
            t.Isotope.Item,
            t.Isotope.LayoutMode
          ));
    })(window);

  /*!
   * Packery layout mode PACKAGED v1.1.1
   * sub-classes Packery
   * http://packery.metafizzy.co
   */

  !(function (a) {
    function b(a) {
      return new RegExp("(^|\\s+)" + a + "(\\s+|$)");
    }
    function c(a, b) {
      var c = d(a, b) ? f : e;
      c(a, b);
    }
    var d, e, f;
    "classList" in document.documentElement
      ? ((d = function (a, b) {
          return a.classList.contains(b);
        }),
        (e = function (a, b) {
          a.classList.add(b);
        }),
        (f = function (a, b) {
          a.classList.remove(b);
        }))
      : ((d = function (a, c) {
          return b(c).test(a.className);
        }),
        (e = function (a, b) {
          d(a, b) || (a.className = a.className + " " + b);
        }),
        (f = function (a, c) {
          a.className = a.className.replace(b(c), " ");
        }));
    var g = {
      hasClass: d,
      addClass: e,
      removeClass: f,
      toggleClass: c,
      has: d,
      add: e,
      remove: f,
      toggle: c,
    };
    "function" == typeof define && define.amd
      ? define("classie/classie", g)
      : "object" == typeof exports
      ? (module.exports = g)
      : (a.classie = g);
  })(window),
    (function (a) {
      function b() {
        function a(b) {
          for (var c in a.defaults) this[c] = a.defaults[c];
          for (c in b) this[c] = b[c];
        }
        return (
          (c.Rect = a),
          (a.defaults = { x: 0, y: 0, width: 0, height: 0 }),
          (a.prototype.contains = function (a) {
            var b = a.width || 0,
              c = a.height || 0;
            return (
              this.x <= a.x &&
              this.y <= a.y &&
              this.x + this.width >= a.x + b &&
              this.y + this.height >= a.y + c
            );
          }),
          (a.prototype.overlaps = function (a) {
            var b = this.x + this.width,
              c = this.y + this.height,
              d = a.x + a.width,
              e = a.y + a.height;
            return this.x < d && b > a.x && this.y < e && c > a.y;
          }),
          (a.prototype.getMaximalFreeRects = function (b) {
            if (!this.overlaps(b)) return !1;
            var c,
              d = [],
              e = this.x + this.width,
              f = this.y + this.height,
              g = b.x + b.width,
              h = b.y + b.height;
            return (
              this.y < b.y &&
                ((c = new a({
                  x: this.x,
                  y: this.y,
                  width: this.width,
                  height: b.y - this.y,
                })),
                d.push(c)),
              e > g &&
                ((c = new a({
                  x: g,
                  y: this.y,
                  width: e - g,
                  height: this.height,
                })),
                d.push(c)),
              f > h &&
                ((c = new a({
                  x: this.x,
                  y: h,
                  width: this.width,
                  height: f - h,
                })),
                d.push(c)),
              this.x < b.x &&
                ((c = new a({
                  x: this.x,
                  y: this.y,
                  width: b.x - this.x,
                  height: this.height,
                })),
                d.push(c)),
              d
            );
          }),
          (a.prototype.canFit = function (a) {
            return this.width >= a.width && this.height >= a.height;
          }),
          a
        );
      }
      var c = (a.Packery = function () {});
      "function" == typeof define && define.amd
        ? define("packery/js/rect", b)
        : "object" == typeof exports
        ? (module.exports = b())
        : ((a.Packery = a.Packery || {}), (a.Packery.Rect = b()));
    })(window),
    (function (a) {
      function b(a) {
        function b(a, b, c) {
          (this.width = a || 0),
            (this.height = b || 0),
            (this.sortDirection = c || "downwardLeftToRight"),
            this.reset();
        }
        (b.prototype.reset = function () {
          (this.spaces = []), (this.newSpaces = []);
          var b = new a({ x: 0, y: 0, width: this.width, height: this.height });
          this.spaces.push(b),
            (this.sorter = c[this.sortDirection] || c.downwardLeftToRight);
        }),
          (b.prototype.pack = function (a) {
            for (var b = 0, c = this.spaces.length; c > b; b++) {
              var d = this.spaces[b];
              if (d.canFit(a)) {
                this.placeInSpace(a, d);
                break;
              }
            }
          }),
          (b.prototype.placeInSpace = function (a, b) {
            (a.x = b.x), (a.y = b.y), this.placed(a);
          }),
          (b.prototype.placed = function (a) {
            for (var b = [], c = 0, d = this.spaces.length; d > c; c++) {
              var e = this.spaces[c],
                f = e.getMaximalFreeRects(a);
              f ? b.push.apply(b, f) : b.push(e);
            }
            (this.spaces = b), this.mergeSortSpaces();
          }),
          (b.prototype.mergeSortSpaces = function () {
            b.mergeRects(this.spaces), this.spaces.sort(this.sorter);
          }),
          (b.prototype.addSpace = function (a) {
            this.spaces.push(a), this.mergeSortSpaces();
          }),
          (b.mergeRects = function (a) {
            for (var b = 0, c = a.length; c > b; b++) {
              var d = a[b];
              if (d) {
                var e = a.slice(0);
                e.splice(b, 1);
                for (var f = 0, g = 0, h = e.length; h > g; g++) {
                  var i = e[g],
                    j = b > g ? 0 : 1;
                  d.contains(i) && (a.splice(g + j - f, 1), f++);
                }
              }
            }
            return a;
          });
        var c = {
          downwardLeftToRight: function (a, b) {
            return a.y - b.y || a.x - b.x;
          },
          rightwardTopToBottom: function (a, b) {
            return a.x - b.x || a.y - b.y;
          },
        };
        return b;
      }
      if ("function" == typeof define && define.amd)
        define("packery/js/packer", ["./rect"], b);
      else if ("object" == typeof exports)
        module.exports = b(require("./rect"));
      else {
        var c = (a.Packery = a.Packery || {});
        c.Packer = b(c.Rect);
      }
    })(window),
    (function (a) {
      function b(a, b, c) {
        var d = a("transform"),
          e = function () {
            b.Item.apply(this, arguments);
          };
        e.prototype = new b.Item();
        var f = e.prototype._create;
        return (
          (e.prototype._create = function () {
            f.call(this), (this.rect = new c()), (this.placeRect = new c());
          }),
          (e.prototype.dragStart = function () {
            this.getPosition(),
              this.removeTransitionStyles(),
              this.isTransitioning && d && (this.element.style[d] = "none"),
              this.getSize(),
              (this.isPlacing = !0),
              (this.needsPositioning = !1),
              this.positionPlaceRect(this.position.x, this.position.y),
              (this.isTransitioning = !1),
              (this.didDrag = !1);
          }),
          (e.prototype.dragMove = function (a, b) {
            this.didDrag = !0;
            var c = this.layout.size;
            (a -= c.paddingLeft),
              (b -= c.paddingTop),
              this.positionPlaceRect(a, b);
          }),
          (e.prototype.dragStop = function () {
            this.getPosition();
            var a = this.position.x !== this.placeRect.x,
              b = this.position.y !== this.placeRect.y;
            (this.needsPositioning = a || b), (this.didDrag = !1);
          }),
          (e.prototype.positionPlaceRect = function (a, b, c) {
            (this.placeRect.x = this.getPlaceRectCoord(a, !0)),
              (this.placeRect.y = this.getPlaceRectCoord(b, !1, c));
          }),
          (e.prototype.getPlaceRectCoord = function (a, b, c) {
            var d = b ? "Width" : "Height",
              e = this.size["outer" + d],
              f = this.layout[b ? "columnWidth" : "rowHeight"],
              g = this.layout.size["inner" + d];
            b ||
              ((g = Math.max(g, this.layout.maxY)),
              this.layout.rowHeight || (g -= this.layout.gutter));
            var h;
            if (f) {
              (f += this.layout.gutter),
                (g += b ? this.layout.gutter : 0),
                (a = Math.round(a / f));
              var i;
              i = this.layout.options.isHorizontal
                ? b
                  ? "ceil"
                  : "floor"
                : b
                ? "floor"
                : "ceil";
              var j = Math[i](g / f);
              (j -= Math.ceil(e / f)), (h = j);
            } else h = g - e;
            return (a = c ? a : Math.min(a, h)), (a *= f || 1), Math.max(0, a);
          }),
          (e.prototype.copyPlaceRectPosition = function () {
            (this.rect.x = this.placeRect.x), (this.rect.y = this.placeRect.y);
          }),
          (e.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element),
              this.layout.packer.addSpace(this.rect),
              this.emitEvent("remove", [this]);
          }),
          e
        );
      }
      "function" == typeof define && define.amd
        ? define(
            "packery/js/item",
            [
              "get-style-property/get-style-property",
              "outlayer/outlayer",
              "./rect",
            ],
            b
          )
        : "object" == typeof exports
        ? (module.exports = b(
            require("desandro-get-style-property"),
            require("outlayer"),
            require("./rect")
          ))
        : (a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect));
    })(window),
    (function (a) {
      function b(a, b, c, d, e, f) {
        function g(a, b) {
          return a.position.y - b.position.y || a.position.x - b.position.x;
        }
        function h(a, b) {
          return a.position.x - b.position.x || a.position.y - b.position.y;
        }
        d.prototype.canFit = function (a) {
          return this.width >= a.width - 1 && this.height >= a.height - 1;
        };
        var i = c.create("packery");
        return (
          (i.Item = f),
          (i.prototype._create = function () {
            c.prototype._create.call(this),
              (this.packer = new e()),
              this.stamp(this.options.stamped);
            var a = this;
            (this.handleDraggabilly = {
              dragStart: function (b) {
                a.itemDragStart(b.element);
              },
              dragMove: function (b) {
                a.itemDragMove(b.element, b.position.x, b.position.y);
              },
              dragEnd: function (b) {
                a.itemDragEnd(b.element);
              },
            }),
              (this.handleUIDraggable = {
                start: function (b) {
                  a.itemDragStart(b.currentTarget);
                },
                drag: function (b, c) {
                  a.itemDragMove(
                    b.currentTarget,
                    c.position.left,
                    c.position.top
                  );
                },
                stop: function (b) {
                  a.itemDragEnd(b.currentTarget);
                },
              });
          }),
          (i.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurements();
            var a = this.packer;
            this.options.isHorizontal
              ? ((a.width = Number.POSITIVE_INFINITY),
                (a.height = this.size.innerHeight + this.gutter),
                (a.sortDirection = "rightwardTopToBottom"))
              : ((a.width = this.size.innerWidth + this.gutter),
                (a.height = Number.POSITIVE_INFINITY),
                (a.sortDirection = "downwardLeftToRight")),
              a.reset(),
              (this.maxY = 0),
              (this.maxX = 0);
          }),
          (i.prototype._getMeasurements = function () {
            this._getMeasurement("columnWidth", "width"),
              this._getMeasurement("rowHeight", "height"),
              this._getMeasurement("gutter", "width");
          }),
          (i.prototype._getItemLayoutPosition = function (a) {
            return this._packItem(a), a.rect;
          }),
          (i.prototype._packItem = function (a) {
            this._setRectSize(a.element, a.rect),
              this.packer.pack(a.rect),
              this._setMaxXY(a.rect);
          }),
          (i.prototype._setMaxXY = function (a) {
            (this.maxX = Math.max(a.x + a.width, this.maxX)),
              (this.maxY = Math.max(a.y + a.height, this.maxY));
          }),
          (i.prototype._setRectSize = function (a, c) {
            var d = b(a),
              e = d.outerWidth,
              f = d.outerHeight;
            (e || f) &&
              ((e = this._applyGridGutter(e, this.columnWidth)),
              (f = this._applyGridGutter(f, this.rowHeight))),
              (c.width = Math.min(e, this.packer.width)),
              (c.height = Math.min(f, this.packer.height));
          }),
          (i.prototype._applyGridGutter = function (a, b) {
            if (!b) return a + this.gutter;
            b += this.gutter;
            var c = a % b,
              d = c && 1 > c ? "round" : "ceil";
            return (a = Math[d](a / b) * b);
          }),
          (i.prototype._getContainerSize = function () {
            return this.options.isHorizontal
              ? { width: this.maxX - this.gutter }
              : { height: this.maxY - this.gutter };
          }),
          (i.prototype._manageStamp = function (a) {
            var b,
              c = this.getItem(a);
            if (c && c.isPlacing) b = c.placeRect;
            else {
              var e = this._getElementOffset(a);
              b = new d({
                x: this.options.isOriginLeft ? e.left : e.right,
                y: this.options.isOriginTop ? e.top : e.bottom,
              });
            }
            this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b);
          }),
          (i.prototype.sortItemsByPosition = function () {
            var a = this.options.isHorizontal ? h : g;
            this.items.sort(a);
          }),
          (i.prototype.fit = function (a, b, c) {
            var d = this.getItem(a);
            d &&
              (this._getMeasurements(),
              this.stamp(d.element),
              d.getSize(),
              (d.isPlacing = !0),
              (b = void 0 === b ? d.rect.x : b),
              (c = void 0 === c ? d.rect.y : c),
              d.positionPlaceRect(b, c, !0),
              this._bindFitEvents(d),
              d.moveTo(d.placeRect.x, d.placeRect.y),
              this.layout(),
              this.unstamp(d.element),
              this.sortItemsByPosition(),
              (d.isPlacing = !1),
              d.copyPlaceRectPosition());
          }),
          (i.prototype._bindFitEvents = function (a) {
            function b() {
              d++, 2 === d && c.emitEvent("fitComplete", [c, a]);
            }
            var c = this,
              d = 0;
            a.on("layout", function () {
              return b(), !0;
            }),
              this.on("layoutComplete", function () {
                return b(), !0;
              });
          }),
          (i.prototype.resize = function () {
            var a = b(this.element),
              c = this.size && a,
              d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            (c && a[d] === this.size[d]) || this.layout();
          }),
          (i.prototype.itemDragStart = function (a) {
            this.stamp(a);
            var b = this.getItem(a);
            b && b.dragStart();
          }),
          (i.prototype.itemDragMove = function (a, b, c) {
            function d() {
              f.layout(), delete f.dragTimeout;
            }
            var e = this.getItem(a);
            e && e.dragMove(b, c);
            var f = this;
            this.clearDragTimeout(), (this.dragTimeout = setTimeout(d, 40));
          }),
          (i.prototype.clearDragTimeout = function () {
            this.dragTimeout && clearTimeout(this.dragTimeout);
          }),
          (i.prototype.itemDragEnd = function (b) {
            var c,
              d = this.getItem(b);
            if (
              (d && ((c = d.didDrag), d.dragStop()),
              !d || (!c && !d.needsPositioning))
            )
              return void this.unstamp(b);
            a.add(d.element, "is-positioning-post-drag");
            var e = this._getDragEndLayoutComplete(b, d);
            d.needsPositioning
              ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y))
              : d && d.copyPlaceRectPosition(),
              this.clearDragTimeout(),
              this.on("layoutComplete", e),
              this.layout();
          }),
          (i.prototype._getDragEndLayoutComplete = function (b, c) {
            var d = c && c.needsPositioning,
              e = 0,
              f = d ? 2 : 1,
              g = this;
            return function () {
              return (
                e++,
                e !== f
                  ? !0
                  : (c &&
                      (a.remove(c.element, "is-positioning-post-drag"),
                      (c.isPlacing = !1),
                      c.copyPlaceRectPosition()),
                    g.unstamp(b),
                    g.sortItemsByPosition(),
                    d && g.emitEvent("dragItemPositioned", [g, c]),
                    !0)
              );
            };
          }),
          (i.prototype.bindDraggabillyEvents = function (a) {
            a.on("dragStart", this.handleDraggabilly.dragStart),
              a.on("dragMove", this.handleDraggabilly.dragMove),
              a.on("dragEnd", this.handleDraggabilly.dragEnd);
          }),
          (i.prototype.bindUIDraggableEvents = function (a) {
            a.on("dragstart", this.handleUIDraggable.start)
              .on("drag", this.handleUIDraggable.drag)
              .on("dragstop", this.handleUIDraggable.stop);
          }),
          (i.Rect = d),
          (i.Packer = e),
          i
        );
      }
      "function" == typeof define && define.amd
        ? define(
            "packery/js/packery",
            [
              "classie/classie",
              "get-size/get-size",
              "outlayer/outlayer",
              "./rect",
              "./packer",
              "./item",
            ],
            b
          )
        : "object" == typeof exports
        ? (module.exports = b(
            require("desandro-classie"),
            require("get-size"),
            require("outlayer"),
            require("./rect"),
            require("./packer"),
            require("./item")
          ))
        : (a.Packery = b(
            a.classie,
            a.getSize,
            a.Outlayer,
            a.Packery.Rect,
            a.Packery.Packer,
            a.Packery.Item
          ));
    })(window),
    (function (a) {
      function b(a, b) {
        for (var c in b) a[c] = b[c];
        return a;
      }
      function c(a, c, d) {
        var e = a.create("packery"),
          f = e.prototype._getElementOffset,
          g = e.prototype._getMeasurement;
        b(e.prototype, c.prototype),
          (e.prototype._getElementOffset = f),
          (e.prototype._getMeasurement = g);
        var h = e.prototype._resetLayout;
        e.prototype._resetLayout = function () {
          (this.packer = this.packer || new c.Packer()),
            h.apply(this, arguments);
        };
        var i = e.prototype._getItemLayoutPosition;
        e.prototype._getItemLayoutPosition = function (a) {
          return (a.rect = a.rect || new c.Rect()), i.call(this, a);
        };
        var j = e.prototype._manageStamp;
        return (
          (e.prototype._manageStamp = function () {
            (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
              (this.options.isOriginTop = this.isotope.options.isOriginTop),
              j.apply(this, arguments);
          }),
          (e.prototype.needsResizeLayout = function () {
            var a = d(this.element),
              b = this.size && a,
              c = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            return b && a[c] !== this.size[c];
          }),
          e
        );
      }
      "function" == typeof define && define.amd
        ? define(
            [
              "isotope/js/layout-mode",
              "packery/js/packery",
              "get-size/get-size",
            ],
            c
          )
        : "object" == typeof exports
        ? (module.exports = c(
            require("isotope-layout/js/layout-mode"),
            require("packery"),
            require("get-size")
          ))
        : c(a.Isotope.LayoutMode, a.Packery, a.getSize);
    })(window);

  /*!
   * imagesLoaded PACKAGED v3.0.2
   * JavaScript is all like "You images are done yet or what?"
   */

  /*!
   * EventEmitter v4.1.0 - git.io/ee
   * Oliver Caldwell
   * MIT license
   * @preserve
   */

  (function (exports) {
    // Place the script in strict mode
    "use strict";

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size

    // Easy access to the prototype
    var proto = EventEmitter.prototype,
      nativeIndexOf = Array.prototype.indexOf ? true : false;

    /**
     * Finds the index of the listener for the event in it's storage array.
     *
     * @param {Function} listener Method to look for.
     * @param {Function[]} listeners Array of listeners to search through.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listener, listeners) {
      // Return the index via the native method if possible
      if (nativeIndexOf) {
        return listeners.indexOf(listener);
      }

      // There is no native method
      // Use a manual loop to find the index
      var i = listeners.length;
      while (i--) {
        // If the listener matches, return it's index
        if (listeners[i] === listener) {
          return i;
        }
      }

      // Default to returning -1
      return -1;
    }

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function () {
      return this._events || (this._events = {});
    };

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function (evt) {
      // Create a shortcut to the storage object
      // Initialise it if it does not exists yet
      var events = this._getEvents(),
        response,
        key;

      // Return a concatenated array of all matching events if
      // the selector is a regular expression.
      if (typeof evt === "object") {
        response = {};
        for (key in events) {
          if (events.hasOwnProperty(key) && evt.test(key)) {
            response[key] = events[key];
          }
        }
      } else {
        response = events[evt] || (events[evt] = []);
      }

      return response;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function (evt) {
      var listeners = this.getListeners(evt),
        response;

      if (listeners instanceof Array) {
        response = {};
        response[evt] = listeners;
      }

      return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function (evt, listener) {
      var listeners = this.getListenersAsObject(evt),
        key;

      for (key in listeners) {
        if (
          listeners.hasOwnProperty(key) &&
          indexOfListener(listener, listeners[key]) === -1
        ) {
          listeners[key].push(listener);
        }
      }

      // Return the instance of EventEmitter to allow chaining
      return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = proto.addListener;

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function (evt) {
      this.getListeners(evt);
      return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function (evts) {
      for (var i = 0; i < evts.length; i += 1) {
        this.defineEvent(evts[i]);
      }
      return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function (evt, listener) {
      var listeners = this.getListenersAsObject(evt),
        index,
        key;

      for (key in listeners) {
        if (listeners.hasOwnProperty(key)) {
          index = indexOfListener(listener, listeners[key]);

          if (index !== -1) {
            listeners[key].splice(index, 1);
          }
        }
      }

      // Return the instance of EventEmitter to allow chaining
      return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = proto.removeListener;

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function (evt, listeners) {
      // Pass through to manipulateListeners
      return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function (evt, listeners) {
      // Pass through to manipulateListeners
      return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function (remove, evt, listeners) {
      // Initialise any required variables
      var i,
        value,
        single = remove ? this.removeListener : this.addListener,
        multiple = remove ? this.removeListeners : this.addListeners;

      // If evt is an object then pass each of it's properties to this method
      if (typeof evt === "object" && !(evt instanceof RegExp)) {
        for (i in evt) {
          if (evt.hasOwnProperty(i) && (value = evt[i])) {
            // Pass the single listener straight through to the singular method
            if (typeof value === "function") {
              single.call(this, i, value);
            } else {
              // Otherwise pass back to the multiple function
              multiple.call(this, i, value);
            }
          }
        }
      } else {
        // So evt must be a string
        // And listeners must be an array of listeners
        // Loop over it and pass each one to the multiple method
        i = listeners.length;
        while (i--) {
          single.call(this, evt, listeners[i]);
        }
      }

      // Return the instance of EventEmitter to allow chaining
      return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function (evt) {
      var type = typeof evt,
        events = this._getEvents(),
        key;

      // Remove different things depending on the state of evt
      if (type === "string") {
        // Remove all listeners for the specified event
        delete events[evt];
      } else if (type === "object") {
        // Remove all events matching the regex.
        for (key in events) {
          if (events.hasOwnProperty(key) && evt.test(key)) {
            delete events[key];
          }
        }
      } else {
        // Remove all listeners in all events
        delete this._events;
      }

      // Return the instance of EventEmitter to allow chaining
      return this;
    };

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function (evt, args) {
      var listeners = this.getListenersAsObject(evt),
        i,
        key,
        response;

      for (key in listeners) {
        if (listeners.hasOwnProperty(key)) {
          i = listeners[key].length;

          while (i--) {
            // If the listener returns true then it shall be removed from the event
            // The function is executed either with a basic call or an apply if there is an args array
            response = args
              ? listeners[key][i].apply(null, args)
              : listeners[key][i]();
            if (response === true) {
              this.removeListener(evt, listeners[key][i]);
            }
          }
        }
      }

      // Return the instance of EventEmitter to allow chaining
      return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = proto.emitEvent;

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function (evt) {
      var args = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(evt, args);
    };

    // Expose the class either via AMD or the global object
    if (typeof define === "function" && define.amd) {
      define(function () {
        return EventEmitter;
      });
    } else {
      exports.EventEmitter = EventEmitter;
    }
  })(this);
  /*!
   * eventie v1.0.3
   * event binding helper
   *   eventie.bind( elem, 'click', myFn )
   *   eventie.unbind( elem, 'click', myFn )
   */

  /*jshint browser: true, undef: true, unused: true */
  /*global define: false */

  (function (window) {
    "use strict";

    var docElem = document.documentElement;

    var bind = function () {};

    if (docElem.addEventListener) {
      bind = function (obj, type, fn) {
        obj.addEventListener(type, fn, false);
      };
    } else if (docElem.attachEvent) {
      bind = function (obj, type, fn) {
        obj[type + fn] = fn.handleEvent
          ? function () {
              var event = window.event;
              // add event.target
              event.target = event.target || event.srcElement;
              fn.handleEvent.call(fn, event);
            }
          : function () {
              var event = window.event;
              // add event.target
              event.target = event.target || event.srcElement;
              fn.call(obj, event);
            };
        obj.attachEvent("on" + type, obj[type + fn]);
      };
    }

    var unbind = function () {};

    if (docElem.removeEventListener) {
      unbind = function (obj, type, fn) {
        obj.removeEventListener(type, fn, false);
      };
    } else if (docElem.detachEvent) {
      unbind = function (obj, type, fn) {
        obj.detachEvent("on" + type, obj[type + fn]);
        try {
          delete obj[type + fn];
        } catch (err) {
          // can't delete window object properties
          obj[type + fn] = undefined;
        }
      };
    }

    var eventie = {
      bind: bind,
      unbind: unbind,
    };

    // transport
    if (typeof define === "function" && define.amd) {
      // AMD
      define(eventie);
    } else {
      // browser global
      window.eventie = eventie;
    }
  })(this);

  /*!
   * imagesLoaded v3.0.2
   * JavaScript is all like "You images are done yet or what?"
   */

  (function (window) {
    "use strict";

    var $ = window.jQuery;
    var console = window.console;
    var hasConsole = typeof console !== "undefined";

    // -------------------------- helpers -------------------------- //

    // extend objects
    function extend(a, b) {
      for (var prop in b) {
        a[prop] = b[prop];
      }
      return a;
    }

    var objToString = Object.prototype.toString;
    function isArray(obj) {
      return objToString.call(obj) === "[object Array]";
    }

    // turn element or nodeList into an array
    function makeArray(obj) {
      var ary = [];
      if (isArray(obj)) {
        // use object if already an array
        ary = obj;
      } else if (typeof obj.length === "number") {
        // convert nodeList to array
        for (var i = 0, len = obj.length; i < len; i++) {
          ary.push(obj[i]);
        }
      } else {
        // array of single index
        ary.push(obj);
      }
      return ary;
    }

    // --------------------------  -------------------------- //

    function defineImagesLoaded(EventEmitter, eventie) {
      /**
       * @param {Array, Element, NodeList, String} elem
       * @param {Object or Function} options - if function, use as callback
       * @param {Function} onAlways - callback function
       */
      function ImagesLoaded(elem, options, onAlways) {
        // coerce ImagesLoaded() without new, to be new ImagesLoaded()
        if (!(this instanceof ImagesLoaded)) {
          return new ImagesLoaded(elem, options);
        }
        // use elem as selector string
        if (typeof elem === "string") {
          elem = document.querySelectorAll(elem);
        }

        this.elements = makeArray(elem);
        this.options = extend({}, this.options);

        if (typeof options === "function") {
          onAlways = options;
        } else {
          extend(this.options, options);
        }

        if (onAlways) {
          this.on("always", onAlways);
        }

        this.getImages();

        if ($) {
          // add jQuery Deferred object
          this.jqDeferred = new $.Deferred();
        }

        // HACK check async to allow time to bind listeners
        var _this = this;
        setTimeout(function () {
          _this.check();
        });
      }

      ImagesLoaded.prototype = new EventEmitter();

      ImagesLoaded.prototype.options = {};

      ImagesLoaded.prototype.getImages = function () {
        this.images = [];

        // filter & find items if we have an item selector
        for (var i = 0, len = this.elements.length; i < len; i++) {
          var elem = this.elements[i];
          // filter siblings
          if (elem.nodeName === "IMG") {
            this.addImage(elem);
          }
          // find children
          var childElems = elem.querySelectorAll("img");
          // concat childElems to filterFound array
          for (var j = 0, jLen = childElems.length; j < jLen; j++) {
            var img = childElems[j];
            this.addImage(img);
          }
        }
      };

      /**
       * @param {Image} img
       */
      ImagesLoaded.prototype.addImage = function (img) {
        var loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
      };

      ImagesLoaded.prototype.check = function () {
        var _this = this;
        var checkedCount = 0;
        var length = this.images.length;
        this.hasAnyBroken = false;
        // complete if no images
        if (!length) {
          this.complete();
          return;
        }

        function onConfirm(image, message) {
          if (_this.options.debug && hasConsole) {
            console.log("confirm", image, message);
          }

          _this.progress(image);
          checkedCount++;
          if (checkedCount === length) {
            _this.complete();
          }
          return true; // bind once
        }

        for (var i = 0; i < length; i++) {
          var loadingImage = this.images[i];
          loadingImage.on("confirm", onConfirm);
          loadingImage.check();
        }
      };

      ImagesLoaded.prototype.progress = function (image) {
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        this.emit("progress", this, image);
        if (this.jqDeferred) {
          this.jqDeferred.notify(this, image);
        }
      };

      ImagesLoaded.prototype.complete = function () {
        var eventName = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = true;
        this.emit(eventName, this);
        this.emit("always", this);
        if (this.jqDeferred) {
          var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[jqMethod](this);
        }
      };

      // -------------------------- jquery -------------------------- //

      if ($) {
        $.fn.imagesLoaded = function (options, callback) {
          var instance = new ImagesLoaded(this, options, callback);
          return instance.jqDeferred.promise($(this));
        };
      }

      // --------------------------  -------------------------- //

      var cache = {};

      function LoadingImage(img) {
        this.img = img;
      }

      LoadingImage.prototype = new EventEmitter();

      LoadingImage.prototype.check = function () {
        // first check cached any previous images that have same src
        var cached = cache[this.img.src];
        if (cached) {
          this.useCached(cached);
          return;
        }
        // add this to cache
        cache[this.img.src] = this;

        // If complete is true and browser supports natural sizes,
        // try to check for image status manually.
        if (this.img.complete && this.img.naturalWidth !== undefined) {
          // report based on naturalWidth
          this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
          return;
        }

        // If none of the checks above matched, simulate loading on detached element.
        var proxyImage = (this.proxyImage = new Image());
        eventie.bind(proxyImage, "load", this);
        eventie.bind(proxyImage, "error", this);
        proxyImage.src = this.img.src;
      };

      LoadingImage.prototype.useCached = function (cached) {
        if (cached.isConfirmed) {
          this.confirm(cached.isLoaded, "cached was confirmed");
        } else {
          var _this = this;
          cached.on("confirm", function (image) {
            _this.confirm(image.isLoaded, "cache emitted confirmed");
            return true; // bind once
          });
        }
      };

      LoadingImage.prototype.confirm = function (isLoaded, message) {
        this.isConfirmed = true;
        this.isLoaded = isLoaded;
        this.emit("confirm", this, message);
      };

      // trigger specified handler for event type
      LoadingImage.prototype.handleEvent = function (event) {
        var method = "on" + event.type;
        if (this[method]) {
          this[method](event);
        }
      };

      LoadingImage.prototype.onload = function () {
        this.confirm(true, "onload");
        this.unbindProxyEvents();
      };

      LoadingImage.prototype.onerror = function () {
        this.confirm(false, "onerror");
        this.unbindProxyEvents();
      };

      LoadingImage.prototype.unbindProxyEvents = function () {
        eventie.unbind(this.proxyImage, "load", this);
        eventie.unbind(this.proxyImage, "error", this);
      };

      // -----  ----- //

      return ImagesLoaded;
    }

    // -------------------------- transport -------------------------- //

    if (typeof define === "function" && define.amd) {
      // AMD
      define(["eventEmitter", "eventie"], defineImagesLoaded);
    } else {
      // browser global
      window.imagesLoaded = defineImagesLoaded(
        window.EventEmitter,
        window.eventie
      );
    }
  })(window);

  /*
   * jQuery Easing v1.3.2
   */
  (function (h) {
    h.easing.jswing = h.easing.swing;
    h.extend(h.easing, {
      def: "easeOutQuad",
      swing: function (e, a, c, b, d) {
        return h.easing[h.easing.def](e, a, c, b, d);
      },
      easeInQuad: function (e, a, c, b, d) {
        return b * (a /= d) * a + c;
      },
      easeOutQuad: function (e, a, c, b, d) {
        return -b * (a /= d) * (a - 2) + c;
      },
      easeInOutQuad: function (e, a, c, b, d) {
        return 1 > (a /= d / 2)
          ? (b / 2) * a * a + c
          : (-b / 2) * (--a * (a - 2) - 1) + c;
      },
      easeInCubic: function (e, a, c, b, d) {
        return b * (a /= d) * a * a + c;
      },
      easeOutCubic: function (e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + c;
      },
      easeInOutCubic: function (e, a, c, b, d) {
        return 1 > (a /= d / 2)
          ? (b / 2) * a * a * a + c
          : (b / 2) * ((a -= 2) * a * a + 2) + c;
      },
      easeInQuart: function (e, a, c, b, d) {
        return b * (a /= d) * a * a * a + c;
      },
      easeOutQuart: function (e, a, c, b, d) {
        return -b * ((a = a / d - 1) * a * a * a - 1) + c;
      },
      easeInOutQuart: function (e, a, c, b, d) {
        return 1 > (a /= d / 2)
          ? (b / 2) * a * a * a * a + c
          : (-b / 2) * ((a -= 2) * a * a * a - 2) + c;
      },
      easeInQuint: function (e, a, c, b, d) {
        return b * (a /= d) * a * a * a * a + c;
      },
      easeOutQuint: function (e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a * a * a + 1) + c;
      },
      easeInOutQuint: function (e, a, c, b, d) {
        return 1 > (a /= d / 2)
          ? (b / 2) * a * a * a * a * a + c
          : (b / 2) * ((a -= 2) * a * a * a * a + 2) + c;
      },
      easeInSine: function (e, a, c, b, d) {
        return -b * Math.cos((a / d) * (Math.PI / 2)) + b + c;
      },
      easeOutSine: function (e, a, c, b, d) {
        return b * Math.sin((a / d) * (Math.PI / 2)) + c;
      },
      easeInOutSine: function (e, a, c, b, d) {
        return (-b / 2) * (Math.cos((Math.PI * a) / d) - 1) + c;
      },
      easeInExpo: function (e, a, c, b, d) {
        return 0 == a ? c : b * Math.pow(2, 10 * (a / d - 1)) + c;
      },
      easeOutExpo: function (e, a, c, b, d) {
        return a == d ? c + b : b * (-Math.pow(2, (-10 * a) / d) + 1) + c;
      },
      easeInOutExpo: function (e, a, c, b, d) {
        return 0 == a
          ? c
          : a == d
          ? c + b
          : 1 > (a /= d / 2)
          ? (b / 2) * Math.pow(2, 10 * (a - 1)) + c
          : (b / 2) * (-Math.pow(2, -10 * --a) + 2) + c;
      },
      easeInCirc: function (e, a, c, b, d) {
        return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c;
      },
      easeOutCirc: function (e, a, c, b, d) {
        return b * Math.sqrt(1 - (a = a / d - 1) * a) + c;
      },
      easeInOutCirc: function (e, a, c, b, d) {
        return 1 > (a /= d / 2)
          ? (-b / 2) * (Math.sqrt(1 - a * a) - 1) + c
          : (b / 2) * (Math.sqrt(1 - (a -= 2) * a) + 1) + c;
      },
      easeInElastic: function (e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
          g = b;
        if (0 == a) return c;
        if (1 == (a /= d)) return c + b;
        f || (f = 0.3 * d);
        g < Math.abs(b)
          ? ((g = b), (e = f / 4))
          : (e = (f / (2 * Math.PI)) * Math.asin(b / g));
        return (
          -(
            g *
            Math.pow(2, 10 * --a) *
            Math.sin((2 * (a * d - e) * Math.PI) / f)
          ) + c
        );
      },
      easeOutElastic: function (e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
          g = b;
        if (0 == a) return c;
        if (1 == (a /= d)) return c + b;
        f || (f = 0.3 * d);
        g < Math.abs(b)
          ? ((g = b), (e = f / 4))
          : (e = (f / (2 * Math.PI)) * Math.asin(b / g));
        return (
          g * Math.pow(2, -10 * a) * Math.sin((2 * (a * d - e) * Math.PI) / f) +
          b +
          c
        );
      },
      easeInOutElastic: function (e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
          g = b;
        if (0 == a) return c;
        if (2 == (a /= d / 2)) return c + b;
        f || (f = 0.3 * d * 1.5);
        g < Math.abs(b)
          ? ((g = b), (e = f / 4))
          : (e = (f / (2 * Math.PI)) * Math.asin(b / g));
        return 1 > a
          ? -0.5 *
              g *
              Math.pow(2, 10 * --a) *
              Math.sin((2 * (a * d - e) * Math.PI) / f) +
              c
          : g *
              Math.pow(2, -10 * --a) *
              Math.sin((2 * (a * d - e) * Math.PI) / f) *
              0.5 +
              b +
              c;
      },
      easeInBack: function (e, a, c, b, d, f) {
        void 0 == f && (f = 1.70158);
        return b * (a /= d) * a * ((f + 1) * a - f) + c;
      },
      easeOutBack: function (e, a, c, b, d, f) {
        void 0 == f && (f = 1.70158);
        return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c;
      },
      easeInOutBack: function (e, a, c, b, d, f) {
        void 0 == f && (f = 1.70158);
        return 1 > (a /= d / 2)
          ? (b / 2) * a * a * (((f *= 1.525) + 1) * a - f) + c
          : (b / 2) * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c;
      },
      easeInBounce: function (e, a, c, b, d) {
        return b - h.easing.easeOutBounce(e, d - a, 0, b, d) + c;
      },
      easeOutBounce: function (e, a, c, b, d) {
        return (a /= d) < 1 / 2.75
          ? 7.5625 * b * a * a + c
          : a < 2 / 2.75
          ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c
          : a < 2.5 / 2.75
          ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c
          : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c;
      },
      easeInOutBounce: function (e, a, c, b, d) {
        return a < d / 2
          ? 0.5 * h.easing.easeInBounce(e, 2 * a, 0, b, d) + c
          : 0.5 * h.easing.easeOutBounce(e, 2 * a - d, 0, b, d) + 0.5 * b + c;
      },
    });
  })(jQuery);

  /*!
   * Vossen Google Maps v2.0
   */
  function vossenGoogleMaps() {
    function g(b, e) {
      var f = new google.maps.LatLng(b, e),
        g = {
          zoom: d,
          center: f,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: !1,
          mapTypeControl: !1,
        },
        h = new google.maps.Map(document.getElementById("vossen-map"), g),
        i = '<div class="vossen-map-info">' + c + "</div>",
        j = new google.maps.InfoWindow({ content: i }),
        k = new google.maps.Marker({
          position: f,
          map: h,
          icon: "img/assets/marker.png",
          title: "location : Dublin",
        });
      k.addListener("click", function () {
        j.open(h, k);
      });
      var l = [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#0c0b0b" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#090909" }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#d4e4eb" }, { visibility: "on" }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#c7d1d5" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9b7f7f" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#fef7f7" }],
          },
        ],
        m = [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 36 },
              { color: "#000000" },
              { lightness: 40 },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#000000" },
              { lightness: 16 },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }, { lightness: 20 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 20 }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 21 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }, { lightness: 17 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 18 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 16 }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 19 }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 17 }],
          },
        ];
      if ("light" === a.data("map-style"))
        var n = new google.maps.StyledMapType(l);
      else if ("dark" === a.data("map-style"))
        var n = new google.maps.StyledMapType(m);
      else var n = new google.maps.StyledMapType();
      h.mapTypes.set("map_style", n), h.setMapTypeId("map_style");
    }
    var a = $("#vossen-map"),
      b = a.data("map-address"),
      c = a.data("marker-info"),
      d = a.data("map-zoom"),
      e = a.data("map-height");
    a.css("height", e);
    new google.maps.Geocoder().geocode({ address: b }, function (a, b) {
      if (b == google.maps.GeocoderStatus.OK) {
        var c = a[0].geometry.location.lat(),
          d = a[0].geometry.location.lng();
        g(c, d);
      }
    });
  }
  function initVossenMaps() {
    var a = $("#vossen-map").data("maps-api-key"),
      b = document.createElement("script");
    (b.src =
      "https://maps.googleapis.com/maps/api/js?key=" +
      a +
      "&callback=vossenGoogleMaps"),
      document.body.appendChild(b);
  }

  /*!
   * Vossen Hero YT v2.0
   */
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("vossen-youtube", {
      width: $(window).width() + 0,
      height: $(window).height() + 0,
      videoId: vosVideoId,
      playerVars: { controls: 0, showinfo: 0 },
      events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange },
    });
  }
  function playToggle() {
    player.playVideo(),
      (document.getElementById("play-toggle").innerHTML =
        '<i class="ion-pause"></i>');
  }
  function pauseToggle() {
    player.pauseVideo(),
      (document.getElementById("play-toggle").innerHTML =
        '<i class="ion-play"></i>');
  }
  function vosResize() {
    var a = $(window).width() + 0,
      b = $(window).height() + 0;
    a / b > 16 / 9
      ? (player.setSize(a, (a / 16) * 9),
        $("#vossen-youtube").css({ left: "50%" }))
      : (player.setSize((b / 9) * 16, b),
        $("#vossen-youtube").css({
          left: -($("#vossen-youtube").outerWidth() - a) / 2,
        }));
  }
  function onPlayerReady() {
    var a =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      );
    a
      ? $("#play-toggle").on("click", function () {
          playToggle();
        })
      : playToggle(),
      player.mute(),
      vosResize(),
      $(window).on("resize", function () {
        vosResize();
      });
  }
  function onPlayerStateChange(a) {
    $("#mute-toggle").on("click", function () {
      $(this);
      player.isMuted()
        ? (player.unMute(),
          (document.getElementById("mute-toggle").innerHTML =
            '<i class="ion-android-volume-up"></i>'))
        : (player.mute(),
          (document.getElementById("mute-toggle").innerHTML =
            '<i class="ion-android-volume-mute"></i>'));
    }),
      a.data == YT.PlayerState.ENDED && player.playVideo(),
      $("#play-toggle").on("click", function () {
        a.data == YT.PlayerState.PLAYING
          ? pauseToggle()
          : a.data == YT.PlayerState.PAUSED && playToggle();
      });
  }
  if ($("#vossen-youtube").length) {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var vosVideoId = $("#vossen-youtube").attr("data-youtube-video-id"),
      player;
  }

  /*!
   * Twitter Post Fetcher v15.0.1
   */
  if ($("#twitter-feed-slider, #twitter-feed-list").length) {
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof exports === "object") {
        module.exports = factory();
      } else {
        factory();
      }
    })(this, function () {
      var domNode = "";
      var maxTweets = 20;
      var parseLinks = true;
      var queue = [];
      var inProgress = false;
      var printTime = true;
      var printUser = true;
      var formatterFunction = null;
      var supportsClassName = true;
      var showRts = true;
      var customCallbackFunction = null;
      var showInteractionLinks = true;
      var showImages = false;
      var targetBlank = true;
      var lang = "en";
      var permalinks = true;
      var dataOnly = false;
      var script = null;
      var scriptAdded = false;
      function handleTweets(tweets) {
        if (customCallbackFunction === null) {
          var x = tweets.length;
          var n = 0;
          var element = document.getElementById(domNode);
          var html = "<ul>";
          while (n < x) {
            html += "<li>" + tweets[n] + "</li>";
            n++;
          }
          html += "</ul>";
          element.innerHTML = html;
        } else {
          customCallbackFunction(tweets);
        }
      }
      function strip(data) {
        return data
          .replace(/<b[^>]*>(.*?)<\/b>/gi, function (a, s) {
            return s;
          })
          .replace(
            /class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,
            ""
          );
      }
      function targetLinksToNewWindow(el) {
        var links = el.getElementsByTagName("a");
        for (var i = links.length - 1; i >= 0; i--) {
          links[i].setAttribute("target", "_blank");
        }
      }
      function getElementsByClassName(node, classname) {
        var a = [];
        var regex = new RegExp("(^| )" + classname + "( |$)");
        var elems = node.getElementsByTagName("*");
        for (var i = 0, j = elems.length; i < j; i++) {
          if (regex.test(elems[i].className)) {
            a.push(elems[i]);
          }
        }
        return a;
      }
      function extractImageUrl(image_data) {
        if (
          image_data !== undefined &&
          image_data.innerHTML.indexOf("data-srcset") >= 0
        ) {
          var data_src = image_data.innerHTML.match(
            /data-srcset="([A-z0-9%_\.-]+)/i
          )[0];
          return decodeURIComponent(data_src).split('"')[1];
        }
      }
      var twitterFetcher = {
        fetch: function (config) {
          if (config.maxTweets === undefined) {
            config.maxTweets = 20;
          }
          if (config.enableLinks === undefined) {
            config.enableLinks = true;
          }
          if (config.showUser === undefined) {
            config.showUser = true;
          }
          if (config.showTime === undefined) {
            config.showTime = true;
          }
          if (config.dateFunction === undefined) {
            config.dateFunction = "default";
          }
          if (config.showRetweet === undefined) {
            config.showRetweet = true;
          }
          if (config.customCallback === undefined) {
            config.customCallback = null;
          }
          if (config.showInteraction === undefined) {
            config.showInteraction = true;
          }
          if (config.showImages === undefined) {
            config.showImages = false;
          }
          if (config.linksInNewWindow === undefined) {
            config.linksInNewWindow = true;
          }
          if (config.showPermalinks === undefined) {
            config.showPermalinks = true;
          }
          if (config.dataOnly === undefined) {
            config.dataOnly = false;
          }
          if (inProgress) {
            queue.push(config);
          } else {
            inProgress = true;
            domNode = config.domId;
            maxTweets = config.maxTweets;
            parseLinks = config.enableLinks;
            printUser = config.showUser;
            printTime = config.showTime;
            showRts = config.showRetweet;
            formatterFunction = config.dateFunction;
            customCallbackFunction = config.customCallback;
            showInteractionLinks = config.showInteraction;
            showImages = config.showImages;
            targetBlank = config.linksInNewWindow;
            permalinks = config.showPermalinks;
            dataOnly = config.dataOnly;
            var head = document.getElementsByTagName("head")[0];
            if (script !== null) {
              head.removeChild(script);
            }
            script = document.createElement("script");
            script.type = "text/javascript";
            if (config.list !== undefined) {
              script.src =
                "https://syndication.twitter.com/timeline/list?" +
                "callback=__twttrf.callback&dnt=false&list_slug=" +
                config.list.listSlug +
                "&screen_name=" +
                config.list.screenName +
                "&suppress_response_codes=true&lang=" +
                (config.lang || lang) +
                "&rnd=" +
                Math.random();
            } else if (config.profile !== undefined) {
              script.src =
                "https://syndication.twitter.com/timeline/profile?" +
                "callback=__twttrf.callback&dnt=false" +
                "&screen_name=" +
                config.profile.screenName +
                "&suppress_response_codes=true&lang=" +
                (config.lang || lang) +
                "&rnd=" +
                Math.random();
            } else if (config.likes !== undefined) {
              script.src =
                "https://syndication.twitter.com/timeline/likes?" +
                "callback=__twttrf.callback&dnt=false" +
                "&screen_name=" +
                config.likes.screenName +
                "&suppress_response_codes=true&lang=" +
                (config.lang || lang) +
                "&rnd=" +
                Math.random();
            } else {
              script.src =
                "https://cdn.syndication.twimg.com/widgets/timelines/" +
                config.id +
                "?&lang=" +
                (config.lang || lang) +
                "&callback=__twttrf.callback&" +
                "suppress_response_codes=true&rnd=" +
                Math.random();
            }
            head.appendChild(script);
          }
        },
        callback: function (data) {
          if (data === undefined || data.body === undefined) {
            inProgress = false;
            if (queue.length > 0) {
              twitterFetcher.fetch(queue[0]);
              queue.splice(0, 1);
            }
            return;
          }
          data.body = data.body.replace(
            /(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,
            ""
          );
          if (!showImages) {
            data.body = data.body.replace(
              /(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,
              ""
            );
          }
          if (!printUser) {
            data.body = data.body.replace(
              /(<img[^c]*class="Avatar"[^>]*>)/g,
              ""
            );
          }
          var div = document.createElement("div");
          div.innerHTML = data.body;
          if (typeof div.getElementsByClassName === "undefined") {
            supportsClassName = false;
          }
          function swapDataSrc(element) {
            var avatarImg = element.getElementsByTagName("img")[0];
            avatarImg.src = avatarImg.getAttribute("data-src-2x");
            return element;
          }
          var tweets = [];
          var authors = [];
          var times = [];
          var images = [];
          var rts = [];
          var tids = [];
          var permalinksURL = [];
          var x = 0;
          if (supportsClassName) {
            var tmp = div.getElementsByClassName("timeline-Tweet");
            while (x < tmp.length) {
              if (
                tmp[x].getElementsByClassName("timeline-Tweet-retweetCredit")
                  .length > 0
              ) {
                rts.push(true);
              } else {
                rts.push(false);
              }
              if (!rts[x] || (rts[x] && showRts)) {
                tweets.push(
                  tmp[x].getElementsByClassName("timeline-Tweet-text")[0]
                );
                tids.push(tmp[x].getAttribute("data-tweet-id"));
                if (printUser) {
                  authors.push(
                    swapDataSrc(
                      tmp[x].getElementsByClassName("timeline-Tweet-author")[0]
                    )
                  );
                }
                times.push(tmp[x].getElementsByClassName("dt-updated")[0]);
                permalinksURL.push(
                  tmp[x].getElementsByClassName("timeline-Tweet-timestamp")[0]
                );
                if (
                  tmp[x].getElementsByClassName("timeline-Tweet-media")[0] !==
                  undefined
                ) {
                  images.push(
                    tmp[x].getElementsByClassName("timeline-Tweet-media")[0]
                  );
                } else {
                  images.push(undefined);
                }
              }
              x++;
            }
          } else {
            var tmp = getElementsByClassName(div, "timeline-Tweet");
            while (x < tmp.length) {
              if (
                getElementsByClassName(tmp[x], "timeline-Tweet-retweetCredit")
                  .length > 0
              ) {
                rts.push(true);
              } else {
                rts.push(false);
              }
              if (!rts[x] || (rts[x] && showRts)) {
                tweets.push(
                  getElementsByClassName(tmp[x], "timeline-Tweet-text")[0]
                );
                tids.push(tmp[x].getAttribute("data-tweet-id"));
                if (printUser) {
                  authors.push(
                    swapDataSrc(
                      getElementsByClassName(tmp[x], "timeline-Tweet-author")[0]
                    )
                  );
                }
                times.push(getElementsByClassName(tmp[x], "dt-updated")[0]);
                permalinksURL.push(
                  getElementsByClassName(tmp[x], "timeline-Tweet-timestamp")[0]
                );
                if (
                  getElementsByClassName(tmp[x], "timeline-Tweet-media")[0] !==
                  undefined
                ) {
                  images.push(
                    getElementsByClassName(tmp[x], "timeline-Tweet-media")[0]
                  );
                } else {
                  images.push(undefined);
                }
              }
              x++;
            }
          }
          if (tweets.length > maxTweets) {
            tweets.splice(maxTweets, tweets.length - maxTweets);
            authors.splice(maxTweets, authors.length - maxTweets);
            times.splice(maxTweets, times.length - maxTweets);
            rts.splice(maxTweets, rts.length - maxTweets);
            images.splice(maxTweets, images.length - maxTweets);
            permalinksURL.splice(maxTweets, permalinksURL.length - maxTweets);
          }
          var arrayTweets = [];
          var x = tweets.length;
          var n = 0;
          if (dataOnly) {
            while (n < x) {
              arrayTweets.push({
                tweet: tweets[n].innerHTML,
                author: authors[n] ? authors[n].innerHTML : "Unknown Author",
                time: times[n].textContent,
                timestamp: times[n]
                  .getAttribute("datetime")
                  .replace("+0000", "Z")
                  .replace(/([\+\-])(\d\d)(\d\d)/, "$1$2:$3"),
                image: extractImageUrl(images[n]),
                rt: rts[n],
                tid: tids[n],
                permalinkURL:
                  permalinksURL[n] === undefined ? "" : permalinksURL[n].href,
              });
              n++;
            }
          } else {
            while (n < x) {
              if (typeof formatterFunction !== "string") {
                var datetimeText = times[n].getAttribute("datetime");
                var newDate = new Date(
                  times[n]
                    .getAttribute("datetime")
                    .replace(/-/g, "/")
                    .replace("T", " ")
                    .split("+")[0]
                );
                var dateString = formatterFunction(newDate, datetimeText);
                times[n].setAttribute("aria-label", dateString);
                if (tweets[n].textContent) {
                  if (supportsClassName) {
                    times[n].textContent = dateString;
                  } else {
                    var h = document.createElement("p");
                    var t = document.createTextNode(dateString);
                    h.appendChild(t);
                    h.setAttribute("aria-label", dateString);
                    times[n] = h;
                  }
                } else {
                  times[n].textContent = dateString;
                }
              }
              var op = "";
              if (parseLinks) {
                if (targetBlank) {
                  targetLinksToNewWindow(tweets[n]);
                  if (printUser) {
                    targetLinksToNewWindow(authors[n]);
                  }
                }
                if (printUser) {
                  op +=
                    '<div class="user">' +
                    strip(authors[n].innerHTML) +
                    "</div>";
                }
                op += '<p class="tweet">' + strip(tweets[n].innerHTML) + "</p>";
                if (printTime) {
                  if (permalinks) {
                    op +=
                      '<p class="timePosted"><a href="' +
                      permalinksURL[n] +
                      '">' +
                      times[n].getAttribute("aria-label") +
                      "</a></p>";
                  } else {
                    op +=
                      '<p class="timePosted">' +
                      times[n].getAttribute("aria-label") +
                      "</p>";
                  }
                }
              } else {
                if (tweets[n].textContent) {
                  if (printUser) {
                    op += '<p class="user">' + authors[n].textContent + "</p>";
                  }
                  op += '<p class="tweet">' + tweets[n].textContent + "</p>";
                  if (printTime) {
                    op +=
                      '<p class="timePosted">' + times[n].textContent + "</p>";
                  }
                } else {
                  if (printUser) {
                    op += '<p class="user">' + authors[n].textContent + "</p>";
                  }
                  op += '<p class="tweet">' + tweets[n].textContent + "</p>";
                  if (printTime) {
                    op +=
                      '<p class="timePosted">' + times[n].textContent + "</p>";
                  }
                }
              }
              if (showInteractionLinks) {
                op +=
                  '<p class="interact"><a href="https://twitter.com/intent/' +
                  "tweet?in_reply_to=" +
                  tids[n] +
                  '" class="twitter_reply_icon"' +
                  (targetBlank ? ' target="_blank">' : ">") +
                  'Reply</a><a href="https://twitter.com/intent/retweet?' +
                  "tweet_id=" +
                  tids[n] +
                  '" class="twitter_retweet_icon"' +
                  (targetBlank ? ' target="_blank">' : ">") +
                  "Retweet</a>" +
                  '<a href="https://twitter.com/intent/favorite?tweet_id=' +
                  tids[n] +
                  '" class="twitter_fav_icon"' +
                  (targetBlank ? ' target="_blank">' : ">") +
                  "Favorite</a></p>";
              }
              if (
                showImages &&
                images[n] !== undefined &&
                extractImageUrl(images[n]) !== undefined
              ) {
                op +=
                  '<div class="media">' +
                  '<img src="' +
                  extractImageUrl(images[n]) +
                  '" alt="Image from tweet" />' +
                  "</div>";
              }
              if (showImages) {
                arrayTweets.push(op);
              } else if (!showImages && tweets[n].textContent.length) {
                arrayTweets.push(op);
              }
              n++;
            }
          }
          handleTweets(arrayTweets);
          inProgress = false;
          if (queue.length > 0) {
            twitterFetcher.fetch(queue[0]);
            queue.splice(0, 1);
          }
        },
      };
      window.__twttrf = twitterFetcher;
      window.twitterFetcher = twitterFetcher;
      return twitterFetcher;
    });
  }

  /*!
   * Magnific Popup v1.1.0
   */
  !(function (a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : a(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function () {},
      u = !!window.jQuery,
      v = a(window),
      w = function (a, c) {
        b.ev.on(o + a + p, c);
      },
      x = function (b, c, d, e) {
        var f = document.createElement("div");
        return (
          (f.className = "mfp-" + b),
          d && (f.innerHTML = d),
          e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
          f
        );
      },
      y = function (c, d) {
        b.ev.triggerHandler(o + c, d),
          b.st.callbacks &&
            ((c = c.charAt(0).toLowerCase() + c.slice(1)),
            b.st.callbacks[c] &&
              b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
      },
      z = function (c) {
        return (
          (c === g && b.currTemplate.closeBtn) ||
            ((b.currTemplate.closeBtn = a(
              b.st.closeMarkup.replace("%title%", b.st.tClose)
            )),
            (g = c)),
          b.currTemplate.closeBtn
        );
      },
      A = function () {
        a.magnificPopup.instance ||
          ((b = new t()), b.init(), (a.magnificPopup.instance = b));
      },
      B = function () {
        var a = document.createElement("p").style,
          b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition) return !0;
        for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
        return !1;
      };
    (t.prototype = {
      constructor: t,
      init: function () {
        var c = navigator.appVersion;
        (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
          (b.isAndroid = /android/gi.test(c)),
          (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
          (b.supportsTransition = B()),
          (b.probablyMobile =
            b.isAndroid ||
            b.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (d = a(document)),
          (b.popupsCache = {});
      },
      open: function (c) {
        var e;
        if (c.isObj === !1) {
          (b.items = c.items.toArray()), (b.index = 0);
          var g,
            h = c.items;
          for (e = 0; e < h.length; e++)
            if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
              b.index = e;
              break;
            }
        } else
          (b.items = a.isArray(c.items) ? c.items : [c.items]),
            (b.index = c.index || 0);
        if (b.isOpen) return void b.updateItemHTML();
        (b.types = []),
          (f = ""),
          c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
          c.key
            ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
              (b.currTemplate = b.popupsCache[c.key]))
            : (b.currTemplate = {}),
          (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
          (b.fixedContentPos =
            "auto" === b.st.fixedContentPos
              ? !b.probablyMobile
              : b.st.fixedContentPos),
          b.st.modal &&
            ((b.st.closeOnContentClick = !1),
            (b.st.closeOnBgClick = !1),
            (b.st.showCloseBtn = !1),
            (b.st.enableEscapeKey = !1)),
          b.bgOverlay ||
            ((b.bgOverlay = x("bg").on("click" + p, function () {
              b.close();
            })),
            (b.wrap = x("wrap")
              .attr("tabindex", -1)
              .on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close();
              })),
            (b.container = x("container", b.wrap))),
          (b.contentContainer = x("content")),
          b.st.preloader &&
            (b.preloader = x("preloader", b.container, b.st.tLoading));
        var i = a.magnificPopup.modules;
        for (e = 0; e < i.length; e++) {
          var j = i[e];
          (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
        }
        y("BeforeOpen"),
          b.st.showCloseBtn &&
            (b.st.closeBtnInside
              ? (w(l, function (a, b, c, d) {
                  c.close_replaceWith = z(d.type);
                }),
                (f += " mfp-close-btn-in"))
              : b.wrap.append(z())),
          b.st.alignTop && (f += " mfp-align-top"),
          b.fixedContentPos
            ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY,
              })
            : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
          (b.st.fixedBgPos === !1 ||
            ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
            b.bgOverlay.css({ height: d.height(), position: "absolute" }),
          b.st.enableEscapeKey &&
            d.on("keyup" + p, function (a) {
              27 === a.keyCode && b.close();
            }),
          v.on("resize" + p, function () {
            b.updateSize();
          }),
          b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
          f && b.wrap.addClass(f);
        var k = (b.wH = v.height()),
          n = {};
        if (b.fixedContentPos && b._hasScrollBar(k)) {
          var o = b._getScrollbarSize();
          o && (n.marginRight = o);
        }
        b.fixedContentPos &&
          (b.isIE7
            ? a("body, html").css("overflow", "hidden")
            : (n.overflow = "hidden"));
        var r = b.st.mainClass;
        return (
          b.isIE7 && (r += " mfp-ie7"),
          r && b._addClassToMFP(r),
          b.updateItemHTML(),
          y("BuildControls"),
          a("html").css(n),
          b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
          (b._lastFocusedEl = document.activeElement),
          setTimeout(function () {
            b.content
              ? (b._addClassToMFP(q), b._setFocus())
              : b.bgOverlay.addClass(q),
              d.on("focusin" + p, b._onFocusIn);
          }, 16),
          (b.isOpen = !0),
          b.updateSize(k),
          y(m),
          c
        );
      },
      close: function () {
        b.isOpen &&
          (y(i),
          (b.isOpen = !1),
          b.st.removalDelay && !b.isLowIE && b.supportsTransition
            ? (b._addClassToMFP(r),
              setTimeout(function () {
                b._close();
              }, b.st.removalDelay))
            : b._close());
      },
      _close: function () {
        y(h);
        var c = r + " " + q + " ";
        if (
          (b.bgOverlay.detach(),
          b.wrap.detach(),
          b.container.empty(),
          b.st.mainClass && (c += b.st.mainClass + " "),
          b._removeClassFromMFP(c),
          b.fixedContentPos)
        ) {
          var e = { marginRight: "" };
          b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
            a("html").css(e);
        }
        d.off("keyup" + p + " focusin" + p),
          b.ev.off(p),
          b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          b.bgOverlay.attr("class", "mfp-bg"),
          b.container.attr("class", "mfp-container"),
          !b.st.showCloseBtn ||
            (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
            (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
          b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
          (b.currItem = null),
          (b.content = null),
          (b.currTemplate = null),
          (b.prevHeight = 0),
          y(j);
      },
      updateSize: function (a) {
        if (b.isIOS) {
          var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;
          b.wrap.css("height", d), (b.wH = d);
        } else b.wH = a || v.height();
        b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
      },
      updateItemHTML: function () {
        var c = b.items[b.index];
        b.contentContainer.detach(),
          b.content && b.content.detach(),
          c.parsed || (c = b.parseEl(b.index));
        var d = c.type;
        if (
          (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
          (b.currItem = c),
          !b.currTemplate[d])
        ) {
          var f = b.st[d] ? b.st[d].markup : !1;
          y("FirstMarkupParse", f),
            f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
        }
        e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
        var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
          c,
          b.currTemplate[d]
        );
        b.appendContent(g, d),
          (c.preloaded = !0),
          y(n, c),
          (e = c.type),
          b.container.prepend(b.contentContainer),
          y("AfterChange");
      },
      appendContent: function (a, c) {
        (b.content = a),
          a
            ? b.st.showCloseBtn &&
              b.st.closeBtnInside &&
              b.currTemplate[c] === !0
              ? b.content.find(".mfp-close").length || b.content.append(z())
              : (b.content = a)
            : (b.content = ""),
          y(k),
          b.container.addClass("mfp-" + c + "-holder"),
          b.contentContainer.append(b.content);
      },
      parseEl: function (c) {
        var d,
          e = b.items[c];
        if (
          (e.tagName
            ? (e = { el: a(e) })
            : ((d = e.type), (e = { data: e, src: e.src })),
          e.el)
        ) {
          for (var f = b.types, g = 0; g < f.length; g++)
            if (e.el.hasClass("mfp-" + f[g])) {
              d = f[g];
              break;
            }
          (e.src = e.el.attr("data-mfp-src")),
            e.src || (e.src = e.el.attr("href"));
        }
        return (
          (e.type = d || b.st.type || "inline"),
          (e.index = c),
          (e.parsed = !0),
          (b.items[c] = e),
          y("ElementParse", e),
          b.items[c]
        );
      },
      addGroup: function (a, c) {
        var d = function (d) {
          (d.mfpEl = this), b._openClick(d, a, c);
        };
        c || (c = {});
        var e = "click.magnificPopup";
        (c.mainEl = a),
          c.items
            ? ((c.isObj = !0), a.off(e).on(e, d))
            : ((c.isObj = !1),
              c.delegate
                ? a.off(e).on(e, c.delegate, d)
                : ((c.items = a), a.off(e).on(e, d)));
      },
      _openClick: function (c, d, e) {
        var f =
          void 0 !== e.midClick
            ? e.midClick
            : a.magnificPopup.defaults.midClick;
        if (
          f ||
          !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
        ) {
          var g =
            void 0 !== e.disableOn
              ? e.disableOn
              : a.magnificPopup.defaults.disableOn;
          if (g)
            if (a.isFunction(g)) {
              if (!g.call(b)) return !0;
            } else if (v.width() < g) return !0;
          c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
            (e.el = a(c.mfpEl)),
            e.delegate && (e.items = d.find(e.delegate)),
            b.open(e);
        }
      },
      updateStatus: function (a, d) {
        if (b.preloader) {
          c !== a && b.container.removeClass("mfp-s-" + c),
            d || "loading" !== a || (d = b.st.tLoading);
          var e = { status: a, text: d };
          y("UpdateStatus", e),
            (a = e.status),
            (d = e.text),
            b.preloader.html(d),
            b.preloader.find("a").on("click", function (a) {
              a.stopImmediatePropagation();
            }),
            b.container.addClass("mfp-s-" + a),
            (c = a);
        }
      },
      _checkIfClose: function (c) {
        if (!a(c).hasClass(s)) {
          var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;
          if (d && e) return !0;
          if (
            !b.content ||
            a(c).hasClass("mfp-close") ||
            (b.preloader && c === b.preloader[0])
          )
            return !0;
          if (c === b.content[0] || a.contains(b.content[0], c)) {
            if (d) return !0;
          } else if (e && a.contains(document, c)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (a) {
        b.bgOverlay.addClass(a), b.wrap.addClass(a);
      },
      _removeClassFromMFP: function (a) {
        this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
      },
      _hasScrollBar: function (a) {
        return (
          (b.isIE7 ? d.height() : document.body.scrollHeight) >
          (a || v.height())
        );
      },
      _setFocus: function () {
        (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
      },
      _onFocusIn: function (c) {
        return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
          ? void 0
          : (b._setFocus(), !1);
      },
      _parseMarkup: function (b, c, d) {
        var e;
        d.data && (c = a.extend(d.data, c)),
          y(l, [b, c, d]),
          a.each(c, function (c, d) {
            if (void 0 === d || d === !1) return !0;
            if (((e = c.split("_")), e.length > 1)) {
              var f = b.find(p + "-" + e[0]);
              if (f.length > 0) {
                var g = e[1];
                "replaceWith" === g
                  ? f[0] !== d[0] && f.replaceWith(d)
                  : "img" === g
                  ? f.is("img")
                    ? f.attr("src", d)
                    : f.replaceWith(
                        a("<img>").attr("src", d).attr("class", f.attr("class"))
                      )
                  : f.attr(e[1], d);
              }
            } else b.find(p + "-" + c).html(d);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === b.scrollbarSize) {
          var a = document.createElement("div");
          (a.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(a),
            (b.scrollbarSize = a.offsetWidth - a.clientWidth),
            document.body.removeChild(a);
        }
        return b.scrollbarSize;
      },
    }),
      (a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (b, c) {
          return (
            A(),
            (b = b ? a.extend(!0, {}, b) : {}),
            (b.isObj = !0),
            (b.index = c || 0),
            this.instance.open(b)
          );
        },
        close: function () {
          return a.magnificPopup.instance && a.magnificPopup.instance.close();
        },
        registerModule: function (b, c) {
          c.options && (a.magnificPopup.defaults[b] = c.options),
            a.extend(this.proto, c.proto),
            this.modules.push(b);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
          if ("open" === c) {
            var e,
              f = u ? d.data("magnificPopup") : d[0].magnificPopup,
              g = parseInt(arguments[1], 10) || 0;
            f.items
              ? (e = f.items[g])
              : ((e = d),
                f.delegate && (e = e.find(f.delegate)),
                (e = e.eq(g))),
              b._openClick({ mfpEl: e }, d, f);
          } else
            b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
          (c = a.extend(!0, {}, c)),
            u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
            b.addGroup(d, c);
        return d;
      });
    var C,
      D,
      E,
      F = "inline",
      G = function () {
        E && (D.after(E.addClass(C)).detach(), (E = null));
      };
    a.magnificPopup.registerModule(F, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          b.types.push(F),
            w(h + "." + F, function () {
              G();
            });
        },
        getInline: function (c, d) {
          if ((G(), c.src)) {
            var e = b.st.inline,
              f = a(c.src);
            if (f.length) {
              var g = f[0].parentNode;
              g &&
                g.tagName &&
                (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
                (E = f.after(D).detach().removeClass(C))),
                b.updateStatus("ready");
            } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
            return (c.inlineElement = f), f;
          }
          return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
        },
      },
    });
    var H,
      I = "ajax",
      J = function () {
        H && a(document.body).removeClass(H);
      },
      K = function () {
        J(), b.req && b.req.abort();
      };
    a.magnificPopup.registerModule(I, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          b.types.push(I),
            (H = b.st.ajax.cursor),
            w(h + "." + I, K),
            w("BeforeChange." + I, K);
        },
        getAjax: function (c) {
          H && a(document.body).addClass(H), b.updateStatus("loading");
          var d = a.extend(
            {
              url: c.src,
              success: function (d, e, f) {
                var g = { data: d, xhr: f };
                y("ParseAjax", g),
                  b.appendContent(a(g.data), I),
                  (c.finished = !0),
                  J(),
                  b._setFocus(),
                  setTimeout(function () {
                    b.wrap.addClass(q);
                  }, 16),
                  b.updateStatus("ready"),
                  y("AjaxContentAdded");
              },
              error: function () {
                J(),
                  (c.finished = c.loadError = !0),
                  b.updateStatus(
                    "error",
                    b.st.ajax.tError.replace("%url%", c.src)
                  );
              },
            },
            b.st.ajax.settings
          );
          return (b.req = a.ajax(d)), "";
        },
      },
    });
    var L,
      M = function (c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
          if (a.isFunction(d)) return d.call(b, c);
          if (c.el) return c.el.attr(d) || "";
        }
        return "";
      };
    a.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var c = b.st.image,
            d = ".image";
          b.types.push("image"),
            w(m + d, function () {
              "image" === b.currItem.type &&
                c.cursor &&
                a(document.body).addClass(c.cursor);
            }),
            w(h + d, function () {
              c.cursor && a(document.body).removeClass(c.cursor),
                v.off("resize" + p);
            }),
            w("Resize" + d, b.resizeImage),
            b.isLowIE && w("AfterChange", b.resizeImage);
        },
        resizeImage: function () {
          var a = b.currItem;
          if (a && a.img && b.st.image.verticalFit) {
            var c = 0;
            b.isLowIE &&
              (c =
                parseInt(a.img.css("padding-top"), 10) +
                parseInt(a.img.css("padding-bottom"), 10)),
              a.img.css("max-height", b.wH - c);
          }
        },
        _onImageHasSize: function (a) {
          a.img &&
            ((a.hasSize = !0),
            L && clearInterval(L),
            (a.isCheckingImgSize = !1),
            y("ImageHasSize", a),
            a.imgHidden &&
              (b.content && b.content.removeClass("mfp-loading"),
              (a.imgHidden = !1)));
        },
        findImageSize: function (a) {
          var c = 0,
            d = a.img[0],
            e = function (f) {
              L && clearInterval(L),
                (L = setInterval(function () {
                  return d.naturalWidth > 0
                    ? void b._onImageHasSize(a)
                    : (c > 200 && clearInterval(L),
                      c++,
                      void (3 === c
                        ? e(10)
                        : 40 === c
                        ? e(50)
                        : 100 === c && e(500)));
                }, f));
            };
          e(1);
        },
        getImage: function (c, d) {
          var e = 0,
            f = function () {
              c &&
                (c.img[0].complete
                  ? (c.img.off(".mfploader"),
                    c === b.currItem &&
                      (b._onImageHasSize(c), b.updateStatus("ready")),
                    (c.hasSize = !0),
                    (c.loaded = !0),
                    y("ImageLoadComplete"))
                  : (e++, 200 > e ? setTimeout(f, 100) : g()));
            },
            g = function () {
              c &&
                (c.img.off(".mfploader"),
                c === b.currItem &&
                  (b._onImageHasSize(c),
                  b.updateStatus("error", h.tError.replace("%url%", c.src))),
                (c.hasSize = !0),
                (c.loaded = !0),
                (c.loadError = !0));
            },
            h = b.st.image,
            i = d.find(".mfp-img");
          if (i.length) {
            var j = document.createElement("img");
            (j.className = "mfp-img"),
              c.el &&
                c.el.find("img").length &&
                (j.alt = c.el.find("img").attr("alt")),
              (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
              (j.src = c.src),
              i.is("img") && (c.img = c.img.clone()),
              (j = c.img[0]),
              j.naturalWidth > 0
                ? (c.hasSize = !0)
                : j.width || (c.hasSize = !1);
          }
          return (
            b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
            b.resizeImage(),
            c.hasSize
              ? (L && clearInterval(L),
                c.loadError
                  ? (d.addClass("mfp-loading"),
                    b.updateStatus("error", h.tError.replace("%url%", c.src)))
                  : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
                d)
              : (b.updateStatus("loading"),
                (c.loading = !0),
                c.hasSize ||
                  ((c.imgHidden = !0),
                  d.addClass("mfp-loading"),
                  b.findImageSize(c)),
                d)
          );
        },
      },
    });
    var N,
      O = function () {
        return (
          void 0 === N &&
            (N = void 0 !== document.createElement("p").style.MozTransform),
          N
        );
      };
    a.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (a) {
          return a.is("img") ? a : a.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var a,
            c = b.st.zoom,
            d = ".zoom";
          if (c.enabled && b.supportsTransition) {
            var e,
              f,
              g = c.duration,
              j = function (a) {
                var b = a
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  d = "all " + c.duration / 1e3 + "s " + c.easing,
                  e = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  f = "transition";
                return (
                  (e["-webkit-" + f] =
                    e["-moz-" + f] =
                    e["-o-" + f] =
                    e[f] =
                      d),
                  b.css(e),
                  b
                );
              },
              k = function () {
                b.content.css("visibility", "visible");
              };
            w("BuildControls" + d, function () {
              if (b._allowZoom()) {
                if (
                  (clearTimeout(e),
                  b.content.css("visibility", "hidden"),
                  (a = b._getItemToZoom()),
                  !a)
                )
                  return void k();
                (f = j(a)),
                  f.css(b._getOffset()),
                  b.wrap.append(f),
                  (e = setTimeout(function () {
                    f.css(b._getOffset(!0)),
                      (e = setTimeout(function () {
                        k(),
                          setTimeout(function () {
                            f.remove(), (a = f = null), y("ZoomAnimationEnded");
                          }, 16);
                      }, g));
                  }, 16));
              }
            }),
              w(i + d, function () {
                if (b._allowZoom()) {
                  if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                    if (((a = b._getItemToZoom()), !a)) return;
                    f = j(a);
                  }
                  f.css(b._getOffset(!0)),
                    b.wrap.append(f),
                    b.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      f.css(b._getOffset());
                    }, 16);
                }
              }),
              w(h + d, function () {
                b._allowZoom() && (k(), f && f.remove(), (a = null));
              });
          }
        },
        _allowZoom: function () {
          return "image" === b.currItem.type;
        },
        _getItemToZoom: function () {
          return b.currItem.hasSize ? b.currItem.img : !1;
        },
        _getOffset: function (c) {
          var d;
          d = c
            ? b.currItem.img
            : b.st.zoom.opener(b.currItem.el || b.currItem);
          var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);
          e.top -= a(window).scrollTop() - f;
          var h = {
            width: d.width(),
            height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
          };
          return (
            O()
              ? (h["-moz-transform"] = h.transform =
                  "translate(" + e.left + "px," + e.top + "px)")
              : ((h.left = e.left), (h.top = e.top)),
            h
          );
        },
      },
    });
    var P = "iframe",
      Q = "//about:blank",
      R = function (a) {
        if (b.currTemplate[P]) {
          var c = b.currTemplate[P].find("iframe");
          c.length &&
            (a || (c[0].src = Q),
            b.isIE8 && c.css("display", a ? "block" : "none"));
        }
      };
    a.magnificPopup.registerModule(P, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          b.types.push(P),
            w("BeforeChange", function (a, b, c) {
              b !== c && (b === P ? R() : c === P && R(!0));
            }),
            w(h + "." + P, function () {
              R();
            });
        },
        getIframe: function (c, d) {
          var e = c.src,
            f = b.st.iframe;
          a.each(f.patterns, function () {
            return e.indexOf(this.index) > -1
              ? (this.id &&
                  (e =
                    "string" == typeof this.id
                      ? e.substr(
                          e.lastIndexOf(this.id) + this.id.length,
                          e.length
                        )
                      : this.id.call(this, e)),
                (e = this.src.replace("%id%", e)),
                !1)
              : void 0;
          });
          var g = {};
          return (
            f.srcAction && (g[f.srcAction] = e),
            b._parseMarkup(d, g, c),
            b.updateStatus("ready"),
            d
          );
        },
      },
    });
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a;
      },
      T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
      };
    a.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var c = b.st.gallery,
            e = ".mfp-gallery";
          return (
            (b.direction = !0),
            c && c.enabled
              ? ((f += " mfp-gallery"),
                w(m + e, function () {
                  c.navigateByImgClick &&
                    b.wrap.on("click" + e, ".mfp-img", function () {
                      return b.items.length > 1 ? (b.next(), !1) : void 0;
                    }),
                    d.on("keydown" + e, function (a) {
                      37 === a.keyCode
                        ? b.prev()
                        : 39 === a.keyCode && b.next();
                    });
                }),
                w("UpdateStatus" + e, function (a, c) {
                  c.text &&
                    (c.text = T(c.text, b.currItem.index, b.items.length));
                }),
                w(l + e, function (a, d, e, f) {
                  var g = b.items.length;
                  e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                }),
                w("BuildControls" + e, function () {
                  if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                    var d = c.arrowMarkup,
                      e = (b.arrowLeft = a(
                        d
                          .replace(/%title%/gi, c.tPrev)
                          .replace(/%dir%/gi, "left")
                      ).addClass(s)),
                      f = (b.arrowRight = a(
                        d
                          .replace(/%title%/gi, c.tNext)
                          .replace(/%dir%/gi, "right")
                      ).addClass(s));
                    e.click(function () {
                      b.prev();
                    }),
                      f.click(function () {
                        b.next();
                      }),
                      b.container.append(e.add(f));
                  }
                }),
                w(n + e, function () {
                  b._preloadTimeout && clearTimeout(b._preloadTimeout),
                    (b._preloadTimeout = setTimeout(function () {
                      b.preloadNearbyImages(), (b._preloadTimeout = null);
                    }, 16));
                }),
                void w(h + e, function () {
                  d.off(e),
                    b.wrap.off("click" + e),
                    (b.arrowRight = b.arrowLeft = null);
                }))
              : !1
          );
        },
        next: function () {
          (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
        },
        prev: function () {
          (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
        },
        goTo: function (a) {
          (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);
          for (a = 1; a <= (b.direction ? e : d); a++)
            b._preloadItem(b.index + a);
          for (a = 1; a <= (b.direction ? d : e); a++)
            b._preloadItem(b.index - a);
        },
        _preloadItem: function (c) {
          if (((c = S(c)), !b.items[c].preloaded)) {
            var d = b.items[c];
            d.parsed || (d = b.parseEl(c)),
              y("LazyLoad", d),
              "image" === d.type &&
                (d.img = a('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    d.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                  })
                  .attr("src", d.src)),
              (d.preloaded = !0);
          }
        },
      },
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
      options: {
        replaceSrc: function (a) {
          return a.src.replace(/\.\w+$/, function (a) {
            return "@2x" + a;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var a = b.st.retina,
              c = a.ratio;
            (c = isNaN(c) ? c() : c),
              c > 1 &&
                (w("ImageHasSize." + U, function (a, b) {
                  b.img.css({
                    "max-width": b.img[0].naturalWidth / c,
                    width: "100%",
                  });
                }),
                w("ElementParse." + U, function (b, d) {
                  d.src = a.replaceSrc(d, c);
                }));
          }
        },
      },
    }),
      A();
  });

  /*global $, jQuery, alert*/
  (function ($) {
    "use strict";

    function heroContentSlider() {
      var heroContSlider = $(".hero-content-slider"),
        autoplay = heroContSlider.data("autoplay"),
        autoplaySpeed = heroContSlider.data("speed");
      if ($(window).width() > 992) {
        heroContSlider.owlCarousel({
          animateOut: "bounceOut",
          animateIn: "bounceIn",
          autoplay: autoplay,
          autoplayTimeout: autoplaySpeed,
          items: 1,
          dots: false,
          mouseDrag: false,
          touchDrag: false,
          loop: true,
        });
      } else {
        heroContSlider.owlCarousel({
          autoplay: false,
          items: 1,
          dots: false,
          mouseDrag: true,
          touchDrag: true,
          loop: true,
          autoHeight: true,
        });
      }
    }
    function heroContentSliderFade() {
      $(".hero-content-slider").css({ opacity: "1" });
    }

    function heroSliderOwl() {
      var heroOwlSlider = $(".hero-slider"),
        autoplay = heroOwlSlider.data("autoplay"),
        autoplaySpeed = heroOwlSlider.data("speed"),
        touchSlide = heroOwlSlider.data("touch-drag");
      heroOwlSlider.owlCarousel({
        autoplay: autoplay,
        autoplayTimeout: autoplaySpeed,
        items: 1,
        mouseDrag: touchSlide,
        touchDrag: touchSlide,
        dots: false,
        nav: true,
        navSpeed: 500,
        loop: true,
        autoHeight: true,
        navText: [
          "<img src='img/assets/slider-left-thin-arrow.png'>",
          "<img src='img/assets/slider-right-thin-arrow.png'>",
        ],
      });
      if ($(".hero-fullscreen>div").hasClass("hero-slider")) {
        $(".hero-fullscreen").css({ padding: "0" });
      }
    }

    function sliderOwl() {
      var owlSlider = $(".carousel"),
        autoplay = owlSlider.data("autoplay"),
        autoplaySpeed = owlSlider.data("speed"),
        touchSlide = owlSlider.data("touch-drag"),
        loopSlides = owlSlider.data("loop");
      owlSlider.owlCarousel({
        autoplay: autoplay,
        autoplayTimeout: autoplaySpeed,
        items: 1,
        mouseDrag: touchSlide,
        touchDrag: touchSlide,
        dots: true,
        nav: true,
        loop: loopSlides,
        autoHeight: true,
        navText: [
          "<img src='img/assets/slider-left-thin-arrow.png'>",
          "<img src='img/assets/slider-right-thin-arrow.png'>",
        ],
        navRewind: true,
        slideBy: "page",
      });
    }

    function progressBars() {
      function progressBar() {
        $(".progress").each(function () {
          $(this)
            .find(".progress-bar")
            .animate(
              {
                width: $(this).attr("data-percent"),
              },
              800
            );
        });
      }
      if ($(".progress-bars").data("animate-on-scroll") === "on") {
        $(".progress-bars").waypoint(
          function () {
            progressBar();
          },
          { offset: "100%", triggerOnce: true }
        );
      } else {
        progressBar();
      }
    }

    function progressCircles() {
      function progressCircle() {
        var totalProgress, progress, circles;
        circles = document.querySelectorAll(".progress-svg");
        for (var i = 0; i < circles.length; i++) {
          totalProgress = circles[i]
            .querySelector("circle")
            .getAttribute("stroke-dasharray");
          progress = circles[i].parentElement.getAttribute(
            "data-circle-percent"
          );
          circles[i].querySelector(".bar").style["stroke-dashoffset"] =
            (totalProgress * progress) / 100;
        }
      }
      if ($(".progress-circles").data("animate-on-scroll") === "on") {
        $(".progress-circle").waypoint(
          function () {
            progressCircle();
          },
          {
            offset: "70%",
            triggerOnce: true,
          }
        );
      } else {
        progressCircle();
      }
    }

    function vossenIframes() {
      $(".video-container").click(function () {
        $(this).addClass("reveal");
        var videoImg = $(this).find("img"),
          videoIframe = $(this).find("iframe"),
          videoAttr = videoIframe.attr("data-video-embed"),
          videoPlay = videoAttr + "?autoplay=1&autoplay=true";
        videoImg.animate({ opacity: 0 }, 300);
        videoIframe.css("visibility", "visible").attr("src", videoPlay);
        videoIframe[0].setAttribute("allowFullScreen", "");
      });
    }

    function teamSlider() {
      $(".team-slider").owlCarousel({
        autoplay: false,
        items: 3,
        dots: true,
        responsiveRefreshRate: 200,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });
    }

    function quoteSlider() {
      var quoteOwl = $(".quote-slider");
      quoteOwl.owlCarousel({
        autoplay: false,
        autoplayTimeout: 3000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
          "<img src='img/assets/slider-left-thin-arrow.png'>",
          "<img src='img/assets/slider-right-thin-arrow.png'>",
        ],
      });
    }

    function vossenPortfolio() {
      var vosPortfolio = $(".vossen-portfolio"),
        initFilter = $(".vossen-portfolio-filters"),
        vossenFilters = $(".vossen-portfolio-filters li"),
        portfolioItems = $(".vossen-portfolio > div"),
        initialCat;

      // Init Filter to class except *all
      initFilter.each(function () {
        var dataOption = $(this).attr("data-initial-filter");
        $(this).attr("data-initial-filter", "." + dataOption);
        if ($(initFilter).data("initial-filter") === ".*") {
          $(this).attr("data-initial-filter", "*");
        }
      });
      // Filters data to class except first
      vossenFilters.not(":first").each(function () {
        var dataOption = $(this).attr("data-filter");
        $(this).attr("data-filter", "." + dataOption);
      });
      // Items data to class
      portfolioItems.each(function () {
        var dataOption = $(this).attr("data-filter");
        $(this).addClass(dataOption);
      });
      // Animate Items
      if (typeof portfolioItems.waypoint === 'function') {
        portfolioItems.waypoint(
          function () {
            portfolioItems.each(function (i) {
              var eachItem = $(this);
              setTimeout(function () {
                eachItem.addClass("reveal");
              }, i * 3 * 60);
            });
          },
          { offset: "100%", triggerOnce: true }
        );
      };
      initialCat = $(".vossen-portfolio-filters").attr("data-initial-filter");
      // Add active class to filter
      $(
        '.vossen-portfolio-filters li[data-filter="' + initialCat + '"]'
      ).addClass("active");
      // Init Isotope Filters
      vossenFilters.on("click", function () {
        $(".vossen-portfolio-filters li.active").removeClass("active");
        $(this).addClass("active");
        var filterValue = $(this).attr("data-filter");
        vosPortfolio.isotope({
          filter: filterValue,
        });
      });
      // Init Isotope
      var $grid = vosPortfolio.isotope({
        itemSelector: ".vossen-portfolio > div",
        percentPosition: true,
        filter: initialCat,
        masonry: {
          columnWidth: ".vossen-portfolio > div",
        },
      });
      $grid.imagesLoaded().progress(function () {
        $grid.isotope("layout");
      });
    }

    $(window).resize(function () {
      setTimeout(function () {
        $(".vossen-portfolio-filters .active").trigger("click");
      }, 600);
    });

    function vossenPortfolio2() {
      var vosPortfolio = $(".portfolio-grid"),
        initFilter = $(".portfolio-filters"),
        vossenFilters = $(".portfolio-filters li"),
        portfolioItems = $(".work-item"),
        initialCat;

      // Init Filter to class except *all
      initFilter.each(function () {
        var dataOption = $(this).attr("data-initial-filter");
        $(this).attr("data-initial-filter", "." + dataOption);
        if ($(initFilter).data("initial-filter") === ".*") {
          $(this).attr("data-initial-filter", "*");
        }
      });
      // Filters data to class except first
      vossenFilters.not(":first").each(function () {
        var dataOption = $(this).attr("data-filter");
        $(this).attr("data-filter", "." + dataOption);
      });
      // Items data to class
      portfolioItems.each(function () {
        var dataOption = $(this).attr("data-filter");
        $(this).addClass(dataOption);
      });

      // Add active class to filter
      $('.portfolio-filters li[data-filter="' + initialCat + '"]').addClass(
        "active"
      );

      // Init Isotope Filters
      vossenFilters.on("click", function () {
        $(".portfolio-filters li.active").removeClass("active");
        $(this).addClass("active");
        var filterValue = $(this).attr("data-filter");
        vosPortfolio.isotope({
          filter: filterValue,
        });
      });

      var worksgrid = $("#works-grid"),
        filters = $(".portfolio-filters");

      $(window)
        .on("resize", function () {
          var windowWidth = Math.max($(window).width(), window.innerWidth),
            itemWidht = $(".grid-sizer").width(),
            itemHeight = Math.floor(itemWidht * 0.95),
            itemTallHeight = itemHeight * 2;

          if (windowWidth > 500) {
            $(".work-item", worksgrid).each(function () {
              if ($(this).hasClass("tall")) {
                $(this).css({
                  height: itemTallHeight,
                });
              } else if ($(this).hasClass("wide")) {
                $(this).css({
                  height: itemHeight,
                });
              } else if ($(this).hasClass("wide-tall")) {
                $(this).css({
                  height: itemTallHeight,
                });
              } else {
                $(this).css({
                  height: itemHeight,
                });
              }
            });
          } else {
            $(".work-item", worksgrid).each(function () {
              if ($(this).hasClass("tall")) {
                $(this).css({
                  height: itemTallHeight,
                });
              } else if ($(this).hasClass("wide")) {
                $(this).css({
                  height: itemHeight / 2,
                });
              } else if ($(this).hasClass("wide-tall")) {
                $(this).css({
                  height: itemHeight,
                });
              } else {
                $(this).css({
                  height: itemHeight,
                });
              }
            });
          }

          worksgrid.imagesLoaded(function () {
            worksgrid.isotope({
              layoutMode: "packery",
              itemSelector: ".work-item",
              transitionDuration: "0.3s",
              packery: {
                columnWidth: ".grid-sizer",
              },
            });
          });
        })
        .resize();

      // Reveal Items
      worksgrid
        .isotope({})
        .imagesLoaded()
        .progress(function () {
          vosPortfolio.addClass("reveal");
        });
    }

    function vossenPortfolioAjax() {
      var pageNumber = 0,
        workNumberToload = 5;

      var doneText = "No More Works",
        loadText = "Show More",
        loadingText = "Loading...",
        errorText =
          "Error! --- This feature will work only when site is on the server ---";

      $("#show-more").on("click", function () {
        $(this).text(loadingText);

        setTimeout(function () {
          ajaxLoad(workNumberToload, pageNumber);
        }, 300);

        pageNumber++;
        return false;
      });

      function ajaxLoad(workNumberToload, pageNumber) {
        var $loadButton = $("#show-more");
        var dataString =
          "numPosts=" + workNumberToload + "&pageNumber=" + pageNumber;

        $.ajax({
          type: "GET",
          data: dataString,
          dataType: "html",
          url: $(".vossen-portfolio, .works-grid").data("more-items-location"),
          success: function (data) {
            var $data = $(data);
            var start_index = (pageNumber - 1) * workNumberToload;
            var end_index = +start_index + workNumberToload;

            if (
              $data
                .find(".vossen-portfolio > div, .work-item")
                .slice(start_index).length
            ) {
              var work = $data
                .find(".vossen-portfolio > div, .work-item")
                .slice(start_index, end_index)
                .addClass("reveal");

              $(".vossen-portfolio, .works-grid")
                .append(work)
                .isotope("appended", work)
                .resize();

              setTimeout(function () {
                $loadButton.text(loadText);
              }, 300);
            } else {
              setTimeout(function () {
                $loadButton.text(doneText);
              }, 300);

              setTimeout(function () {
                $("#show-more")
                  .animate(
                    {
                      opacity: 0,
                    },
                    400
                  )
                  .css({ cursor: "default" });
              }, 1500);
            }
          },

          error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);

            setTimeout(function () {
              $loadButton.removeClass("ss-loading");
              $loadButton.text(errorText);
            }, 300);
          },
        });
      }
    }

    function testimonialSlider() {
      var testimonialsOwl = $(".testimonials"),
        autoplay = testimonialsOwl.data("autoplay"),
        autoplaySpeed = testimonialsOwl.data("speed");
      testimonialsOwl.owlCarousel({
        autoplay: autoplay,
        autoplayTimeout: autoplaySpeed,
        autoplaySpeed: 700,
        loop: true,
        items: 1,
        dots: true,
        dotsSpeed: 400,
      });
    }

    function clientsSlider() {
      var clientSlider = $(".clients-slider"),
        autoplay = clientSlider.data("autoplay"),
        autoplaySpeed = clientSlider.data("speed");
      clientSlider.owlCarousel({
        autoplay: autoplay,
        autoplayTimeout: autoplaySpeed,
        loop: false,
        dots: false,
        nav: false,
        responsiveRefreshRate: 200,
        responsive: {
          0: {
            items: 2,
          },
          600: {
            items: 5,
          },
          1200: {
            items: 6,
          },
        },
      });
    }

    function contactForm() {
      $("#contactform").submit(function () {
        var action = "php/contact-form.php";
        $("#message-info").slideUp(250, function () {
          $("#message-info").hide();
          $("#submit")
            .after('<div class="loader"><div></div></div>')
            .attr("disabled", "disabled");
          $.post(
            action,
            {
              name: $("#name").val(),
              email: $("#email").val(),
              phone: $("#phone").val(),
              message: $("#message").val(),
            },
            function (data) {
              document.getElementById("message-info").innerHTML = data;
              $("#message-info").slideDown(250);
              $("#contactform .loader div").fadeOut("slow", function () {
                $(this).remove();
              });
              $("#submit").removeAttr("disabled");
              if (data.match("success") !== null) {
                $("#contactform").slideUp(850, "easeInOutExpo");
              }
            }
          );
        });
        return false;
      });
    }

    function subscribeForm() {
      $("#subscribe-form,#subscribe-form-2").on("submit", function (e) {
        e.preventDefault();
        var $el = $(this),
          $alert = $el.find(".form-validation"),
          $submit = $el.find("button"),
          action = $el.attr("action");
        $submit.button("loading");
        $alert.removeClass("alert-danger alert-success");
        $alert.html("");
        $.ajax({
          type: "POST",
          url: action,
          data: $el.serialize() + "&ajax=1",
          dataType: "JSON",
          success: function (response) {
            if (response.status === "error") {
              $alert.html(response.message);
              $alert.addClass("alert-danger").fadeIn(500);
            } else {
              $el.trigger("reset");
              $alert.html(response.message);
              $alert.addClass("alert-success").fadeIn(500);
            }
            $submit.button("reset");
          },
        });
      });
    }

    function vosMap() {
      $("#vossen-map").waypoint(
        function () {
          initVossenMaps();
        },
        { offset: "100%", triggerOnce: true }
      );
    }

    function vossenHeader() {
      $(".nav li.dropdown>a, .dropdown-submenu>a").on("click", function () {
        $(this).closest(".dropdown").siblings().removeClass("open");
        $(this).closest(".dropdown").toggleClass("open");
        return false;
      });
      $(".nav li a, .btn-scroll").on("click", function () {
        var $anchor = $(this);
        function scrollToAnchor() {
          $("html, body")
            .stop()
            .animate(
              {
                scrollTop: $($anchor.attr("href")).offset().top - offsetVar,
              },
              1000,
              "easeInOutExpo"
            );
          event.preventDefault();
        }
        if ($(window).width() > 992) {
          var offsetVar = "59";
          scrollToAnchor();
        } else {
          var offsetVar = "0";
          scrollToAnchor();
        }
      });
      function navSmall() {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 70) {
            $("nav").addClass("nav-small");
          } else {
            $("nav").removeClass("nav-small");
          }
        });
      }
      if ($("nav").data("animation") === "hiding") {
        var vosWindow = $(window);
        var navPosition = vosWindow.scrollTop();
        vosWindow.scroll(function () {
          if (vosWindow.scrollTop() > navPosition) {
            $("nav").removeClass("nav-down").addClass("nav-up");
          } else {
            $("nav").removeClass("nav-up").addClass("nav-down");
          }
          navPosition = vosWindow.scrollTop();
        });
        navSmall();
      } else {
        navSmall();
      }
      $(".scroll-top").on("click", function () {
        $("html, body").stop().animate({ scrollTop: 0 }, 2000, "easeInOutExpo");
        return false;
      });
      function elementsAnchor() {
        var hash = window.location.hash;
        if (hash != "") {
          setTimeout(function () {
            $("html, body")
              .stop()
              .animate(
                {
                  scrollTop: $(hash).offset().top - 59,
                },
                1000,
                "easeInOutExpo"
              );
            history.pushState("", document.title, window.location.pathname);
          }, 500);
        }
      }
      elementsAnchor();
    }

    function bootstrapTools() {
      $("#accordion,#accordion2").on("show.bs.collapse", function () {
        $("#accordion .in").collapse("hide");
      });
      $("[data-toggle='tooltip']").tooltip();
      $("#buttonTabs a,#iconTabs a").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
      });
    }

    function twitterFeedSlider() {
      if ($("#twitter-feed-slider").length) {
        var twitterUser, twitterNumber, twitterFeedSlider;
        twitterUser = $("#twitter-feed-slider").attr("data-twitter-widget-id");
        twitterNumber = $("#twitter-feed-slider").attr("data-max-tweets");
        twitterFeedSlider = {
          id: twitterUser,
          domId: "twitter-feed-slider",
          maxTweets: twitterNumber,
          enableLinks: true,
          showImages: false,
        };
        twitterFetcher.fetch(twitterFeedSlider);
      }
    }

    function twitterFeedSliderInit() {
      if ($("#twitter-feed-slider").length) {
        $("#twitter-feed-slider ul").addClass(
          "twitter-feed-slider navigation-thin"
        );
        var twitterAutoSpeed = $("#twitter-feed-slider").attr(
          "data-slider-speed"
        );
        $(".twitter-feed-slider").owlCarousel({
          autoplay: true,
          autoplayTimeout: twitterAutoSpeed,
          items: 1,
          dots: false,
          mouseDrag: true,
          touchDrag: true,
          loop: true,
        });
      }
    }

    function twitterFeedList() {
      if ($("#twitter-feed-list").length) {
        var twitterUser, twitterNumber, twitterFeedList;
        twitterUser = $("#twitter-feed-list").attr("data-twitter-widget-id");
        twitterNumber = $("#twitter-feed-list").attr("data-max-tweets");
        twitterFeedList = {
          id: twitterUser,
          domId: "twitter-feed-list",
          maxTweets: twitterNumber,
          enableLinks: true,
          showImages: false,
        };
        twitterFetcher.fetch(twitterFeedList);
      }
    }

    function countUp() {
      if (typeof $("#fun-facts").waypoint === 'function') {
        $("#fun-facts").waypoint(
          function () {
            $(".counter h1").each(function () {
              var $this = $(this),
                countTo = $this.attr("data-count");
              $({ countNum: $this.text() }).animate(
                {
                  countNum: countTo,
                },
                {
                  duration: 1700,
                  easing: "linear",
                  step: function () {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                  },
                }
              );
            });
          },
          { offset: "100%", triggerOnce: true }
        );
      }
    }

    function countdown() {
      var dateUser = $("#countdown-timer").attr("data-date"),
        deadline = new Date(dateUser);
      function updateClock() {
        var today = Date(),
          diff = Date.parse(deadline) - Date.parse(today);
        if (diff <= 0) {
          clearInterval(interval);
        } else {
          var seconds = Math.floor((diff / 1000) % 60),
            minutes = Math.floor((diff / 1000 / 60) % 60),
            hours = Math.floor((diff / 1000 / 60 / 60) % 24),
            days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30.5),
            months = Math.floor((diff / (1000 * 60 * 60 * 24 * 30.5)) % 12);
          $("#months").text(("0" + months).slice(-2));
          $("#days").text(("0" + days).slice(-2));
          $("#hours").text(("0" + hours).slice(-2));
          $("#minutes").text(("0" + minutes).slice(-2));
          $("#seconds").text(("0" + seconds).slice(-2));
        }
      }
      var interval = setInterval(updateClock, 1000);
    }

    function vossenBlogGrid() {
      var vosPortfolio = $(".vossen-blog-grid"),
        portfolioItems = $(".vossen-blog-grid > div");
      portfolioItems.each(function () {
        var dataOption = $(this).attr("data-filter");
        $(this).addClass(dataOption);
      });
      portfolioItems.waypoint(
        function () {
          portfolioItems.each(function (i) {
            var eachItem = $(this);
            setTimeout(function () {
              eachItem.addClass("reveal");
            }, i * 3 * 60);
          });
        },
        { offset: "100%", triggerOnce: true }
      );
      vosPortfolio.isotope({
        itemSelector: ".vossen-blog-grid > div",
        percentPosition: true,
        masonry: {
          columnWidth: ".vossen-blog-grid > div",
        },
      });
      // Init Isotope
      var $bloggrid = vosPortfolio.isotope({
        itemSelector: ".vossen-blog-grid > div",
        percentPosition: true,
        masonry: {
          columnWidth: ".vossen-blog-grid > div",
        },
      });
      $bloggrid.imagesLoaded().progress(function () {
        $bloggrid.isotope("layout");
      });
    }

    function lightbox() {
      $(".lightbox").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
          enabled: true,
          arrowMarkup:
            '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><img src="img/assets/slider-left-thin-arrow.png"></button>',
        },
        mainClass: "mfp-zoom-in",
        removalDelay: 500, //delay removal to allow out-animation
        callbacks: {
          beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace(
              "mfp-figure",
              "mfp-figure mfp-with-anim"
            );
          },
        },
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close"></button>',
        midClick: true,
      });
    }

    jQuery(function () {
      $.when(heroContentSlider()).then(heroContentSliderFade());
      heroSliderOwl();
      progressBars();
      progressCircles();
      teamSlider();
      countUp();
      vossenIframes();
      quoteSlider();
      parallaxVossen();
      vossenPortfolio();
      vossenPortfolio2();
      vossenPortfolioAjax();
      testimonialSlider();
      clientsSlider();
      contactForm();
      subscribeForm();
      vosMap();
      sliderOwl();
      vossenHeader();
      bootstrapTools();
      twitterFeedSlider();
      twitterFeedList();
      countdown();
      vossenBlogGrid();
      lightbox();
    });

    $(window).load(function () {
      twitterFeedSliderInit();
    });

    $(window).on("scroll", function () {});
  })(jQuery);
