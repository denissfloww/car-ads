(this['webpackJsonpcar-ads'] = this['webpackJsonpcar-ads'] || []).push([
  [0],
  {
    172: function (e, t, n) {},
    173: function (e, t, n) {},
    303: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(2),
        r = n(0),
        i = n.n(r),
        o = n(16),
        s = n.n(o),
        c = (n(172), n(173), n(19)),
        l = n(24),
        d = n(340),
        m = n(341),
        p = n(336),
        j = '/login',
        b = '/home',
        u = '/signup',
        x = '/append',
        g = n(5),
        h = n(334),
        O =
          (Object(h.a)(
            function (e) {
              return {
                table: { '& thead th': { fontWeight: '600', color: e.palette.secondary.main, backgroundColor: e.palette.primary.light } },
                clickableCell: { '&:hover': { backgroundColor: e.palette.primary.main + '15', cursor: 'pointer' } },
                scrollableTable: {
                  '& thead th': { fontWeight: '600', color: e.palette.secondary.main, backgroundColor: e.palette.primary.light },
                  overflowY: 'auto',
                  maxHeight: '350px',
                },
              };
            },
            { index: 1 },
          ),
          Object(h.a)(
            function (e) {
              return {
                dialogWrapper: Object(g.a)({ paddingBottom: 20, overflow: 'hidden' }, e.breakpoints.down('xs'), { padding: 0 }),
                fab: { position: 'fixed', bottom: e.spacing(2), right: e.spacing(2), zIndex: 1e3 },
                roundIconButton: { minWidth: 0, padding: '0.65em', borderRadius: '2em' },
              };
            },
            { index: 1 },
          ),
          Object(h.a)(
            function (e) {
              return {
                submitBtn: { marginTop: '1.5em', height: '3.2em' },
                avatar: { color: e.palette.primary.main, backgroundColor: '#d3d3d3' },
                fieldMargin: { marginTop: '1.5em' },
                radioGroupForm: { marginTop: '0.8em', width: '100%' },
                radioGroup: { display: 'flex', alignItems: 'center' },
                radioGroupLabel: { marginRight: '2em' },
                formControlLabels: Object(g.a)(
                  { display: 'flex', justifyContent: 'space-between', width: '80%' },
                  e.breakpoints.down('xs'),
                  { flexDirection: 'column', width: 'auto' },
                ),
              };
            },
            { index: 1 },
          ),
          Object(h.a)(function (e) {
            return {
              root: { width: '100', minHeight: 'calc(100vH - 130px)', fontFamily: 'Nunito', paddingTop: '1.5em' },
              paper: Object(g.a)(
                { textAlign: 'left', padding: '1.5em', minHeight: 'calc(100vH - 130px)', paddingLeft: '1.5em' },
                e.breakpoints.down('xs'),
                { padding: '0.5em 0.7em', minHeight: 'calc(100vH - 80px)' },
              ),
              image: { width: '70px', height: '70px' },
              headerPaper: Object(g.a)(
                {
                  padding: '1.0em',
                  paddingLeft: '1.5em',
                  marginBottom: '1.5em',
                  minHeight: 'calc(15vH - 100px)',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                },
                e.breakpoints.down('xs'),
                { padding: '0.5em 0.7em', minHeight: 'calc(100vH - 80px)' },
              ),
            };
          })),
        f = Object(h.a)(function (e) {
          return {
            root: { width: '100', minHeight: 'calc(100vH - 130px)', fontFamily: 'Nunito', paddingTop: '1.5em' },
            headerPaper: Object(g.a)(
              { padding: '1.5em', marginBottom: '1.5em', minHeight: 'calc(20vH - 130px)' },
              e.breakpoints.down('xs'),
              { padding: '0.5em 0.7em', minHeight: 'calc(100vH - 80px)' },
            ),
            paper: Object(g.a)({ padding: '1.5em', minHeight: 'calc(100vH - 130px)' }, e.breakpoints.down('xs'), {
              padding: '0.5em 0.7em',
              minHeight: 'calc(100vH - 80px)',
            }),
            tabs: { flexGrow: 1, color: 'black' },
          };
        }),
        v = Object(h.a)(
          function (e) {
            return {
              root: Object(g.a)({ padding: '1em 0' }, e.breakpoints.down('xs'), { padding: '0.5em 0.5em' }),
              headerPaper: Object(g.a)(
                { padding: '0.8em 1.5em', marginBottom: '1em', display: 'flex', alignItems: 'center' },
                e.breakpoints.down('xs'),
                { padding: '0.3em 0.5em', marginBottom: '0.5em' },
              ),
              headerIcon: Object(g.a)({ fontSize: '4.5em', marginRight: '0.2em' }, e.breakpoints.down('xs'), {
                fontSize: '3em',
                marginRight: '0.3em',
              }),
              projectsPaper: Object(g.a)({ padding: '1.5em', minHeight: 'calc(100vH - 244px)' }, e.breakpoints.down('xs'), {
                padding: '0.7em 0.3em',
                minHeight: 'calc(100vH - 160px)',
              }),
              projectsListTable: Object(g.a)({ marginTop: '1.5em' }, e.breakpoints.down('xs'), { marginTop: 0 }),
              detailsHeader: Object(g.a)({ padding: '1.2em 1.5em', marginBottom: '1em' }, e.breakpoints.down('xs'), {
                padding: '0.5em 0.7em',
                marginBottom: '0.5em',
              }),
              flexHeader: { display: 'flex', alignItems: 'center' },
              btnsWrapper: Object(g.a)({ margin: '1em 0' }, e.breakpoints.down('xs'), { margin: '0.5em 0' }),
              membersWrapper: { marginTop: '1em' },
              filterMembersInput: Object(g.a)({}, e.breakpoints.down('xs'), { width: '55%' }),
              flexInput: Object(g.a)({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, e.breakpoints.down('xs'), {
                marginTop: '0.3em',
              }),
              bugsPaper: Object(g.a)({ padding: '1.5em', minHeight: 'calc(100vH - 356px)' }, e.breakpoints.down('xs'), {
                padding: '0.5em 0.7em',
                minHeight: 'calc(100vH - 256px)',
              }),
              bugsActionCard: Object(g.a)({ margin: '1.5em 0' }, e.breakpoints.down('xs'), { margin: '0.5em 0' }),
              notesPaper: Object(g.a)({ padding: '1.5em', minHeight: 'calc(100vH - 420px)' }, e.breakpoints.down('xs'), {
                padding: '0.5em 0.7em',
                minHeight: 'calc(100vH - 320px)',
              }),
              notesWrapper: { margin: '1.5em 0' },
              sortNotesInput: Object(g.a)({ width: '22%' }, e.breakpoints.down('xs'), { width: '55%' }),
              singleNote: { display: 'flex', alignItems: 'flex-start', marginBottom: '0.3em', marginTop: '0.8em' },
              noteBody: { marginTop: '0.2em' },
              avatar: {
                width: e.spacing(4.8),
                height: e.spacing(4.8),
                marginRight: '0.4em',
                marginTop: '0.3em',
                color: e.palette.primary.main,
                backgroundColor: '#d3d3d3',
              },
              notesBtnWrapper: { margin: '0.5em 0' },
              iconText: { verticalAlign: 'middle', display: 'inline-flex' },
              textIconsWrapper: { display: 'flex', width: '100px', justifyContent: 'space-between' },
              listItemWrapper: { padding: '0.4em 0.3em' },
              flexedWrapper: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.3em' },
              roundIconButton: { minWidth: 0, padding: '0.65em', borderRadius: '2em' },
              gotoIcon: { fontSize: '0.7em', marginLeft: '0.4em' },
              marginText: { marginBottom: '0.35em' },
              notFoundPaper: Object(g.a)({ padding: '1.5em', minHeight: 'calc(100vH - 130px)' }, e.breakpoints.down('xs'), {
                padding: '0.5em 0.7em',
                minHeight: 'calc(100vH - 80px)',
              }),
              error404Image: Object(g.a)({ width: '250px', display: 'block', margin: '0 auto' }, e.breakpoints.down('xs'), {
                width: '150px',
              }),
              error404Text: Object(g.a)({ fontSize: '2.2em', textAlign: 'center', marginTop: '1em' }, e.breakpoints.down('xs'), {
                fontSize: '1.5em',
              }),
              notFoundWrapper: { marginTop: '6em' },
            };
          },
          { index: 1 },
        ),
        w =
          (Object(h.a)(
            function (e) {
              return {
                inputs: Object(g.a)(
                  { display: 'flex', minWidth: '100%', justifyContent: 'space-between', marginBottom: '1.5em' },
                  e.breakpoints.down('xs'),
                  { marginBottom: '0.7em' },
                ),
                searchBarWrapper: Object(g.a)({ width: '70%' }, e.breakpoints.down('xs'), { width: '55%' }),
                sortBarWrapper: Object(g.a)({ width: '25%' }, e.breakpoints.down('xs'), { width: '42%' }),
                flexWrapper: Object(g.a)({ display: 'flex', minWidth: '100%', justifyContent: 'space-between' }, e.breakpoints.down('xs'), {
                  justifyContent: 'flex-start',
                  marginLeft: '0.2em',
                }),
              };
            },
            { index: 1 },
          ),
          Object(h.a)(
            function (e) {
              return {
                appBar: { backgroundColor: '#990021', paddingTop: '0.2em', paddingBottom: '0.2em' },
                menuButton: { fontFamily: 'Nunito', size: '18px', marginLeft: '38px', color: 'white' },
                iconButton: { fontFamily: 'Nunito', size: '18px', color: 'white' },
                toolbar: {},
                logo: { textAlign: 'left' },
                container: { position: 'sticky', top: 0, zIndex: 100 },
                leftPortion: { flexGrow: 1, display: 'flex', alignItems: 'center', backgroundColor: '#990021' },
                logoWrapper: { marginRight: '1em', display: 'flex', alignItems: 'center' },
                logoBtn: Object(g.a)(
                  { textTransform: 'none', fontSize: '1.2em', padding: '0.1em', marginRight: '0.3em' },
                  e.breakpoints.down('xs'),
                  { fontSize: '1em', marginLeft: '0.6em' },
                ),
                backBtn: Object(g.a)({}, e.breakpoints.down('xs'), { marginLeft: '0.6em' }),
                svgImage: Object(g.a)({ width: '35px', marginRight: '5px' }, e.breakpoints.down('xs'), { width: '30px' }),
                rightBtnWrapper: { display: 'flex', alignItems: 'center' },
                lastBtn: { marginLeft: '1em' },
                threeDotsBtn: { padding: '0.35em' },
                menuIcon: { marginRight: '10px' },
                userInfo: { display: 'flex', alignItems: 'center' },
                avatar: Object(g.a)(
                  {
                    width: e.spacing(4.1),
                    height: e.spacing(4.1),
                    marginRight: '0.4em',
                    color: e.palette.primary.main,
                    backgroundColor: '#d3d3d3',
                  },
                  e.breakpoints.down('xs'),
                  { width: e.spacing(3.5), height: e.spacing(3.5) },
                ),
                btnsWrapper: { display: 'flex', alignItems: 'center' },
                userBtnMob: { padding: '0.1em' },
              };
            },
            { index: 1 },
          )),
        y = Object(h.a)(
          function (e) {
            return {
              root: Object(g.a)({ padding: '1.5em 3em', width: '330px', margin: 'auto', marginTop: '16vH' }, e.breakpoints.down('xs'), {
                width: 'auto',
                margin: '0.5em 0.5em',
                padding: '1em',
              }),
              form: { marginTop: '3em' },
              inputField: { marginBottom: '1.5em' },
              submitButton: { marginTop: '0.5em', height: '3.1em', fontSize: '1em', fontWeight: 500 },
              titleLogo: Object(g.a)({ display: 'block', width: '7em', margin: '0 auto' }, e.breakpoints.down('xs'), { width: '6em' }),
              footerText: { marginTop: '1em', textAlign: 'center' },
              headerText: { marginBottom: '1em', marginTop: '0.5em', fontSize: '24pt', textAlign: 'center', fontFamily: 'Nunito' },
              link: { cursor: 'pointer' },
              iconColor: { color: '#990021' },
            };
          },
          { index: 1 },
        ),
        A = Object(h.a)(
          function (e) {
            return { footer: { marginTop: 'calc(5% + 60px)', bottom: 0, borderTop: '1px solid grey', opacity: '50%' } };
          },
          { index: 1 },
        ),
        k =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAmCAYAAAAoTt69AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN7SURBVHgB7ZpLbA1RHMa/3pY+4hnxiKBFSAkLgmAhtSIRC9RSbCRiJRIbiZ1YsxA2hJWIRCMSEjuCIsT7EfFuq0EQUqGKXt/nnEkn163eR3vnzNzzJb/O9Nxp78x85/3/A15OqwLRK0VqSC0ZTobZsrT9vNf+nqlee81ve/7T0mNJIwEqlUH6nrFkOmkkc+z5VDKRjCQjkN2gdOh/hKXy3hC/YAzqJl3kPWknz8kjcp88JT/g9Vd60UvJXnKDfEZfrY8CtbQ2cpDMRRlLLWIbuQZTm9MOotZ2iixGGUnd1n7yFm6akg216PNkIRKsFeQcou2+BsMotfi1pAoJ0WpyCfEyIhejWskquDHDzVu66SaYQT9OL74QozRGNSIG0mysgawnVxDvrixfNCXXrG8CIlK4GY+C6ba0PplCZpDZ9rwG5S0tEfaQAzCL4JKrklxAvGp3FNwlG2AW1ppMDPk4FXyBppk3EdOBscSSUZ/IV/KRvINZAAvtXLy05x/Id3t9wQqmlPPhzclVek/jLPX9XKOFsAzqIM/IQ/KA3CFvYLakclJgUCxmKzGS3usky6JQubabtEeorvI6uWyPXQP9w2OI11iQJNRFtpBmmLEtq1ocu+ly5QXZitBwE8RZauHlgrTE0X7myqAgMCgx+08JkNacu2FbUcqe1MHLJakFNelEBu0iy+Hlmrboh1qPQsHz4OWatL3UpBaUgpeLGkN2ypx2eLmqOhnUAS9X9SSc3uTlnjpk0DJ4uaoeGbSRvIaXi+qWQY9hdlxPwGdduiJFbU+S1swYkHYU6sk09KXpKuw905aVe+h7KPUNpic7TQ7Bzq7zCdJVw+RSz4IxTgbK0E0wOdXFSskobfaegvVZZT/H4LwSfc8QfpZszzUYAUm9RO1bFvq8ahmKXN+DMeMVTL64jorS/jNhK/amdaNXUXhm5mEYU7SbrsTBMxmf/+/lZzuGjQuTaWoqdH2FLavK+Dzz7zthEvF1z5uRvxQeV0/0BSXWOhSWinUb8ewyR5OLyO9ZFeJuRkRSDdyH/G5YUcQ450OPh4lC51IxFc7egYil8ekIcjNHSRRLEH+pYq6BaU1KEsl8To1XZ8kCFKHBzuRR4uN2mHhGdahcNU0D43FyFCbjJSnSO2yAMWKyLdP22S2YmVhROzVDlWqllKRwAoSyWTrt0csrOfoDyLgghjOTzKkAAAAASUVORK5CYII=',
        N = {
          saveUser: function (e) {
            localStorage.setItem('user', JSON.stringify(e));
          },
          getUser: function () {
            var e = localStorage.getItem('user');
            return e ? JSON.parse(e) : null;
          },
          removeUser: function () {
            return localStorage.removeItem('user');
          },
        },
        I = n(29),
        T = n(12),
        B = n.n(T),
        C = n(21),
        S = n(62),
        H = n(100),
        R = n.n(H),
        F = 'http://localhost:3005',
        W = {
          login: (function () {
            var e = Object(C.a)(
              B.a.mark(function e(t) {
                var n;
                return B.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), R.a.post(''.concat(F, '/login'), t);
                      case 2:
                        return (n = e.sent), e.abrupt('return', n.data);
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          signup: (function () {
            var e = Object(C.a)(
              B.a.mark(function e(t) {
                var n;
                return B.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), R.a.post(''.concat(F, '/signup'), t);
                      case 2:
                        return (n = e.sent), e.abrupt('return', n.data);
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        },
        z = function (e) {
          var t, n;
          return (
            null === e || void 0 === e || null === (t = e.response) || void 0 === t || null === (n = t.data) || void 0 === n
              ? void 0
              : n.message
          )
            ? e.response.data.message
            : e.message;
        },
        L = Object(S.b)({
          name: 'auth',
          initialState: { user: null, loading: !1, error: null },
          reducers: {
            setUser: function (e, t) {
              (e.user = t.payload), (e.loading = !1), (e.error = null);
            },
            setAuthLoading: function (e) {
              (e.loading = !0), (e.error = null);
            },
            setAuthError: function (e, t) {
              (e.loading = !1), (e.error = t.payload);
            },
            clearAuthError: function (e) {
              e.error = null;
            },
            removeUser: function (e) {
              e.user = null;
            },
            cancelll: function (e) {
              e.loading = !1;
            },
          },
        }),
        U = L.actions,
        P = U.setUser,
        q = U.setAuthLoading,
        E = (U.cancelll, U.setAuthError),
        M = U.clearAuthError,
        K = U.removeUser,
        G = function (e) {
          return e.auth;
        },
        Q = L.reducer,
        X = n(339),
        J = function () {
          var e = w();
          return Object(a.jsxs)(a.Fragment, {
            children: [
              Object(a.jsx)(p.a, { className: e.menuButton, component: l.b, to: j, children: '\u0412\u0445\u043e\u0434' }),
              Object(a.jsxs)(p.a, {
                className: e.menuButton,
                component: l.b,
                to: u,
                children: [' ', '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f'],
              }),
            ],
          });
        },
        Y = n(84),
        Z = n.n(Y),
        D = n(146),
        V = n.n(D),
        $ = n(147),
        _ = n.n($),
        ee = n(338),
        te = function (e) {
          var t = e.handleLogout,
            n = w();
          return Object(a.jsxs)(a.Fragment, {
            children: [
              Object(a.jsx)(ee.a, {
                title: '\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442',
                children: Object(a.jsx)(p.a, { className: n.iconButton, component: l.b, to: b, children: Object(a.jsx)(V.a, {}) }),
              }),
              Object(a.jsx)(ee.a, {
                title: '\u0412\u044b\u0439\u0442\u0438',
                children: Object(a.jsx)(p.a, { className: n.iconButton, onClick: t, children: Object(a.jsx)(Z.a, {}) }),
              }),
              Object(a.jsx)(ee.a, {
                title: '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435',
                children: Object(a.jsxs)(p.a, {
                  className: n.iconButton,
                  component: l.b,
                  to: x,
                  children: [
                    '\u041f\u043e\u0434\u0430\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435',
                    Object(a.jsx)(_.a, {}),
                  ],
                }),
              }),
            ],
          });
        },
        ne = function () {
          var e = w(),
            t = Object(I.b)(),
            n = Object(c.g)(),
            r = Object(I.c)(G).user || N.getUser();
          return Object(a.jsx)(X.a, {
            className: e.container,
            children: Object(a.jsx)(d.a, {
              elevation: 1,
              color: 'inherit',
              position: 'static',
              className: e.appBar,
              children: Object(a.jsxs)(m.a, {
                variant: 'dense',
                children: [
                  Object(a.jsxs)('div', {
                    className: e.leftPortion,
                    children: [
                      Object(a.jsx)(p.a, { to: '/', component: l.b, children: Object(a.jsx)('img', { src: k, alt: '' }) }),
                      Object(a.jsx)(p.a, {
                        className: e.menuButton,
                        children: '\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f',
                      }),
                      Object(a.jsx)(p.a, { className: e.menuButton, children: '\u041d\u043e\u0432\u043e\u0441\u0442\u0438' }),
                    ],
                  }),
                  r ? null : Object(a.jsx)(J, {}),
                  r
                    ? Object(a.jsx)(te, {
                        handleLogout: function () {
                          t(function (e) {
                            e(K()), N.removeUser();
                          }),
                            n.push(j);
                        },
                      })
                    : null,
                ],
              }),
            }),
          });
        },
        ae = n(15),
        re = n(61),
        ie = n(48),
        oe = n(87),
        se = n(104),
        ce = n(347),
        le = n(344),
        de = n(342),
        me = n(345),
        pe = n(306),
        je = n(88),
        be = n.n(je),
        ue = n(68),
        xe = n.n(ue),
        ge = n(69),
        he = n.n(ge),
        Oe = n(70),
        fe = n.n(Oe),
        ve = n(351),
        we = n(343),
        ye = function () {
          return Object(a.jsx)('div', {
            style: { width: '100%', marginTop: '0.8em', marginBottom: '0.8em' },
            children: Object(a.jsxs)(ve.a, {
              severity: 'info',
              children: [
                Object(a.jsx)(we.a, {
                  children:
                    '\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0438 \u043b\u043e\u0433\u0438\u043d',
                }),
                "\u041b\u043e\u0433\u0438\u043d: 'test' & \u041f\u0430\u0440\u043e\u043b\u044c: 'password'",
              ],
            }),
          });
        },
        Ae = function (e) {
          var t = e.errorMsg,
            n = e.clearErrorMsg;
          return t
            ? Object(a.jsx)('div', {
                style: { width: '100%', marginTop: '0.8em', marginBottom: '0.8em' },
                children: Object(a.jsxs)(ve.a, {
                  severity: 'error',
                  onClose: n,
                  children: [Object(a.jsx)(we.a, { children: '\u041e\u0448\u0438\u0431\u043a\u0430!' }), t],
                }),
              })
            : null;
        },
        ke = ie.a({ username: ie.b().required('Required'), password: ie.b().required('Required') }),
        Ne = function () {
          var e = y(),
            t = Object(I.b)(),
            n = Object(I.c)(G),
            i = n.loading,
            o = n.error,
            s = Object(r.useState)(!1),
            d = Object(ae.a)(s, 2),
            m = d[0],
            j = d[1],
            x = Object(re.b)({ mode: 'onChange', resolver: Object(oe.yupResolver)(ke) }),
            g = x.register,
            h = x.handleSubmit,
            O = x.errors,
            f = Object(c.g)();
          return Object(a.jsx)('div', {
            children: Object(a.jsxs)(pe.a, {
              className: e.root,
              elevation: 2,
              children: [
                Object(a.jsxs)('form', {
                  onSubmit: h(function (e) {
                    var n = e.username,
                      a = e.password;
                    t(
                      (function (e, t) {
                        return (function () {
                          var n = Object(C.a)(
                            B.a.mark(function n(a) {
                              var r;
                              return B.a.wrap(
                                function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        return (n.prev = 0), a(q()), (n.next = 4), W.login(e);
                                      case 4:
                                        (r = n.sent), a(P(r)), N.saveUser(r), t.push(b), (n.next = 13);
                                        break;
                                      case 10:
                                        (n.prev = 10), (n.t0 = n.catch(0)), a(E(z(n.t0)));
                                      case 13:
                                      case 'end':
                                        return n.stop();
                                    }
                                },
                                n,
                                null,
                                [[0, 10]],
                              );
                            }),
                          );
                          return function (e) {
                            return n.apply(this, arguments);
                          };
                        })();
                      })({ username: n, password: a }, f),
                    );
                  }),
                  className: e.form,
                  children: [
                    Object(a.jsx)('img', { src: k, alt: 'bug-logo', className: e.titleLogo }),
                    Object(a.jsx)(se.a, { variant: 'body1', className: e.headerText, children: '\u0412\u0445\u043e\u0434' }),
                    Object(a.jsx)('div', {
                      className: e.inputField,
                      children: Object(a.jsx)(ce.a, {
                        required: !0,
                        fullWidth: !0,
                        inputRef: g,
                        type: 'text',
                        label: '\u041b\u043e\u0433\u0438\u043d',
                        name: 'username',
                        variant: 'outlined',
                        error: 'username' in O,
                        helperText: 'username' in O ? O.username.message : '',
                        InputProps: {
                          startAdornment: Object(a.jsx)(le.a, {
                            position: 'start',
                            children: Object(a.jsx)(be.a, { className: e.iconColor }),
                          }),
                        },
                      }),
                    }),
                    Object(a.jsx)('div', {
                      className: e.inputField,
                      children: Object(a.jsx)(ce.a, {
                        required: !0,
                        fullWidth: !0,
                        inputRef: g,
                        type: m ? 'text' : 'password',
                        label: '\u041f\u0430\u0440\u043e\u043b\u044c',
                        name: 'password',
                        variant: 'outlined',
                        error: 'password' in O,
                        helperText: 'password' in O ? O.password.message : '',
                        InputProps: {
                          endAdornment: Object(a.jsx)(le.a, {
                            position: 'end',
                            children: Object(a.jsx)(de.a, {
                              size: 'small',
                              onClick: function () {
                                return j(function (e) {
                                  return !e;
                                });
                              },
                              children: m ? Object(a.jsx)(xe.a, {}) : Object(a.jsx)(he.a, {}),
                            }),
                          }),
                          startAdornment: Object(a.jsx)(le.a, {
                            position: 'start',
                            children: Object(a.jsx)(fe.a, { className: e.iconColor }),
                          }),
                        },
                      }),
                    }),
                    Object(a.jsx)(p.a, {
                      color: 'inherit',
                      variant: 'contained',
                      size: 'large',
                      fullWidth: !0,
                      startIcon: Object(a.jsx)(Z.a, {}),
                      type: 'submit',
                      className: e.submitButton,
                      disabled: i,
                      children: '\u0412\u043e\u0439\u0442\u0438',
                    }),
                    Object(a.jsx)(ye, {}),
                  ],
                }),
                Object(a.jsxs)(se.a, {
                  variant: 'body1',
                  className: e.footerText,
                  children: [
                    '\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?',
                    ' ',
                    Object(a.jsx)(me.a, {
                      color: 'primary',
                      to: u,
                      component: l.b,
                      children:
                        '\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f',
                    }),
                  ],
                }),
                o &&
                  Object(a.jsx)(Ae, {
                    errorMsg: o,
                    clearErrorMsg: function () {
                      return t(M());
                    },
                  }),
              ],
            }),
          });
        },
        Ie = n(151),
        Te = n.n(Ie),
        Be = ie.a({
          username: ie
            .b()
            .required('Required')
            .max(
              20,
              '\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432',
            )
            .min(
              3,
              '\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432',
            )
            .matches(
              /^[a-zA-Z0-9-_]*$/,
              '\u0414\u043e\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b, \u0442\u0438\u0440\u0435 \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u044f',
            ),
          password: ie
            .b()
            .required('Required')
            .min(
              6,
              '\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432',
            ),
          confirmPassword: ie
            .b()
            .required('Required')
            .min(
              6,
              '\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432',
            ),
        }),
        Ce = function () {
          var e = y(),
            t = Object(I.b)(),
            n = Object(I.c)(G),
            i = n.loading,
            o = n.error,
            s = Object(r.useState)(!1),
            d = Object(ae.a)(s, 2),
            m = d[0],
            u = d[1],
            x = Object(r.useState)(!1),
            g = Object(ae.a)(x, 2),
            h = g[0],
            O = g[1],
            f = Object(re.b)({ mode: 'onChange', resolver: Object(oe.yupResolver)(Be) }),
            v = f.register,
            w = f.handleSubmit,
            A = f.errors,
            T = Object(c.g)();
          return Object(a.jsx)('div', {
            children: Object(a.jsxs)(pe.a, {
              className: e.root,
              elevation: 2,
              children: [
                Object(a.jsxs)('form', {
                  onSubmit: w(function (e) {
                    var n = e.username,
                      a = e.password;
                    if (a !== e.confirmPassword)
                      return t(
                        E('\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442'),
                      );
                    t(
                      (function (e, t) {
                        return (function () {
                          var n = Object(C.a)(
                            B.a.mark(function n(a) {
                              var r;
                              return B.a.wrap(
                                function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        return (n.prev = 0), a(q()), (n.next = 4), W.signup(e);
                                      case 4:
                                        (r = n.sent), a(P(r)), N.saveUser(r), t.push(b), (n.next = 13);
                                        break;
                                      case 10:
                                        (n.prev = 10), (n.t0 = n.catch(0)), a(E(z(n.t0)));
                                      case 13:
                                      case 'end':
                                        return n.stop();
                                    }
                                },
                                n,
                                null,
                                [[0, 10]],
                              );
                            }),
                          );
                          return function (e) {
                            return n.apply(this, arguments);
                          };
                        })();
                      })({ username: n, password: a }, T),
                    );
                  }),
                  className: e.form,
                  children: [
                    Object(a.jsx)('img', { src: k, alt: 'bug-logo', className: e.titleLogo }),
                    Object(a.jsx)(se.a, {
                      variant: 'body1',
                      className: e.headerText,
                      children: '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
                    }),
                    Object(a.jsx)('div', {
                      className: e.inputField,
                      children: Object(a.jsx)(ce.a, {
                        required: !0,
                        fullWidth: !0,
                        inputRef: v,
                        type: 'text',
                        name: 'username',
                        label: '\u041b\u043e\u0433\u0438\u043d',
                        variant: 'outlined',
                        error: 'username' in A,
                        helperText: 'username' in A ? A.username.message : '',
                        InputProps: {
                          startAdornment: Object(a.jsx)(le.a, {
                            position: 'start',
                            children: Object(a.jsx)(be.a, { className: e.iconColor }),
                          }),
                        },
                      }),
                    }),
                    Object(a.jsx)('div', {
                      className: e.inputField,
                      children: Object(a.jsx)(ce.a, {
                        required: !0,
                        fullWidth: !0,
                        inputRef: v,
                        type: m ? 'text' : 'password',
                        name: 'password',
                        label: '\u041f\u0430\u0440\u043e\u043b\u044c',
                        variant: 'outlined',
                        error: 'password' in A,
                        helperText: 'password' in A ? A.password.message : '',
                        InputProps: {
                          endAdornment: Object(a.jsx)(le.a, {
                            position: 'end',
                            children: Object(a.jsx)(de.a, {
                              size: 'small',
                              onClick: function () {
                                return u(function (e) {
                                  return !e;
                                });
                              },
                              children: m ? Object(a.jsx)(xe.a, {}) : Object(a.jsx)(he.a, {}),
                            }),
                          }),
                          startAdornment: Object(a.jsx)(le.a, {
                            position: 'start',
                            children: Object(a.jsx)(fe.a, { className: e.iconColor }),
                          }),
                        },
                      }),
                    }),
                    Object(a.jsx)('div', {
                      className: e.inputField,
                      children: Object(a.jsx)(ce.a, {
                        required: !0,
                        fullWidth: !0,
                        inputRef: v,
                        type: h ? 'text' : 'password',
                        label:
                          '\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f',
                        name: 'confirmPassword',
                        variant: 'outlined',
                        error: 'confirmPassword' in A,
                        helperText: 'confirmPassword' in A ? A.confirmPassword.message : '',
                        InputProps: {
                          endAdornment: Object(a.jsx)(le.a, {
                            position: 'end',
                            children: Object(a.jsx)(de.a, {
                              size: 'small',
                              onClick: function () {
                                return O(function (e) {
                                  return !e;
                                });
                              },
                              children: h ? Object(a.jsx)(xe.a, {}) : Object(a.jsx)(he.a, {}),
                            }),
                          }),
                          startAdornment: Object(a.jsx)(le.a, {
                            position: 'start',
                            children: Object(a.jsx)(fe.a, { className: e.iconColor }),
                          }),
                        },
                      }),
                    }),
                    Object(a.jsx)(p.a, {
                      color: 'inherit',
                      variant: 'contained',
                      size: 'large',
                      fullWidth: !0,
                      startIcon: Object(a.jsx)(Te.a, {}),
                      type: 'submit',
                      className: e.submitButton,
                      disabled: i,
                      children:
                        '\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f',
                    }),
                  ],
                }),
                Object(a.jsxs)(se.a, {
                  variant: 'body1',
                  className: e.footerText,
                  children: [
                    '\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?',
                    ' ',
                    Object(a.jsx)(me.a, { color: 'primary', to: j, component: l.b, children: '\u0412\u043e\u0439\u0442\u0438' }),
                  ],
                }),
                o &&
                  Object(a.jsx)(Ae, {
                    errorMsg: o,
                    clearErrorMsg: function () {
                      return t(M());
                    },
                  }),
              ],
            }),
          });
        },
        Se = n(39),
        He = n(152),
        Re = n.n(He),
        Fe = n(350),
        We = [
          {
            title: 'Opel',
            year: 1994,
            imageUrl: 'https://avatars.mds.yandex.net/get-verba/937147/2a00000179b3e4e1c4c28087a58eb0595a12/logo',
          },
          {
            title: 'BMW',
            year: 1972,
            imageUrl: 'https://avatars.mds.yandex.net/get-verba/1030388/2a00000179af8e23344d871bcfa394f0c60d/logo',
          },
        ],
        ze = function () {
          var e = O();
          return Object(a.jsxs)('div', {
            className: e.root,
            children: [
              Object(a.jsxs)(pe.a, {
                className: e.headerPaper,
                children: [
                  Object(a.jsx)(Re.a, { fontSize: 'large', style: { fontSize: '4.5em', marginRight: '0.2em' } }),
                  Object(a.jsx)('h1', {
                    children:
                      '\u041f\u0440\u043e\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c',
                  }),
                ],
              }),
              Object(a.jsx)(pe.a, {
                className: e.paper,
                children: Object(a.jsxs)('div', {
                  style: { width: '500px' },
                  children: [
                    Object(a.jsxs)('p', {
                      children: [
                        Object(a.jsx)('h3', {
                          children:
                            '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0430\u0440\u043a\u0443 \u0430\u0432\u0442\u043e',
                        }),
                        Object(a.jsx)(Fe.a, {
                          id: 'combo-box-demo',
                          options: We,
                          getOptionLabel: function (e) {
                            return e.title;
                          },
                          renderInput: function (e) {
                            return Object(a.jsx)(
                              ce.a,
                              Object(Se.a)(
                                Object(Se.a)({}, e),
                                {},
                                {
                                  label: '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0440\u0435\u043d\u0434',
                                  variant: 'outlined',
                                },
                              ),
                            );
                          },
                          renderOption: function (e) {
                            return Object(a.jsxs)(a.Fragment, {
                              children: [
                                Object(a.jsx)('img', { style: { width: '40px', height: '40px' }, src: e.imageUrl, alt: '' }),
                                e.title,
                              ],
                            });
                          },
                        }),
                      ],
                    }),
                    Object(a.jsxs)('p', {
                      children: [
                        Object(a.jsx)('h3', {
                          children: '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u043e\u0434\u0435\u043b\u044c',
                        }),
                        Object(a.jsx)(Fe.a, {
                          id: 'combo-box-demo',
                          options: We,
                          getOptionLabel: function (e) {
                            return e.title;
                          },
                          renderInput: function (e) {
                            return Object(a.jsx)(
                              ce.a,
                              Object(Se.a)(
                                Object(Se.a)({}, e),
                                {},
                                {
                                  label: '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0430\u0440\u043a\u0443',
                                  variant: 'outlined',
                                },
                              ),
                            );
                          },
                          renderOption: function (e) {
                            return Object(a.jsxs)(a.Fragment, {
                              children: [
                                Object(a.jsx)('img', { style: { width: '40px', height: '40px' }, src: e.imageUrl, alt: '' }),
                                e.title,
                              ],
                            });
                          },
                        }),
                      ],
                    }),
                    Object(a.jsxs)('p', {
                      children: [
                        Object(a.jsx)('h3', {
                          children:
                            '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430 \u0430\u0432\u0442\u043e',
                        }),
                        Object(a.jsx)(Fe.a, {
                          id: 'combo-box-demo',
                          options: We,
                          getOptionLabel: function (e) {
                            return e.title;
                          },
                          renderInput: function (e) {
                            return Object(a.jsx)(
                              ce.a,
                              Object(Se.a)(
                                Object(Se.a)({}, e),
                                {},
                                {
                                  label:
                                    '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430 \u0430\u0432\u0442\u043e',
                                  variant: 'outlined',
                                },
                              ),
                            );
                          },
                          renderOption: function (e) {
                            return Object(a.jsxs)(a.Fragment, {
                              children: [
                                Object(a.jsx)('img', { style: { width: '40px', height: '40px' }, src: e.imageUrl, alt: '' }),
                                e.title,
                              ],
                            });
                          },
                        }),
                      ],
                    }),
                    Object(a.jsxs)('p', {
                      children: [
                        Object(a.jsx)('h3', {
                          children:
                            '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043a\u0443\u0437\u043e\u0432\u0430',
                        }),
                        Object(a.jsx)(p.a, { children: 'dfgdfg' }),
                        Object(a.jsx)(p.a, {}),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Le = n.p + 'static/media/404 error page.d7d87954.png',
        Ue = function () {
          var e = v();
          return Object(a.jsx)('div', {
            className: e.root,
            children: Object(a.jsx)(pe.a, {
              className: e.notFoundPaper,
              children: Object(a.jsxs)('div', {
                className: e.notFoundWrapper,
                children: [
                  Object(a.jsx)('img', { src: Le, alt: '', width: '500px', height: '500px' }),
                  Object(a.jsx)(se.a, {
                    color: 'inherit',
                    variant: 'h6',
                    className: e.error404Text,
                    children: Object(a.jsx)('p', {
                      children: '\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430!',
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Pe = n(346),
        qe = n(349),
        Ee = n(3),
        Me = n(348),
        Ke = function (e) {
          var t = e.children,
            n = e.value,
            r = e.index,
            i = Object(Ee.a)(e, ['children', 'value', 'index']);
          return Object(a.jsx)(
            'div',
            Object(Se.a)(
              Object(Se.a)(
                { role: 'tabpanel', hidden: n !== r, id: 'simple-tabpanel-'.concat(r), 'aria-labelledby': 'simple-tab-'.concat(r) },
                i,
              ),
              {},
              { children: n === r && Object(a.jsx)(Me.a, { p: 3, children: Object(a.jsx)(se.a, { children: t }) }) },
            ),
          );
        },
        Ge = function () {
          var e = f(),
            t = i.a.useState(0),
            n = Object(ae.a)(t, 2),
            r = n[0],
            o = n[1];
          return Object(a.jsx)('div', {
            className: e.root,
            children: Object(a.jsx)(pe.a, {
              className: e.paper,
              children: Object(a.jsxs)('div', {
                className: e.tabs,
                children: [
                  Object(a.jsxs)(qe.a, {
                    value: r,
                    onChange: function (e, t) {
                      o(t);
                    },
                    children: [
                      Object(a.jsx)(Pe.a, { label: '\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f' }),
                      Object(a.jsx)(Pe.a, { label: '\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438' }),
                    ],
                  }),
                  Object(a.jsx)(Ke, {
                    index: 0,
                    value: r,
                    children: '\u0422\u0443\u0442 \u043c\u043e\u0438 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f',
                  }),
                  Object(a.jsx)(Ke, {
                    index: 1,
                    value: r,
                    children: '\u0422\u0443\u0442 \u043c\u043e\u0438 \u043d\u0430\u0439\u0441\u0442\u0440\u043e\u0439\u043a\u0438',
                  }),
                ],
              }),
            }),
          });
        },
        Qe = function () {
          var e = v();
          return Object(a.jsx)('div', {
            className: e.root,
            children: Object(a.jsx)(pe.a, {
              className: e.notFoundPaper,
              children: Object(a.jsx)('div', {
                className: e.notFoundWrapper,
                children: Object(a.jsx)(se.a, {
                  color: 'inherit',
                  variant: 'h6',
                  className: e.error404Text,
                  children: Object(a.jsx)('p', {
                    children: '\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430',
                  }),
                }),
              }),
            }),
          });
        },
        Xe = function () {
          var e = Object(I.c)(G).user,
            t = N.getUser() || e;
          return (
            console.log(t),
            Object(a.jsx)(X.a, {
              children: Object(a.jsxs)(c.d, {
                children: [
                  Object(a.jsx)(c.b, { exact: !0, path: b, children: t ? Object(a.jsx)(Ge, {}) : Object(a.jsx)(c.a, { to: '/login' }) }),
                  Object(a.jsx)(c.b, { exact: !0, path: j, children: t ? Object(a.jsx)(c.a, { to: b }) : Object(a.jsx)(Ne, {}) }),
                  Object(a.jsx)(c.b, { exact: !0, path: u, children: t ? Object(a.jsx)(c.a, { to: b }) : Object(a.jsx)(Ce, {}) }),
                  Object(a.jsx)(c.b, { exact: !0, path: x, children: t ? Object(a.jsx)(ze, {}) : Object(a.jsx)(c.a, { to: j }) }),
                  Object(a.jsx)(c.b, { exact: !0, path: '/', children: Object(a.jsx)(Qe, {}) }),
                  Object(a.jsx)(c.b, { children: Object(a.jsx)(Ue, {}) }),
                ],
              }),
            })
          );
        },
        Je = function () {
          var e = A();
          return Object(a.jsx)('footer', {
            className: e.footer,
            children:
              '\xa9denissfloww 2021\u20132021 (\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c)',
          });
        };
      var Ye = function () {
          var e,
            t = ((e = !1),
            Object(h.a)(
              function (t) {
                return {
                  root: {
                    width: '100vW',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    minHeight: '100vH',
                    backgroundColor: e ? '#333' : '#E1E1E4',
                    fontFamily: 'Nunito',
                  },
                };
              },
              { index: 1 },
            ))();
          return Object(a.jsx)('div', {
            className: 'App',
            children: Object(a.jsxs)('div', {
              className: t.root,
              children: [Object(a.jsx)(ne, {}), Object(a.jsx)(Xe, {}), Object(a.jsx)(Je, {})],
            }),
          });
        },
        Ze = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 353))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  r = t.getFCP,
                  i = t.getLCP,
                  o = t.getTTFB;
                n(e), a(e), r(e), i(e), o(e);
              });
        },
        De = Object(S.b)({
          name: 'append',
          initialState: { showModels: !1 },
          reducers: {
            setModel: function (e) {
              e.showModels = !0;
            },
          },
        }),
        Ve = (De.actions.setModel, De.reducer),
        $e = Object(S.a)({ reducer: { auth: Q, append: Ve } });
      s.a.render(
        Object(a.jsx)(I.a, { store: $e, children: Object(a.jsx)(l.a, { children: Object(a.jsx)(Ye, {}) }) }),
        document.getElementById('root'),
      ),
        Ze();
    },
  },
  [[303, 1, 2]],
]);
//# sourceMappingURL=main.9910b876.chunk.js.map
