(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a.n(n),i=a(7),s=a.n(i),o=a(0),l=a.n(o),A=a(153),c=a(160),d=(a(76),a(55),a(178),a(180),a(181)),u=a(154);var p=function(e){var t=e.startDate,a=e.endDate,n=e.isCurrentJob;return l.a.createElement("div",{style:{marginBottom:Object(u.a)(-1.8)}},n?l.a.createElement("h4",null,t,"-",(new Date).getFullYear()):l.a.createElement("h4",null,t," : ",a))},f=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.change,a=e.jobNum,n=e.options;return l.a.createElement("div",null,l.a.createElement("p",null,"How many recent jobs to show?"),l.a.createElement("div",{style:{marginRight:Object(u.a)(2),marginTop:Object(u.a)(-1)}},l.a.createElement("select",{onChange:t,value:a},n)))},t}(l.a.Component),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){a.setState({skills:e.target.value})},a.state={skills:[]},a}s()(t,e);var a=t.prototype;return a.componentWillMount=function(){this.setState({skills:this.props.skills})},a.render=function(){return l.a.createElement("div",{style:{marginLeft:Object(u.a)(3),display:"block"}},l.a.createElement("h3",null,"Skills"),this.props.skills.map(function(e){return l.a.createElement("div",{style:{display:"inline-grid",marginRight:Object(u.a)(1),marginLeft:Object(u.a)(1)}},l.a.createElement("h5",null,e.name),l.a.createElement("ul",null,e.keywords.map(function(e){return l.a.createElement("li",{key:e},e)})))}))},t}(l.a.Component),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).change=function(e){a.setState({jobNum:e.target.value})},a.state={jobNum:2,options:[]},a}s()(t,e);var a=t.prototype;return a.componentWillMount=function(){for(var e=[],t=0;t<this.props.num;t++)e.push(l.a.createElement("option",{value:t+1},t+1));this.setState({options:e})},a.render=function(){var e=this.props.work;return l.a.createElement("div",null,l.a.createElement("h3",null,"Experience"),l.a.createElement("div",null,l.a.createElement(f,{change:this.change,jobNum:this.state.jobNum,options:this.state.options})),e.slice(0,this.state.jobNum).map(function(e){var t=e.company,a=e.position,n=e.startDate,r=e.endDate,i=e.highlights,s=e.isCurrentJob;return l.a.createElement("div",null,l.a.createElement(p,{startDate:n,endDate:r,isCurrentJob:s}),l.a.createElement("h4",null,t),l.a.createElement("div",{style:{marginTop:Object(u.a)(-1)}},l.a.createElement("span",null,l.a.createElement("p",null,l.a.createElement("em",null,a))),l.a.createElement("ul",null,i.map(function(e,t){return l.a.createElement("li",{key:t},e)}))))}))},t}(l.a.Component),g=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return l.a.createElement(A.b,{query:b,render:function(e){var t=e.dataJson,a=t.work,n=t.skills,r=Object.keys(a).length;return l.a.createElement("div",{style:{display:"inline",marginBottom:Object(u.a)(2.5)}},l.a.createElement(m,{work:a,num:r}),l.a.createElement(h,{skills:n}))},data:d})},t}(l.a.Component),b="2895611686",E=g,y=a(157),w=a(158);a(150);a.d(t,"pageQuery",function(){return j});var v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showJobs:!1,className:"hide"},a.toggleJobs=a.toggleJobs.bind(r()(a)),a}s()(t,e);var a=t.prototype;return a.toggleJobs=function(){"show"===this.state.className?this.setState({className:"hide",showJobs:!1}):this.setState({className:"show",showJobs:!0})},a.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,n=this.state,r=n.showJobs,i=n.className;return l.a.createElement(y.a,{location:this.props.location,title:t},l.a.createElement(w.a,{title:"All posts",keywords:["blog","gatsby","javascript","react","resume"]}),l.a.createElement("a",{href:"/finance-app/"},"Finance app"),l.a.createElement(c.a,null),l.a.createElement("button",{onClick:this.toggleJobs},r?"Hide Resume":"View Resume"),l.a.createElement("div",{className:i},r&&l.a.createElement(E,null)),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return l.a.createElement("div",{key:t.fields.slug},l.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},l.a.createElement(A.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),l.a.createElement("small",null,t.frontmatter.date),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},t}(l.a.Component),j=(t.default=v,"622637725")},153:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(155);var A=r.a.createContext({}),c=function(e){return r.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return A});var n=a(165),r=a.n(n),i=a(166),s=a.n(i);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new r.a(s.a);var l=o.rhythm,A=o.scale},155:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},156:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(54),l=a(2),A=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};A.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=A},157:function(e,t,a){"use strict";a(33);var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=a(153),l=a(154),A=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(32),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,r),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=A},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(167),A=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=n.data.site,c=t||l.siteMetadata.description;return i.a.createElement(A.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex Love's Personal Website",description:"A small website for my personal portfolio and reflections on my learning.",author:"Alex Love"}}}}},160:function(e,t,a){"use strict";a(161);var n=a(163),r=a(0),i=a.n(r),s=a(153),o=a(164),l=a.n(o),A=a(154);var c="2612972255";t.a=function(){return i.a.createElement(s.b,{query:c,render:function(e){var t=e.site.siteMetadata.author;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(A.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(A.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,i.a.createElement("strong",null,t)," "))},data:n})}},161:function(e,t,a){"use strict";a(162)("fixed",function(e){return function(){return e(this,"tt","","")}})},162:function(e,t,a){var n=a(11),r=a(17),i=a(18),s=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},163:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAIEAQMFBv/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAehOvhVfQOPLjWdwZ//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMREhD/2gAIAQEAAQUCdj0h8u42tkWbCTpdiFtdR//EABURAQEAAAAAAAAAAAAAAAAAACBB/9oACAEDAQE/AYP/xAAVEQEBAAAAAAAAAAAAAAAAAAAgQf/aAAgBAgEBPwGj/8QAHRAAAgEEAwAAAAAAAAAAAAAAAAERAhAhMRJBUf/aAAgBAQAGPwLinHZDqTds78Nq0mWQmf/EABwQAQADAAIDAAAAAAAAAAAAAAEAESEQMVFxgf/aAAgBAQABPyEhDmyy/wCRcNGw1r0lCpDhko6TsTfmUJEOpeSE/9oADAMBAAIAAwAAABCz/wDC/8QAGBEBAAMBAAAAAAAAAAAAAAAAEQABECH/2gAIAQMBAT8QK7xsIz//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhEP/aAAgBAgEBPxDccaVpEf/EABwQAQADAAIDAAAAAAAAAAAAAAEAESExQVGRof/aAAgBAQABPxBxwsK8upaocta/SZ3Gkf5r2WoZuhYL9cyiII8IwVBFsDsBW0pwE0jDhP/Z",width:50,height:50,src:"/static/70cb9d340c0233e9b18996362d2919eb/be31c/profile-pic.jpg",srcSet:"/static/70cb9d340c0233e9b18996362d2919eb/be31c/profile-pic.jpg 1x,\n/static/70cb9d340c0233e9b18996362d2919eb/83167/profile-pic.jpg 1.5x,\n/static/70cb9d340c0233e9b18996362d2919eb/a795d/profile-pic.jpg 2x,\n/static/70cb9d340c0233e9b18996362d2919eb/ec61a/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Alex Love"}}}}},164:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(34)),o=n(a(74)),l=n(a(75)),A=n(a(0)),c=n(a(4)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},p=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},f=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){f.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),f.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",A=e.opacity?e.opacity:"1";return"<picture>"+n+"<img "+o+l+a+r+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+A+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=A.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,c=e.onError,d=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return A.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},d,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});g.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=A.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,p=e.placeholderClassName,f=e.fluid,h=e.fixed,b=e.backgroundColor,E=e.Tag,y=e.itemProp,w="boolean"==typeof b?"lightgray":b,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,u),j=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),S={title:t,alt:this.state.isVisible?"":a,style:v,className:p};if(f){var B=f;return A.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},A.default.createElement(E,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),B.base64&&A.default.createElement(g,(0,l.default)({src:B.base64},S)),B.tracedSVG&&A.default.createElement(g,(0,l.default)({src:B.tracedSVG},S)),w&&A.default.createElement(E,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&A.default.createElement("picture",null,B.srcSetWebp&&A.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),A.default.createElement(g,{alt:a,title:t,sizes:B.sizes,src:B.src,srcSet:B.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&A.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},B))}}))}if(h){var D=h,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},i);return"inherit"===i.display&&delete R.display,A.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},D.base64&&A.default.createElement(g,(0,l.default)({src:D.base64},S)),D.tracedSVG&&A.default.createElement(g,(0,l.default)({src:D.tracedSVG},S)),w&&A.default.createElement(E,{title:t,style:{backgroundColor:w,width:D.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:D.height}}),this.state.isVisible&&A.default.createElement("picture",null,D.srcSetWebp&&A.default.createElement("source",{type:"image/webp",srcSet:D.srcSetWebp,sizes:D.sizes}),A.default.createElement(g,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,srcSet:D.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&A.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:D.width,height:D.height},D))}}))}return null},t}(A.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),y=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:E,sizes:y,fixed:E,fluid:y,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=b;t.default=w},178:function(e,t,a){var n=a(26),r=a(35);a(179)("keys",function(){return function(e){return r(n(e))}})},179:function(e,t,a){var n=a(11),r=a(19),i=a(17);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],s={};s[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",s)}},180:function(e,t,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(20)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},181:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAIEAQMFBv/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAehOvhVfQOPLjWdwZ//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMREhD/2gAIAQEAAQUCdj0h8u42tkWbCTpdiFtdR//EABURAQEAAAAAAAAAAAAAAAAAACBB/9oACAEDAQE/AYP/xAAVEQEBAAAAAAAAAAAAAAAAAAAgQf/aAAgBAgEBPwGj/8QAHRAAAgEEAwAAAAAAAAAAAAAAAAERAhAhMRJBUf/aAAgBAQAGPwLinHZDqTds78Nq0mWQmf/EABwQAQADAAIDAAAAAAAAAAAAAAEAESEQMVFxgf/aAAgBAQABPyEhDmyy/wCRcNGw1r0lCpDhko6TsTfmUJEOpeSE/9oADAMBAAIAAwAAABCz/wDC/8QAGBEBAAMBAAAAAAAAAAAAAAAAEQABECH/2gAIAQMBAT8QK7xsIz//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhEP/aAAgBAgEBPxDccaVpEf/EABwQAQADAAIDAAAAAAAAAAAAAAEAESExQVGRof/aAAgBAQABPxBxwsK8upaocta/SZ3Gkf5r2WoZuhYL9cyiII8IwVBFsDsBW0pwE0jDhP/Z",width:50,height:50,src:"/static/70cb9d340c0233e9b18996362d2919eb/be31c/profile-pic.jpg",srcSet:"/static/70cb9d340c0233e9b18996362d2919eb/be31c/profile-pic.jpg 1x,\n/static/70cb9d340c0233e9b18996362d2919eb/83167/profile-pic.jpg 1.5x,\n/static/70cb9d340c0233e9b18996362d2919eb/a795d/profile-pic.jpg 2x,\n/static/70cb9d340c0233e9b18996362d2919eb/ec61a/profile-pic.jpg 3x"}}},dataJson:{work:[{currentJob:!0,company:"Corner Booth Media",position:"Web Developer and Analyst",highlights:["Create and design websites for clients to compliment their business strategy and needs","Use web analytics to influence online strategy","Migrated existing websites to new hosting, resulting in better site performance","Researched and templated new regular reporting strategy"],startDate:"2018/04/16",endDate:"Present"},{currentJob:!1,company:"Pathology Associated Medical Laboratories",position:"Billing Integrity Specialist",highlights:["Verify integrity of secondary insurance claims","Submit secondary claims through web portal accurately","Compile paper claims and verify information"],startDate:"2017/11/01",endDate:"2018/03-/10"},{currentJob:!1,company:"Zag Shop - Follet Corporation",position:"Retail Team Member",highlights:["Resolve issues with online book orders","Enhanced order retrieval organization by pre-sorting orders","High volume, fast-pased environment required friendly demeanor and accuracy"],startDate:"2017/08/01",endDate:"2017/09/01"},{currentJob:!1,company:"Chastek Law Library",position:"IT/AV Help Desk and Circulation Desk Assistant",highlights:["Provided IT support to law school faculty, staff, and students","Created welcoming and friendly front desk atmosphere","Assistent patrons and answered informational phone-calls"],startDate:"2017/06/15",endDate:"2018/08/01"},{currentJob:!1,company:"ComputerLaw Group LLP",position:"Summer Office Assistant/IT Consultant",highlights:["Increased organization and efficiency of inflow/outflow of documents via scanning/sorting","Organized filing system for bank statements, data backup, and mail inflow, provided a more functional office environment","Created reusable document forms using Adobe Acrobat","Created inventory spreadsheets in Excel","Assisted (Coordinated, etc.) with device management and network storage organization/backup"],startDate:"Summer 2014",endDate:"Summer 2015"}],skills:[{name:"Web Development",level:"Intermediete",keywords:["HTML","CSS","Javascript","React"]},{name:"Data Analysis",level:"Intermediete",keywords:["statistics","excel/google sheets","econometrics"]},{name:"IT",level:"Intermediate",keywords:["PC Hardware","Mac/Windows"]}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-042f1ad821a4ddfb9a60.js.map