(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        14: function(e, t, n) {},
        16: function(e, t, n) {},
        18: function(e, t, n) {
            'use strict';
            n.r(t);
            var a = n(0),
                o = n.n(a),
                c = n(3),
                l = n.n(c),
                r = (n(14), n(4)),
                i = n(5),
                s = n(7),
                u = n(6),
                h = n(8),
                m = n(1),
                p = (n(16),
                (function(e) {
                    function t(e) {
                        var n;
                        return (
                            Object(r.a)(this, t),
                            ((n = Object(s.a)(
                                this,
                                Object(u.a)(t).call(this, e)
                            )).copyFile = function() {
                                var e = Object(m.a)(Object(m.a)(n));
                                fetch('/script-pusher/copy-file')
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(t) {
                                        console.log('parsed json', t.allData),
                                        e.setState({ allData: t.allData });
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            e
                                        );
                                    });
                            }),
                            (n.state = { allData: 'unknown' }),
                            n
                        );
                    }
                    return (
                        Object(h.a)(t, e),
                        Object(i.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    return o.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        o.a.createElement(
                                            'header',
                                            null,
                                            o.a.createElement(
                                                'h1',
                                                null,
                                                'System Check'
                                            )
                                        ),
                                        o.a.createElement(
                                            'main',
                                            null,
                                            o.a.createElement(
                                                'button',
                                                { onClick: this.copyFile },
                                                'Copy File'
                                            ),
                                            o.a.createElement(
                                                'pre',
                                                null,
                                                this.state.allData
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(a.Component));
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            l.a.render(
                o.a.createElement(p, null),
                document.getElementById('root')
            ),
            'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        9: function(e, t, n) {
            e.exports = n(18);
        }
    },
    [[9, 2, 1]]
]);
//# sourceMappingURL=main.4b5851fc.chunk.js.map
