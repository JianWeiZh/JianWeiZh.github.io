!function(t) {
  function e(i) {
      if (n[i])
          return n[i].exports;
      var a = n[i] = {
          exports: {},
          id: i,
          loaded: !1
      };
      return t[i].call(a.exports, a, a.exports, e),
      a.loaded = !0,
      a.exports
  }
  var n = {};
  return e.m = t,
  e.c = n,
  e.p = "/",
  e(0)
}([function(t, e, n) {
  t.exports = n(2)
}
, , function(t, e, n) {
  n(3);
  var i = n(14)
    , a = n(20)
    , r = n(39);
  /mobile/i.test(navigator.userAgent) || /ipad/i.test(navigator.userAgent) || (i.isPC = !0);
  var s = function(t, e) {
      e.isPC = i.isPC,
      e = a.extend(!0, {}, e);
      var n, o = new i(t,e);
      o.init();
      var c = {
          getCityList: function(t) {
              "function" != typeof t && (t = function() {}
              ),
              o.cacheObj.getCityList(t)
          },
          setAdcode: function(t) {
              return n = t,
              o.resetAllData(),
              o.setAdcode(t),
              this
          },
          setData: function(t) {
              var e = a.extend(!0, {}, t);
              return o.resetAllData(),
              o.setData(e),
              this
          },
          getLinelist: function(t) {
              t(o.cacheObj.linesBase())
          },
          getLineList: function(t) {
              t(o.cacheObj.linesBase())
          },
          stationSearch: function(t, e) {
              e(o.cacheObj.stationSearch(t))
          },
          getIdByName: function(t, e) {
              var n = o.cache || {}
                , i = []
                , a = [];
              if (t += "",
              !t)
                  return -1;
              if (t.match(/^[\d]+$/))
                  return t;
              switch (e) {
              case "line":
                  i = [n.lines],
                  a = ["ln"];
                  break;
              case "station":
                  i = [n.stations],
                  a = ["n"];
                  break;
              default:
                  i = [n.stations, n.lines],
                  a = ["n", "ln"]
              }
              for (var r = 0; r < i.length; r++) {
                  var s = i[r]
                    , c = a[r];
                  for (var l in s)
                      if (s.hasOwnProperty(l) && s[l][c] == t)
                          return l
              }
              return -1
          },
          getIdByPoiid: function(t) {
              var e = o.cache || {};
              return t && e.stationspoi && e.stationspoi[t] ? e.stationspoi[t].si || -1 : -1
          },
          getStationInfo: function(t) {
              var e, n = this, i = o.cacheObj, a = i.cache && i.cache.stations || {}, r = {};
              return a[t] ? e = t : (e = n.getIdByPoiid(t),
              e == -1 && (e = n.getIdByName(t))),
              r = a[e],
              r = r ? i.formatStation(r) : {}
          },
          getNearStation: function(t) {
              return o.cacheObj.getNearStation(t)
          },
          getStCenter: function(t) {
              return t = this.getIdByName(t),
              o.ctrl.getStCenter(t)
          },
          getSelectedLineCenter: function() {
              return o.ctrl.getFilterCenter()
          },
          setCenter: function(t, e) {
              o.ctrl.setCenter(t, e)
          },
          setFitView: function(t) {
              o.ctrl.setFitview(t)
          },
          showLine: function(t) {
            if (!Array.isArray(t)) {
                t = this.getIdByName(t),
                t != -1 && (o.draw.opentip && this.clearInfoWindow(),
                o.draw.showFilterLine(t))
            } else {
                var list = t.map(item => this.getIdByName(item))
                if (list.length) {
                    (o.draw.opentip && this.clearInfoWindow(),
                        o.draw.showFilterLine(list))
                }
            }
          },
          clearLine: function() {
              o.draw.clearLine()
          },
          addInfoWindow: function(t, e) {
              t = this.getIdByName(t),
              t != -1 && (o.draw.openTip(t, e),
              o.ctrl.setTipPos(t, e))
          },
          clearInfoWindow: function() {
              o.draw.closeTip()
          },
          addMarker: function(t, e) {
              if (t = this.getIdByName(t),
              t != -1) {
                  var n = o.ctrl.getMarkerPos(t);
                  return e.id = t,
                  o.draw.addMarker(e, n)
              }
          },
          clearMarker: function(t) {
              t = this.getIdByName(t),
              t != -1 && o.draw.clearMarker(t)
          },
          addCustomNode: function(t, e) {
              if (t = this.getIdByName(t),
              t != -1)
                  return o.draw.addCustomNode(t, e)
          },
          removeCustomNode: function(t) {
              if (t = this.getIdByName(t),
              t != -1)
                  return o.draw.removeCustomNode(t)
          },
          route: function(t, e, n) {
              var i = this.getIdByName(t)
                , a = this.getIdByName(e);
              i != -1 && a != -1 && o.route.route(i, a, n || {})
          },
          routeWithData: function(t) {
              return o.route.routeWithData(t)
          },
          clearRoute: function() {
              o.draw.clearRoute(),
              o.route.routeState = !1,
              o.cacheObj.clearRoute()
          },
          clearOverlays: function() {
              o.draw.clearOverlays(),
              o.route.routeState = null
          },
          setStart: function(t, e) {
              if (t = this.getIdByName(t),
              t != -1)
                  return e = e || {},
                  e.type = "start",
                  this.addMarker(t, e)
          },
          setEnd: function(t, e) {
              if (t = this.getIdByName(t),
              t != -1)
                  return e = e || {},
                  e.type = "end",
                  this.addMarker(t, e)
          },
          scale: function(t, e) {
              var n = {}
                , i = t - o.status.transformState.scale;
              e && e.x && e.y ? n.center = e : n.center = {
                  x: o.draw.w / 2,
                  y: o.draw.h / 2
              },
              o.touchStatus = "doubleTap",
              o.ctrl.scale(n, i)
          },
          move: function(t, e) {
              var n = {
                  deltaX: t,
                  deltaY: e
              };
              o.ctrl.dragEndSvg(n)
          },
          stopAnimation: function(t) {
              o.ctrl.stopAnimation(a.qs(o.elem, "#drag_handle")),
              t && t()
          },
          noConflict: function() {
              return s
          },
          event: o.event,
          map: o
      };
      return e.easy && r(c, e),
      !e.easy && e.adcode && c.setAdcode(e.adcode),
      c
  };
  window.subway = s
}
, function(t, e, n) {
  var i = n(4);
  "string" == typeof i && (i = [[t.id, i, ""]]);
  n(13)(i, {});
  i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
  e = t.exports = n(5)(),
  e.push([t.id, "html{font-size:100%;cursor:default}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td{margin:0;padding:0;font-family:\"Microsoft YaHei\",Arial,Verdana,Helvetica,sans-serif}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-weight:normal}q:before,q:after{content:''}abbr,acronym{border:0}html,body{height:100%;width:100%;overflow:auto}.fl{float:left}.fr{float:right}.clr{clear:both}.hidden{display:none}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#c8c8c8}input:-moz-placeholder,textarea:-moz-placeholder{color:#c8c8c8}input::-moz-placeholder,textarea::-moz-placeholder{color:#c8c8c8}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#c8c8c8}v\\:*{behavior:url(#default#vml);display:inline-block;position:absolute}v\\:shape{behavior:url(#default#VML);display:inline-block;position:absolute}v\\:group{behavior:url(#default#VML);position:absolute;display:inline-block}v\\:oval{behavior:url(#default#VML);position:absolute}v\\:TextBox{behavior:url(#default#VML);position:absolute;font-size:12px;text-align:center}.amap-subway-api path{fill:none;stroke-width:6}.amap-subway-api circle{fill:#fff;stroke-width:2}.amap-subway-api circle.subway-station-outside{fill:transparent;stroke:transparent;stroke-width:0}.amap-subway-api .-lg-pan-pinch{width:0;height:0;line-height:0;overflow:hidden}.amap-subway-api #subway-svg{position:absolute}.amap-subway-api #subwaySvgBody{position:absolute;left:0;top:0}.amap-subway-api .subway_svg{width:2000px;height:2000px;position:relative}.amap-subway-api #g-bg{display:none}.amap-subway-api #select_bg{fill:#FFF;fill-opacity:.8}.amap-subway-api #subway,#citypage{display:none}.amap-subway-api #subway{width:100%;height:100%;position:fixed;top:0;left:0}.amap-subway-api .line_name_txt{font-size:12px}.amap-subway-api .station-out{display:block}.amap-subway-api .infowindow-out{position:absolute}.amap-subway-api .infowindow-content{position:absolute}body.disable-default-action{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.amap-subway-api .ust{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.amap-subway-api .os{display:none}.amap-subway-api #os{width:100%;height:100%}.amap-subway-api #subwaySvg{position:absolute;z-index:10;transform:scale3d(1,1,1)}.amap-subway-api #drag_handle{height:100%;width:100%;position:fixed;top:0;left:0;z-index:10}.amap-subway-api .overlays{position:absolute}.amap-subway-api .route_close_btn{position:fixed;width:36px;height:36px;top:16px;right:10px;z-index:20;background:#fff url(" + n(6) + ") center center no-repeat;background-size:16px 16px;box-shadow:0 0 6px 1px rgba(0,0,0,.3)}.amap-subway-api .nav_btn{position:absolute;width:36px;height:16px;top:56px;left:10px;box-shadow:0 0 6px 1px rgba(0,0,0,.3);border-radius:2px;z-index:20;background:#fff;font-size:9px;text-align:center;padding-top:20px;color:#6a6968}.amap-subway-api .filter_content{display:none;position:fixed;top:92px;right:10px;z-index:21;background:#fff;box-shadow:0 0 6px 1px rgba(0,0,0,.3);border-radius:2px}.amap-subway-api .flier_close_btn{position:absolute;top:-34px;right:0;width:36px;height:36px;background:#fff url(" + n(6) + ") no-repeat;background-size:16px 16px;background-position:10px 10px;border-radius:2px;z-index:22}.amap-subway-api .fliter_detail{max-height:286px;padding:0 11px;overflow-y:scroll;-webkit-overflow-scrolling:touch;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.amap-subway-api .fliter_item{font-size:12px;height:40px;line-height:40px;border-bottom:1px #eaeaea solid;overflow:hidden;zoom:1}.amap-subway-api .line_color{display:block;height:8px;width:30px;float:left;margin-top:16px;margin-right:10px}.amap-subway-api .line_name{display:block;float:left}.amap-subway-api .tip_wrap_out{display:none;position:absolute;z-index:23}.amap-subway-api .tip_wrap{position:absolute;left:-98px;bottom:0}.amap-subway-api .tip_bady{width:180px;padding:0 8px;background:rgba(51,51,51,0.8);box-shadow:0 0 6px 1px rgba(0,0,0,.3);border-radius:4px}.amap-subway-api .tip_name_detail{height:34px;line-height:34px;color:#fff;font-size:14px;border-bottom:1px rgba(190,189,189,0.5) solid;overflow:hidden}.amap-subway-api .tip_name_detail .tip_name{display:inline-block;float:left}.amap-subway-api .tip_name_detail .tip_detail{display:inline-block;float:right}.amap-subway-api .tip_route{overflow:hidden;font-size:12px;width:100%;color:#fff}.amap-subway-api .tip_route .tip_route_btn{height:40px;line-height:40px;padding-left:22px;width:50%;webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\n.amap-subway-api .tip_route .tip_route_start{float:left;background:url(" + n(7) + ") no-repeat left center;background-size:18px 18px}.amap-subway-api .tip_route .tip_route_end{float:right;background:url(" + n(8) + ") no-repeat left center;background-size:18px 18px}.amap-subway-api .tip_footer{height:10px;background:url(" + n(9) + ") no-repeat center top;background-size:21px 10px}.amap-subway-api .android .tip_footer{bottom:-24px}.amap-subway-api .tip_footer .arrow{display:inline-block;width:0;height:0;margin:0 auto;margin-left:-10px;border:10px solid rgba(0,0,0,0);border-top:10px solid rgba(51,51,51,0.8)}.amap-subway-api .citylistTitle{position:fixed;top:0;left:0}.amap-subway-api .nav_marker{position:absolute;z-index:22}.amap-subway-api .nav_marker .marker-out{position:absolute;width:24px;height:33px;left:-12px;bottom:0}.amap-subway-api .nav_marker .nav-img{width:24px;height:33px}.amap-subway-api .sw-wrap{width:100%;position:relative;background:#eff0f0;z-index:1}.amap-subway-api .sw-nav{height:110px;width:100%;position:absolute;top:0;left:0;background:#eff0f0;z-index:999}.amap-subway-api .sw-nav .sw-nav-top{position:relative;height:80px;width:100%;min-width:1000px;background:#FFF;margin:0 auto}.amap-subway-api .sw-nav .sw-nav-bottom{height:30px;width:100%;min-width:1000px;background:#292728}.amap-subway-api .subway-box{position:relative}.amap-subway-api .ie #subway-content{width:100%;height:100%;margin:0 auto;background:#f8f8f8;position:relative;overflow:hidden}.amap-subway-api .ie .infowindow-content{position:absolute}.amap-subway-api .loading-bg{position:fixed;top:0;left:0;width:100%;height:100%;background:#FFF;opacity:.8;filter:alpha(opacity=80);z-index:100}.amap-subway-api .loading-bg .loading-outer{width:0;height:0;position:absolute;top:50%;left:50%}.amap-subway-api .loading-bg .loading{width:110px;position:absolute;left:-55px;top:-30px;margin:0 auto;font-size:12px;font-weight:bold}.amap-subway-api .loading-bg .loading .loading-img{display:block;width:32px;height:32px;margin:0 auto;margin-bottom:10px}.amap-subway-api .tip-content{position:absolute}.amap-subway-api .tip-content .tip-t{width:100px;height:42px;position:absolute;left:-50px;bottom:0;overflow:hidden;z-index:10}.amap-subway-api .tip-content .tip-t .near-img{width:100px;height:42px}.amap-subway-api .tip-content .tip-l{width:110px;height:40px;position:absolute;left:28px;top:-6px;overflow:hidden}.amap-subway-api .tip-content .tip-l .near-img{width:110px;height:40px}.amap-subway-api .tip-content .tip-r{width:100px;height:40px;position:absolute;left:-50px;bottom:0;overflow:hidden}.amap-subway-api .tip-content .tip-r .near-img{width:100px;height:42px}.amap-subway-api .line-caption{font-size:22px;font-weight:bold;color:#fff;padding:3px 10px 5px;border-radius:5px;margin-bottom:30px}.amap-subway-api .line-caption .caption_la{font-size:14px}.amap-subway-api .nav-detail-item .nav-line-direc .nav-direc .nav-nxt-st{padding:0 4px;color:#333}.amap-subway-api .nav-normal-ul{padding:10px 0;margin-left:60px;border-bottom:1px #e5e8e8 solid}.amap-subway-api .nav-normal-ul .nav-normal-last{height:10px;margin-left:60px;border-bottom:1px #e5e8e8 solid}.amap-subway-api .back{padding-bottom:20px;text-align:center}.amap-subway-api .back .back-subway{display:inline-block;padding:0 10px;border-radius:2px;font-size:14px;height:30px;line-height:30px;background:#007aff;color:#FFF}.amap-subway-api .nav-tip .info-tip{width:292px}.amap-subway-api .nav-tip .info-tip .info-content .info-l{width:240px;margin-right:10px}.amap-subway-api .nav-tip .info-tip .info-content .info-l .info-st-name{margin-bottom:5px}.amap-subway-api .nav-tip .info-tip .info-content .info-l .info-st-line{font-size:14px}.amap-subway-api .nav-tip .info-st-name .nav-line-ref{display:inline-block;line-height:8px}.amap-subway-api .nav-tip .info-st-name .nav-line-arrow{width:40px;height:8px}.amap-subway-api .nav-tip .info-st-name .nav-line-icon{line-height:20px;margin:0 auto;padding:0 2px;border-radius:2px;background:red;color:#FFF;text-align:center;font-size:14px}.amap-subway-api .nav-tip .info-st-name .nav-line-number{width:20px;height:20px;border-radius:10px;padding:0}.amap-subway-api .subway-marker{position:absolute;width:24px;height:33px;left:0;bottom:0;z-index:22}.amap-subway-api .subway-marker .img-c{background:url(" + n(10) + ") no-repeat 0 0;background-size:24px 33px;height:100%}.amap-subway-api .subway-marker.start .img-c{background:url(" + n(11) + ") no-repeat 0 0;background-size:24px 33px}.amap-subway-api .subway-marker.end .img-c{background:url(" + n(12) + ") no-repeat 0 0;background-size:24px 33px}.amap-subway-api #g-station-name-normal{width:2000px;height:2000px;position:absolute;background-color:transparent;-webkit-transform-origin:0 0;transform-origin:0 0}.amap-subway-api #subway-svg text{font-size:12px}.amap-subway-api .debounce-transition-overlay{-webkit-transition:transform .2s cubic-bezier(0.25,0.46,0.45,0.94);transition:transform .2s cubic-bezier(0.25,0.46,0.45,0.94);-webkit-transition:-webkit-transform .2s cubic-bezier(0.25,0.46,0.45,0.94);transition:-webkit-transform .2s cubic-bezier(0.25,0.46,0.45,0.94)}\n.amap-subway-api .debounce-transition{-webkit-transition:transform .2s cubic-bezier(0.25,0.46,0.45,0.94);transition:transform .2s cubic-bezier(0.25,0.46,0.45,0.94);-webkit-transition:-webkit-transform .2s cubic-bezier(0.25,0.46,0.45,0.94);transition:-webkit-transform .2s cubic-bezier(0.25,0.46,0.45,0.94)}.amap-subway-api .move-transition{-webkit-transition:transform .3s ease-in-out;transition:transform .3s ease-in-out;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out}.amap-subway-api .subway-tip,.subway-marker{-webkit-transform-origin:center bottom;transform-origin:center bottom}.amap-subway-api circle.subway-detail-circle{width:30px;height:30px;fill:blue;opacity:.6;fill-opacity:.6;stroke-width:0}.amap-popup{text-align:center;position:fixed;top:50%;left:50%;margin-left:-165px;margin-top:-170px}.amap-popup-content{vertical-align:middle;line-height:200px;overflow:hidden;background-color:white;border:solid;border-width:3px 1px 3px 1px;border-radius:5px;border-color:#ddf;margin:0 auto;text-align:center;height:340px}", ""])
}
, function(t, e) {
  t.exports = function() {
      var t = [];
      return t.toString = function() {
          for (var t = [], e = 0; e < this.length; e++) {
              var n = this[e];
              n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
          }
          return t.join("")
      }
      ,
      t.i = function(e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var i = {}, a = 0; a < this.length; a++) {
              var r = this[a][0];
              "number" == typeof r && (i[r] = !0)
          }
          for (a = 0; a < e.length; a++) {
              var s = e[a];
              "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"),
              t.push(s))
          }
      }
      ,
      t
  }
}
, function(t, e) {
  t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA4RTkyODhCOTFFMDExRTU5NDVBRDk2N0E5ODg1OUUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA4RTkyODhDOTFFMDExRTU5NDVBRDk2N0E5ODg1OUUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDhFOTI4ODk5MUUwMTFFNTk0NUFEOTY3QTk4ODU5RTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDhFOTI4OEE5MUUwMTFFNTk0NUFEOTY3QTk4ODU5RTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4hE1o8AAABIUlEQVR42rTX0QnCMBCA4Xhr9CngDL4JGUPoe2frGEJ9cgahIHQMwRQSiLHJXS53gSBqy/+hqTWnaZqMH9bP2c/Rz5fRHT8tCC8sfl78vPt5Vo6nLQtBM4QDBkVEjKetGcJHsSUHaiDyuAnNEcJ37hQRpbiLa8AoIqrx/Qkkb0gj0HgOkESQ4kcACQQ5XgJgCCsVrwFqiKWAaI5jgIi4EhCsOAWwjxVBsONUAIZgx1sANQQ73gooIdhxDgAbn9YTWgFHC45yiYoASqt960FAZ9wRfye6ANh1Hhfmm4OAznh6dTgOAgRvLCwESN3VuAgQjLMQIBxvRoBCvAkBSnEyAhTjJES+NZOOY4i/rZlGvITYW7d0a/ZUjOf/Jx7hcf0KMABwP6hpikSb/gAAAABJRU5ErkJggg=="
}
, function(t, e) {
  t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4RjAxRTREOTM0MjExRTVCNjRBQkMwOTZBQjAyRkU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM4RjAxRTRFOTM0MjExRTVCNjRBQkMwOTZBQjAyRkU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzhGMDFFNEI5MzQyMTFFNUI2NEFCQzA5NkFCMDJGRTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzhGMDFFNEM5MzQyMTFFNUI2NEFCQzA5NkFCMDJGRTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Gnoy1AAACx0lEQVR42mLMPRfGQCYQAmJFIBYFYjkgfgfE94H4NRA/IsdAFhLVWwKxNxCHALE6HnVPgXg9EG8F4t1A/JcYw5lIcMRJID4GxNUEHAIC0kCcA8TbgfgGEEdRwzGgqFgHdYQZmdGpAsRLgfgMEOuS6xhdqAGBDNQBxlBPeZDqGCeoRkUG6gIeaNTlEOsYkA+2QDXSCkyAZgS8jgGlkdVAzMlAW8AMTUda+BzTRYOowQX4oQ5ixuYYUG5JZqAvMEC2E9kxFQwDA0DlFhuyY0CFlB+1bdHlN2Fo0ZnJIM2pgE+ZHCwxwxwThRx31HJIkmIhAx+rAJhNAIQgO8aeFg5hZmRhOPR6B8OOF2sIaQEVhMxMSHUPTRyy5sl8YlsAckxQhtAAOgQG1JkGiUPAocNEjdIW2SFH3uwixyHgegvUuPqCt9wGWhCvkAtmL3gwkeHf/394HbLq8Vxy/fSFCdpMxB12bCIM6rx6DAYCFgwJCvkMTIxMtHAIuHXIBA2Zp7hUvP75gmHG3XaGn/9+oDiIyg4BgTvM5unasHpJB5eqD7/fMtz5co3BSNCKQQZYmqrx6DA4inlT0yGgBnwTLMz3EVJ9/+sthml3WsEhpMSjQU2HMEAb7fASGFREfifGQTPvdjL8/veL4fS7Q9RyCAgsRu6qgPo8c3E1B1EiFhhdbdeLGd7/fkMthxwH4oPoTYgmQtkcBt7+eoWRxSkAZdjaM6As3kHntgyok3cEV7Ozg5jETCUA6gon4msDg7qhoaCkQWOHgJKDP3qBi62rAkrMbjR00EcgDgLiy8R24kBBaA7L/1QEIA+a4DIXX/cWFEKeQFxDbC7DA0DRPwvqwTvkdvxBhrQCsTwQTyGmYMQCQAUqqM5Jh3qQ4iERkCGgdoQYNL6XQaMSG3gBxJugOUUMmiFu0mKw6At0EGg9lhGsF/hqf2IAQIABAHNd0iwJ4xSXAAAAAElFTkSuQmCC"
}
, function(t, e) {
  t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUwMTM2NDMzOTM0MjExRTVBMTVERDk2MDJFMUUyQjMyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUwMTM2NDM0OTM0MjExRTVBMTVERDk2MDJFMUUyQjMyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTAxMzY0MzE5MzQyMTFFNUExNUREOTYwMkUxRTJCMzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTAxMzY0MzI5MzQyMTFFNUExNUREOTYwMkUxRTJCMzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz49TJAAAAACmElEQVR42syYQUgVQRjHv533CIIwVPKSvBADpVCSoqhL0CGKoCjs4sn0EIiBpwjqFITSKXiJ0MFLFGKREGmHIBCjSLp1KRAeCILwMAkehIjv9f+Wb2V8b3d23zaj/eEPe5id/c18881+M97W0BClVBPcBh+Cc/AvuAAX4eU0HWbrbH8WvgL3wh2GdivwDDwLf4C3knSu6oD4Cn+G78eAsA7Dw/B7+AfcZwOGQ/FGIE6nDOdR+AX8De5KC9MlHVwnOzopg7pUL8wFebGN7OqAhG44KQyP4J286EpPJBGMMLxGXsH7ya0yso6OmWAeOwhNlA4KUCYMhrNlkHZXJ/Rv6jD3aG/E+9Y+HYY3qau2v+J1d5MaHSVqbTU1ywWLOYDp02NnC8QbRAQaGvznGPXqMOedgGSzVJmfp8rcXNwrvBFmlPbvcQMyPZ20AsgpeWjaQ5BAHeo/AfFnR9nYbXeALCykAfH/W1xclczlV5a8/n7/sTI5SVQum0GmptKOqaSkTIxWYyN5nZ3k9fSQNzCA/FMuQPzqUMnMrEQ2KRapPD5OtLGxA8gyCGspGOYnY7NCgcr5/DaQGhmxDbIczAzrY2xzDYja222CkBTt2zvwa/hPIqCJCaLNTaosLtoCYT3316B2bspHlYM1am4mWl+vyayU+gKfqy4hHsameaC1NVsgrLth9Qyn+Ngu1zKzevJUl51jiRazHfFR+JapBuZj6E3OeccgvByuVW+4YUcVPsBfdAj0G74Bf096iOMpPBPkv0XxAE9F9Ws63vIMXYYfJM6yaHH4n8kAl9Ie/LmTR/AR+GmijbFWvKEeh2/LAP/5SoQ7uQO3SLxfSijDtAq/lUxpkYT46eKyqCSXQDMhN1irxr9/Av0VYABc/8cn6/uWLgAAAABJRU5ErkJggg=="
}
, function(t, e) {
  t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAALCAYAAACUPhZAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAG5JREFUeNpiNDY2FmNgYJgDxFIM1AOvgDidCcpIAeJn1DQYiB8zIQlQwwK4wSAOE5oEJRagGIxuOCUWYBiMzXByLMBqMC7DSbEAp8H4DCfGArwGEzIcnwUEDSbGcGwWEGUwsYYjW3CBWINBACDAACkeLdxbVjieAAAAAElFTkSuQmCC"
}
, function(t, e) {
  t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABACAYAAABhspUgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjEzREIyRTU0RkUwMTFFNkIzRDg4NDVCNTZDQjM5QzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjEzREIyRTY0RkUwMTFFNkIzRDg4NDVCNTZDQjM5QzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMTNEQjJFMzRGRTAxMUU2QjNEODg0NUI1NkNCMzlDMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMTNEQjJFNDRGRTAxMUU2QjNEODg0NUI1NkNCMzlDMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Phdfgg8AAAd7SURBVHja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"
}
, function(t, e) {
  t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABCCAYAAADHTY8oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdDQzQ3MTE1OTVBNDExRTVBN0ExRkFDNDUyRTI5RDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdDQzQ3MTE2OTVBNDExRTVBN0ExRkFDNDUyRTI5RDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0NDNDcxMTM5NUE0MTFFNUE3QTFGQUM0NTJFMjlEOEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0NDNDcxMTQ5NUE0MTFFNUE3QTFGQUM0NTJFMjlEOEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz617vOHAAAIuklEQVR42sxaC2wURRj+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"
}
, function(t, e) {
  t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABCCAYAAADHTY8oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY4RDI2OUMyOTVBNDExRTVBMkU1QjM3ODhEQkJFRDUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY4RDI2OUMzOTVBNDExRTVBMkU1QjM3ODhEQkJFRDUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhEMjY5QzA5NUE0MTFFNUEyRTVCMzc4OERCQkVENTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhEMjY5QzE5NUE0MTFFNUEyRTVCMzc4OERCQkVENTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4xwiZsAAALaUlEQVR42sxaC5AUxRme7pnZmZ09jntyloKAqIiCAYO8Tg7uTkHgeIgaEUqikUqVSYwprZBHoVRMTBALTFKJWKk8zENTJCTxEAtQ4qMQTy6nPA5OBOShqHfc7d6+Znae3fl77uHuucvt7N5x/ldfdc9O9/TXf3/9d0/PIUop59XiS5f0/WkaoAYwHjAJcBngkqT7rYBPAM2ADwCvARq5HK2gfrubClzuxgjfC7gLB/wluFDhkCxxyA/wCRwSP380texLqAlIGF+lusGRqMYRNRGCW1sBfwU05EIAefV8bMniyZBsBMK38GVFHC4p5JDAe26Y2g5HQlHOCYY5Ek+8Cj+tBRzMpu6w7S95Iw+kr4TkJ1iRV/LlxZQvL+IGypz2MKATEU1/AS7XA04OGPnoksUPQLJJHDlCFipKuMEyuy3EWefO65B9BLAlU7nCbvIX1HxkcZ0Pkt8L5UX3MG9j0HMuEzxb40cUc2iYIsMoPGO3h2fCT2sAZqbyGcmHF9cVQFIvjCiuEUdWdDEePN69hmHS41GXUIrQPfb5Tha1lrIAlzX5zrpFzOP1YkVJte+yEYSjF4F1H4N2WaPVVluoHtIF6UYgvecp/RN4vFq8tJzSISDeY277hFTDCPwFLlf0Sz60aOF3hLKiu92eDyHx5BGghH7N7gizteBXKRJLvgguXDAJPL1JKBtOqAfj59UhrrjkgmXE+x5AfFUtR3MwCBiMz0bApGQlpJCHn5+BngrYB5InNCvwEycjoaoWcDPOVAaPuxoxuCNJvAOLIhsBgfGj6WTTvuDWO4ThBZVCaSH0kmQf3m6ciVhqvf5Kxnqsc25G9iN+Tm3qEu9XkLWzvt8GgRe1Y2qlHYnfAZfbUsjDcDwmAnEvgRyVlCF85XjkNB+gNNietp4w/SbMyrj5OTezFH1hhT1xjCMnjvXbLuNnhWOPpZBvu3X+LXyBMhErfoeS7CepML2yy+uvgdfT1MMjL0fCgiWuNBMb1js02NFbCJWWIfmhH/A0FKTOB+9n1Sjwoxh4Mr4Vu3a/iru9fq9YVNAVz7MEkv2MPHYOH6Dk47NuZBKr52Fx4TLM7qGSUiR988HeHZsPfk+u77t9JQbJcOa2Fzy1y3gyvq7zPpt3ix/S24RhAeIlpos183i38dd2Oywi4NJyJC5cimmogzrH3+ek1Wtc4vrTG2z+Kzcg36JlPD/jJmQ37CVizXzMXzUemS+/6DgfnSFeQifwZM3dxngLUHOaoMgy26RyWUpGmDwVMy+Tcx9RfNkoxIOm+asnuKNo/ONvjltI06j+7C8d0tFOyZ6dlL/qGizdsZLHMCKMvHP8GLX27CQ5bSGAr63p0wToRQ2vyMTLUirMnI16NC3duapXGhZ41T7W4hKyf/rjFGL6c89ayrqf+xhxAtpn17mu3oyvpSZqGPlrsU+knIeJaoLH0L43iat1FgG//bA78c36bRlHz1d3u4AUpctzMFnZtbl9m001zbvngS/j3U2eZzE6a/b2+0ecnrz//gdERibx200WUeNfeAZ/+RgkrVgt8qNGI/tgE9H//mfL/41vieKs2ZgfP0E0tv/Ltt9rJN7IM770WnSmujpYfPXlAcRj7xun2XN5ecVqgREwd7/s9CXtm7dQEKZMxVRTOVbG2vuG07cuyzMZWfvedNh9VrY/I7aDwic+jsCSS0s4hAwv8d0lN3oMYo1b7zURY+cOh13j8hEISGMWQdiIuPOA3X/xnzYuK0fJbZhvvu7YLUeJNH8RL1ZW8dKS2wWrqZHQeLx/IgheADlagD6cO4eWjh+te9rpVdXw8rI7mYYRiyaMWMr77qPfN4QJE7Fz9jQFEFbev/LrIitrvvWGY+zaYafIgHV69FhsNe13suUQ/OCszDQfpzYREEbZHznAfoQRh8lGGYAQIe3tLlHSfp4ymG1tvUSsxncI1LGZl1mnpXmLeANkZux8ye0EaWujJKl8vycPzO+UJtCJqqpzJWMvLcUCn/2eJlAAEilHzpnTnuO0NLdWkJff1Ttq8U0bDNLe5kmzTPOh05+GmedP26ZVJvI46wfQeIwSQKaOuWXU9NrVX99jM/jvvFsUQCrO+VbPwd6xbXbq0QorLG2xDXOaKIk5vzYJY8dh4dqJvHjdJCxMuI5Xt/zaMBsbiFR9syDNqRUsCK320WZiHTncK43E1ufNnI9IdBMx3szzzZZuYrlAybqyv26ZyI8di/nyCphoY1JirNVy1LFOfejuMjHcZ/KSR9eJ3K11XVEGJqXZ+I5t7m9wciVvGSbzfAtqqZw1SfCJB0tHViSyrTzsh4/KIngaYjK1QfdM+8yryZ5NGZkrxmFx4vW8OzoAV1ZQ12zc7xhv7LFs6KwX8uHWDtnQ9KXuidnRysqz5aMqyvgsJ61wxZWut+1TJz1PWL6iAvmmVwpyda3IQqR7Ivfkz3Sr+VDWI9F6+lPYSHKlLvkjs2ZtHFZc+FBgeEHOOszFpJmVgjRjlhB9+qms1xnwuNB5PvTfiW+/XSd0x80t0VDk4cAw5WJy54x9e20GL3UScY0Hvtt6Tw8mNTRAwKbbY5G4SL/EZtsOp6paGLhu7fsCvjbSGVnkVySEMR7606Z0X2QiMR/wfGryO/sTKec28MNJuLEZvO/L5WxlsGEZFo5F4xHGMe1xH8zdJ2JR9R5J8hVJkuh8qbweU0HS7oeHeNoTsxsaG+Owy18bj2k+tsh8WRADPrG4dhC4/Y4kvTqm/TLyv6lT6wsLlPnDCwP6UHvcsm3cer5TguzU7q+J3I1NTZmPuKG/90Xi6gGex2UBv2wNJfloXJOAzyM9xDOeEvd+o2x6NwTDs6ojHJVs20JDpZfOaEyOqYn/AJffMLn04ILkmc149723QFI/Cseg50PAnXk8EtfOAIc13S8fvcj6O+zbU6bsKFTk2uICJXGxpKKbltAWjjFJT08nl1kHDvT/NbB78VoVURNNPEaXFvplY7CJE0JRVNMlaHd1OuL9aj7ZKg8ejIDOlndEVaLphkAJO+IZPARjqj+uG0/B1dZknXvSfLLNPnSo2Y1ACV1yHIIGS+fBuKZEdX03XK2jXOY/T+SZVR06vE01rM0hVfN7OZLOFmFNlwEnILu6v+L9fkTOoP91kYQxDXo8o9gvD9gEVk3LF1Q1tiAuB0SyPvbz0sjc5mZ2Fr8qpOmqapi+gfA4yBBHdENmzwWc7BsW0yEn8syqjxxphUes/iyuKrZDmFZpPghqCb9mWb+AZ+66kM7z0nxKOKPcLsAGaDjAsS+AOSKYSChhw9wLz3rcyw45J80nH7eBrYeG50Dvp5TKkudD9qhpycGE0QHZVewcKafzopzIdw0da3BF0DAOKwIv+Hk+63dRmDi4FbwO2fnsE3CuEx3n5vlefAJ4BEbAn81E60GHbijsxQfQkMs8HwjZ9NhzEdO6S+DQ7DLJ1++XgU7T8ncaZgtkn8g3xOYjm2Rb02EaxwoFnhcxdjJPdIraDJ29WLB9S95nRPnKJlk+TwRN03+h6NJuGAEotxnQks/ykCf5tFreDJI4HjYtKd2ZS9SyfSHT+hSyj3uZHwO6SHXJJi1MwIOdlq2kC86dluWH3PcACZr5GVkhL/IXGNO3Eo7zSogRTfIUI67azj64eHlANnKD4PkerGuFBQicjXra+sy0ApCszdfjfT0/EKGSWxqWA5AUA9i/M+I/FBo7h5vmfAVjSyNEbHe4HfdHJVbpmu5Do2B9kZ4YolD5uS0Ly6MgGZF8f73q27iWmp8UYef6MOEOb9R8z3Nd/yQU6EYFdLjtxSL93MUnn+r54r73zznI+G5M+mN/H1jy/bdHzOVvx9nC6bEOK39qaGST5LF/F7pvQKeWRxUxSRbsuXwBokqcIq17E8c2bmz7oEIdqydo5WP/F2AA05/QmnJAikoAAAAASUVORK5CYII=";
}
, function(t, e, n) {
  function i(t, e) {
      for (var n = 0; n < t.length; n++) {
          var i = t[n]
            , a = d[i.id];
          if (a) {
              a.refs++;
              for (var r = 0; r < a.parts.length; r++)
                  a.parts[r](i.parts[r]);
              for (; r < i.parts.length; r++)
                  a.parts.push(l(i.parts[r], e))
          } else {
              for (var s = [], r = 0; r < i.parts.length; r++)
                  s.push(l(i.parts[r], e));
              d[i.id] = {
                  id: i.id,
                  refs: 1,
                  parts: s
              }
          }
      }
  }
  function a(t) {
      for (var e = [], n = {}, i = 0; i < t.length; i++) {
          var a = t[i]
            , r = a[0]
            , s = a[1]
            , o = a[2]
            , c = a[3]
            , l = {
              css: s,
              media: o,
              sourceMap: c
          };
          n[r] ? n[r].parts.push(l) : e.push(n[r] = {
              id: r,
              parts: [l]
          })
      }
      return e
  }
  function r(t, e) {
      var n = g()
        , i = y[y.length - 1];
      if ("top" === t.insertAt)
          i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
          y.push(e);
      else {
          if ("bottom" !== t.insertAt)
              throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          n.appendChild(e)
      }
  }
  function s(t) {
      t.parentNode.removeChild(t);
      var e = y.indexOf(t);
      e >= 0 && y.splice(e, 1)
  }
  function o(t) {
      var e = document.createElement("style");
      return e.type = "text/css",
      r(t, e),
      e
  }
  function c(t) {
      var e = document.createElement("link");
      return e.rel = "stylesheet",
      r(t, e),
      e
  }
  function l(t, e) {
      var n, i, a;
      if (e.singleton) {
          var r = b++;
          n = v || (v = o(e)),
          i = u.bind(null, n, r, !1),
          a = u.bind(null, n, r, !0)
      } else
          t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e),
          i = h.bind(null, n),
          a = function() {
              s(n),
              n.href && URL.revokeObjectURL(n.href)
          }
          ) : (n = o(e),
          i = p.bind(null, n),
          a = function() {
              s(n)
          }
          );
      return i(t),
      function(e) {
          if (e) {
              if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                  return;
              i(t = e)
          } else
              a()
      }
  }
  function u(t, e, n, i) {
      var a = n ? "" : i.css;
      if (t.styleSheet)
          t.styleSheet.cssText = w(e, a);
      else {
          var r = document.createTextNode(a)
            , s = t.childNodes;
          s[e] && t.removeChild(s[e]),
          s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
      }
  }
  function p(t, e) {
      var n = e.css
        , i = e.media;
      if (i && t.setAttribute("media", i),
      t.styleSheet)
          t.styleSheet.cssText = n;
      else {
          for (; t.firstChild; )
              t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n))
      }
  }
  function h(t, e) {
      var n = e.css
        , i = e.sourceMap;
      i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
      var a = new Blob([n],{
          type: "text/css"
      })
        , r = t.href;
      t.href = URL.createObjectURL(a),
      r && URL.revokeObjectURL(r)
  }
  var d = {}
    , f = function(t) {
      var e;
      return function() {
          return "undefined" == typeof e && (e = t.apply(this, arguments)),
          e
      }
  }
    , m = f(function() {
      return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
  })
    , g = f(function() {
      return document.head || document.getElementsByTagName("head")[0]
  })
    , v = null
    , b = 0
    , y = [];
  t.exports = function(t, e) {
      e = e || {},
      "undefined" == typeof e.singleton && (e.singleton = m()),
      "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
      var n = a(t);
      return i(n, e),
      function(t) {
          for (var r = [], s = 0; s < n.length; s++) {
              var o = n[s]
                , c = d[o.id];
              c.refs--,
              r.push(c)
          }
          if (t) {
              var l = a(t);
              i(l, e)
          }
          for (var s = 0; s < r.length; s++) {
              var c = r[s];
              if (0 === c.refs) {
                  for (var u = 0; u < c.parts.length; u++)
                      c.parts[u]();
                  delete d[c.id]
              }
          }
      }
  }
  ;
  var w = function() {
      var t = [];
      return function(e, n) {
          return t[e] = n,
          t.filter(Boolean).join("\n")
      }
  }()
}
, function(t, e, n) {
  n(15);
  var i = n(16)
    , a = n(17)
    , r = (n(19),
  n(20))
    , s = n(21)
    , o = n(22)
    , c = n(25)
    , l = n(27)
    , u = n(28)
    , p = n(37)
    , h = n(38)
    , d = i.transitionLabel
    , f = {
      width: 2e3,
      height: 2e3,
      client: 0,
      theme: "normal",
      maxTmpScale: 2,
      minTmpScale: .3,
      maxScale: 1.3,
      minScale: .5,
      staticUrl: "",
      doubleclick: {
          "switch": !1,
          threshold: .25
      }
  }
    , m = "pan"
    , g = "pinch"
    , v = "doubleTap"
    , b = "amap-subway-api"
    , y = r.qs
    , w = i.events
    , A = function(t, e) {
      var n = this;
      n.host = "http://m.amap.com/",
      n.elem = y(y("#" + t) ? "#" + t : "." + t),
      r.addClass(n.elem, b);
      var i = parseFloat(e.width)
        , a = parseFloat(e.height);
      i + 0 === i ? e.width = i : delete e.width,
      a + 0 === a ? e.height = a : delete e.height,
      n.opts = r.extend(!0, {}, f, e),
      o.elem = n.elem,
      o.opts = n.opts,
      n.cache = {}
  };
  A.fn = A.prototype,
  A.fn.initEvents = function() {
      var t = this;
      t.event = {};
      for (var e in s)
          s.hasOwnProperty(e) && (t.event[e] = s[e]);
      r.each(["on", "off", "trigger"], function(e, n) {
          t.event[n] = function() {
              var e = Array.prototype.slice.apply(arguments);
              e.unshift(t.elem),
              s[n].apply(s, e)
          }
      })
  }
  ,
  A.fn.initDom = function() {
      var t = this
        , e = t.elem;
      e.innerHTML = a(),
      t.dragHandle = y("#drag_handle"),
      t.overlays = y(e, ".overlays"),
      r.css(e, "position", "relative"),
      r.css(t.dragHandle, "transformOrigin", "left top")
  }
  ,
  A.fn.initObj = function() {
      var t = this
        , e = t.opts
        , n = {
          cacheObj: t.cacheObj,
          status: t.status
      };
      t.draw = u(t.elem, n, e),
      n.draw = t.draw,
      l.init(t.elem, n, e),
      t.ctrl = l,
      n.ctrl = l,
      h.init(t.elem, n, e),
      t.route = h
  }
  ,
  A.fn.resetAllData = function() {
      var t = this;
      t.route && t.route.resetStatus(),
      t.draw && t.draw.resetAll(),
      t.status && t.status.resetStatus(),
      t.cacheObj && t.cacheObj.initVarieties()
  }
  ,
  A.fn.bindEvents = function() {
      function t() {
          var t;
          t = e.touchStatus == g ? 100 : 0,
          setTimeout(function() {
              e.touchStatus = null
          }, t)
      }
      var e = this
        , n = e.elem
        , i = e.event
        , a = e.status
        , o = !1
        , c = 500;
      n.addEventListener("touchstart", function(t) {
          t.preventDefault()
      }, !1);
      var u = new Hammer.Manager(n,{
          domEvents: !0
      })
        , p = new Hammer.Pan
        , h = new Hammer.Pinch
        , f = new Hammer.Tap({
          event: "singletap"
      })
        , b = new Hammer.Tap({
          event: "doubletap",
          taps: 2,
          interval: c
      });
      u.add(p),
      u.add(h),
      e.opts.doubleclick["switch"] && u.add(b),
      u.add(f),
      p.recognizeWith(h),
      h.requireFailure(p),
      u.on("panstart panmove", function(t) {
          if (e.touchStatus != g) {
              if (e.touchStatus = m,
              t.status = m,
              "panstart" == t.type) {
                  var n = y(e.elem, "#svg-g")
                    , a = r.offset(n);
                  e.ctrl.startOffset = {
                      left: 0,
                      top: 0
                  },
                  e.ctrl.startOffset.left = a && a.left,
                  e.ctrl.startOffset.top = a && a.top - 50,
                  i.trigger(w.dragStart, t)
              }
              l.dragSvg(t),
              i.trigger(w.move, t),
              i.trigger(w.dragging, t)
          }
      }),
      u.on("pinchstart pinchmove", function(n) {
          e.touchStatus == m && (l.dragEndSvg(n, t),
          i.trigger(w.drag, n),
          e.touchStatus = null),
          e.touchStatus = g,
          n.status = g,
          "pinchstart" == n.type && (o = !1,
          i.trigger(w.zoomStart, n)),
          l.scaleSvg(n),
          i.trigger(w.zooming, n)
      }),
      u.on("pinchend", function(e) {
          setTimeout(function() {
              o || (o = !0,
              l.scaleEndSvg(a.transform.scale, "", "", t),
              i.trigger(w.zoomEnd, e),
              i.trigger(w.zoom, e))
          }, 0)
      }),
      u.on("hammer.input", function(n) {
          n.isFinal && (e.touchStatus != g || o || (o = !0,
          l.scaleEndSvg(a.transform.scale, "", "", t),
          i.trigger(w.zoomEnd, n),
          i.trigger(w.zoom, n)),
          e.touchStatus == m && (l.dragEndSvg(n, t),
          i.trigger(w.dragEnd, n),
          i.trigger(w.drag, n)))
      }),
      u.on("doubletap", function(t) {
          var n = e.opts
            , i = n.doubleclick.threshold
            , a = t.target;
          e.touchStatus || r.hasClass(a, "subway-entity") || r.closest(a, ".subway-entity") || (e.touchStatus = v,
          e.ctrl.scale(t, i))
      }),
      u.on("singletap", function(t) {
          e.triggerStationEvent(t.target)
      }),
      i.on("touchend click", "g", function() {
          if (!e.touchStatus && r.hasClass(this, "line_name")) {
              var t = r.attr(this, "lineid")
                , n = e.cache.lines[t]
                , a = e.cacheObj.formatLine(n);
              i.trigger(w.lineName, a)
          }
      }),
      i.on("touchend click", "#g-bg", function() {
        //   e.route.routeState || e.touchStatus || e.draw.clearLine()
      }),
      i.on("touchend click", function(t) {
          if (!e.touchStatus && !e.route.routeState) {
              var n = t.target;
              r.hasClass(n, "subway-entity") || r.closest(n, ".subway-entity") || i.trigger(w.touchMap)
          }
      }),
      i.on("touchstart touchend", ".tip_wrap", function(t) {
          t.stopPropagation()
      }),
      i.on("touchend click", ".tip_route_btn", function() {
          var t = this
            , n = r.data(t, "type")
            , a = r.closest(t, ".subway-tip")
            , s = r.data(a, "id")
            , o = e.cacheObj.formatStation(e.cache.stations[s])
            , c = r.extend(!0, {
              id: s,
              type: n
          }, o);
          return i.trigger(w["set" + n], c),
          !1
      }),
      s.on(y(e.elem, ".route_close_btn"), "touchend click", function(t) {
          e.draw.clearOverlays(),
          e.route.routeState = !1
      }),
      i.on(w.complete, function() {}),
      s.on(document, "webkitTransitionEnd", "." + d.debounceTransLabel, function() {
          return r.removeClass(y(e.elem, "#drag_handle"), d.debounceTransLabel),
          e.touchStatus == v ? (l.scaleEndSvg(e.ctrl.tmpScale, "", 1, t),
          void (e.ctrl.tmpScale = null)) : (e.draw.curTip && r.removeClass(e.draw.curTip, d.overlayDebounceTransLabel),
          r.each(e.draw.markerMap, function(t, e) {
              var n = e.elem;
              r.removeClass(n, d.overlayDebounceTransLabel)
          }),
          void l.resetAllElemAfterScale(t))
      }),
      s.on(document, "webkitTransitionEnd", "." + d.moveTransLable, function() {
          l.setCenterCb()
      })
  }
  ,
  A.fn.triggerStationEvent = function(t) {
      var e, n, i = this, a = i.event;
      i.touchStatus || i.route.routeState || (r.hasClass(t, "station_obj") ? (n = r.attr(t, "id") ? r.attr(t, "id") : r.attr(t, "data-id"),
      n && !i.route.routeState && (e = i.cacheObj.formatStation(i.cache.stations[n]),
      a.trigger(w.station, e))) : r.hasClass(t, "station-name") && (n = r.attr(t, "id") || "",
      n.indexOf("name-") !== -1 && (n = n.split("-")[1],
      n && !i.route.routeState && (e = i.cacheObj.formatStation(i.cache.stations[n]),
      a.trigger(w.stationName, e)))))
  }
  ,
  A.fn.setAdcode = function(t) {
      var e = this;
      e.cacheObj.setAdcode(t, function(t) {
          "error" !== t.info ? (e.cache = t,
          e.drawSvg(e.drawComplete.bind(e))) : e.event.trigger(w.complete, {
              status: 0,
              info: "error"
          })
      })
  }
  ,
  A.fn.setData = function(t) {
      var e = this;
      e.cacheObj.completeCb = function(t) {
          e.cache = t,
          e.drawSvg(e.drawComplete.bind(e))
      }
      ,
      e.cacheObj.dataComplete({
          status: 1,
          data: t
      })
  }
  ,
  A.fn.drawComplete = function() {
      this.event.trigger(w.complete, {
          status: 1,
          info: "success"
      })
  }
  ,
  A.fn.drawSvg = function(t) {
      var e = this;
      return e.draw.draw(e.cache, {
          cb: t
      }),
      e.svgGroup = document.getElementById("svg-g"),
      this
  }
  ,
  A.fn.init = function() {
      var t = this;
      t.initEvents(),
      t.cacheObj = c(),
      t.status = p(t.opts),
      t.initDom(),
      t.bindEvents(),
      t.initObj()
  }
  ,
  t.exports = A
}
, function(t, e) {
  !function() {
      var t = window.MutationObserver || window.WebKitMutationObserver
        , e = "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch
        , n = void 0 !== document.documentElement.style["touch-action"] || document.documentElement.style["-ms-touch-action"];
      if (!n && e && t) {
          window.Hammer = window.Hammer || {};
          var i = /touch-action[:][\s]*(none)[^;'"]*/
            , a = /touch-action[:][\s]*(manipulation)[^;'"]*/
            , r = /touch-action/
            , s = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
            , o = function() {
              try {
                  var t = document.createElement("canvas");
                  return !(!window.WebGLRenderingContext || !t.getContext("webgl") && !t.getContext("experimental-webgl"))
              } catch (e) {
                  return !1
              }
          }()
            , c = o && s;
          window.Hammer.time = {
              getTouchAction: function(t) {
                  return this.checkStyleString(t.getAttribute("style"))
              },
              checkStyleString: function(t) {
                  return r.test(t) ? i.test(t) ? "none" : !a.test(t) || "manipulation" : void 0
              },
              shouldHammer: function(t) {
                  var e = this.hasParent(t.target);
                  return !(!e || c && !(Date.now() - t.target.lastStart < 125)) && e
              },
              touchHandler: function(t) {
                  var e = t.target.getBoundingClientRect()
                    , n = e.top !== this.pos.top || e.left !== this.pos.left
                    , i = this.shouldHammer(t);
                  ("none" === i || n === !1 && "manipulation" === i) && ("touchend" === t.type && (t.target.focus(),
                  setTimeout(function() {
                      t.target.click()
                  }, 0)),
                  t.preventDefault()),
                  this.scrolled = !1,
                  delete t.target.lastStart
              },
              touchStart: function(t) {
                  this.pos = t.target.getBoundingClientRect(),
                  c && this.hasParent(t.target) && (t.target.lastStart = Date.now())
              },
              styleWatcher: function(t) {
                  t.forEach(this.styleUpdater, this)
              },
              styleUpdater: function(t) {
                  if (t.target.updateNext)
                      return void (t.target.updateNext = !1);
                  var e = this.getTouchAction(t.target);
                  return e ? void ("none" !== e && (t.target.hadTouchNone = !1)) : void (!e && (t.oldValue && this.checkStyleString(t.oldValue) || t.target.hadTouchNone) && (t.target.hadTouchNone = !0,
                  t.target.updateNext = !1,
                  t.target.setAttribute("style", t.target.getAttribute("style") + " touch-action: none;")))
              },
              hasParent: function(t) {
                  for (var e, n = t; n && n.parentNode; n = n.parentNode)
                      if (e = this.getTouchAction(n))
                          return e;
                  return !1
              },
              installStartEvents: function() {
                  document.addEventListener("touchstart", this.touchStart.bind(this)),
                  document.addEventListener("mousedown", this.touchStart.bind(this))
              },
              installEndEvents: function() {
                  document.addEventListener("touchend", this.touchHandler.bind(this), !0),
                  document.addEventListener("mouseup", this.touchHandler.bind(this), !0)
              },
              installObserver: function() {
                  this.observer = new t(this.styleWatcher.bind(this)).observe(document, {
                      subtree: !0,
                      attributes: !0,
                      attributeOldValue: !0,
                      attributeFilter: ["style"]
                  })
              },
              install: function() {
                  this.installEndEvents(),
                  this.installStartEvents(),
                  this.installObserver()
              }
          },
          window.Hammer.time.install()
      }
  }()
}
, function(t, e) {
  var n = "https:" == location.protocol ? "https:" : "http:"
    , i = {
      events: {
          zoom: "subway.zoom",
          zoomStart: "subway.zoomStart",
          zooming: "subway.zooming",
          zoomEnd: "subway.zoomEnd",
          drag: "subway.drag",
          dragStart: "subway.dragStart",
          dragging: "subway.dragging",
          dragEnd: "subway.dragEnd",
          move: "subway.move",
          lineName: "lineName.touch",
          touchMap: "subway.touch",
          station: "station.touch",
          stationName: "stationName.touch",
          setstart: "startStation.touch",
          setend: "endStation.touch",
          complete: "subway.complete",
          errorComplete: "error.complete",
          routeComplete: "subway.routeComplete"
      },
      svg: {
          stationWidth: 26,
          stationHeight: 26,
          ns_svg: "http://www.w3.org/2000/svg",
          ns_xlink: "http://www.w3.org/1999/xlink"
      },
      transitionLabel: {
          debounceTransLabel: "debounce-transition",
          overlayDebounceTransLabel: "debounce-transition-overlay",
          moveTransLable: "move-transition"
      },
      host: "webapi.amap.com",
      staticUrl: {
          data: n + "//webapi.amap.com/subway/data/",
          route: n + "//webapi.amap.com/subway/service/navigation/busExt?",
          cityList: n + "//webapi.amap.com/subway/data/citylist.json"
      },
      cityList: {
          1100: {
              city: "beijing",
              name: "北京"
          },
          3100: {
              city: "shanghai",
              name: "上海"
          },
          4401: {
              city: "guangzhou",
              name: "广州"
          },
          4403: {
              city: "shenzhen",
              name: "深圳"
          },
          4201: {
              city: "wuhan",
              name: "武汉"
          },
          1200: {
              city: "tianjin",
              name: "天津"
          },
          3201: {
              city: "nanjing",
              name: "南京"
          },
          8100: {
              city: "xianggang",
              name: "香港"
          },
          5000: {
              city: "chongqing",
              name: "重庆"
          },
          3301: {
              city: "hangzhou",
              name: "杭州"
          },
          2101: {
              city: "shenyang",
              name: "沈阳"
          },
          2102: {
              city: "shenyang",
              name: "大连"
          },
          5101: {
              city: "chengdu",
              name: "成都"
          },
          2201: {
              city: "changchun",
              name: "长春"
          },
          3205: {
              city: "suzhou",
              name: "苏州"
          },
          4406: {
              city: "foshan",
              name: "佛山"
          },
          5301: {
              city: "kunming",
              name: "昆明"
          },
          6101: {
              city: "xian",
              name: "西安"
          },
          4101: {
              city: "zhengzhou",
              name: "郑州"
          },
          2301: {
              city: "haerbin",
              name: "哈尔滨"
          },
          4301: {
              city: "changsha",
              name: "长沙"
          },
          3302: {
              city: "ningbo",
              name: "宁波"
          },
          3202: {
              city: "wuxi",
              name: "无锡"
          },
          3702: {
              city: "qingdao",
              name: "青岛"
          },
          3601: {
              city: "nanchang",
              name: "南昌"
          },
          3501: {
              city: "fuzhou",
              name: "福州"
          },
          4419: {
              city: "dongguan",
              name: "东莞"
          },
          4501: {
              city: "nanning",
              name: "南宁"
          }
      },
      traffitor: {
          host: "http://restapi.amap.com",
          channel: "mo"
      }
  };
  t.exports = i
}
, function(t, e, n) {
  var i = n(18);
  t.exports = i("assets/tpl/subway", '<div id="drag_handle"> <div class="-lg-pan-pinch"></div> <div id="subwaySvg"> <div class="overlays"> </div>  </div> </div> <div class="route_close_btn hidden"></div> ')
}
, function(t, e) {
  !function() {
      function e(t, e) {
          return (/string|function/.test(typeof e) ? c : o)(t, e)
      }
      function n(t, e) {
          return "string" != typeof t && (e = typeof t,
          "number" === e ? t += "" : t = "function" === e ? n(t.call(t)) : ""),
          t
      }
      function i(t) {
          return h[t]
      }
      function a(t) {
          return n(t).replace(/&(?![\w#]+;)|[<>"']/g, i)
      }
      function r(t, e) {
          if (d(t))
              for (var n = 0, i = t.length; i > n; n++)
                  e.call(t, t[n], n, t);
          else
              for (n in t)
                  e.call(t, t[n], n)
      }
      function s(t, e) {
          var n = /(\/)[^\/]+\1\.\.\1/
            , i = ("./" + t).replace(/[^\/]+$/, "")
            , a = i + e;
          for (a = a.replace(/\/\.\//g, "/"); a.match(n); )
              a = a.replace(n, "/");
          return a
      }
      function o(t, n) {
          var i = e.get(t) || l({
              filename: t,
              name: "Render Error",
              message: "Template not found"
          });
          return n ? i(n) : i
      }
      function c(t, e) {
          if ("string" == typeof e) {
              var n = e;
              e = function() {
                  return new p(n)
              }
          }
          var i = u[t] = function(n) {
              try {
                  return new e(n,t) + ""
              } catch (i) {
                  return l(i)()
              }
          }
          ;
          return i.prototype = e.prototype = f,
          i.toString = function() {
              return e + ""
          }
          ,
          i
      }
      function l(t) {
          var e = "{Template Error}"
            , n = t.stack || "";
          if (n)
              n = n.split("\n").slice(0, 2).join("\n");
          else
              for (var i in t)
                  n += "<" + i + ">\n" + t[i] + "\n\n";
          return function() {
              return "object" == typeof console && console.error(e + "\n\n" + n),
              e
          }
      }
      var u = e.cache = {}
        , p = this.String
        , h = {
          "<": "&#60;",
          ">": "&#62;",
          '"': "&#34;",
          "'": "&#39;",
          "&": "&#38;"
      }
        , d = Array.isArray || function(t) {
          return "[object Array]" === {}.toString.call(t)
      }
        , f = e.utils = {
          $helpers: {},
          $include: function(t, e, n) {
              return t = s(n, t),
              o(t, e)
          },
          $string: n,
          $escape: a,
          $each: r
      }
        , m = e.helpers = f.$helpers;
      e.get = function(t) {
          return u[t.replace(/^\.\//, "")]
      }
      ,
      e.helper = function(t, e) {
          m[t] = e
      }
      ,
      t.exports = e
  }()
}
, function(t, e, n) {
  var i;
  /*! Hammer.JS - v2.0.6 - 2015-12-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2015 Jorik Tangelder;
 * Licensed under the  license */
  !function(a, r, s, o) {
      "use strict";
      function c(t, e, n) {
          return setTimeout(d(t, n), e)
      }
      function l(t, e, n) {
          return !!Array.isArray(t) && (u(t, n[e], n),
          !0)
      }
      function u(t, e, n) {
          var i;
          if (t)
              if (t.forEach)
                  t.forEach(e, n);
              else if (t.length !== o)
                  for (i = 0; i < t.length; )
                      e.call(n, t[i], i, t),
                      i++;
              else
                  for (i in t)
                      t.hasOwnProperty(i) && e.call(n, t[i], i, t)
      }
      function p(t, e, n) {
          var i = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
          return function() {
              var e = new Error("get-stack-trace")
                , n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
                , r = a.console && (a.console.warn || a.console.log);
              return r && r.call(a.console, i, n),
              t.apply(this, arguments)
          }
      }
      function h(t, e, n) {
          var i, a = e.prototype;
          i = t.prototype = Object.create(a),
          i.constructor = t,
          i._super = a,
          n && pt(i, n)
      }
      function d(t, e) {
          return function() {
              return t.apply(e, arguments)
          }
      }
      function f(t, e) {
          return typeof t == ft ? t.apply(e ? e[0] || o : o, e) : t
      }
      function m(t, e) {
          return t === o ? e : t
      }
      function g(t, e, n) {
          u(w(e), function(e) {
              t.addEventListener(e, n, !1)
          })
      }
      function v(t, e, n) {
          u(w(e), function(e) {
              t.removeEventListener(e, n, !1)
          })
      }
      function b(t, e) {
          for (; t; ) {
              if (t == e)
                  return !0;
              t = t.parentNode
          }
          return !1
      }
      function y(t, e) {
          return t.indexOf(e) > -1
      }
      function w(t) {
          return t.trim().split(/\s+/g)
      }
      function A(t, e, n) {
          if (t.indexOf && !n)
              return t.indexOf(e);
          for (var i = 0; i < t.length; ) {
              if (n && t[i][n] == e || !n && t[i] === e)
                  return i;
              i++
          }
          return -1
      }
      function x(t) {
          return Array.prototype.slice.call(t, 0)
      }
      function S(t, e, n) {
          for (var i = [], a = [], r = 0; r < t.length; ) {
              var s = e ? t[r][e] : t[r];
              A(a, s) < 0 && i.push(t[r]),
              a[r] = s,
              r++
          }
          return n && (i = e ? i.sort(function(t, n) {
              return t[e] > n[e]
          }) : i.sort()),
          i
      }
      function E(t, e) {
          for (var n, i, a = e[0].toUpperCase() + e.slice(1), r = 0; r < ht.length; ) {
              if (n = ht[r],
              i = n ? n + a : e,
              i in t)
                  return i;
              r++
          }
          return o
      }
      function I() {
          return wt++
      }
      function N(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || a
      }
      function C(t, e) {
          var n = this;
          this.manager = t,
          this.callback = e,
          this.element = t.element,
          this.target = t.options.inputTarget,
          this.domHandler = function(e) {
              f(t.options.enable, [t]) && n.handler(e)
          }
          ,
          this.init()
      }
      function T(t) {
          var e, n = t.options.inputClass;
          return new (e = n ? n : St ? W : Et ? F : xt ? J : U)(t,M)
      }
      function M(t, e, n) {
          var i = n.pointers.length
            , a = n.changedPointers.length
            , r = e & kt && i - a === 0
            , s = e & (Ot | Dt) && i - a === 0;
          n.isFirst = !!r,
          n.isFinal = !!s,
          r && (t.session = {}),
          n.eventType = e,
          k(t, n),
          t.emit("hammer.input", n),
          t.recognize(n),
          t.session.prevInput = n
      }
      function k(t, e) {
          var n = t.session
            , i = e.pointers
            , a = i.length;
          n.firstInput || (n.firstInput = D(e)),
          a > 1 && !n.firstMultiple ? n.firstMultiple = D(e) : 1 === a && (n.firstMultiple = !1);
          var r = n.firstInput
            , s = n.firstMultiple
            , o = s ? s.center : r.center
            , c = e.center = L(i);
          e.timeStamp = vt(),
          e.deltaTime = e.timeStamp - r.timeStamp,
          e.angle = B(o, c),
          e.distance = j(o, c),
          R(n, e),
          e.offsetDirection = z(e.deltaX, e.deltaY);
          var l = G(e.deltaTime, e.deltaX, e.deltaY);
          e.overallVelocityX = l.x,
          e.overallVelocityY = l.y,
          e.overallVelocity = gt(l.x) > gt(l.y) ? l.x : l.y,
          e.scale = s ? Z(s.pointers, i) : 1,
          e.rotation = s ? Y(s.pointers, i) : 0,
          e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
          O(n, e);
          var u = t.element;
          b(e.srcEvent.target, u) && (u = e.srcEvent.target),
          e.target = u
      }
      function R(t, e) {
          var n = e.center
            , i = t.offsetDelta || {}
            , a = t.prevDelta || {}
            , r = t.prevInput || {};
          e.eventType !== kt && r.eventType !== Ot || (a = t.prevDelta = {
              x: r.deltaX || 0,
              y: r.deltaY || 0
          },
          i = t.offsetDelta = {
              x: n.x,
              y: n.y
          }),
          e.deltaX = a.x + (n.x - i.x),
          e.deltaY = a.y + (n.y - i.y)
      }
      function O(t, e) {
          var n, i, a, r, s = t.lastInterval || e, c = e.timeStamp - s.timeStamp;
          if (e.eventType != Dt && (c > Mt || s.velocity === o)) {
              var l = e.deltaX - s.deltaX
                , u = e.deltaY - s.deltaY
                , p = G(c, l, u);
              i = p.x,
              a = p.y,
              n = gt(p.x) > gt(p.y) ? p.x : p.y,
              r = z(l, u),
              t.lastInterval = e
          } else
              n = s.velocity,
              i = s.velocityX,
              a = s.velocityY,
              r = s.direction;
          e.velocity = n,
          e.velocityX = i,
          e.velocityY = a,
          e.direction = r
      }
      function D(t) {
          for (var e = [], n = 0; n < t.pointers.length; )
              e[n] = {
                  clientX: mt(t.pointers[n].clientX),
                  clientY: mt(t.pointers[n].clientY)
              },
              n++;
          return {
              timeStamp: vt(),
              pointers: e,
              center: L(e),
              deltaX: t.deltaX,
              deltaY: t.deltaY
          }
      }
      function L(t) {
          var e = t.length;
          if (1 === e)
              return {
                  x: mt(t[0].clientX),
                  y: mt(t[0].clientY)
              };
          for (var n = 0, i = 0, a = 0; a < e; )
              n += t[a].clientX,
              i += t[a].clientY,
              a++;
          return {
              x: mt(n / e),
              y: mt(i / e)
          }
      }
      function G(t, e, n) {
          return {
              x: e / t || 0,
              y: n / t || 0
          }
      }
      function z(t, e) {
          return t === e ? Lt : gt(t) >= gt(e) ? t < 0 ? Gt : zt : e < 0 ? jt : Bt
      }
      function j(t, e, n) {
          n || (n = Wt);
          var i = e[n[0]] - t[n[0]]
            , a = e[n[1]] - t[n[1]];
          return Math.sqrt(i * i + a * a)
      }
      function B(t, e, n) {
          n || (n = Wt);
          var i = e[n[0]] - t[n[0]]
            , a = e[n[1]] - t[n[1]];
          return 180 * Math.atan2(a, i) / Math.PI
      }
      function Y(t, e) {
          return B(e[1], e[0], Pt) + B(t[1], t[0], Pt)
      }
      function Z(t, e) {
          return j(e[0], e[1], Pt) / j(t[0], t[1], Pt)
      }
      function U() {
          this.evEl = Ft,
          this.evWin = Vt,
          this.allow = !0,
          this.pressed = !1,
          C.apply(this, arguments)
      }
      function W() {
          this.evEl = Xt,
          this.evWin = qt,
          C.apply(this, arguments),
          this.store = this.manager.session.pointerEvents = []
      }
      function P() {
          this.evTarget = _t,
          this.evWin = $t,
          this.started = !1,
          C.apply(this, arguments)
      }
      function H(t, e) {
          var n = x(t.touches)
            , i = x(t.changedTouches);
          return e & (Ot | Dt) && (n = S(n.concat(i), "identifier", !0)),
          [n, i]
      }
      function F() {
          this.evTarget = ee,
          this.targetIds = {},
          C.apply(this, arguments)
      }
      function V(t, e) {
          var n = x(t.touches)
            , i = this.targetIds;
          if (e & (kt | Rt) && 1 === n.length)
              return i[n[0].identifier] = !0,
              [n, n];
          var a, r, s = x(t.changedTouches), o = [], c = this.target;
          if (r = n.filter(function(t) {
              return b(t.target, c)
          }),
          e === kt)
              for (a = 0; a < r.length; )
                  i[r[a].identifier] = !0,
                  a++;
          for (a = 0; a < s.length; )
              i[s[a].identifier] && o.push(s[a]),
              e & (Ot | Dt) && delete i[s[a].identifier],
              a++;
          return o.length ? [S(r.concat(o), "identifier", !0), o] : void 0
      }
      function J() {
          C.apply(this, arguments);
          var t = d(this.handler, this);
          this.touch = new F(this.manager,t),
          this.mouse = new U(this.manager,t)
      }
      function Q(t, e) {
          this.manager = t,
          this.set(e)
      }
      function X(t) {
          if (y(t, oe))
              return oe;
          var e = y(t, ce)
            , n = y(t, le);
          return e && n ? oe : e || n ? e ? ce : le : y(t, se) ? se : re
      }
      function q(t) {
          this.options = pt({}, this.defaults, t || {}),
          this.id = I(),
          this.manager = null,
          this.options.enable = m(this.options.enable, !0),
          this.state = ue,
          this.simultaneous = {},
          this.requireFail = []
      }
      function K(t) {
          return t & me ? "cancel" : t & de ? "end" : t & he ? "move" : t & pe ? "start" : ""
      }
      function _(t) {
          return t == Bt ? "down" : t == jt ? "up" : t == Gt ? "left" : t == zt ? "right" : ""
      }
      function $(t, e) {
          var n = e.manager;
          return n ? n.get(t) : t
      }
      function tt() {
          q.apply(this, arguments)
      }
      function et() {
          tt.apply(this, arguments),
          this.pX = null,
          this.pY = null
      }
      function nt() {
          tt.apply(this, arguments)
      }
      function it() {
          q.apply(this, arguments),
          this._timer = null,
          this._input = null
      }
      function at() {
          tt.apply(this, arguments)
      }
      function rt() {
          tt.apply(this, arguments)
      }
      function st() {
          q.apply(this, arguments),
          this.pTime = !1,
          this.pCenter = !1,
          this._timer = null,
          this._input = null,
          this.count = 0
      }
      function ot(t, e) {
          return e = e || {},
          e.recognizers = m(e.recognizers, ot.defaults.preset),
          new ct(t,e)
      }
      function ct(t, e) {
          this.options = pt({}, ot.defaults, e || {}),
          this.options.inputTarget = this.options.inputTarget || t,
          this.handlers = {},
          this.session = {},
          this.recognizers = [],
          this.element = t,
          this.input = T(this),
          this.touchAction = new Q(this,this.options.touchAction),
          lt(this, !0),
          u(this.options.recognizers, function(t) {
              var e = this.add(new t[0](t[1]));
              t[2] && e.recognizeWith(t[2]),
              t[3] && e.requireFailure(t[3])
          }, this)
      }
      function lt(t, e) {
          var n = t.element;
          n.style && u(t.options.cssProps, function(t, i) {
              n.style[E(n.style, i)] = e ? t : ""
          })
      }
      function ut(t, e) {
          var n = r.createEvent("Event");
          n.initEvent(t, !0, !0),
          n.gesture = e,
          e.target.dispatchEvent(n)
      }
      var pt, ht = ["", "webkit", "Moz", "MS", "ms", "o"], dt = r.createElement("div"), ft = "function", mt = Math.round, gt = Math.abs, vt = Date.now;
      pt = "function" != typeof Object.assign ? function(t) {
          if (t === o || null === t)
              throw new TypeError("Cannot convert undefined or null to object");
          for (var e = Object(t), n = 1; n < arguments.length; n++) {
              var i = arguments[n];
              if (i !== o && null !== i)
                  for (var a in i)
                      i.hasOwnProperty(a) && (e[a] = i[a])
          }
          return e
      }
      : Object.assign;
      var bt = p(function(t, e, n) {
          for (var i = Object.keys(e), a = 0; a < i.length; )
              (!n || n && t[i[a]] === o) && (t[i[a]] = e[i[a]]),
              a++;
          return t
      }, "extend", "Use `assign`.")
        , yt = p(function(t, e) {
          return bt(t, e, !0)
      }, "merge", "Use `assign`.")
        , wt = 1
        , At = /mobile|tablet|ip(ad|hone|od)|android/i
        , xt = "ontouchstart"in a
        , St = E(a, "PointerEvent") !== o
        , Et = xt && At.test(navigator.userAgent)
        , It = "touch"
        , Nt = "pen"
        , Ct = "mouse"
        , Tt = "kinect"
        , Mt = 25
        , kt = 1
        , Rt = 2
        , Ot = 4
        , Dt = 8
        , Lt = 1
        , Gt = 2
        , zt = 4
        , jt = 8
        , Bt = 16
        , Yt = Gt | zt
        , Zt = jt | Bt
        , Ut = Yt | Zt
        , Wt = ["x", "y"]
        , Pt = ["clientX", "clientY"];
      C.prototype = {
          handler: function() {},
          init: function() {
              this.evEl && g(this.element, this.evEl, this.domHandler),
              this.evTarget && g(this.target, this.evTarget, this.domHandler),
              this.evWin && g(N(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
              this.evEl && v(this.element, this.evEl, this.domHandler),
              this.evTarget && v(this.target, this.evTarget, this.domHandler),
              this.evWin && v(N(this.element), this.evWin, this.domHandler)
          }
      };
      var Ht = {
          mousedown: kt,
          mousemove: Rt,
          mouseup: Ot
      }
        , Ft = "mousedown"
        , Vt = "mousemove mouseup";
      h(U, C, {
          handler: function(t) {
              var e = Ht[t.type];
              e & kt && 0 === t.button && (this.pressed = !0),
              e & Rt && 1 !== t.which && (e = Ot),
              this.pressed && this.allow && (e & Ot && (this.pressed = !1),
              this.callback(this.manager, e, {
                  pointers: [t],
                  changedPointers: [t],
                  pointerType: Ct,
                  srcEvent: t
              }))
          }
      });
      var Jt = {
          pointerdown: kt,
          pointermove: Rt,
          pointerup: Ot,
          pointercancel: Dt,
          pointerout: Dt
      }
        , Qt = {
          2: It,
          3: Nt,
          4: Ct,
          5: Tt
      }
        , Xt = "pointerdown"
        , qt = "pointermove pointerup pointercancel";
      a.MSPointerEvent && !a.PointerEvent && (Xt = "MSPointerDown",
      qt = "MSPointerMove MSPointerUp MSPointerCancel"),
      h(W, C, {
          handler: function(t) {
              var e = this.store
                , n = !1
                , i = t.type.toLowerCase().replace("ms", "")
                , a = Jt[i]
                , r = Qt[t.pointerType] || t.pointerType
                , s = r == It
                , o = A(e, t.pointerId, "pointerId");
              a & kt && (0 === t.button || s) ? o < 0 && (e.push(t),
              o = e.length - 1) : a & (Ot | Dt) && (n = !0),
              o < 0 || (e[o] = t,
              this.callback(this.manager, a, {
                  pointers: e,
                  changedPointers: [t],
                  pointerType: r,
                  srcEvent: t
              }),
              n && e.splice(o, 1))
          }
      });
      var Kt = {
          touchstart: kt,
          touchmove: Rt,
          touchend: Ot,
          touchcancel: Dt
      }
        , _t = "touchstart"
        , $t = "touchstart touchmove touchend touchcancel";
      h(P, C, {
          handler: function(t) {
              var e = Kt[t.type];
              if (e === kt && (this.started = !0),
              this.started) {
                  var n = H.call(this, t, e);
                  e & (Ot | Dt) && n[0].length - n[1].length === 0 && (this.started = !1),
                  this.callback(this.manager, e, {
                      pointers: n[0],
                      changedPointers: n[1],
                      pointerType: It,
                      srcEvent: t
                  })
              }
          }
      });
      var te = {
          touchstart: kt,
          touchmove: Rt,
          touchend: Ot,
          touchcancel: Dt
      }
        , ee = "touchstart touchmove touchend touchcancel";
      h(F, C, {
          handler: function(t) {
              var e = te[t.type]
                , n = V.call(this, t, e);
              n && this.callback(this.manager, e, {
                  pointers: n[0],
                  changedPointers: n[1],
                  pointerType: It,
                  srcEvent: t
              })
          }
      }),
      h(J, C, {
          handler: function(t, e, n) {
              var i = n.pointerType == It
                , a = n.pointerType == Ct;
              if (i)
                  this.mouse.allow = !1;
              else if (a && !this.mouse.allow)
                  return;
              e & (Ot | Dt) && (this.mouse.allow = !0),
              this.callback(t, e, n)
          },
          destroy: function() {
              this.touch.destroy(),
              this.mouse.destroy()
          }
      });
      var ne = E(dt.style, "touchAction")
        , ie = ne !== o
        , ae = "compute"
        , re = "auto"
        , se = "manipulation"
        , oe = "none"
        , ce = "pan-x"
        , le = "pan-y";
      Q.prototype = {
          set: function(t) {
              t == ae && (t = this.compute()),
              ie && this.manager.element.style && (this.manager.element.style[ne] = t),
              this.actions = t.toLowerCase().trim()
          },
          update: function() {
              this.set(this.manager.options.touchAction)
          },
          compute: function() {
              var t = [];
              return u(this.manager.recognizers, function(e) {
                  f(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              }),
              X(t.join(" "))
          },
          preventDefaults: function(t) {
              if (!ie) {
                  var e = t.srcEvent
                    , n = t.offsetDirection;
                  if (this.manager.session.prevented)
                      return void e.preventDefault();
                  var i = this.actions
                    , a = y(i, oe)
                    , r = y(i, le)
                    , s = y(i, ce);
                  if (a) {
                      var o = 1 === t.pointers.length
                        , c = t.distance < 2
                        , l = t.deltaTime < 250;
                      if (o && c && l)
                          return
                  }
                  if (!s || !r)
                      return a || r && n & Yt || s && n & Zt ? this.preventSrc(e) : void 0
              }
          },
          preventSrc: function(t) {
              this.manager.session.prevented = !0,
              t.preventDefault()
          }
      };
      var ue = 1
        , pe = 2
        , he = 4
        , de = 8
        , fe = de
        , me = 16
        , ge = 32;
      q.prototype = {
          defaults: {},
          set: function(t) {
              return pt(this.options, t),
              this.manager && this.manager.touchAction.update(),
              this
          },
          recognizeWith: function(t) {
              if (l(t, "recognizeWith", this))
                  return this;
              var e = this.simultaneous;
              return t = $(t, this),
              e[t.id] || (e[t.id] = t,
              t.recognizeWith(this)),
              this
          },
          dropRecognizeWith: function(t) {
              return l(t, "dropRecognizeWith", this) ? this : (t = $(t, this),
              delete this.simultaneous[t.id],
              this)
          },
          requireFailure: function(t) {
              if (l(t, "requireFailure", this))
                  return this;
              var e = this.requireFail;
              return t = $(t, this),
              A(e, t) === -1 && (e.push(t),
              t.requireFailure(this)),
              this
          },
          dropRequireFailure: function(t) {
              if (l(t, "dropRequireFailure", this))
                  return this;
              t = $(t, this);
              var e = A(this.requireFail, t);
              return e > -1 && this.requireFail.splice(e, 1),
              this
          },
          hasRequireFailures: function() {
              return this.requireFail.length > 0
          },
          canRecognizeWith: function(t) {
              return !!this.simultaneous[t.id]
          },
          emit: function(t) {
              function e(e) {
                  n.manager.emit(e, t)
              }
              var n = this
                , i = this.state;
              i < de && e(n.options.event + K(i)),
              e(n.options.event),
              t.additionalEvent && e(t.additionalEvent),
              i >= de && e(n.options.event + K(i))
          },
          tryEmit: function(t) {
              return this.canEmit() ? this.emit(t) : void (this.state = ge)
          },
          canEmit: function() {
              for (var t = 0; t < this.requireFail.length; ) {
                  if (!(this.requireFail[t].state & (ge | ue)))
                      return !1;
                  t++
              }
              return !0
          },
          recognize: function(t) {
              var e = pt({}, t);
              return f(this.options.enable, [this, e]) ? (this.state & (fe | me | ge) && (this.state = ue),
              this.state = this.process(e),
              void (this.state & (pe | he | de | me) && this.tryEmit(e))) : (this.reset(),
              void (this.state = ge))
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
      },
      h(tt, q, {
          defaults: {
              pointers: 1
          },
          attrTest: function(t) {
              var e = this.options.pointers;
              return 0 === e || t.pointers.length === e
          },
          process: function(t) {
              var e = this.state
                , n = t.eventType
                , i = e & (pe | he)
                , a = this.attrTest(t);
              return i && (n & Dt || !a) ? e | me : i || a ? n & Ot ? e | de : e & pe ? e | he : pe : ge
          }
      }),
      h(et, tt, {
          defaults: {
              event: "pan",
              threshold: 10,
              pointers: 1,
              direction: Ut
          },
          getTouchAction: function() {
              var t = this.options.direction
                , e = [];
              return t & Yt && e.push(le),
              t & Zt && e.push(ce),
              e
          },
          directionTest: function(t) {
              var e = this.options
                , n = !0
                , i = t.distance
                , a = t.direction
                , r = t.deltaX
                , s = t.deltaY;
              return a & e.direction || (e.direction & Yt ? (a = 0 === r ? Lt : r < 0 ? Gt : zt,
              n = r != this.pX,
              i = Math.abs(t.deltaX)) : (a = 0 === s ? Lt : s < 0 ? jt : Bt,
              n = s != this.pY,
              i = Math.abs(t.deltaY))),
              t.direction = a,
              n && i > e.threshold && a & e.direction
          },
          attrTest: function(t) {
              return tt.prototype.attrTest.call(this, t) && (this.state & pe || !(this.state & pe) && this.directionTest(t))
          },
          emit: function(t) {
              this.pX = t.deltaX,
              this.pY = t.deltaY;
              var e = _(t.direction);
              e && (t.additionalEvent = this.options.event + e),
              this._super.emit.call(this, t)
          }
      }),
      h(nt, tt, {
          defaults: {
              event: "pinch",
              threshold: 0,
              pointers: 2
          },
          getTouchAction: function() {
              return [oe]
          },
          attrTest: function(t) {
              return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & pe)
          },
          emit: function(t) {
              if (1 !== t.scale) {
                  var e = t.scale < 1 ? "in" : "out";
                  t.additionalEvent = this.options.event + e
              }
              this._super.emit.call(this, t)
          }
      }),
      h(it, q, {
          defaults: {
              event: "press",
              pointers: 1,
              time: 251,
              threshold: 9
          },
          getTouchAction: function() {
              return [re]
          },
          process: function(t) {
              var e = this.options
                , n = t.pointers.length === e.pointers
                , i = t.distance < e.threshold
                , a = t.deltaTime > e.time;
              if (this._input = t,
              !i || !n || t.eventType & (Ot | Dt) && !a)
                  this.reset();
              else if (t.eventType & kt)
                  this.reset(),
                  this._timer = c(function() {
                      this.state = fe,
                      this.tryEmit()
                  }, e.time, this);
              else if (t.eventType & Ot)
                  return fe;
              return ge
          },
          reset: function() {
              clearTimeout(this._timer)
          },
          emit: function(t) {
              this.state === fe && (t && t.eventType & Ot ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = vt(),
              this.manager.emit(this.options.event, this._input)))
          }
      }),
      h(at, tt, {
          defaults: {
              event: "rotate",
              threshold: 0,
              pointers: 2
          },
          getTouchAction: function() {
              return [oe]
          },
          attrTest: function(t) {
              return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & pe)
          }
      }),
      h(rt, tt, {
          defaults: {
              event: "swipe",
              threshold: 10,
              velocity: .3,
              direction: Yt | Zt,
              pointers: 1
          },
          getTouchAction: function() {
              return et.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
              var e, n = this.options.direction;
              return n & (Yt | Zt) ? e = t.overallVelocity : n & Yt ? e = t.overallVelocityX : n & Zt && (e = t.overallVelocityY),
              this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && gt(e) > this.options.velocity && t.eventType & Ot
          },
          emit: function(t) {
              var e = _(t.offsetDirection);
              e && this.manager.emit(this.options.event + e, t),
              this.manager.emit(this.options.event, t)
          }
      }),
      h(st, q, {
          defaults: {
              event: "tap",
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10
          },
          getTouchAction: function() {
              return [se]
          },
          process: function(t) {
              var e = this.options
                , n = t.pointers.length === e.pointers
                , i = t.distance < e.threshold
                , a = t.deltaTime < e.time;
              if (this.reset(),
              t.eventType & kt && 0 === this.count)
                  return this.failTimeout();
              if (i && a && n) {
                  if (t.eventType != Ot)
                      return this.failTimeout();
                  var r = !this.pTime || t.timeStamp - this.pTime < e.interval
                    , s = !this.pCenter || j(this.pCenter, t.center) < e.posThreshold;
                  this.pTime = t.timeStamp,
                  this.pCenter = t.center,
                  s && r ? this.count += 1 : this.count = 1,
                  this._input = t;
                  var o = this.count % e.taps;
                  if (0 === o)
                      return this.hasRequireFailures() ? (this._timer = c(function() {
                          this.state = fe,
                          this.tryEmit()
                      }, e.interval, this),
                      pe) : fe
              }
              return ge
          },
          failTimeout: function() {
              return this._timer = c(function() {
                  this.state = ge
              }, this.options.interval, this),
              ge
          },
          reset: function() {
              clearTimeout(this._timer)
          },
          emit: function() {
              this.state == fe && (this._input.tapCount = this.count,
              this.manager.emit(this.options.event, this._input))
          }
      }),
      ot.VERSION = "2.0.6",
      ot.defaults = {
          domEvents: !1,
          touchAction: ae,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [[at, {
              enable: !1
          }], [nt, {
              enable: !1
          }, ["rotate"]], [rt, {
              direction: Yt
          }], [et, {
              direction: Yt
          }, ["swipe"]], [st], [st, {
              event: "doubletap",
              taps: 2
          }, ["tap"]], [it]],
          cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              contentZooming: "none",
              userDrag: "none",
              tapHighlightColor: "rgba(0,0,0,0)"
          }
      };
      var ve = 1
        , be = 2;
      ct.prototype = {
          set: function(t) {
              return pt(this.options, t),
              t.touchAction && this.touchAction.update(),
              t.inputTarget && (this.input.destroy(),
              this.input.target = t.inputTarget,
              this.input.init()),
              this
          },
          stop: function(t) {
              this.session.stopped = t ? be : ve
          },
          recognize: function(t) {
              var e = this.session;
              if (!e.stopped) {
                  this.touchAction.preventDefaults(t);
                  var n, i = this.recognizers, a = e.curRecognizer;
                  (!a || a && a.state & fe) && (a = e.curRecognizer = null);
                  for (var r = 0; r < i.length; )
                      n = i[r],
                      e.stopped === be || a && n != a && !n.canRecognizeWith(a) ? n.reset() : n.recognize(t),
                      !a && n.state & (pe | he | de) && (a = e.curRecognizer = n),
                      r++
              }
          },
          get: function(t) {
              if (t instanceof q)
                  return t;
              for (var e = this.recognizers, n = 0; n < e.length; n++)
                  if (e[n].options.event == t)
                      return e[n];
              return null
          },
          add: function(t) {
              if (l(t, "add", this))
                  return this;
              var e = this.get(t.options.event);
              return e && this.remove(e),
              this.recognizers.push(t),
              t.manager = this,
              this.touchAction.update(),
              t
          },
          remove: function(t) {
              if (l(t, "remove", this))
                  return this;
              if (t = this.get(t)) {
                  var e = this.recognizers
                    , n = A(e, t);
                  n !== -1 && (e.splice(n, 1),
                  this.touchAction.update())
              }
              return this
          },
          on: function(t, e) {
              var n = this.handlers;
              return u(w(t), function(t) {
                  n[t] = n[t] || [],
                  n[t].push(e)
              }),
              this
          },
          off: function(t, e) {
              var n = this.handlers;
              return u(w(t), function(t) {
                  e ? n[t] && n[t].splice(A(n[t], e), 1) : delete n[t]
              }),
              this
          },
          emit: function(t, e) {
              this.options.domEvents && ut(t, e);
              var n = this.handlers[t] && this.handlers[t].slice();
              if (n && n.length) {
                  e.type = t,
                  e.preventDefault = function() {
                      e.srcEvent.preventDefault()
                  }
                  ;
                  for (var i = 0; i < n.length; )
                      n[i](e),
                      i++
              }
          },
          destroy: function() {
              this.element && lt(this, !1),
              this.handlers = {},
              this.session = {},
              this.input.destroy(),
              this.element = null
          }
      },
      pt(ot, {
          INPUT_START: kt,
          INPUT_MOVE: Rt,
          INPUT_END: Ot,
          INPUT_CANCEL: Dt,
          STATE_POSSIBLE: ue,
          STATE_BEGAN: pe,
          STATE_CHANGED: he,
          STATE_ENDED: de,
          STATE_RECOGNIZED: fe,
          STATE_CANCELLED: me,
          STATE_FAILED: ge,
          DIRECTION_NONE: Lt,
          DIRECTION_LEFT: Gt,
          DIRECTION_RIGHT: zt,
          DIRECTION_UP: jt,
          DIRECTION_DOWN: Bt,
          DIRECTION_HORIZONTAL: Yt,
          DIRECTION_VERTICAL: Zt,
          DIRECTION_ALL: Ut,
          Manager: ct,
          Input: C,
          TouchAction: Q,
          TouchInput: F,
          MouseInput: U,
          PointerEventInput: W,
          TouchMouseInput: J,
          SingleTouchInput: P,
          Recognizer: q,
          AttrRecognizer: tt,
          Tap: st,
          Pan: et,
          Swipe: rt,
          Pinch: nt,
          Rotate: at,
          Press: it,
          on: g,
          off: v,
          each: u,
          merge: yt,
          extend: bt,
          assign: pt,
          inherit: h,
          bindFn: d,
          prefixed: E
      });
      var ye = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
      ye.Hammer = ot,
      i = function() {
          return ot
      }
      .call(e, n, e, t),
      !(i !== o && (t.exports = i))
  }(window, document, "Hammer")
}
, function(t, e) {
  function n(t) {
      return null == t ? String(t) : R[D.call(t)] || "object"
  }
  function i(t) {
      return "function" == n(t)
  }
  function a(t) {
      return null != t && t == t.window
  }
  function r(t) {
      return null != t && t.nodeType == t.DOCUMENT_NODE
  }
  function s(t) {
      return "object" == n(t)
  }
  function o(t) {
      return s(t) && !a(t) && Object.getPrototypeOf(t) == Object.prototype
  }
  function c(t) {
      return "number" == typeof t.length
  }
  function l(t) {
      return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
  }
  function u(t) {
      return t in N ? N[t] : N[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
  }
  function p(t, e) {
      return "number" != typeof e || C[l(t)] ? e : e + "px"
  }
  function h(t) {
      return t.length > 0 ? z.fn.concat.apply([], t) : t
  }
  function d(t, e) {
      if (!e || !t || 1 !== t.nodeType)
          return !1;
      var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
      if (n)
          return n.call(t, e);
      var i, a = t.parentNode, r = !a;
      return r && (a = O).appendChild(t),
      i = ~f(a, e).indexOf(t),
      r && O.removeChild(t),
      i
  }
  function f(t, e) {
      var n, i = "#" == e[0], a = !i && "." == e[0], r = i || a ? e.slice(1) : e, s = k.test(r);
      return t.getElementById && s && i ? (n = t.getElementById(r)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : E.call(s && !i && t.getElementsByClassName ? a ? t.getElementsByClassName(r) : t.getElementsByTagName(e) : t.querySelectorAll(e))
  }
  function m(t, e, n) {
      for (var i in e)
          n && (o(e[i]) || L(e[i])) ? (o(e[i]) && !o(t[i]) && (t[i] = {}),
          L(e[i]) && !L(t[i]) && (t[i] = []),
          m(t[i], e[i], n)) : e[i] !== w && (t[i] = e[i])
  }
  function g(t, e, n, a) {
      return i(e) ? e.call(t, n, a) : e
  }
  function v(t, e, n) {
      null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
  }
  function b(t, e) {
      var n = t.className || ""
        , i = n && n.baseVal !== w;
      return e === w ? i ? n.baseVal : n : void (i ? n.baseVal = e : t.className = e)
  }
  function y(t) {
      try {
          return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? z.parseJSON(t) : t) : t
      } catch (e) {
          return t
      }
  }
  var w, A, x, S = [], E = (S.concat,
  S.filter,
  S.slice), I = window.document, N = {}, C = {
      "column-count": 1,
      columns: 1,
      "font-weight": 1,
      "line-height": 1,
      opacity: 1,
      "z-index": 1,
      zoom: 1
  }, T = /^(?:body|html)$/i, M = /([A-Z])/g, k = /^[\w-]*$/, R = {}, O = I.createElement("div"), D = R.toString, L = Array.isArray || function(t) {
      return t instanceof Array
  }
  , G = function(t) {
      return t.replace(/-+(.)?/g, function(t, e) {
          return e ? e.toUpperCase() : ""
      })
  }, z = {};
  z = {
      type: n,
      isFunction: i,
      isWindow: a,
      isArray: L,
      isPlainObject: o,
      isEmptyObject: function(t) {
          var e;
          for (e in t)
              return !1;
          return !0
      },
      inArray: function(t, e, n) {
          return S.indexOf.call(e, t, n)
      },
      camelCase: G,
      trim: function(t) {
          return null == t ? "" : String.prototype.trim.call(t)
      },
      each: function(t, e) {
          var n, i;
          if (c(t)) {
              for (n = 0; n < t.length; n++)
                  if (e.call(t[n], n, t[n]) === !1)
                      return t
          } else
              for (i in t)
                  if (e.call(t[i], i, t[i]) === !1)
                      return t;
          return t
      },
      length: 0,
      forEach: S.forEach,
      reduce: S.reduce,
      push: S.push,
      sort: S.sort,
      splice: S.splice,
      indexOf: S.indexOf,
      slice: function() {
          return E.apply(this, arguments)
      },
      map: function(t, e) {
          var n, i, a, r = [];
          if (c(t))
              for (i = 0; i < t.length; i++)
                  n = e(t[i], i),
                  null != n && r.push(n);
          else
              for (a in t)
                  n = e(t[a], a),
                  null != n && r.push(n);
          return h(r)
      },
      extend: function(t) {
          var e, n = E.call(arguments, 1);
          return "boolean" == typeof t && (e = t,
          t = n.shift()),
          n.forEach(function(n) {
              m(t, n, e)
          }),
          t
      },
      stringify: function(t) {
          var e = [];
          for (var n in t)
              t.hasOwnProperty(n) && e.push(n + "=" + t[n]);
          return e.join("&")
      },
      closest: function(t, e, n) {
          var i = t
            , a = !1;
          for ("object" == typeof e && (a = A(e)); i && !(a ? a.indexOf(i) >= 0 : d(i, e)); )
              i = i !== n && !r(i) && i.parentNode;
          return i
      },
      empty: function(t) {
          return this.each(this.parseElem2Arr(t), function() {
              this.innerHTML = ""
          })
      },
      remove: function(t) {
          return this.each(this.parseElem2Arr(t), function() {
              null != this.parentNode && this.parentNode.removeChild(this)
          })
      },
      attr: function(t, e, n) {
          var i;
          return "string" != typeof e || 2 in arguments ? this.each(z.parseElem2Arr(t), function(t) {
              if (1 === this.nodeType)
                  if (s(e))
                      for (var i in e)
                          v(this, i, e[i]);
                  else
                      v(this, e, g(this, n, t, this.getAttribute(e)))
          }) : 1 !== t.nodeType ? w : !(i = t.getAttribute(e)) && e in t ? t[e] : i
      },
      removeAttr: function(t, e) {
          return this.each(t, function() {
              1 === this.nodeType && e.split(" ").forEach(function(t) {
                  v(this, t)
              }, this)
          })
      },
      data: function(t, e, n) {
          var i = "data-" + e.replace(M, "-$1").toLowerCase()
            , a = 2 in arguments ? this.attr(t, i, n) : this.attr(t, i);
          return null !== a ? y(a) : w
      },
      offset: function(t, e) {
          var n = this;
          if (t = n.parseElem2Arr(t),
          e)
              return this.each(t, function(t) {
                  var i = g(this, e, t, n.offset(this))
                    , a = n.offsetParent(this).offset()
                    , r = {
                      top: i.top - a.top,
                      left: i.left - a.left
                  };
                  "static" == n.css(this, "position") && (r.position = "relative"),
                  n.css(this, r)
              });
          if (!t.length)
              return null;
          if (!this.contains(I.documentElement, t[0]))
              return {
                  top: 0,
                  left: 0
              };
          var i = t[0].getBoundingClientRect();
          return {
              left: i.left + window.pageXOffset,
              top: i.top + window.pageYOffset,
              width: Math.round(i.width),
              height: Math.round(i.height)
          }
      },
      css: function(t, e, i) {
          if (arguments.length < 3) {
              var a;
              if (!t)
                  return;
              if (a = getComputedStyle(t, ""),
              "string" == typeof e)
                  return t.style[G(e)] || a.getPropertyValue(e);
              if (L(e)) {
                  var r = {};
                  return this.each(e, function(e, n) {
                      r[n] = t.style[G(n)] || a.getPropertyValue(n)
                  }),
                  r
              }
          }
          t = this.parseElem2Arr(t);
          var s = "";
          if ("string" == n(e))
              i || 0 === i ? s = l(e) + ":" + p(e, i) : this.each(t, function() {
                  this.style.removeProperty(l(e))
              });
          else
              for (var o in e)
                  e[o] || 0 === e[o] ? s += l(o) + ":" + p(o, e[o]) + ";" : this.each(function() {
                      this.style.removeProperty(l(o))
                  });
          return this.each(t, function() {
              this.style.cssText += ";" + s
          })
      },
      hasClass: function(t, e) {
          return !!e && S.some.call(this.parseElem2Arr(t), function(t) {
              return this.test(b(t))
          }, u(e))
      },
      addClass: function(t, e) {
          return t = this.parseElem2Arr(t),
          e ? this.each(t, function(t) {
              if ("className"in this) {
                  x = [];
                  var n = b(this)
                    , i = g(this, e, t, n);
                  i.split(/\s+/g).forEach(function(t) {
                      z.hasClass(this, t) || x.push(t)
                  }, this),
                  x.length && b(this, n + (n ? " " : "") + x.join(" "))
              }
          }) : this
      },
      removeClass: function(t, e) {
          return t = this.parseElem2Arr(t),
          this.each(t, function(t) {
              if ("className"in this) {
                  if (e === w)
                      return b(this, "");
                  x = b(this),
                  g(this, e, t, x).split(/\s+/g).forEach(function(t) {
                      x = x.replace(u(t), " ")
                  }),
                  b(this, x.trim())
              }
          })
      },
      position: function() {
          if (this.length) {
              var t = this[0]
                , e = this.offsetParent()
                , n = this.offset()
                , i = T.test(e[0].nodeName) ? {
                  top: 0,
                  left: 0
              } : e.offset();
              return n.top -= parseFloat(this.css(t, "margin-top")) || 0,
              n.left -= parseFloat(this.css(t, "margin-left")) || 0,
              i.top += parseFloat(this.css(e[0], "border-top-width")) || 0,
              i.left += parseFloat(this.css(e[0], "border-left-width")) || 0,
              {
                  top: n.top - i.top,
                  left: n.left - i.left
              }
          }
      },
      offsetParent: function(t) {
          return t = this.parseElem2Arr(t),
          this.map(t, function() {
              for (var t = this.offsetParent || I.body; t && !T.test(t.nodeName) && "static" == this.css(t, "position"); )
                  t = t.offsetParent;
              return t
          })
      },
      parseElem2Arr: function(t) {
          return t ? "[object Array]" !== Object.prototype.toString.apply(t) ? [t] : t : []
      },
      qs: function(t, e) {
          return t.nodeType ? t.querySelector(e) : (e = t,
          I.querySelector(e))
      },
      qsa: f,
      append: function(t, e) {
          var n = I.createElement("div");
          n.innerHTML = e;
          var i = n.childNodes;
          i = Array.prototype.slice.apply(i);
          for (var a = 0; a < i.length; a++)
              t.appendChild(i[a]);
          n = null
      }
  },
  ["width", "height"].forEach(function(t) {
      var e = t.replace(/./, function(t) {
          return t[0].toUpperCase()
      });
      z[t] = function(n, i) {
          var s, n = n[0] ? n[0] : n, o = z.parseElem2Arr(n);
          return i === w ? a(n) ? n["inner" + e] : r(n) ? o.documentElement["scroll" + e] : (s = z.offset(n)) && s[t] : z.each(o, function(e) {
              o = this,
              z.css(o, t, g(this, i, e, o[t]()))
          })
      }
  }),
  z.contains = I.documentElement.contains ? function(t, e) {
      return t !== e && t.contains(e)
  }
  : function(t, e) {
      for (; e && (e = e.parentNode); )
          if (e === t)
              return !0;
      return !1
  }
  ,
  z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
      R["[object " + e + "]"] = e.toLowerCase()
  }),
  t.exports = z
}
, function(t, e, n) {
  function i(t) {
      return t._zid || (t._zid = m++)
  }
  function a(t, e, n, a) {
      if (e = r(e),
      e.ns)
          var o = s(e.ns);
      return (y[i(t)] || []).filter(function(t) {
          return t && (!e.e || t.e == e.e) && (!e.ns || o.test(t.ns)) && (!n || i(t.fn) === i(n)) && (!a || t.sel == a)
      })
  }
  function r(t) {
      var e = ("" + t).split(".");
      return {
          e: e[0],
          ns: e.slice(1).sort().join(" ")
      }
  }
  function s(t) {
      return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
  }
  function o(t, e) {
      return t.del && !A && t.e in x || !!e
  }
  function c(t) {
      return S[t] || A && x[t] || t
  }
  function l(t, e, n, a, s, l, u) {
      var h = i(t)
        , m = y[h] || (y[h] = []);
      e.split(/\s/).forEach(function(e) {
          var i = r(e);
          i.fn = n,
          i.sel = s,
          i.e in S && (n = function(t) {
              var e = t.relatedTarget;
              if (!e || e !== this && !f.contains(this, e))
                  return i.fn.apply(this, arguments)
          }
          ),
          i.del = l;
          var h = l || n;
          i.proxy = function(e) {
              if (e = p(e),
              !e.isImmediatePropagationStopped()) {
                  e.data = a;
                  var n = h.apply(t, e._args == d ? [e] : [e].concat(e._args));
                  return n === !1 && (e.preventDefault(),
                  e.stopPropagation()),
                  n
              }
          }
          ,
          i.i = m.length,
          m.push(i),
          "addEventListener"in t && t.addEventListener(c(i.e), i.proxy, o(i, u))
      })
  }
  function u(t, e, n, r, s) {
      var l = i(t);
      (e || "").split(/\s/).forEach(function(e) {
          a(t, e, n, r).forEach(function(e) {
              delete y[l][e.i],
              "removeEventListener"in t && t.removeEventListener(c(e.e), e.proxy, o(e, s))
          })
      })
  }
  function p(t, e) {
      return !e && t.isDefaultPrevented || (e || (e = t),
      f.each(T, function(n, i) {
          var a = e[n];
          t[n] = function() {
              return this[i] = I,
              a && a.apply(e, arguments)
          }
          ,
          t[i] = N
      }),
      e.defaultPrevented !== d ? e.defaultPrevented : "returnValue"in e ? e.returnValue === !1 : e.getPreventDefault && e.getPreventDefault(),
      t.isDefaultPrevented = I),
      t
  }
  function h(t) {
      var e, n = {
          originalEvent: t
      };
      for (e in t)
          C.test(e) || t[e] === d || (n[e] = t[e]);
      return p(n, t)
  }
  var d, f = n(20), m = 1, g = Array.prototype.slice, v = f.isFunction, b = function(t) {
      return "string" == typeof t
  }, y = {}, w = {}, A = "onfocusin"in window, x = {
      focus: "focusin",
      blur: "focusout"
  }, S = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
  };
  w.click = w.mousedown = w.mouseup = w.mousemove = "MouseEvents";
  var E = {};
  E.event = {
      add: l,
      remove: u
  },
  E.proxy = function(t, e) {
      var n = this
        , a = 2 in arguments && g.call(arguments, 2);
      if (v(t)) {
          var r = function() {
              return t.apply(e, a ? a.concat(g.call(arguments)) : arguments)
          };
          return r._zid = i(t),
          r
      }
      if (b(e))
          return a ? (a.unshift(t[e], t),
          n.proxy.apply(null, a)) : n.proxy(t[e], t);
      throw new TypeError("expected function")
  }
  ,
  E.one = function(t, e, n, i, a) {
      return this.on(t, e, n, i, a, 1)
  }
  ;
  var I = function() {
      return !0
  }
    , N = function() {
      return !1
  }
    , C = /^([A-Z]|returnValue$|layer[XY]$)/
    , T = {
      preventDefault: "isDefaultPrevented",
      stopImmediatePropagation: "isImmediatePropagationStopped",
      stopPropagation: "isPropagationStopped"
  };
  E.on = function(t, e, n, i, a, r) {
      var s, o, c = this;
      return t = f.parseElem2Arr(t),
      e && !b(e) ? (f.each(e, function(e, a) {
          c.on(t, e, n, i, a, r)
      }),
      c) : (b(n) || v(a) || a === !1 || (a = i,
      i = n,
      n = d),
      a !== d && i !== !1 || (a = i,
      i = d),
      a === !1 && (a = N),
      f.each(t, function(t, c) {
          r && (s = function(t) {
              return u(c, t.type, a),
              a.apply(this, arguments)
          }
          ),
          n && (o = function(t) {
              var e, i = f.closest(t.target, n, c);
              if (i && i !== c)
                  return e = f.extend(h(t), {
                      currentTarget: i,
                      liveFired: c
                  }),
                  (s || a).apply(i, [e].concat(g.call(arguments, 1)))
          }
          ),
          l(c, e, a, i, n, o || s)
      }))
  }
  ,
  E.off = function(t, e, n, i) {
      var a = this;
      return t = t.length == d ? [t] : t,
      e && !b(e) ? (f.each(e, function(t, e) {
          a.off(t, n, e)
      }),
      a) : (b(n) || v(i) || i === !1 || (i = n,
      n = d),
      i === !1 && (i = N),
      f.each(t, function() {
          u(this, e, i, n)
      }))
  }
  ,
  E.trigger = function(t, e, n) {
      var i = this;
      return t = f.parseElem2Arr(t),
      e = b(e) || f.isPlainObject(e) ? i.Event(e) : p(e),
      e._args = n,
      f.each(t, function() {
          e.type in x && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent"in t ? i.dispatchEvent(e) : i.triggerHandler(t, e, n)
      })
  }
  ,
  E.triggerHandler = function(t, e, n) {
      var i, r, s = this;
      return t = f.parseElem2Arr(t),
      f.each(t, function(t, o) {
          i = h(b(e) ? s.Event(e) : e),
          i._args = n,
          i.target = o,
          f.each(a(o, e.type || e), function(t, e) {
              if (r = e.proxy(i),
              i.isImmediatePropagationStopped())
                  return !1
          })
      }),
      r
  }
  ,
  E.Event = function(t, e) {
      b(t) || (e = t,
      t = e.type);
      var n = document.createEvent(w[t] || "Events")
        , i = !0;
      if (e)
          for (var a in e)
              "bubbles" == a ? i = !!e[a] : n[a] = e[a];
      return n.initEvent(t, i, !0),
      p(n)
  }
  ,
  t.exports = E
}
, function(t, e, n) {
  var i = n(16)
    , a = (n(20),
  n(23))
    , r = n(24)
    , s = function() {}
    , o = {
      param2json: function(t) {
          if (t && "" != t) {
              var e = t.split("&")
                , n = {};
              if (e.length > 0)
                  for (var i = 0; i < e.length; i++) {
                      var a = e[i].split("=")
                        , r = a[0]
                        , s = a[1];
                      n[r] = s
                  }
              return n
          }
          return null
      },
      UUID: function() {
          var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
              var e = 16 * Math.random() | 0
                , n = "x" == t ? e : 3 & e | 8;
              return n.toString(16)
          });
          return t
      },
      toLnglat: function(t) {
          if (!t)
              return !1;
          var e = t.split(",")
            , n = e[0]
            , i = e[1];
          return {
              lng: n,
              lat: i
          }
      },
      getDistance: function(t, e) {
          var n = 6378137
            , i = Math.PI / 180
            , a = (e.lat - t.lat) * i
            , r = (e.lng - t.lng) * i
            , s = t.lat * i
            , o = e.lat * i
            , c = Math.sin(a / 2)
            , l = Math.sin(r / 2)
            , u = c * c + l * l * Math.cos(s) * Math.cos(o);
          return 2 * n * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
      },
      formatPoint: function(t) {
          if ("undefined" != typeof t.x && "undefined" != typeof t.y)
              return t;
          if ("string" == typeof t) {
              var e = t.split(" ");
              return {
                  x: e[0],
                  y: e[1]
              }
          }
          return {}
      },
      inherit: function(t, e) {
          var n = function() {
              var n = this;
              t.apply(n, arguments),
              e.apply(n, arguments)
          };
          n.prototype = new t;
          for (var i in e)
              e.hasOwnProperty(i) || (n.prototype[i] = e[i]);
          return n
      },
      fetch: function(t) {
          var e = this
            , n = t.url || ""
            , o = t.onSuccess || s
            , c = t.onError || s
            , l = function(a) {
              var s = i.host;
              if (a && 3e4 == a.errorcode) {
                  var c = new r(e.elem,e.opts)
                    , l = function() {
                      e.fetch(t)
                  };
                  c.open(s, "", n, l)
              } else
                  o(a)
          }
            , u = function(t) {
              c()
          };
          n ? (t.onSuccess = l,
          t.onError = l,
          a.bind(t)) : u();
      },
      getInitTransformOffset: function(t, e) {
          var n = 2e3
            , i = 2e3;
          return {
              x: -(n - t) / 2 || 0,
              y: -(i - e) / 2 || 0
          }
      }
  };
  t.exports = o
}
, function(module, exports) {
  jx = {
      getHTTPObject: function() {
          var t = !1;
          if ("undefined" != typeof ActiveXObject)
              try {
                  t = new ActiveXObject("Msxml2.XMLHTTP")
              } catch (e) {
                  try {
                      t = new ActiveXObject("Microsoft.XMLHTTP")
                  } catch (n) {
                      t = !1
                  }
              }
          else if (window.XMLHttpRequest)
              try {
                  t = new XMLHttpRequest
              } catch (e) {
                  t = !1
              }
          return t
      },
      load: function(url, callback, format, method, opt) {
          var http = this.init();
          if (http && url) {
              http.overrideMimeType && http.overrideMimeType("text/xml"),
              method || (method = "GET"),
              format || (format = "text"),
              opt || (opt = {}),
              format = format.toLowerCase(),
              method = method.toUpperCase();
              var now = "uid=" + (new Date).getTime();
              url += url.indexOf("?") + 1 ? "&" : "?",
              url += now;
              var parameters = null;
              if ("POST" == method) {
                  var parts = url.split("?");
                  url = parts[0],
                  parameters = parts[1]
              }
              http.open(method, url, !0),
              "POST" == method && (http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
              http.setRequestHeader("Content-length", parameters.length),
              http.setRequestHeader("Connection", "close"));
              var ths = this;
              opt.handler ? http.onreadystatechange = function() {
                  opt.handler(http)
              }
              : http.onreadystatechange = function() {
                  if (4 == http.readyState)
                      if (200 == http.status) {
                          var result = "";
                          http.responseText && (result = http.responseText),
                          "j" == format.charAt(0) ? (result = result.replace(/[\n\r]/g, ""),
                          result = eval("(" + result + ")")) : "x" == format.charAt(0) && (result = http.responseXML),
                          callback && callback(result)
                      } else
                          opt.loadingIndicator && document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator),
                          opt.loading && (document.getElementById(opt.loading).style.display = "none"),
                          error && error(http.status)
              }
              ,
              http.send(parameters)
          }
      },
      bind: function(t) {
          var e = {
              url: "",
              onSuccess: !1,
              onError: !1,
              format: "text",
              method: "GET",
              update: "",
              loading: "",
              loadingIndicator: ""
          };
          for (var n in e)
              t[n] && (e[n] = t[n]);
          if (e.url) {
              var i = !1;
              e.loadingIndicator && (i = document.createElement("div"),
              i.setAttribute("style", "position:absolute;top:0px;left:0px;"),
              i.setAttribute("class", "loading-indicator"),
              i.innerHTML = e.loadingIndicator,
              document.getElementsByTagName("body")[0].appendChild(i),
              this.opt.loadingIndicator = i),
              e.loading && (document.getElementById(e.loading).style.display = "block"),
              this.load(e.url, function(t) {
                  e.onSuccess && e.onSuccess(t),
                  e.update && (document.getElementById(e.update).innerHTML = t),
                  i && document.getElementsByTagName("body")[0].removeChild(i),
                  e.loading && (document.getElementById(e.loading).style.display = "none")
              }, e.format, e.method, e)
          }
      },
      init: function() {
          return this.getHTTPObject()
      }
  },
  module.exports = jx
}
, function(t, e, n) {
  var i = n(21)
    , a = n(16)
    , r = n(20)
    , s = function(t, e) {
      this.elem = t,
      this.opts = e,
      this.isMobile = !e.isPC,
      this.initialize(t, e)
  };
  s.prototype = {
      initialize: function(t, e) {
          this.createIframe(),
          document.getElementsByClassName || (document.getElementsByClassName = function(t, e) {
              for (var n = (e || document).getElementsByTagName("*"), i = [], a = 0; a < n.length; a += 1)
                  for (var r = n[a], s = r.className.split(" "), o = 0; o < s.length; o += 1)
                      if (s[o] === t) {
                          i.push(r);
                          break
                      }
              return i
          }
          )
      },
      createIframe: function() {
          this.div_ = document.createElement("div"),
          this.div_.className = "amap-popup",
          this.div_.style.zIndex = 2147483647;
          var t = document.createElement("iframe");
          r.addClass(t, "amap-popup-content"),
          this.div_.appendChild(t),
          t.style.width = Math.min(330, screen.width) + "px",
          this.iframe = t
      },
      open: function(t, e, n, r) {
          if (!this.opened) {
              var s = this.iframe
                , o = this
                , c = a.traffitor.host + "/verify/";
              s.src = c + "jsapi.html?channel=" + a.traffitor.channel + "&from=" + encodeURIComponent(c + "success.html?" + e) + "&th=" + t + "&restUrl=" + encodeURIComponent(n);
              var l, u;
              if (this.isMobile)
                  this.div_.style.marginLeft = -Math.min(330, screen.width) / 2 + "px",
                  document.body.appendChild(this.div_);
              else {
                  var p = document.getElementsByClassName("amap-container")[0];
                  if (p && p.clientWidth > 322 && p.clientHeight > 346)
                      this.div_.style.position = "absolute",
                      p.appendChild(this.div_);
                  else {
                      l = .5,
                      u = .5;
                      var h, d;
                      if (p) {
                          var f = M.DomUtil.getViewportOffset(p);
                          h = f.x,
                          d = f.y
                      } else
                          h = d = 0;
                      this.div_.style.top = "0%",
                      this.div_.style.left = "0%";
                      var m = l - h
                        , g = u - d
                        , v = m / 5
                        , b = g / 5
                        , y = setInterval(function() {
                          h += v,
                          d += b,
                          l - h < .05 && u - d < .05 ? (o.div_.style.top = "50%",
                          o.div_.style.left = "50%",
                          clearInterval(y)) : (o.div_.style.top = 100 * d + "%",
                          o.div_.style.left = 100 * h + "%")
                      }, 25);
                      document.body.appendChild(this.div_)
                  }
              }
              var w = !0
                , A = function() {
                  return w ? void (w = !1) : void (o.opened && (o.div_.parentNode.removeChild(o.div_),
                  o.opened = !1,
                  r && r()))
              };
              i.on(s, "load", A),
              this.opened = !0
          }
      }
  },
  t.exports = s
}
, function(t, e, n) {
  var i = n(16)
    , a = n(22)
    , r = n(20)
    , s = n(21)
    , o = n(26)
    , c = r.qs
    , l = function() {
      this.init()
  };
  fileNameData = i.cityList,
  l.prototype.formatCityList = function(t) {
      for (var e, n = {}, i = 0; i < t.length; i++)
          e = t[i],
          n[e.adcode] = {
              city: e.spell,
              name: e.cityname
          };
      return n
  }
  ,
  l.prototype.getCityList = function(t) {
      var e = this;
      return e.cityList ? void t(e.cityList) : void a.fetch({
          url: i.staticUrl.cityList,
          onSuccess: function(n) {
              n && n.citylist ? e.cityList = e.formatCityList(n.citylist) : e.cityList = i.cityList,
              t(e.cityList)
          },
          onError: function() {
              e.cityList = i.cityList,
              t(i.cityList)
          },
          format: "json",
          method: "get"
      })
  }
  ,
  l.prototype.getServerMd5 = function(t, e) {}
  ,
  l.prototype.compareMd5 = function(t) {
      var e = this
        , n = e.store
        , i = n.md5
        , a = t;
      i && i == a ? e.dataComplete(n.data) : e.getData(e.cache.adcode, function(t) {
          e.dataComplete(t)
      })
  }
  ,
  l.prototype.dataComplete = function(t) {
      var e = this;
      1 == t.status ? (e.processData(t.data),
      e.filterData(),
      e.completeCb(e.cache)) : e.completeCb({
          status: 0,
          info: "error"
      })
  }
  ,
  l.prototype.getStationWidth = function(t) {
      var e = this
        , n = e.cache.stations[t];
      return 1 == n.t ? e.tStation_w : e.station_w
  }
  ,
  l.prototype.setAdcode = function(t, e) {
      var n = this;
      n.getCityList(function(i) {
          !i[t] && (t = 1100),
          n.cache.adcode = t,
          n.completeCb = e,
          n.compareMd5(e)
      })
  }
  ,
  l.prototype.getData = function(t, e) {
      var n = i.staticUrl.data + t + "_drw_" + this.cityList[t].city + ".json"
        , r = {
          status: 0,
          info: "error",
          data: {}
      }
        , s = {
          status: 1,
          info: "success",
          data: {}
      };
      a.fetch({
          url: n,
          onSuccess: function(t) {
              t.i ? (s.data = t,
              e(s)) : e(r)
          },
          onError: function() {
              e(r)
          },
          format: "json",
          method: "get"
      })
  }
  ,
  l.prototype.setData = function() {}
  ,
  l.prototype.pointInLine = function(t, e, n) {
      t = a.formatPoint(t),
      e = a.formatPoint(e),
      n = a.formatPoint(n);
      var i = (e.x - t.x) / (e.y - t.y)
        , r = (n.x - t.x) / (n.y - t.y)
        , s = Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)
        , o = Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2);
      return i == r && Math.sqrt(s) >= Math.sqrt(o)
  }
  ,
  l.prototype.simplifyPath = function(t) {
      for (var e = this, n = 0; n < t.length; n++)
          for (var i = n + 2; i < t.length; i++) {
              if (!e.pointInLine(t[n], t[i], t[i - 1])) {
                  n = i - 1;
                  break
              }
              t.splice(i - 1, 1),
              i--
          }
      return t
  }
  ,
  l.prototype.delProgressLine = function() {
      var t, e = this, n = e.cache, i = n.lines;
      for (var a in i)
          i.hasOwnProperty(a) && (t = i[a],
          "1" == t.su && (n.currLines[t.ls] = i[a]))
  }
  ,
  l.prototype.lineSort = function() {
      var t = this;
      t.sortline = [];
      var e, n = t.cache.currLines;
      for (e in n) {
          var i = parseInt(n[e].x);
          n[e].ls;
          t.cache.sortline[i - 1] = n[e]
      }
  }
  ,
  l.prototype.linesBase = function() {
      for (var t = this, e = t.cache.sortline, n = [], i = 0; i < e.length; i++) {
          const a = e[i];
          n && a && n.push({
              name: a.ln,
              laname: a.la,
              color: a.cl,
              id: a.ls,
              status: a.su,
              shortname: a.kn
          })
      }
      return n
  }
  ,
  l.prototype.stationSearch = function(t) {
      var e = this
        , n = e.cache.sug
        , i = e.cache.lines;
      return o.stationSearch(t, n, i)
  }
  ,
  l.prototype.filterData = function() {
      var t = this;
      t.delProgressLine(),
      t.lineSort()
  }
  ,
  l.prototype.processData = function(t) {
      var e, n, i = this, a = i.cache, r = t.l, s = r.length;
      a.name = t.s,
      a.id = t.i,
      a.lines = [],
      a.linesNamePos = {},
      a.stations = {},
      a.zolines = {},
      a.zostations = [];
      var o = t.o.split(",");
      a.offset = a.offset[t.i] || {},
      a.offset.x = o[0],
      a.offset.y = o[1];
      for (var c = 1e3 - Number(o[0]) || 0, l = 1e3 - Number(o[1]) || 0, u = {}, p = 0; p < s; p++)
          if (e = r[p],
          "1" == e.su) {
              for (var h = i.simplifyPath(e.c.concat()), d = 0; d < h.length; d++) {
                  var f = h[d].split(" ");
                  h[d] = Number(f[0]) + c + " " + (Number(f[1]) + l)
              }
              var m = e.c;
              for (d = 0; d < m.length; d++)
                  f = m[d].split(" "),
                  m[d] = Number(f[0]) + c + " " + (Number(f[1]) + l);
              e.nc = h,
              e.c = m,
              e.linesNamePos = {},
              e.linesNamePos[e.ls] = e.lp,
              e.stname = [];
              for (var g = 0; g < e.st.length; g++) {
                  n = e.st[g],
                  e.stname.push(n.n);
                  var v = e.st[g].p.split(" ")
                    , b = Number(v[0]) + c
                    , y = Number(v[1]) + l;
                  n.p = b + " " + y,
                  i.cache.min_x ? b < i.cache.min_x && (i.cache.min_x = b) : i.cache.min_x = b,
                  i.cache.min_y ? y < i.cache.min_y && (i.cache.min_y = y) : i.cache.min_y = y;
                  for (var w = n.rs.split("|"), A = [], x = 0; x < w.length; x++) {
                      var S = w[x].split(" ");
                      A.push(Number(S[0]) + c + " " + (Number(S[1]) + l))
                  }
                  if (n.rs = A.join("|"),
                  "1" == n.su) {
                      var E = n;
                      a.stations[E.si] = E,
                      a.stations[E.si] = E,
                      u[E.sp.split(" ").join("").toLowerCase() + "|" + E.n.toLowerCase()] = E,
                      a.stationspoi[E.poiid] = E,
                      a.navStPixel[E.p] = E
                  }
              }
              var I = t.l[p].lp;
              if (I) {
                  for (var N = 0; N < I.length; N++) {
                      var C = I[N].split(" ");
                      I[N] = Number(C[0]) + c + " " + (Number(C[1]) + l)
                  }
                  t.l[p].lp = I
              }
              a.linesNamePos[t.l[p].ls] = t.l[p].lp,
              a.lines[t.l[p].ls] = t.l[p];
              var T = t.l[p].li && t.l[p].li.split("|");
              if (T)
                  for (var M = 0; M < T.length; M++)
                      a.navlines[T[M]] = t.l[p]
          }
      a.sug = u,
      a.adcode = t.i,
      a.name = t.s
  }
  ,
  l.prototype.initVarieties = function() {
      var t = this;
      t.station_w = i.svg.stationWidth,
      t.tStation_w = i.svg.stationWidth,
      t.cache = {
          citylistByAdcode: null,
          dataForDrw: {},
          lines: {},
          stations: {},
          sug: {},
          stationsInfo: {},
          stationspoi: {},
          offset: {},
          navlines: {},
          navStPixel: {},
          currLines: {},
          sortline: [],
          adcode: 1100,
          min_x: null,
          min_y: null
      },
      t.clearRoute(),
      t.store = {}
  }
  ,
  l.prototype.sortStation = function(t, e, n) {
      if (e) {
          var i = e.stname
            , a = i.indexOf(t[0]);
          return i[a] != t[1] ? t.reverse() : t
      }
      s.trigger(c(".route_close"), "touchend")
  }
  ,
  l.prototype.setLineCoords = function(t, e) {
      for (var n = [], i = [], a = null, r = e.ls, s = [].concat(e.c), o = e.lo, c = {}, l = 0; l < e.st.length; l++)
          c[e.st[l].n] = e.st[l];
      for (var u = 0; u < t.length; u++) {
          var p = c[t[u]];
          n.push(p.p);
          for (var h = p.r.split("|"), d = [], f = 0; f < h.length; f++)
              this.cache.lines[h[f]] && d.push(h[f]);
          var m = d.indexOf(r);
          p.rs.split("|")[m] && i.push(p.rs.split("|")[m])
      }
      var g = i[0]
        , v = i[1]
        , b = i[i.length - 1];
      if ("1" == o) {
          var y = [].concat(s);
          y.shift(),
          s = s.concat(y);
          var w = ([].concat(s),
          s.indexOf(g));
          if (2 == i.length) {
              var A = s.indexOf(b, w)
                , x = Math.abs(A - w)
                , S = s.indexOf(g, A)
                , E = Math.abs(S - A);
              x > E && (w = A,
              A = S)
          } else {
              s = s.slice(w);
              var w = s.indexOf(g)
                , I = s.indexOf(v)
                , A = s.indexOf(b);
              I > A && (w = A,
              s = s.slice(w),
              w = s.indexOf(b),
              A = s.indexOf(g))
          }
      } else
          var w = s.indexOf(g)
            , A = s.indexOf(b);
      return a = w < A ? s.slice(w, A + 1) : s.slice(A, w + 1)
  }
  ,
  l.prototype.clearRoute = function() {
      this.navDrwData = {
          linesbar: [],
          lines: {},
          stations: {}
      }
  }
  ,
  l.prototype.getNearStation = function(t) {
      var e, n, i, s = this, o = s.cache, c = t.lnglat, l = -1, u = 0, p = o.stations, h = a.toLnglat(c);
      return r.each(p, function(t, r) {
          e = a.toLnglat(r.sl),
          i = r.si,
          u = "" != r.sl ? a.getDistance(h, e) : 1e5,
          (l == -1 || u < l) && (l = u,
          n = i)
      }),
      l < 1e4 && n
  }
  ,
  l.prototype.formatStation = function(t) {
      for (var e = this, n = t.r && t.r.split("|"), i = [], a = 0; a < n.length; a++)
          if (n[a]) {
              var r = e.cache.lines[n[a]];
              r && i.push(e.formatLine(r))
          }
      var s = {
          name: t.n,
          poiid: t.poiid,
          id: t.si,
          lnglat: t.sl,
          referlines: i,
          status: t.su
      };
      return s
  }
  ,
  l.prototype.formatLine = function(t) {
      var e = {
          id: t.ls,
          shortname: t.kn,
          name: t.ln,
          color: t.cl
      };
      return e
  }
  ,
  l.prototype.init = function() {
      var t = this;
      t.initVarieties()
  }
  ,
  t.exports = function() {
      return new l
  }
}
, function(t, e) {
  var n = {
      stationSearch: function(t, e, n) {
          var t = t.toLowerCase();
          if ("" == t)
              return {
                  keyword: t,
                  stationList: []
              };
          if (e) {
              var i = t.length
                , a = [];
              for (var r in e)
                  for (var s = r.split("|"), o = 0; o < s.length; o++) {
                      var c = s[o].substr(0, i);
                      if (c == t) {
                          for (var l = e[r], u = l.r.split("|") || [], p = [], h = 0; h < u.length; h++)
                              if (u[h]) {
                                  var d = n[u[h]];
                                  d && p.push({
                                      id: d.ls,
                                      shortname: d.kn,
                                      name: d.ln,
                                      color: d.cl,
                                      index: d.x
                                  })
                              }
                          var f = {
                              name: l.n,
                              poiid: l.poiid,
                              id: l.si,
                              lnglat: l.sl,
                              referlines: p,
                              status: l.su
                          };
                          a.push(f);
                          break
                      }
                  }
              return {
                  keyword: t,
                  stationList: a
              }
          }
      },
      lineSearch: function(t, e) {}
  };
  t.exports = n
}
, function(t, e, n) {
  var i = n(16)
    , a = (n(22),
  n(21),
  n(20))
    , r = a.width(window) || document.body.clientWidth
    , s = a.height(window) || document.body.clientHeight
    , o = i.transitionLabel
    , c = "pinch"
    , l = a.qs
    , u = 1
    , p = {
      updateSvgElem: function(t, e, n) {
          var i = l(this.elem, ".svg-g");
          a.attr(i, "transform", "translate(" + t + "," + e + ") scale(" + n + ")")
      },
      updateOverlaysScale: function(t) {
          var e = this
            , n = e.draw.curTip
            , i = "scale(" + 1 / t + ")";
          n && (n.style.transform = i,
          n.style.webkitTransform = i),
          a.each(e.draw.markerMap, function(t, e) {
              var n = e.elem;
              n.style.transform = i,
              n.style.webkitTransform = i
          })
      },
      dragSvg: function(t) {
          var e = this
            , n = e.status;
          n.dragSvg(t) && (e.LgPanPinch.innerHTML = u++,
          e.handleUpdate(t))
      },
      dragEndSvg: function(t, e) {
          var n = this
            , i = n.status
            , r = n.draw
            , s = l(n.elem, ".svg-g")
            , c = l(n.elem, "#drag_handle")
            , u = a.offset(s)
            , p = u.left
            , h = u.top
            , d = u.width
            , f = u.height
            , m = t.deltaX
            , g = t.deltaY
            , v = !0;
          if (d > r.w ? (Number(p) > Number(r.w) / 2 || Math.abs(Number(p)) > Number(d - Number(r.w) / 2)) && (Number(n.startOffset.left) > 0 ? v = !1 : d - Math.abs(Number(n.startOffset.left)) < Number(r.w) / 2 ? v = !1 : (m = t.deltaX / 2,
          a.addClass(c, o.debounceTransLabel))) : (p + d / 2 < 0 || p + d / 2 > r.w) && (Number(n.startOffset.left) > 0 ? v = !1 : d - Math.abs(Number(n.startOffset.left)) < Number(r.w) / 2 ? v = !1 : (m = t.deltaX / 2,
          a.addClass(c, o.debounceTransLabel))),
          f > r.h ? (Number(h) > Number(r.h) / 2 || Math.abs(Number(h)) > Number(f - Number(r.h) / 2)) && (Number(n.startOffset.top) > 0 ? v = !1 : f - Math.abs(Number(n.startOffset.top)) < Number(r.h) / 2 ? v = !1 : (g = t.deltaY / 2,
          a.addClass(c, o.debounceTransLabel))) : (h + f / 2 < 0 || h + f / 2 > r.h) && (Number(n.startOffset.top) > 0 ? v = !1 : f - Math.abs(Number(n.startOffset.top)) < Number(r.h) / 2 ? v = !1 : (g = t.deltaY / 2,
          a.addClass(c, o.debounceTransLabel))),
          v) {
              i.dragEndSvg({
                  deltaX: m,
                  deltaY: g
              });
              var b = i.transformState;
              n.updateSvgElem(b.translate.x, b.translate.y, b.scale);
              var y = l(n.elem, ".overlays")
                , w = parseInt(a.css(y, "left")) || 0
                , A = parseInt(a.css(y, "top")) || 0
                , x = Number(w) + Number(m)
                , S = Number(A) + Number(g);
              r.updateOverlays(x, S)
          } else
              a.addClass(c, o.debounceTransLabel);
          n.handleReset(),
          e && e()
      },
      scale: function(t, e) {
          var n = this
            , i = n.status.transformState.scale
            , r = i + e < n.opts.maxScale ? (i + e) / i : n.opts.maxScale / i;
          t.scale = n.tmpScale = r,
          t.status = "doubleTap",
          a.addClass(a.qs(n.elem, "#drag_handle"), o.debounceTransLabel),
          p.scaleSvg(t)
      },
      scaleSvg: function(t) {
          var e = this
            , n = e.status;
          n.scaleSvg(t) && (e.LgPanPinch.innerHTML = u++,
          e.handleUpdate(t))
      },
      scaleEndSvg: function(t, e, n, i) {
          var r, s = this, c = s.status;
          if (r = c.scaleEndSvg(t, e),
          !n && r) {
              var u = l(s.elem, "#drag_handle");
              a.addClass(u, o.debounceTransLabel),
              s.draw.curTip && a.addClass(s.draw.curTip, o.overlayDebounceTransLabel),
              a.each(s.draw.markerMap, function(t, e) {
                  var n = e.elem;
                  a.addClass(n, o.overlayDebounceTransLabel)
              }),
              a.css(u, {
                  "-webkit-transform": "translate3d(0px, 0px, 0) scale(" + r + ", " + r + ")",
                  transform: "translate3d(0px, 0px, 0) scale(" + r + ", " + r + ")"
              }),
              s.updateOverlaysScale(r)
          } else
              s.resetAllElemAfterScale(i)
      },
      resetAllElemAfterScale: function(t) {
          var e = this
            , n = e.status
            , i = n.transformState;
          e.updateSvgElem(i.translate.x, i.translate.y, i.scale),
          e.handleReset(),
          e.updateOverlaysScale(1),
          e.draw.updateTip(),
          e.draw.updateMarker(),
          t && t()
      },
      handleUpdate: function(t) {
          var e = this
            , n = e.status
            , i = n.transform
            , a = document.getElementById("drag_handle")
            , r = ["translate3d(" + i.translate.x + "px, " + i.translate.y + "px, 0)", "scale(" + i.scale + ", " + i.scale + ")"];
          if (r = r.join(" "),
          t.status == c,
          !0) {
              var s = n.transformOrigin.x + "px " + n.transformOrigin.y + "px";
              a.style.webkitTransformOrigin = s,
              a.style.transformOrigin = s,
              e.updateOverlaysScale(i.scale)
          }
          a.style.webkitTransform = r,
          a.style.transform = r
      },
      handleReset: function() {
          var t = this;
          t.status.updateTransform(0, 0, 1),
          t.handleUpdate({})
      },
      setFitview: function(t) {
          var e = this
            , n = e.opts.offset || {};
          e.scaleEndSvg(1 / e.status.allScale, !0, 1);
          var i = a.width(t)
            , o = a.height(t)
            , c = r - (n.left || 0) - (n.right || 0)
            , l = s - (n.top || 0) - (n.bottom || 0)
            , u = c / i
            , p = l / o
            , h = 1;
          (u < 1 || p < 1) && (h = u < p ? u - .05 : p - .06,
          e.scaleEndSvg(h, !0, 1))
      },
      setTipPos: function(t) {
          var e = this
            , n = document.getElementById(t)
            , i = e.cacheObj.getStationWidth(t)
            , r = e.draw.curTip.offset
            , s = l(e.elem, ".subway-tip")
            , o = n && a.offset(n) && a.offset(n).left
            , c = n && a.offset(n) && a.offset(n).top
            , u = l(e.elem, ".overlays")
            , p = parseInt(a.css(u, "left")) || 0
            , h = parseInt(a.css(u, "top")) || 0
            , d = o + i * e.status.allScale / 2 - p
            , f = c + i * e.status.allScale / 2 - h;
          a.css(s, {
              top: f + r.y + "px",
              left: d + r.x + "px"
          })
      },
      getMarkerPos: function(t) {
          var e = this
            , n = document.getElementById(t)
            , i = e.cacheObj.getStationWidth(t)
            , r = n && a.offset(n).left
            , s = n && a.offset(n).top
            , o = l(e.elem, ".overlays")
            , c = parseInt(a.css(o, "left")) || 0
            , u = parseInt(a.css(o, "top")) || 0;
          return {
              left: r + i * e.status.allScale / 2 - c,
              top: s + i * e.status.allScale / 2 - u
          }
      },
      getFilterCenter: function() {
          var t = this
            , e = l(t.elem, "#g-select");
          if (!e)
              return null;
          var n = a.offset(e)
            , i = document.getElementById("g-select").getBBox().height * t.status.allScale
            , r = document.getElementById("g-select").getBBox().width * t.status.allScale;
          return {
              x: n.left + r / 2,
              y: n.top + i / 2
          }
      },
      getNavCenter: function() {
          var t = this
            , e = a.offset(l(t.elem, "#g-nav"))
            , n = document.getElementById("g-nav").getBBox().height * t.status.allScale
            , i = document.getElementById("g-nav").getBBox().width * t.status.allScale;
          return {
              x: e.left + i / 2,
              y: e.top + n / 2
          }
      },
      getStCenter: function(t) {
          var e = document.getElementById(t);
          if (e) {
              var n = a.offset(e);
              if (n)
                  return {
                      x: n.left + n.width / 2,
                      y: n.top + n.height / 2
                  }
          }
          return {}
      },
      setCenter: function(t, e) {
          var n = this
            , i = n.status
            , r = l(n.elem, "#drag_handle");
          if (t) {
              var s = e && e.animate;
              s !== !1 && (s = !0);
              var c = n.move = i.setMove(t)
                , u = l(n.elem, ".overlays")
                , p = parseInt(a.css(u, "left")) || 0
                , h = parseInt(a.css(u, "top")) || 0;
              n.move.newLeft = Number(p) - Number(c.x),
              n.move.newTop = Number(h) - Number(c.y),
              p == n.move.newLeft && h == n.move.newTop || (i.updateTransform(-c.x, -c.y, i.transform.scale),
              s && a.addClass(r, o.moveTransLable),
              n.handleUpdate({}),
              s || n.setCenterCb())
          }
      },
      setCenterCb: function() {
          var t = this
            , e = t.status
            , n = t.move || {};
          t.updateSvgElem(n.translate_x, n.translate_y, n.scale),
          e.updateTransformState(n.translate_x, n.translate_y, n.scale),
          t.draw.updateOverlays(n.newLeft, n.newTop),
          t.handleReset(),
          a.removeClass(l(t.elem, "#drag_handle"), o.moveTransLable),
          t.move = null
      },
      stopAnimation: function(t) {
          var e = this;
          a.removeClass(t, o.debounceTransLabel),
          a.removeClass(t, o.overlayDebounceTransLabel),
          a.removeClass(t, o.moveTransLable),
          e.move && e.setCenterCb()
      },
      init: function(t, e, n) {
          var i = this;
          i.elem = t,
          i.cacheObj = e.cacheObj,
          i.status = e.status,
          i.draw = e.draw,
          i.opts = n,
          i.LgPanPinch = l(".-lg-pan-pinch")
      }
  };
  t.exports = p
}
, function(t, e, n) {
  var i = n(29)
    , a = n(20)
    , r = n(16)
    , s = n(30)
    , o = n(32)
    , c = n(33)
    , l = n(34)
    , u = n(35)
    , p = n(36)
    , h = a.qs
    , d = {
      width: 2e3,
      height: 2e3
  }
    , f = function() {}
    , m = function(t, e, n) {
      var i = this;
      i.elem = t,
      i.cacheObj = e.cacheObj,
      i.status = e.status,
      i.opts = a.extend(!0, d, n),
      i.init()
  };
  m.fn = m.prototype,
  m.fn.isSpecailPhone = function() {
      navigator.userAgent.toLowerCase()
  }
  ,
  m.fn.draw = function(t, e) {
      a.remove(h(this.elem, "#subway-svg")),
      this.currLines = {},
      this.drawComplete = e.cb || f,
      this.svgReady || this.drawSvgSubway(t, e)
  }
  ,
  m.fn.drawSvgSubway = function(t, e) {
      var n = this;
      a.css(h("#subwayCanvas"), "display", "none"),
      a.css(h(".station-out-box"), "display", "none"),
      a.css(h("#subwaySvg"), "display", "block"),
      n.subwayBox.drwSwBox(t),
      setTimeout(function() {
          n.drawSvg(t, e),
          n.svgReady = !0
      }, 10)
  }
  ,
  m.fn.drawSvg = function(t) {
    var lines = [t.currLines["110100023076"],t.currLines["900000028907"],t.currLines["900000062236"],t.currLines["900000099933"]];
    t.currLines = lines;
      var e = this
        , n = "normal";
      e.lines.drwSwLines(t.currLines, n),
      e.stations.drwSwStations(t, n),
      e.text._drwSwStationsName(t, n, 12, 20)
      e.text.drwSwLinesName(t, n),
      e.subwayBox.drawBg(t),
      e.drawComplete()
  }
  ,
  m.fn.drawNavLine = function(t) {
      var e = this
        , n = "nav"
        , i = document.getElementById("svg-g")
        , a = document.createElementNS(e.ns_svg, "g");
      a.setAttribute("id", "g-nav"),
      i.appendChild(a),
      e.lines.drwSwLines(t.lines, n),
      e.stations.drwSwStations(t, n),
      e.text._drwSwStationsName(t, n, 12, 20)
  }
  ,
  m.fn.drawSelectLine = function(t) {
      var e = this
        , n = "select"
        , i = document.getElementById("svg-g")
        , a = document.createElementNS(e.ns_svg, "g");
      a.setAttribute("id", "g-select"),
      i.appendChild(a),
      e.lines.drwSwLines(t, n),
      e.stations.drwSwStations(t, n),
      e.text._drwSwStationsName(t, n, 12, 20),
      e.text.drwSwLinesName(t, n)
  }
  ,
  m.fn.openTip = function(t, e) {
      e = e || {};
      var n = this
        , r = e.content
        , s = e.tpl || {}
        , o = {};
      if (r)
          o = {
              content: r,
              id: t
          };
      else {
          var c = s.name || n.cacheObj && n.cacheObj.cache && n.cacheObj.cache.stations && n.cacheObj.cache.stations[t].n || "";
          o = {
              id: t,
              name: c
          }
      }
      n.opentip && n.closeTip(),
      a.append(n.overlays, i(o)),
      n.curTip = h(n.overlays, ".subway-tip"),
      n.curTip.style.display = "block",
      n.curTip.offset = e.offset || {
          x: 0,
          y: 0
      },
      n.opentip = !0
  }
  ,
  m.fn.closeTip = function() {
      var t = this;
      t.opentip && (t.opentip = !1,
      t.curTip && a.remove(t.curTip) && (t.curTip = null))
  }
  ,
  m.fn.addMarker = function(t, e) {
      var n = this
        , i = t.type;
      "start" == i ? (n.startId && n.clearMarker(n.startId),
      n.startId = t.id) : "end" == i && (n.endId && n.clearMarker(n.endId),
      n.endId = t.id),
      t.pos = e;
      var a = new u(n.elem,t);
      return n.markerMap[a.id] = a,
      a
  }
  ,
  m.fn.clearMarker = function(t) {
      var e = this
        , n = e.markerMap[t];
      e.startId == t ? e.startId = null : e.endId == t && (e.endId = null),
      n && (n.destory(),
      delete e.markerMap[t])
  }
  ,
  m.fn.clearRoute = function() {
      a.remove(h("#g-nav")),
    //   a.css(h("#g-bg"), "display", "none"),
      a.addClass(h(".route_close_btn"), "hidden")
  }
  ,
  m.fn.updateMarker = function() {
      var t = this
        , e = t.markerMap;
      for (var n in e)
          e.hasOwnProperty(n) && t._updateMarker(n)
  }
  ,
  m.fn.updateTip = function() {
      var t = this
        , e = h(t.elem, ".subway-tip") || ""
        , n = a.data(e, "id")
        , i = document.getElementById(n)
        , r = n && t.cacheObj.getStationWidth(n)
        , s = t.status.allScale;
      if (t.opentip) {
          var o = a.offset(i).left
            , c = a.offset(i).top
            , l = t.curTip.offset
            , u = t.overlays
            , p = parseInt(a.css(u, "left")) || 0
            , d = parseInt(a.css(u, "top")) || 0
            , f = o + r * s / 2 - p + l.x * s
            , m = c + r * s / 2 - d + l.y * s;
          a.css(e, {
              top: m + "px",
              left: f + "px"
          })
      }
  }
  ,
  m.fn.addCustomNode = function(t, e) {
      return p.addNode(t, e)
  }
  ,
  m.fn.removeCustomNode = function(t) {
      return p.removeNode(t)
  }
  ,
  m.fn.showFilterLine = function(t) {
      var e = this;
      a.remove(h(e.elem, "#g-select"));
      a.css(h(e.elem, "#g-bg"), "display", "block");
      if (!Array.isArray(t)) {
        e.drawSelectLine(e.cacheObj.cache.lines[t], "select")
      } else {
        t.forEach(item01 => {
            e.drawSelectLine(e.cacheObj.cache.lines[item01], "select")
        })
      }
  }
  ,
  m.fn.clearLine = function() {
      var t = this;
      a.remove(h(t.elem, "#g-select"))
    //   a.css(h("#g-bg"), "display", "none")
  }
  ,
  m.fn._updateMarker = function(t) {
      var e = this
        , n = e.cacheObj.getStationWidth(t)
        , i = e.markerMap[t]
        , r = e.status.allScale;
      if (t) {
          var s = document.getElementById(t)
            , o = a.offset(s).left
            , c = a.offset(s).top
            , l = h(e.elem, ".overlays")
            , u = parseInt(a.css(l, "left")) || 0
            , p = parseInt(a.css(l, "top")) || 0
            , d = o + n * r / 2 - u + i.opts.offset.x * r
            , f = c + n * r / 2 - p + i.opts.offset.y * r;
          a.css(i.elem, {
              top: f + "px",
              left: d + "px"
          })
      }
  }
  ,
  m.fn.updateOverlays = function(t, e) {
      a.css(this.overlays, {
          left: t + "px",
          top: e + "px"
      })
  }
  ,
  m.fn.clearOverlays = function() {
      var t = this;
      for (var e in t.markerMap)
          t.markerMap.hasOwnProperty(e) && t.clearMarker(e);
      t.closeTip(),
      t.clearRoute(),
      t.markerMap = {}
  }
  ,
  m.fn.initVarieties = function() {
      var t = this;
      t.currLines = {},
      t.w = document.documentElement.clientWidth,
      t.h = document.documentElement.clientHeight,
      t.font_size = 12,
      t.label_angle = {
          0: [0, -1],
          1: [1, -1],
          2: [1, 0],
          3: [1, 1],
          4: [0, 1],
          5: [-1, 1],
          6: [-1, 0],
          7: [-1, -1]
      },
      t.specailPhone = !1,
      t.sortline = null,
      t.ns_svg = r.svg.ns_svg,
      t.nearId = null,
      t.svgReady = !1,
      t.opentip = !1,
      t.markerMap = {}
  }
  ,
  m.fn.resetAll = function() {
      var t = this;
      t.clearOverlays(),
      t.initVarieties(),
      p.resetAll()
  }
  ,
  m.fn.initDraws = function() {
      var t = this
        , e = t.elem
        , n = t.opts;
      t.subwayBox = s(e, n, t),
      t.lines = o(e, n, t),
      t.stations = c(e, n, t),
      t.text = l(e, n, t)
  }
  ,
  m.fn.init = function() {
      var t = this
        , e = t.elem;
      t.subway_svg = h(e, "#subwaySvg"),
      t.overlays = h(t.subway_svg, ".overlays"),
      t.initVarieties(),
      t.initDraws(),
      p.init(),
      a.css(h(e, "#drag_handle"), "height", t.h)
  }
  ,
  t.exports = function(t, e, n) {
      return new m(t,e,n)
  }
}
, function(t, e, n) {
  var i = n(18);
  t.exports = i("assets/tpl/tip", function(t, e) {
      "use strict";
      var n = this
        , i = (n.$helpers,
      n.$escape)
        , a = t.id
        , r = t.content
        , s = n.$string
        , o = t.name
        , c = "";
      return c += '<div class="subway-tip subway-entity tip_wrap_out ust" data-id="',
      c += i(a),
      c += '"> ',
      r ? (c += " ",
      c += s(r),
      c += " ") : (c += ' <div class="tip_wrap"> <div class="tip_bady"> <div class="tip_name_detail"> <span class="tip_name" id="tip_name">',
      c += i(o),
      c += '</span>  </div> <div class="tip_route"> <div class="tip_route_btn tip_route_start ust" data-type="start">设为起点</div> <div class="tip_route_btn tip_route_end ust" data-type="end">设为终点</div> </div> </div> <div class="tip_footer"> </div> </div> '),
      c += " </div>",
      new String(c)
  })
}
, function(t, e, n) {
  var i = n(20)
    , a = n(31)
    , r = n(16)
    , s = r.svg
    , o = n(22)
    , c = (i.qs,
  function(t, e, n) {
      var a = this;
      a.elem = t,
      a.opts = e,
      i.extend(!0, a, n)
  }
  );
  c.prototype.drawBg = function(t) {
      var e = this
        , n = document.getElementById("svg-g")
        , i = document.createElementNS(e.ns_svg, "g");
      i.setAttribute("id", "g-bg"),
      n.appendChild(i);
      var a = document.createElementNS(e.ns_svg, "rect");
      a.setAttribute("id", "select_bg"),
      a.setAttribute("x", t.min_x - 50),
      a.setAttribute("y", t.min_y - 50),
      a.setAttribute("width", 3e3),
      a.setAttribute("height", 3e3),
      i.appendChild(a)
  }
  ,
  c.prototype.drwSwBox = function(t) {
      var e = this
        , n = e.opts
        , i = n.width
        , a = n.height
        , r = e.subway_svg
        , s = document.createElementNS(e.ns_svg, "svg");
      s.setAttribute("class", "subway-content"),
      s.setAttribute("id", "subway-svg"),
      s.setAttribute("adcode", t.id),
      s.setAttribute("adcode", t.id),
      s.style.width = i + "px",
      s.style.height = a + "px",
      s.setAttribute("width", i + "px"),
      s.setAttribute("height", a + "px"),
      r.appendChild(s),
      e.createSVGDefs(s);
      var c = document.createElementNS(e.ns_svg, "g");
      setTimeout(function() {
          s.style.left = -i / 2 + e.w / 2 + "px",
          s.style.top = -a / 2 + e.h / 2 + "px",
          c.setAttribute("id", "svg-g"),
          c.setAttribute("class", "svg-g");
          var t = o.getInitTransformOffset(i, a);
          c.setAttribute("transform", "translate(" + t.x + ", " + t.y + ") scale(1)"),
          s.appendChild(c)
      }, 0)
  }
  ,
  c.prototype.createImg = function(t, e) {
      var n = document.createElementNS(s.ns_svg, "image");
      return n.setAttribute("id", t),
      n.setAttribute("width", s.stationWidth),
      n.setAttribute("height", s.stationHeight),
      n.setAttributeNS(s.ns_xlink, "xlink:href", e),
      n
  }
  ,
  c.prototype.createSVGDefs = function(t) {
      var e = document.createElementNS(s.ns_svg, "defs");
      e.appendChild(this.createImg("normalStation", a.normalCircle)),
      e.appendChild(this.createImg("transferStation", a.transfer)),
      t.appendChild(e)
  }
  ,
  t.exports = function(t, e, n) {
      return new c(t,e,n)
  }
}
, function(t, e) {
  var n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NjgyNTVGRUI4NDExMUU1OTE5NkRCOEUxRTE0MjAwRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTFGOTNDMUY4NDAxMUU1ODlGRUFEQTNGNzJGODg4NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTFGOTNDMEY4NDAxMUU1ODlGRUFEQTNGNzJGODg4NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmYyMzcyNzhhLWQ5NzEtNGZlZS1hOTQxLTVmZmQzYTcxNDcxZCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjNmNkZWI3LTQwYWEtMTE3OS05YjhhLWE3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"
    , i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWNmNjhmZS1jNzM1LTRjNjktODM4Yi1jMWQ1OTYzNDA4NDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODJDNjA0N0U0NEJBMTFFNkE1OTlDNTg1NDM3OThCNkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODJDNjA0N0Q0NEJBMTFFNkE1OTlDNTg1NDM3OThCNkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YWNmNjhmZS1jNzM1LTRjNjktODM4Yi1jMWQ1OTYzNDA4NDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NWFjZjY4ZmUtYzczNS00YzY5LTgzOGItYzFkNTk2MzQwODQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vlNcgAAABLhJREFUeNrsnT9oW0ccx09tbC8eGrRpMDIBD9ZQLekgTCCjMaElS6KtdGu8tBhC8NChUweDPSUeQsggQ7PFtJ4DwWhIBrdQezAURAZtwgZriZ3w8vuh5+IS+3RPetL7c58PfKcn6/3uPrzT0+nduRAEgYH88gVdgGBAMCAYEAwIBgQDghEMCAYEA4IBwYBgQDCCAcGAYEAwIBgQDAgGBCMYEAwIBgQDgmEAriVdQKFQiPstb0i+lsxL5iRlSUlSlEyHr+lKOpK2pCU5lBxI/pb8G+VkaV+8V0i6wJgE35TcltyS1CTXB3yfI0lT8lrySvIWwckJnpJ8J7kjWZJ8FXNpx5IdyR+Sl5L3CB6f4Pthvh1TmduS38MgeISCdfj9QfK95Msxl/pR8lzyLBzGERyjYH3RA8mPkkrCfbYveSJ53POL4GEFz0h+lvyUsr7bkKxL/71D8OCCq5JHknsp7b8Xkt+kD/9CcHTB30h+Ce+QI1GpVMzCwoKp1WqmXC6bUqlkisWimZ7ufQ3udrum0+mYdrttWq2WaTabZnd31+zv7w/SBL3T/lX68U0qDavgJGO5cv/U8qKkXq8HjUYjGBT9W32PqOcNa60m3ZeX9m8KBc+EX0ecO3hxcTHY29sL4kLfS98zomSteQbBdsE6Xq+7durs7Gywvb0djAp9bz1HBMnr5x97CL5c8LJrZ66srAQnJyfBqNFz6LkiSF5G8OWCdRLjH5dOXFtbC8aNntNRsLahhuDPBT916cDNzc0gKfTcjpKfIvj/gnVe+UMar9wBr2Rty30E9wRPhb/W9P3MTQuOn8napikE92ap+t4tj+OGKsqNl+Pd9b2k+zcNj+zc6Tvpu7Hx3yxUGtBatKY42pbrmazwSYyjfpMYacVhMkTbdtPbIVp42G+Yi3OGKm60Nodh+qHPQ/Qt28F6vW6q1Wpqf4rT2rTGYdo4ahITXCgUboSTG1eytLRk0o5DjbWwrX59Bgt3bUNbpVIJsoLW2meYvuvjED1vO6i/52YFh1rnvRuiTe+h9KvHtVotM4Idap3zUXDZerBczoxgh1rLPgouWQ+WSpkR7FBryUfBRevBYjEzgh1qTawxiT10J18dzoxl8dvp6amZmJjIhOCzszMzOTlpe8kH6ecJ365gyLngrvVgt5uZTnSoteuj4I71YKeTGcEOtXZ8FNy2Hmy3MyPYoda2j4Jb1oOtVmYEO9Ta8lHwoe2gLifJCg61Hvoo+MB2UNcKZQWHWg98FKwbnhxddVAXgm1tbaVertbYZ9HaUdhWvwTLF3/dzcY6tu3s7KResEONzbCtiXU0j+zwyM7I0K2Kjm0vWF1dTe3V61DbcdhG4+UVHF7FjX5XwShXEA6z8tDh6m3w4DsPvrN0xbB0hcVnLD5j+SjLR1kAzgJwtnBgCwc2YUEw2yh5LVhhI7SYwlaGOd/KkM1Ih4PNSIcUfP6ZzHbCORZ8fnfNhuA5FnxxMoQt/XMs+OLcNf+UI8eCz3+F4t/q5FjwRfjHWDkXfBH+tV2aBMNoYfkoggHBgGBAMCAYEAwIRjAgGBAMCAYEA4IBwQgGBAOCAcGAYEAwIBgQjGBAMCAYEAwIBgQDgn3jkwADAMI8mSZEAjHSAAAAAElFTkSuQmCC";
  t.exports = {
      transfer: n,
      normalCircle: i
  }
}
, function(t, e, n) {
  var i = n(20)
    , a = function(t, e, n) {
      var a = this;
      a.elem = t,
      a.opts = e,
      i.extend(!0, a, n)
  };
  a.prototype.drwSwLines = function(t, e) {
      var n = this
        , i = document.getElementById("svg-g")
        , a = document.createElementNS(n.ns_svg, "g");
      if (a.setAttribute("id", "g-line-" + e),
      "normal" == e) {
          i.appendChild(a);
          for (var r in t)
              if (t.hasOwnProperty(r)) {
                  var s = t[r].nc
                    , o = "M" + s[0].split(" ").join(",")
                    , c = o + "L" + s.join("L")
                    , l = document.createElementNS(n.ns_svg, "path");
                  l.setAttribute("id", "line-" + t[r].ls),
                  l.setAttribute("name", t[r].ls),
                  l.setAttribute("stroke", "#" + t[r].cl),
                  l.setAttribute("d", c),
                  a.appendChild(l)
              }
      } else if ("select" == e) {
          var u = document.getElementById("g-select");
          u.appendChild(a);
          var s = t.c
            , o = "M" + s[0].split(" ").join(",")
            , c = o + "L" + s.join("L")
            , l = document.createElementNS(n.ns_svg, "path");
          l.setAttribute("id", "line-" + t.ls),
          l.setAttribute("name", t.ls),
          l.setAttribute("stroke", "#" + t.cl),
          l.setAttribute("d", c),
          a.appendChild(l)
      } else if ("nav" == e) {
          var p = document.getElementById("g-nav");
          p.appendChild(a);
          for (var r in t) {
              var s = t[r].c
                , o = "M" + s[0].split(" ").join(",")
                , c = o + "L" + s.join("L")
                , l = document.createElementNS(n.ns_svg, "path");
              l.setAttribute("id", "line-" + t[r].ls),
              l.setAttribute("name", t[r].ls),
              l.setAttribute("stroke", "#" + t[r].cl),
              l.setAttribute("d", c),
              a.appendChild(l)
          }
      }
  }
  ,
  t.exports = function(t, e, n) {
      return new a(t,e,n)
  }
}
, function(t, e, n) {
  var i = n(20)
    , a = n(16)
    , r = a.svg
    , s = function(t, e, n) {
      var a = this;
      a.elem = t,
      a.opts = e,
      i.extend(!0, a, n)
  };
  s.prototype.drwSwStations = function(t, e) {
      var n = this
        , a = n.opts
        , s = document.getElementById("svg-g")
        , o = document.createElementNS(n.ns_svg, "g");
      if (o.setAttribute("id", "g-station-" + e),
      "normal" == e)
          s.appendChild(o);
      else if ("select" == e) {
          var c = document.getElementById("g-select");
          c.appendChild(o)
      } else if ("nav" == e) {
          var l = document.getElementById("g-nav");
          l.appendChild(o)
      }
      var u, p, h = t.stations || t.st;
      i.each(h, function(t, e) {
        if (e.r.indexOf('|') === -1) {
            if (!['110100023076', '900000028907', '900000062236', '900000099933'].includes(e.r)) return;
        } else {
            var arr = e.r.split('|');
            let hasLine = false;
            arr.forEach(item => {
                if (['110100023076', '900000028907', '900000062236', '900000099933'].includes(item)) {
                    hasLine = true;
                }
            })
            if (!hasLine) return;
        }
        // && 
          if (e && "1" == e.su)
              switch (a.theme) {
              case "colorful":
                  if ("0" == e.t) {
                      u = document.createElementNS(n.ns_svg, "circle"),
                      u.setAttribute("cx", parseInt(e.p.split(" ")[0])),
                      u.setAttribute("cy", parseInt(e.p.split(" ")[1])),
                      u.setAttribute("r", "5");
                      for (var i, s = e.r, c = s.split("|"), l = 0; l < c.length; l++)
                          if (n.cacheObj.cache.lines[c[l]]) {
                              i = n.cacheObj.cache.lines[c[l]].cl || "#000";
                              break
                          }
                      u.setAttribute("stroke", "#" + i)
                  } else
                      a.client ? (u = document.createElementNS(n.ns_svg, "image"),
                      p = "./app/img/transfer-station.png",
                      u.setAttribute("width", r.stationWidth),
                      u.setAttribute("height", r.stationHeight)) : (u = document.createElementNS(n.ns_svg, "use"),
                      p = "#transferStation"),
                      u.setAttribute("x", parseInt(e.p.split(" ")[0]) - r.stationWidth / 2),
                      u.setAttribute("y", parseInt(e.p.split(" ")[1]) - r.stationHeight / 2),
                      u.setAttributeNS(r.ns_xlink, "xlink:href", p);
                  o.appendChild(u);
                  var h = document.createElementNS(n.ns_svg, "circle");
                  h.setAttribute("id", e.si),
                  h.setAttribute("class", "station_obj subway-entity subway-station-outside"),
                  h.setAttribute("cx", parseInt(e.p.split(" ")[0])),
                  h.setAttribute("cy", parseInt(e.p.split(" ")[1])),
                  h.setAttribute("line_id", e.r.split("|")[0]),
                  h.setAttribute("station_id", e.si),
                  h.setAttribute("r", "13"),
                  o.appendChild(h);
                  break;
              case "normal":
              default:
                  a.client ? (u = document.createElementNS(n.ns_svg, "image"),
                  p = "0" == e.t ? "./app/img/circle-s.png" : "./app/img/transfer-station.png",
                  u.setAttribute("stroke", "#000"),
                  u.setAttribute("width", r.stationWidth),
                  u.setAttribute("height", r.stationHeight)) : (u = document.createElementNS(n.ns_svg, "use"),
                  p = "0" == e.t ? "#normalStation" : "#transferStation"),
                  u.setAttribute("id", e.si),
                  u.setAttribute("class", "station_obj subway-entity"),
                  u.setAttribute("line_id", e.r.split("|")[0]),
                  u.setAttribute("x", parseInt(e.p.split(" ")[0]) - r.stationWidth / 2),
                  u.setAttribute("y", parseInt(e.p.split(" ")[1]) - r.stationHeight / 2),
                  u.setAttributeNS(r.ns_xlink, "xlink:href", p),
                  o.appendChild(u)
              }
      })
  }
  ,
  t.exports = function(t, e, n) {
      return new s(t,e,n)
  }
}
, function(t, e, n) {
  var i = n(20)
    , a = function(t, e, n) {
      var a = this;
      a.elem = t,
      a.opts = e,
      i.extend(!0, a, n)
  };
  a.prototype.drwSwLinesName = function(t, e) {
      var n = this
        , i = t.linesNamePos
        , a = t.lines ? t.lines : t
        , r = document.getElementById("svg-g")
        , s = document.createElementNS(n.ns_svg, "g");
      if (s.setAttribute("id", "g-line-name"),
      "normal" == e)
          r.appendChild(s);
      else if ("select" == e) {
          var o = document.getElementById("g-select");
          o.appendChild(s)
      }
      var obj = {};
      Object.keys(i).forEach(item => {
        if (['110100023076', '900000028907', '900000062236', '900000099933'].includes(item)) {
            obj[item] = i[item];
        }
      })
      for (var c in obj)
          if (null != i[c])
              for (var l = 0; l < i[c].length; l++) {
                  var u = a[c] ? a[c] : a
                    , p = u.ln
                    , h = p.length * n.font_size + 6
                    , d = 20
                    , f = u.cl
                    , m = parseInt(i[c][l].split(" ")[0])
                    , g = parseInt(i[c][l].split(" ")[1]) - 15
                    , v = (document.getElementById("g-line-name"),
                  document.createElementNS(n.ns_svg, "g"));
                  v.setAttribute("transform", "translate(" + m + "," + g + ")"),
                  v.setAttribute("class", "line_name subway-entity"),
                  v.setAttribute("lineid", c);
                  var b = document.createElementNS(n.ns_svg, "rect");
                  b.setAttribute("rx", 3),
                  b.setAttribute("ry", 3),
                  b.setAttribute("width", h),
                  b.setAttribute("height", d),
                  b.setAttribute("fill", "#" + f),
                  v.appendChild(b);
                  var y = document.createElementNS(n.ns_svg, "text");
                  y.setAttribute("class", "line_name_txt"),
                  y.setAttribute("lineid", c),
                  y.setAttribute("height", 20),
                  y.setAttribute("x", h / 2),
                  y.setAttribute("y", d / 2),
                  y.setAttribute("dy", 4),
                  y.setAttribute("fill", "#fff"),
                  y.setAttribute("text-anchor", "middle"),
                  y.textContent = p,
                  v.appendChild(y),
                  s.appendChild(v)
              }
  }
  ,
  a.prototype.drwSwStationsName = function(t, e, n, a) {
      var r = this
        , s = t.stations || t.st || t
        , o = r.elem.find("#g-station-name-normal");
      i.each(s, function(t, e) {
        if (e.r.indexOf('|') === -1) {
            if (!['110100023076', '900000028907', '900000062236', '900000099933'].includes(e.r)) return;
        } else {
            var arr = e.r.split('|');
            let hasLine = false;
            arr.forEach(item => {
                if (['110100023076', '900000028907', '900000062236', '900000099933'].includes(item)) {
                    hasLine = true;
                }
            })
            if (!hasLine) return;
        }
          if (e && "1" == e.su && "2" != e.t) {
              var r = document.createElement("span");
              i.addClass("g-name"),
              i.attr(r, "id", "name-" + e.si),
              i.attr(r, "name", e.n),
              r.innerText = e.n;
              var s, c, l, u = e.lg;
              s = "0" == u || "4" == u ? "middle" : "left",
              i.css(r, "text-algin", s),
              "0" == u || "4" == u ? c = parseInt(e.p.split(" ")[0]) - 18 : "4" == u ? c = parseInt(e.p.split(" ")[0]) - 23 : "5" == u || "6" == u || "7" == u ? c = parseInt(e.p.split(" ")[0]) - e.n.length * n - 10 : "1" != u && "2" != u && "3" != u || (c = parseInt(e.p.split(" ")[0]) + 10),
              "2" == u || "6" == u ? l = parseInt(e.p.split(" ")[1]) + 5 - 13 : "0" == u || "1" == u || "7" == u ? l = parseInt(e.p.split(" ")[1]) - 10 - 13 : "3" != u && "4" != u && "5" != u || (l = parseInt(e.p.split(" ")[1]) + a - 13),
              i.css(r, {
                  left: c,
                  top: l
              }),
              o.appendChild(r)
          }
      })
  }
  ,
  a.prototype._drwSwStationsName = function(t, e, n, a) {
      var r = this
        , s = t.stations || t.st || t
        , o = document.getElementById("svg-g")
        , c = document.createElementNS(r.ns_svg, "g");
      if (c.setAttribute("id", "g-station-name-" + e),
      "normal" == e)
          o.appendChild(c);
      else if ("select" == e) {
          var l = document.getElementById("g-select");
          l.appendChild(c)
      } else if ("nav" == e) {
          var u = document.getElementById("g-nav");
          u.appendChild(c)
      }
      i.each(s, function(t, e) {
            if (e.r.indexOf('|') === -1) {
                if (!['110100023076', '900000028907', '900000062236', '900000099933'].includes(e.r)) return;
            } else {
                var arr = e.r.split('|');
                let hasLine = false;
                arr.forEach(item => {
                    if (['110100023076', '900000028907', '900000062236', '900000099933'].includes(item)) {
                        hasLine = true;
                    }
                })
                if (!hasLine) return;
            }
          if (e && "1" == e.su && "2" != e.t) {
              var i = document.createElementNS(r.ns_svg, "text");
              i.setAttribute("id", "name-" + e.si),
              i.setAttribute("class", "station-name subway-entity"),
              i.setAttribute("name", e.n),
              i.textContent = e.n;
              var s, o, l, u = e.lg;
              s = "0" == u || "4" == u ? "middle" : "left",
              i.setAttribute("text-anchor", s),
              "0" == u || "4" == u ? o = parseInt(e.p.split(" ")[0]) : "5" == u || "6" == u || "7" == u ? o = parseInt(e.p.split(" ")[0]) - e.n.length * n - 10 : "1" != u && "2" != u && "3" != u || (o = parseInt(e.p.split(" ")[0]) + 10),
              "2" == u || "6" == u ? l = parseInt(e.p.split(" ")[1]) + 5 : "0" == u || "1" == u || "7" == u ? l = parseInt(e.p.split(" ")[1]) - 10 : "3" != u && "4" != u && "5" != u || (l = parseInt(e.p.split(" ")[1]) + a),
              i.setAttribute("x", o),
              i.setAttribute("y", l),
              c.appendChild(i)
          }
      })
  }
  ,
  t.exports = function(t, e, n) {
      return new a(t,e,n)
  }
}
, function(t, e, n) {
  var i = n(20)
    , a = {
      customClass: "",
      width: 24,
      height: 33,
      offset: {
          x: 0,
          y: 0
      },
      type: "",
      cnt: "<div class='img-c'></div>"
  }
    , r = function(t, e) {
      var n = this;
      n.wrapper = i.qs(t, ".overlays"),
      n.opts = i.extend({}, a, e),
      n.id = e.id,
      n.init()
  };
  r.prototype._addCustomAttr = function(t) {
      var e = this
        , n = e.opts
        , a = e.elem;
      n.cnt && (a.innerHTML = n.cnt),
      n.customClass && i.addClass(a, n.customClass),
      n.type && i.addClass(a, n.type),
      i.css(a, {
          width: n.width,
          height: n.height,
          top: t.top + n.offset.y + "px",
          left: t.left + n.offset.x + "px",
          "margin-left": -parseInt(n.width) / 2,
          "margin-top": -parseInt(n.height)
      })
  }
  ,
  r.prototype.createDom = function(t) {
      var e = this;
      i.append(e.wrapper, "<div id='marker-" + e.id + "' class='subway-marker subway-entity'></div>"),
      e.elem = i.qs(e.wrapper, "#marker-" + e.id),
      e._addCustomAttr(t)
  }
  ,
  r.prototype.destory = function() {
      var t = this;
      i.remove(t.elem)
  }
  ,
  r.prototype.init = function() {
      var t = this
        , e = t.opts || {};
      t.createDom(e.pos || {})
  }
  ,
  t.exports = function(t, e) {
      return new r(t,e)
  }
}
, function(t, e, n) {
  var i = n(20)
    , a = {
      type: "circle",
      r: 7,
      customClass: "",
      offset: {
          x: 0,
          y: 0
      }
  }
    , r = "station_obj subway-entity"
    , s = {
      getAttr: function(t) {
          var e = {};
          if ("circle" == t.tagName) {
              var n = 0 | t.getAttribute("r");
              e.x = (0 | t.getAttribute("cx")) - n,
              e.y = (0 | t.getAttribute("cy")) - n
          } else
              e.x = 0 | t.getAttribute("x"),
              e.y = 0 | t.getAttribute("y");
          return e.id = t.getAttribute("id"),
          e.lineId = t.getAttribute("line_id"),
          e
      },
      createNode: function(t, e, n) {
          var a = document.createElementNS(this.ns_svg, n.type);
          if ("circle" == n.type) {
              var s = 0 | i.width(t)
                , o = 0 | i.height(t);
              a.setAttribute("cx", e.x + s / 2),
              a.setAttribute("cy", e.y + o / 2),
              a.setAttribute("r", n.r)
          } else
              a.setAttribute("x", e.x),
              a.setAttribute("y", e.y);
          return a.setAttribute("class", r + (n.customClass ? " " + n.customClass : "")),
          a.setAttribute("line_id", e.lineId),
          a.setAttribute("data-id", e.id),
          a
      },
      addNode: function(t, e) {
          var n = this
            , r = i.extend(!0, a, e)
            , s = document.getElementById(t);
          if (s) {
              var o = n.getAttr(s)
                , c = n.createNode(s, o, r);
              n.nodeMap[t] = c;
              var l = s.parentNode
                , u = s.nextSibling;
              return l.insertBefore(c, u),
              c
          }
          return null
      },
      removeNode: function(t) {
          var e = this
            , n = e.nodeMap[t];
          return n && (i.remove(n),
          delete e.nodeMap[t]),
          t
      },
      removeAll: function() {
          var t = this
            , e = t.nodeMap;
          for (var n in e)
              e.hasOwnProperty(n) && t.removeNode(n)
      },
      resetAll: function() {
          this.removeAll()
      },
      init: function(t, e) {
          var n = this;
          this.ns_svg = "http://www.w3.org/2000/svg",
          n.elem = t,
          n.opts = e,
          n.nodeMap = {}
      }
  };
  t.exports = s
}
, function(t, e, n) {
  var i = n(22)
    , a = n(20)
    , r = a.width(window)
    , s = a.height(window)
    , o = document.documentElement.clientWidth
    , c = document.documentElement.clientHeight
    , l = function(t) {
      var e = this
        , n = i.getInitTransformOffset(t.width, t.height);
      e.originTransform = {
          translate: {
              x: n.x,
              y: n.y
          },
          scale: 1
      },
      e.opts = a.extend(!0, {}, t),
      e.w = document.documentElement.clientWidth,
      e.h = document.documentElement.clientHeight,
      e.init()
  };
  l.fn = l.prototype,
  l.fn.updateTransform = function(t, e, n) {
      var i = this;
      i.transform.translate.x = t,
      i.transform.translate.y = e,
      i.transform.scale = n
  }
  ,
  l.fn.updateTransformState = function(t, e, n) {
      var i = this;
      i.transformState.translate.x = t,
      i.transformState.translate.y = e,
      i.transformState.scale = n,
      i.allScale = n
  }
  ,
  l.fn.dragSvg = function(t) {
      var e = this;
      return (e.transform.translate.x != t.deltaX || e.transform.translate.y != t.deltaY) && (e.transform.translate.x = t.deltaX,
      e.transform.translate.y = t.deltaY,
      !0)
  }
  ,
  l.fn.dragEndSvg = function(t) {
      var e = this;
      e.transformState.translate.x = e.transformState.translate.x + t.deltaX,
      e.transformState.translate.y = e.transformState.translate.y + t.deltaY
  }
  ,
  l.fn.scaleSvg = function(t) {
      var e, n = this, i = n.opts, a = 1, r = t.center;
      "pinchstart" == t.type && (a = n.transform.scale || 1),
      n.realCenter = {
          x: Number(r.x) - Number(n.svgOffset.left),
          y: Number(r.y) - Number(n.svgOffset.top)
      };
      var s = t.scale;
      return s = s > i.maxTmpScale ? i.maxTmpScale : s,
      s = n.transformState.scale * s < i.minTmpScale ? i.minTmpScale / n.transformState.scale : s,
      e = a * s,
      (n.transformOrigin != r || n.transform.scale != e) && (n.transformOrigin = r,
      n.transform.scale = e,
      r)
  }
  ,
  l.fn.scaleEndSvg = function(t, e) {
      var n, i = this, a = i.opts, o = i.transformState.translate.x, c = i.transformState.translate.y, l = i.transformState.scale, u = n = t * l;
      u > a.maxScale && (u = a.maxScale),
      u < a.minScale && (u = a.minScale),
      t = u / l;
      var p = i.realCenter.x
        , h = i.realCenter.y;
      e && (p = r / 2,
      h = s / 2);
      var d = (Number(t) - 1) * (Number(p) - Number(o))
        , f = (Number(t) - 1) * (Number(h) - Number(c))
        , m = o - d
        , g = c - f;
      return i.updateTransformState(m, g, u),
      (n > a.maxScale || n < a.minScale) && (n > a.maxScale ? a.maxScale / l : a.minScale / l)
  }
  ,
  l.fn.setMove = function(t) {
      var e = this
        , n = t.x
        , i = t.y
        , a = e.transformState.translate.x
        , r = e.transformState.translate.y
        , s = e.transformState.scale
        , l = n - o / 2
        , u = i - c / 2;
      return a -= l,
      r -= u,
      {
          x: l,
          y: u,
          translate_x: a,
          translate_y: r,
          scale: s
      }
  }
  ,
  l.fn.resetStatus = function() {
      var t = this
        , e = t.opts;
      t.realCenter = {
          x: r / 2,
          y: s / 2
      },
      t.svgOffset = {
          left: -e.width / 2 + t.w / 2,
          top: -e.height / 2 + t.h / 2
      },
      t.transform = {
          translate: {
              x: 0,
              y: 0
          },
          scale: 1
      },
      t.transformState = a.extend(!0, {}, t.originTransform),
      t.allScale = 1,
      t.transformOrigin = {
          x: 0,
          y: 0
      }
  }
  ,
  l.fn.init = function() {
      var t = this;
      t.resetStatus()
  }
  ,
  t.exports = function(t) {
      return new l(t)
  }
}
, function(t, e, n) {
  var i = n(16)
    , a = n(20)
    , r = n(22)
    , s = n(21)
    , o = a.qs
    , c = {
      route: function(t, e, n) {
          var i = this
            , r = i.cacheObj.cache
            , s = i.draw;
          r.stations[t] && r.stations[e] && (a.remove(o(i.elem, "#g-select")),
        //   a.css(o("#g-bg"), "display", "none"),
          s.clearRoute(),
          i.cacheObj.navDrwData = {
              linesbar: [],
              lines: {},
              stations: {}
          },
          "undefined" != typeof n.closeBtn && (i.closeBtn = n.closeBtn),
          i.getRouteData(t, e, i.routeCbk))
      },
      getRouteData: function(t, e, n) {
          var o = this
            , c = o.cacheObj.cache
            , l = c.stations[t]
            , u = c.stations[e]
            , p = {
              x1: l.sl.split(",")[0],
              y1: l.sl.split(",")[1],
              x2: u.sl.split(",")[0],
              y2: u.sl.split(",")[1],
              poiid1: l.poiid,
              poiid2: u.poiid,
              uuid: r.UUID(),
              type: "6",
              Ver: 3
          }
            , h = a.stringify(p);
          r.fetch({
              url: i.staticUrl.route + h,
              onSuccess: function(t) {
                  o.routeCbk(t)
              },
              onError: function() {
                  s.trigger(o.elem, i.events.routeComplete, o.errorInfo)
              },
              format: "json",
              method: "get"
          })
      },
      routeWithData: function(t) {
          var e = this;
          if (t) {
              var n = (t.start,
              t.end,
              t.routedata);
              return "undefined" != typeof t.closeBtn && (e.closeBtn = t.closeBtn),
              e.routeCbk(n),
              e.cacheObj.navDrwData
          }
      },
      routeCbk: function(t) {
          var e = this
            , n = t
            , r = e.ctrl;
          if ("1" == n.count) {
              e.pathData = n,
              e.createNavDrwData(n),
              a.css(o("#g-bg"), "display", "block"),
              e.closeBtn && a.removeClass(o(e.elem, ".route_close_btn"), "hidden"),
              e.draw.drawNavLine(e.cacheObj.navDrwData);
              var c = o("#g-nav");
              r.setFitview(c);
              var l = r.getNavCenter();
              r.setCenter(l),
              e.routeState = !0,
              e.successInfo.data = n || {},
              s.trigger(e.elem, i.events.routeComplete, e.successInfo)
          } else
              e.draw.clearOverlays(),
              e.routeState = !1,
              e.successInfo.status = 2,
              s.trigger(e.elem, i.events.routeComplete, e.successInfo)
      },
      createNavDrwData: function(t) {
          for (var e = this, n = e.cacheObj, i = n.cache, r = t.buslist[0], s = r.segmentlist, o = i.navlines, c = [], l = 0; l < s.length; l++) {
              var u = s[l].busid
                , p = s[l].startname
                , h = s[l].endname;
              c = "" != s[l].passdepotname ? s[l].passdepotname.split(" ") : [],
              c.unshift(p),
              c.push(h);
              for (var d = a.extend(!0, {}, o[u]), f = {}, m = 0; m < d.st.length; m++)
                  f[d.st[m].n] = d.st[m];
              for (var g = 0; g < c.length; g++)
                  n.navDrwData.stations[f[c[g]].si] = f[c[g]];
              var v = n.sortStation(c, d, u)
                , b = n.setLineCoords(v, d);
              d.c = b,
              n.navDrwData.lines[d.ls] = d,
              n.navDrwData.linesbar.push(d)
          }
      },
      resetStatus: function() {
          var t = this;
          t.routeState = !1,
          t.pathData = null,
          t.successInfo = {
              status: 1,
              info: "success",
              data: {}
          }
      },
      init: function(t, e, n) {
          var i = this;
          i.elem = t,
          i.cacheObj = e.cacheObj,
          i.draw = e.draw,
          i.ctrl = e.ctrl,
          i.closeBtn = !0,
          i.errorInfo = {
              status: 0,
              info: "error",
              data: {}
          },
          i.successInfo = {
              status: 1,
              info: "success",
              data: {}
          },
          i.opts = n
      }
  };
  t.exports = c
}
, function(t, e, n) {
  var i = n(20)
    , a = (n(21),
  i.qs)
    , r = function(t, e) {
      function n() {
          o.id && c.id && (i.route(o.id, c.id, {}),
          o = {},
          c = {})
      }
      var i = t
        , r = e && e.adcode || location.hash.replace(/#/, "") || 1100;
      i.setAdcode(r);
      var s = e.isPC;
      i.event.on("subway.complete", function(t, e) {});
      var o = {}
        , c = {};
      i.event.on("station.touch", function(t, e) {
          var n = e.id;
          i.stopAnimation(),
          i.addInfoWindow(n, {});
          var a = i.getStCenter(n);
          s || i.setCenter(a)
      }),
      i.event.on("stationName.touch", function(t, e) {
          i.stopAnimation();
          var n = e.id;
          i.addInfoWindow(n, {});
          var a = i.getStCenter(n);
          i.setCenter(a)
      }),
      i.event.on("startStation.touch", function(t, e) {
          i.stopAnimation(),
          i.clearInfoWindow(),
          i.setStart(e.id, {}),
          o = e,
          n()
      }),
      i.event.on("endStation.touch", function(t, e) {
          i.stopAnimation(),
          i.clearInfoWindow(),
          i.setEnd(e.id, {}),
          c = e,
          n()
      }),
      i.event.on("lineName.touch", function(t, e) {
          i.showLine(e.id);
          var n = a("#g-select");
          i.setFitView(n);
          var r = i.getSelectedLineCenter();
          i.setCenter(r)
      }),
      i.event.on("subway.touch", function() {
          i.clearInfoWindow()
      }),
      i.event.on("subway.routeComplete", function(t, e) {})
  };
  t.exports = r
}
]);
