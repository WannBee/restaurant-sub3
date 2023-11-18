(()=>{"use strict";var n,r={948:(n,r,t)=>{t.d(r,{Z:()=>o});var A=t(537),e=t.n(A),a=t(645),i=t.n(a)()(e());i.push([n.id,"@media screen and (min-width: 650px) {\n    .app-bar {\n      grid-template-columns: 1fr auto;\n      padding: 8px 32px;\n    }\n   \n    .app-bar .app-bar__brand h1 {\n      font-size: 1.5em;\n    }\n   \n    .app-bar .app-bar__menu {\n      display: none;\n    }\n   \n    .app-bar .app-bar__navigation {\n      position: static;\n      width: 100%;\n    }\n   \n    .app-bar .app-bar__navigation ul li {\n      display: inline-block;\n    }\n   \n    .app-bar .app-bar__navigation ul li a {\n      display: inline-block;\n      width: 120px;\n      text-align: center;\n      margin: 0;\n    }\n   \n    .movies {\n      grid-template-columns: 1fr 1fr;\n    }\n   \n    .movie {\n      grid-template-columns: auto 1fr;\n    }\n   \n    .movie .movie__title {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n   \n    .movie .movie__overview {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n  }\n   \n  @media screen and (min-width: 800px) {\n    .jumbotron h1{\n      font-size: 56px;\n    }\n    .jumbotron p{\n      font-size: 24px;\n    }\n    .app-bar .app-bar__brand h1 {\n      font-size: 2em;\n    }\n  }\n   \n  @media screen and (min-width: 850px) {\n    .jumbotron h1{\n      font-size: 46px;\n    }\n    .jumbotron p{\n      font-size: 20px;\n    }\n    .restaurants {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n   \n  @media screen and (min-width: 1200px) {\n    .restaurants {\n      grid-template-columns: repeat(4, 1fr);\n    }\n  }\n   \n  @media screen and (min-width: 1600px) {\n    .restaurants {\n        grid-template-columns: repeat(5, 1fr);\n    }\n  }","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;IACI;MACE,+BAA+B;MAC/B,iBAAiB;IACnB;;IAEA;MACE,gBAAgB;IAClB;;IAEA;MACE,aAAa;IACf;;IAEA;MACE,gBAAgB;MAChB,WAAW;IACb;;IAEA;MACE,qBAAqB;IACvB;;IAEA;MACE,qBAAqB;MACrB,YAAY;MACZ,kBAAkB;MAClB,SAAS;IACX;;IAEA;MACE,8BAA8B;IAChC;;IAEA;MACE,+BAA+B;IACjC;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;EACF;;EAEA;IACE;MACE,eAAe;IACjB;IACA;MACE,eAAe;IACjB;IACA;MACE,cAAc;IAChB;EACF;;EAEA;IACE;MACE,eAAe;IACjB;IACA;MACE,eAAe;IACjB;IACA;MACE,qCAAqC;IACvC;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;EACF;;EAEA;IACE;QACI,qCAAqC;IACzC;EACF",sourcesContent:["@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n      grid-template-columns: 1fr auto;\r\n      padding: 8px 32px;\r\n    }\r\n   \r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 1.5em;\r\n    }\r\n   \r\n    .app-bar .app-bar__menu {\r\n      display: none;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation {\r\n      position: static;\r\n      width: 100%;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li {\r\n      display: inline-block;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li a {\r\n      display: inline-block;\r\n      width: 120px;\r\n      text-align: center;\r\n      margin: 0;\r\n    }\r\n   \r\n    .movies {\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n   \r\n    .movie {\r\n      grid-template-columns: auto 1fr;\r\n    }\r\n   \r\n    .movie .movie__title {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n   \r\n    .movie .movie__overview {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 800px) {\r\n    .jumbotron h1{\r\n      font-size: 56px;\r\n    }\r\n    .jumbotron p{\r\n      font-size: 24px;\r\n    }\r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 2em;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 850px) {\r\n    .jumbotron h1{\r\n      font-size: 46px;\r\n    }\r\n    .jumbotron p{\r\n      font-size: 20px;\r\n    }\r\n    .restaurants {\r\n      grid-template-columns: repeat(3, 1fr);\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 1200px) {\r\n    .restaurants {\r\n      grid-template-columns: repeat(4, 1fr);\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 1600px) {\r\n    .restaurants {\r\n        grid-template-columns: repeat(5, 1fr);\r\n    }\r\n  }"],sourceRoot:""}]);const o=i},890:(n,r,t)=>{t.d(r,{Z:()=>o});var A=t(537),e=t.n(A),a=t(645),i=t.n(a)()(e());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Agbalumo&display=swap);"]),i.push([n.id,"* {\n    padding: 0;\n    margin: 0;\n  }\n   \n  body {\n    font-family: 'Poppins', sans-serif;\n    background-color: rgb(215, 215, 215);\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n\n\n  .like {\n    width: 55px;\n    height: 55px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #db0000;\n    \n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    border-radius: 50%;\n    border: 0;\n    \n    font-size: 18px;\n    color: white;\n    cursor: pointer;\n  }\n\n  .skip-link {\n    position: absolute;\n    padding-top: 50px;\n    top: 20px;\n    right: 0;\n    background-color: #bf1722;\n    color: white;\n    padding: 8px 10px;\n    z-index: 1000;\n    opacity: 0;\n    min-width: 44px;\n    min-height: 44px;\n    padding: 10px 10px;\n  \n  }\n   \n  .skip-link:focus {\n     top: 0;\n     display: block;\n     opacity: 1;\n  }\n\n  .jumbotron {\n    position: relative;\n    text-align: center;\n\n  }\n  .jumbotron h1 {\n    font-family: agbalumo;\n    font-size: 30px; \n    position: absolute;\n    top: 35%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #d24904;\n    -webkit-text-stroke-width: 2px white;\n    text-shadow:\n      3px 3px 0 #000,\n     -1px -1px 0 #000,  \n      1px -1px 0 #000,\n     -1px 1px 0 #000,\n      1px 1px 0 #000;\n\n  }\n  \n  .jumbotron p {\n    font-family: poppins;\n    font-size: 10px;\n    position: absolute;\n    top: 45%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #d24904;\n    -webkit-text-stroke-width: 2px white;\n    color: white;\n    text-shadow:\n      3px 3px 0 #000,\n     -1px -1px 0 #000,  \n      1px -1px 0 #000,\n     -1px 1px 0 #000,\n      1px 1px 0 #000;\n\n    \n  }\n  \n  .jumbotron img{\n    width: 100%;\n    height: auto;\n    right: 5%;\n    opacity: 0.5;\n  }\n\n  .app-bar {\n    padding: 8px 16px;\n    background-color: white;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 10px;\n    position: sticky;\n    top: 0;\n    z-index: 99;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n  }\n   \n  .app-bar .app-bar__menu {\n    display: flex;\n    align-items: center;\n  }\n   \n  .app-bar .app-bar__menu button {\n    background-color: transparent;\n    border: none;\n    font-size: 18px;\n    cursor: pointer;\n    min-width: 44px;\n    min-height: 44px;\n    padding: 10px 10px;\n  }\n   \n  .app-bar .app-bar__brand {\n    display: flex;\n    align-items: center;\n  }\n   \n  .app-bar .app-bar__brand h1 {\n    color: #d24904;\n    font-family: agbalumo;\n    text-transform: uppercase;\n    font-size: 32px;\n    user-select: none;\n    -webkit-text-stroke-width: 2px white;\n    text-shadow:\n      3px 3px 0 #000,\n     -1px -1px 0 #000,  \n      1px -1px 0 #000,\n     -1px 1px 0 #000,\n      1px 1px 0 #000;\n  }\n   \n  .app-bar .app-bar__navigation {\n    position: absolute;\n    top: 50px;\n    left: -180px;\n    width: 150px;\n    transition: all 0.3s;\n    padding: 8px;\n    background-color: rgb(255, 255, 255);\n    overflow: hidden;\n  }\n   \n  .app-bar .app-bar__navigation.open {\n    left: 0;\n  }\n   \n  .app-bar .app-bar__navigation ul li a {\n    display: inline-block;\n    text-decoration: none;\n    color: black;\n    min-width: 44px;\n    min-height: 44px;\n    padding: 10px 10px;\n    margin-bottom: 5px;\n    width: 100%;\n  }\n   \n\n   \n  main {\n    padding: 32px;\n    flex: 1;\n  }\n   \n  .content {\n    margin: 0 auto;\n    min-height: 100%;\n  }\n   \n  .content .content__heading {\n    font-weight: normal;\n  }\n   \n  .menu-detail ul li{\n    list-style-type: none;\n    text-decoration: none;\n  }\n   \n  .restaurants {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n    margin: 32px 0;\n  }\n   \n\n  .restaurant-item {\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    overflow: hidden;\n    background-color: white;\n  }\n   \n  .restaurant-item__header {\n    position: relative;\n  }\n   \n  .restaurant-item .restaurant-item__header .restaurant-item__header__poster {\n    width: 100%;\n  }\n   \n  .restaurant-item .restaurant-item__header .restaurant-item__header__rating {\n    position: absolute;\n    padding: 8px;\n    bottom: 20px;\n    left: 0;\n    display: inline-block;\n    background-color: black;\n    color: white;\n  }\n   \n  .restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\n    margin-left: 10px;\n  }\n   \n  .restaurant-item .restaurant-item__content {\n    padding: 16px;\n  }\n   \n  .restaurant-item .restaurant-item__content h3 {\n    margin: 0 0 10px 0;\n  }\n   \n  .restaurant-item .restaurant-item__content h3 a {\n    font-family: agbalumo;\n    font-size: 40px;\n    color:#d24904;\n    text-decoration: none;\n  }\n   \n  .restaurant-item .restaurant-item__content p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 4; /* number of lines to show */\n    -webkit-box-orient: vertical;\n  }\n   \n\n   \n  .restaurant {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 800px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 18px 16px;\n  }\n   \n  .restaurant .restaurant__poster {\n    width: 100%;\n    max-width: 400px;\n  }\n   \n  .restaurant .restaurant__info h4 {\n    margin: 8px 0;\n  }\n  .restaurant__poster{\n    align-items: center;\n    justify-content: center;\n  }\n\n  .restaurant__title{\n    font-family: agbalumo;\n    color: #d24904;\n    font-size: 50px;\n  }\n  .restaurant__title .restaurant__info h1, h2, h3, h4{\n    color: #d24904;\n  }\n   \n\n  footer {\n    padding: 16px;\n    background-color: #ffffff;\n  }\n   \n  footer p {\n    text-align: center;\n    color: #282828;\n  }\n","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Agbalumo&display=swap');\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n   \r\n  body {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: rgb(215, 215, 215);\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n\r\n  .like {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #db0000;\r\n    \r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border-radius: 50%;\r\n    border: 0;\r\n    \r\n    font-size: 18px;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .skip-link {\r\n    position: absolute;\r\n    padding-top: 50px;\r\n    top: 20px;\r\n    right: 0;\r\n    background-color: #bf1722;\r\n    color: white;\r\n    padding: 8px 10px;\r\n    z-index: 1000;\r\n    opacity: 0;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    padding: 10px 10px;\r\n  \r\n  }\r\n   \r\n  .skip-link:focus {\r\n     top: 0;\r\n     display: block;\r\n     opacity: 1;\r\n  }\r\n\r\n  .jumbotron {\r\n    position: relative;\r\n    text-align: center;\r\n\r\n  }\r\n  .jumbotron h1 {\r\n    font-family: agbalumo;\r\n    font-size: 30px; \r\n    position: absolute;\r\n    top: 35%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: #d24904;\r\n    -webkit-text-stroke-width: 2px white;\r\n    text-shadow:\r\n      3px 3px 0 #000,\r\n     -1px -1px 0 #000,  \r\n      1px -1px 0 #000,\r\n     -1px 1px 0 #000,\r\n      1px 1px 0 #000;\r\n\r\n  }\r\n  \r\n  .jumbotron p {\r\n    font-family: poppins;\r\n    font-size: 10px;\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: #d24904;\r\n    -webkit-text-stroke-width: 2px white;\r\n    color: white;\r\n    text-shadow:\r\n      3px 3px 0 #000,\r\n     -1px -1px 0 #000,  \r\n      1px -1px 0 #000,\r\n     -1px 1px 0 #000,\r\n      1px 1px 0 #000;\r\n\r\n    \r\n  }\r\n  \r\n  .jumbotron img{\r\n    width: 100%;\r\n    height: auto;\r\n    right: 5%;\r\n    opacity: 0.5;\r\n  }\r\n\r\n  .app-bar {\r\n    padding: 8px 16px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 99;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n  }\r\n   \r\n  .app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    padding: 10px 10px;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n   \r\n  .app-bar .app-bar__brand h1 {\r\n    color: #d24904;\r\n    font-family: agbalumo;\r\n    text-transform: uppercase;\r\n    font-size: 32px;\r\n    user-select: none;\r\n    -webkit-text-stroke-width: 2px white;\r\n    text-shadow:\r\n      3px 3px 0 #000,\r\n     -1px -1px 0 #000,  \r\n      1px -1px 0 #000,\r\n     -1px 1px 0 #000,\r\n      1px 1px 0 #000;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: rgb(255, 255, 255);\r\n    overflow: hidden;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n  }\r\n   \r\n  .app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    padding: 10px 10px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n  }\r\n   \r\n\r\n   \r\n  main {\r\n    padding: 32px;\r\n    flex: 1;\r\n  }\r\n   \r\n  .content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n  }\r\n   \r\n  .content .content__heading {\r\n    font-weight: normal;\r\n  }\r\n   \r\n  .menu-detail ul li{\r\n    list-style-type: none;\r\n    text-decoration: none;\r\n  }\r\n   \r\n  .restaurants {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n  }\r\n   \r\n\r\n  .restaurant-item {\r\n    width: 100%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n    background-color: white;\r\n  }\r\n   \r\n  .restaurant-item__header {\r\n    position: relative;\r\n  }\r\n   \r\n  .restaurant-item .restaurant-item__header .restaurant-item__header__poster {\r\n    width: 100%;\r\n  }\r\n   \r\n  .restaurant-item .restaurant-item__header .restaurant-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n   \r\n  .restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\r\n    margin-left: 10px;\r\n  }\r\n   \r\n  .restaurant-item .restaurant-item__content {\r\n    padding: 16px;\r\n  }\r\n   \r\n  .restaurant-item .restaurant-item__content h3 {\r\n    margin: 0 0 10px 0;\r\n  }\r\n   \r\n  .restaurant-item .restaurant-item__content h3 a {\r\n    font-family: agbalumo;\r\n    font-size: 40px;\r\n    color:#d24904;\r\n    text-decoration: none;\r\n  }\r\n   \r\n  .restaurant-item .restaurant-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4; /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n  }\r\n   \r\n\r\n   \r\n  .restaurant {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n  }\r\n   \r\n  .restaurant .restaurant__poster {\r\n    width: 100%;\r\n    max-width: 400px;\r\n  }\r\n   \r\n  .restaurant .restaurant__info h4 {\r\n    margin: 8px 0;\r\n  }\r\n  .restaurant__poster{\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .restaurant__title{\r\n    font-family: agbalumo;\r\n    color: #d24904;\r\n    font-size: 50px;\r\n  }\r\n  .restaurant__title .restaurant__info h1, h2, h3, h4{\r\n    color: #d24904;\r\n  }\r\n   \r\n\r\n  footer {\r\n    padding: 16px;\r\n    background-color: #ffffff;\r\n  }\r\n   \r\n  footer p {\r\n    text-align: center;\r\n    color: #282828;\r\n  }\r\n"],sourceRoot:""}]);const o=i},362:(n,r,t)=>{var A=t(379),e=t.n(A),a=t(795),i=t.n(a),o=t(569),p=t.n(o),s=t(565),l=t.n(s),d=t(216),C=t.n(d),m=t(589),x=t.n(m),B=t(948),u={};u.styleTagTransform=x(),u.setAttributes=l(),u.insert=p().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=C(),e()(B.Z,u),B.Z&&B.Z.locals&&B.Z.locals},915:(n,r,t)=>{var A=t(379),e=t.n(A),a=t(795),i=t.n(a),o=t(569),p=t.n(o),s=t(565),l=t.n(s),d=t(216),C=t.n(d),m=t(589),x=t.n(m),B=t(890),u={};u.styleTagTransform=x(),u.setAttributes=l(),u.insert=p().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=C(),e()(B.Z,u),B.Z&&B.Z.locals&&B.Z.locals}},t={};function A(n){var e=t[n];if(void 0!==e)return e.exports;var a=t[n]={id:n,exports:{}};return r[n](a,a.exports,A),a.exports}A.m=r,n=[],A.O=(r,t,e,a)=>{if(!t){var i=1/0;for(l=0;l<n.length;l++){for(var[t,e,a]=n[l],o=!0,p=0;p<t.length;p++)(!1&a||i>=a)&&Object.keys(A.O).every((n=>A.O[n](t[p])))?t.splice(p--,1):(o=!1,a<i&&(i=a));if(o){n.splice(l--,1);var s=e();void 0!==s&&(r=s)}}return r}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[t,e,a]},A.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return A.d(r,{a:r}),r},A.d=(n,r)=>{for(var t in r)A.o(r,t)&&!A.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},A.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n={400:0};A.O.j=r=>0===n[r];var r=(r,t)=>{var e,a,[i,o,p]=t,s=0;if(i.some((r=>0!==n[r]))){for(e in o)A.o(o,e)&&(A.m[e]=o[e]);if(p)var l=p(A)}for(r&&r(t);s<i.length;s++)a=i[s],A.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return A.O(l)},t=self.webpackChunkrestaurant=self.webpackChunkrestaurant||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),A.nc=void 0;var e=A.O(void 0,[946,2,495,337,268],(()=>A(253)));e=A.O(e)})();
//# sourceMappingURL=app~4e5ec22b.bundle.js.map