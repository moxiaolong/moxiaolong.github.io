(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{368:function(t,e,n){"use strict";n.r(e);var i=n(8),s=Object(i.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("K8S中的服务可以不依赖应用本身的服务注册发现，和服务解耦。\n也就是服务不需要主动向服务注册或拉取其他服务的地址，只需要像调用一个普通API一样直接调用HTTP地址即可。\nK8S会将服务名动态解析为合适的容器IP。")]),this._v(" "),t("p",[this._v("所以在写Feign服务的时候直接写URL=ServiceName即可。但由于Feign不写name会报错，name还是要写上。")]),this._v(" "),t("p",[this._v("ServiceName是在K8S的Service.yaml中定义的。")])])}),[],!1,null,null,null);e.default=s.exports}}]);