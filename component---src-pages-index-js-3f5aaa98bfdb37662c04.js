(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{35:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "static/Kikkeriki-673160d95b8ff6177a725f963b0fb795.ogg");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYXRzYnktc3RhcnRlci1kZWZhdWx0Ly4vc3JjL3NvdW5kcy9LaWtrZXJpa2kub2dnP2ZmZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQWUscUJBQXVCLDBEQUEwRCIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvS2lra2VyaWtpLTY3MzE2MGQ5NWI4ZmY2MTc3YTcyNWY5NjNiMGZiNzk1Lm9nZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n')},2260:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": function() { return /* binding */ Sound; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3552);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _sounds_sound_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2102);\n/* harmony import */ var _sounds_Kikkeriki_ogg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);\n/* harmony import */ var _sounds_Kikkeriki_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(512);\n/* \n * A component to play bgm music and diverse Sound-Effects\n *\n * At the moment sounds get loaded into \n * window.bgmSound  --\x3e bgm-Sound instanceof\n * window.kikkeriki --\x3e kikkeriki Sound-Effect for the Splashscreen\n * \n * Attributes for the Sound-ReactComponent\n * \n * autoPlayBGM: if true, will automatically begin playing the bgm\n * \n */var Sound=/*#__PURE__*/function(_React$Component){(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(Sound,_React$Component);function Sound(){return _React$Component.apply(this,arguments)||this;}var _proto=Sound.prototype;_proto.render=function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null);};_proto.componentDidMount=function componentDidMount(){var _this=this;var script=document.createElement("script");script.src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js";script.async=true;script.onload=function(){return _this.scriptLoaded();};document.body.appendChild(script);};_proto.scriptLoaded=function scriptLoaded(){if("Howl"in window&&(!("bgmSound"in window)||!window.bgmSound.playing())){window.bgmSound=new window.Howl({src:[_sounds_sound_mp3__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z],autoplay:this.props.autoPlayBGM,loop:true,volume:0.4});window.kikkeriki=new window.Howl({src:[_sounds_Kikkeriki_ogg__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z,_sounds_Kikkeriki_mp3__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z],autoplay:false,loop:false});window.kikkeriki.on(\'end\',function(){// Can happen in some browsers that won\'t allow playing bgm \n// until after the first user intereaction\nif("bgmSound"in window&&!window.bgmSound.playing()){// not playing yet --\x3e play\nwindow.bgmSound.play();}});}};return Sound;}(react__WEBPACK_IMPORTED_MODULE_0__.Component);// Settings for the attribute\nSound.defaultProps={autoPlayBGM:false};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYXRzYnktc3RhcnRlci1kZWZhdWx0Ly4vc3JjL2NvbXBvbmVudHMvc291bmQuanM/YWNmNiJdLCJuYW1lcyI6WyJTb3VuZCIsInJlbmRlciIsImNvbXBvbmVudERpZE1vdW50Iiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJvbmxvYWQiLCJzY3JpcHRMb2FkZWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJiZ21Tb3VuZCIsInBsYXlpbmciLCJIb3dsIiwiQmdtU291bmQiLCJhdXRvcGxheSIsInByb3BzIiwiYXV0b1BsYXlCR00iLCJsb29wIiwidm9sdW1lIiwia2lra2VyaWtpIiwiS2lra2VyaWtpT2dnIiwiS2lra2VyaWtpTXAzIiwib24iLCJwbGF5IiwiUmVhY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEcsR0FlcUJBLE0sb1FBRWpCQyxNLENBQUEsaUJBQVMsQ0FDTCxtQkFDSSw0REFESixDQUdILEMsUUFFSkMsaUIsQ0FBQSw0QkFBb0IsZ0JBQ2xCLEdBQU1DLE9BQU0sQ0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWYsQ0FDQUYsTUFBTSxDQUFDRyxHQUFQLENBQWEsbUVBQWIsQ0FDQUgsTUFBTSxDQUFDSSxLQUFQLENBQWUsSUFBZixDQUNBSixNQUFNLENBQUNLLE1BQVAsQ0FBZ0IsaUJBQU0sTUFBSSxDQUFDQyxZQUFMLEVBQU4sRUFBaEIsQ0FFQUwsUUFBUSxDQUFDTSxJQUFULENBQWNDLFdBQWQsQ0FBMEJSLE1BQTFCLEVBQ0QsQyxRQUVETSxZLENBQUEsdUJBQWMsQ0FDYixHQUFHLFFBQVVHLE9BQVYsR0FBcUIsRUFBRSxZQUFjQSxPQUFoQixHQUEyQixDQUFDQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLEVBQWpELENBQUgsQ0FBK0UsQ0FDOUVGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFrQixHQUFJRCxPQUFNLENBQUNHLElBQVgsQ0FBZ0IsQ0FDaENULEdBQUcsQ0FBRSxDQUFDVSwrREFBRCxDQUQyQixDQUVoQ0MsUUFBUSxDQUFFLEtBQUtDLEtBQUwsQ0FBV0MsV0FGVyxDQUd2QkMsSUFBSSxDQUFFLElBSGlCLENBSWhDQyxNQUFNLENBQUUsR0FKd0IsQ0FBaEIsQ0FBbEIsQ0FNU1QsTUFBTSxDQUFDVSxTQUFQLENBQW1CLEdBQUlWLE9BQU0sQ0FBQ0csSUFBWCxDQUFnQixDQUMvQlQsR0FBRyxDQUFFLENBQUNpQixtRUFBRCxDQUFlQyxtRUFBZixDQUQwQixDQUUvQlAsUUFBUSxDQUFFLEtBRnFCLENBRy9CRyxJQUFJLENBQUUsS0FIeUIsQ0FBaEIsQ0FBbkIsQ0FLQVIsTUFBTSxDQUFDVSxTQUFQLENBQWlCRyxFQUFqQixDQUFvQixLQUFwQixDQUEyQixVQUFNLENBQzdCO0FBQ0E7QUFDQSxHQUFHLFlBQWNiLE9BQWQsRUFBd0IsQ0FBQ0EsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixFQUE1QixDQUFzRCxDQUNsRDtBQUNBRixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JhLElBQWhCLEdBQ0gsQ0FDSixDQVBELEVBUVQsQ0FDRCxDLGdCQXZDaUNDLDRDLEVBMENuQztBQUtBM0IsS0FBSyxDQUFDNEIsWUFBTixDQUFxQixDQUNuQlQsV0FBVyxDQUFFLEtBRE0sQ0FBckIiLCJmaWxlIjoiMjI2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICogQSBjb21wb25lbnQgdG8gcGxheSBiZ20gbXVzaWMgYW5kIGRpdmVyc2UgU291bmQtRWZmZWN0c1xuICpcbiAqIEF0IHRoZSBtb21lbnQgc291bmRzIGdldCBsb2FkZWQgaW50byBcbiAqIHdpbmRvdy5iZ21Tb3VuZCAgLS0+IGJnbS1Tb3VuZCBpbnN0YW5jZW9mXG4gKiB3aW5kb3cua2lra2VyaWtpIC0tPiBraWtrZXJpa2kgU291bmQtRWZmZWN0IGZvciB0aGUgU3BsYXNoc2NyZWVuXG4gKiBcbiAqIEF0dHJpYnV0ZXMgZm9yIHRoZSBTb3VuZC1SZWFjdENvbXBvbmVudFxuICogXG4gKiBhdXRvUGxheUJHTTogaWYgdHJ1ZSwgd2lsbCBhdXRvbWF0aWNhbGx5IGJlZ2luIHBsYXlpbmcgdGhlIGJnbVxuICogXG4gKi9cblxuXG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvY29tbW9uXCJcbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5cbmltcG9ydCBCZ21Tb3VuZCBmcm9tICcuLi9zb3VuZHMvc291bmQubXAzJ1xuaW1wb3J0IEtpa2tlcmlraU9nZyBmcm9tICcuLi9zb3VuZHMvS2lra2VyaWtpLm9nZydcbmltcG9ydCBLaWtrZXJpa2lNcDMgZnJvbSAnLi4vc291bmRzL0tpa2tlcmlraS5tcDMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKVxuICAgIH1cblx0XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHQgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdCAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvaG93bGVyLzIuMi4xL2hvd2xlci5taW4uanNcIjtcblx0ICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXHQgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB0aGlzLnNjcmlwdExvYWRlZCgpO1xuXG5cdCAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHR9XG5cdFxuXHRzY3JpcHRMb2FkZWQoKXtcblx0XHRpZihcIkhvd2xcIiBpbiB3aW5kb3cgJiYgKCEoXCJiZ21Tb3VuZFwiIGluIHdpbmRvdykgfHwgIXdpbmRvdy5iZ21Tb3VuZC5wbGF5aW5nKCkpKXtcblx0XHRcdHdpbmRvdy5iZ21Tb3VuZCA9IG5ldyB3aW5kb3cuSG93bCh7XG5cdFx0XHQgIHNyYzogW0JnbVNvdW5kXSxcblx0XHRcdCAgYXV0b3BsYXk6IHRoaXMucHJvcHMuYXV0b1BsYXlCR00sXG4gICAgICAgICAgICAgIGxvb3A6IHRydWUsXG5cdFx0XHQgIHZvbHVtZTogMC40XG5cdFx0XHR9KTtcbiAgICAgICAgICAgIHdpbmRvdy5raWtrZXJpa2kgPSBuZXcgd2luZG93Lkhvd2woe1xuICAgICAgICAgICAgICAgIHNyYzogW0tpa2tlcmlraU9nZywgS2lra2VyaWtpTXAzXSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5raWtrZXJpa2kub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDYW4gaGFwcGVuIGluIHNvbWUgYnJvd3NlcnMgdGhhdCB3b24ndCBhbGxvdyBwbGF5aW5nIGJnbSBcbiAgICAgICAgICAgICAgICAvLyB1bnRpbCBhZnRlciB0aGUgZmlyc3QgdXNlciBpbnRlcmVhY3Rpb25cbiAgICAgICAgICAgICAgICBpZihcImJnbVNvdW5kXCIgaW4gd2luZG93ICYmICF3aW5kb3cuYmdtU291bmQucGxheWluZygpKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90IHBsYXlpbmcgeWV0IC0tPiBwbGF5XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5iZ21Tb3VuZC5wbGF5KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXHRcdH1cblx0fVxufVxuXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGF0dHJpYnV0ZVxuU291bmQucHJvcFR5cGVzID0ge1xuICBhdXRvUGxheUJHTTogUHJvcFR5cGVzLmJvb2xcbn07XG5cblNvdW5kLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXV0b1BsYXlCR006IGZhbHNlXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2260\n')},1513:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": function() { return /* binding */ IndexPage; }\n});\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules\nvar inheritsLoose = __webpack_require__(3552);\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(7294);\n// EXTERNAL MODULE: ./src/components/seo.js + 1 modules\nvar seo = __webpack_require__(3751);\n// EXTERNAL MODULE: ./src/components/sound.js\nvar sound = __webpack_require__(2260);\n;// CONCATENATED MODULE: ./src/videos/waiting-for-chikin.mp4\n/* harmony default export */ var waiting_for_chikin = (__webpack_require__.p + "static/waiting-for-chikin-6e1b110ef16175d7b57479e07e27c23b.mp4");\n// EXTERNAL MODULE: ./src/sounds/sound.mp3\nvar sounds_sound = __webpack_require__(2102);\n// EXTERNAL MODULE: ./src/sounds/Kikkeriki.ogg\nvar Kikkeriki = __webpack_require__(35);\n// EXTERNAL MODULE: ./src/sounds/Kikkeriki.mp3\nvar sounds_Kikkeriki = __webpack_require__(512);\n;// CONCATENATED MODULE: ./src/images/waiting-for-chikin.png\n/* harmony default export */ var images_waiting_for_chikin = (__webpack_require__.p + "static/waiting-for-chikin-5cff9b0b4319f6a8f8c981195c1a1df6.png");\n;// CONCATENATED MODULE: ./src/pages/index.js\nvar coverImageId="cover-image";var kikkerikiId="kiara-kikkeriki";var IndexPage=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(IndexPage,_React$Component);function IndexPage(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this;_this.state={shown:false};_this.togglePop=function(){_this.setState({seen:!_this.state.seen});};_this.test=function(event,stuff){console.log(stuff);_this.setState({seen:true});};return _this;}var _proto=IndexPage.prototype;_proto.render=function render(){return/*#__PURE__*/react.createElement("div",{id:"index-main"},/*#__PURE__*/react.createElement(seo/* default */.Z,{title:"Home"}),/*#__PURE__*/react.createElement("div",{id:"background"}),/*#__PURE__*/react.createElement("div",{role:"button",tabIndex:"0",id:coverImageId,onClick:hideCover,onKeyDown:hideCover},/*#__PURE__*/react.createElement("video",{poster:images_waiting_for_chikin,autoPlay:true,loop:true,muted:true,playsInline:true},/*#__PURE__*/react.createElement("source",{src:waiting_for_chikin,type:"video/mp4"})),/*#__PURE__*/react.createElement("h1",null,"Click to continue"),/*#__PURE__*/react.createElement("div",{id:kikkerikiId})),/*#__PURE__*/react.createElement("div",{id:"mobile-only"}),/*#__PURE__*/react.createElement("div",{id:"navigation"},/*#__PURE__*/react.createElement("div",{id:"title"},"\\u30AD\\u30A2\\u30E9\\u3001100\\u4E07\\u4EBA\\u304A\\u3081\\u3067\\u3068\\u3046\\uFF01"),/*#__PURE__*/react.createElement("div",{id:"nav-contents"},/*#__PURE__*/react.createElement("div",{className:"nav-category"},/*#__PURE__*/react.createElement("h4",null,"KFN"),/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("a",{href:"/articles/roadToMillion"},"Road to 1 million")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("a",{href:"/articles/theFandom"},"About the KFP")))),/*#__PURE__*/react.createElement("div",{className:"nav-category"},/*#__PURE__*/react.createElement("h4",null,"1 million works"),/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("a",{href:"/compilations/moments"},"Memorable moments")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("a",{href:"/art/minecraft"},"Minecraft walkthrough")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("a",{href:"/art/artCanvas"},"Community canvas")))),/*#__PURE__*/react.createElement("div",{className:"nav-category"},/*#__PURE__*/react.createElement("h4",null,"Hinotori"),/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("a",{href:"/compilations/hinotori"},"Hinotori project")))),/*#__PURE__*/react.createElement("div",{className:"nav-category"},/*#__PURE__*/react.createElement("h4",null,"From the KFP"),/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("a",{href:"/messages"},"From the community")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("a",{href:"/articles/memberOrigins"},"Member origins")))))),/*#__PURE__*/react.createElement(sound/* default */.Z,null));};_proto.componentDidMount=function componentDidMount(){var _this2=this;var script=document.createElement("script");script.src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js";script.async=true;script.onload=function(){return _this2.scriptLoaded();};document.body.appendChild(script);};_proto.scriptLoaded=function scriptLoaded(){if("Howl"in window){window.bgmSound=new window.Howl({src:[sounds_sound/* default */.Z],autoplay:false,loop:true,volume:0.4});window.kikkeriki=new window.Howl({src:[Kikkeriki/* default */.Z,sounds_Kikkeriki/* default */.Z],autoplay:false,loop:false});window.kikkeriki.on(\'end\',function(){// Can happen in some browsers that won\'t allow playing bgm \n// until after the first user intereaction\nif("bgmSound"in window&&!window.bgmSound.playing()){// not playing yet --\x3e play\nwindow.bgmSound.play();}});}};return IndexPage;}(react.Component);function hideCover(){document.getElementById(coverImageId).classList.add(\'slideAnim\');document.getElementById(kikkerikiId).classList.add(\'kikkerikiAnim\');// Can happen in some browsers that won\'t allow playing bgm \n// until aftercontentpage_static_page__preview_view the first user intereaction\nif("kikkeriki"in window&&!window.kikkeriki.playing()){// not playing yet --\x3e play\nwindow.kikkeriki.play();}}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYXRzYnktc3RhcnRlci1kZWZhdWx0Ly4vc3JjL3ZpZGVvcy93YWl0aW5nLWZvci1jaGlraW4ubXA0P2ZkZmIiLCJ3ZWJwYWNrOi8vZ2F0c2J5LXN0YXJ0ZXItZGVmYXVsdC8uL3NyYy9pbWFnZXMvd2FpdGluZy1mb3ItY2hpa2luLnBuZz9jNmFlIiwid2VicGFjazovL2dhdHNieS1zdGFydGVyLWRlZmF1bHQvLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJjb3ZlckltYWdlSWQiLCJraWtrZXJpa2lJZCIsIkluZGV4UGFnZSIsInN0YXRlIiwic2hvd24iLCJ0b2dnbGVQb3AiLCJzZXRTdGF0ZSIsInNlZW4iLCJ0ZXN0IiwiZXZlbnQiLCJzdHVmZiIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJoaWRlQ292ZXIiLCJDaGlja2VuV2FpdGluZ1Bvc3RlciIsIkNoaWNrZW5XYWl0aW5nIiwiY29tcG9uZW50RGlkTW91bnQiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsIm9ubG9hZCIsInNjcmlwdExvYWRlZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIndpbmRvdyIsImJnbVNvdW5kIiwiSG93bCIsIkJnbVNvdW5kIiwiYXV0b3BsYXkiLCJsb29wIiwidm9sdW1lIiwia2lra2VyaWtpIiwiS2lra2VyaWtpT2dnIiwiS2lra2VyaWtpTXAzIiwib24iLCJwbGF5aW5nIiwicGxheSIsIlJlYWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWUscUJBQXVCLG1FQUFtRSxFOzs7Ozs7OztBQ0F6Ryw4REFBZSxxQkFBdUIsbUVBQW1FLEU7O0FDYXpHLEdBQUlBLGFBQVksQ0FBRyxhQUFuQixDQUNBLEdBQU1DLFlBQVcsQ0FBRyxpQkFBcEIsQyxHQUVxQkMsVSxpVUFHakJDLEssQ0FBUSxDQUNK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LDJCQUFELENBRDJCLENBRWhDQyxRQUFRLENBQUUsS0FGc0IsQ0FHdkJDLElBQUksQ0FBRSxJQUhpQixDQUloQ0MsTUFBTSxDQUFFLEdBSndCLENBQWhCLENBQWxCLENBTVNOLE1BQU0sQ0FBQ08sU0FBUCxDQUFtQixHQUFJUCxPQUFNLENBQUNFLElBQVgsQ0FBZ0IsQ0FDL0JSLEdBQUcsQ0FBRSxDQUFDYyx3QkFBRCxDQUFlQywrQkFBZixDQUQwQixDQUUvQkwsUUFBUSxDQUFFLEtBRnFCLENBRy9CQyxJQUFJLENBQUUsS0FIeUIsQ0FBaEIsQ0FBbkIsQ0FLQUwsTUFBTSxDQUFDTyxTQUFQLENBQWlCRyxFQUFqQixDQUFvQixLQUFwQixDQUEyQixVQUFNLENBQzdCO0FBQ0E7QUFDQSxHQUFHLFlBQWNWLE9BQWQsRUFBd0IsQ0FBQ0EsTUFBTSxDQUFDQyxRQUFQLENBQWdCVSxPQUFoQixFQUE1QixDQUFzRCxDQUNsRDtBQUNBWCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JXLElBQWhCLEdBQ0gsQ0FDSixDQVBELEVBUVQsQ0FDRCxDLG9CQXZHcUNDLGUsRUEwR3ZDLFFBQVMxQixVQUFULEVBQXFCLENBQ2pCSyxRQUFRLENBQUNzQixjQUFULENBQXdCekMsWUFBeEIsRUFBc0MwQyxTQUF0QyxDQUFnREMsR0FBaEQsQ0FBb0QsV0FBcEQsRUFDQXhCLFFBQVEsQ0FBQ3NCLGNBQVQsQ0FBd0J4QyxXQUF4QixFQUFxQ3lDLFNBQXJDLENBQStDQyxHQUEvQyxDQUFtRCxlQUFuRCxFQUNIO0FBQ0E7QUFDQSxHQUFHLGFBQWVoQixPQUFmLEVBQXlCLENBQUNBLE1BQU0sQ0FBQ08sU0FBUCxDQUFpQkksT0FBakIsRUFBN0IsQ0FBd0QsQ0FDdkQ7QUFDQVgsTUFBTSxDQUFDTyxTQUFQLENBQWlCSyxJQUFqQixHQUNBLENBQ0QiLCJmaWxlIjoiMTUxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvd2FpdGluZy1mb3ItY2hpa2luLTZlMWIxMTBlZjE2MTc1ZDdiNTc0NzllMDdlMjdjMjNiLm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvd2FpdGluZy1mb3ItY2hpa2luLTVjZmY5YjBiNDMxOWY2YThmOGM5ODExOTVjMWExZGY2LnBuZ1wiOyIsImltcG9ydCBcIi4uL2NvbXBvbmVudHMvY29tbW9uXCJcbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL3Nlb1wiXG5pbXBvcnQgU291bmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc291bmRcIlxuaW1wb3J0IENoaWNrZW5XYWl0aW5nIGZyb20gJy4uL3ZpZGVvcy93YWl0aW5nLWZvci1jaGlraW4ubXA0J1xuaW1wb3J0IEJnbVNvdW5kIGZyb20gJy4uL3NvdW5kcy9zb3VuZC5tcDMnXG5pbXBvcnQgS2lra2VyaWtpT2dnIGZyb20gJy4uL3NvdW5kcy9LaWtrZXJpa2kub2dnJ1xuaW1wb3J0IEtpa2tlcmlraU1wMyBmcm9tICcuLi9zb3VuZHMvS2lra2VyaWtpLm1wMydcbmltcG9ydCBDaGlja2VuV2FpdGluZ1Bvc3RlciBmcm9tICcuLi9pbWFnZXMvd2FpdGluZy1mb3ItY2hpa2luLnBuZydcblxubGV0IGNvdmVySW1hZ2VJZCA9IFwiY292ZXItaW1hZ2VcIjtcbmNvbnN0IGtpa2tlcmlraUlkID0gXCJraWFyYS1raWtrZXJpa2lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHNob3duOiBmYWxzZVxuICAgIH07XG5cbiAgICB0b2dnbGVQb3AgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VlbjogIXRoaXMuc3RhdGUuc2VlblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGVzdCA9IChldmVudCwgc3R1ZmYpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc3R1ZmYpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VlbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaW5kZXgtbWFpblwiPlxuICAgICAgICAgICAgICAgIDxTZW8gdGl0bGU9XCJIb21lXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cImJ1dHRvblwiIHRhYkluZGV4PVwiMFwiIGlkPXtjb3ZlckltYWdlSWR9IG9uQ2xpY2s9e2hpZGVDb3Zlcn0gb25LZXlEb3duPXtoaWRlQ292ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8dmlkZW8gcG9zdGVyPXtDaGlja2VuV2FpdGluZ1Bvc3Rlcn0gYXV0b1BsYXkgbG9vcCBtdXRlZCBwbGF5c0lubGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtDaGlja2VuV2FpdGluZ30gdHlwZT1cInZpZGVvL21wNFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkNsaWNrIHRvIGNvbnRpbnVlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17a2lra2VyaWtpSWR9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2JpbGUtb25seVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPuOCreOCouODqeOAgTEwMOS4h+S6uuOBiuOCgeOBp+OBqOOBhu+8gTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2LWNvbnRlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5LRk48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYXJ0aWNsZXMvcm9hZFRvTWlsbGlvblwiPlJvYWQgdG8gMSBtaWxsaW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FydGljbGVzL3RoZUZhbmRvbVwiPkFib3V0IHRoZSBLRlA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4xIG1pbGxpb24gd29ya3M8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvY29tcGlsYXRpb25zL21vbWVudHNcIj5NZW1vcmFibGUgbW9tZW50czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hcnQvbWluZWNyYWZ0XCI+TWluZWNyYWZ0IHdhbGt0aHJvdWdoPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FydC9hcnRDYW52YXNcIj5Db21tdW5pdHkgY2FudmFzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SGlub3Rvcmk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvY29tcGlsYXRpb25zL2hpbm90b3JpXCI+SGlub3RvcmkgcHJvamVjdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkZyb20gdGhlIEtGUDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9tZXNzYWdlc1wiPkZyb20gdGhlIGNvbW11bml0eTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hcnRpY2xlcy9tZW1iZXJPcmlnaW5zXCI+TWVtYmVyIG9yaWdpbnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQ8U291bmQvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cdFxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0ICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHQgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2hvd2xlci8yLjIuMS9ob3dsZXIubWluLmpzXCI7XG5cdCAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcblx0ICBzY3JpcHQub25sb2FkID0gKCkgPT4gdGhpcy5zY3JpcHRMb2FkZWQoKTtcblxuXHQgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblx0fVxuXHRcblx0c2NyaXB0TG9hZGVkKCl7XG5cdFx0aWYoXCJIb3dsXCIgaW4gd2luZG93KXtcblx0XHRcdHdpbmRvdy5iZ21Tb3VuZCA9IG5ldyB3aW5kb3cuSG93bCh7XG5cdFx0XHQgIHNyYzogW0JnbVNvdW5kXSxcblx0XHRcdCAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICBsb29wOiB0cnVlLFxuXHRcdFx0ICB2b2x1bWU6IDAuNFxuXHRcdFx0fSk7XG4gICAgICAgICAgICB3aW5kb3cua2lra2VyaWtpID0gbmV3IHdpbmRvdy5Ib3dsKHtcbiAgICAgICAgICAgICAgICBzcmM6IFtLaWtrZXJpa2lPZ2csIEtpa2tlcmlraU1wM10sXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cua2lra2VyaWtpLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ2FuIGhhcHBlbiBpbiBzb21lIGJyb3dzZXJzIHRoYXQgd29uJ3QgYWxsb3cgcGxheWluZyBiZ20gXG4gICAgICAgICAgICAgICAgLy8gdW50aWwgYWZ0ZXIgdGhlIGZpcnN0IHVzZXIgaW50ZXJlYWN0aW9uXG4gICAgICAgICAgICAgICAgaWYoXCJiZ21Tb3VuZFwiIGluIHdpbmRvdyAmJiAhd2luZG93LmJnbVNvdW5kLnBsYXlpbmcoKSl7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdCBwbGF5aW5nIHlldCAtLT4gcGxheVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYmdtU291bmQucGxheSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gaGlkZUNvdmVyKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvdmVySW1hZ2VJZCkuY2xhc3NMaXN0LmFkZCgnc2xpZGVBbmltJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2lra2VyaWtpSWQpLmNsYXNzTGlzdC5hZGQoJ2tpa2tlcmlraUFuaW0nKTtcblx0Ly8gQ2FuIGhhcHBlbiBpbiBzb21lIGJyb3dzZXJzIHRoYXQgd29uJ3QgYWxsb3cgcGxheWluZyBiZ20gXG5cdC8vIHVudGlsIGFmdGVyY29udGVudHBhZ2Vfc3RhdGljX3BhZ2VfX3ByZXZpZXdfdmlldyB0aGUgZmlyc3QgdXNlciBpbnRlcmVhY3Rpb25cblx0aWYoXCJraWtrZXJpa2lcIiBpbiB3aW5kb3cgJiYgIXdpbmRvdy5raWtrZXJpa2kucGxheWluZygpKXtcblx0XHQvLyBub3QgcGxheWluZyB5ZXQgLS0+IHBsYXlcblx0XHR3aW5kb3cua2lra2VyaWtpLnBsYXkoKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1513\n')},512:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "static/Kikkeriki-56a38ea9768934d8f4084558c5938d5f.mp3");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYXRzYnktc3RhcnRlci1kZWZhdWx0Ly4vc3JjL3NvdW5kcy9LaWtrZXJpa2kubXAzPzIzODYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQWUscUJBQXVCLDBEQUEwRCIsImZpbGUiOiI1MTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL0tpa2tlcmlraS01NmEzOGVhOTc2ODkzNGQ4ZjQwODQ1NThjNTkzOGQ1Zi5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///512\n')},2102:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "static/sound-5e0ded13846a0f0f978f89361e541526.mp3");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYXRzYnktc3RhcnRlci1kZWZhdWx0Ly4vc3JjL3NvdW5kcy9zb3VuZC5tcDM/ZGIyOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBZSxxQkFBdUIsc0RBQXNEIiwiZmlsZSI6IjIxMDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL3NvdW5kLTVlMGRlZDEzODQ2YTBmMGY5NzhmODkzNjFlNTQxNTI2Lm1wM1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2102\n')}}]);