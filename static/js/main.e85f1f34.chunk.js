(this.webpackJsonpprivate=this.webpackJsonpprivate||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(15),r=a.n(i),s=(a(28),a(9)),c=a(16),o=a(21),u=a(17),m=a(22),d=a(2),p=a(7);function b(e){return l.a.createElement("div",{className:"card col-3 navigation"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Next place"),l.a.createElement("ul",{className:"nav nav-pills flex-column"},l.a.Children.map(e.children,(function(e,t){return l.a.createElement("li",{className:"nav-item"},e)})))))}function h(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(b,null,l.a.createElement(d.b,{to:"/cellar",className:"nav-link"},"Cellar"),l.a.createElement(d.b,{to:"/bookcase",className:"nav-link"},"Bookcase")),l.a.createElement("div",{className:"card col",style:{width:"18rem"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Home"),l.a.createElement("p",{className:"card-text"},"Time to go on an adventure!")))))}a(34),a(35);var E=a(20);function v(e){var t=e.component,a=e.isAuthenticated,n=e.failPath,i=Object(E.a)(e,["component","isAuthenticated","failPath"]);return l.a.createElement(p.b,Object.assign({},i,{render:function(e){return!0===a?l.a.createElement(t,e):l.a.createElement(p.a,{to:n})}}))}function g(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(b,null,l.a.createElement(d.b,{to:"/home",className:"nav-link"},"Upstars")),l.a.createElement("div",{className:"card col",style:{width:"18rem"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Cellar"),l.a.createElement("p",{className:"card-text"},"Here you can find locked chest with wierd message scrambled on top."),l.a.createElement("p",null,'Message: "You must be logged to open me"'),l.a.createElement("div",{className:"my-auto d-flex justify-content-center"},l.a.createElement(d.b,{to:"/secret"},l.a.createElement("button",{type:"button",className:"btn btn-lg btn-primary mr-2",disabled:!e.logged},"Open gently")),l.a.createElement(d.b,{to:"/secret"},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg"},"Force open")))))))}var f=function e(t,a,n){var l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(s.a)(this,e),this.id=t,this.title=a,this.content=n,this.isLogin=l};function N(e){var t=e.book,a=e.onLogin,n=e.logged,i=l.a.createRef(),r=l.a.createRef();return l.a.createElement("section",null,l.a.createElement("hr",null),l.a.createElement("h3",{className:"text-center display-4"},t.title),l.a.createElement("p",{className:"lead"},t.content),t.isLogin&&!n?l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Login"),l.a.createElement("input",{ref:i,type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",{ref:r,type:"password",className:"form-control",id:"exampleInputPassword1"})),l.a.createElement("button",{onClick:function(){a(i.current.value,r.current.value)},type:"button",className:"btn btn-primary"},"Submit")):l.a.createElement("p",null,"You feel that something has changed"))}var y=Object(p.g)((function(e){var t=l.a.createRef(),a=e.onLogin,n=e.logged,i=e.books;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(b,null,l.a.createElement(d.b,{to:"/home",className:"nav-link"},"Home (the main part)")),l.a.createElement("div",{className:"card col",style:{width:"18rem"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Bookcase"),l.a.createElement("p",{className:"card-text"},"Here you can take and reed books. One of them is ",l.a.createElement("b",null,"special"),"."),l.a.createElement("p",{className:"card-text"},"If You want to take book of shelf select it and confirm."),l.a.createElement("form",null,l.a.createElement("div",{className:"input-group"},l.a.createElement("select",{ref:t,className:"custom-select"},e.books.map((function(e,t){return l.a.createElement("option",{key:t,value:e.id},e.title)}))),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{onClick:function(){var a=t.current.value,n="".concat(e.match.url,"/").concat(a);e.history.push(n)},className:"btn btn-outline-secondary",type:"button"},"Open"),l.a.createElement("button",{onClick:function(){var t="".concat(e.match.url);e.history.push(t)},className:"btn btn-outline-secondary",type:"button"},"Close book")))),l.a.createElement(d.a,null,l.a.createElement(p.b,{path:e.match.path+"/:idBook",render:function(e){return l.a.createElement(N,Object.assign({},e,{logged:n,onLogin:a,book:i.find((function(t){return t.id==e.match.params.idBook}))}))}}))))))}));function k(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(b,null,l.a.createElement(d.b,{to:"/cellar",className:"nav-link"},"Cellar")),l.a.createElement("div",{className:"card col",style:{width:"18rem"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Secret spot"),l.a.createElement("p",{className:"lead card-text"},"You've managed to get inside the chest and found this secret place! ",l.a.createElement("b",null,"Congratulations!!!"))))))}function w(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(b,null,l.a.createElement(d.b,{to:"/home",className:"nav-link"},"Home")),l.a.createElement("div",{className:"card col",style:{width:"18rem"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Outside"),l.a.createElement("p",{className:"card-text"},"Suddenly you were blinded by flash of white light. After a while you woked up in front of the entrence to the house.")))))}var q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).authenticate=function(e,t){a.setState({logged:!0}),console.log(e,t),console.log("You have been logged in")},a.state={logged:!1,books:[new f(1,"Art of binding","Mauris ut finibus felis, eu dictum odio. Nam orci leo, ultricies ac sem a, finibus congue sapien. Mauris dictum gravida mauris. Nam et dignissim eros. Aliquam cursus pharetra leo vel finibus. Cras vehicula mauris in pretium commodo. Vestibulum vehicula molestie varius. Phasellus non tellus et leo consequat tincidunt. Duis vitae viverra augue, vel sollicitudin metus. Pellentesque auctor erat sed est lobortis rhoncus ut at ligula. Fusce sodales, enim sit amet varius placerat, odio metus imperdiet sapien, a hendrerit libero mauris ut nulla. Sed at erat quam. Donec sodales ante a nibh bibendum lobortis. Mauris lobortis elit quis libero rutrum, eget rutrum dolor sagittis. In fringilla vel nisl ut mollis. Cras finibus dolor eget nisl sodales, in dictum purus pretium."),new f(2,"Secret cooking ingredients","Etiam at quam ornare enim accumsan tristique id faucibus eros. Mauris placerat sed est sit amet elementum. Donec elementum, augue nec laoreet ornare, massa nibh lobortis felis, at sodales sem ipsum quis leo. Mauris dictum malesuada leo, vel mattis elit pulvinar ac. Aliquam a lorem erat. Donec vel nunc id dui ullamcorper fringilla quis et dolor. Aliquam tincidunt quis nulla vel suscipit. Quisque vel bibendum magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rhoncus velit eget urna pulvinar aliquet. In quis mi ut nisi euismod dictum non eget augue. Proin in molestie dui, eget vestibulum urna. Cras semper diam eu suscipit maximus. Vivamus eros nunc, mattis in sem eu, rhoncus ornare velit."),new f(3,"Computer magic","Duis id lectus vitae nisl iaculis dignissim at vel eros. Sed elit quam, laoreet quis aliquam id, laoreet vitae ligula. Nulla tristique, felis eu sollicitudin venenatis, mi risus porttitor lacus, at tincidunt libero velit in nibh. In dictum, orci vitae sodales viverra, nulla lorem vulputate urna, eu maximus nulla augue commodo nulla. Morbi molestie, est sit amet mollis elementum, turpis elit consectetur quam, a accumsan mi mauris vitae libero. Etiam dictum sagittis orci, id dignissim dui porta non. Praesent porta, eros in sollicitudin laoreet, tellus dui ultricies nunc, non consectetur arcu nisi eget augue. Pellentesque id gravida urna, at facilisis est. Donec id lacus est. Mauris eleifend laoreet arcu, non pretium metus ornare sed. In hac habitasse platea dictumst. Curabitur molestie, purus in ornare commodo, nulla nisl euismod tellus, in ullamcorper tellus velit in augue. Curabitur ac posuere purus. Nulla orci arcu, porta sed est luctus, luctus tincidunt tellus."),new f(4,"Wonderful authentication","Looks like this book has two empty spaces that just ask to be filled!",!0)]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"container logo"},l.a.createElement("h2",null,"Find your own path")),l.a.createElement("main",null,l.a.createElement(d.a,null,l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"/",component:h}),l.a.createElement(p.b,{path:"/home",component:h}),l.a.createElement(p.b,{path:"/cellar",render:function(t){return l.a.createElement(g,Object.assign({},t,{logged:e.state.logged}))}}),l.a.createElement(p.b,{path:"/bookcase",render:function(t){return l.a.createElement(y,Object.assign({},t,{logged:e.state.logged,onLogin:e.authenticate,books:e.state.books}))}}),l.a.createElement(v,{path:"/secret",isAuthenticated:this.state.logged,failPath:"/outside",component:k}),l.a.createElement(p.b,{path:"/outside",component:w})))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.e85f1f34.chunk.js.map