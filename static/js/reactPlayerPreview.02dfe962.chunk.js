(self.webpackChunkportfolio_musique=self.webpackChunkportfolio_musique||[]).push([[353],{371:(e,t,r)=>{var a,i=r(2897).default,l=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let i of s(t))u.call(e,i)||i===r||n(e,i,{get:()=>t[i],enumerable:!(a=o(t,i))||a.enumerable});return e},d=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),h={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(h,{default:()=>g}),e.exports=(a=h,c(n({},"__esModule",{value:!0}),a));var m=((e,t,r)=>(r=null!=e?l(p(e)):{},c(!t&&e&&e.__esModule?r:n(r,"default",{value:e,enumerable:!0}),e)))(r(5043));const b="64px",f={};class g extends m.Component{constructor(){super(...arguments),d(this,"mounted",!1),d(this,"state",{image:null}),d(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:r}=this.props;e.url===t&&e.light===r||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage(e){let{url:t,light:r,oEmbedUrl:a}=e;if(!m.default.isValidElement(r))if("string"!==typeof r){if(!f[t])return this.setState({image:null}),window.fetch(a.replace("{url}",t)).then((e=>e.json())).then((e=>{if(e.thumbnail_url&&this.mounted){const r=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),f[t]=r}}));this.setState({image:f[t]})}else this.setState({image:r})}render(){const{light:e,onClick:t,playIcon:r,previewTabIndex:a,previewAriaLabel:l}=this.props,{image:n}=this.state,o=m.default.isValidElement(e),s={display:"flex",alignItems:"center",justifyContent:"center"},p={preview:i({width:"100%",height:"100%",backgroundImage:n&&!o?"url(".concat(n,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},s),shadow:i({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:b,width:b,height:b,position:o?"absolute":void 0},s),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},u=m.default.createElement("div",{style:p.shadow,className:"react-player__shadow"},m.default.createElement("div",{style:p.playIcon,className:"react-player__play-icon"}));return m.default.createElement("div",i({style:p.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress},l?{"aria-label":l}:{}),o?e:null,r||u)}}}}]);
//# sourceMappingURL=reactPlayerPreview.02dfe962.chunk.js.map