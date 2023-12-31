/*! lazysizes - v5.2.2 */

!(function (e, t) {
  const a = function () {
    t(e.lazySizes), e.removeEventListener('lazyunveilread', a, !0);
  };
  (t = t.bind(null, e, e.document)),
    typeof module === 'object' && module.exports
      ? t(require('lazysizes'))
      : typeof define === 'function' && define.amd
        ? define(['lazysizes'], t)
        : e.lazySizes
          ? a()
          : e.addEventListener('lazyunveilread', a, !0);
}(window, (e, i, o) => {
  let l;
  let d;
  const u = {};
  function s(e, t, a) {
    let n; let
      r;
    u[e]
    || ((n = i.createElement(t ? 'link' : 'script')),
      (r = i.getElementsByTagName('script')[0]),
      t
        ? ((n.rel = 'stylesheet'), (n.href = e))
        : ((n.onload = function () {
          (n.onerror = null), (n.onload = null), a();
        }),
          (n.onerror = n.onload),
          (n.src = e)),
      (u[e] = !0),
      (u[n.src || n.href] = !0),
      r.parentNode.insertBefore(n, r));
  }
  i.addEventListener
  && ((l = function (e, t) {
    let a = i.createElement('img');
    (a.onload = function () {
      (a.onload = null), (a.onerror = null), (a = null), t();
    }),
      (a.onerror = a.onload),
      (a.src = e),
    a && a.complete && a.onload && a.onload();
  }),
    addEventListener(
      'lazybeforeunveil',
      (e) => {
        let t; let a; let
          n;
        if (e.detail.instance == o && !e.defaultPrevented) {
          const r = e.target;
          if ((r.preload == 'none' && (r.preload = r.getAttribute('data-preload') || 'auto'), r.getAttribute('data-autoplay') != null)) {
            if (r.getAttribute('data-expand') && !r.autoplay) {
              try {
                r.play();
              } catch (e) {}
            } else {
              requestAnimationFrame(() => {
                r.setAttribute('data-expand', '-10'), o.aC(r, o.cfg.lazyClass);
              });
            }
          }
          (t = r.getAttribute('data-link')) && s(t, !0),
          (t = r.getAttribute('data-script'))
          && ((e.detail.firesLoad = !0),
            s(t, null, () => {
              (e.detail.firesLoad = !1), o.fire(r, '_lazyloaded', {}, !0, !0);
            })),
          (t = r.getAttribute('data-require')) && (o.cfg.requireJs ? o.cfg.requireJs([t]) : s(t)),
          (a = r.getAttribute('data-bg'))
          && ((e.detail.firesLoad = !0),
            l(a, () => {
              (r.style.backgroundImage = `url(${d.test(a) ? JSON.stringify(a) : a})`),
                (e.detail.firesLoad = !1),
                o.fire(r, '_lazyloaded', {}, !0, !0);
            })),
          (n = r.getAttribute('data-poster'))
          && ((e.detail.firesLoad = !0),
            l(n, () => {
              (r.poster = n), (e.detail.firesLoad = !1), o.fire(r, '_lazyloaded', {}, !0, !0);
            }));
        }
      },
      !(d = /\(|\)|\s|'/),
    ));
}));