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
  t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABACAYAAABhspUgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjEzREIyRTU0RkUwMTFFNkIzRDg4NDVCNTZDQjM5QzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjEzREIyRTY0RkUwMTFFNkIzRDg4NDVCNTZDQjM5QzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMTNEQjJFMzRGRTAxMUU2QjNEODg0NUI1NkNCMzlDMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMTNEQjJFNDRGRTAxMUU2QjNEODg0NUI1NkNCMzlDMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Phdfgg8AAAd7SURBVHjaxJpfTFtVHMfPuS0tpdxtQKHA4oQF+Td0MuKiZtur0RgT9QHdP+cDYcYYZ6YZ4AMPc//ior6YzezFLJtxGk2myXyaD9setiki2WDAENg0ozAQoRTaAj3e77095faOtvfe/vsl7W17/5zP/Z3f+f27pSQJad18IOdc8+fP+vr9LxJCNxK2/CShQgmhdpd8AAtMEhaaINRyS/oy7KzN/WX3hQ+uf9XzxaLZMamZk5xH2XZff+BdQm3Nhk/GTRB62Vlr/9LXQa+mFVgGvTN/mgiOev5baVGQ5Is2km+jxLGGkEJHiORQQd63yELk3wWBLMwSMhdkZM4bJJ4p28oFQwt9zrq8/UbAdQE3HRou6BorP6XWaFUFITWPsQicXsFNDPxNydCoWuvBC01lD97pOrFxOmlgZfr9P3K7BGjDBhoFAC16vcp3n4bfGVK2ohitfcjt+2wFXDIVycZfS6TtuMDCvpmdISae51PfVJ8TGXB8npCpOQnY4CrIYYQU5RPizlu54a6+xYipCNS7K/T12m8MA4tHlg95B+lxrVYB6vGRlEipcwVcrW2xmrV5P7ac0A2s1uzT1ZRUlCqa6JsUSDqk3qWYyqiHkD8HWVxNPwJsP8qeCQywm2rYVGo1kbaHxiVtDyjQ9hq6NdBBf4tSptYbBPr9l7gZZAoWgjEwVpVbGRsCFjDFBFZcl92FBQabzRSsFhpjgwEsXWNlH60KDFPgfhbeINOwWmgwKEZrb6eHWd0jwIH+wEFuCvzEbAkfm7Owu4HOaOBPWDXXLqLXvQmBZFvAABZFy7bmxg/vVK4AD/r38TtC1PJln1dmAAvXcvdERQu21vB++Uuxi8rRizs7RCVEskRbiGWBEZ+3l/03PRblKtcVlDGnuIkuO6jha4IFTEOjjDN2UBg0G2J9WJWVlXbDtosBZh8GyMz0lbjHrS3YQRwldlP+eWQkIIduWkXrhXwh9Ap2IEXkCYwR0QMLwTH+idvM6PXVTGC1egcWGyWjlvPZ+fCU6JWQn+mC5QJzWS9uIkKu/owpKB3qckkzP8UIWK1KWWNyYUg2qw7vbiuLO0fjS1TEOWJug6ERrVyJEqtVrsEkWaLmVzQWlt37YC4glufHPU4a0sz1I2wSa9IODLBy4AnDci8Ra5usWClZdBG2KNmKmBL/yW8g1tZ0tczgb4krKyHCZhA9GJ4bqYKcFPDGV7zRQSsqlcXDyBOR6U70GecEDRqHmk2QGx0mBIOiqFRDuYsaKCV3GbZqULz47zjHtEisgtKVIXLPwKiGEet5GggYz1QgsgUk/CdAscX39W6lwjY6ToRNYhXEmpxusxpGFEItBmg0ShAtAQtA7j+RR2DLK26j0TTafNiwEKTCr7JTnwyagkayDRBUCUhUAOsPKPDwn/gNpRaOwbFG7Rca5myCELytnL7H10vpcr3bZYtox4igScLL9ZhRbp6YylVw83+NyC6NbCmbLBTCEeSiWS3zBAXVLloB2rYUXthnBla9thixXUArS86Hm8rGPpWKvRYEkcnJgCkt8ypB0+FIyl9DuyvmEPgpxK8YbsKdSUbL6ZCIdpmlr6W78/soFUDLPIhAy9mWKO1alo7wJjjVtqhYiMotKrMLMFXS2++N2C45m/vGqkaGXpZ8QNg0cJfZED7DmPHGkpH2uKuitadtD2wGn7k7yTSsyu++332ybiRh9xI9AKmsvimnnpJsqhUzDitp9xg56+jQ3R+Wu5j9/kuA5vZsTaOFILTzGdXarS5HiTYnpoTbczo9RxSsZI4wy5iJfMKwe2T50NyA7zj3HKVF9rTCNpWPb4v3cEZfKrLX/y0lweZ0QPcMeFUeYXSrdpFpxaLnoq1k7uLvpS9UU7Lc4JtfJvlrbMRmSa6mRCZ3SwVrr8196Z/Dxb0Jazu9A8jP6h64ryGrw/fNNcl5DuTN3CPk1Yo79D5c1J2dwK4a3fdf5uEbA6YClgpsV8qfhKoFDxrn+71XzNpztPta3demRMOR9pSkjfwaZ5vZzE7ta1t72juNnm8xM6VvT83e5ItwfCpISnUmSTAFLFrFfXle//mHNw0/mDC91JUH5mWDPBImMg21KRhZZEmbhHoRqiOhflPIOWYWNukaRp2OxvMafJ8Sdo3bbeqKLmR2Ur4KVxdPy3yfvS5vXzJ/n0kJcDiUnoml5Yh2pZnQPjfOCrCS9Ld3YrpX0zJ+wwzgHyepGCslwJhmFIpaLfPPYo3tpJ6/x2QMGIIyXKtlWbvSbzu/O/hZqsahJIXCq274ZQ6MXCHeX2KypmGtlrl2eQMkVWJJarFtPpDzPFlcd3fBU+JnpLxr/HphYf22tX7Lhuewv3Dx6rlrl98blT4WFwjU2VLSZGmsal6SjguRTApAJYDH0VDUviyNra/SvbMML3xe7Rici2tk0obxhwtHrJ31+6/INWDf6R1tca6xIL3uGB3Ymo4ZGLhx/lS6Ztdi0iRmhh/esEp2u2obm3m6ZvCKdb5kElNvPXXgnhlbpsnass1zVTz38A9xOsQ4vGOVqQfk/O7iLd5g6XZvMvnE/wIMAHdQDfqU0WLLAAAAAElFTkSuQmCC"
}
, function(t, e) {
  t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABCCAYAAADHTY8oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdDQzQ3MTE1OTVBNDExRTVBN0ExRkFDNDUyRTI5RDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdDQzQ3MTE2OTVBNDExRTVBN0ExRkFDNDUyRTI5RDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0NDNDcxMTM5NUE0MTFFNUE3QTFGQUM0NTJFMjlEOEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0NDNDcxMTQ5NUE0MTFFNUE3QTFGQUM0NTJFMjlEOEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz617vOHAAAIuklEQVR42sxaC2wURRj+d+/Re5W+y9HSAlEEixpUJEqImCo+QtT4RKkY8BVACUZiowmPQEJACGgiwQiiRhMNBk2oEo0o2IRorCEQURQkIAjlUV53t3t7+/b/9/bau3KP3etdr9P8me7szP7ffPPPPzP/HKPrOthNd2+5qX/RZJRWlHEoN6I0ogST3p9FOY1yEOUwym6ULsgz/fji70buhPwTAZ6DMtMfcFeXV3igzOsCr88FLrcDXC5Hb0VZVoOypAaFqHyrKMgQCcWA56RL+Gobyqcov+QDgLHLPLI+EbO1CHh6dV0Aqmp84HSythUrigaXL0bh0gUe+Ii4C4vaUQ7YYd4yeAR9LWYrvH7XrNrhAaitD0Ch0oXzHFw4x4HAy5/h43KUowUDj8DnY7a+sbnSWz+iHIqVzp+JwOmTVwT8dzHKewOyeQTtxuwDZHo2Me1Be9aheKkOicG548WR2IQjcQcWvYAiZarvzAKc7GJHXTDQiozHC/ViQo8nj9cJI0dVAsPA7J6zHHmth1G4dHXZLIzvqA+WtzY0VRqYB1tIL+knHChuy+AxfYSm0hpsGoZmUro/0k84EM8nlsAj66/U1PlnNTRVgGHgJRbCgXhm4tOirOAROK2O62vq/UBeaKgI4aG1xVy9MzK/qaG5wu32OG2TNH/salg64SPwOgIFHwDCQ7gIX1pvg6w/PqzSM7Wq1gf57HdIS03ZCOCVSEpxk28s3Fx1J0TVSNbmP5z9Iut7wsWFxanhK7HH8XF7f1e5rKrWP2Bv2L89gb8n+GTWNofD+2HXmS9yfpvwIfhlKeCR9en+cveN/oDLsi9/aOTzIKh97remLL6JnJ4ElEyo49RW2H+pE6JKWlcN7972fXzYLOglfIST8OIquyvB/JzKKp8t1m+uvhNq0UzSdap3zyKegR3/bQVe5myPWKZEOPmIRLvZXU7shRf/eSSA80G3sfi/9eeCFDYXjn8Lxg+7BV7umt5b5nMGLH0zPjGt6Q4Y8xYeIdzE/GSf3+UFBmxNVF6OXI0AUr9xVZ0s6C3rRpyEN8rLkwl8qzfgtmUyPmc5sh7JOfxUj9J9DTPRC3EFMRtjLiFeBN9K4FvcZQ5brL8wdilcX3FL2nfv3f5DyvOS/c/AvQ1P5SAjYEs/4SXcBng6ttlp/NeVfYYkp1trpsGowHXw1YktfVtcz4he0/krtA/e+fP1jCNpRz/hTYAPOhysrWH77tTnhsJJtdPgBHfEEPI8BJ7eZbZri/MnR2IdjMENbQ+qGRZs7zd8Dj88c81rBuPJrKWrm+1dPsIwccfjzPeMkWhDrCW3v7/x6T5zcJXDl8c397nDDHoeG/OSkSfqWnI5OG8JPKeqWoBlGVvgaz3xBYr2MskMJ4Ak0vZj7+d0hz5ciaeNeBA6u7+Gnli3BeKM7wgEPqQheIaxF75IrK6kOBnUc53T+pbzfhMxI3jTpZ4XTlvSrSoaZSFCfFyWVNt2V2cy/0DzrJQOJNfh5HAS4MzfGo0TPXkEc4kSB3+WmD8kSdpUt8eezbdUTYIeIT7E8yesgKjpMdKRS8Co/oKWFSlbZhqZOm+DIb+d32N57smiStkhAn9QFhVs6LIeokBlo8vHwU/dHdCFStsnvp3VND7+ex3MGNUGLdWTDMDJiQigb1Adq76eLCUBvlMUFFuLxF0NDxn5Hxd/M2TjwaUw9/p2A9gT18yDrnO74d/I4d76v+IzSc4tL7bnldw+X4ozf8CImOEO7cTwpkCzw0LM0Y/ub/2U+MFhXucDveVjho2DmdfOhwnIbm8EDFklVxrNAohGkVI95l3n9sC7SESu1H08TOhrEvv5bQInv+6vcOc2GU/8qLfn1I6U0ToW+htW71tkdOKG6ttgNOb13kajs1SWM9SHHaXRyWUBZCW0yONhJJRgfgwW/BMcFXBYMRsClM+yXogUuigCEj0XwX/MmoHL45h18GHZUjSLkyKGDHYUTVV0At5jxvVTDuDtkcviDI/P4WZsrraDlfiwEXPdiGQLKXEbLKCY+IY4+/qQE3KP0YjB+oZMUeJVWGG2y8M2utzskGJd4IyJujw5Ysz2C9rTi/YYp5QkMpxJCHiMV+gCbnPWQCt24DNRUDtwBEoaIU780T6GD8mSedGgWrlcmCtElP14Yml2e0trPrG4uSw2r0Fzx+eRfbpmbOOvyKqC7knDoSuFRMMKiFGV3OJGO5cL1IG9mL0pckpJvAuCBpFXD5vmArbAmx1YJwnazlhkcDugSBrEwgr58icy3UflBG+mNimqHUUZFM+i4TmDdNG8S2fntsDTBgizR0VO5YiRYrMucSooorYqsQUYEHizA8TAXFnQkJkiAudVkGNaBwXaLMVvrLos7MB2VdLXyEUyH1nQSYikZy0Hn2y63SVKTN+t4AgUErmK5oikkHt+lHa9RQGP7NMK14YM9eAoFMRUyAwV0TiAtEGOH0wMlHnqAP3w51mJ11W9AAOgoLloMqyk05FdLPmu/aRoDZrQwPx5jEwG6Lc2K/MBMZCNy3JUvFcV87tbVWUUEU6a5qIONnhS+BQCuKQpNllHO1eFeHsK3eQLYKBbRgouLkabtQWeRosOPpDnb8sKBd4IiOky850mMdaWf6onM/tM8FBq8MY1lS4xnLGPzYocmZcYyVyIpKECnsxnlSazWScpvTcP0IcKobSQx6QNoDAHdCWD/dOBSGGO5usWiw2ezGAhKGxai6FyTK9SIGAogqe0FzRmJ6hMqsHQs8ZQmHhnIZUV43S9hJEdUjLr+Ew+vb3QipyF+MjuNzX6HVUVXS8SIVPeYL8tq3Y8rDMaMDoLsRB88/MackUw3jzWXWxdzQolZx6BN5mghlMAme4ZD2zV1ka72U1qyLmXcno27x/9Zr0WbDdyKDBf1b8g2gPir+9oH+ZoVz4UbP4IymWbbaj+sZIzj7YbIyBoBi7TLPzmdx1OL/gUAaLmJo48PU+CbeRCzLX/BRgA89IHHfvOE1AAAAAASUVORK5CYII="
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
          cityList: "./citylist.json",
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
      return e.cityList ? void t(e.cityList) : void (function() {
        var n = {"citylist":[{"spell":"beijing","adcode":"1100","cityname":"北京市"},{"spell":"guangzhou","adcode":"4401","cityname":"广州市"},{"spell":"shanghai","adcode":"3100","cityname":"上海市"},{"spell":"tianjin","adcode":"1200","cityname":"天津市"},{"spell":"chongqing","adcode":"5000","cityname":"重庆市"},{"spell":"shenyang","adcode":"2101","cityname":"沈阳市"},{"spell":"nanjing","adcode":"3201","cityname":"南京市"},{"spell":"wuhan","adcode":"4201","cityname":"武汉市"},{"spell":"chengdu","adcode":"5101","cityname":"成都市"},{"spell":"xian","adcode":"6101","cityname":"西安市"},{"spell":"shijiazhuang","adcode":"1301","cityname":"石家庄市"},{"spell":"taiyuan","adcode":"1401","cityname":"太原市"},{"spell":"zhengzhou","adcode":"4101","cityname":"郑州市"},{"spell":"luoyang","adcode":"4103","cityname":"洛阳市"},{"spell":"dalian","adcode":"2102","cityname":"大连市"},{"spell":"changchun","adcode":"2201","cityname":"长春市"},{"spell":"haerbin","adcode":"2301","cityname":"哈尔滨市"},{"spell":"huhehaote","adcode":"1501","cityname":"呼和浩特市"},{"spell":"wuxi","adcode":"3202","cityname":"无锡市"},{"spell":"suzhou","adcode":"3205","cityname":"苏州市"},{"spell":"xuzhou","adcode":"3203","cityname":"徐州市"},{"spell":"changzhou","adcode":"3204","cityname":"常州市"},{"spell":"jinan","adcode":"3701","cityname":"济南市"},{"spell":"qingdao","adcode":"3702","cityname":"青岛市"},{"spell":"hefei","adcode":"3401","cityname":"合肥市"},{"spell":"wuhu","adcode":"3402","cityname":"芜湖市"},{"spell":"hangzhou","adcode":"3301","cityname":"杭州市"},{"spell":"ningbo","adcode":"3302","cityname":"宁波市"},{"spell":"shaoxing","adcode":"3306","cityname":"绍兴市"},{"spell":"wenzhou","adcode":"3303","cityname":"温州市"},{"spell":"jinhua","adcode":"3307","cityname":"金华市"},{"spell":"fuzhou","adcode":"3501","cityname":"福州市"},{"spell":"xiamen","adcode":"3502","cityname":"厦门市"},{"spell":"changsha","adcode":"4301","cityname":"长沙市"},{"spell":"shenzhen","adcode":"4403","cityname":"深圳市"},{"spell":"foshan","adcode":"4406","cityname":"佛山市"},{"spell":"dongguan","adcode":"4419","cityname":"东莞市"},{"spell":"nanning","adcode":"4501","cityname":"南宁市"},{"spell":"nanchang","adcode":"3601","cityname":"南昌市"},{"spell":"guiyang","adcode":"5201","cityname":"贵阳市"},{"spell":"kunming","adcode":"5301","cityname":"昆明市"},{"spell":"lanzhou","adcode":"6201","cityname":"兰州市"},{"spell":"nantong","adcode":"3206","cityname":"南通市"},{"spell":"xiangxi","adcode":"4331","cityname":"湘西土家族苗族自治州"},{"spell":"wulumuqi","adcode":"6501","cityname":"乌鲁木齐市"},{"spell":"xianggang","adcode":"8100","cityname":"香港特别行政区"},{"spell":"aomen","adcode":"8200","cityname":"澳门特别行政区"}]};
        n && n.citylist ? e.cityList = e.formatCityList(n.citylist) : e.cityList = i.cityList,
        t(e.cityList)
      })();
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
    //   var n = i.staticUrl.data + t + "_drw_" + this.cityList[t].city + ".json"
       var r = {
          status: 0,
          info: "error",
          data: {}
      }
        , s = {
          status: 1,
          info: "success",
          data: {}
      };
    //   a.fetch({
    //       url: n,
    //       onSuccess: function(t) {
    //           t.i ? (s.data = t,
    //           e(s)) : e(r)
    //       },
    //       onError: function() {
    //           e(r)
    //       },
    //       format: "json",
    //       method: "get"
    //   })
    var t = {
        "s": "北京市地铁",
        "i": "1100",
        "l": [
          {
            "st": [
              {
                "rs": "312 684|312 672",
                "udpx": "312 687;312 681",
                "su": "1",
                "udsu": "1;1",
                "n": "苹果园",
                "sid": "110100023339034",
                "p": "312 678",
                "r": "900000069871|110100023339",
                "udsi": "900000069872017;900000069871009",
                "t": "1",
                "si": "110100023339034",
                "sl": "116.178945,39.925686",
                "udli": "900000069872;900000069871",
                "poiid": "BV10013454",
                "lg": "0",
                "sp": "PingGuoYuan"
              },
              {
                "rs": "270 684|270 672|270 678",
                "udpx": "270 687;270 681",
                "su": "1",
                "udsu": "1;1",
                "n": "金安桥",
                "sid": "110100023339035",
                "p": "270 678",
                "r": "900000069871|110100023339|900000159716",
                "udsi": "900000069872015;900000069871002",
                "t": "1",
                "si": "110100023339035",
                "sl": "116.162586,39.923298",
                "udli": "900000069872;900000069871",
                "poiid": "BV11494889",
                "lg": "0",
                "sp": "JinAn Qiao"
              },
              {
                "rs": "226 684",
                "udpx": "226 681;226 687",
                "su": "1",
                "udsu": "1;1",
                "n": "四道桥",
                "sid": "900000069871003",
                "p": "226 684",
                "r": "900000069871",
                "udsi": "900000069871003;900000069872014",
                "t": "0",
                "si": "900000069871003",
                "sl": "116.134010,39.916030",
                "udli": "900000069871;900000069872",
                "poiid": "BV10813547",
                "lg": "0",
                "sp": "si dao qiao"
              },
              {
                "rs": "181 684",
                "udpx": "180 681;180 687",
                "su": "1",
                "udsu": "1;1",
                "n": "桥户营",
                "sid": "900000069871004",
                "p": "181 684",
                "r": "900000069871",
                "udsi": "900000069871004;900000069872013",
                "t": "0",
                "si": "900000069871004",
                "sl": "116.125809,39.912383",
                "udli": "900000069871;900000069872",
                "poiid": "BV10813541",
                "lg": "0",
                "sp": "qiao hu ying"
              },
              {
                "rs": "155 711",
                "udpx": "152 711;158 711",
                "su": "1",
                "udsu": "1;1",
                "n": "上岸",
                "sid": "900000069871005",
                "p": "155 711",
                "r": "900000069871",
                "udsi": "900000069871005;900000069872012",
                "t": "0",
                "si": "900000069871005",
                "sl": "116.122225,39.905138",
                "udli": "900000069871;900000069872",
                "poiid": "BV10813543",
                "lg": "2",
                "sp": "shang an"
              },
              {
                "rs": "155 735",
                "udpx": "158 735;153 735",
                "su": "1",
                "udsu": "1;1",
                "n": "栗园庄",
                "sid": "900000069871006",
                "p": "155 735",
                "r": "900000069871",
                "udsi": "900000069872011;900000069871006",
                "t": "0",
                "si": "900000069871006",
                "sl": "116.123254,39.895780",
                "udli": "900000069872;900000069871",
                "poiid": "BV10813544",
                "lg": "2",
                "sp": "li yuan zhuang"
              },
              {
                "rs": "131 758",
                "udpx": "131 760;131 755",
                "su": "1",
                "udsu": "1;1",
                "n": "小园",
                "sid": "900000069871007",
                "p": "131 758",
                "r": "900000069871",
                "udsi": "900000069872010;900000069871007",
                "t": "0",
                "si": "900000069871007",
                "sl": "116.114443,39.890465",
                "udli": "900000069872;900000069871",
                "poiid": "BV10813542",
                "lg": "4",
                "sp": "xiao yuan"
              },
              {
                "rs": "104 758",
                "udpx": "104 760;104 755",
                "su": "1",
                "udsu": "1;1",
                "n": "石厂",
                "sid": "900000069871008",
                "p": "104 758",
                "r": "900000069871",
                "udsi": "900000069872009;900000069871008",
                "t": "0",
                "si": "900000069871008",
                "sl": "116.100334,39.889378",
                "udli": "900000069872;900000069871",
                "poiid": "BV10813546",
                "lg": "4",
                "sp": "shi chang"
              }
            ],
            "ln": "S1线",
            "su": "1",
            "kn": "S1线",
            "c": [
              "104 758",
              "121 758",
              "131 758",
              "151 758",
              "154 756",
              "155 754",
              "155 744",
              "155 735",
              "155 724",
              "155 711",
              "155 705",
              "155 696",
              "155 687",
              "157 685",
              "161 684",
              "180 684",
              "181 684",
              "203 684",
              "226 684",
              "243 684",
              "270 684",
              "312 684"
            ],
            "lo": "0",
            "lp": [
              "177 635"
            ],
            "f": [
              {
                "c": [
                  "312 681",
                  "270 681",
                  "243 681",
                  "226 681",
                  "203 681",
                  "180 681",
                  "160 681",
                  "155 682",
                  "152 687",
                  "152 696",
                  "152 705",
                  "152 711",
                  "152 724",
                  "153 735",
                  "153 744",
                  "153 753",
                  "152 754",
                  "150 755",
                  "131 755",
                  "121 755",
                  "104 755"
                ],
                "li": "900000069871"
              },
              {
                "c": [
                  "104 760",
                  "121 760",
                  "131 760",
                  "151 760",
                  "156 759",
                  "158 754",
                  "158 744",
                  "158 735",
                  "158 724",
                  "158 711",
                  "158 705",
                  "158 696",
                  "158 688",
                  "159 687",
                  "161 687",
                  "180 687",
                  "203 687",
                  "226 687",
                  "243 687",
                  "270 687",
                  "312 687"
                ],
                "li": "900000069872"
              }
            ],
            "ls": "900000069871",
            "cl": "B35A1F",
            "la": "",
            "x": 1,
            "li": "900000069871|900000069872"
          },
          {
            "st": [
              {
                "rs": "334 720",
                "udpx": "334 723;334 717",
                "su": "1",
                "udsu": "1;1",
                "n": "古城",
                "sid": "110100023110003",
                "p": "334 720",
                "r": "110100023110",
                "udsi": "110100023110003;110100023111023",
                "t": "0",
                "si": "110100023110003",
                "sl": "116.190337,39.907450",
                "udli": "110100023110;110100023111",
                "poiid": "BV10000295",
                "lg": "4",
                "sp": "gu cheng"
              },
              {
                "rs": "391 720",
                "udpx": "391 723;391 717",
                "su": "1",
                "udsu": "1;1",
                "n": "八角游乐园",
                "sid": "110100023110004",
                "p": "391 720",
                "r": "110100023110",
                "udsi": "110100023110004;110100023111022",
                "t": "0",
                "si": "110100023110004",
                "sl": "116.212684,39.907442",
                "udli": "110100023110;110100023111",
                "poiid": "BV10013455",
                "lg": "4",
                "sp": "ba jiao you le yuan"
              },
              {
                "rs": "454 720",
                "udpx": "454 723;454 717",
                "su": "1",
                "udsu": "1;1",
                "n": "八宝山",
                "sid": "110100023110005",
                "p": "454 720",
                "r": "110100023110",
                "udsi": "110100023110005;110100023111021",
                "t": "0",
                "si": "110100023110005",
                "sl": "116.235948,39.907440",
                "udli": "110100023110;110100023111",
                "poiid": "BV10000302",
                "lg": "4",
                "sp": "ba bao shan"
              },
              {
                "rs": "505 720",
                "udpx": "505 717;505 723",
                "su": "1",
                "udsu": "1;1",
                "n": "玉泉路",
                "sid": "110100023110006",
                "p": "505 720",
                "r": "110100023110",
                "udsi": "110100023111020;110100023110006",
                "t": "0",
                "si": "110100023110006",
                "sl": "116.252888,39.907433",
                "udli": "110100023111;110100023110",
                "poiid": "BV10013456",
                "lg": "4",
                "sp": "yu quan lu"
              },
              {
                "rs": "555 720",
                "udpx": "555 723;555 717",
                "su": "1",
                "udsu": "1;1",
                "n": "五棵松",
                "sid": "110100023110007",
                "p": "555 720",
                "r": "110100023110",
                "udsi": "110100023110007;110100023111019",
                "t": "0",
                "si": "110100023110007",
                "sl": "116.273987,39.907456",
                "udli": "110100023110;110100023111",
                "poiid": "BV10013457",
                "lg": "4",
                "sp": "wu ke song"
              },
              {
                "rs": "603 720",
                "udpx": "603 717;603 723",
                "su": "1",
                "udsu": "1;1",
                "n": "万寿路",
                "sid": "110100023110008",
                "p": "603 720",
                "r": "110100023110",
                "udsi": "110100023111018;110100023110008",
                "t": "0",
                "si": "110100023110008",
                "sl": "116.294765,39.907474",
                "udli": "110100023111;110100023110",
                "poiid": "BV10013458",
                "lg": "4",
                "sp": "wan shou lu"
              },
              {
                "rs": "650 720|650 720",
                "udpx": "650 717;650 723",
                "su": "1",
                "udsu": "1;1",
                "n": "公主坟",
                "sid": "110100023110009",
                "p": "650 720",
                "r": "110100023110|110100023282",
                "udsi": "110100023111017;110100023110009",
                "t": "1",
                "si": "110100023110009",
                "sl": "116.309919,39.907469",
                "udli": "110100023111;110100023110",
                "poiid": "BV10000306",
                "lg": "1",
                "sp": "gong zhu fen"
              },
              {
                "rs": "710 720|710 720",
                "udpx": "710 723;710 717",
                "su": "1",
                "udsu": "1;1",
                "n": "军事博物馆",
                "sid": "110100023110010",
                "p": "710 720",
                "r": "110100023110|110100023116",
                "udsi": "110100023110010;110100023111016",
                "t": "1",
                "si": "110100023110010",
                "sl": "116.321459,39.907422",
                "udli": "110100023110;110100023111",
                "poiid": "BV10000188",
                "lg": "1",
                "sp": "jun shi bo wu guan"
              },
              {
                "rs": "769 720",
                "udpx": "769 723;769 717",
                "su": "1",
                "udsu": "1;1",
                "n": "木樨地",
                "sid": "110100023110011",
                "p": "769 720",
                "r": "110100023110",
                "udsi": "110100023110011;110100023111015",
                "t": "0",
                "si": "110100023110011",
                "sl": "116.337583,39.907379",
                "udli": "110100023110;110100023111",
                "poiid": "BV10013459",
                "lg": "4",
                "sp": "mu xi di"
              },
              {
                "rs": "819 720",
                "udpx": "819 723;819 717",
                "su": "1",
                "udsu": "1;1",
                "n": "南礼士路",
                "sid": "110100023110012",
                "p": "819 720",
                "r": "110100023110",
                "udsi": "110100023110012;110100023111014",
                "t": "0",
                "si": "110100023110012",
                "sl": "116.352583,39.907234",
                "udli": "110100023110;110100023111",
                "poiid": "BV10000309",
                "lg": "4",
                "sp": "nan li shi lu"
              },
              {
                "rs": "858 720|858 720",
                "udpx": "858 723;858 717",
                "su": "1",
                "udsu": "1;1",
                "n": "复兴门",
                "sid": "110100023098016",
                "p": "858 720",
                "r": "110100023110|110100023098",
                "udsi": "110100023110013;110100023111013",
                "t": "1",
                "si": "110100023098016",
                "sl": "116.356866,39.907242",
                "udli": "110100023110;110100023111",
                "poiid": "BV10007375",
                "lg": "3",
                "sp": "fu xing men"
              },
              {
                "rs": "928 720|928 720",
                "udpx": "928 723;928 717",
                "su": "1",
                "udsu": "1;1",
                "n": "西单",
                "sid": "110100023076018",
                "p": "928 720",
                "r": "110100023110|110100023076",
                "udsi": "110100023110014;110100023111012",
                "t": "1",
                "si": "110100023076018",
                "sl": "116.374072,39.907383",
                "udli": "110100023110;110100023111",
                "poiid": "BV10006791",
                "lg": "1",
                "sp": "xi dan"
              },
              {
                "rs": "972 720",
                "udpx": "972 717;972 723",
                "su": "1",
                "udsu": "1;1",
                "n": "天安门西",
                "sid": "110100023110015",
                "p": "972 720",
                "r": "110100023110",
                "udsi": "110100023111011;110100023110015",
                "t": "0",
                "si": "110100023110015",
                "sl": "116.391278,39.907472",
                "udli": "110100023111;110100023110",
                "poiid": "BV10005941",
                "lg": "4",
                "sp": "tian an men xi"
              },
              {
                "rs": "1031 720",
                "udpx": "1031 717;1031 723",
                "su": "1",
                "udsu": "1;1",
                "n": "天安门东",
                "sid": "110100023110016",
                "p": "1031 720",
                "r": "110100023110",
                "udsi": "110100023111010;110100023110016",
                "t": "0",
                "si": "110100023110016",
                "sl": "116.401216,39.907780",
                "udli": "110100023111;110100023110",
                "poiid": "BV10006499",
                "lg": "4",
                "sp": "tian an men dong"
              },
              {
                "rs": "1059 720|1059 720",
                "udpx": "1059 717;1059 723",
                "su": "1",
                "udsu": "1;1",
                "n": "王府井",
                "sid": "110100023110017",
                "p": "1059 720",
                "r": "110100023110|110100023114",
                "udsi": "110100023111009;110100023110017",
                "t": "1",
                "si": "110100023110017",
                "sl": "116.411571,39.908069",
                "udli": "110100023111;110100023110",
                "poiid": "BV10006496",
                "lg": "3",
                "sp": "WangFuJing"
              },
              {
                "rs": "1116 720|1116 720",
                "udpx": "1116 723;1116 717",
                "su": "1",
                "udsu": "1;1",
                "n": "东单",
                "sid": "110100023100007",
                "p": "1116 720",
                "r": "110100023110|110100023100",
                "udsi": "110100023110018;110100023111008",
                "t": "1",
                "si": "110100023100007",
                "sl": "116.418480,39.908325",
                "udli": "110100023110;110100023111",
                "poiid": "BV10013440",
                "lg": "3",
                "sp": "dong dan"
              },
              {
                "rs": "1179 720|1179 720",
                "udpx": "1179 717;1179 723",
                "su": "1",
                "udsu": "1;1",
                "n": "建国门",
                "sid": "110100023098009",
                "p": "1179 720",
                "r": "110100023110|110100023098",
                "udsi": "110100023111007;110100023110019",
                "t": "1",
                "si": "110100023098009",
                "sl": "116.435806,39.908501",
                "udli": "110100023111;110100023110",
                "poiid": "BV10013432",
                "lg": "3",
                "sp": "jian guo men"
              },
              {
                "rs": "1247 720",
                "udpx": "1247 717;1247 723",
                "su": "1",
                "udsu": "1;1",
                "n": "永安里",
                "sid": "110100023110020",
                "p": "1247 720",
                "r": "110100023110",
                "udsi": "110100023111006;110100023110020",
                "t": "0",
                "si": "110100023110020",
                "sl": "116.450497,39.908454",
                "udli": "110100023111;110100023110",
                "poiid": "BV10013460",
                "lg": "4",
                "sp": "yong an li"
              },
              {
                "rs": "1279 720|1279 720",
                "udpx": "1279 717;1279 723",
                "su": "1",
                "udsu": "1;1",
                "n": "国贸",
                "sid": "110100023110021",
                "p": "1279 720",
                "r": "110100023110|110100023282",
                "udsi": "110100023111005;110100023110021",
                "t": "1",
                "si": "110100023110021",
                "sl": "116.461841,39.909104",
                "udli": "110100023111;110100023110",
                "poiid": "BV10013461",
                "lg": "3",
                "sp": "guo mao"
              },
              {
                "rs": "1337 720|1337 720",
                "udpx": "1337 717;1337 723",
                "su": "1",
                "udsu": "1;1",
                "n": "大望路",
                "sid": "110100023110022",
                "p": "1337 720",
                "r": "110100023110|900000028907",
                "udsi": "110100023111004;110100023110022",
                "t": "1",
                "si": "110100023110022",
                "sl": "116.475783,39.908287",
                "udli": "110100023111;110100023110",
                "poiid": "BV10013364",
                "lg": "1",
                "sp": "DaWang Lu"
              },
              {
                "rs": "1374 720",
                "udpx": "1374 717;1374 723",
                "su": "1",
                "udsu": "1;1",
                "n": "四惠",
                "sid": "110100023110023",
                "p": "1374 720",
                "r": "110100023110",
                "udsi": "110100023111003;110100023110023",
                "t": "0",
                "si": "110100023110023",
                "sl": "116.495456,39.908749",
                "udli": "110100023111;110100023110",
                "poiid": "BV10000275",
                "lg": "4",
                "sp": "SiHui"
              },
              {
                "rs": "1409 720",
                "udpx": "1409 717;1409 723",
                "su": "1",
                "udsu": "1;1",
                "n": "四惠东",
                "sid": "110100023110024",
                "p": "1409 720",
                "r": "110100023110",
                "udsi": "110100023111002;110100023110024",
                "t": "0",
                "si": "110100023110024",
                "sl": "116.515664,39.908495",
                "udli": "110100023111;110100023110",
                "poiid": "BV10007589",
                "lg": "4",
                "sp": "Si HuiDong"
              },
              {
                "rs": "1464 720",
                "udpx": "1464 717;1464 723",
                "su": "1",
                "udsu": "1;1",
                "n": "高碑店",
                "sid": "110100023110038",
                "p": "1464 720",
                "r": "110100023110",
                "udsi": "110100023111050;110100023110038",
                "t": "0",
                "si": "110100023110038",
                "sl": "116.531421,39.909448",
                "udli": "110100023111;110100023110",
                "poiid": "BV10013517",
                "lg": "0",
                "sp": "GaoBeiDian"
              },
              {
                "rs": "1521 720",
                "udpx": "1521 717;1521 723",
                "su": "1",
                "udsu": "1;1",
                "n": "传媒大学",
                "sid": "110100023110039",
                "p": "1521 720",
                "r": "110100023110",
                "udsi": "110100023111049;110100023110039",
                "t": "0",
                "si": "110100023110039",
                "sl": "116.554639,39.909215",
                "udli": "110100023111;110100023110",
                "poiid": "BV10013518",
                "lg": "4",
                "sp": "ChuanMei DaXue"
              },
              {
                "rs": "1564 720",
                "udpx": "1564 717;1564 723",
                "su": "1",
                "udsu": "1;1",
                "n": "双桥",
                "sid": "110100023110040",
                "p": "1564 720",
                "r": "110100023110",
                "udsi": "110100023111048;110100023110040",
                "t": "0",
                "si": "110100023110040",
                "sl": "116.576760,39.910140",
                "udli": "110100023111;110100023110",
                "poiid": "BV10013519",
                "lg": "0",
                "sp": "ShuangQiao"
              },
              {
                "rs": "1603 720",
                "udpx": "1603 717;1603 723",
                "su": "1",
                "udsu": "1;1",
                "n": "管庄",
                "sid": "110100023110041",
                "p": "1603 720",
                "r": "110100023110",
                "udsi": "110100023111047;110100023110041",
                "t": "0",
                "si": "110100023110041",
                "sl": "116.599002,39.909090",
                "udli": "110100023111;110100023110",
                "poiid": "BV10004294",
                "lg": "4",
                "sp": "GuanZhuang"
              },
              {
                "rs": "1653 723",
                "udpx": "1655 722;1651 725",
                "su": "1",
                "udsu": "1;1",
                "n": "八里桥",
                "sid": "110100023110042",
                "p": "1653 723",
                "r": "110100023110",
                "udsi": "110100023111046;110100023110042",
                "t": "0",
                "si": "110100023110042",
                "sl": "116.618658,39.906121",
                "udli": "110100023111;110100023110",
                "poiid": "BV10001118",
                "lg": "2",
                "sp": "BaLiQiao"
              },
              {
                "rs": "1688 775",
                "udpx": "1690 773;1686 777",
                "su": "1",
                "udsu": "1;1",
                "n": "通州北苑",
                "sid": "110100023110043",
                "p": "1688 775",
                "r": "110100023110",
                "udsi": "110100023111045;110100023110043",
                "t": "0",
                "si": "110100023110043",
                "sl": "116.637252,39.903864",
                "udli": "110100023111;110100023110",
                "poiid": "BV10004143",
                "lg": "2",
                "sp": "TongZhouBeiYuan"
              },
              {
                "rs": "1711 809",
                "udpx": "1714 808;1709 811",
                "su": "1",
                "udsu": "1;1",
                "n": "果园",
                "sid": "110100023110044",
                "p": "1711 809",
                "r": "110100023110",
                "udsi": "110100023111044;110100023110044",
                "t": "0",
                "si": "110100023110044",
                "sl": "116.646621,39.893329",
                "udli": "110100023111;110100023110",
                "poiid": "BV10004141",
                "lg": "2",
                "sp": "GuoYuan"
              },
              {
                "rs": "1732 840",
                "udpx": "1734 838;1730 842",
                "su": "1",
                "udsu": "1;1",
                "n": "九棵树",
                "sid": "110100023110045",
                "p": "1732 840",
                "r": "110100023110",
                "udsi": "110100023111043;110100023110045",
                "t": "0",
                "si": "110100023110045",
                "sl": "116.657533,39.890278",
                "udli": "110100023111;110100023110",
                "poiid": "BV10001298",
                "lg": "2",
                "sp": "JiuKeShu"
              },
              {
                "rs": "1753 871",
                "udpx": "1756 869;1751 873",
                "su": "1",
                "udsu": "1;1",
                "n": "梨园",
                "sid": "110100023110046",
                "p": "1753 871",
                "r": "110100023110",
                "udsi": "110100023111042;110100023110046",
                "t": "0",
                "si": "110100023110046",
                "sl": "116.668720,39.883677",
                "udli": "110100023111;110100023110",
                "poiid": "BV10002455",
                "lg": "2",
                "sp": "LiYuan"
              },
              {
                "rs": "1775 904",
                "udpx": "1778 902;1773 905",
                "su": "1",
                "udsu": "1;1",
                "n": "临河里",
                "sid": "110100023110047",
                "p": "1775 904",
                "r": "110100023110",
                "udsi": "110100023111041;110100023110047",
                "t": "0",
                "si": "110100023110047",
                "sl": "116.678811,39.875496",
                "udli": "110100023111;110100023110",
                "poiid": "BV10013520",
                "lg": "2",
                "sp": "LinHeLi"
              },
              {
                "rs": "1798 937",
                "udpx": "1801 936;1796 939",
                "su": "1",
                "udsu": "1;1",
                "n": "土桥",
                "sid": "110100023110048",
                "p": "1798 937",
                "r": "110100023110",
                "udsi": "110100023111040;110100023110048",
                "t": "0",
                "si": "110100023110048",
                "sl": "116.686349,39.871926",
                "udli": "110100023111;110100023110",
                "poiid": "BV10004138",
                "lg": "2",
                "sp": "TuQiao"
              },
              {
                "rs": "1827 1001|1819 1000",
                "udpx": "1830 1001;1824 1001",
                "su": "1",
                "udsu": "1;1",
                "n": "花庄",
                "sid": "110100023054032",
                "p": "1823 1001",
                "r": "110100023110|110100023054",
                "udsi": "110100023111039;110100023110049",
                "t": "1",
                "si": "110100023054032",
                "sl": "116.695495,39.856722",
                "udli": "110100023111;110100023110",
                "poiid": "BV11253781",
                "lg": "2",
                "sp": "HuaZhuang"
              },
              {
                "rs": "1827 1032|1821 1032",
                "udpx": "1830 1032;1824 1032",
                "su": "1",
                "udsu": "1;1",
                "n": "环球度假区",
                "sid": "110100023054033",
                "p": "1824 1032",
                "r": "110100023110|110100023054",
                "udsi": "110100023111038;110100023110050",
                "t": "1",
                "si": "110100023054033",
                "sl": "116.679099,39.849152",
                "udli": "110100023111;110100023110",
                "poiid": "BV10850689",
                "lg": "2",
                "sp": "HuanQiu DuJiaQu"
              }
            ],
            "ln": "1号线八通线",
            "su": "1",
            "kn": "地铁1号线(八通线)",
            "c": [
              "334 720",
              "391 720",
              "453 720",
              "454 720",
              "504 720",
              "505 720",
              "554 720",
              "555 720",
              "602 720",
              "603 720",
              "649 720",
              "650 720",
              "710 720",
              "768 720",
              "769 720",
              "818 720",
              "819 720",
              "857 720",
              "858 720",
              "927 720",
              "928 720",
              "972 720",
              "1030 720",
              "1031 720",
              "1059 720",
              "1079 720",
              "1080 720",
              "1115 720",
              "1116 720",
              "1179 720",
              "1246 720",
              "1247 720",
              "1278 720",
              "1279 720",
              "1335 720",
              "1337 720",
              "1373 720",
              "1374 720",
              "1409 720",
              "1464 720",
              "1521 720",
              "1564 720",
              "1603 720",
              "1644 719",
              "1647 720",
              "1649 720",
              "1651 722",
              "1653 723",
              "1688 775",
              "1711 809",
              "1732 840",
              "1753 871",
              "1775 904",
              "1798 937",
              "1816 963",
              "1822 972",
              "1826 981",
              "1827 987",
              "1827 992",
              "1827 1000",
              "1827 1001",
              "1827 1032"
            ],
            "lo": "0",
            "lp": [
              "1872 1173"
            ],
            "f": [
              {
                "c": [
                  "1830 1032",
                  "1830 1000",
                  "1830 1001",
                  "1830 992",
                  "1830 987",
                  "1829 980",
                  "1825 971",
                  "1818 961",
                  "1801 936",
                  "1778 902",
                  "1756 869",
                  "1734 838",
                  "1714 808",
                  "1690 773",
                  "1655 722",
                  "1653 720",
                  "1651 718",
                  "1647 717",
                  "1644 717",
                  "1603 717",
                  "1564 717",
                  "1521 717",
                  "1464 717",
                  "1409 717",
                  "1374 717",
                  "1373 717",
                  "1337 717",
                  "1335 717",
                  "1279 717",
                  "1278 717",
                  "1247 717",
                  "1246 717",
                  "1179 717",
                  "1116 717",
                  "1115 717",
                  "1080 717",
                  "1079 717",
                  "1059 717",
                  "1031 717",
                  "1030 717",
                  "972 717",
                  "928 717",
                  "927 717",
                  "858 717",
                  "857 717",
                  "819 717",
                  "818 717",
                  "769 717",
                  "768 717",
                  "710 717",
                  "650 717",
                  "649 717",
                  "603 717",
                  "602 717",
                  "555 717",
                  "554 717",
                  "505 717",
                  "504 717",
                  "454 717",
                  "453 717",
                  "391 717",
                  "334 717"
                ],
                "li": "110100023111"
              },
              {
                "c": [
                  "334 723",
                  "391 723",
                  "453 723",
                  "454 723",
                  "504 723",
                  "505 723",
                  "554 723",
                  "555 723",
                  "602 723",
                  "603 723",
                  "649 723",
                  "650 723",
                  "710 723",
                  "768 723",
                  "769 723",
                  "818 723",
                  "819 723",
                  "857 723",
                  "858 723",
                  "927 723",
                  "928 723",
                  "972 723",
                  "1030 723",
                  "1031 723",
                  "1059 723",
                  "1079 723",
                  "1080 723",
                  "1115 723",
                  "1116 723",
                  "1179 723",
                  "1246 723",
                  "1247 723",
                  "1278 723",
                  "1279 723",
                  "1335 723",
                  "1337 723",
                  "1373 723",
                  "1374 723",
                  "1409 723",
                  "1464 723",
                  "1521 723",
                  "1564 723",
                  "1603 723",
                  "1644 722",
                  "1646 722",
                  "1648 723",
                  "1649 724",
                  "1651 725",
                  "1686 777",
                  "1709 811",
                  "1730 842",
                  "1751 873",
                  "1773 905",
                  "1796 939",
                  "1814 964",
                  "1820 974",
                  "1823 982",
                  "1824 987",
                  "1824 992",
                  "1824 1000",
                  "1824 1001",
                  "1824 1032",
                  "1825 1032"
                ],
                "li": "110100023110"
              }
            ],
            "ls": "110100023110",
            "cl": "CC0000",
            "la": "",
            "x": 2,
            "li": "110100023110|110100023111"
          },
          {
            "st": [
              {
                "rs": "936 556|936 556",
                "udpx": "936 558,936 558;936 553",
                "su": "1",
                "udsu": "1,1;1",
                "n": "积水潭",
                "sid": "110100023098002",
                "p": "936 556",
                "r": "110100023098|900000079004",
                "udsi": "110100023098020,110100023098002;110100023099019",
                "t": "1",
                "si": "110100023098002",
                "sl": "116.373126,39.948653",
                "udli": "110100023098,110100023098;110100023099",
                "poiid": "BV10013430",
                "lg": "7",
                "sp": "JiShuiTan"
              },
              {
                "rs": "1002 555|1002 555",
                "udpx": "995 558;1008 552",
                "su": "1",
                "udsu": "1;1",
                "n": "鼓楼大街",
                "sid": "110100023098003",
                "p": "1002 555",
                "r": "110100023098|110100023114",
                "udsi": "110100023098003;110100023099018",
                "t": "1",
                "si": "110100023098003",
                "sl": "116.393776,39.948972",
                "udli": "110100023098;110100023099",
                "poiid": "BV10013431",
                "lg": "7",
                "sp": "gu lou da jie"
              },
              {
                "rs": "1077 555",
                "udpx": "1077 552;1077 558",
                "su": "1",
                "udsu": "1;1",
                "n": "安定门",
                "sid": "110100023098004",
                "p": "1077 555",
                "r": "110100023098",
                "udsi": "110100023099017;110100023098004",
                "t": "0",
                "si": "110100023098004",
                "sl": "116.408240,39.949180",
                "udli": "110100023099;110100023098",
                "poiid": "BV10001936",
                "lg": "0",
                "sp": "an ding men"
              },
              {
                "rs": "1116 555|1116 555",
                "udpx": "1116 552;1116 558",
                "su": "1",
                "udsu": "1;1",
                "n": "雍和宫",
                "sid": "110100023098005",
                "p": "1116 555",
                "r": "110100023098|110100023100",
                "udsi": "110100023099016;110100023098005",
                "t": "1",
                "si": "110100023098005",
                "sl": "116.417069,39.949336",
                "udli": "110100023099;110100023098",
                "poiid": "BV10006563",
                "lg": "1",
                "sp": "yong he gong"
              },
              {
                "rs": "1179 586|1179 586|1179 586",
                "udpx": "1182 586;1176 586",
                "su": "1",
                "udsu": "1;1",
                "n": "东直门",
                "sid": "110100023096004",
                "p": "1179 586",
                "r": "110100023098|110100033066|110100023096",
                "udsi": "110100023099015;110100023098006",
                "t": "1",
                "si": "110100023096004",
                "sl": "116.435842,39.941626",
                "udli": "110100023099;110100023098",
                "poiid": "BV10002731",
                "lg": "3",
                "sp": "dong zhi men"
              },
              {
                "rs": "1179 628",
                "udpx": "1182 628;1176 628",
                "su": "1",
                "udsu": "1;1",
                "n": "东四十条",
                "sid": "110100023098007",
                "p": "1179 628",
                "r": "110100023098",
                "udsi": "110100023099014;110100023098007",
                "t": "0",
                "si": "110100023098007",
                "sl": "116.434133,39.933801",
                "udli": "110100023099;110100023098",
                "poiid": "BV10001047",
                "lg": "2",
                "sp": "dong si shi tiao"
              },
              {
                "rs": "1179 659|1179 659",
                "udpx": "1182 659;1176 659",
                "su": "1",
                "udsu": "1;1",
                "n": "朝阳门",
                "sid": "110100023098008",
                "p": "1179 659",
                "r": "110100023098|110100023339",
                "udsi": "110100023099013;110100023098008",
                "t": "1",
                "si": "110100023098008",
                "sl": "116.434584,39.924499",
                "udli": "110100023099;110100023098",
                "poiid": "BV10004298",
                "lg": "3",
                "sp": "zhao yang men"
              },
              {
                "rs": "1179 720|1179 720",
                "udpx": "1176 720;1182 720",
                "su": "1",
                "udsu": "1;1",
                "n": "建国门",
                "sid": "110100023098009",
                "p": "1179 720",
                "r": "110100023110|110100023098",
                "udsi": "110100023098009;110100023099012",
                "t": "1",
                "si": "110100023098009",
                "sl": "116.435806,39.908501",
                "udli": "110100023098;110100023099",
                "poiid": "BV10013432",
                "lg": "3",
                "sp": "jian guo men"
              },
              {
                "rs": "1171 759",
                "udpx": "1173 761;1170 757",
                "su": "1",
                "udsu": "1;1",
                "n": "北京站",
                "sid": "110100023098010",
                "p": "1171 759",
                "r": "110100023098",
                "udsi": "110100023099011;110100023098010",
                "t": "0",
                "si": "110100023098010",
                "sl": "116.427287,39.904983",
                "udli": "110100023099;110100023098",
                "poiid": "BV10006813",
                "lg": "2",
                "sp": "bei jing zhan"
              },
              {
                "rs": "1116 764|1116 764",
                "udpx": "1116 761;1116 766",
                "su": "1",
                "udsu": "1;1",
                "n": "崇文门",
                "sid": "110100023098011",
                "p": "1116 764",
                "r": "110100023098|110100023100",
                "udsi": "110100023098011;110100023099010",
                "t": "1",
                "si": "110100023098011",
                "sl": "116.417093,39.901063",
                "udli": "110100023098;110100023099",
                "poiid": "BV10013433",
                "lg": "3",
                "sp": "chong wen men"
              },
              {
                "rs": "1045 764|1045 764",
                "udpx": "1045 761;1045 766",
                "su": "1",
                "udsu": "1;1",
                "n": "前门",
                "sid": "110100023098012",
                "p": "1045 764",
                "r": "110100023098|110100023114",
                "udsi": "110100023098012;110100023099009",
                "t": "1",
                "si": "110100023098012",
                "sl": "116.397937,39.900192",
                "udli": "110100023098;110100023099",
                "poiid": "BV10005884",
                "lg": "1",
                "sp": "QianMen"
              },
              {
                "rs": "999 764",
                "udpx": "999 761;999 766",
                "su": "1",
                "udsu": "1;1",
                "n": "和平门",
                "sid": "110100023098013",
                "p": "999 764",
                "r": "110100023098",
                "udsi": "110100023098013;110100023099008",
                "t": "0",
                "si": "110100023098013",
                "sl": "116.384209,39.900098",
                "udli": "110100023098;110100023099",
                "poiid": "BV10013434",
                "lg": "0",
                "sp": "he ping men"
              },
              {
                "rs": "928 764|928 764",
                "udpx": "928 761;928 766",
                "su": "1",
                "udsu": "1;1",
                "n": "宣武门",
                "sid": "110100023076019",
                "p": "928 764",
                "r": "110100023098|110100023076",
                "udsi": "110100023098014;110100023099007",
                "t": "1",
                "si": "110100023076019",
                "sl": "116.374314,39.899765",
                "udli": "110100023098;110100023099",
                "poiid": "BV10013415",
                "lg": "1",
                "sp": "xuan wu men"
              },
              {
                "rs": "863 758",
                "udpx": "865 756;861 760",
                "su": "1",
                "udsu": "1;1",
                "n": "长椿街",
                "sid": "110100023098015",
                "p": "863 758",
                "r": "110100023098",
                "udsi": "110100023098015;110100023099006",
                "t": "0",
                "si": "110100023098015",
                "sl": "116.363355,39.899433",
                "udli": "110100023098;110100023099",
                "poiid": "BV10013435",
                "lg": "5",
                "sp": "chang chun jie"
              },
              {
                "rs": "858 720|858 720",
                "udpx": "861 720;856 720",
                "su": "1",
                "udsu": "1;1",
                "n": "复兴门",
                "sid": "110100023098016",
                "p": "858 720",
                "r": "110100023110|110100023098",
                "udsi": "110100023098016;110100023099005",
                "t": "1",
                "si": "110100023098016",
                "sl": "116.356866,39.907242",
                "udli": "110100023098;110100023099",
                "poiid": "BV10007375",
                "lg": "3",
                "sp": "fu xing men"
              },
              {
                "rs": "858 667",
                "udpx": "861 667;856 667",
                "su": "1",
                "udsu": "1;1",
                "n": "阜成门",
                "sid": "110100023098017",
                "p": "858 667",
                "r": "110100023098",
                "udsi": "110100023098017;110100023099004",
                "t": "0",
                "si": "110100023098017",
                "sl": "116.356009,39.923686",
                "udli": "110100023098;110100023099",
                "poiid": "BV10001036",
                "lg": "2",
                "sp": "FuChengMen"
              },
              {
                "rs": "858 625|858 625",
                "udpx": "856 625;861 625",
                "su": "1",
                "udsu": "1;1",
                "n": "车公庄",
                "sid": "110100023098018",
                "p": "858 625",
                "r": "110100023098|110100023339",
                "udsi": "110100023099003;110100023098018",
                "t": "1",
                "si": "110100023098018",
                "sl": "116.354357,39.932397",
                "udli": "110100023099;110100023098",
                "poiid": "BV10013437",
                "lg": "3",
                "sp": "che gong zhuang"
              },
              {
                "rs": "858 585|858 585",
                "udpx": "861 579;856 591,856 591",
                "su": "1",
                "udsu": "1;1,1",
                "n": "西直门",
                "sid": "110100023076013",
                "p": "858 585",
                "r": "110100023098|110100023076",
                "udsi": "110100023098019;110100023099002,110100023099020",
                "t": "1",
                "si": "110100023076013",
                "sl": "116.355426,39.940474",
                "udli": "110100023098;110100023099,110100023099",
                "poiid": "BV10001595",
                "lg": "3",
                "sp": "xi zhi men"
              }
            ],
            "ln": "2号线",
            "su": "1",
            "kn": "地铁2号线",
            "c": [
              "858 585",
              "858 571",
              "859 566",
              "861 561",
              "866 557",
              "873 555",
              "881 555",
              "936 556",
              "1002 555",
              "1002 555",
              "1077 555",
              "1116 555",
              "1151 555",
              "1161 556",
              "1169 559",
              "1174 563",
              "1177 569",
              "1179 575",
              "1179 586",
              "1179 628",
              "1179 659",
              "1179 720",
              "1179 736",
              "1178 744",
              "1177 750",
              "1175 755",
              "1171 759",
              "1166 762",
              "1158 764",
              "1116 764",
              "1045 764",
              "999 764",
              "928 764",
              "882 763",
              "874 763",
              "867 761",
              "863 758",
              "860 753",
              "859 748",
              "858 720",
              "858 667",
              "858 625",
              "858 585"
            ],
            "lo": "1",
            "lp": [
              "949 576"
            ],
            "f": [
              {
                "c": [
                  "856 591",
                  "856 625",
                  "856 667",
                  "856 720",
                  "856 748",
                  "857 754",
                  "861 760",
                  "866 764",
                  "874 766",
                  "882 766",
                  "928 766",
                  "999 766",
                  "1045 766",
                  "1116 766",
                  "1158 766",
                  "1167 765",
                  "1173 761",
                  "1178 756",
                  "1180 751",
                  "1181 744",
                  "1182 736",
                  "1182 720",
                  "1182 659",
                  "1182 628",
                  "1182 586",
                  "1182 575",
                  "1180 567",
                  "1176 561",
                  "1170 556",
                  "1161 553",
                  "1151 552",
                  "1116 552",
                  "1077 552",
                  "1008 552",
                  "1008 552",
                  "936 553",
                  "880 552",
                  "872 552",
                  "865 555",
                  "859 559",
                  "856 565",
                  "856 571",
                  "856 591"
                ],
                "li": "110100023099"
              },
              {
                "c": [
                  "861 579",
                  "861 571",
                  "862 566",
                  "863 563",
                  "867 560",
                  "873 558",
                  "881 558",
                  "936 558",
                  "995 558",
                  "995 558",
                  "1077 558",
                  "1116 558",
                  "1151 558",
                  "1160 559",
                  "1167 561",
                  "1172 565",
                  "1175 570",
                  "1176 575",
                  "1176 586",
                  "1176 628",
                  "1176 659",
                  "1176 720",
                  "1176 736",
                  "1176 743",
                  "1175 750",
                  "1173 753",
                  "1170 757",
                  "1165 759",
                  "1158 761",
                  "1116 761",
                  "1045 761",
                  "999 761",
                  "928 761",
                  "882 760",
                  "874 760",
                  "869 759",
                  "865 756",
                  "863 752",
                  "861 747",
                  "861 720",
                  "861 667",
                  "861 625",
                  "861 579"
                ],
                "li": "110100023098"
              }
            ],
            "ls": "110100023098",
            "cl": "0065B3",
            "la": "",
            "x": 3,
            "li": "110100023098|110100023099"
          },
          {
            "st": [
              {
                "rs": "878 1353",
                "udpx": "876 1353;881 1353",
                "su": "1",
                "udsu": "1;1",
                "n": "天宫院",
                "sid": "110100023076036",
                "p": "878 1353",
                "r": "110100023076",
                "udsi": "110100023076036;110100023077026",
                "t": "0",
                "si": "110100023076036",
                "sl": "116.319932,39.670342",
                "udli": "110100023076;110100023077",
                "poiid": "BV10003869",
                "lg": "2",
                "sp": "tian gong yuan"
              },
              {
                "rs": "878 1319",
                "udpx": "881 1319;876 1319",
                "su": "1",
                "udsu": "1;1",
                "n": "生物医药基地",
                "sid": "110100023076035",
                "p": "878 1319",
                "r": "110100023076",
                "udsi": "110100023077027;110100023076035",
                "t": "0",
                "si": "110100023076035",
                "sl": "116.321662,39.686510",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013422",
                "lg": "2",
                "sp": "sheng wu yi yao ji di"
              },
              {
                "rs": "878 1283",
                "udpx": "881 1283;875 1283",
                "su": "1",
                "udsu": "1;1",
                "n": "义和庄",
                "sid": "110100023076034",
                "p": "878 1283",
                "r": "110100023076",
                "udsi": "110100023077028;110100023076034",
                "t": "0",
                "si": "110100023076034",
                "sl": "116.319079,39.712387",
                "udli": "110100023077;110100023076",
                "poiid": "BV10010394",
                "lg": "2",
                "sp": "yi he zhuang"
              },
              {
                "rs": "878 1251",
                "udpx": "881 1251;875 1251",
                "su": "1",
                "udsu": "1;1",
                "n": "黄村火车站",
                "sid": "110100023076033",
                "p": "878 1251",
                "r": "110100023076",
                "udsi": "110100023077029;110100023076033",
                "t": "0",
                "si": "110100023076033",
                "sl": "116.332611,39.722966",
                "udli": "110100023077;110100023076",
                "poiid": "BV10000372",
                "lg": "2",
                "sp": "huang cun huo che zhan"
              },
              {
                "rs": "878 1216",
                "udpx": "875 1216;881 1216",
                "su": "1",
                "udsu": "1;1",
                "n": "黄村西大街",
                "sid": "110100023076032",
                "p": "878 1216",
                "r": "110100023076",
                "udsi": "110100023076032;110100023077030",
                "t": "0",
                "si": "110100023076032",
                "sl": "116.332631,39.731769",
                "udli": "110100023076;110100023077",
                "poiid": "BV10002783",
                "lg": "2",
                "sp": "huang cun xi da jie"
              },
              {
                "rs": "878 1183",
                "udpx": "875 1183;881 1183",
                "su": "1",
                "udsu": "1;1",
                "n": "清源路",
                "sid": "110100023076031",
                "p": "878 1183",
                "r": "110100023076",
                "udsi": "110100023076031;110100023077031",
                "t": "0",
                "si": "110100023076031",
                "sl": "116.332513,39.742724",
                "udli": "110100023076;110100023077",
                "poiid": "BV10013275",
                "lg": "2",
                "sp": "qing yuan lu"
              },
              {
                "rs": "878 1145",
                "udpx": "875 1145;881 1145",
                "su": "1",
                "udsu": "1;1",
                "n": "枣园",
                "sid": "110100023076030",
                "p": "878 1145",
                "r": "110100023076",
                "udsi": "110100023076030;110100023077032",
                "t": "0",
                "si": "110100023076030",
                "sl": "116.332204,39.753458",
                "udli": "110100023076;110100023077",
                "poiid": "BV10013421",
                "lg": "2",
                "sp": "zao yuan"
              },
              {
                "rs": "878 1113",
                "udpx": "881 1113;875 1113",
                "su": "1",
                "udsu": "1;1",
                "n": "高米店南",
                "sid": "110100023076029",
                "p": "878 1113",
                "r": "110100023076",
                "udsi": "110100023077033;110100023076029",
                "t": "0",
                "si": "110100023076029",
                "sl": "116.331605,39.763489",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013420",
                "lg": "2",
                "sp": "gao mi dian nan"
              },
              {
                "rs": "878 1066",
                "udpx": "881 1065;875 1066",
                "su": "1",
                "udsu": "1;1",
                "n": "高米店北",
                "sid": "110100023076028",
                "p": "878 1066",
                "r": "110100023076",
                "udsi": "110100023077034;110100023076028",
                "t": "0",
                "si": "110100023076028",
                "sl": "116.330787,39.773547",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013419",
                "lg": "2",
                "sp": "gao mi dian bei"
              },
              {
                "rs": "878 1028",
                "udpx": "881 1030;875 1027",
                "su": "1",
                "udsu": "1;1",
                "n": "西红门",
                "sid": "110100023076027",
                "p": "878 1028",
                "r": "110100023076",
                "udsi": "110100023077035;110100023076027",
                "t": "0",
                "si": "110100023076027",
                "sl": "116.328689,39.789800",
                "udli": "110100023077;110100023076",
                "poiid": "BV10000383",
                "lg": "6",
                "sp": "xi hong men"
              },
              {
                "rs": "928 1002|928 1002",
                "udpx": "925 1000;930 1004",
                "su": "1",
                "udsu": "1;1",
                "n": "新宫",
                "sid": "110100023076026",
                "p": "928 1002",
                "r": "110100023076|900000079004",
                "udsi": "110100023076026;110100023077036",
                "t": "1",
                "si": "110100023076026",
                "sl": "116.365549,39.812592",
                "udli": "110100023076;110100023077",
                "poiid": "BV10013418",
                "lg": "2",
                "sp": "XinGong"
              },
              {
                "rs": "928 974",
                "udpx": "930 974;925 974",
                "su": "1",
                "udsu": "1;1",
                "n": "公益西桥",
                "sid": "110100023076025",
                "p": "928 974",
                "r": "110100023076",
                "udsi": "110100023077002;110100023076025",
                "t": "0",
                "si": "110100023076025",
                "sl": "116.370796,39.836135",
                "udli": "110100023077;110100023076",
                "poiid": "BV10008170",
                "lg": "2",
                "sp": "gong yi xi qiao"
              },
              {
                "rs": "928 935|928 935",
                "udpx": "930 935;925 935",
                "su": "1",
                "udsu": "1;1",
                "n": "角门西",
                "sid": "110100023076024",
                "p": "928 935",
                "r": "110100023076|110100023282",
                "udsi": "110100023077003;110100023076024",
                "t": "1",
                "si": "110100023076024",
                "sl": "116.371154,39.845850",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013417",
                "lg": "1",
                "sp": "jiao men xi"
              },
              {
                "rs": "928 900",
                "udpx": "930 900;925 900",
                "su": "1",
                "udsu": "1;1",
                "n": "马家堡",
                "sid": "110100023076023",
                "p": "928 900",
                "r": "110100023076",
                "udsi": "110100023077004;110100023076023",
                "t": "0",
                "si": "110100023076023",
                "sl": "116.371361,39.853109",
                "udli": "110100023077;110100023076",
                "poiid": "BV10009949",
                "lg": "2",
                "sp": "ma jia bao"
              },
              {
                "rs": "928 864|928 864",
                "udpx": "925 864;930 864",
                "su": "1",
                "udsu": "1;1",
                "n": "北京南站",
                "sid": "110100023076022",
                "p": "928 864",
                "r": "110100023076|900000028907",
                "udsi": "110100023076022;110100023077005",
                "t": "1",
                "si": "110100023076022",
                "sl": "116.378963,39.865029",
                "udli": "110100023076;110100023077",
                "poiid": "BV10006454",
                "lg": "1",
                "sp": "BeiJing NanZhan"
              },
              {
                "rs": "928 831",
                "udpx": "930 832;925 832",
                "su": "1",
                "udsu": "1;1",
                "n": "陶然亭",
                "sid": "110100023076021",
                "p": "928 831",
                "r": "110100023076",
                "udsi": "110100023077006;110100023076021",
                "t": "0",
                "si": "110100023076021",
                "sl": "116.374383,39.878470",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013416",
                "lg": "2",
                "sp": "tao ran ting"
              },
              {
                "rs": "928 800|928 800",
                "udpx": "930 800;925 800",
                "su": "1",
                "udsu": "1;1",
                "n": "菜市口",
                "sid": "110100023054006",
                "p": "928 800",
                "r": "110100023076|110100023054",
                "udsi": "110100023077007;110100023076020",
                "t": "1",
                "si": "110100023054006",
                "sl": "116.374425,39.889296",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013379",
                "lg": "1",
                "sp": "cai shi kou"
              },
              {
                "rs": "928 764|928 764",
                "udpx": "925 764;930 764",
                "su": "1",
                "udsu": "1;1",
                "n": "宣武门",
                "sid": "110100023076019",
                "p": "928 764",
                "r": "110100023098|110100023076",
                "udsi": "110100023076019;110100023077008",
                "t": "1",
                "si": "110100023076019",
                "sl": "116.374314,39.899765",
                "udli": "110100023076;110100023077",
                "poiid": "BV10013415",
                "lg": "1",
                "sp": "xuan wu men"
              },
              {
                "rs": "928 720|928 720",
                "udpx": "925 720;930 720",
                "su": "1",
                "udsu": "1;1",
                "n": "西单",
                "sid": "110100023076018",
                "p": "928 720",
                "r": "110100023110|110100023076",
                "udsi": "110100023076018;110100023077009",
                "t": "1",
                "si": "110100023076018",
                "sl": "116.374072,39.907383",
                "udli": "110100023076;110100023077",
                "poiid": "BV10006791",
                "lg": "1",
                "sp": "xi dan"
              },
              {
                "rs": "928 690",
                "udpx": "925 690;930 690",
                "su": "1",
                "udsu": "1;1",
                "n": "灵境胡同",
                "sid": "110100023076017",
                "p": "928 690",
                "r": "110100023076",
                "udsi": "110100023076017;110100023077010",
                "t": "0",
                "si": "110100023076017",
                "sl": "116.373746,39.915912",
                "udli": "110100023076;110100023077",
                "poiid": "BV10008400",
                "lg": "2",
                "sp": "ling jing hu tong"
              },
              {
                "rs": "928 660",
                "udpx": "930 660;925 660",
                "su": "1",
                "udsu": "1;1",
                "n": "西四",
                "sid": "110100023076016",
                "p": "928 660",
                "r": "110100023076",
                "udsi": "110100023077011;110100023076016",
                "t": "0",
                "si": "110100023076016",
                "sl": "116.373332,39.924206",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013414",
                "lg": "2",
                "sp": "xi si"
              },
              {
                "rs": "928 625|928 625|928 625",
                "udpx": "925 625;930 625",
                "su": "1",
                "udsu": "1;1",
                "n": "平安里",
                "sid": "110100023076015",
                "p": "928 625",
                "r": "110100023076|110100023339|900000079004",
                "udsi": "110100023076015;110100023077012",
                "t": "1",
                "si": "110100023076015",
                "sl": "116.372883,39.933949",
                "udli": "110100023076;110100023077",
                "poiid": "BV10013413",
                "lg": "3",
                "sp": "PingAnLi"
              },
              {
                "rs": "926 589",
                "udpx": "928 589;924 592",
                "su": "1",
                "udsu": "1;1",
                "n": "新街口",
                "sid": "110100023076014",
                "p": "926 590",
                "r": "110100023076",
                "udsi": "110100023077013;110100023076014",
                "t": "0",
                "si": "110100023076014",
                "sl": "116.367742,39.940667",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013412",
                "lg": "2",
                "sp": "xin jie kou"
              },
              {
                "rs": "858 585|858 585",
                "udpx": "858 588;858 582",
                "su": "1",
                "udsu": "1;1",
                "n": "西直门",
                "sid": "110100023076013",
                "p": "858 585",
                "r": "110100023098|110100023076",
                "udsi": "110100023076013;110100023077014",
                "t": "1",
                "si": "110100023076013",
                "sl": "116.355426,39.940474",
                "udli": "110100023076;110100023077",
                "poiid": "BV10001595",
                "lg": "3",
                "sp": "xi zhi men"
              },
              {
                "rs": "812 585",
                "udpx": "812 582;812 588",
                "su": "1",
                "udsu": "1;1",
                "n": "动物园",
                "sid": "110100023076012",
                "p": "812 585",
                "r": "110100023076",
                "udsi": "110100023077015;110100023076012",
                "t": "0",
                "si": "110100023076012",
                "sl": "116.339031,39.938250",
                "udli": "110100023077;110100023076",
                "poiid": "BV10006771",
                "lg": "0",
                "sp": "dong wu yuan"
              },
              {
                "rs": "710 582|710 582|710 582",
                "udpx": "709 585;712 580",
                "su": "1",
                "udsu": "1;1",
                "n": "国家图书馆",
                "sid": "110100023076011",
                "p": "710 582",
                "r": "110100023076|110100023116|900000062236",
                "udsi": "110100023076011;110100023077016",
                "t": "1",
                "si": "110100023076011",
                "sl": "116.325190,39.943114",
                "udli": "110100023076;110100023077",
                "poiid": "BV10000252",
                "lg": "1",
                "sp": "GuoJia TuShuGuan"
              },
              {
                "rs": "699 544",
                "udpx": "702 544;696 544",
                "su": "1",
                "udsu": "1;1",
                "n": "魏公村",
                "sid": "110100023076010",
                "p": "699 544",
                "r": "110100023076",
                "udsi": "110100023077017;110100023076010",
                "t": "0",
                "si": "110100023076010",
                "sl": "116.323220,39.957904",
                "udli": "110100023077;110100023076",
                "poiid": "BV10000255",
                "lg": "2",
                "sp": "wei gong cun"
              },
              {
                "rs": "699 498",
                "udpx": "702 498;696 498",
                "su": "1",
                "udsu": "1;1",
                "n": "人民大学",
                "sid": "110100023076009",
                "p": "699 498",
                "r": "110100023076",
                "udsi": "110100023077018;110100023076009",
                "t": "0",
                "si": "110100023076009",
                "sl": "116.321367,39.966956",
                "udli": "110100023077;110100023076",
                "poiid": "BV10000258",
                "lg": "2",
                "sp": "ren min da xue"
              },
              {
                "rs": "699 448|699 448",
                "udpx": "696 448;702 448",
                "su": "1",
                "udsu": "1;1",
                "n": "海淀黄庄",
                "sid": "110100023076008",
                "p": "699 448",
                "r": "110100023076|110100023282",
                "udsi": "110100023076008;110100023077019",
                "t": "1",
                "si": "110100023076008",
                "sl": "116.317564,39.975996",
                "udli": "110100023076;110100023077",
                "poiid": "BV10013411",
                "lg": "3",
                "sp": "hai dian huang zhuang"
              },
              {
                "rs": "699 415",
                "udpx": "696 415;701 415",
                "su": "1",
                "udsu": "1;1",
                "n": "中关村",
                "sid": "110100023076007",
                "p": "699 415",
                "r": "110100023076",
                "udsi": "110100023076007;110100023077020",
                "t": "0",
                "si": "110100023076007",
                "sl": "116.316467,39.983991",
                "udli": "110100023076;110100023077",
                "poiid": "BV10013410",
                "lg": "2",
                "sp": "zhong guan cun"
              },
              {
                "rs": "699 379",
                "udpx": "702 379;696 379",
                "su": "1",
                "udsu": "1;1",
                "n": "北京大学东门",
                "sid": "110100023076006",
                "p": "699 379",
                "r": "110100023076",
                "udsi": "110100023077021;110100023076006",
                "t": "0",
                "si": "110100023076006",
                "sl": "116.315842,39.992212",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013409",
                "lg": "2",
                "sp": "bei jing da xue dong men"
              },
              {
                "rs": "699 342",
                "udpx": "702 342;696 342",
                "su": "1",
                "udsu": "1;1",
                "n": "圆明园",
                "sid": "110100023076005",
                "p": "699 342",
                "r": "110100023076",
                "udsi": "110100023077022;110100023076005",
                "t": "0",
                "si": "110100023076005",
                "sl": "116.310186,39.999662",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013408",
                "lg": "2",
                "sp": "yuan ming yuan"
              },
              {
                "rs": "636 331|636 331",
                "udpx": "636 328;636 334",
                "su": "1",
                "udsu": "1;1",
                "n": "西苑",
                "sid": "110100023076004",
                "p": "636 331",
                "r": "110100023076|900000062236",
                "udsi": "110100023077023;110100023076004",
                "t": "1",
                "si": "110100023076004",
                "sl": "116.290908,39.998258",
                "udli": "110100023077;110100023076",
                "poiid": "BV10000920",
                "lg": "1",
                "sp": "xi yuan"
              },
              {
                "rs": "573 331",
                "udpx": "573 328;573 334",
                "su": "1",
                "udsu": "1;1",
                "n": "北宫门",
                "sid": "110100023076003",
                "p": "573 331",
                "r": "110100023076",
                "udsi": "110100023077024;110100023076003",
                "t": "0",
                "si": "110100023076003",
                "sl": "116.277647,40.002373",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013407",
                "lg": "4",
                "sp": "bei gong men"
              },
              {
                "rs": "507 331",
                "udpx": "507 328;507 334",
                "su": "1",
                "udsu": "1;1",
                "n": "安河桥北",
                "sid": "110100023076002",
                "p": "507 331",
                "r": "110100023076",
                "udsi": "110100023077025;110100023076002",
                "t": "0",
                "si": "110100023076002",
                "sl": "116.269956,40.012195",
                "udli": "110100023077;110100023076",
                "poiid": "BV10013406",
                "lg": "4",
                "sp": "an he qiao bei"
              }
            ],
            "ln": "4号线大兴线",
            "su": "1",
            "kn": "地铁4号线大兴线",
            "c": [
              "507 331",
              "573 331",
              "636 331",
              "677 331",
              "686 331",
              "692 332",
              "696 334",
              "698 337",
              "699 342",
              "699 379",
              "699 415",
              "699 448",
              "699 498",
              "699 544",
              "699 566",
              "700 573",
              "703 578",
              "710 582",
              "717 585",
              "812 585",
              "858 585",
              "900 585",
              "914 585",
              "921 586",
              "926 589",
              "928 596",
              "928 625",
              "928 660",
              "928 690",
              "928 720",
              "928 764",
              "928 796",
              "928 800",
              "928 831",
              "928 832",
              "928 864",
              "928 866",
              "928 900",
              "928 935",
              "928 974",
              "928 1002",
              "878 1028",
              "878 1066",
              "878 1113",
              "878 1145",
              "878 1183",
              "878 1216",
              "878 1251",
              "878 1283",
              "878 1319",
              "878 1353"
            ],
            "lo": "0",
            "lp": [
              "506 304"
            ],
            "f": [
              {
                "c": [
                  "881 1353",
                  "881 1319",
                  "881 1283",
                  "881 1251",
                  "881 1216",
                  "881 1183",
                  "881 1145",
                  "881 1113",
                  "881 1065",
                  "881 1030",
                  "930 1004",
                  "930 974",
                  "930 935",
                  "930 900",
                  "930 866",
                  "930 864",
                  "930 832",
                  "930 800",
                  "930 796",
                  "930 764",
                  "930 720",
                  "930 690",
                  "930 660",
                  "930 625",
                  "930 596",
                  "928 589",
                  "928 588",
                  "922 583",
                  "915 582",
                  "900 582",
                  "858 582",
                  "812 582",
                  "717 582",
                  "712 580",
                  "706 576",
                  "703 572",
                  "702 566",
                  "702 544",
                  "702 498",
                  "702 448",
                  "701 415",
                  "702 379",
                  "702 342",
                  "700 336",
                  "698 332",
                  "692 329",
                  "686 328",
                  "677 328",
                  "636 328",
                  "573 328",
                  "507 328"
                ],
                "li": "110100023077"
              },
              {
                "c": [
                  "507 334",
                  "573 334",
                  "636 334",
                  "677 334",
                  "686 334",
                  "691 335",
                  "694 336",
                  "695 339",
                  "696 342",
                  "696 379",
                  "696 415",
                  "696 448",
                  "696 498",
                  "696 544",
                  "696 566",
                  "698 574",
                  "701 580",
                  "709 585",
                  "716 588",
                  "812 588",
                  "858 588",
                  "900 588",
                  "914 588",
                  "920 589",
                  "923 591",
                  "924 592",
                  "925 597",
                  "925 625",
                  "925 660",
                  "925 690",
                  "925 720",
                  "925 764",
                  "925 796",
                  "925 800",
                  "925 832",
                  "925 864",
                  "925 866",
                  "925 900",
                  "925 935",
                  "925 974",
                  "925 1000",
                  "875 1027",
                  "875 1066",
                  "875 1113",
                  "875 1145",
                  "875 1183",
                  "875 1216",
                  "875 1251",
                  "875 1283",
                  "876 1319",
                  "876 1353"
                ],
                "li": "110100023076"
              }
            ],
            "ls": "110100023076",
            "cl": "008187",
            "la": "",
            "x": 4,
            "li": "110100023076|110100023077"
          },
          {
            "st": [
              {
                "rs": "1116 935|1116 935|1116 935",
                "udpx": "1119 935;1113 935",
                "su": "1",
                "udsu": "1;1",
                "n": "宋家庄",
                "sid": "110100023100001",
                "p": "1116 935",
                "r": "110100023100|110100023282|110100023102",
                "udsi": "110100023100001;110100023101024",
                "t": "1",
                "si": "110100023100001",
                "sl": "116.428368,39.845849",
                "udli": "110100023100;110100023101",
                "poiid": "BV10000743",
                "lg": "3",
                "sp": "song jia zhuang"
              },
              {
                "rs": "1116 895",
                "udpx": "1119 895;1113 895",
                "su": "1",
                "udsu": "1;1",
                "n": "刘家窑",
                "sid": "110100023100002",
                "p": "1116 895",
                "r": "110100023100",
                "udsi": "110100023100002;110100023101023",
                "t": "0",
                "si": "110100023100002",
                "sl": "116.422119,39.857521",
                "udli": "110100023100;110100023101",
                "poiid": "BV10013438",
                "lg": "2",
                "sp": "liu jia yao"
              },
              {
                "rs": "1116 864|1116 864",
                "udpx": "1119 864;1113 864",
                "su": "1",
                "udsu": "1;1",
                "n": "蒲黄榆",
                "sid": "110100023100003",
                "p": "1116 864",
                "r": "110100023100|900000028907",
                "udsi": "110100023100003;110100023101022",
                "t": "1",
                "si": "110100023100003",
                "sl": "116.423720,39.865621",
                "udli": "110100023100;110100023101",
                "poiid": "BV10006603",
                "lg": "1",
                "sp": "PuHuangYu"
              },
              {
                "rs": "1116 831",
                "udpx": "1119 831;1113 831",
                "su": "1",
                "udsu": "1;1",
                "n": "天坛东门",
                "sid": "110100023100004",
                "p": "1116 831",
                "r": "110100023100",
                "udsi": "110100023100004;110100023101021",
                "t": "0",
                "si": "110100023100004",
                "sl": "116.420833,39.882558",
                "udli": "110100023100;110100023101",
                "poiid": "BV10013439",
                "lg": "2",
                "sp": "tian tan dong men"
              },
              {
                "rs": "1116 800|1116 800",
                "udpx": "1119 800;1113 800",
                "su": "1",
                "udsu": "1;1",
                "n": "磁器口",
                "sid": "110100023054010",
                "p": "1116 800",
                "r": "110100023100|110100023054",
                "udsi": "110100023100005;110100023101020",
                "t": "1",
                "si": "110100023054010",
                "sl": "116.419940,39.893172",
                "udli": "110100023100;110100023101",
                "poiid": "BV10013383",
                "lg": "3",
                "sp": "ci qi kou"
              },
              {
                "rs": "1116 764|1116 764",
                "udpx": "1113 764;1119 764",
                "su": "1",
                "udsu": "1;1",
                "n": "崇文门",
                "sid": "110100023098011",
                "p": "1116 764",
                "r": "110100023098|110100023100",
                "udsi": "110100023101019;110100023100006",
                "t": "1",
                "si": "110100023098011",
                "sl": "116.417093,39.901063",
                "udli": "110100023101;110100023100",
                "poiid": "BV10013433",
                "lg": "3",
                "sp": "chong wen men"
              },
              {
                "rs": "1116 720|1116 720",
                "udpx": "1113 720;1119 720",
                "su": "1",
                "udsu": "1;1",
                "n": "东单",
                "sid": "110100023100007",
                "p": "1116 720",
                "r": "110100023110|110100023100",
                "udsi": "110100023101018;110100023100007",
                "t": "1",
                "si": "110100023100007",
                "sl": "116.418480,39.908325",
                "udli": "110100023101;110100023100",
                "poiid": "BV10013440",
                "lg": "3",
                "sp": "dong dan"
              },
              {
                "rs": "1116 689",
                "udpx": "1113 689;1119 689",
                "su": "1",
                "udsu": "1;1",
                "n": "灯市口",
                "sid": "110100023100008",
                "p": "1116 689",
                "r": "110100023100",
                "udsi": "110100023101017;110100023100008",
                "t": "0",
                "si": "110100023100008",
                "sl": "116.417783,39.917113",
                "udli": "110100023101;110100023100",
                "poiid": "BV10013441",
                "lg": "2",
                "sp": "deng shi kou"
              },
              {
                "rs": "1116 659|1116 659",
                "udpx": "1113 659;1119 659",
                "su": "1",
                "udsu": "1;1",
                "n": "东四",
                "sid": "110100023100009",
                "p": "1116 659",
                "r": "110100023100|110100023339",
                "udsi": "110100023101016;110100023100009",
                "t": "1",
                "si": "110100023100009",
                "sl": "116.417493,39.924370",
                "udli": "110100023101;110100023100",
                "poiid": "BV10013442",
                "lg": "1",
                "sp": "dong si"
              },
              {
                "rs": "1116 616",
                "udpx": "1113 616;1119 616",
                "su": "1",
                "udsu": "1;1",
                "n": "张自忠路",
                "sid": "110100023100010",
                "p": "1116 616",
                "r": "110100023100",
                "udsi": "110100023101015;110100023100010",
                "t": "0",
                "si": "110100023100010",
                "sl": "116.417156,39.933592",
                "udli": "110100023101;110100023100",
                "poiid": "BV10001045",
                "lg": "2",
                "sp": "zhang zi zhong lu"
              },
              {
                "rs": "1116 586|1116 586",
                "udpx": "1119 586;1113 586",
                "su": "1",
                "udsu": "1;1",
                "n": "北新桥",
                "sid": "110100023096005",
                "p": "1116 586",
                "r": "110100023100|110100023096",
                "udsi": "110100023100011;110100023101014",
                "t": "1",
                "si": "110100023096005",
                "sl": "116.416884,39.940782",
                "udli": "110100023100;110100023101",
                "poiid": "BV10013443",
                "lg": "6",
                "sp": "BeiXinQiao"
              },
              {
                "rs": "1116 555|1116 555",
                "udpx": "1119 555;1113 555",
                "su": "1",
                "udsu": "1;1",
                "n": "雍和宫",
                "sid": "110100023098005",
                "p": "1116 555",
                "r": "110100023098|110100023100",
                "udsi": "110100023100012;110100023101013",
                "t": "1",
                "si": "110100023098005",
                "sl": "116.417069,39.949336",
                "udli": "110100023100;110100023101",
                "poiid": "BV10006563",
                "lg": "1",
                "sp": "yong he gong"
              },
              {
                "rs": "1116 515",
                "udpx": "1119 515;1113 515",
                "su": "1",
                "udsu": "1;1",
                "n": "和平里北街",
                "sid": "110100023100013",
                "p": "1116 515",
                "r": "110100023100",
                "udsi": "110100023100013;110100023101012",
                "t": "0",
                "si": "110100023100013",
                "sl": "116.418504,39.958734",
                "udli": "110100023100;110100023101",
                "poiid": "BV10006616",
                "lg": "2",
                "sp": "he ping li bei jie"
              },
              {
                "rs": "1116 487",
                "udpx": "1119 487;1113 487",
                "su": "1",
                "udsu": "1;1",
                "n": "和平西桥",
                "sid": "110100023100014",
                "p": "1116 487",
                "r": "110100023100",
                "udsi": "110100023100014;110100023101011",
                "t": "0",
                "si": "110100023100014",
                "sl": "116.417975,39.968386",
                "udli": "110100023100;110100023101",
                "poiid": "BV10001221",
                "lg": "2",
                "sp": "he ping xi qiao"
              },
              {
                "rs": "1116 448|1116 448",
                "udpx": "1119 448;1113 448",
                "su": "1",
                "udsu": "1;1",
                "n": "惠新西街南口",
                "sid": "110100023100015",
                "p": "1116 448",
                "r": "110100023100|110100023282",
                "udsi": "110100023100015;110100023101010",
                "t": "1",
                "si": "110100023100015",
                "sl": "116.417537,39.977121",
                "udli": "110100023100;110100023101",
                "poiid": "BV10005412",
                "lg": "3",
                "sp": "hui xin xi jie nan kou"
              },
              {
                "rs": "1116 417",
                "udpx": "1113 418;1119 418",
                "su": "1",
                "udsu": "1;1",
                "n": "惠新西街北口",
                "sid": "110100023100016",
                "p": "1116 417",
                "r": "110100023100",
                "udsi": "110100023101009;110100023100016",
                "t": "0",
                "si": "110100023100016",
                "sl": "116.417028,39.987836",
                "udli": "110100023101;110100023100",
                "poiid": "BV10006707",
                "lg": "2",
                "sp": "hui xin xi jie bei kou"
              },
              {
                "rs": "1116 386|1116 386",
                "udpx": "1113 386;1119 386",
                "su": "1",
                "udsu": "1;1",
                "n": "大屯路东",
                "sid": "110100023070020",
                "p": "1116 386",
                "r": "110100023100|110100023070",
                "udsi": "110100023101008;110100023100017",
                "t": "1",
                "si": "110100023070020",
                "sl": "116.417377,40.003841",
                "udli": "110100023101;110100023100",
                "poiid": "BV10013376",
                "lg": "1",
                "sp": "da tun lu dong"
              },
              {
                "rs": "1116 340",
                "udpx": "1113 340;1119 340",
                "su": "1",
                "udsu": "1;1",
                "n": "北苑路北",
                "sid": "110100023100018",
                "p": "1116 340",
                "r": "110100023100",
                "udsi": "110100023101007;110100023100018",
                "t": "0",
                "si": "110100023100018",
                "sl": "116.418089,40.030436",
                "udli": "110100023101;110100023100",
                "poiid": "BV10013444",
                "lg": "2",
                "sp": "bei yuan lu bei"
              },
              {
                "rs": "1116 304",
                "udpx": "1113 304;1119 304",
                "su": "1",
                "udsu": "1;1",
                "n": "立水桥南",
                "sid": "110100023100019",
                "p": "1116 304",
                "r": "110100023100",
                "udsi": "110100023101006;110100023100019",
                "t": "0",
                "si": "110100023100019",
                "sl": "116.414496,40.041956",
                "udli": "110100023101;110100023100",
                "poiid": "BV10004309",
                "lg": "2",
                "sp": "li shui qiao nan"
              },
              {
                "rs": "1116 267|1116 267",
                "udpx": "1113 267;1119 267",
                "su": "1",
                "udsu": "1;1",
                "n": "立水桥",
                "sid": "110100023100020",
                "p": "1116 267",
                "r": "110100023100|110100033066",
                "udsi": "110100023101005;110100023100020",
                "t": "1",
                "si": "110100023100020",
                "sl": "116.412350,40.053032",
                "udli": "110100023101;110100023100",
                "poiid": "BV10000461",
                "lg": "1",
                "sp": "li shui qiao"
              },
              {
                "rs": "1116 223",
                "udpx": "1113 223;1119 223",
                "su": "1",
                "udsu": "1;1",
                "n": "天通苑南",
                "sid": "110100023100021",
                "p": "1116 223",
                "r": "110100023100",
                "udsi": "110100023101004;110100023100021",
                "t": "0",
                "si": "110100023100021",
                "sl": "116.412661,40.066458",
                "udli": "110100023101;110100023100",
                "poiid": "BV10013445",
                "lg": "2",
                "sp": "tian tong yuan nan"
              },
              {
                "rs": "1116 191",
                "udpx": "1113 191;1119 191",
                "su": "1",
                "udsu": "1;1",
                "n": "天通苑",
                "sid": "110100023100022",
                "p": "1116 191",
                "r": "110100023100",
                "udsi": "110100023101003;110100023100022",
                "t": "0",
                "si": "110100023100022",
                "sl": "116.412759,40.075222",
                "udli": "110100023101;110100023100",
                "poiid": "BV10013446",
                "lg": "2",
                "sp": "tian tong yuan"
              },
              {
                "rs": "1116 160",
                "udpx": "1119 160;1113 160",
                "su": "1",
                "udsu": "1;1",
                "n": "天通苑北",
                "sid": "110100023100023",
                "p": "1116 160",
                "r": "110100023100",
                "udsi": "110100023100023;110100023101002",
                "t": "0",
                "si": "110100023100023",
                "sl": "116.412888,40.083668",
                "udli": "110100023100;110100023101",
                "poiid": "BV10013447",
                "lg": "2",
                "sp": "tian tong yuan bei"
              }
            ],
            "ln": "5号线",
            "su": "1",
            "kn": "地铁5号线",
            "c": [
              "1116 935",
              "1116 895",
              "1116 864",
              "1116 831",
              "1116 800",
              "1116 764",
              "1116 762",
              "1116 720",
              "1116 719",
              "1116 689",
              "1116 659",
              "1116 616",
              "1116 586",
              "1116 585",
              "1116 555",
              "1116 515",
              "1116 487",
              "1116 448",
              "1116 418",
              "1116 417",
              "1116 386",
              "1116 370",
              "1116 340",
              "1116 304",
              "1116 267",
              "1116 266",
              "1116 223",
              "1116 191",
              "1116 160"
            ],
            "lo": "0",
            "lp": [
              "1173 204"
            ],
            "f": [
              {
                "c": [
                  "1113 160",
                  "1113 191",
                  "1113 223",
                  "1113 266",
                  "1113 267",
                  "1113 304",
                  "1113 340",
                  "1113 370",
                  "1113 386",
                  "1113 418",
                  "1113 448",
                  "1113 487",
                  "1113 515",
                  "1113 555",
                  "1113 585",
                  "1113 586",
                  "1113 616",
                  "1113 659",
                  "1113 689",
                  "1113 719",
                  "1113 720",
                  "1113 762",
                  "1113 764",
                  "1113 800",
                  "1113 831",
                  "1113 864",
                  "1113 895",
                  "1113 935"
                ],
                "li": "110100023101"
              },
              {
                "c": [
                  "1119 935",
                  "1119 895",
                  "1119 864",
                  "1119 831",
                  "1119 800",
                  "1119 764",
                  "1119 763",
                  "1119 720",
                  "1119 719",
                  "1119 689",
                  "1119 659",
                  "1119 616",
                  "1119 586",
                  "1119 585",
                  "1119 555",
                  "1119 515",
                  "1119 487",
                  "1119 448",
                  "1119 418",
                  "1119 386",
                  "1119 370",
                  "1119 340",
                  "1119 304",
                  "1119 267",
                  "1119 266",
                  "1119 223",
                  "1119 191",
                  "1119 160"
                ],
                "li": "110100023100"
              }
            ],
            "ls": "110100023100",
            "cl": "A61D7F",
            "la": "",
            "x": 5,
            "li": "110100023100|110100023101"
          },
          {
            "st": [
              {
                "rs": "2000 772",
                "udpx": "2000 769;2000 775",
                "su": "1",
                "udsu": "1;1",
                "n": "潞城",
                "sid": "110100023339022",
                "p": "2000 772",
                "r": "110100023339",
                "udsi": "110100023339022;110100023340029",
                "t": "0",
                "si": "110100023339022",
                "sl": "116.747434,39.902652",
                "udli": "110100023339;110100023340",
                "poiid": "BV10416639",
                "lg": "0",
                "sp": "lu cheng"
              },
              {
                "rs": "1954 772",
                "udpx": "1954 775;1954 769",
                "su": "1",
                "udsu": "1;1",
                "n": "东夏园",
                "sid": "110100023339023",
                "p": "1954 772",
                "r": "110100023339",
                "udsi": "110100023340028;110100023339023",
                "t": "0",
                "si": "110100023339023",
                "sl": "116.733850,39.903147",
                "udli": "110100023340;110100023339",
                "poiid": "BV10416641",
                "lg": "0",
                "sp": "dong xia yuan"
              },
              {
                "rs": "1912 772",
                "udpx": "1912 769;1912 775",
                "su": "1",
                "udsu": "1;1",
                "n": "郝家府",
                "sid": "110100023339024",
                "p": "1912 772",
                "r": "110100023339",
                "udsi": "110100023339024;110100023340027",
                "t": "0",
                "si": "110100023339024",
                "sl": "116.717826,39.903195",
                "udli": "110100023339;110100023340",
                "poiid": "BV10416644",
                "lg": "4",
                "sp": "hao jia fu"
              },
              {
                "rs": "1872 772",
                "udpx": "1872 769;1872 775",
                "su": "1",
                "udsu": "1;1",
                "n": "北运河东",
                "sid": "110100023339025",
                "p": "1872 772",
                "r": "110100023339",
                "udsi": "110100023339025;110100023340026",
                "t": "0",
                "si": "110100023339025",
                "sl": "116.707056,39.903268",
                "udli": "110100023339;110100023340",
                "poiid": "BV10416651",
                "lg": "0",
                "sp": "bei yun he dong"
              },
              {
                "rs": "1825 772",
                "udpx": "1824 775;1827 769",
                "su": "1",
                "udsu": "1;1",
                "n": "北运河西",
                "sid": "110100023339026",
                "p": "1825 772",
                "r": "110100023339",
                "udsi": "110100023340025;110100023339026",
                "t": "0",
                "si": "110100023339026",
                "sl": "116.688358,39.903024",
                "udli": "110100023340;110100023339",
                "poiid": "BV10416648",
                "lg": "4",
                "sp": "bei yun he xi"
              },
              {
                "rs": "1747 659",
                "udpx": "1745 662;1748 656",
                "su": "1",
                "udsu": "1;1",
                "n": "通州北关",
                "sid": "110100023339028",
                "p": "1747 659",
                "r": "110100023339",
                "udsi": "110100023340023;110100023339028",
                "t": "0",
                "si": "110100023339028",
                "sl": "116.661131,39.917962",
                "udli": "110100023340;110100023339",
                "poiid": "BV10416643",
                "lg": "0",
                "sp": "tong zhou bei guan"
              },
              {
                "rs": "1687 659",
                "udpx": "1687 662;1687 656",
                "su": "1",
                "udsu": "1;1",
                "n": "物资学院路",
                "sid": "110100023339029",
                "p": "1687 659",
                "r": "110100023339",
                "udsi": "110100023340022;110100023339029",
                "t": "0",
                "si": "110100023339029",
                "sl": "116.639316,39.926801",
                "udli": "110100023340;110100023339",
                "poiid": "BV10416645",
                "lg": "4",
                "sp": "wu zi xue yuan lu"
              },
              {
                "rs": "1629 659",
                "udpx": "1629 662;1629 656",
                "su": "1",
                "udsu": "1;1",
                "n": "草房",
                "sid": "110100023339002",
                "p": "1629 659",
                "r": "110100023339",
                "udsi": "110100023340021;110100023339002",
                "t": "0",
                "si": "110100023339002",
                "sl": "116.615574,39.924477",
                "udli": "110100023340;110100023339",
                "poiid": "BV10006882",
                "lg": "0",
                "sp": "cao fang"
              },
              {
                "rs": "1580 659",
                "udpx": "1580 662;1580 656",
                "su": "1",
                "udsu": "1;1",
                "n": "常营",
                "sid": "110100023339003",
                "p": "1580 659",
                "r": "110100023339",
                "udsi": "110100023340020;110100023339003",
                "t": "0",
                "si": "110100023339003",
                "sl": "116.599722,39.925696",
                "udli": "110100023340;110100023339",
                "poiid": "BV10006429",
                "lg": "4",
                "sp": "chang ying"
              },
              {
                "rs": "1529 659",
                "udpx": "1529 662;1529 656",
                "su": "1",
                "udsu": "1;1",
                "n": "黄渠",
                "sid": "110100023339004",
                "p": "1529 659",
                "r": "110100023339",
                "udsi": "110100023340019;110100023339004",
                "t": "0",
                "si": "110100023339004",
                "sl": "116.578266,39.924201",
                "udli": "110100023340;110100023339",
                "poiid": "BV10013505",
                "lg": "0",
                "sp": "huang qu"
              },
              {
                "rs": "1478 659",
                "udpx": "1478 662;1478 656",
                "su": "1",
                "udsu": "1;1",
                "n": "褡裢坡",
                "sid": "110100023339005",
                "p": "1478 659",
                "r": "110100023339",
                "udsi": "110100023340018;110100023339005",
                "t": "0",
                "si": "110100023339005",
                "sl": "116.563961,39.924021",
                "udli": "110100023340;110100023339",
                "poiid": "BV10013506",
                "lg": "4",
                "sp": "da lian po"
              },
              {
                "rs": "1429 659",
                "udpx": "1429 656;1429 662",
                "su": "1",
                "udsu": "1;1",
                "n": "青年路",
                "sid": "110100023339006",
                "p": "1429 659",
                "r": "110100023339",
                "udsi": "110100023339006;110100023340017",
                "t": "0",
                "si": "110100023339006",
                "sl": "116.517429,39.923168",
                "udli": "110100023339;110100023340",
                "poiid": "BV10013507",
                "lg": "0",
                "sp": "qing nian lu"
              },
              {
                "rs": "1379 659",
                "udpx": "1379 656;1379 662",
                "su": "1",
                "udsu": "1;1",
                "n": "十里堡",
                "sid": "110100023339007",
                "p": "1379 659",
                "r": "110100023339",
                "udsi": "110100023339007;110100023340016",
                "t": "0",
                "si": "110100023339007",
                "sl": "116.502045,39.923076",
                "udli": "110100023339;110100023340",
                "poiid": "BV10000481",
                "lg": "4",
                "sp": "shi li bao"
              },
              {
                "rs": "1337 659|1337 659",
                "udpx": "1337 656;1337 662",
                "su": "1",
                "udsu": "1;1",
                "n": "金台路",
                "sid": "110100023339008",
                "p": "1337 659",
                "r": "110100023339|900000028907",
                "udsi": "110100023339008;110100023340015",
                "t": "1",
                "si": "110100023339008",
                "sl": "116.478115,39.923556",
                "udli": "110100023339;110100023340",
                "poiid": "BV10008284",
                "lg": "1",
                "sp": "JinTai Lu"
              },
              {
                "rs": "1279 659|1279 659",
                "udpx": "1279 656;1279 662",
                "su": "1",
                "udsu": "1;1",
                "n": "呼家楼",
                "sid": "110100023282019",
                "p": "1279 659",
                "r": "110100023339|110100023282",
                "udsi": "110100023339009;110100023340014",
                "t": "1",
                "si": "110100023282019",
                "sl": "116.461618,39.923337",
                "udli": "110100023339;110100023340",
                "poiid": "BV10013489",
                "lg": "1",
                "sp": "hu jia lou"
              },
              {
                "rs": "1229 659",
                "udpx": "1229 656;1229 662",
                "su": "1",
                "udsu": "1;1",
                "n": "东大桥",
                "sid": "110100023339010",
                "p": "1229 659",
                "r": "110100023339",
                "udsi": "110100023339010;110100023340013",
                "t": "0",
                "si": "110100023339010",
                "sl": "116.451657,39.923054",
                "udli": "110100023339;110100023340",
                "poiid": "BV10000548",
                "lg": "0",
                "sp": "dong da qiao"
              },
              {
                "rs": "1179 659|1179 659",
                "udpx": "1179 656;1179 662",
                "su": "1",
                "udsu": "1;1",
                "n": "朝阳门",
                "sid": "110100023098008",
                "p": "1179 659",
                "r": "110100023098|110100023339",
                "udsi": "110100023339011;110100023340012",
                "t": "1",
                "si": "110100023098008",
                "sl": "116.434584,39.924499",
                "udli": "110100023339;110100023340",
                "poiid": "BV10004298",
                "lg": "3",
                "sp": "zhao yang men"
              },
              {
                "rs": "1116 659|1116 659",
                "udpx": "1116 662;1116 656",
                "su": "1",
                "udsu": "1;1",
                "n": "东四",
                "sid": "110100023100009",
                "p": "1116 659",
                "r": "110100023100|110100023339",
                "udsi": "110100023340011;110100023339012",
                "t": "1",
                "si": "110100023100009",
                "sl": "116.417493,39.924370",
                "udli": "110100023340;110100023339",
                "poiid": "BV10013442",
                "lg": "1",
                "sp": "dong si"
              },
              {
                "rs": "1015 625|1015 625",
                "udpx": "1016 622;1014 628",
                "su": "1",
                "udsu": "1;1",
                "n": "南锣鼓巷",
                "sid": "110100023114002",
                "p": "1015 625",
                "r": "110100023339|110100023114",
                "udsi": "110100023339013;110100023340010",
                "t": "1",
                "si": "110100023114002",
                "sl": "116.404192,39.933848",
                "udli": "110100023339;110100023340",
                "poiid": "BV10013392",
                "lg": "2",
                "sp": "nan luo gu xiang"
              },
              {
                "rs": "970 625",
                "udpx": "970 628;970 622",
                "su": "1",
                "udsu": "1;1",
                "n": "北海北",
                "sid": "110100023339014",
                "p": "970 625",
                "r": "110100023339",
                "udsi": "110100023340009;110100023339014",
                "t": "0",
                "si": "110100023339014",
                "sl": "116.386829,39.933247",
                "udli": "110100023340;110100023339",
                "poiid": "BV10013508",
                "lg": "0",
                "sp": "bei hai bei"
              },
              {
                "rs": "928 625|928 625|928 625",
                "udpx": "928 622;928 628",
                "su": "1",
                "udsu": "1;1",
                "n": "平安里",
                "sid": "110100023076015",
                "p": "928 625",
                "r": "110100023076|110100023339|900000079004",
                "udsi": "110100023339015;110100023340008",
                "t": "1",
                "si": "110100023076015",
                "sl": "116.372883,39.933949",
                "udli": "110100023339;110100023340",
                "poiid": "BV10013413",
                "lg": "3",
                "sp": "PingAnLi"
              },
              {
                "rs": "858 625|858 625",
                "udpx": "858 628;858 622",
                "su": "1",
                "udsu": "1;1",
                "n": "车公庄",
                "sid": "110100023098018",
                "p": "858 625",
                "r": "110100023098|110100023339",
                "udsi": "110100023340007;110100023339016",
                "t": "1",
                "si": "110100023098018",
                "sl": "116.354357,39.932397",
                "udli": "110100023340;110100023339",
                "poiid": "BV10013437",
                "lg": "3",
                "sp": "che gong zhuang"
              },
              {
                "rs": "798 625",
                "udpx": "798 628;798 622",
                "su": "1",
                "udsu": "1;1",
                "n": "车公庄西",
                "sid": "110100023339017",
                "p": "798 625",
                "r": "110100023339",
                "udsi": "110100023340006;110100023339017",
                "t": "0",
                "si": "110100023339017",
                "sl": "116.344082,39.932466",
                "udli": "110100023340;110100023339",
                "poiid": "BV10000051",
                "lg": "0",
                "sp": "che gong zhuang xi"
              },
              {
                "rs": "710 625|710 625",
                "udpx": "710 622;710 628",
                "su": "1",
                "udsu": "1;1",
                "n": "白石桥南",
                "sid": "110100023116013",
                "p": "710 625",
                "r": "110100023339|110100023116",
                "udsi": "110100023339018;110100023340005",
                "t": "1",
                "si": "110100023116013",
                "sl": "116.325680,39.933022",
                "udli": "110100023339;110100023340",
                "poiid": "BV10000061",
                "lg": "5",
                "sp": "bai shi qiao nan"
              },
              {
                "rs": "635 625",
                "udpx": "635 622;635 628",
                "su": "1",
                "udsu": "1;1",
                "n": "花园桥",
                "sid": "110100023339019",
                "p": "635 625",
                "r": "110100023339",
                "udsi": "110100023339019;110100023340004",
                "t": "0",
                "si": "110100023339019",
                "sl": "116.310683,39.932340",
                "udli": "110100023339;110100023340",
                "poiid": "BV10013509",
                "lg": "0",
                "sp": "hua yuan qiao"
              },
              {
                "rs": "561 625|561 625",
                "udpx": "561 622;561 628",
                "su": "1",
                "udsu": "1;1",
                "n": "慈寿寺",
                "sid": "110100023282043",
                "p": "561 625",
                "r": "110100023339|110100023282",
                "udsi": "110100023339020;110100023340003",
                "t": "1",
                "si": "110100023282043",
                "sl": "116.295467,39.933268",
                "udli": "110100023339;110100023340",
                "poiid": "BV10013496",
                "lg": "1",
                "sp": "ci shou si"
              },
              {
                "rs": "487 625",
                "udpx": "487 622;487 628",
                "su": "1",
                "udsu": "1;1",
                "n": "海淀五路居",
                "sid": "110100023339021",
                "p": "487 625",
                "r": "110100023339",
                "udsi": "110100023339021;110100023340002",
                "t": "0",
                "si": "110100023339021",
                "sl": "116.276531,39.932584",
                "udli": "110100023339;110100023340",
                "poiid": "BV10013510",
                "lg": "0",
                "sp": "hai dian wu lu ju"
              },
              {
                "rs": "451 625",
                "udpx": "451 622;451 628",
                "su": "1",
                "udsu": "1;1",
                "n": "田村",
                "sid": "110100023339030",
                "p": "451 625",
                "r": "110100023339",
                "udsi": "110100023339030;110100023340033",
                "t": "0",
                "si": "110100023339030",
                "sl": "116.252914,39.929503",
                "udli": "110100023339;110100023340",
                "poiid": "BV11103939",
                "lg": "4",
                "sp": "tian cun"
              },
              {
                "rs": "416 625",
                "udpx": "416 622;416 628",
                "su": "1",
                "udsu": "1;1",
                "n": "廖公庄",
                "sid": "110100023339031",
                "p": "416 625",
                "r": "110100023339",
                "udsi": "110100023339031;110100023340032",
                "t": "0",
                "si": "110100023339031",
                "sl": "116.227292,39.932422",
                "udli": "110100023339;110100023340",
                "poiid": "BV11103937",
                "lg": "0",
                "sp": "liao gong zhuang"
              },
              {
                "rs": "379 625",
                "udpx": "379 622;379 628",
                "su": "1",
                "udsu": "1;1",
                "n": "西黄村",
                "sid": "110100023339032",
                "p": "379 625",
                "r": "110100023339",
                "udsi": "110100023339032;110100023340031",
                "t": "0",
                "si": "110100023339032",
                "sl": "116.206932,39.933605",
                "udli": "110100023339;110100023340",
                "poiid": "BV11103938",
                "lg": "7",
                "sp": "xi huang cun"
              },
              {
                "rs": "357 654",
                "udpx": "354 652;359 655",
                "su": "1",
                "udsu": "1;1",
                "n": "杨庄",
                "sid": "110100023339033",
                "p": "357 654",
                "r": "110100023339",
                "udsi": "110100023339033;110100023340030",
                "t": "0",
                "si": "110100023339033",
                "sl": "116.187004,39.927850",
                "udli": "110100023339;110100023340",
                "poiid": "BV10827741",
                "lg": "7",
                "sp": "yang zhuang"
              },
              {
                "rs": "312 684|312 672",
                "udpx": "312 669;312 675",
                "su": "1",
                "udsu": "1;1",
                "n": "苹果园",
                "sid": "110100023339034",
                "p": "312 678",
                "r": "900000069871|110100023339",
                "udsi": "110100023339034;110100023340035",
                "t": "1",
                "si": "110100023339034",
                "sl": "116.178945,39.925686",
                "udli": "110100023339;110100023340",
                "poiid": "BV10013454",
                "lg": "0",
                "sp": "PingGuoYuan"
              },
              {
                "rs": "270 684|270 672|270 678",
                "udpx": "270 669;270 675",
                "su": "1",
                "udsu": "1;1",
                "n": "金安桥",
                "sid": "110100023339035",
                "p": "270 678",
                "r": "900000069871|110100023339|900000159716",
                "udsi": "110100023339035;110100023340034",
                "t": "1",
                "si": "110100023339035",
                "sl": "116.162586,39.923298",
                "udli": "110100023339;110100023340",
                "poiid": "BV11494889",
                "lg": "0",
                "sp": "JinAn Qiao"
              }
            ],
            "ln": "6号线",
            "su": "1",
            "kn": "地铁6号线",
            "c": [
              "270 672",
              "312 672",
              "340 672",
              "341 672",
              "343 672",
              "344 671",
              "346 670",
              "347 670",
              "347 669",
              "357 654",
              "372 628",
              "373 627",
              "374 627",
              "375 626",
              "376 626",
              "378 625",
              "379 625",
              "416 625",
              "451 625",
              "487 625",
              "561 625",
              "635 625",
              "710 625",
              "798 625",
              "858 625",
              "928 625",
              "970 625",
              "1015 625",
              "1056 657",
              "1059 659",
              "1063 659",
              "1116 659",
              "1179 659",
              "1229 659",
              "1279 659",
              "1337 659",
              "1379 659",
              "1429 659",
              "1478 659",
              "1529 659",
              "1580 659",
              "1629 659",
              "1687 659",
              "1747 659",
              "1784 711",
              "1825 772",
              "1872 772",
              "1912 772",
              "1954 772",
              "2000 772"
            ],
            "lo": "0",
            "lp": [
              "491 648"
            ],
            "f": [
              {
                "c": [
                  "2000 769",
                  "1954 769",
                  "1912 769",
                  "1872 769",
                  "1827 769",
                  "1786 710",
                  "1748 656",
                  "1687 656",
                  "1629 656",
                  "1580 656",
                  "1529 656",
                  "1478 656",
                  "1429 656",
                  "1379 656",
                  "1337 656",
                  "1279 656",
                  "1229 656",
                  "1179 656",
                  "1116 656",
                  "1063 656",
                  "1060 656",
                  "1058 655",
                  "1016 622",
                  "970 622",
                  "928 622",
                  "858 622",
                  "798 622",
                  "710 622",
                  "635 622",
                  "561 622",
                  "487 622",
                  "451 622",
                  "416 622",
                  "379 622",
                  "377 622",
                  "376 623",
                  "374 623",
                  "373 624",
                  "372 625",
                  "370 626",
                  "354 652",
                  "345 667",
                  "345 667",
                  "344 668",
                  "343 668",
                  "342 669",
                  "341 669",
                  "340 669",
                  "312 669",
                  "270 669"
                ],
                "li": "110100023339"
              },
              {
                "c": [
                  "270 675",
                  "312 675",
                  "340 675",
                  "342 675",
                  "343 674",
                  "346 674",
                  "347 673",
                  "348 672",
                  "350 671",
                  "359 655",
                  "374 630",
                  "375 629",
                  "376 629",
                  "376 629",
                  "377 628",
                  "378 628",
                  "379 628",
                  "416 628",
                  "451 628",
                  "487 628",
                  "561 628",
                  "635 628",
                  "710 628",
                  "798 628",
                  "858 628",
                  "928 628",
                  "970 628",
                  "1014 628",
                  "1055 660",
                  "1058 661",
                  "1063 662",
                  "1116 662",
                  "1179 662",
                  "1229 662",
                  "1279 662",
                  "1337 662",
                  "1379 662",
                  "1429 662",
                  "1478 662",
                  "1529 662",
                  "1580 662",
                  "1629 662",
                  "1687 662",
                  "1745 662",
                  "1781 713",
                  "1824 775",
                  "1872 775",
                  "1912 775",
                  "1954 775",
                  "2000 775"
                ],
                "li": "110100023340"
              }
            ],
            "ls": "110100023339",
            "cl": "D0970A",
            "la": "",
            "x": 6,
            "li": "110100023339|110100023340"
          },
          {
            "st": [
              {
                "rs": "1827 1032|1821 1032",
                "udpx": "1818 1032;1823 1032",
                "su": "1",
                "udsu": "1;1",
                "n": "环球度假区",
                "sid": "110100023054033",
                "p": "1824 1032",
                "r": "110100023110|110100023054",
                "udsi": "110100023054033;110100023055025",
                "t": "1",
                "si": "110100023054033",
                "sl": "116.679099,39.849152",
                "udli": "110100023054;110100023055",
                "poiid": "BV10850689",
                "lg": "2",
                "sp": "HuanQiu DuJiaQu"
              },
              {
                "rs": "1827 1001|1819 1000",
                "udpx": "1818 1001;1823 1001",
                "su": "1",
                "udsu": "1;1",
                "n": "花庄",
                "sid": "110100023054032",
                "p": "1823 1001",
                "r": "110100023110|110100023054",
                "udsi": "110100023054032;110100023055026",
                "t": "1",
                "si": "110100023054032",
                "sl": "116.695495,39.856722",
                "udli": "110100023054;110100023055",
                "poiid": "BV11253781",
                "lg": "2",
                "sp": "HuaZhuang"
              },
              {
                "rs": "1768 976",
                "udpx": "1768 978;1768 973",
                "su": "1",
                "udsu": "1;1",
                "n": "高楼金",
                "sid": "110100023054031",
                "p": "1768 976",
                "r": "110100023054",
                "udsi": "110100023054031;110100023055027",
                "t": "0",
                "si": "110100023054031",
                "sl": "116.684340,39.863154",
                "udli": "110100023054;110100023055",
                "poiid": "BV11303297",
                "lg": "0",
                "sp": "GaoLouJin"
              },
              {
                "rs": "1730 976",
                "udpx": "1730 979;1730 973",
                "su": "1",
                "udsu": "1;1",
                "n": "群芳",
                "sid": "110100023054030",
                "p": "1730 976",
                "r": "110100023054",
                "udsi": "110100023054030;110100023055028",
                "t": "0",
                "si": "110100023054030",
                "sl": "116.670792,39.863515",
                "udli": "110100023054;110100023055",
                "poiid": "BV11303300",
                "lg": "4",
                "sp": "QunFang"
              },
              {
                "rs": "1691 977",
                "udpx": "1691 979;1691 974",
                "su": "1",
                "udsu": "1;1",
                "n": "万盛东",
                "sid": "110100023054029",
                "p": "1691 977",
                "r": "110100023054",
                "udsi": "110100023054029;110100023055029",
                "t": "0",
                "si": "110100023054029",
                "sl": "116.657379,39.863491",
                "udli": "110100023054;110100023055",
                "poiid": "BV11303302",
                "lg": "0",
                "sp": "WanShengDong"
              },
              {
                "rs": "1655 977",
                "udpx": "1656 980;1655 975",
                "su": "1",
                "udsu": "1;1",
                "n": "万盛西",
                "sid": "110100023054028",
                "p": "1655 977",
                "r": "110100023054",
                "udsi": "110100023054028;110100023055030",
                "t": "0",
                "si": "110100023054028",
                "sl": "116.632160,39.863328",
                "udli": "110100023054;110100023055",
                "poiid": "BV11303299",
                "lg": "4",
                "sp": "WanShengXi"
              },
              {
                "rs": "1616 978",
                "udpx": "1616 981;1616 975",
                "su": "1",
                "udsu": "1;1",
                "n": "黑庄户",
                "sid": "110100023054027",
                "p": "1616 978",
                "r": "110100023054",
                "udsi": "110100023054027;110100023055031",
                "t": "0",
                "si": "110100023054027",
                "sl": "116.599119,39.858725",
                "udli": "110100023054;110100023055",
                "poiid": "BV11303296",
                "lg": "0",
                "sp": "HeiZhuangHu"
              },
              {
                "rs": "1579 979",
                "udpx": "1579 981;1579 976",
                "su": "1",
                "udsu": "1;1",
                "n": "郎辛庄",
                "sid": "110100023054026",
                "p": "1579 979",
                "r": "110100023054",
                "udsi": "110100023054026;110100023055032",
                "t": "0",
                "si": "110100023054026",
                "sl": "116.569826,39.856496",
                "udli": "110100023054;110100023055",
                "poiid": "BV11303301",
                "lg": "4",
                "sp": "Lang XinZhuang"
              },
              {
                "rs": "1542 979",
                "udpx": "1542 982;1542 976",
                "su": "1",
                "udsu": "1;1",
                "n": "黄厂",
                "sid": "110100023054025",
                "p": "1542 979",
                "r": "110100023054",
                "udsi": "110100023054025;110100023055033",
                "t": "0",
                "si": "110100023054025",
                "sl": "116.553759,39.848979",
                "udli": "110100023054;110100023055",
                "poiid": "BV11303298",
                "lg": "0",
                "sp": "HuangChang"
              },
              {
                "rs": "1508 979",
                "udpx": "1508 982;1508 976",
                "su": "1",
                "udsu": "1;1",
                "n": "焦化厂",
                "sid": "110100023054022",
                "p": "1508 979",
                "r": "110100023054",
                "udsi": "110100023054022;110100023055002",
                "t": "0",
                "si": "110100023054022",
                "sl": "116.537247,39.855488",
                "udli": "110100023054;110100023055",
                "poiid": "BV10013391",
                "lg": "4",
                "sp": "jiao hua chang"
              },
              {
                "rs": "1471 979",
                "udpx": "1471 982;1471 976",
                "su": "1",
                "udsu": "1;1",
                "n": "双合",
                "sid": "110100023054021",
                "p": "1471 979",
                "r": "110100023054",
                "udsi": "110100023054021;110100023055003",
                "t": "0",
                "si": "110100023054021",
                "sl": "116.526836,39.859691",
                "udli": "110100023054;110100023055",
                "poiid": "BV10416577",
                "lg": "0",
                "sp": "shuang he"
              },
              {
                "rs": "1440 979",
                "udpx": "1439 981;1440 976",
                "su": "1",
                "udsu": "1;1",
                "n": "垡头",
                "sid": "110100023054020",
                "p": "1440 979",
                "r": "110100023054",
                "udsi": "110100023054020;110100023055004",
                "t": "0",
                "si": "110100023054020",
                "sl": "116.511821,39.860728",
                "udli": "110100023054;110100023055",
                "poiid": "BV10007127",
                "lg": "4",
                "sp": "fa tou"
              },
              {
                "rs": "1407 919",
                "udpx": "1410 919;1405 919",
                "su": "1",
                "udsu": "1;1",
                "n": "欢乐谷景区",
                "sid": "110100023054019",
                "p": "1407 919",
                "r": "110100023054",
                "udsi": "110100023055005;110100023054019",
                "t": "0",
                "si": "110100023054019",
                "sl": "116.500067,39.866505",
                "udli": "110100023055;110100023054",
                "poiid": "BV10013389",
                "lg": "2",
                "sp": "huan le gu jing qu"
              },
              {
                "rs": "1408 880",
                "udpx": "1410 880;1405 880",
                "su": "1",
                "udsu": "1;1",
                "n": "南楼梓庄",
                "sid": "110100023054018",
                "p": "1408 880",
                "r": "110100023054",
                "udsi": "110100023055006;110100023054018",
                "t": "0",
                "si": "110100023054018",
                "sl": "116.501084,39.874578",
                "udli": "110100023055;110100023054",
                "poiid": "BV10013388",
                "lg": "2",
                "sp": "nan lou zi zhuang"
              },
              {
                "rs": "1408 840",
                "udpx": "1405 840;1411 840",
                "su": "1",
                "udsu": "1;1",
                "n": "化工",
                "sid": "110100023054017",
                "p": "1408 840",
                "r": "110100023054",
                "udsi": "110100023054017;110100023055007",
                "t": "0",
                "si": "110100023054017",
                "sl": "116.503439,39.887369",
                "udli": "110100023054;110100023055",
                "poiid": "BV10013387",
                "lg": "2",
                "sp": "hua gong"
              },
              {
                "rs": "1403 800",
                "udpx": "1402 803;1403 797",
                "su": "1",
                "udsu": "1;1",
                "n": "百子湾",
                "sid": "110100023054016",
                "p": "1403 800",
                "r": "110100023054",
                "udsi": "110100023054016;110100023055008",
                "t": "0",
                "si": "110100023054016",
                "sl": "116.497768,39.892530",
                "udli": "110100023054;110100023055",
                "poiid": "BV10000647",
                "lg": "1",
                "sp": "bai zi wan"
              },
              {
                "rs": "1370 800",
                "udpx": "1370 803;1370 797",
                "su": "1",
                "udsu": "1;1",
                "n": "大郊亭",
                "sid": "110100023054015",
                "p": "1370 800",
                "r": "110100023054",
                "udsi": "110100023054015;110100023055009",
                "t": "0",
                "si": "110100023054015",
                "sl": "116.487935,39.893183",
                "udli": "110100023054;110100023055",
                "poiid": "BV10013386",
                "lg": "4",
                "sp": "da jiao ting"
              },
              {
                "rs": "1337 800|1337 800",
                "udpx": "1337 803;1337 797",
                "su": "1",
                "udsu": "1;1",
                "n": "九龙山",
                "sid": "110100023054014",
                "p": "1337 800",
                "r": "110100023054|900000028907",
                "udsi": "110100023054014;110100023055010",
                "t": "1",
                "si": "110100023054014",
                "sl": "116.478695,39.893222",
                "udli": "110100023054;110100023055",
                "poiid": "BV10006224",
                "lg": "1",
                "sp": "JiuLongShan"
              },
              {
                "rs": "1279 800|1279 800",
                "udpx": "1279 803;1279 797",
                "su": "1",
                "udsu": "1;1",
                "n": "双井",
                "sid": "110100023054013",
                "p": "1279 800",
                "r": "110100023054|110100023282",
                "udsi": "110100023054013;110100023055011",
                "t": "1",
                "si": "110100023054013",
                "sl": "116.461834,39.893512",
                "udli": "110100023054;110100023055",
                "poiid": "BV10013385",
                "lg": "1",
                "sp": "ShuangJing"
              },
              {
                "rs": "1243 800",
                "udpx": "1243 803;1243 797",
                "su": "1",
                "udsu": "1;1",
                "n": "广渠门外",
                "sid": "110100023054012",
                "p": "1243 800",
                "r": "110100023054",
                "udsi": "110100023054012;110100023055012",
                "t": "0",
                "si": "110100023054012",
                "sl": "116.448998,39.893648",
                "udli": "110100023054;110100023055",
                "poiid": "BV10013384",
                "lg": "4",
                "sp": "guang qu men wai"
              },
              {
                "rs": "1185 800",
                "udpx": "1185 803;1185 797",
                "su": "1",
                "udsu": "1;1",
                "n": "广渠门内",
                "sid": "110100023054011",
                "p": "1185 800",
                "r": "110100023054",
                "udsi": "110100023054011;110100023055013",
                "t": "0",
                "si": "110100023054011",
                "sl": "116.433877,39.893673",
                "udli": "110100023054;110100023055",
                "poiid": "BV10006633",
                "lg": "1",
                "sp": "guang qu men nei"
              },
              {
                "rs": "1116 800|1116 800",
                "udpx": "1116 803;1116 797",
                "su": "1",
                "udsu": "1;1",
                "n": "磁器口",
                "sid": "110100023054010",
                "p": "1116 800",
                "r": "110100023100|110100023054",
                "udsi": "110100023054010;110100023055014",
                "t": "1",
                "si": "110100023054010",
                "sl": "116.419940,39.893172",
                "udli": "110100023054;110100023055",
                "poiid": "BV10013383",
                "lg": "3",
                "sp": "ci qi kou"
              },
              {
                "rs": "1079 800",
                "udpx": "1079 803;1079 797",
                "su": "1",
                "udsu": "1;1",
                "n": "桥湾",
                "sid": "110100023054024",
                "p": "1079 800",
                "r": "110100023054",
                "udsi": "110100023054024;110100023055023",
                "t": "0",
                "si": "110100023054024",
                "sl": "116.408464,39.892725",
                "udli": "110100023054;110100023055",
                "poiid": "BV10396213",
                "lg": "0",
                "sp": "qiao wan"
              },
              {
                "rs": "1027 800|1027 800",
                "udpx": "1027 803;1027 797",
                "su": "1",
                "udsu": "1;1",
                "n": "珠市口",
                "sid": "110100023054008",
                "p": "1027 800",
                "r": "110100023054|110100023114",
                "udsi": "110100023054008;110100023055016",
                "t": "1",
                "si": "110100023054008",
                "sl": "116.398372,39.891334",
                "udli": "110100023054;110100023055",
                "poiid": "BV10013381",
                "lg": "7",
                "sp": "ZhuShiKou"
              },
              {
                "rs": "976 800",
                "udpx": "976 797;976 803",
                "su": "1",
                "udsu": "1;1",
                "n": "虎坊桥",
                "sid": "110100023054007",
                "p": "976 800",
                "r": "110100023054",
                "udsi": "110100023055017;110100023054007",
                "t": "0",
                "si": "110100023054007",
                "sl": "116.384596,39.889486",
                "udli": "110100023055;110100023054",
                "poiid": "BV10013380",
                "lg": "4",
                "sp": "hu fang qiao"
              },
              {
                "rs": "928 800|928 800",
                "udpx": "928 797;928 803",
                "su": "1",
                "udsu": "1;1",
                "n": "菜市口",
                "sid": "110100023054006",
                "p": "928 800",
                "r": "110100023076|110100023054",
                "udsi": "110100023055018;110100023054006",
                "t": "1",
                "si": "110100023054006",
                "sl": "116.374425,39.889296",
                "udli": "110100023055;110100023054",
                "poiid": "BV10013379",
                "lg": "1",
                "sp": "cai shi kou"
              },
              {
                "rs": "879 800",
                "udpx": "879 803;879 797",
                "su": "1",
                "udsu": "1;1",
                "n": "广安门内",
                "sid": "110100023054023",
                "p": "879 800",
                "r": "110100023054",
                "udsi": "110100023054023;110100023055024",
                "t": "0",
                "si": "110100023054023",
                "sl": "116.358239,39.889418",
                "udli": "110100023054;110100023055",
                "poiid": "BV10396212",
                "lg": "4",
                "sp": "guang an men nei"
              },
              {
                "rs": "829 800",
                "udpx": "829 797;829 803",
                "su": "1",
                "udsu": "1;1",
                "n": "达官营",
                "sid": "110100023054004",
                "p": "829 800",
                "r": "110100023054",
                "udsi": "110100023055020;110100023054004",
                "t": "0",
                "si": "110100023054004",
                "sl": "116.336455,39.889884",
                "udli": "110100023055;110100023054",
                "poiid": "BV10005975",
                "lg": "4",
                "sp": "da guan ying"
              },
              {
                "rs": "764 800",
                "udpx": "765 797;763 803",
                "su": "1",
                "udsu": "1;1",
                "n": "湾子",
                "sid": "110100023054003",
                "p": "764 800",
                "r": "110100023054",
                "udsi": "110100023055021;110100023054003",
                "t": "0",
                "si": "110100023054003",
                "sl": "116.327753,39.889954",
                "udli": "110100023055;110100023054",
                "poiid": "BV10006599",
                "lg": "4",
                "sp": "wan zi"
              },
              {
                "rs": "710 756|710 756",
                "udpx": "712 754;709 758",
                "su": "1",
                "udsu": "1;1",
                "n": "北京西站",
                "sid": "110100023054002",
                "p": "710 756",
                "r": "110100023054|110100023116",
                "udsi": "110100023055022;110100023054002",
                "t": "1",
                "si": "110100023054002",
                "sl": "116.321218,39.894706",
                "udli": "110100023055;110100023054",
                "poiid": "BV10000102",
                "lg": "2",
                "sp": "bei jing xi zhan"
              }
            ],
            "ln": "7号线",
            "su": "1",
            "kn": "地铁7号线",
            "c": [
              "710 756",
              "764 800",
              "829 800",
              "879 800",
              "928 800",
              "976 800",
              "1027 800",
              "1079 800",
              "1116 800",
              "1185 800",
              "1243 800",
              "1279 800",
              "1337 800",
              "1370 800",
              "1403 800",
              "1405 800",
              "1406 801",
              "1407 803",
              "1408 805",
              "1408 840",
              "1408 880",
              "1407 919",
              "1407 957",
              "1410 964",
              "1417 971",
              "1427 976",
              "1440 979",
              "1471 979",
              "1508 979",
              "1542 979",
              "1579 979",
              "1616 978",
              "1655 977",
              "1691 977",
              "1730 976",
              "1768 976",
              "1801 976",
              "1807 977",
              "1814 981",
              "1819 986",
              "1821 992",
              "1820 1000",
              "1819 1000",
              "1821 1032"
            ],
            "lo": "0",
            "lp": [
              "1582 914"
            ],
            "f": [
              {
                "c": [
                  "1823 1032",
                  "1823 1001",
                  "1823 1000",
                  "1824 992",
                  "1821 985",
                  "1815 979",
                  "1808 974",
                  "1801 973",
                  "1768 973",
                  "1730 973",
                  "1691 974",
                  "1655 975",
                  "1616 975",
                  "1579 976",
                  "1542 976",
                  "1508 976",
                  "1471 976",
                  "1440 976",
                  "1428 973",
                  "1419 969",
                  "1412 963",
                  "1410 956",
                  "1410 919",
                  "1410 880",
                  "1411 840",
                  "1411 804",
                  "1410 802",
                  "1408 799",
                  "1406 797",
                  "1403 797",
                  "1370 797",
                  "1337 797",
                  "1279 797",
                  "1243 797",
                  "1185 797",
                  "1116 797",
                  "1079 797",
                  "1027 797",
                  "976 797",
                  "928 797",
                  "879 797",
                  "829 797",
                  "765 797",
                  "712 754"
                ],
                "li": "110100023055"
              },
              {
                "c": [
                  "709 758",
                  "763 803",
                  "829 803",
                  "879 803",
                  "928 803",
                  "976 803",
                  "1027 803",
                  "1079 803",
                  "1116 803",
                  "1185 803",
                  "1243 803",
                  "1279 803",
                  "1337 803",
                  "1370 803",
                  "1402 803",
                  "1404 803",
                  "1404 803",
                  "1405 804",
                  "1405 805",
                  "1405 840",
                  "1405 880",
                  "1405 919",
                  "1404 957",
                  "1407 966",
                  "1416 973",
                  "1426 979",
                  "1439 981",
                  "1471 982",
                  "1508 982",
                  "1542 982",
                  "1579 981",
                  "1616 981",
                  "1656 980",
                  "1691 979",
                  "1730 979",
                  "1768 978",
                  "1801 979",
                  "1806 980",
                  "1812 983",
                  "1816 988",
                  "1818 993",
                  "1818 1000",
                  "1818 1001",
                  "1818 1032"
                ],
                "li": "110100023054"
              }
            ],
            "ls": "110100023054",
            "cl": "F9BE58",
            "la": "",
            "x": 7,
            "li": "110100023054|110100023055"
          },
          {
            "st": [
              {
                "rs": "1144 1171",
                "udpx": "1142 1173;1147 1169",
                "su": "1",
                "udsu": "1;1",
                "n": "瀛海",
                "sid": "110100023114021",
                "p": "1144 1171",
                "r": "110100023114",
                "udsi": "110100023115036;110100023114021",
                "t": "0",
                "si": "110100023114021",
                "sl": "116.448982,39.760713",
                "udli": "110100023115;110100023114",
                "poiid": "BV11640690",
                "lg": "6",
                "sp": "YingHai"
              },
              {
                "rs": "1115 1131",
                "udpx": "1113 1132;1118 1129",
                "su": "1",
                "udsu": "1;1",
                "n": "德茂",
                "sid": "110100023114022",
                "p": "1115 1131",
                "r": "110100023114",
                "udsi": "110100023115035;110100023114022",
                "t": "0",
                "si": "110100023114022",
                "sl": "116.441467,39.772649",
                "udli": "110100023115;110100023114",
                "poiid": "BV11640696",
                "lg": "6",
                "sp": "DeMao"
              },
              {
                "rs": "1090 1095",
                "udpx": "1088 1097;1093 1094",
                "su": "1",
                "udsu": "1;1",
                "n": "五福堂",
                "sid": "110100023114023",
                "p": "1090 1095",
                "r": "110100023114",
                "udsi": "110100023115034;110100023114023",
                "t": "0",
                "si": "110100023114023",
                "sl": "116.423903,39.785046",
                "udli": "110100023115;110100023114",
                "poiid": "BV11640691",
                "lg": "6",
                "sp": "WuFu Tang"
              },
              {
                "rs": "1068 1064",
                "udpx": "1066 1066;1070 1063",
                "su": "1",
                "udsu": "1;1",
                "n": "火箭万源",
                "sid": "110100023114024",
                "p": "1068 1064",
                "r": "110100023114",
                "udsi": "110100023115033;110100023114024",
                "t": "0",
                "si": "110100023114024",
                "sl": "116.418627,39.799287",
                "udli": "110100023115;110100023114",
                "poiid": "BV11640693",
                "lg": "6",
                "sp": "HuoJian WanYuan"
              },
              {
                "rs": "1045 1031",
                "udpx": "1043 1033;1047 1029",
                "su": "1",
                "udsu": "1;1",
                "n": "东高地",
                "sid": "110100023114025",
                "p": "1045 1031",
                "r": "110100023114",
                "udsi": "110100023115032;110100023114025",
                "t": "0",
                "si": "110100023114025",
                "sl": "116.409427,39.805074",
                "udli": "110100023115;110100023114",
                "poiid": "BV11640698",
                "lg": "6",
                "sp": "DongGaoDi"
              },
              {
                "rs": "1027 1002",
                "udpx": "1024 1003;1030 1002",
                "su": "1",
                "udsu": "1;1",
                "n": "和义",
                "sid": "110100023114026",
                "p": "1027 1002",
                "r": "110100023114",
                "udsi": "110100023115031;110100023114026",
                "t": "0",
                "si": "110100023114026",
                "sl": "116.402073,39.814838",
                "udli": "110100023115;110100023114",
                "poiid": "BV11640697",
                "lg": "2",
                "sp": "HeYi"
              },
              {
                "rs": "1027 973",
                "udpx": "1024 973;1030 973",
                "su": "1",
                "udsu": "1;1",
                "n": "大红门南",
                "sid": "110100023114027",
                "p": "1027 973",
                "r": "110100023114",
                "udsi": "110100023115030;110100023114027",
                "t": "0",
                "si": "110100023114027",
                "sl": "116.401045,39.836715",
                "udli": "110100023115;110100023114",
                "poiid": "BV11640689",
                "lg": "2",
                "sp": "DaHongMen Nan"
              },
              {
                "rs": "1027 909",
                "udpx": "1024 909;1030 909",
                "su": "1",
                "udsu": "1;1",
                "n": "海户屯",
                "sid": "110100023114029",
                "p": "1027 909",
                "r": "110100023114",
                "udsi": "110100023115028;110100023114029",
                "t": "0",
                "si": "110100023114029",
                "sl": "116.400301,39.851805",
                "udli": "110100023115;110100023114",
                "poiid": "BV11640692",
                "lg": "6",
                "sp": "HaiHuTun"
              },
              {
                "rs": "1027 887",
                "udpx": "1024 887;1030 887",
                "su": "1",
                "udsu": "1;1",
                "n": "木樨园",
                "sid": "110100023114030",
                "p": "1027 887",
                "r": "110100023114",
                "udsi": "110100023115027;110100023114030",
                "t": "0",
                "si": "110100023114030",
                "sl": "116.399839,39.859262",
                "udli": "110100023115;110100023114",
                "poiid": "BV11640699",
                "lg": "6",
                "sp": "MuXiYuan"
              },
              {
                "rs": "1027 864|1027 864",
                "udpx": "1024 864;1030 864",
                "su": "1",
                "udsu": "1;1",
                "n": "永定门外",
                "sid": "110100023114031",
                "p": "1027 864",
                "r": "110100023114|900000028907",
                "udsi": "110100023115026;110100023114031",
                "t": "1",
                "si": "110100023114031",
                "sl": "116.399369,39.867435",
                "udli": "110100023115;110100023114",
                "poiid": "BV10013368",
                "lg": "1",
                "sp": "YongDing MenWai"
              },
              {
                "rs": "1027 831",
                "udpx": "1024 831;1030 831",
                "su": "1",
                "udsu": "1;1",
                "n": "天桥",
                "sid": "110100023114032",
                "p": "1027 831",
                "r": "110100023114",
                "udsi": "110100023115025;110100023114032",
                "t": "0",
                "si": "110100023114032",
                "sl": "116.398712,39.881920",
                "udli": "110100023115;110100023114",
                "poiid": "BV11640688",
                "lg": "6",
                "sp": "TianQiao"
              },
              {
                "rs": "1027 800|1027 800",
                "udpx": "1024 799;1030 800",
                "su": "1",
                "udsu": "1;1",
                "n": "珠市口",
                "sid": "110100023054008",
                "p": "1027 800",
                "r": "110100023054|110100023114",
                "udsi": "110100023115024;110100023114033",
                "t": "1",
                "si": "110100023054008",
                "sl": "116.398372,39.891334",
                "udli": "110100023115;110100023114",
                "poiid": "BV10013381",
                "lg": "7",
                "sp": "ZhuShiKou"
              },
              {
                "rs": "1045 764|1045 764",
                "udpx": "1042 762;1047 765",
                "su": "1",
                "udsu": "1;1",
                "n": "前门",
                "sid": "110100023098012",
                "p": "1045 764",
                "r": "110100023098|110100023114",
                "udsi": "110100023115023;110100023114034",
                "t": "1",
                "si": "110100023098012",
                "sl": "116.397937,39.900192",
                "udli": "110100023115;110100023114",
                "poiid": "BV10005884",
                "lg": "1",
                "sp": "QianMen"
              },
              {
                "rs": "1059 720|1059 720",
                "udpx": "1057 719;1062 720",
                "su": "1",
                "udsu": "1;1",
                "n": "王府井",
                "sid": "110100023110017",
                "p": "1059 720",
                "r": "110100023110|110100023114",
                "udsi": "110100023115022;110100023114035",
                "t": "1",
                "si": "110100023110017",
                "sl": "116.411571,39.908069",
                "udli": "110100023115;110100023114",
                "poiid": "BV10006496",
                "lg": "3",
                "sp": "WangFuJing"
              },
              {
                "rs": "1059 695",
                "udpx": "1057 696;1062 694",
                "su": "1",
                "udsu": "1;1",
                "n": "金鱼胡同",
                "sid": "110100023114036",
                "p": "1059 695",
                "r": "110100023114",
                "udsi": "110100023115021;110100023114036",
                "t": "0",
                "si": "110100023114036",
                "sl": "116.411178,39.915387",
                "udli": "110100023115;110100023114",
                "poiid": "BV11640695",
                "lg": "6",
                "sp": "JinYu HuTong"
              },
              {
                "rs": "1041 666",
                "udpx": "1043 664;1038 667",
                "su": "1",
                "udsu": "1;1",
                "n": "中国美术馆",
                "sid": "110100023114020",
                "p": "1041 666",
                "r": "110100023114",
                "udsi": "110100023114020;110100023115020",
                "t": "0",
                "si": "110100023114020",
                "sl": "116.410803,39.923705",
                "udli": "110100023114;110100023115",
                "poiid": "BV11095929",
                "lg": "6",
                "sp": "zhong guo mei shu guan"
              },
              {
                "rs": "1015 625|1015 625",
                "udpx": "1017 624;1012 626",
                "su": "1",
                "udsu": "1;1",
                "n": "南锣鼓巷",
                "sid": "110100023114002",
                "p": "1015 625",
                "r": "110100023339|110100023114",
                "udsi": "110100023114002;110100023115019",
                "t": "1",
                "si": "110100023114002",
                "sl": "116.404192,39.933848",
                "udli": "110100023114;110100023115",
                "poiid": "BV10013392",
                "lg": "2",
                "sp": "nan luo gu xiang"
              },
              {
                "rs": "1002 590",
                "udpx": "999 591;1004 590",
                "su": "1",
                "udsu": "1;1",
                "n": "什刹海",
                "sid": "110100023114003",
                "p": "1002 590",
                "r": "110100023114",
                "udsi": "110100023115018;110100023114003",
                "t": "0",
                "si": "110100023114003",
                "sl": "116.396219,39.937583",
                "udli": "110100023115;110100023114",
                "poiid": "BV10013462",
                "lg": "2",
                "sp": "shi cha hai"
              },
              {
                "rs": "1002 555|1002 555",
                "udpx": "1004 555;999 555",
                "su": "1",
                "udsu": "1;1",
                "n": "鼓楼大街",
                "sid": "110100023098003",
                "p": "1002 555",
                "r": "110100023098|110100023114",
                "udsi": "110100023114004;110100023115017",
                "t": "1",
                "si": "110100023098003",
                "sl": "116.393776,39.948972",
                "udli": "110100023114;110100023115",
                "poiid": "BV10013431",
                "lg": "7",
                "sp": "gu lou da jie"
              },
              {
                "rs": "1002 523",
                "udpx": "1004 523;999 523",
                "su": "1",
                "udsu": "1;1",
                "n": "安德里北街",
                "sid": "110100023114005",
                "p": "1002 523",
                "r": "110100023114",
                "udsi": "110100023114005;110100023115016",
                "t": "0",
                "si": "110100023114005",
                "sl": "116.395145,39.957227",
                "udli": "110100023114;110100023115",
                "poiid": "BV10013463",
                "lg": "2",
                "sp": "an de li bei jie"
              },
              {
                "rs": "1001 497",
                "udpx": "1004 497;998 498",
                "su": "1",
                "udsu": "1;1",
                "n": "安华桥",
                "sid": "110100023114006",
                "p": "1001 497",
                "r": "110100023114",
                "udsi": "110100023114006;110100023115015",
                "t": "0",
                "si": "110100023114006",
                "sl": "116.394655,39.968507",
                "udli": "110100023114;110100023115",
                "poiid": "BV10013464",
                "lg": "2",
                "sp": "an hua qiao"
              },
              {
                "rs": "1001 449|1001 449",
                "udpx": "1004 449;998 449",
                "su": "1",
                "udsu": "1;1",
                "n": "北土城",
                "sid": "110100023114007",
                "p": "1001 449",
                "r": "110100023114|110100023282",
                "udsi": "110100023114007;110100023115014",
                "t": "1",
                "si": "110100023114007",
                "sl": "116.394193,39.976953",
                "udli": "110100023114;110100023115",
                "poiid": "BV10013465",
                "lg": "7",
                "sp": "bei tu cheng"
              },
              {
                "rs": "1001 425",
                "udpx": "1004 425;998 425",
                "su": "1",
                "udsu": "1;1",
                "n": "奥体中心",
                "sid": "110100023114008",
                "p": "1001 425",
                "r": "110100023114",
                "udsi": "110100023114008;110100023115013",
                "t": "0",
                "si": "110100023114008",
                "sl": "116.393759,39.985837",
                "udli": "110100023114;110100023115",
                "poiid": "BV10013466",
                "lg": "2",
                "sp": "ao ti zhong xin"
              },
              {
                "rs": "1002 384|1002 384",
                "udpx": "1005 384;999 384",
                "su": "1",
                "udsu": "1;1",
                "n": "奥林匹克公园",
                "sid": "110100023070018",
                "p": "1002 384",
                "r": "110100023114|110100023070",
                "udsi": "110100023114009;110100023115012",
                "t": "1",
                "si": "110100023070018",
                "sl": "116.391758,40.002207",
                "udli": "110100023114;110100023115",
                "poiid": "BV10013375",
                "lg": "1",
                "sp": "ao lin pi ke gong yuan"
              },
              {
                "rs": "1003 356",
                "udpx": "1006 354;1000 357",
                "su": "1",
                "udsu": "1;1",
                "n": "森林公园南门",
                "sid": "110100023114010",
                "p": "1003 356",
                "r": "110100023114",
                "udsi": "110100023114010;110100023115011",
                "t": "0",
                "si": "110100023114010",
                "sl": "116.392600,40.010122",
                "udli": "110100023114;110100023115",
                "poiid": "BV10009724",
                "lg": "2",
                "sp": "sen lin gong yuan nan men"
              },
              {
                "rs": "985 344",
                "udpx": "987 342;984 347",
                "su": "1",
                "udsu": "1;1",
                "n": "林萃桥",
                "sid": "110100023114011",
                "p": "985 344",
                "r": "110100023114",
                "udsi": "110100023114011;110100023115010",
                "t": "0",
                "si": "110100023114011",
                "sl": "116.372998,40.021906",
                "udli": "110100023114;110100023115",
                "poiid": "BV10013467",
                "lg": "1",
                "sp": "lin cui qiao"
              },
              {
                "rs": "970 334",
                "udpx": "973 332;967 336",
                "su": "1",
                "udsu": "1;1",
                "n": "永泰庄",
                "sid": "110100023114012",
                "p": "970 334",
                "r": "110100023114",
                "udsi": "110100023114012;110100023115009",
                "t": "0",
                "si": "110100023114012",
                "sl": "116.354580,40.037728",
                "udli": "110100023114;110100023115",
                "poiid": "BV10000769",
                "lg": "6",
                "sp": "yong tai zhuang"
              },
              {
                "rs": "970 307",
                "udpx": "973 307;967 307",
                "su": "1",
                "udsu": "1;1",
                "n": "西小口",
                "sid": "110100023114013",
                "p": "970 307",
                "r": "110100023114",
                "udsi": "110100023114013;110100023115008",
                "t": "0",
                "si": "110100023114013",
                "sl": "116.351644,40.046873",
                "udli": "110100023114;110100023115",
                "poiid": "BV10013468",
                "lg": "6",
                "sp": "xi xiao kou"
              },
              {
                "rs": "970 286",
                "udpx": "973 286;967 286",
                "su": "1",
                "udsu": "1;1",
                "n": "育新",
                "sid": "110100023114014",
                "p": "970 286",
                "r": "110100023114",
                "udsi": "110100023114014;110100023115007",
                "t": "0",
                "si": "110100023114014",
                "sl": "116.347328,40.060039",
                "udli": "110100023114;110100023115",
                "poiid": "BV10013469",
                "lg": "2",
                "sp": "yu xin"
              },
              {
                "rs": "970 267|970 267",
                "udpx": "967 267;973 267",
                "su": "1",
                "udsu": "1;1",
                "n": "霍营",
                "sid": "110100023114015",
                "p": "970 267",
                "r": "110100023114|110100033066",
                "udsi": "110100023115006;110100023114015",
                "t": "1",
                "si": "110100023114015",
                "sl": "116.360286,40.071857",
                "udli": "110100023115;110100023114",
                "poiid": "BV10007658",
                "lg": "1",
                "sp": "HuoYing"
              },
              {
                "rs": "970 227",
                "udpx": "973 227;967 227",
                "su": "1",
                "udsu": "1;1",
                "n": "回龙观东大街",
                "sid": "110100023114016",
                "p": "970 227",
                "r": "110100023114",
                "udsi": "110100023114016;110100023115005",
                "t": "0",
                "si": "110100023114016",
                "sl": "116.363025,40.081175",
                "udli": "110100023114;110100023115",
                "poiid": "BV10004378",
                "lg": "2",
                "sp": "hui long guan dong da jie"
              },
              {
                "rs": "929 202",
                "udpx": "929 200;929 205",
                "su": "1",
                "udsu": "1;1",
                "n": "平西府",
                "sid": "110100023114017",
                "p": "929 202",
                "r": "110100023114",
                "udsi": "110100023114017;110100023115004",
                "t": "0",
                "si": "110100023114017",
                "sl": "116.350425,40.090607",
                "udli": "110100023114;110100023115",
                "poiid": "BV10000887",
                "lg": "4",
                "sp": "ping xi fu"
              },
              {
                "rs": "898 202",
                "udpx": "898 200;898 205",
                "su": "1",
                "udsu": "1;1",
                "n": "育知路",
                "sid": "110100023114018",
                "p": "898 202",
                "r": "110100023114",
                "udsi": "110100023114018;110100023115003",
                "t": "0",
                "si": "110100023114018",
                "sl": "116.326992,40.087863",
                "udli": "110100023114;110100023115",
                "poiid": "BV10013470",
                "lg": "0",
                "sp": "yu zhi lu"
              },
              {
                "rs": "843 202|843 202",
                "udpx": "843 199;843 205",
                "su": "1",
                "udsu": "1;1",
                "n": "朱辛庄",
                "sid": "110100023114019",
                "p": "843 202",
                "r": "110100023114|110100023118",
                "udsi": "110100023114019;110100023115002",
                "t": "1",
                "si": "110100023114019",
                "sl": "116.313698,40.104297",
                "udli": "110100023114;110100023115",
                "poiid": "BV10000571",
                "lg": "6",
                "sp": "zhu xin zhuang"
              }
            ],
            "ln": "8号线",
            "su": "1",
            "kn": "地铁8号线",
            "c": [
              "1144 1171",
              "1115 1131",
              "1090 1095",
              "1068 1064",
              "1045 1031",
              "1027 1002",
              "1027 973",
              "1027 935",
              "1027 909",
              "1027 887",
              "1027 864",
              "1027 831",
              "1027 800",
              "1045 764",
              "1059 720",
              "1059 695",
              "1041 666",
              "1015 625",
              "1002 590",
              "1002 555",
              "1002 523",
              "1001 497",
              "1001 449",
              "1001 425",
              "1002 384",
              "1002 370",
              "1003 356",
              "985 344",
              "970 334",
              "970 307",
              "970 286",
              "970 279",
              "970 267",
              "970 227",
              "969 210",
              "969 208",
              "968 206",
              "966 204",
              "965 204",
              "964 203",
              "962 203",
              "959 203",
              "929 202",
              "898 202",
              "843 202"
            ],
            "lo": "0",
            "lp": [
              "934 178"
            ],
            "f": [
              {
                "c": [
                  "843 205",
                  "898 205",
                  "929 205",
                  "959 205",
                  "962 206",
                  "963 206",
                  "964 206",
                  "965 207",
                  "966 208",
                  "966 209",
                  "967 211",
                  "967 227",
                  "967 267",
                  "967 279",
                  "967 286",
                  "967 307",
                  "967 336",
                  "984 347",
                  "1000 357",
                  "1000 370",
                  "999 384",
                  "998 425",
                  "998 449",
                  "998 498",
                  "999 523",
                  "999 555",
                  "999 591",
                  "1012 626",
                  "1038 667",
                  "1057 696",
                  "1057 719",
                  "1042 762",
                  "1024 799",
                  "1024 831",
                  "1024 864",
                  "1024 887",
                  "1024 909",
                  "1024 935",
                  "1024 973",
                  "1024 1003",
                  "1043 1033",
                  "1066 1066",
                  "1088 1097",
                  "1113 1132",
                  "1142 1173"
                ],
                "li": "110100023115"
              },
              {
                "c": [
                  "1147 1169",
                  "1118 1129",
                  "1093 1094",
                  "1070 1063",
                  "1047 1029",
                  "1030 1002",
                  "1030 973",
                  "1030 935",
                  "1030 909",
                  "1030 887",
                  "1030 864",
                  "1030 831",
                  "1030 800",
                  "1047 765",
                  "1062 720",
                  "1062 694",
                  "1043 664",
                  "1017 624",
                  "1004 590",
                  "1004 555",
                  "1004 523",
                  "1004 497",
                  "1004 449",
                  "1004 425",
                  "1005 384",
                  "1005 370",
                  "1006 354",
                  "987 342",
                  "973 332",
                  "973 307",
                  "973 286",
                  "973 279",
                  "973 267",
                  "973 227",
                  "972 210",
                  "972 207",
                  "970 204",
                  "968 202",
                  "967 201",
                  "965 200",
                  "963 200",
                  "960 200",
                  "929 200",
                  "898 200",
                  "843 199"
                ],
                "li": "110100023114"
              }
            ],
            "ls": "110100023114",
            "cl": "018237",
            "la": "",
            "x": 8,
            "li": "110100023114|110100023115"
          },
          {
            "st": [
              {
                "rs": "620 977|620 977",
                "udpx": "617 977;623 977",
                "su": "1",
                "udsu": "1;1",
                "n": "郭公庄",
                "sid": "110100023092018",
                "p": "620 977",
                "r": "110100023116|110100023092",
                "udsi": "110100023117014;110100023116002",
                "t": "1",
                "si": "110100023092018",
                "sl": "116.301889,39.814322",
                "udli": "110100023117;110100023116",
                "poiid": "BV10007779",
                "lg": "2",
                "sp": "GuoGongZhuang"
              },
              {
                "rs": "620 950",
                "udpx": "623 950;617 950",
                "su": "1",
                "udsu": "1;1",
                "n": "丰台科技园",
                "sid": "110100023116003",
                "p": "620 950",
                "r": "110100023116",
                "udsi": "110100023116003;110100023117013",
                "t": "0",
                "si": "110100023116003",
                "sl": "116.297176,39.825233",
                "udli": "110100023116;110100023117",
                "poiid": "BV10013471",
                "lg": "6",
                "sp": "feng tai ke ji yuan"
              },
              {
                "rs": "620 924",
                "udpx": "622 924;617 924",
                "su": "1",
                "udsu": "1;1",
                "n": "科怡路",
                "sid": "110100023116004",
                "p": "620 924",
                "r": "110100023116",
                "udsi": "110100023116004;110100023117012",
                "t": "0",
                "si": "110100023116004",
                "sl": "116.297432,39.832480",
                "udli": "110100023116;110100023117",
                "poiid": "BV10013472",
                "lg": "6",
                "sp": "ke yi lu"
              },
              {
                "rs": "620 900",
                "udpx": "622 899;617 899",
                "su": "1",
                "udsu": "1;1",
                "n": "丰台南路",
                "sid": "110100023116005",
                "p": "620 900",
                "r": "110100023116",
                "udsi": "110100023116005;110100023117011",
                "t": "0",
                "si": "110100023116005",
                "sl": "116.296748,39.840444",
                "udli": "110100023116;110100023117",
                "poiid": "BV10013473",
                "lg": "6",
                "sp": "feng tai nan lu"
              },
              {
                "rs": "619 876",
                "udpx": "622 876;617 876",
                "su": "1",
                "udsu": "1;1",
                "n": "丰台东大街",
                "sid": "110100023116006",
                "p": "619 876",
                "r": "110100023116",
                "udsi": "110100023116006;110100023117010",
                "t": "0",
                "si": "110100023116006",
                "sl": "116.293857,39.855111",
                "udli": "110100023116;110100023117",
                "poiid": "BV10013474",
                "lg": "6",
                "sp": "feng tai dong da jie"
              },
              {
                "rs": "619 864|619 864",
                "udpx": "617 864;622 864",
                "su": "1",
                "udsu": "1;1",
                "n": "七里庄",
                "sid": "110100023116007",
                "p": "619 864",
                "r": "110100023116|900000028907",
                "udsi": "110100023117009;110100023116007",
                "t": "1",
                "si": "110100023116007",
                "sl": "116.294292,39.866773",
                "udli": "110100023117;110100023116",
                "poiid": "BV10000636",
                "lg": "7",
                "sp": "QiLiZhuang"
              },
              {
                "rs": "650 804|650 804",
                "udpx": "648 801;651 806",
                "su": "1",
                "udsu": "1;1",
                "n": "六里桥",
                "sid": "110100023116008",
                "p": "650 804",
                "r": "110100023116|110100023282",
                "udsi": "110100023117008;110100023116008",
                "t": "1",
                "si": "110100023116008",
                "sl": "116.302808,39.880239",
                "udli": "110100023117;110100023116",
                "poiid": "BV10013475",
                "lg": "6",
                "sp": "liu li qiao"
              },
              {
                "rs": "675 784",
                "udpx": "676 780;679 784",
                "su": "1",
                "udsu": "1;1",
                "n": "六里桥东",
                "sid": "110100023116009",
                "p": "675 784",
                "r": "110100023116",
                "udsi": "110100023117007;110100023116009",
                "t": "0",
                "si": "110100023116009",
                "sl": "116.315142,39.886886",
                "udli": "110100023117;110100023116",
                "poiid": "BV10000269",
                "lg": "2",
                "sp": "liu li qiao dong"
              },
              {
                "rs": "710 756|710 756",
                "udpx": "713 758;707 755",
                "su": "1",
                "udsu": "1;1",
                "n": "北京西站",
                "sid": "110100023054002",
                "p": "710 756",
                "r": "110100023054|110100023116",
                "udsi": "110100023116010;110100023117006",
                "t": "1",
                "si": "110100023054002",
                "sl": "116.321218,39.894706",
                "udli": "110100023116;110100023117",
                "poiid": "BV10000102",
                "lg": "2",
                "sp": "bei jing xi zhan"
              },
              {
                "rs": "710 720|710 720",
                "udpx": "713 720;708 720",
                "su": "1",
                "udsu": "1;1",
                "n": "军事博物馆",
                "sid": "110100023110010",
                "p": "710 720",
                "r": "110100023110|110100023116",
                "udsi": "110100023116011;110100023117005",
                "t": "1",
                "si": "110100023110010",
                "sl": "116.321459,39.907422",
                "udli": "110100023116;110100023117",
                "poiid": "BV10000188",
                "lg": "1",
                "sp": "jun shi bo wu guan"
              },
              {
                "rs": "710 670",
                "udpx": "713 670;707 670",
                "su": "1",
                "udsu": "1;1",
                "n": "白堆子",
                "sid": "110100023116012",
                "p": "710 670",
                "r": "110100023116",
                "udsi": "110100023116012;110100023117004",
                "t": "0",
                "si": "110100023116012",
                "sl": "116.325762,39.923818",
                "udli": "110100023116;110100023117",
                "poiid": "BV10013476",
                "lg": "6",
                "sp": "bai dui zi"
              },
              {
                "rs": "710 625|710 625",
                "udpx": "713 625;708 625",
                "su": "1",
                "udsu": "1;1",
                "n": "白石桥南",
                "sid": "110100023116013",
                "p": "710 625",
                "r": "110100023339|110100023116",
                "udsi": "110100023116013;110100023117003",
                "t": "1",
                "si": "110100023116013",
                "sl": "116.325680,39.933022",
                "udli": "110100023116;110100023117",
                "poiid": "BV10000061",
                "lg": "5",
                "sp": "bai shi qiao nan"
              },
              {
                "rs": "710 582|710 582|710 582",
                "udpx": "707 582;713 582",
                "su": "1",
                "udsu": "1;1",
                "n": "国家图书馆",
                "sid": "110100023076011",
                "p": "710 582",
                "r": "110100023076|110100023116|900000062236",
                "udsi": "110100023117002;110100023116014",
                "t": "1",
                "si": "110100023076011",
                "sl": "116.325190,39.943114",
                "udli": "110100023117;110100023116",
                "poiid": "BV10000252",
                "lg": "1",
                "sp": "GuoJia TuShuGuan"
              }
            ],
            "ln": "9号线",
            "su": "1",
            "kn": "地铁9号线",
            "c": [
              "620 977",
              "620 950",
              "620 924",
              "620 900",
              "620 899",
              "619 876",
              "619 864",
              "619 852",
              "619 831",
              "620 829",
              "621 827",
              "623 824",
              "650 804",
              "675 784",
              "678 782",
              "710 756",
              "710 720",
              "710 670",
              "710 625",
              "710 624",
              "710 582"
            ],
            "lo": "0",
            "lp": [
              "675 808"
            ],
            "f": [
              {
                "c": [
                  "707 582",
                  "707 624",
                  "708 625",
                  "707 670",
                  "708 720",
                  "707 755",
                  "676 780",
                  "648 801",
                  "621 822",
                  "619 825",
                  "617 828",
                  "616 831",
                  "617 852",
                  "617 864",
                  "617 876",
                  "617 899",
                  "617 924",
                  "617 950",
                  "617 977"
                ],
                "li": "110100023117"
              },
              {
                "c": [
                  "623 977",
                  "623 950",
                  "622 924",
                  "622 899",
                  "622 876",
                  "622 864",
                  "622 852",
                  "622 831",
                  "623 830",
                  "623 829",
                  "625 826",
                  "651 806",
                  "679 784",
                  "713 758",
                  "713 720",
                  "713 670",
                  "713 625",
                  "713 624",
                  "713 582"
                ],
                "li": "110100023116"
              }
            ],
            "ls": "110100023116",
            "cl": "86B81C",
            "la": "",
            "x": 9,
            "li": "110100023116|110100023117"
          },
          {
            "st": [
              {
                "rs": "602 448|602 448",
                "udpx": "603 451,603 451;600 446",
                "su": "1",
                "udsu": "1,1;1",
                "n": "巴沟",
                "sid": "110100023060002",
                "p": "602 448",
                "r": "110100023282|110100023060",
                "udsi": "110100023282047,110100023282002;110100023283044",
                "t": "1",
                "si": "110100023060002",
                "sl": "116.293727,39.974179",
                "udli": "110100023282,110100023282;110100023283",
                "poiid": "BV10013394",
                "lg": "4",
                "sp": "ba gou"
              },
              {
                "rs": "645 448",
                "udpx": "645 445;645 451",
                "su": "1",
                "udsu": "1;1",
                "n": "苏州街",
                "sid": "110100023282003",
                "p": "645 448",
                "r": "110100023282",
                "udsi": "110100023283043;110100023282003",
                "t": "0",
                "si": "110100023282003",
                "sl": "116.306332,39.975642",
                "udli": "110100023283;110100023282",
                "poiid": "BV10013485",
                "lg": "3",
                "sp": "su zhou jie"
              },
              {
                "rs": "699 448|699 448",
                "udpx": "699 451;699 445",
                "su": "1",
                "udsu": "1;1",
                "n": "海淀黄庄",
                "sid": "110100023076008",
                "p": "699 448",
                "r": "110100023076|110100023282",
                "udsi": "110100023282004;110100023283042",
                "t": "1",
                "si": "110100023076008",
                "sl": "116.317564,39.975996",
                "udli": "110100023282;110100023283",
                "poiid": "BV10013411",
                "lg": "3",
                "sp": "hai dian huang zhuang"
              },
              {
                "rs": "794 448",
                "udpx": "794 451;794 445",
                "su": "1",
                "udsu": "1;1",
                "n": "知春里",
                "sid": "110100023282005",
                "p": "794 448",
                "r": "110100023282",
                "udsi": "110100023282005;110100023283041",
                "t": "0",
                "si": "110100023282005",
                "sl": "116.328709,39.976334",
                "udli": "110100023282;110100023283",
                "poiid": "BV10001215",
                "lg": "4",
                "sp": "zhi chun li"
              },
              {
                "rs": "843 448",
                "udpx": "843 451;843 445",
                "su": "1",
                "udsu": "1;1",
                "n": "知春路",
                "sid": "110100023282006",
                "p": "843 448",
                "r": "110100023282",
                "udsi": "110100023282006;110100023283040",
                "t": "1",
                "si": "110100023282006",
                "sl": "116.339960,39.976476",
                "udli": "110100023282;110100023283",
                "poiid": "BV10001218",
                "lg": "7",
                "sp": "zhi chun lu"
              },
              {
                "rs": "879 448",
                "udpx": "879 451;879 445",
                "su": "1",
                "udsu": "1;1",
                "n": "西土城",
                "sid": "110100023282007",
                "p": "879 448",
                "r": "110100023282",
                "udsi": "110100023282007;110100023283039",
                "t": "0",
                "si": "110100023282007",
                "sl": "116.354098,39.976549",
                "udli": "110100023282;110100023283",
                "poiid": "BV10013486",
                "lg": "4",
                "sp": "xi tu cheng"
              },
              {
                "rs": "938 449|938 449",
                "udpx": "938 446;938 451",
                "su": "1",
                "udsu": "1;1",
                "n": "牡丹园",
                "sid": "110100023282008",
                "p": "938 449",
                "r": "110100023282|900000079004",
                "udsi": "110100023283038;110100023282008",
                "t": "1",
                "si": "110100023282008",
                "sl": "116.369844,39.976603",
                "udli": "110100023283;110100023282",
                "poiid": "BV10000017",
                "lg": "7",
                "sp": "MuDanYuan"
              },
              {
                "rs": "969 448",
                "udpx": "969 451;969 445",
                "su": "1",
                "udsu": "1;1",
                "n": "健德门",
                "sid": "110100023282009",
                "p": "969 448",
                "r": "110100023282",
                "udsi": "110100023282009;110100023283037",
                "t": "0",
                "si": "110100023282009",
                "sl": "116.381353,39.976723",
                "udli": "110100023282;110100023283",
                "poiid": "BV10004058",
                "lg": "4",
                "sp": "jian de men"
              },
              {
                "rs": "1001 449|1001 449",
                "udpx": "1001 451;1001 446",
                "su": "1",
                "udsu": "1;1",
                "n": "北土城",
                "sid": "110100023114007",
                "p": "1001 449",
                "r": "110100023114|110100023282",
                "udsi": "110100023282010;110100023283036",
                "t": "1",
                "si": "110100023114007",
                "sl": "116.394193,39.976953",
                "udli": "110100023282;110100023283",
                "poiid": "BV10013465",
                "lg": "7",
                "sp": "bei tu cheng"
              },
              {
                "rs": "1085 448",
                "udpx": "1085 451;1085 445",
                "su": "1",
                "udsu": "1;1",
                "n": "安贞门",
                "sid": "110100023282011",
                "p": "1085 448",
                "r": "110100023282",
                "udsi": "110100023282011;110100023283035",
                "t": "0",
                "si": "110100023282011",
                "sl": "116.405954,39.977005",
                "udli": "110100023282;110100023283",
                "poiid": "BV10013487",
                "lg": "4",
                "sp": "an zhen men"
              },
              {
                "rs": "1116 448|1116 448",
                "udpx": "1116 451;1116 445",
                "su": "1",
                "udsu": "1;1",
                "n": "惠新西街南口",
                "sid": "110100023100015",
                "p": "1116 448",
                "r": "110100023100|110100023282",
                "udsi": "110100023282012;110100023283034",
                "t": "1",
                "si": "110100023100015",
                "sl": "116.417537,39.977121",
                "udli": "110100023282;110100023283",
                "poiid": "BV10005412",
                "lg": "3",
                "sp": "hui xin xi jie nan kou"
              },
              {
                "rs": "1201 448|1201 448",
                "udpx": "1201 445;1201 451",
                "su": "1",
                "udsu": "1;1",
                "n": "芍药居",
                "sid": "110100023282013",
                "p": "1201 448",
                "r": "110100023282|110100033066",
                "udsi": "110100023283033;110100023282013",
                "t": "1",
                "si": "110100023282013",
                "sl": "116.435914,39.977636",
                "udli": "110100023283;110100023282",
                "poiid": "BV10006575",
                "lg": "3",
                "sp": "shao yao ju"
              },
              {
                "rs": "1262 448",
                "udpx": "1262 451;1262 445",
                "su": "1",
                "udsu": "1;1",
                "n": "太阳宫",
                "sid": "110100023282014",
                "p": "1262 448",
                "r": "110100023282",
                "udsi": "110100023282014;110100023283032",
                "t": "0",
                "si": "110100023282014",
                "sl": "116.447469,39.972678",
                "udli": "110100023282;110100023283",
                "poiid": "BV10013488",
                "lg": "7",
                "sp": "tai yang gong"
              },
              {
                "rs": "1279 495|1279 495",
                "udpx": "1282 495;1276 495",
                "su": "1",
                "udsu": "1;1",
                "n": "三元桥",
                "sid": "110100023096003",
                "p": "1279 495",
                "r": "110100023282|110100023096",
                "udsi": "110100023283031;110100023282015",
                "t": "1",
                "si": "110100023096003",
                "sl": "116.456997,39.961508",
                "udli": "110100023283;110100023282",
                "poiid": "BV10000199",
                "lg": "3",
                "sp": "san yuan qiao"
              },
              {
                "rs": "1279 534",
                "udpx": "1282 534;1276 534",
                "su": "1",
                "udsu": "1;1",
                "n": "亮马桥",
                "sid": "110100023282016",
                "p": "1279 534",
                "r": "110100023282",
                "udsi": "110100023283030;110100023282016",
                "t": "0",
                "si": "110100023282016",
                "sl": "116.461794,39.949415",
                "udli": "110100023283;110100023282",
                "poiid": "BV10000196",
                "lg": "2",
                "sp": "liang ma qiao"
              },
              {
                "rs": "1279 570",
                "udpx": "1282 570;1276 570",
                "su": "1",
                "udsu": "1;1",
                "n": "农业展览馆",
                "sid": "110100023282017",
                "p": "1279 570",
                "r": "110100023282",
                "udsi": "110100023283029;110100023282017",
                "t": "0",
                "si": "110100023282017",
                "sl": "116.461724,39.941344",
                "udli": "110100023283;110100023282",
                "poiid": "BV10001223",
                "lg": "2",
                "sp": "nong ye zhan lan guan"
              },
              {
                "rs": "1279 607",
                "udpx": "1282 607;1276 607",
                "su": "1",
                "udsu": "1;1",
                "n": "团结湖",
                "sid": "110100023282018",
                "p": "1279 607",
                "r": "110100023282",
                "udsi": "110100023283028;110100023282018",
                "t": "0",
                "si": "110100023282018",
                "sl": "116.461806,39.933747",
                "udli": "110100023283;110100023282",
                "poiid": "BV10011994",
                "lg": "2",
                "sp": "tuan jie hu"
              },
              {
                "rs": "1279 659|1279 659",
                "udpx": "1276 659;1282 659",
                "su": "1",
                "udsu": "1;1",
                "n": "呼家楼",
                "sid": "110100023282019",
                "p": "1279 659",
                "r": "110100023339|110100023282",
                "udsi": "110100023282019;110100023283027",
                "t": "1",
                "si": "110100023282019",
                "sl": "116.461618,39.923337",
                "udli": "110100023282;110100023283",
                "poiid": "BV10013489",
                "lg": "1",
                "sp": "hu jia lou"
              },
              {
                "rs": "1279 690",
                "udpx": "1282 690;1276 690",
                "su": "1",
                "udsu": "1;1",
                "n": "金台夕照",
                "sid": "110100023282020",
                "p": "1279 690",
                "r": "110100023282",
                "udsi": "110100023283026;110100023282020",
                "t": "0",
                "si": "110100023282020",
                "sl": "116.461743,39.916838",
                "udli": "110100023283;110100023282",
                "poiid": "BV10013490",
                "lg": "6",
                "sp": "jin tai xi zhao"
              },
              {
                "rs": "1279 720|1279 720",
                "udpx": "1276 720;1282 720",
                "su": "1",
                "udsu": "1;1",
                "n": "国贸",
                "sid": "110100023110021",
                "p": "1279 720",
                "r": "110100023110|110100023282",
                "udsi": "110100023282021;110100023283025",
                "t": "1",
                "si": "110100023110021",
                "sl": "116.461841,39.909104",
                "udli": "110100023282;110100023283",
                "poiid": "BV10013461",
                "lg": "3",
                "sp": "guo mao"
              },
              {
                "rs": "1279 800|1279 800",
                "udpx": "1282 800;1276 800",
                "su": "1",
                "udsu": "1;1",
                "n": "双井",
                "sid": "110100023054013",
                "p": "1279 800",
                "r": "110100023054|110100023282",
                "udsi": "110100023283024;110100023282022",
                "t": "1",
                "si": "110100023054013",
                "sl": "116.461834,39.893512",
                "udli": "110100023283;110100023282",
                "poiid": "BV10013385",
                "lg": "1",
                "sp": "ShuangJing"
              },
              {
                "rs": "1279 817",
                "udpx": "1276 817;1282 817",
                "su": "1",
                "udsu": "1;1",
                "n": "劲松",
                "sid": "110100023282023",
                "p": "1279 817",
                "r": "110100023282",
                "udsi": "110100023282023;110100023283023",
                "t": "0",
                "si": "110100023282023",
                "sl": "116.461325,39.884387",
                "udli": "110100023282;110100023283",
                "poiid": "BV10007162",
                "lg": "2",
                "sp": "jin song"
              },
              {
                "rs": "1279 840",
                "udpx": "1282 840;1276 840",
                "su": "1",
                "udsu": "1;1",
                "n": "潘家园",
                "sid": "110100023282024",
                "p": "1279 840",
                "r": "110100023282",
                "udsi": "110100023283022;110100023282024",
                "t": "0",
                "si": "110100023282024",
                "sl": "116.460926,39.875387",
                "udli": "110100023283;110100023282",
                "poiid": "BV10000543",
                "lg": "2",
                "sp": "pan jia yuan"
              },
              {
                "rs": "1279 864|1279 864|1279 864",
                "udpx": "1282 864;1276 864",
                "su": "1",
                "udsu": "1;1",
                "n": "十里河",
                "sid": "110100023282025",
                "p": "1279 864",
                "r": "110100023282|900000028907|900000099933",
                "udsi": "110100023283021;110100023282025",
                "t": "1",
                "si": "110100023282025",
                "sl": "116.457983,39.866417",
                "udli": "110100023283;110100023282",
                "poiid": "BV10013367",
                "lg": "7",
                "sp": "ShiLiHe"
              },
              {
                "rs": "1227 935",
                "udpx": "1227 938;1227 932",
                "su": "1",
                "udsu": "1;1",
                "n": "分钟寺",
                "sid": "110100023282026",
                "p": "1227 935",
                "r": "110100023282",
                "udsi": "110100023283020;110100023282026",
                "t": "0",
                "si": "110100023282026",
                "sl": "116.453976,39.852227",
                "udli": "110100023283;110100023282",
                "poiid": "BV10007166",
                "lg": "0",
                "sp": "fen zhong si"
              },
              {
                "rs": "1179 935",
                "udpx": "1179 938;1179 932",
                "su": "1",
                "udsu": "1;1",
                "n": "成寿寺",
                "sid": "110100023282027",
                "p": "1179 935",
                "r": "110100023282",
                "udsi": "110100023283019;110100023282027",
                "t": "0",
                "si": "110100023282027",
                "sl": "116.447531,39.845874",
                "udli": "110100023283;110100023282",
                "poiid": "BV10013491",
                "lg": "0",
                "sp": "cheng shou si"
              },
              {
                "rs": "1116 935|1116 935|1116 935",
                "udpx": "1116 938;1116 932",
                "su": "1",
                "udsu": "1;1",
                "n": "宋家庄",
                "sid": "110100023100001",
                "p": "1116 935",
                "r": "110100023100|110100023282|110100023102",
                "udsi": "110100023283018;110100023282028",
                "t": "1",
                "si": "110100023100001",
                "sl": "116.428368,39.845849",
                "udli": "110100023283;110100023282",
                "poiid": "BV10000743",
                "lg": "3",
                "sp": "song jia zhuang"
              },
              {
                "rs": "1069 935",
                "udpx": "1069 938;1069 932",
                "su": "1",
                "udsu": "1;1",
                "n": "石榴庄",
                "sid": "110100023282029",
                "p": "1069 935",
                "r": "110100023282",
                "udsi": "110100023283017;110100023282029",
                "t": "0",
                "si": "110100023282029",
                "sl": "116.414103,39.845905",
                "udli": "110100023283;110100023282",
                "poiid": "BV10013492",
                "lg": "4",
                "sp": "shi liu zhuang"
              },
              {
                "rs": "1021 935",
                "udpx": "1021 932;1021 938",
                "su": "1",
                "udsu": "1;1",
                "n": "大红门",
                "sid": "110100023282030",
                "p": "1021 935",
                "r": "110100023282",
                "udsi": "110100023282030;110100023283016",
                "t": "0",
                "si": "110100023282030",
                "sl": "116.399154,39.845383",
                "udli": "110100023282;110100023283",
                "poiid": "BV10000737",
                "lg": "1",
                "sp": "da hong men"
              },
              {
                "rs": "974 935",
                "udpx": "974 932;974 938",
                "su": "1",
                "udsu": "1;1",
                "n": "角门东",
                "sid": "110100023282031",
                "p": "974 935",
                "r": "110100023282",
                "udsi": "110100023282031;110100023283015",
                "t": "0",
                "si": "110100023282031",
                "sl": "116.385649,39.845135",
                "udli": "110100023282;110100023283",
                "poiid": "BV10013493",
                "lg": "4",
                "sp": "jiao men dong"
              },
              {
                "rs": "928 935|928 935",
                "udpx": "928 932;928 938",
                "su": "1",
                "udsu": "1;1",
                "n": "角门西",
                "sid": "110100023076024",
                "p": "928 935",
                "r": "110100023076|110100023282",
                "udsi": "110100023282032;110100023283014",
                "t": "1",
                "si": "110100023076024",
                "sl": "116.371154,39.845850",
                "udli": "110100023282;110100023283",
                "poiid": "BV10013417",
                "lg": "1",
                "sp": "jiao men xi"
              },
              {
                "rs": "863 935|863 935|856 935",
                "udpx": "812 938;812 932",
                "su": "1",
                "udsu": "1;1",
                "n": "草桥",
                "sid": "110100023282033",
                "p": "863 935",
                "r": "110100023282|900000079004|900000076659",
                "udsi": "110100023283013;110100023282033",
                "t": "1",
                "si": "110100023282033",
                "sl": "116.351387,39.845869",
                "udli": "110100023283;110100023282",
                "poiid": "BV10000222",
                "lg": "7",
                "sp": "CaoQiao"
              },
              {
                "rs": "812 935",
                "udpx": "812 932;812 938",
                "su": "1",
                "udsu": "1;1",
                "n": "纪家庙",
                "sid": "110100023282034",
                "p": "812 935",
                "r": "110100023282",
                "udsi": "110100023282034;110100023283012",
                "t": "0",
                "si": "110100023282034",
                "sl": "116.333381,39.844433",
                "udli": "110100023282;110100023283",
                "poiid": "BV10006086",
                "lg": "4",
                "sp": "ji jia miao"
              },
              {
                "rs": "753 935|753 935",
                "udpx": "753 938;753 932",
                "su": "1",
                "udsu": "1;1",
                "n": "首经贸",
                "sid": "110100023092015",
                "p": "753 935",
                "r": "110100023282|110100023092",
                "udsi": "110100023283011;110100023282035",
                "t": "1",
                "si": "110100023092015",
                "sl": "116.320202,39.844463",
                "udli": "110100023283;110100023282",
                "poiid": "BV10013494",
                "lg": "7",
                "sp": "ShouJingMao"
              },
              {
                "rs": "688 935",
                "udpx": "688 932;688 938",
                "su": "1",
                "udsu": "1;1",
                "n": "丰台站",
                "sid": "110100023282036",
                "p": "688 935",
                "r": "110100023282",
                "udsi": "110100023282036;110100023283010",
                "t": "0",
                "si": "110100023282036",
                "sl": "116.304540,39.849639",
                "udli": "110100023282;110100023283",
                "poiid": "BV10013495",
                "lg": "0",
                "sp": "feng tai zhan"
              },
              {
                "rs": "650 892",
                "udpx": "647 892;653 892",
                "su": "1",
                "udsu": "1;1",
                "n": "泥洼",
                "sid": "110100023282037",
                "p": "650 892",
                "r": "110100023282",
                "udsi": "110100023283009;110100023282037",
                "t": "0",
                "si": "110100023282037",
                "sl": "116.304173,39.858609",
                "udli": "110100023283;110100023282",
                "poiid": "BV10003566",
                "lg": "2",
                "sp": "ni wa"
              },
              {
                "rs": "650 864|650 864",
                "udpx": "647 864;653 864",
                "su": "1",
                "udsu": "1;1",
                "n": "西局",
                "sid": "110100023282038",
                "p": "650 864",
                "r": "110100023282|900000028907",
                "udsi": "110100023283008;110100023282038",
                "t": "1",
                "si": "110100023282038",
                "sl": "116.303819,39.866770",
                "udli": "110100023283;110100023282",
                "poiid": "BV10000215",
                "lg": "1",
                "sp": "XiJu"
              },
              {
                "rs": "650 804|650 804",
                "udpx": "647 811;653 811",
                "su": "1",
                "udsu": "1;1",
                "n": "六里桥",
                "sid": "110100023116008",
                "p": "650 804",
                "r": "110100023116|110100023282",
                "udsi": "110100023283007;110100023282039",
                "t": "1",
                "si": "110100023116008",
                "sl": "116.302808,39.880239",
                "udli": "110100023283;110100023282",
                "poiid": "BV10013475",
                "lg": "6",
                "sp": "liu li qiao"
              },
              {
                "rs": "650 765",
                "udpx": "653 765;647 765",
                "su": "1",
                "udsu": "1;1",
                "n": "莲花桥",
                "sid": "110100023282040",
                "p": "650 765",
                "r": "110100023282",
                "udsi": "110100023282040;110100023283006",
                "t": "0",
                "si": "110100023282040",
                "sl": "116.310347,39.897867",
                "udli": "110100023282;110100023283",
                "poiid": "BV10002829",
                "lg": "6",
                "sp": "lian hua qiao"
              },
              {
                "rs": "650 720|650 720",
                "udpx": "653 719;647 721",
                "su": "1",
                "udsu": "1;1",
                "n": "公主坟",
                "sid": "110100023110009",
                "p": "650 720",
                "r": "110100023110|110100023282",
                "udsi": "110100023282041;110100023283005",
                "t": "1",
                "si": "110100023110009",
                "sl": "116.309919,39.907469",
                "udli": "110100023282;110100023283",
                "poiid": "BV10000306",
                "lg": "1",
                "sp": "gong zhu fen"
              },
              {
                "rs": "605 672",
                "udpx": "607 670;603 674",
                "su": "1",
                "udsu": "1;1",
                "n": "西钓鱼台",
                "sid": "110100023282042",
                "p": "605 672",
                "r": "110100023282",
                "udsi": "110100023282042;110100023283004",
                "t": "0",
                "si": "110100023282042",
                "sl": "116.298064,39.923481",
                "udli": "110100023282;110100023283",
                "poiid": "BV10002778",
                "lg": "6",
                "sp": "xi diao yu tai"
              },
              {
                "rs": "561 625|561 625",
                "udpx": "564 625;558 625",
                "su": "1",
                "udsu": "1;1",
                "n": "慈寿寺",
                "sid": "110100023282043",
                "p": "561 625",
                "r": "110100023339|110100023282",
                "udsi": "110100023282043;110100023283003",
                "t": "1",
                "si": "110100023282043",
                "sl": "116.295467,39.933268",
                "udli": "110100023282;110100023283",
                "poiid": "BV10013496",
                "lg": "1",
                "sp": "ci shou si"
              },
              {
                "rs": "561 579",
                "udpx": "564 579;558 579,558 579",
                "su": "1",
                "udsu": "1;1,1",
                "n": "车道沟",
                "sid": "110100023282044",
                "p": "561 579",
                "r": "110100023282",
                "udsi": "110100023282044;110100023283047,110100023283002",
                "t": "0",
                "si": "110100023282044",
                "sl": "116.293818,39.947923",
                "udli": "110100023282;110100023283,110100023283",
                "poiid": "BV10012405",
                "lg": "6",
                "sp": "che dao gou"
              },
              {
                "rs": "561 534",
                "udpx": "558 534;564 534",
                "su": "1",
                "udsu": "1;1",
                "n": "长春桥",
                "sid": "110100023282045",
                "p": "561 534",
                "r": "110100023282",
                "udsi": "110100023283046;110100023282045",
                "t": "0",
                "si": "110100023282045",
                "sl": "116.294255,39.958527",
                "udli": "110100023283;110100023282",
                "poiid": "BV10007535",
                "lg": "6",
                "sp": "chang chun qiao"
              },
              {
                "rs": "561 490",
                "udpx": "558 490;564 490",
                "su": "1",
                "udsu": "1;1",
                "n": "火器营",
                "sid": "110100023282046",
                "p": "561 490",
                "r": "110100023282",
                "udsi": "110100023283045;110100023282046",
                "t": "0",
                "si": "110100023282046",
                "sl": "116.289058,39.965938",
                "udli": "110100023283;110100023282",
                "poiid": "BV10007538",
                "lg": "6",
                "sp": "huo qi ying"
              }
            ],
            "ln": "10号线",
            "su": "1",
            "kn": "地铁10号线",
            "c": [
              "602 448",
              "645 448",
              "699 448",
              "701 448",
              "794 448",
              "843 448",
              "879 448",
              "938 449",
              "969 448",
              "1001 449",
              "1085 448",
              "1116 448",
              "1201 448",
              "1262 448",
              "1268 449",
              "1271 449",
              "1274 450",
              "1276 451",
              "1277 452",
              "1278 454",
              "1279 456",
              "1279 458",
              "1279 495",
              "1279 534",
              "1279 570",
              "1279 607",
              "1279 659",
              "1279 690",
              "1279 720",
              "1279 749",
              "1279 791",
              "1279 800",
              "1279 817",
              "1279 840",
              "1279 864",
              "1279 909",
              "1278 917",
              "1276 924",
              "1273 928",
              "1267 932",
              "1259 934",
              "1249 935",
              "1227 935",
              "1179 935",
              "1116 935",
              "1069 935",
              "1021 935",
              "974 935",
              "928 935",
              "863 935",
              "812 935",
              "753 935",
              "688 935",
              "670 935",
              "663 935",
              "658 933",
              "654 931",
              "652 928",
              "650 924",
              "650 918",
              "650 892",
              "650 864",
              "650 852",
              "650 811",
              "650 804",
              "650 765",
              "650 720",
              "605 672",
              "561 626",
              "561 625",
              "561 579",
              "561 534",
              "561 490",
              "561 471",
              "563 466",
              "566 462",
              "570 458",
              "575 455",
              "581 452",
              "592 449",
              "596 449",
              "602 448"
            ],
            "lo": "1",
            "lp": [
              "757 979"
            ],
            "f": [
              {
                "c": [
                  "600 446",
                  "596 446",
                  "591 447",
                  "580 450",
                  "574 452",
                  "568 456",
                  "563 460",
                  "560 465",
                  "558 470",
                  "558 490",
                  "558 534",
                  "558 579",
                  "558 625",
                  "558 627",
                  "603 674",
                  "647 721",
                  "647 765",
                  "647 811",
                  "647 852",
                  "647 864",
                  "647 892",
                  "647 919",
                  "648 925",
                  "649 930",
                  "652 934",
                  "657 936",
                  "663 938",
                  "670 938",
                  "688 938",
                  "753 938",
                  "812 938",
                  "928 938",
                  "974 938",
                  "1021 938",
                  "1069 938",
                  "1116 938",
                  "1179 938",
                  "1227 938",
                  "1249 938",
                  "1260 937",
                  "1268 935",
                  "1275 930",
                  "1279 925",
                  "1281 917",
                  "1282 909",
                  "1282 864",
                  "1282 840",
                  "1282 817",
                  "1282 800",
                  "1282 791",
                  "1282 749",
                  "1282 720",
                  "1282 690",
                  "1282 659",
                  "1282 607",
                  "1282 570",
                  "1282 534",
                  "1282 495",
                  "1282 458",
                  "1281 455",
                  "1281 453",
                  "1280 450",
                  "1278 448",
                  "1275 447",
                  "1272 446",
                  "1268 446",
                  "1262 445",
                  "1201 445",
                  "1116 445",
                  "1085 445",
                  "1001 446",
                  "969 445",
                  "938 446",
                  "879 445",
                  "843 445",
                  "794 445",
                  "701 445",
                  "699 445",
                  "645 445",
                  "601 445"
                ],
                "li": "110100023283"
              },
              {
                "c": [
                  "603 451",
                  "645 451",
                  "699 451",
                  "701 451",
                  "794 451",
                  "843 451",
                  "879 451",
                  "938 451",
                  "969 451",
                  "1001 451",
                  "1085 451",
                  "1116 451",
                  "1201 451",
                  "1262 451",
                  "1268 451",
                  "1271 452",
                  "1273 452",
                  "1274 453",
                  "1275 454",
                  "1275 455",
                  "1276 456",
                  "1276 458",
                  "1276 495",
                  "1276 534",
                  "1276 570",
                  "1276 607",
                  "1276 659",
                  "1276 690",
                  "1276 720",
                  "1276 749",
                  "1276 791",
                  "1276 800",
                  "1276 817",
                  "1276 840",
                  "1276 864",
                  "1276 909",
                  "1276 916",
                  "1274 922",
                  "1271 926",
                  "1266 930",
                  "1259 932",
                  "1248 932",
                  "1227 932",
                  "1179 932",
                  "1116 932",
                  "1069 932",
                  "1021 932",
                  "974 932",
                  "928 932",
                  "812 932",
                  "753 932",
                  "688 932",
                  "670 932",
                  "664 932",
                  "659 931",
                  "656 929",
                  "654 927",
                  "653 923",
                  "653 918",
                  "653 892",
                  "653 864",
                  "653 852",
                  "653 811",
                  "653 765",
                  "653 719",
                  "607 670",
                  "564 625",
                  "564 625",
                  "564 579",
                  "564 534",
                  "564 490",
                  "564 471",
                  "565 467",
                  "568 464",
                  "571 461",
                  "576 457",
                  "582 455",
                  "593 452",
                  "596 452",
                  "603 451"
                ],
                "li": "110100023282"
              }
            ],
            "ls": "110100023282",
            "cl": "019AC3",
            "la": "",
            "x": 10,
            "li": "110100023282|110100023283"
          },
          {
            "st": [
              {
                "rs": "270 684|270 672|270 678",
                "udpx": "273 684;267 684",
                "su": "1",
                "udsu": "1;1",
                "n": "金安桥",
                "sid": "110100023339035",
                "p": "270 678",
                "r": "900000069871|110100023339|900000159716",
                "udsi": "900000159717003;900000159716002",
                "t": "1",
                "si": "110100023339035",
                "sl": "116.162586,39.923298",
                "udli": "900000159717;900000159716",
                "poiid": "BV11494889",
                "lg": "0",
                "sp": "JinAn Qiao"
              },
              {
                "rs": "270 707",
                "udpx": "273 707;267 707",
                "su": "1",
                "udsu": "1;1",
                "n": "北辛安",
                "sid": "900000159716003",
                "p": "270 707",
                "r": "900000159716",
                "udsi": "900000159717002;900000159716003",
                "t": "0",
                "si": "900000159716003",
                "sl": "116.164755,39.915456",
                "udli": "900000159717;900000159716",
                "poiid": "BV11494890",
                "lg": "2",
                "sp": "BeiXinAn"
              },
              {
                "rs": "270 729",
                "udpx": "273 729;267 729",
                "su": "1",
                "udsu": "1;1",
                "n": "新首钢",
                "sid": "900000159716004",
                "p": "270 729",
                "r": "900000159716",
                "udsi": "900000159717001;900000159716004",
                "t": "0",
                "si": "900000159716004",
                "sl": "116.164806,39.909610",
                "udli": "900000159717;900000159716",
                "poiid": "BV11494888",
                "lg": "2",
                "sp": "XinShouGang"
              }
            ],
            "ln": "11号线",
            "su": "1",
            "kn": "地铁11号线",
            "c": [
              "270 684",
              "270 678",
              "270 707",
              "270 729"
            ],
            "lo": "0",
            "lp": [
              "239 767"
            ],
            "f": [
              {
                "c": [
                  "273 729",
                  "273 707",
                  "273 684"
                ],
                "li": "900000159717"
              },
              {
                "c": [
                  "267 684",
                  "267 707",
                  "267 729"
                ],
                "li": "900000159716"
              }
            ],
            "ls": "900000159716",
            "cl": "EE3F42",
            "la": "",
            "x": 11,
            "li": "900000159716|900000159717"
          },
          {
            "st": [
              {
                "rs": "858 585|858 585",
                "udpx": ";",
                "su": "1",
                "udsu": "1;1",
                "n": "西直门",
                "sid": "110100023076013",
                "p": "858 585",
                "r": "110100023098|110100023076",
                "udsi": "110100033066017;110100033067002",
                "t": "1",
                "si": "110100023076013",
                "sl": "116.355426,39.940474",
                "udli": "110100033066;110100033067",
                "poiid": "BV10001595",
                "lg": "3",
                "sp": "xi zhi men"
              },
              {
                "rs": "843 523",
                "udpx": "846 523;841 523",
                "su": "1",
                "udsu": "1;1",
                "n": "大钟寺",
                "sid": "110100033066016",
                "p": "843 523",
                "r": "110100033066",
                "udsi": "110100033067003;110100033066016",
                "t": "0",
                "si": "110100033066016",
                "sl": "116.345139,39.966612",
                "udli": "110100033067;110100033066",
                "poiid": "BV10001016",
                "lg": "6",
                "sp": "da zhong si"
              },
              {
                "rs": "843 448",
                "udpx": ";",
                "su": "1",
                "udsu": "1;1",
                "n": "知春路",
                "sid": "110100023282006",
                "p": "843 448",
                "r": "110100023282",
                "udsi": "110100033066015;110100033067004",
                "t": "1",
                "si": "110100023282006",
                "sl": "116.339960,39.976476",
                "udli": "110100033066;110100033067",
                "poiid": "BV10001218",
                "lg": "7",
                "sp": "zhi chun lu"
              },
              {
                "rs": "843 418",
                "udpx": "841 418;846 418",
                "su": "1",
                "udsu": "1;1",
                "n": "五道口",
                "sid": "110100033066014",
                "p": "843 418",
                "r": "110100033066",
                "udsi": "110100033066014;110100033067005",
                "t": "0",
                "si": "110100033066014",
                "sl": "116.337742,39.992894",
                "udli": "110100033066;110100033067",
                "poiid": "BV10006886",
                "lg": "6",
                "sp": "wu dao kou"
              },
              {
                "rs": "843 385",
                "udpx": "846 385;841 385",
                "su": "1",
                "udsu": "1;1",
                "n": "上地",
                "sid": "110100033066013",
                "p": "843 385",
                "r": "110100033066",
                "udsi": "110100033067006;110100033066013",
                "t": "0",
                "si": "110100033066013",
                "sl": "116.320193,40.033007",
                "udli": "110100033067;110100033066",
                "poiid": "BV10013516",
                "lg": "6",
                "sp": "shang di"
              },
              {
                "rs": "843 327|831 327",
                "udpx": "841 327;846 327",
                "su": "1",
                "udsu": "1;1",
                "n": "清河站",
                "sid": "110100023118014",
                "p": "837 327",
                "r": "110100033066|110100023118",
                "udsi": "110100033066018;110100033067018",
                "t": "1",
                "si": "110100023118014",
                "sl": "116.314961,40.041164",
                "udli": "110100033066;110100033067",
                "poiid": "BV11467455",
                "lg": "6",
                "sp": "QingHe Zhan"
              },
              {
                "rs": "843 299|831 299",
                "udpx": "841 299;846 299",
                "su": "1",
                "udsu": "1;1",
                "n": "西二旗",
                "sid": "110100023118008",
                "p": "837 299",
                "r": "110100033066|110100023118",
                "udsi": "110100033066012;110100033067007",
                "t": "1",
                "si": "110100023118008",
                "sl": "116.306295,40.053034",
                "udli": "110100033066;110100033067",
                "poiid": "BV10007027",
                "lg": "6",
                "sp": "XiErQi"
              },
              {
                "rs": "883 267",
                "udpx": "883 270;883 264",
                "su": "1",
                "udsu": "1;1",
                "n": "龙泽",
                "sid": "110100033066011",
                "p": "883 267",
                "r": "110100033066",
                "udsi": "110100033067008;110100033066011",
                "t": "0",
                "si": "110100033066011",
                "sl": "116.319429,40.070882",
                "udli": "110100033067;110100033066",
                "poiid": "BV10013515",
                "lg": "0",
                "sp": "long ze"
              },
              {
                "rs": "931 267",
                "udpx": "931 270;931 264",
                "su": "1",
                "udsu": "1;1",
                "n": "回龙观",
                "sid": "110100033066010",
                "p": "931 267",
                "r": "110100033066",
                "udsi": "110100033067009;110100033066010",
                "t": "0",
                "si": "110100033066010",
                "sl": "116.336116,40.070800",
                "udli": "110100033067;110100033066",
                "poiid": "BV10013514",
                "lg": "0",
                "sp": "hui long guan"
              },
              {
                "rs": "970 267|970 267",
                "udpx": "931 264;931 270",
                "su": "1",
                "udsu": "1;1",
                "n": "霍营",
                "sid": "110100023114015",
                "p": "970 267",
                "r": "110100023114|110100033066",
                "udsi": "110100033066009;110100033067010",
                "t": "1",
                "si": "110100023114015",
                "sl": "116.360286,40.071857",
                "udli": "110100033066;110100033067",
                "poiid": "BV10007658",
                "lg": "1",
                "sp": "HuoYing"
              },
              {
                "rs": "1116 267|1116 267",
                "udpx": "1116 270;1116 264",
                "su": "1",
                "udsu": "1;1",
                "n": "立水桥",
                "sid": "110100023100020",
                "p": "1116 267",
                "r": "110100023100|110100033066",
                "udsi": "110100033067011;110100033066008",
                "t": "1",
                "si": "110100023100020",
                "sl": "116.412350,40.053032",
                "udli": "110100033067;110100033066",
                "poiid": "BV10000461",
                "lg": "1",
                "sp": "li shui qiao"
              },
              {
                "rs": "1201 340",
                "udpx": "1198 340;1204 340",
                "su": "1",
                "udsu": "1;1",
                "n": "北苑",
                "sid": "110100033066007",
                "p": "1201 340",
                "r": "110100033066",
                "udsi": "110100033067012;110100033066007",
                "t": "0",
                "si": "110100033066007",
                "sl": "116.434518,40.042997",
                "udli": "110100033067;110100033066",
                "poiid": "BV10000150",
                "lg": "2",
                "sp": "bei yuan"
              },
              {
                "rs": "1201 386|1201 386",
                "udpx": "1204 380;1198 380",
                "su": "1",
                "udsu": "1;1",
                "n": "望京西",
                "sid": "110100023070002",
                "p": "1201 386",
                "r": "110100033066|110100023070",
                "udsi": "110100033066006;110100033067013",
                "t": "1",
                "si": "110100023070002",
                "sl": "116.449884,39.995724",
                "udli": "110100033066;110100033067",
                "poiid": "BV10013377",
                "lg": "1",
                "sp": "wang jing xi"
              },
              {
                "rs": "1201 448|1201 448",
                "udpx": "1204 448;1198 448",
                "su": "1",
                "udsu": "1;1",
                "n": "芍药居",
                "sid": "110100023282013",
                "p": "1201 448",
                "r": "110100023282|110100033066",
                "udsi": "110100033066005;110100033067014",
                "t": "1",
                "si": "110100023282013",
                "sl": "116.435914,39.977636",
                "udli": "110100033066;110100033067",
                "poiid": "BV10006575",
                "lg": "3",
                "sp": "shao yao ju"
              },
              {
                "rs": "1201 502",
                "udpx": "1204 502;1198 502",
                "su": "1",
                "udsu": "1;1",
                "n": "光熙门",
                "sid": "110100033066004",
                "p": "1201 502",
                "r": "110100033066",
                "udsi": "110100033066004;110100033067015",
                "t": "0",
                "si": "110100033066004",
                "sl": "116.431761,39.968337",
                "udli": "110100033066;110100033067",
                "poiid": "BV10013512",
                "lg": "2",
                "sp": "guang xi men"
              },
              {
                "rs": "1201 543",
                "udpx": "1204 543;1198 543",
                "su": "1",
                "udsu": "1;1",
                "n": "柳芳",
                "sid": "110100033066003",
                "p": "1201 543",
                "r": "110100033066",
                "udsi": "110100033066003;110100033067016",
                "t": "0",
                "si": "110100033066003",
                "sl": "116.432728,39.958157",
                "udli": "110100033066;110100033067",
                "poiid": "BV10013511",
                "lg": "2",
                "sp": "liu fang"
              },
              {
                "rs": "1179 586|1179 586|1179 586",
                "udpx": "1179 589;1178 583",
                "su": "1",
                "udsu": "1;1",
                "n": "东直门",
                "sid": "110100023096004",
                "p": "1179 586",
                "r": "110100023098|110100033066|110100023096",
                "udsi": "110100033066002;110100033067017",
                "t": "1",
                "si": "110100023096004",
                "sl": "116.435842,39.941626",
                "udli": "110100033066;110100033067",
                "poiid": "BV10002731",
                "lg": "3",
                "sp": "dong zhi men"
              }
            ],
            "ln": "13号线",
            "su": "1",
            "kn": "地铁13号线",
            "c": [
              "858 585",
              "853 584",
              "849 580",
              "846 575",
              "844 569",
              "843 558",
              "843 523",
              "843 448",
              "843 418",
              "843 385",
              "843 327",
              "843 299",
              "844 290",
              "844 286",
              "845 282",
              "846 277",
              "849 274",
              "853 270",
              "859 268",
              "865 268",
              "883 267",
              "931 267",
              "970 267",
              "1015 267",
              "1116 267",
              "1181 267",
              "1189 269",
              "1195 272",
              "1198 275",
              "1200 279",
              "1201 284",
              "1201 288",
              "1201 295",
              "1201 340",
              "1201 379",
              "1201 380",
              "1201 386",
              "1201 448",
              "1201 502",
              "1201 543",
              "1201 558",
              "1201 565",
              "1201 571",
              "1199 576",
              "1196 580",
              "1191 583",
              "1185 585",
              "1179 586"
            ],
            "lo": "0",
            "lp": [
              "871 301"
            ],
            "f": [
              {
                "c": [
                  "1179 589",
                  "1186 587",
                  "1192 585",
                  "1198 582",
                  "1202 578",
                  "1204 572",
                  "1204 566",
                  "1204 558",
                  "1204 543",
                  "1204 502",
                  "1204 448",
                  "1204 380",
                  "1204 379",
                  "1204 340",
                  "1204 295",
                  "1204 288",
                  "1204 284",
                  "1203 278",
                  "1200 274",
                  "1196 269",
                  "1190 266",
                  "1181 265",
                  "1116 264",
                  "1015 264",
                  "931 264",
                  "883 264",
                  "865 265",
                  "858 266",
                  "852 268",
                  "847 271",
                  "843 276",
                  "842 281",
                  "841 286",
                  "841 289",
                  "841 299",
                  "841 327",
                  "841 385",
                  "841 418",
                  "841 448",
                  "841 523",
                  "841 558",
                  "841 570",
                  "843 576",
                  "847 582",
                  "852 586",
                  "858 587"
                ],
                "li": "110100033066"
              },
              {
                "c": [
                  "859 582",
                  "854 581",
                  "851 578",
                  "848 574",
                  "847 569",
                  "846 558",
                  "846 523",
                  "846 448",
                  "846 418",
                  "846 385",
                  "846 327",
                  "846 299",
                  "847 290",
                  "847 287",
                  "848 282",
                  "849 279",
                  "851 276",
                  "854 273",
                  "860 271",
                  "866 271",
                  "883 270",
                  "931 270",
                  "1015 270",
                  "1116 270",
                  "1180 270",
                  "1188 272",
                  "1193 274",
                  "1196 277",
                  "1197 280",
                  "1198 284",
                  "1198 288",
                  "1198 295",
                  "1198 340",
                  "1198 379",
                  "1198 380",
                  "1198 448",
                  "1198 502",
                  "1198 543",
                  "1198 558",
                  "1198 565",
                  "1198 571",
                  "1197 575",
                  "1194 578",
                  "1190 580",
                  "1185 582",
                  "1178 583"
                ],
                "li": "110100033067"
              }
            ],
            "ls": "110100033066",
            "cl": "FCD600",
            "la": "",
            "x": 12,
            "li": "110100033066|110100033067"
          },
          {
            "st": [
              {
                "rs": "1258 293",
                "udpx": "1255 293;1261 293",
                "su": "1",
                "udsu": "1;1",
                "n": "善各庄",
                "sid": "900000028907001",
                "p": "1258 293",
                "r": "900000028907",
                "udsi": "900000028907001;900000028908012",
                "t": "0",
                "si": "900000028907001",
                "sl": "116.478195,40.027160",
                "udli": "900000028907;900000028908",
                "poiid": "BV10416596",
                "lg": "2",
                "sp": "ShanGeZhuang"
              },
              {
                "rs": "1258 323",
                "udpx": "1256 323;1261 323",
                "su": "1",
                "udsu": "1;1",
                "n": "来广营",
                "sid": "900000028907002",
                "p": "1258 323",
                "r": "900000028907",
                "udsi": "900000028907002;900000028908011",
                "t": "0",
                "si": "900000028907002",
                "sl": "116.466994,40.020588",
                "udli": "900000028907;900000028908",
                "poiid": "BV10416588",
                "lg": "2",
                "sp": "LaiGuangYing"
              },
              {
                "rs": "1259 353",
                "udpx": "1256 353;1262 353",
                "su": "1",
                "udsu": "1;1",
                "n": "东湖渠",
                "sid": "900000028907003",
                "p": "1259 353",
                "r": "900000028907",
                "udsi": "900000028907003;900000028908010",
                "t": "0",
                "si": "900000028907003",
                "sl": "116.467412,40.010670",
                "udli": "900000028907;900000028908",
                "poiid": "BV10416590",
                "lg": "2",
                "sp": "DongHu Qu"
              },
              {
                "rs": "1259 386|1259 386",
                "udpx": "1256 386;1262 386",
                "su": "1",
                "udsu": "1;1",
                "n": "望京",
                "sid": "110100023070003",
                "p": "1259 386",
                "r": "900000028907|110100023070",
                "udsi": "900000028907004;900000028908009",
                "t": "1",
                "si": "110100023070003",
                "sl": "116.469409,39.998521",
                "udli": "900000028907;900000028908",
                "poiid": "BV10013356",
                "lg": "1",
                "sp": "WangJing"
              },
              {
                "rs": "1265 425",
                "udpx": "1263 426;1268 422",
                "su": "1",
                "udsu": "1;1",
                "n": "阜通",
                "sid": "900000028907005",
                "p": "1267 424",
                "r": "900000028907",
                "udsi": "900000028907005;900000028908008",
                "t": "0",
                "si": "900000028907005",
                "sl": "116.471740,39.991699",
                "udli": "900000028907;900000028908",
                "poiid": "BV10416592",
                "lg": "2",
                "sp": "FuTong"
              },
              {
                "rs": "1300 456",
                "udpx": "1298 458;1302 454",
                "su": "1",
                "udsu": "1;1",
                "n": "望京南",
                "sid": "900000028907006",
                "p": "1300 456",
                "r": "900000028907",
                "udsi": "900000028907006;900000028908007",
                "t": "0",
                "si": "900000028907006",
                "sl": "116.481634,39.984634",
                "udli": "900000028907;900000028908",
                "poiid": "BV10416591",
                "lg": "2",
                "sp": "WangJing Nan"
              },
              {
                "rs": "1337 522",
                "udpx": "1334 522;1339 522",
                "su": "1",
                "udsu": "1;1",
                "n": "将台",
                "sid": "900000028907008",
                "p": "1337 522",
                "r": "900000028907",
                "udsi": "900000028907008;900000028908005",
                "t": "0",
                "si": "900000028907008",
                "sl": "116.489496,39.971109",
                "udli": "900000028907;900000028908",
                "poiid": "BV10416595",
                "lg": "2",
                "sp": "JiangTai"
              },
              {
                "rs": "1337 554",
                "udpx": "1334 554;1339 554",
                "su": "1",
                "udsu": "1;1",
                "n": "东风北桥",
                "sid": "900000028907009",
                "p": "1337 554",
                "r": "900000028907",
                "udsi": "900000028907009;900000028908004",
                "t": "0",
                "si": "900000028907009",
                "sl": "116.485919,39.958375",
                "udli": "900000028907;900000028908",
                "poiid": "BV10416594",
                "lg": "2",
                "sp": "DongFeng BeiQiao"
              },
              {
                "rs": "1337 586",
                "udpx": "1334 586;1339 586",
                "su": "1",
                "udsu": "1;1",
                "n": "枣营",
                "sid": "900000028907010",
                "p": "1337 586",
                "r": "900000028907",
                "udsi": "900000028907010;900000028908003",
                "t": "0",
                "si": "900000028907010",
                "sl": "116.474947,39.944132",
                "udli": "900000028907;900000028908",
                "poiid": "BV10416587",
                "lg": "2",
                "sp": "ZaoYing"
              },
              {
                "rs": "1337 622",
                "udpx": "1334 622;1339 622",
                "su": "1",
                "udsu": "1;1",
                "n": "朝阳公园",
                "sid": "900000028907011",
                "p": "1336 622",
                "r": "900000028907",
                "udsi": "900000028907011;900000028908002",
                "t": "0",
                "si": "900000028907011",
                "sl": "116.478291,39.933492",
                "udli": "900000028907;900000028908",
                "poiid": "BV10416593",
                "lg": "2",
                "sp": "ChaoYangGongYuan"
              },
              {
                "rs": "1337 659|1337 659",
                "udpx": "1334 659;1339 659",
                "su": "1",
                "udsu": "1;1",
                "n": "金台路",
                "sid": "110100023339008",
                "p": "1337 659",
                "r": "110100023339|900000028907",
                "udsi": "900000028907012;900000028908001",
                "t": "1",
                "si": "110100023339008",
                "sl": "116.478115,39.923556",
                "udli": "900000028907;900000028908",
                "poiid": "BV10008284",
                "lg": "1",
                "sp": "JinTai Lu"
              },
              {
                "rs": "1337 720|1337 720",
                "udpx": "1334 720;1339 720",
                "su": "1",
                "udsu": "1;1",
                "n": "大望路",
                "sid": "110100023110022",
                "p": "1337 720",
                "r": "110100023110|900000028907",
                "udsi": "900000028907014;900000028908024",
                "t": "1",
                "si": "110100023110022",
                "sl": "116.475783,39.908287",
                "udli": "900000028907;900000028908",
                "poiid": "BV10013364",
                "lg": "1",
                "sp": "DaWang Lu"
              },
              {
                "rs": "1337 800|1337 800",
                "udpx": "1334 800;1339 800",
                "su": "1",
                "udsu": "1;1",
                "n": "九龙山",
                "sid": "110100023054014",
                "p": "1337 800",
                "r": "110100023054|900000028907",
                "udsi": "900000028907015;900000028908023",
                "t": "1",
                "si": "110100023054014",
                "sl": "116.478695,39.893222",
                "udli": "900000028907;900000028908",
                "poiid": "BV10006224",
                "lg": "1",
                "sp": "JiuLongShan"
              },
              {
                "rs": "1337 829",
                "udpx": "1334 820;1339 820",
                "su": "1",
                "udsu": "1;1",
                "n": "平乐园",
                "sid": "900000028907016",
                "p": "1337 829",
                "r": "900000028907",
                "udsi": "900000028907016;900000028908022",
                "t": "0",
                "si": "900000028907016",
                "sl": "116.477307,39.885275",
                "udli": "900000028907;900000028908",
                "poiid": "BV10007475",
                "lg": "2",
                "sp": "PingLeYuan"
              },
              {
                "rs": "1337 846",
                "udpx": "1334 842;1339 842",
                "su": "1",
                "udsu": "1;1",
                "n": "北工大西门",
                "sid": "900000028907017",
                "p": "1337 846",
                "r": "900000028907",
                "udsi": "900000028907017;900000028908021",
                "t": "0",
                "si": "900000028907017",
                "sl": "116.477318,39.875437",
                "udli": "900000028907;900000028908",
                "poiid": "BV10590953",
                "lg": "3",
                "sp": "BeiGong DaXiMen"
              },
              {
                "rs": "1279 864|1279 864|1279 864",
                "udpx": "1279 861;1279 867",
                "su": "1",
                "udsu": "1;1",
                "n": "十里河",
                "sid": "110100023282025",
                "p": "1279 864",
                "r": "110100023282|900000028907|900000099933",
                "udsi": "900000028907019;900000028908019",
                "t": "1",
                "si": "110100023282025",
                "sl": "116.457983,39.866417",
                "udli": "900000028907;900000028908",
                "poiid": "BV10013367",
                "lg": "7",
                "sp": "ShiLiHe"
              },
              {
                "rs": "1201 864",
                "udpx": "1201 861;1201 867",
                "su": "1",
                "udsu": "1;1",
                "n": "方庄",
                "sid": "900000028907020",
                "p": "1201 864",
                "r": "900000028907",
                "udsi": "900000028907020;900000028908018",
                "t": "0",
                "si": "900000028907020",
                "sl": "116.440244,39.865868",
                "udli": "900000028907;900000028908",
                "poiid": "BV10012561",
                "lg": "4",
                "sp": "FangZhuang"
              },
              {
                "rs": "1116 864|1116 864",
                "udpx": "1116 861;1116 867",
                "su": "1",
                "udsu": "1;1",
                "n": "蒲黄榆",
                "sid": "110100023100003",
                "p": "1116 864",
                "r": "110100023100|900000028907",
                "udsi": "900000028907021;900000028908017",
                "t": "1",
                "si": "110100023100003",
                "sl": "116.423720,39.865621",
                "udli": "900000028907;900000028908",
                "poiid": "BV10006603",
                "lg": "1",
                "sp": "PuHuangYu"
              },
              {
                "rs": "1079 864",
                "udpx": "1079 861;1079 867",
                "su": "1",
                "udsu": "1;1",
                "n": "景泰",
                "sid": "900000028907022",
                "p": "1079 864",
                "r": "900000028907",
                "udsi": "900000028907022;900000028908016",
                "t": "0",
                "si": "900000028907022",
                "sl": "116.411026,39.865250",
                "udli": "900000028907;900000028908",
                "poiid": "BV10590951",
                "lg": "4",
                "sp": "JingTai"
              },
              {
                "rs": "1027 864|1027 864",
                "udpx": "1027 861;1027 867",
                "su": "1",
                "udsu": "1;1",
                "n": "永定门外",
                "sid": "110100023114031",
                "p": "1027 864",
                "r": "110100023114|900000028907",
                "udsi": "900000028907023;900000028908015",
                "t": "1",
                "si": "110100023114031",
                "sl": "116.399369,39.867435",
                "udli": "900000028907;900000028908",
                "poiid": "BV10013368",
                "lg": "1",
                "sp": "YongDing MenWai"
              },
              {
                "rs": "928 864|928 864",
                "udpx": "928 861;928 867",
                "su": "1",
                "udsu": "1;1",
                "n": "北京南站",
                "sid": "110100023076022",
                "p": "928 864",
                "r": "110100023076|900000028907",
                "udsi": "900000028907025;900000028908013",
                "t": "1",
                "si": "110100023076022",
                "sl": "116.378963,39.865029",
                "udli": "900000028907;900000028908",
                "poiid": "BV10006454",
                "lg": "1",
                "sp": "BeiJing NanZhan"
              },
              {
                "rs": "905 864|905 864",
                "udpx": "905 861;905 867",
                "su": "1",
                "udsu": "1;1",
                "n": "景风门",
                "sid": "900000028907026",
                "p": "905 864",
                "r": "900000028907|900000079004",
                "udsi": "900000028907026;900000028908037",
                "t": "1",
                "si": "900000028907026",
                "sl": "116.365564,39.862731",
                "udli": "900000028907;900000028908",
                "poiid": "BV10590952",
                "lg": "7",
                "sp": "JingFengMen"
              },
              {
                "rs": "849 864",
                "udpx": "849 861;849 867",
                "su": "1",
                "udsu": "1;1",
                "n": "西铁营",
                "sid": "900000028907027",
                "p": "849 864",
                "r": "900000028907",
                "udsi": "900000028907027;900000028908036",
                "t": "0",
                "si": "900000028907027",
                "sl": "116.355811,39.861132",
                "udli": "900000028907;900000028908",
                "poiid": "BV10013370",
                "lg": "4",
                "sp": "Xi TieYing"
              },
              {
                "rs": "797 864",
                "udpx": "797 861;797 867",
                "su": "1",
                "udsu": "1;1",
                "n": "菜户营",
                "sid": "900000028907028",
                "p": "797 864",
                "r": "900000028907",
                "udsi": "900000028907028;900000028908035",
                "t": "0",
                "si": "900000028907028",
                "sl": "116.341978,39.868086",
                "udli": "900000028907;900000028908",
                "poiid": "BV10013371",
                "lg": "4",
                "sp": "CaiHuYing"
              },
              {
                "rs": "746 864",
                "udpx": "746 861;746 867",
                "su": "1",
                "udsu": "1;1",
                "n": "丽泽商务区",
                "sid": "900000028907029",
                "p": "746 864",
                "r": "900000028907",
                "udsi": "900000028907029;900000028908034",
                "t": "0",
                "si": "900000028907029",
                "sl": "116.331258,39.867831",
                "udli": "900000028907;900000028908",
                "poiid": "BV10013372",
                "lg": "4",
                "sp": "LiZe ShangWu Qu"
              },
              {
                "rs": "697 864",
                "udpx": "697 861;697 867",
                "su": "1",
                "udsu": "1;1",
                "n": "东管头",
                "sid": "900000028907030",
                "p": "697 864",
                "r": "900000028907",
                "udsi": "900000028907030;900000028908033",
                "t": "0",
                "si": "900000028907030",
                "sl": "116.320900,39.867769",
                "udli": "900000028907;900000028908",
                "poiid": "BV10013373",
                "lg": "4",
                "sp": "DongGuanTou"
              },
              {
                "rs": "650 864|650 864",
                "udpx": "650 861;650 867",
                "su": "1",
                "udsu": "1;1",
                "n": "西局",
                "sid": "110100023282038",
                "p": "650 864",
                "r": "110100023282|900000028907",
                "udsi": "900000028907031;900000028908032",
                "t": "1",
                "si": "110100023282038",
                "sl": "116.303819,39.866770",
                "udli": "900000028907;900000028908",
                "poiid": "BV10000215",
                "lg": "1",
                "sp": "XiJu"
              },
              {
                "rs": "619 864|619 864",
                "udpx": "619 861;619 867",
                "su": "1",
                "udsu": "1;1",
                "n": "七里庄",
                "sid": "110100023116007",
                "p": "619 864",
                "r": "110100023116|900000028907",
                "udsi": "900000028907032;900000028908031",
                "t": "1",
                "si": "110100023116007",
                "sl": "116.294292,39.866773",
                "udli": "900000028907;900000028908",
                "poiid": "BV10000636",
                "lg": "7",
                "sp": "QiLiZhuang"
              },
              {
                "rs": "546 864",
                "udpx": "546 861;546 867",
                "su": "1",
                "udsu": "1;1",
                "n": "大井",
                "sid": "900000028907033",
                "p": "546 864",
                "r": "900000028907",
                "udsi": "900000028907033;900000028908030",
                "t": "0",
                "si": "900000028907033",
                "sl": "116.276061,39.865226",
                "udli": "900000028907;900000028908",
                "poiid": "BV10006219",
                "lg": "0",
                "sp": "DaJing"
              },
              {
                "rs": "497 864",
                "udpx": "497 861;497 867",
                "su": "1",
                "udsu": "1;1",
                "n": "郭庄子",
                "sid": "900000028907034",
                "p": "497 864",
                "r": "900000028907",
                "udsi": "900000028907034;900000028908029",
                "t": "0",
                "si": "900000028907034",
                "sl": "116.253068,39.864841",
                "udli": "900000028907;900000028908",
                "poiid": "BV10013400",
                "lg": "0",
                "sp": "GuoZhuangZi"
              },
              {
                "rs": "452 864",
                "udpx": "452 861;452 867",
                "su": "1",
                "udsu": "1;1",
                "n": "大瓦窑",
                "sid": "900000028907035",
                "p": "452 864",
                "r": "900000028907",
                "udsi": "900000028907035;900000028908028",
                "t": "0",
                "si": "900000028907035",
                "sl": "116.240480,39.859470",
                "udli": "900000028907;900000028908",
                "poiid": "BV10007072",
                "lg": "0",
                "sp": "DaWaYao"
              },
              {
                "rs": "411 864",
                "udpx": "411 861;411 867",
                "su": "1",
                "udsu": "1;1",
                "n": "园博园",
                "sid": "900000028907036",
                "p": "411 864",
                "r": "900000028907",
                "udsi": "900000028907036;900000028908027",
                "t": "0",
                "si": "900000028907036",
                "sl": "116.201643,39.861328",
                "udli": "900000028907;900000028908",
                "poiid": "BV10013401",
                "lg": "0",
                "sp": "YuanBoYuan"
              },
              {
                "rs": "360 864",
                "udpx": "360 861;360 867",
                "su": "1",
                "udsu": "1;1",
                "n": "张郭庄",
                "sid": "900000028907037",
                "p": "360 864",
                "r": "900000028907",
                "udsi": "900000028907037;900000028908026",
                "t": "0",
                "si": "900000028907037",
                "sl": "116.187193,39.858100",
                "udli": "900000028907;900000028908",
                "poiid": "BV10006917",
                "lg": "0",
                "sp": "ZhangGuoZhuang"
              }
            ],
            "ln": "14号线",
            "su": "1",
            "kn": "地铁14号线",
            "c": [
              "1258 293",
              "1258 323",
              "1259 353",
              "1259 386",
              "1259 413",
              "1260 417",
              "1262 420",
              "1265 425",
              "1300 456",
              "1335 486",
              "1336 488",
              "1336 489",
              "1337 522",
              "1337 554",
              "1337 586",
              "1337 618",
              "1337 622",
              "1337 659",
              "1337 687",
              "1337 720",
              "1337 760",
              "1337 800",
              "1337 820",
              "1337 829",
              "1337 842",
              "1337 846",
              "1337 856",
              "1336 860",
              "1334 863",
              "1330 864",
              "1325 864",
              "1279 864",
              "1201 864",
              "1116 864",
              "1079 864",
              "1027 864",
              "978 864",
              "928 864",
              "905 864",
              "849 864",
              "797 864",
              "746 864",
              "697 864",
              "650 864",
              "619 864",
              "546 864",
              "497 864",
              "452 864",
              "411 864",
              "360 864"
            ],
            "lo": "0",
            "lp": [
              "1402 573"
            ],
            "f": [
              {
                "c": [
                  "360 867",
                  "411 867",
                  "452 867",
                  "497 867",
                  "546 867",
                  "619 867",
                  "650 867",
                  "697 867",
                  "746 867",
                  "797 867",
                  "849 867",
                  "905 867",
                  "928 867",
                  "978 867",
                  "1027 867",
                  "1079 867",
                  "1116 867",
                  "1201 867",
                  "1279 867",
                  "1325 867",
                  "1331 866",
                  "1335 865",
                  "1338 861",
                  "1339 857",
                  "1339 842",
                  "1339 820",
                  "1339 800",
                  "1339 760",
                  "1339 720",
                  "1339 687",
                  "1339 659",
                  "1339 622",
                  "1339 618",
                  "1339 586",
                  "1339 554",
                  "1339 522",
                  "1339 489",
                  "1339 486",
                  "1337 484",
                  "1302 454",
                  "1268 422",
                  "1264 418",
                  "1263 416",
                  "1262 413",
                  "1262 386",
                  "1262 353",
                  "1261 323",
                  "1261 293"
                ],
                "li": "900000028908"
              },
              {
                "c": [
                  "1255 293",
                  "1256 323",
                  "1256 353",
                  "1256 386",
                  "1256 414",
                  "1257 418",
                  "1260 422",
                  "1263 426",
                  "1298 458",
                  "1333 488",
                  "1334 489",
                  "1334 490",
                  "1334 522",
                  "1334 554",
                  "1334 586",
                  "1334 618",
                  "1334 622",
                  "1334 659",
                  "1334 687",
                  "1334 720",
                  "1334 760",
                  "1334 800",
                  "1334 820",
                  "1334 842",
                  "1334 856",
                  "1333 859",
                  "1332 860",
                  "1330 861",
                  "1325 861",
                  "1279 861",
                  "1201 861",
                  "1116 861",
                  "1079 861",
                  "1027 861",
                  "978 861",
                  "928 861",
                  "905 861",
                  "849 861",
                  "797 861",
                  "746 861",
                  "697 861",
                  "650 861",
                  "619 861",
                  "546 861",
                  "497 861",
                  "452 861",
                  "411 861",
                  "360 861"
                ],
                "li": "900000028907"
              }
            ],
            "ls": "900000028907",
            "cl": "E4A8A3",
            "la": "",
            "x": 13,
            "li": "900000028907|900000028908"
          },
          {
            "st": [
              {
                "rs": "1469 143",
                "udpx": "1469 146;1469 140",
                "su": "1",
                "udsu": "1;1",
                "n": "俸伯",
                "sid": "110100023070014",
                "p": "1469 143",
                "r": "110100023070",
                "udsi": "110100023070014;110100023071002",
                "t": "0",
                "si": "110100023070014",
                "sl": "116.684732,40.132573",
                "udli": "110100023070;110100023071",
                "poiid": "BV10002186",
                "lg": "4",
                "sp": "feng bo"
              },
              {
                "rs": "1434 143",
                "udpx": "1434 146;1434 140",
                "su": "1",
                "udsu": "1;1",
                "n": "顺义",
                "sid": "110100023070013",
                "p": "1434 143",
                "r": "110100023070",
                "udsi": "110100023070013;110100023071003",
                "t": "0",
                "si": "110100023070013",
                "sl": "116.657023,40.129994",
                "udli": "110100023070;110100023071",
                "poiid": "BV10013405",
                "lg": "4",
                "sp": "shun yi"
              },
              {
                "rs": "1396 143",
                "udpx": "1396 146;1396 140",
                "su": "1",
                "udsu": "1;1",
                "n": "石门",
                "sid": "110100023070012",
                "p": "1396 143",
                "r": "110100023070",
                "udsi": "110100023070012;110100023071004",
                "t": "0",
                "si": "110100023070012",
                "sl": "116.641117,40.129802",
                "udli": "110100023070;110100023071",
                "poiid": "BV10013404",
                "lg": "4",
                "sp": "shi men"
              },
              {
                "rs": "1357 143",
                "udpx": "1357 146;1357 140",
                "su": "1",
                "udsu": "1;1",
                "n": "南法信",
                "sid": "110100023070011",
                "p": "1357 143",
                "r": "110100023070",
                "udsi": "110100023070011;110100023071005",
                "t": "0",
                "si": "110100023070011",
                "sl": "116.609535,40.128478",
                "udli": "110100023070;110100023071",
                "poiid": "BV10002190",
                "lg": "0",
                "sp": "nan fa xin"
              },
              {
                "rs": "1344 177",
                "udpx": "1347 177;1341 177",
                "su": "1",
                "udsu": "1;1",
                "n": "后沙峪",
                "sid": "110100023070010",
                "p": "1344 177",
                "r": "110100023070",
                "udsi": "110100023070010;110100023071006",
                "t": "0",
                "si": "110100023070010",
                "sl": "116.564211,40.114127",
                "udli": "110100023070;110100023071",
                "poiid": "BV10009387",
                "lg": "2",
                "sp": "hou sha yu"
              },
              {
                "rs": "1344 211",
                "udpx": "1347 211;1341 211",
                "su": "1",
                "udsu": "1;1",
                "n": "花梨坎",
                "sid": "110100023070009",
                "p": "1344 211",
                "r": "110100023070",
                "udsi": "110100023070009;110100023071007",
                "t": "0",
                "si": "110100023070009",
                "sl": "116.557593,40.084436",
                "udli": "110100023070;110100023071",
                "poiid": "BV10002223",
                "lg": "2",
                "sp": "hua li kan"
              },
              {
                "rs": "1344 246",
                "udpx": "1347 246;1341 246",
                "su": "1",
                "udsu": "1;1",
                "n": "国展",
                "sid": "110100023070008",
                "p": "1344 246",
                "r": "110100023070",
                "udsi": "110100023070008;110100023071008",
                "t": "0",
                "si": "110100023070008",
                "sl": "116.555127,40.070030",
                "udli": "110100023070;110100023071",
                "poiid": "BV10013403",
                "lg": "2",
                "sp": "guo zhan"
              },
              {
                "rs": "1344 279",
                "udpx": "1347 279;1341 279",
                "su": "1",
                "udsu": "1;1",
                "n": "孙河",
                "sid": "110100023070007",
                "p": "1344 279",
                "r": "110100023070",
                "udsi": "110100023070007;110100023071009",
                "t": "0",
                "si": "110100023070007",
                "sl": "116.534700,40.045113",
                "udli": "110100023070;110100023071",
                "poiid": "BV10002193",
                "lg": "2",
                "sp": "sun he"
              },
              {
                "rs": "1344 313",
                "udpx": "1341 313;1347 313",
                "su": "1",
                "udsu": "1;1",
                "n": "马泉营",
                "sid": "110100023070006",
                "p": "1344 313",
                "r": "110100023070",
                "udsi": "110100023071010;110100023070006",
                "t": "0",
                "si": "110100023070006",
                "sl": "116.503480,40.033721",
                "udli": "110100023071;110100023070",
                "poiid": "BV10011274",
                "lg": "2",
                "sp": "ma quan ying"
              },
              {
                "rs": "1344 348",
                "udpx": "1341 348;1347 348",
                "su": "1",
                "udsu": "1;1",
                "n": "崔各庄",
                "sid": "110100023070005",
                "p": "1344 348",
                "r": "110100023070",
                "udsi": "110100023071011;110100023070005",
                "t": "0",
                "si": "110100023070005",
                "sl": "116.492968,40.022201",
                "udli": "110100023071;110100023070",
                "poiid": "BV10000963",
                "lg": "2",
                "sp": "cui ge zhuang"
              },
              {
                "rs": "1336 381",
                "udpx": "1335 378;1338 383",
                "su": "1",
                "udsu": "1;1",
                "n": "望京东",
                "sid": "110100023070004",
                "p": "1336 381",
                "r": "110100023070",
                "udsi": "110100023071012;110100023070004",
                "t": "0",
                "si": "110100023070004",
                "sl": "116.487105,40.003200",
                "udli": "110100023071;110100023070",
                "poiid": "BV10013402",
                "lg": "2",
                "sp": "wang jing dong"
              },
              {
                "rs": "1259 386|1259 386",
                "udpx": "1259 389;1259 383",
                "su": "1",
                "udsu": "1;1",
                "n": "望京",
                "sid": "110100023070003",
                "p": "1259 386",
                "r": "900000028907|110100023070",
                "udsi": "110100023070003;110100023071013",
                "t": "1",
                "si": "110100023070003",
                "sl": "116.469409,39.998521",
                "udli": "110100023070;110100023071",
                "poiid": "BV10013356",
                "lg": "1",
                "sp": "WangJing"
              },
              {
                "rs": "1201 386|1201 386",
                "udpx": "1201 389;1201 383",
                "su": "1",
                "udsu": "1;1",
                "n": "望京西",
                "sid": "110100023070002",
                "p": "1201 386",
                "r": "110100033066|110100023070",
                "udsi": "110100023070002;110100023071014",
                "t": "1",
                "si": "110100023070002",
                "sl": "116.449884,39.995724",
                "udli": "110100023070;110100023071",
                "poiid": "BV10013377",
                "lg": "1",
                "sp": "wang jing xi"
              },
              {
                "rs": "1160 386",
                "udpx": "1160 389;1160 383",
                "su": "1",
                "udsu": "1;1",
                "n": "关庄",
                "sid": "110100023070021",
                "p": "1160 386",
                "r": "110100023070",
                "udsi": "110100023070021;110100023071015",
                "t": "0",
                "si": "110100023070021",
                "sl": "116.430947,40.001134",
                "udli": "110100023070;110100023071",
                "poiid": "BV10416640",
                "lg": "4",
                "sp": "guan zhuang"
              },
              {
                "rs": "1116 386|1116 386",
                "udpx": "1116 388;1116 383",
                "su": "1",
                "udsu": "1;1",
                "n": "大屯路东",
                "sid": "110100023070020",
                "p": "1116 386",
                "r": "110100023100|110100023070",
                "udsi": "110100023070020;110100023071016",
                "t": "1",
                "si": "110100023070020",
                "sl": "116.417377,40.003841",
                "udli": "110100023070;110100023071",
                "poiid": "BV10013376",
                "lg": "1",
                "sp": "da tun lu dong"
              },
              {
                "rs": "1065 385",
                "udpx": "1065 382;1065 388",
                "su": "1",
                "udsu": "1;1",
                "n": "安立路",
                "sid": "110100023070019",
                "p": "1065 385",
                "r": "110100023070",
                "udsi": "110100023071017;110100023070019",
                "t": "0",
                "si": "110100023070019",
                "sl": "116.407845,40.002619",
                "udli": "110100023071;110100023070",
                "poiid": "BV10416647",
                "lg": "4",
                "sp": "an li lu"
              },
              {
                "rs": "1002 384|1002 384",
                "udpx": "1002 381;1002 387",
                "su": "1",
                "udsu": "1;1",
                "n": "奥林匹克公园",
                "sid": "110100023070018",
                "p": "1002 384",
                "r": "110100023114|110100023070",
                "udsi": "110100023071018;110100023070018",
                "t": "1",
                "si": "110100023070018",
                "sl": "116.391758,40.002207",
                "udli": "110100023071;110100023070",
                "poiid": "BV10013375",
                "lg": "1",
                "sp": "ao lin pi ke gong yuan"
              },
              {
                "rs": "976 384",
                "udpx": "976 381;976 387",
                "su": "1",
                "udsu": "1;1",
                "n": "北沙滩",
                "sid": "110100023070017",
                "p": "976 384",
                "r": "110100023070",
                "udsi": "110100023071019;110100023070017",
                "t": "0",
                "si": "110100023070017",
                "sl": "116.368143,40.001492",
                "udli": "110100023071;110100023070",
                "poiid": "BV10416650",
                "lg": "0",
                "sp": "bei sha tan"
              },
              {
                "rs": "923 384",
                "udpx": "923 381;923 386",
                "su": "1",
                "udsu": "1;1",
                "n": "六道口",
                "sid": "110100023070016",
                "p": "923 384",
                "r": "110100023070",
                "udsi": "110100023071020;110100023070016",
                "t": "0",
                "si": "110100023070016",
                "sl": "116.352670,40.000958",
                "udli": "110100023071;110100023070",
                "poiid": "BV10416642",
                "lg": "0",
                "sp": "liu dao kou"
              },
              {
                "rs": "883 383",
                "udpx": "883 380;883 386",
                "su": "1",
                "udsu": "1;1",
                "n": "清华东路西口",
                "sid": "110100023070015",
                "p": "883 383",
                "r": "110100023070",
                "udsi": "110100023071021;110100023070015",
                "t": "0",
                "si": "110100023070015",
                "sl": "116.339530,40.000673",
                "udli": "110100023071;110100023070",
                "poiid": "BV10416646",
                "lg": "4",
                "sp": "qing hua dong lu xi kou"
              }
            ],
            "ln": "15号线",
            "su": "1",
            "kn": "地铁15号线",
            "c": [
              "883 383",
              "923 384",
              "976 384",
              "1002 384",
              "1065 385",
              "1116 386",
              "1160 386",
              "1201 386",
              "1259 386",
              "1318 386",
              "1326 385",
              "1332 383",
              "1336 381",
              "1340 377",
              "1342 373",
              "1343 367",
              "1344 359",
              "1344 348",
              "1344 313",
              "1344 279",
              "1344 246",
              "1344 211",
              "1344 177",
              "1344 147",
              "1344 145",
              "1344 144",
              "1346 143",
              "1348 143",
              "1351 143",
              "1357 143",
              "1396 143",
              "1434 143",
              "1469 143"
            ],
            "lo": "0",
            "lp": [
              "1433 203"
            ],
            "f": [
              {
                "c": [
                  "1469 140",
                  "1434 140",
                  "1396 140",
                  "1357 140",
                  "1351 140",
                  "1347 140",
                  "1344 140",
                  "1342 142",
                  "1341 145",
                  "1341 147",
                  "1341 177",
                  "1341 211",
                  "1341 246",
                  "1341 279",
                  "1341 313",
                  "1341 348",
                  "1341 359",
                  "1340 367",
                  "1339 372",
                  "1337 376",
                  "1335 378",
                  "1331 381",
                  "1326 382",
                  "1318 383",
                  "1259 383",
                  "1201 383",
                  "1160 383",
                  "1116 383",
                  "1065 382",
                  "1002 381",
                  "976 381",
                  "923 381",
                  "883 380"
                ],
                "li": "110100023071"
              },
              {
                "c": [
                  "883 386",
                  "923 386",
                  "976 387",
                  "1002 387",
                  "1065 388",
                  "1116 388",
                  "1160 389",
                  "1201 389",
                  "1259 389",
                  "1319 389",
                  "1327 388",
                  "1333 386",
                  "1338 383",
                  "1342 379",
                  "1344 374",
                  "1346 368",
                  "1347 359",
                  "1347 348",
                  "1347 313",
                  "1347 279",
                  "1347 246",
                  "1347 211",
                  "1347 177",
                  "1347 147",
                  "1347 146",
                  "1347 146",
                  "1347 146",
                  "1348 146",
                  "1351 146",
                  "1357 146",
                  "1396 146",
                  "1434 146",
                  "1469 146"
                ],
                "li": "110100023070"
              }
            ],
            "ls": "110100023070",
            "cl": "793E8C",
            "la": "",
            "x": 14,
            "li": "110100023070|110100023071"
          },
          {
            "st": [
              {
                "rs": "354 173",
                "udpx": "354 170;354 176",
                "su": "1",
                "udsu": "1;1",
                "n": "北安河",
                "sid": "900000062236001",
                "p": "354 173",
                "r": "900000062236",
                "udsi": "900000062237010;900000062236001",
                "t": "0",
                "si": "900000062236001",
                "sl": "116.130428,40.068128",
                "udli": "900000062237;900000062236",
                "poiid": "BV10740312",
                "lg": "0",
                "sp": "bei an he"
              },
              {
                "rs": "420 173",
                "udpx": "420 170;420 176",
                "su": "1",
                "udsu": "1;1",
                "n": "温阳路",
                "sid": "900000062236002",
                "p": "420 173",
                "r": "900000062236",
                "udsi": "900000062237009;900000062236002",
                "t": "0",
                "si": "900000062236002",
                "sl": "116.161361,40.068516",
                "udli": "900000062237;900000062236",
                "poiid": "BV10740317",
                "lg": "0",
                "sp": "wen yang lu"
              },
              {
                "rs": "481 173",
                "udpx": "481 170;481 176",
                "su": "1",
                "udsu": "1;1",
                "n": "稻香湖路",
                "sid": "900000062236003",
                "p": "481 173",
                "r": "900000062236",
                "udsi": "900000062237008;900000062236003",
                "t": "0",
                "si": "900000062236003",
                "sl": "116.188145,40.068936",
                "udli": "900000062237;900000062236",
                "poiid": "BV10711029",
                "lg": "0",
                "sp": "dao xiang hu lu"
              },
              {
                "rs": "541 173",
                "udpx": "541 170;541 176",
                "su": "1",
                "udsu": "1;1",
                "n": "屯佃",
                "sid": "900000062236004",
                "p": "541 173",
                "r": "900000062236",
                "udsi": "900000062237007;900000062236004",
                "t": "0",
                "si": "900000062236004",
                "sl": "116.215850,40.068454",
                "udli": "900000062237;900000062236",
                "poiid": "BV10740314",
                "lg": "0",
                "sp": "tun dian"
              },
              {
                "rs": "606 173",
                "udpx": "606 170;606 176",
                "su": "1",
                "udsu": "1;1",
                "n": "永丰",
                "sid": "900000062236005",
                "p": "606 173",
                "r": "900000062236",
                "udsi": "900000062237006;900000062236005",
                "t": "0",
                "si": "900000062236005",
                "sl": "116.238481,40.071868",
                "udli": "900000062237;900000062236",
                "poiid": "BV10740319",
                "lg": "0",
                "sp": "yong feng"
              },
              {
                "rs": "635 208",
                "udpx": "637 208;632 208",
                "su": "1",
                "udsu": "1;1",
                "n": "永丰南",
                "sid": "900000062236006",
                "p": "635 208",
                "r": "900000062236",
                "udsi": "900000062237005;900000062236006",
                "t": "0",
                "si": "900000062236006",
                "sl": "116.248154,40.065575",
                "udli": "900000062237;900000062236",
                "poiid": "BV10740315",
                "lg": "2",
                "sp": "yong feng nan"
              },
              {
                "rs": "635 239",
                "udpx": "638 239;632 239",
                "su": "1",
                "udsu": "1;1",
                "n": "西北旺",
                "sid": "900000062236007",
                "p": "635 239",
                "r": "900000062236",
                "udsi": "900000062237004;900000062236007",
                "t": "0",
                "si": "900000062236007",
                "sl": "116.257923,40.048703",
                "udli": "900000062237;900000062236",
                "poiid": "BV10740313",
                "lg": "2",
                "sp": "xi bei wang"
              },
              {
                "rs": "636 269",
                "udpx": "633 269;638 269",
                "su": "1",
                "udsu": "1;1",
                "n": "马连洼",
                "sid": "900000062236008",
                "p": "636 269",
                "r": "900000062236",
                "udsi": "900000062236008;900000062237003",
                "t": "0",
                "si": "900000062236008",
                "sl": "116.272520,40.032637",
                "udli": "900000062236;900000062237",
                "poiid": "BV10740318",
                "lg": "2",
                "sp": "ma lian wa"
              },
              {
                "rs": "636 299",
                "udpx": "633 299;639 299",
                "su": "1",
                "udsu": "1;1",
                "n": "农大南路",
                "sid": "900000062236009",
                "p": "636 299",
                "r": "900000062236",
                "udsi": "900000062236009;900000062237002",
                "t": "0",
                "si": "900000062236009",
                "sl": "116.282272,40.021398",
                "udli": "900000062236;900000062237",
                "poiid": "BV10740316",
                "lg": "2",
                "sp": "nong da nan lu"
              },
              {
                "rs": "636 331|636 331",
                "udpx": "633 315;639 315",
                "su": "1",
                "udsu": "1;1",
                "n": "西苑",
                "sid": "110100023076004",
                "p": "636 331",
                "r": "110100023076|900000062236",
                "udsi": "900000062236010;900000062237001",
                "t": "1",
                "si": "110100023076004",
                "sl": "116.290908,39.998258",
                "udli": "900000062236;900000062237",
                "poiid": "BV10000920",
                "lg": "1",
                "sp": "xi yuan"
              },
              {
                "rs": "636 391",
                "udpx": "639 391;633 391",
                "su": "1",
                "udsu": "1;1",
                "n": "万泉河桥",
                "sid": "900000062236011",
                "p": "636 391",
                "r": "900000062236",
                "udsi": "900000062237017;900000062236011",
                "t": "0",
                "si": "900000062236011",
                "sl": "116.300157,39.985067",
                "udli": "900000062237;900000062236",
                "poiid": "BV10531973",
                "lg": "2",
                "sp": "WanQuanHe Qiao"
              },
              {
                "rs": "636 494",
                "udpx": "639 494;633 494",
                "su": "1",
                "udsu": "1;1",
                "n": "苏州桥",
                "sid": "900000062236013",
                "p": "636 494",
                "r": "900000062236",
                "udsi": "900000062237015;900000062236013",
                "t": "0",
                "si": "900000062236013",
                "sl": "116.308092,39.962052",
                "udli": "900000062237;900000062236",
                "poiid": "BV10007288",
                "lg": "2",
                "sp": "SuZhou Qiao"
              },
              {
                "rs": "636 541",
                "udpx": "639 541;633 541",
                "su": "1",
                "udsu": "1;1",
                "n": "万寿寺",
                "sid": "900000062236014",
                "p": "636 541",
                "r": "900000062236",
                "udsi": "900000062237014;900000062236014",
                "t": "0",
                "si": "900000062236014",
                "sl": "116.309904,39.947773",
                "udli": "900000062237;900000062236",
                "poiid": "BV10000208",
                "lg": "6",
                "sp": "WanShouSi"
              },
              {
                "rs": "710 582|710 582|710 582",
                "udpx": "711 579;709 585",
                "su": "1",
                "udsu": "1;1",
                "n": "国家图书馆",
                "sid": "110100023076011",
                "p": "710 582",
                "r": "110100023076|110100023116|900000062236",
                "udsi": "900000062237013;900000062236015",
                "t": "1",
                "si": "110100023076011",
                "sl": "116.325190,39.943114",
                "udli": "900000062237;900000062236",
                "poiid": "BV10000252",
                "lg": "1",
                "sp": "GuoJia TuShuGuan"
              },
              {
                "rs": "767 656",
                "udpx": "770 656;764 656",
                "su": "1",
                "udsu": "1;1",
                "n": "甘家口",
                "sid": "900000062236017",
                "p": "767 656",
                "r": "900000062236",
                "udsi": "900000062237011;900000062236017",
                "t": "0",
                "si": "900000062236017",
                "sl": "116.334534,39.923392",
                "udli": "900000062237;900000062236",
                "poiid": "BV10013501",
                "lg": "2",
                "sp": "GanJiaKou"
              },
              {
                "rs": "767 682",
                "udpx": "770 682;764 682",
                "su": "1",
                "udsu": "1;1",
                "n": "玉渊潭东门",
                "sid": "900000062236018",
                "p": "767 682",
                "r": "900000062236",
                "udsi": "900000062237018;900000062236018",
                "t": "0",
                "si": "900000062236018",
                "sl": "116.334546,39.914042",
                "udli": "900000062237;900000062236",
                "poiid": "BV11409822",
                "lg": "2",
                "sp": "YuYuanTan DongMen"
              }
            ],
            "ln": "16号线",
            "su": "1",
            "kn": "地铁16号线",
            "c": [
              "767 682",
              "767 656",
              "767 605",
              "766 603",
              "765 602",
              "764 601",
              "764 601",
              "710 582",
              "644 557",
              "642 556",
              "640 555",
              "638 553",
              "637 552",
              "636 552",
              "636 541",
              "636 494",
              "636 391",
              "636 331",
              "636 315",
              "636 299",
              "636 269",
              "635 239",
              "635 208",
              "634 197",
              "634 189",
              "633 183",
              "630 178",
              "625 175",
              "618 173",
              "607 173",
              "606 173",
              "572 173",
              "541 173",
              "481 173",
              "420 173",
              "354 173"
            ],
            "lo": "0",
            "lp": [
              "454 122"
            ],
            "f": [
              {
                "c": [
                  "354 176",
                  "420 176",
                  "481 176",
                  "541 176",
                  "572 176",
                  "606 176",
                  "607 176",
                  "617 176",
                  "624 178",
                  "628 180",
                  "630 184",
                  "631 190",
                  "632 197",
                  "632 208",
                  "632 239",
                  "633 269",
                  "633 299",
                  "633 315",
                  "633 391",
                  "633 494",
                  "633 541",
                  "633 552",
                  "635 554",
                  "636 555",
                  "638 557",
                  "641 558",
                  "643 560",
                  "709 585",
                  "763 604",
                  "763 604",
                  "763 604",
                  "764 604",
                  "764 605",
                  "764 656",
                  "764 682"
                ],
                "li": "900000062236"
              },
              {
                "c": [
                  "770 682",
                  "770 656",
                  "770 604",
                  "769 602",
                  "767 600",
                  "766 599",
                  "765 598",
                  "711 579",
                  "645 554",
                  "643 553",
                  "641 552",
                  "640 551",
                  "639 550",
                  "639 551",
                  "639 541",
                  "639 494",
                  "639 391",
                  "639 315",
                  "639 299",
                  "638 269",
                  "638 239",
                  "637 208",
                  "637 197",
                  "637 189",
                  "636 182",
                  "632 176",
                  "626 172",
                  "618 170",
                  "607 170",
                  "606 170",
                  "572 170",
                  "541 170",
                  "481 170",
                  "420 170",
                  "354 170"
                ],
                "li": "900000062237"
              }
            ],
            "ls": "900000062236",
            "cl": "6CB46B",
            "la": "",
            "x": 15,
            "li": "900000062236|900000062237"
          },
          {
            "st": [
              {
                "rs": "1279 864|1279 864|1279 864",
                "udpx": "1282 862;1276 865",
                "su": "1",
                "udsu": "1;1",
                "n": "十里河",
                "sid": "110100023282025",
                "p": "1279 864",
                "r": "110100023282|900000028907|900000099933",
                "udsi": "900000099934007;900000099933002",
                "t": "1",
                "si": "110100023282025",
                "sl": "116.457983,39.866417",
                "udli": "900000099934;900000099933",
                "poiid": "BV10013367",
                "lg": "7",
                "sp": "ShiLiHe"
              },
              {
                "rs": "1313 933",
                "udpx": "1316 932;1311 934",
                "su": "1",
                "udsu": "1;1",
                "n": "周家庄",
                "sid": "900000099933003",
                "p": "1313 933",
                "r": "900000099933",
                "udsi": "900000099934006;900000099933003",
                "t": "0",
                "si": "900000099933003",
                "sl": "116.476361,39.856706",
                "udli": "900000099934;900000099933",
                "poiid": "BV11031729",
                "lg": "2",
                "sp": "ZhouJiaZhuang"
              },
              {
                "rs": "1347 1001",
                "udpx": "1350 1000;1345 1002",
                "su": "1",
                "udsu": "1;1",
                "n": "十八里店",
                "sid": "900000099933004",
                "p": "1347 1001",
                "r": "900000099933",
                "udsi": "900000099934005;900000099933004",
                "t": "0",
                "si": "900000099933004",
                "sl": "116.495847,39.844300",
                "udli": "900000099934;900000099933",
                "poiid": "BV11031727",
                "lg": "2",
                "sp": "ShiBaLiDian"
              },
              {
                "rs": "1374 1055",
                "udpx": "1376 1054;1371 1056",
                "su": "1",
                "udsu": "1;1",
                "n": "北神树",
                "sid": "900000099933005",
                "p": "1374 1055",
                "r": "900000099933",
                "udsi": "900000099934004;900000099933005",
                "t": "0",
                "si": "900000099933005",
                "sl": "116.552752,39.818664",
                "udli": "900000099934;900000099933",
                "poiid": "BV11031728",
                "lg": "2",
                "sp": "BeiShenShu"
              },
              {
                "rs": "1404 1115",
                "udpx": "1406 1114;1401 1117",
                "su": "1",
                "udsu": "1;1",
                "n": "次渠北",
                "sid": "900000099933006",
                "p": "1404 1115",
                "r": "900000099933",
                "udsi": "900000099934003;900000099933006",
                "t": "0",
                "si": "900000099933006",
                "sl": "116.576670,39.809390",
                "udli": "900000099934;900000099933",
                "poiid": "BV11031725",
                "lg": "2",
                "sp": "CiQu Bei"
              },
              {
                "rs": "1432 1174|1432 1174",
                "udpx": "1435 1172;1430 1175",
                "su": "1",
                "udsu": "1;1",
                "n": "次渠",
                "sid": "110100023102002",
                "p": "1432 1174",
                "r": "900000099933|110100023102",
                "udsi": "900000099934002;900000099933007",
                "t": "1",
                "si": "110100023102002",
                "sl": "116.591563,39.803550",
                "udli": "900000099934;900000099933",
                "poiid": "BV10011266",
                "lg": "1",
                "sp": "CiQu"
              },
              {
                "rs": "1461 1227",
                "udpx": "1464 1226;1459 1229",
                "su": "1",
                "udsu": "1;1",
                "n": "嘉会湖",
                "sid": "900000099933008",
                "p": "1461 1227",
                "r": "900000099933",
                "udsi": "900000099934001;900000099933008",
                "t": "0",
                "si": "900000099933008",
                "sl": "116.610278,39.792539",
                "udli": "900000099934;900000099933",
                "poiid": "BV11031726",
                "lg": "2",
                "sp": "JiaHuiHu"
              }
            ],
            "ln": "17号线",
            "su": "1",
            "kn": "地铁17号线",
            "c": [
              "1279 864",
              "1313 933",
              "1347 1001",
              "1374 1055",
              "1404 1115",
              "1432 1174",
              "1461 1227"
            ],
            "lo": "0",
            "lp": [
              "1538 1303"
            ],
            "f": [
              {
                "c": [
                  "1464 1226",
                  "1435 1172",
                  "1406 1114",
                  "1376 1054",
                  "1350 1000",
                  "1316 932",
                  "1282 862"
                ],
                "li": "900000099934"
              },
              {
                "c": [
                  "1276 865",
                  "1311 934",
                  "1345 1002",
                  "1371 1056",
                  "1401 1117",
                  "1430 1175",
                  "1459 1229"
                ],
                "li": "900000099933"
              }
            ],
            "ls": "900000099933",
            "cl": "00AD8E",
            "la": "",
            "x": 16,
            "li": "900000099933|900000099934"
          },
          {
            "st": [
              {
                "rs": "928 1002|928 1002",
                "udpx": "928 1005;928 999",
                "su": "1",
                "udsu": "1;1",
                "n": "新宫",
                "sid": "110100023076026",
                "p": "928 1002",
                "r": "110100023076|900000079004",
                "udsi": "900000079005010;900000079004001",
                "t": "1",
                "si": "110100023076026",
                "sl": "116.365549,39.812592",
                "udli": "900000079005;900000079004",
                "poiid": "BV10013418",
                "lg": "2",
                "sp": "XinGong"
              },
              {
                "rs": "870 975",
                "udpx": "867 975;873 975",
                "su": "1",
                "udsu": "1;1",
                "n": "新发地",
                "sid": "900000079004002",
                "p": "870 975",
                "r": "900000079004",
                "udsi": "900000079005009;900000079004002",
                "t": "0",
                "si": "900000079004002",
                "sl": "116.346333,39.823455",
                "udli": "900000079005;900000079004",
                "poiid": "BV10881788",
                "lg": "2",
                "sp": "XinFaDi"
              },
              {
                "rs": "863 935|863 935|856 935",
                "udpx": "868 935;873 935",
                "su": "1",
                "udsu": "1;1",
                "n": "草桥",
                "sid": "110100023282033",
                "p": "863 935",
                "r": "110100023282|900000079004|900000076659",
                "udsi": "900000079005008;900000079004003",
                "t": "1",
                "si": "110100023282033",
                "sl": "116.351387,39.845869",
                "udli": "900000079005;900000079004",
                "poiid": "BV10000222",
                "lg": "7",
                "sp": "CaoQiao"
              },
              {
                "rs": "905 864|905 864",
                "udpx": "902 864;908 864",
                "su": "1",
                "udsu": "1;1",
                "n": "景风门",
                "sid": "900000028907026",
                "p": "905 864",
                "r": "900000028907|900000079004",
                "udsi": "900000079005007;900000079004004",
                "t": "1",
                "si": "900000028907026",
                "sl": "116.365564,39.862731",
                "udli": "900000079005;900000079004",
                "poiid": "BV10590952",
                "lg": "7",
                "sp": "JingFengMen"
              },
              {
                "rs": "905 780",
                "udpx": "902 780;908 780",
                "su": "1",
                "udsu": "1;1",
                "n": "牛街",
                "sid": "900000079004005",
                "p": "905 780",
                "r": "900000079004",
                "udsi": "900000079005006;900000079004005",
                "t": "0",
                "si": "900000079004005",
                "sl": "116.363481,39.889605",
                "udli": "900000079005;900000079004",
                "poiid": "BV10881789",
                "lg": "6",
                "sp": "NiuJie"
              },
              {
                "rs": "905 708",
                "udpx": "902 708;908 709",
                "su": "1",
                "udsu": "1;1",
                "n": "太平桥",
                "sid": "900000079004006",
                "p": "905 708",
                "r": "900000079004",
                "udsi": "900000079005005;900000079004006",
                "t": "0",
                "si": "900000079004006",
                "sl": "116.363245,39.909755",
                "udli": "900000079005;900000079004",
                "poiid": "BV10881790",
                "lg": "7",
                "sp": "TaiPingQiao"
              },
              {
                "rs": "928 625|928 625|928 625",
                "udpx": "925 623;930 627",
                "su": "1",
                "udsu": "1;1",
                "n": "平安里",
                "sid": "110100023076015",
                "p": "928 625",
                "r": "110100023076|110100023339|900000079004",
                "udsi": "900000079005004;900000079004007",
                "t": "1",
                "si": "110100023076015",
                "sl": "116.372883,39.933949",
                "udli": "900000079005;900000079004",
                "poiid": "BV10013413",
                "lg": "3",
                "sp": "PingAnLi"
              },
              {
                "rs": "936 556|936 556",
                "udpx": "933 555;939 556",
                "su": "1",
                "udsu": "1;1",
                "n": "积水潭",
                "sid": "110100023098002",
                "p": "936 556",
                "r": "110100023098|900000079004",
                "udsi": "900000079005003;900000079004008",
                "t": "1",
                "si": "110100023098002",
                "sl": "116.373126,39.948653",
                "udli": "900000079005;900000079004",
                "poiid": "BV10013430",
                "lg": "7",
                "sp": "JiShuiTan"
              },
              {
                "rs": "937 502",
                "udpx": "934 502;940 502",
                "su": "1",
                "udsu": "1;1",
                "n": "北太平庄",
                "sid": "900000077547014",
                "p": "937 502",
                "r": "900000079004",
                "udsi": "900000079005002;900000079004009",
                "t": "0",
                "si": "900000077547014",
                "sl": "116.370070,39.968793",
                "udli": "900000079005;900000079004",
                "poiid": "BV10874516",
                "lg": "6",
                "sp": "BeiTaiPingZhuang"
              },
              {
                "rs": "938 449|938 449",
                "udpx": "935 449;941 449",
                "su": "1",
                "udsu": "1;1",
                "n": "牡丹园",
                "sid": "110100023282008",
                "p": "938 449",
                "r": "110100023282|900000079004",
                "udsi": "900000079005001;900000079004010",
                "t": "1",
                "si": "110100023282008",
                "sl": "116.369844,39.976603",
                "udli": "900000079005;900000079004",
                "poiid": "BV10000017",
                "lg": "7",
                "sp": "MuDanYuan"
              }
            ],
            "ln": "19号线",
            "su": "1",
            "kn": "地铁19号线",
            "c": [
              "928 1002",
              "886 1003",
              "881 1002",
              "877 1001",
              "873 999",
              "871 996",
              "869 993",
              "870 975",
              "871 935",
              "870 935",
              "863 935",
              "871 927",
              "872 923",
              "874 919",
              "876 915",
              "902 881",
              "904 878",
              "905 875",
              "905 872",
              "905 864",
              "905 800",
              "905 780",
              "905 708",
              "928 625",
              "930 623",
              "932 621",
              "934 619",
              "935 617",
              "935 615",
              "936 556",
              "937 502",
              "938 449"
            ],
            "lo": "0",
            "lp": [
              "760 1039"
            ],
            "f": [
              {
                "c": [
                  "935 449",
                  "934 502",
                  "933 555",
                  "932 615",
                  "932 617",
                  "931 618",
                  "930 620",
                  "928 621",
                  "925 623",
                  "902 708",
                  "902 780",
                  "902 800",
                  "902 864",
                  "902 872",
                  "902 875",
                  "901 877",
                  "900 880",
                  "874 914",
                  "872 917",
                  "869 922",
                  "868 927",
                  "868 935",
                  "867 975",
                  "867 993",
                  "869 998",
                  "872 1001",
                  "876 1004",
                  "881 1005",
                  "886 1006",
                  "928 1005"
                ],
                "li": "900000079005"
              },
              {
                "c": [
                  "928 999",
                  "886 1000",
                  "882 1000",
                  "878 998",
                  "875 997",
                  "873 994",
                  "872 992",
                  "873 975",
                  "873 935",
                  "874 928",
                  "875 924",
                  "876 920",
                  "879 917",
                  "904 883",
                  "907 879",
                  "907 876",
                  "908 873",
                  "908 864",
                  "908 800",
                  "908 780",
                  "908 709",
                  "930 627",
                  "932 626",
                  "934 623",
                  "936 621",
                  "937 618",
                  "938 616",
                  "939 556",
                  "940 502",
                  "941 449"
                ],
                "li": "900000079004"
              }
            ],
            "ls": "900000079004",
            "cl": "EB81B9",
            "la": "",
            "x": 17,
            "li": "900000079004|900000079005"
          },
          {
            "st": [
              {
                "rs": "520 0",
                "udpx": "520 -3;520 3",
                "su": "1",
                "udsu": "1;1",
                "n": "昌平西山口",
                "sid": "110100023118009",
                "p": "520 0",
                "r": "110100023118",
                "udsi": "110100023119013;110100023118009",
                "t": "0",
                "si": "110100023118009",
                "sl": "116.195371,40.244624",
                "udli": "110100023119;110100023118",
                "poiid": "BV10550714",
                "lg": "6",
                "sp": "chang ping xi shan kou"
              },
              {
                "rs": "586 13",
                "udpx": "584 15;588 11",
                "su": "1",
                "udsu": "1;1",
                "n": "十三陵景区",
                "sid": "110100023118010",
                "p": "586 13",
                "r": "110100023118",
                "udsi": "110100023118010;110100023119012",
                "t": "0",
                "si": "110100023118010",
                "sl": "116.207729,40.240255",
                "udli": "110100023118;110100023119",
                "poiid": "BV10013483",
                "lg": "2",
                "sp": "shi san ling jing qu"
              },
              {
                "rs": "654 48",
                "udpx": "654 45;654 51",
                "su": "1",
                "udsu": "1;1",
                "n": "昌平",
                "sid": "110100023118011",
                "p": "654 48",
                "r": "110100023118",
                "udsi": "110100023119011;110100023118011",
                "t": "0",
                "si": "110100023118011",
                "sl": "116.233590,40.220550",
                "udli": "110100023119;110100023118",
                "poiid": "BV10013482",
                "lg": "0",
                "sp": "chang ping"
              },
              {
                "rs": "733 48",
                "udpx": "733 45;733 51",
                "su": "1",
                "udsu": "1;1",
                "n": "昌平东关",
                "sid": "110100023118012",
                "p": "733 48",
                "r": "110100023118",
                "udsi": "110100023119010;110100023118012",
                "t": "0",
                "si": "110100023118012",
                "sl": "116.262059,40.221726",
                "udli": "110100023119;110100023118",
                "poiid": "BV10550716",
                "lg": "4",
                "sp": "chang ping dong guan"
              },
              {
                "rs": "818 48",
                "udpx": "818 51;818 45",
                "su": "1",
                "udsu": "1;1",
                "n": "北邵洼",
                "sid": "110100023118013",
                "p": "818 48",
                "r": "110100023118",
                "udsi": "110100023118013;110100023119009",
                "t": "0",
                "si": "110100023118013",
                "sl": "116.281949,40.222001",
                "udli": "110100023118;110100023119",
                "poiid": "BV10550715",
                "lg": "0",
                "sp": "bei shao wa"
              },
              {
                "rs": "843 82",
                "udpx": "846 82;841 82",
                "su": "1",
                "udsu": "1;1",
                "n": "南邵",
                "sid": "110100023118002",
                "p": "843 82",
                "r": "110100023118",
                "udsi": "110100023119008;110100023118002",
                "t": "0",
                "si": "110100023118002",
                "sl": "116.287534,40.207492",
                "udli": "110100023119;110100023118",
                "poiid": "BV10001633",
                "lg": "6",
                "sp": "nan shao"
              },
              {
                "rs": "843 113",
                "udpx": "846 113;841 113",
                "su": "1",
                "udsu": "1;1",
                "n": "沙河高教园",
                "sid": "110100023118003",
                "p": "843 113",
                "r": "110100023118",
                "udsi": "110100023119007;110100023118003",
                "t": "0",
                "si": "110100023118003",
                "sl": "116.280465,40.164666",
                "udli": "110100023119;110100023118",
                "poiid": "BV10013477",
                "lg": "6",
                "sp": "sha he gao jiao yuan"
              },
              {
                "rs": "843 144",
                "udpx": "841 144;846 144",
                "su": "1",
                "udsu": "1;1",
                "n": "沙河",
                "sid": "110100023118004",
                "p": "843 144",
                "r": "110100023118",
                "udsi": "110100023118004;110100023119006",
                "t": "0",
                "si": "110100023118004",
                "sl": "116.288865,40.148278",
                "udli": "110100023118;110100023119",
                "poiid": "BV10000338",
                "lg": "6",
                "sp": "sha he"
              },
              {
                "rs": "843 173",
                "udpx": "841 173;846 173",
                "su": "1",
                "udsu": "1;1",
                "n": "巩华城",
                "sid": "110100023118005",
                "p": "843 173",
                "r": "110100023118",
                "udsi": "110100023118005;110100023119005",
                "t": "0",
                "si": "110100023118005",
                "sl": "116.293979,40.130900",
                "udli": "110100023118;110100023119",
                "poiid": "BV10013478",
                "lg": "6",
                "sp": "gong hua cheng"
              },
              {
                "rs": "843 202|843 202",
                "udpx": "846 203;841 202",
                "su": "1",
                "udsu": "1;1",
                "n": "朱辛庄",
                "sid": "110100023114019",
                "p": "843 202",
                "r": "110100023114|110100023118",
                "udsi": "110100023119004;110100023118006",
                "t": "1",
                "si": "110100023114019",
                "sl": "116.313698,40.104297",
                "udli": "110100023119;110100023118",
                "poiid": "BV10000571",
                "lg": "6",
                "sp": "zhu xin zhuang"
              },
              {
                "rs": "831 240",
                "udpx": "834 241;828 240",
                "su": "1",
                "udsu": "1;1",
                "n": "生命科学园",
                "sid": "110100023118007",
                "p": "831 240",
                "r": "110100023118",
                "udsi": "110100023119003;110100023118007",
                "t": "0",
                "si": "110100023118007",
                "sl": "116.294230,40.094790",
                "udli": "110100023119;110100023118",
                "poiid": "BV10000877",
                "lg": "6",
                "sp": "sheng ming ke xue yuan"
              },
              {
                "rs": "843 299|831 299",
                "udpx": "834 299;828 299",
                "su": "1",
                "udsu": "1;1",
                "n": "西二旗",
                "sid": "110100023118008",
                "p": "837 299",
                "r": "110100033066|110100023118",
                "udsi": "110100023119002;110100023118008",
                "t": "1",
                "si": "110100023118008",
                "sl": "116.306295,40.053034",
                "udli": "110100023119;110100023118",
                "poiid": "BV10007027",
                "lg": "6",
                "sp": "XiErQi"
              },
              {
                "rs": "843 327|831 327",
                "udpx": "834 327;828 327",
                "su": "1",
                "udsu": "1;1",
                "n": "清河站",
                "sid": "110100023118014",
                "p": "837 327",
                "r": "110100033066|110100023118",
                "udsi": "110100023119014;110100023118014",
                "t": "1",
                "si": "110100023118014",
                "sl": "116.314961,40.041164",
                "udli": "110100023119;110100023118",
                "poiid": "BV11467455",
                "lg": "6",
                "sp": "QingHe Zhan"
              }
            ],
            "ln": "昌平线",
            "su": "1",
            "kn": "地铁昌平线",
            "c": [
              "831 327",
              "831 299",
              "831 240",
              "841 207",
              "842 206",
              "843 205",
              "843 204",
              "843 202",
              "843 173",
              "843 144",
              "843 113",
              "843 82",
              "843 55",
              "843 53",
              "843 52",
              "842 50",
              "840 49",
              "837 48",
              "833 48",
              "818 48",
              "814 48",
              "733 48",
              "654 48",
              "629 48",
              "623 47",
              "619 45",
              "602 28",
              "586 13",
              "576 3",
              "574 2",
              "572 0",
              "570 0",
              "566 0",
              "520 0"
            ],
            "lo": "0",
            "lp": [
              "871 123"
            ],
            "f": [
              {
                "c": [
                  "520 3",
                  "566 3",
                  "569 3",
                  "571 3",
                  "573 4",
                  "574 5",
                  "584 15",
                  "600 30",
                  "617 47",
                  "622 50",
                  "629 51",
                  "654 51",
                  "733 51",
                  "814 51",
                  "818 51",
                  "833 51",
                  "836 51",
                  "838 52",
                  "839 52",
                  "840 53",
                  "840 54",
                  "841 56",
                  "841 82",
                  "841 113",
                  "841 144",
                  "841 173",
                  "841 202",
                  "840 203",
                  "840 204",
                  "840 205",
                  "839 206",
                  "828 240",
                  "828 299",
                  "828 327"
                ],
                "li": "110100023118"
              },
              {
                "c": [
                  "834 327",
                  "834 299",
                  "834 241",
                  "844 208",
                  "844 208",
                  "845 207",
                  "846 205",
                  "846 203",
                  "846 173",
                  "846 144",
                  "846 113",
                  "846 82",
                  "846 55",
                  "846 53",
                  "845 51",
                  "844 48",
                  "841 46",
                  "838 45",
                  "833 45",
                  "818 45",
                  "814 45",
                  "733 45",
                  "654 45",
                  "630 45",
                  "624 44",
                  "621 42",
                  "604 26",
                  "588 11",
                  "578 1",
                  "576 -1",
                  "573 -2",
                  "570 -3",
                  "566 -3",
                  "520 -3"
                ],
                "li": "110100023119"
              }
            ],
            "ls": "110100023118",
            "cl": "EB81B9",
            "la": "",
            "x": 18,
            "li": "110100023118|110100023119"
          },
          {
            "st": [
              {
                "rs": "863 935|863 935|856 935",
                "udpx": "859 934;853 935",
                "su": "1",
                "udsu": "1;1",
                "n": "草桥",
                "sid": "110100023282033",
                "p": "863 935",
                "r": "110100023282|900000079004|900000076659",
                "udsi": "900000076659003;900000076660001",
                "t": "1",
                "si": "110100023282033",
                "sl": "116.351387,39.845869",
                "udli": "900000076659;900000076660",
                "poiid": "BV10000222",
                "lg": "7",
                "sp": "CaoQiao"
              },
              {
                "rs": "977 1229",
                "udpx": "980 1229;974 1229",
                "su": "1",
                "udsu": "1;1",
                "n": "大兴新城",
                "sid": "900000076659002",
                "p": "977 1229",
                "r": "900000076659",
                "udsi": "900000076659002;900000076660002",
                "t": "0",
                "si": "900000076659002",
                "sl": "116.365522,39.735583",
                "udli": "900000076659;900000076660",
                "poiid": "BV10877516",
                "lg": "2",
                "sp": "DaXing XinCheng"
              },
              {
                "rs": "977 1528",
                "udpx": "980 1528;974 1528",
                "su": "1",
                "udsu": "1;1",
                "n": "大兴机场",
                "sid": "900000076659001",
                "p": "977 1528",
                "r": "900000076659",
                "udsi": "900000076659001;900000076660003",
                "t": "0",
                "si": "900000076659001",
                "sl": "116.416725,39.511375",
                "udli": "900000076659;900000076660",
                "poiid": "BV11146181",
                "lg": "2",
                "sp": "DaXing JiChang"
              }
            ],
            "ln": "大兴国际机场线",
            "su": "1",
            "kn": "北京大兴国际机场线",
            "c": [
              "856 935",
              "856 934",
              "855 999",
              "856 1003",
              "859 1007",
              "863 1010",
              "868 1012",
              "873 1014",
              "958 1038",
              "965 1041",
              "971 1044",
              "975 1048",
              "977 1053",
              "977 1058",
              "977 1229",
              "977 1528"
            ],
            "lo": "0",
            "lp": [
              "1083 1352"
            ],
            "f": [
              {
                "c": [
                  "980 1528",
                  "980 1229",
                  "980 1058",
                  "980 1052",
                  "977 1046",
                  "972 1042",
                  "967 1038",
                  "959 1035",
                  "874 1011",
                  "869 1009",
                  "864 1007",
                  "861 1005",
                  "859 1002",
                  "858 999",
                  "859 935",
                  "859 934"
                ],
                "li": "900000076659"
              },
              {
                "c": [
                  "853 935",
                  "853 999",
                  "854 1005",
                  "857 1009",
                  "861 1012",
                  "867 1015",
                  "872 1016",
                  "957 1041",
                  "964 1043",
                  "969 1046",
                  "972 1050",
                  "974 1053",
                  "975 1058",
                  "974 1229",
                  "974 1528"
                ],
                "li": "900000076660"
              }
            ],
            "ls": "900000076659",
            "cl": "2249A3",
            "la": "",
            "x": 19,
            "li": "900000076659|900000076660|900000115918|900000115919"
          },
          {
            "st": [
              {
                "rs": "327 1176|327 1176",
                "udpx": "327 1173;327 1179",
                "su": "1",
                "udsu": "1;1",
                "n": "阎村东",
                "sid": "110100023092013",
                "p": "327 1176",
                "r": "110100023092|900000029622",
                "udsi": "110100023092013;110100023093013",
                "t": "1",
                "si": "110100023092013",
                "sl": "116.100817,39.729028",
                "udli": "110100023092;110100023093",
                "poiid": "BV10561755",
                "lg": "4",
                "sp": "yan cun dong"
              },
              {
                "rs": "367 1176",
                "udpx": "367 1173;367 1179",
                "su": "1",
                "udsu": "1;1",
                "n": "苏庄",
                "sid": "110100023092012",
                "p": "367 1176",
                "r": "110100023092",
                "udsi": "110100023092012;110100023093002",
                "t": "0",
                "si": "110100023092012",
                "sl": "116.125306,39.723188",
                "udli": "110100023092;110100023093",
                "poiid": "BV10003977",
                "lg": "0",
                "sp": "su zhuang"
              },
              {
                "rs": "402 1176",
                "udpx": "402 1173;402 1179",
                "su": "1",
                "udsu": "1;1",
                "n": "良乡南关",
                "sid": "110100023092011",
                "p": "402 1176",
                "r": "110100023092",
                "udsi": "110100023092011;110100023093003",
                "t": "0",
                "si": "110100023092011",
                "sl": "116.140804,39.723202",
                "udli": "110100023092;110100023093",
                "poiid": "BV10013427",
                "lg": "4",
                "sp": "liang xiang nan guan"
              },
              {
                "rs": "439 1176",
                "udpx": "439 1179;439 1173",
                "su": "1",
                "udsu": "1;1",
                "n": "良乡大学城西",
                "sid": "110100023092010",
                "p": "439 1176",
                "r": "110100023092",
                "udsi": "110100023093004;110100023092010",
                "t": "0",
                "si": "110100023092010",
                "sl": "116.156282,39.723157",
                "udli": "110100023093;110100023092",
                "poiid": "BV10003994",
                "lg": "0",
                "sp": "liang xiang da xue cheng xi"
              },
              {
                "rs": "473 1175",
                "udpx": "473 1172;474 1178",
                "su": "1",
                "udsu": "1;1",
                "n": "良乡大学城",
                "sid": "110100023092009",
                "p": "473 1175",
                "r": "110100023092",
                "udsi": "110100023092009;110100023093005",
                "t": "0",
                "si": "110100023092009",
                "sl": "116.176541,39.723159",
                "udli": "110100023092;110100023093",
                "poiid": "BV10003965",
                "lg": "3",
                "sp": "liang xiang da xue cheng"
              },
              {
                "rs": "511 1149",
                "udpx": "509 1147;514 1151",
                "su": "1",
                "udsu": "1;1",
                "n": "良乡大学城北",
                "sid": "110100023092008",
                "p": "511 1149",
                "r": "110100023092",
                "udsi": "110100023092008;110100023093006",
                "t": "0",
                "si": "110100023092008",
                "sl": "116.183480,39.729906",
                "udli": "110100023092;110100023093",
                "poiid": "BV10003967",
                "lg": "2",
                "sp": "liang xiang da xue cheng bei"
              },
              {
                "rs": "529 1120",
                "udpx": "527 1119;532 1122",
                "su": "1",
                "udsu": "1;1",
                "n": "广阳城",
                "sid": "110100023092007",
                "p": "529 1120",
                "r": "110100023092",
                "udsi": "110100023092007;110100023093007",
                "t": "0",
                "si": "110100023092007",
                "sl": "116.184985,39.747930",
                "udli": "110100023092;110100023093",
                "poiid": "BV10013426",
                "lg": "2",
                "sp": "guang yang cheng"
              },
              {
                "rs": "547 1090",
                "udpx": "545 1089;550 1092",
                "su": "1",
                "udsu": "1;1",
                "n": "篱笆房",
                "sid": "110100023092006",
                "p": "548 1091",
                "r": "110100023092",
                "udsi": "110100023092006;110100023093008",
                "t": "0",
                "si": "110100023092006",
                "sl": "116.189486,39.760636",
                "udli": "110100023092;110100023093",
                "poiid": "BV10001096",
                "lg": "2",
                "sp": "li ba fang"
              },
              {
                "rs": "566 1061",
                "udpx": "564 1060;569 1063",
                "su": "1",
                "udsu": "1;1",
                "n": "长阳",
                "sid": "110100023092005",
                "p": "566 1061",
                "r": "110100023092",
                "udsi": "110100023092005;110100023093009",
                "t": "0",
                "si": "110100023092005",
                "sl": "116.212692,39.763871",
                "udli": "110100023092;110100023093",
                "poiid": "BV10013425",
                "lg": "2",
                "sp": "chang yang"
              },
              {
                "rs": "584 1032",
                "udpx": "586 1034;581 1031",
                "su": "1",
                "udsu": "1;1",
                "n": "稻田",
                "sid": "110100023092004",
                "p": "585 1033",
                "r": "110100023092",
                "udsi": "110100023093010;110100023092004",
                "t": "0",
                "si": "110100023092004",
                "sl": "116.218840,39.794885",
                "udli": "110100023093;110100023092",
                "poiid": "BV10013424",
                "lg": "2",
                "sp": "dao tian"
              },
              {
                "rs": "602 1005",
                "udpx": "604 1006;600 1003",
                "su": "1",
                "udsu": "1;1",
                "n": "大葆台",
                "sid": "110100023092003",
                "p": "602 1005",
                "r": "110100023092",
                "udsi": "110100023093011;110100023092003",
                "t": "0",
                "si": "110100023092003",
                "sl": "116.291681,39.807810",
                "udli": "110100023093;110100023092",
                "poiid": "BV10013423",
                "lg": "2",
                "sp": "da bao tai"
              },
              {
                "rs": "620 977|620 977",
                "udpx": "618 974;622 979",
                "su": "1",
                "udsu": "1;1",
                "n": "郭公庄",
                "sid": "110100023092018",
                "p": "620 977",
                "r": "110100023116|110100023092",
                "udsi": "110100023092018;110100023093012",
                "t": "1",
                "si": "110100023092018",
                "sl": "116.301889,39.814322",
                "udli": "110100023092;110100023093",
                "poiid": "BV10007779",
                "lg": "2",
                "sp": "GuoGongZhuang"
              },
              {
                "rs": "663 963",
                "udpx": "663 961;664 966",
                "su": "1",
                "udsu": "1;1",
                "n": "白盆窑",
                "sid": "110100023092017",
                "p": "663 963",
                "r": "110100023092",
                "udsi": "110100023092017;110100023093014",
                "t": "0",
                "si": "110100023092017",
                "sl": "116.313391,39.819590",
                "udli": "110100023092;110100023093",
                "poiid": "BV10563755",
                "lg": "3",
                "sp": "BaiPen Yao"
              },
              {
                "rs": "708 949",
                "udpx": "708 947;709 952",
                "su": "1",
                "udsu": "1;1",
                "n": "花乡东桥",
                "sid": "110100023092016",
                "p": "708 949",
                "r": "110100023092",
                "udsi": "110100023092016;110100023093015",
                "t": "0",
                "si": "110100023092016",
                "sl": "116.320160,39.829272",
                "udli": "110100023092;110100023093",
                "poiid": "BV10563754",
                "lg": "3",
                "sp": "HuaXiang DongQiao"
              },
              {
                "rs": "753 935|753 935",
                "udpx": "752 932;754 938",
                "su": "1",
                "udsu": "1;1",
                "n": "首经贸",
                "sid": "110100023092015",
                "p": "753 935",
                "r": "110100023282|110100023092",
                "udsi": "110100023092015;110100023093016",
                "t": "1",
                "si": "110100023092015",
                "sl": "116.320202,39.844463",
                "udli": "110100023092;110100023093",
                "poiid": "BV10013494",
                "lg": "7",
                "sp": "ShouJingMao"
              },
              {
                "rs": "798 918",
                "udpx": "797 915;799 921",
                "su": "1",
                "udsu": "1;1",
                "n": "东管头南",
                "sid": "110100023092014",
                "p": "798 918",
                "r": "110100023092",
                "udsi": "110100023092014;110100023093017",
                "t": "0",
                "si": "110100023092014",
                "sl": "116.321319,39.852631",
                "udli": "110100023092;110100023093",
                "poiid": "BV10562654",
                "lg": "7",
                "sp": "DongGuanTou Nan"
              }
            ],
            "ln": "房山线",
            "su": "1",
            "kn": "地铁房山线",
            "c": [
              "327 1176",
              "351 1176",
              "367 1176",
              "384 1176",
              "402 1176",
              "425 1176",
              "439 1176",
              "464 1176",
              "473 1175",
              "479 1174",
              "485 1172",
              "492 1169",
              "499 1164",
              "505 1158",
              "511 1149",
              "529 1120",
              "547 1092",
              "547 1090",
              "566 1062",
              "566 1061",
              "584 1033",
              "584 1032",
              "602 1005",
              "620 977",
              "663 963",
              "708 949",
              "753 935",
              "798 918"
            ],
            "lo": "0",
            "lp": [
              "629 1117"
            ],
            "f": [
              {
                "c": [
                  "797 915",
                  "752 932",
                  "708 947",
                  "663 961",
                  "618 974",
                  "600 1003",
                  "582 1031",
                  "581 1031",
                  "564 1060",
                  "545 1089",
                  "545 1091",
                  "527 1119",
                  "509 1147",
                  "503 1156",
                  "497 1162",
                  "490 1166",
                  "484 1170",
                  "479 1171",
                  "473 1172",
                  "464 1173",
                  "439 1173",
                  "425 1173",
                  "402 1173",
                  "384 1173",
                  "367 1173",
                  "351 1173",
                  "327 1173"
                ],
                "li": "110100023092"
              },
              {
                "c": [
                  "327 1179",
                  "351 1179",
                  "367 1179",
                  "384 1179",
                  "402 1179",
                  "425 1179",
                  "439 1179",
                  "464 1179",
                  "474 1178",
                  "480 1177",
                  "486 1175",
                  "493 1171",
                  "501 1166",
                  "507 1160",
                  "514 1151",
                  "532 1122",
                  "549 1094",
                  "550 1092",
                  "569 1063",
                  "586 1034",
                  "587 1034",
                  "604 1006",
                  "622 979",
                  "664 966",
                  "709 952",
                  "754 938",
                  "799 921"
                ],
                "li": "110100023093"
              }
            ],
            "ls": "110100023092",
            "cl": "EE782E",
            "la": "",
            "x": 20,
            "li": "110100023092|110100023093"
          },
          {
            "st": [
              {
                "rs": "1620 310",
                "udpx": "1617 310;1622 309",
                "su": "1",
                "udsu": "1;1",
                "n": "3号航站楼",
                "sid": "110100023096001",
                "p": "1620 310",
                "r": "110100023096",
                "udsi": "110100023096001;110100023097003",
                "t": "0",
                "si": "110100023096001",
                "sl": "116.615583,40.052657",
                "udli": "110100023096;110100023097",
                "poiid": "BV10009415",
                "lg": "1",
                "sp": "3 Hao HangZhanLou"
              },
              {
                "rs": "1571 307",
                "udpx": "1574 307;1574 307",
                "su": "1",
                "udsu": "1;1",
                "n": "2号航站楼",
                "sid": "110100023096002",
                "p": "1571 307",
                "r": "110100023096",
                "udsi": "110100023096002;110100023097004",
                "t": "0",
                "si": "110100023096002",
                "sl": "116.592808,40.079311",
                "udli": "110100023096;110100023097",
                "poiid": "BV10013428",
                "lg": "0",
                "sp": "2 Hao HangZhanLou"
              },
              {
                "rs": "1279 495|1279 495",
                "udpx": "1281 498;1277 493",
                "su": "1",
                "udsu": "1;1",
                "n": "三元桥",
                "sid": "110100023096003",
                "p": "1279 495",
                "r": "110100023282|110100023096",
                "udsi": "110100023097002;110100023096003",
                "t": "1",
                "si": "110100023096003",
                "sl": "116.456997,39.961508",
                "udli": "110100023097;110100023096",
                "poiid": "BV10000199",
                "lg": "3",
                "sp": "san yuan qiao"
              },
              {
                "rs": "1179 586|1179 586|1179 586",
                "udpx": "1179 583;1179 589",
                "su": "1",
                "udsu": "1;1",
                "n": "东直门",
                "sid": "110100023096004",
                "p": "1179 586",
                "r": "110100023098|110100033066|110100023096",
                "udsi": "110100023096004;110100023097001",
                "t": "1",
                "si": "110100023096004",
                "sl": "116.435842,39.941626",
                "udli": "110100023096;110100023097",
                "poiid": "BV10002731",
                "lg": "3",
                "sp": "dong zhi men"
              },
              {
                "rs": "1116 586|1116 586",
                "udpx": "1116 583;1116 589",
                "su": "1",
                "udsu": "1;1",
                "n": "北新桥",
                "sid": "110100023096005",
                "p": "1116 586",
                "r": "110100023100|110100023096",
                "udsi": "110100023096005;110100023097005",
                "t": "1",
                "si": "110100023096005",
                "sl": "116.416884,39.940782",
                "udli": "110100023096;110100023097",
                "poiid": "BV10013443",
                "lg": "6",
                "sp": "BeiXinQiao"
              }
            ],
            "ln": "首都机场线",
            "su": "1",
            "kn": "首都机场线",
            "c": [
              "1179 586",
              "1217 586",
              "1221 586",
              "1224 585",
              "1226 583",
              "1279 495",
              "1554 386",
              "1593 371",
              "1600 368",
              "1605 365",
              "1610 361",
              "1614 357",
              "1618 352",
              "1620 347",
              "1622 341",
              "1623 335",
              "1623 329",
              "1622 319",
              "1620 310",
              "1622 319",
              "1623 329",
              "1619 337",
              "1615 342",
              "1609 345",
              "1601 347",
              "1589 347",
              "1580 345",
              "1574 341",
              "1570 336",
              "1568 328",
              "1571 307",
              "1568 328",
              "1563 368",
              "1562 375",
              "1558 381",
              "1554 386",
              "1279 495",
              "1226 583",
              "1224 585",
              "1221 586",
              "1217 586",
              "1179 586",
              "1116 586"
            ],
            "lo": "0",
            "lp": [
              "1535 432"
            ],
            "f": [
              {
                "c": [
                  "1116 589",
                  "1179 589",
                  "1217 589",
                  "1221 588",
                  "1225 587",
                  "1228 584",
                  "1281 498",
                  "1555 388",
                  "1595 373",
                  "1601 371",
                  "1607 367",
                  "1611 364",
                  "1616 359",
                  "1620 354",
                  "1623 348",
                  "1625 341",
                  "1626 335",
                  "1626 329",
                  "1625 320",
                  "1622 309",
                  "1617 310",
                  "1619 320",
                  "1620 328",
                  "1617 335",
                  "1613 339",
                  "1608 342",
                  "1600 344",
                  "1589 344",
                  "1582 343",
                  "1576 339",
                  "1573 335",
                  "1571 328",
                  "1574 307"
                ],
                "li": "110100023097"
              },
              {
                "c": [
                  "1617 310",
                  "1619 320",
                  "1620 328",
                  "1617 335",
                  "1613 339",
                  "1608 342",
                  "1600 344",
                  "1589 344",
                  "1581 343",
                  "1576 339",
                  "1573 335",
                  "1571 328",
                  "1574 307",
                  "1568 306",
                  "1565 328",
                  "1561 367",
                  "1559 374",
                  "1556 379",
                  "1552 383",
                  "1277 493",
                  "1224 581",
                  "1222 582",
                  "1220 583",
                  "1217 583",
                  "1179 583",
                  "1116 583"
                ],
                "li": "110100023096"
              }
            ],
            "ls": "110100023096",
            "cl": "A49ABD",
            "la": "",
            "x": 21,
            "li": "110100023096|110100023097"
          },
          {
            "st": [
              {
                "rs": "602 448|602 448",
                "udpx": "602 445;602 451",
                "su": "1",
                "udsu": "1;1",
                "n": "巴沟",
                "sid": "110100023060002",
                "p": "602 448",
                "r": "110100023282|110100023060",
                "udsi": "110100023060002;110100023061008",
                "t": "1",
                "si": "110100023060002",
                "sl": "116.293727,39.974179",
                "udli": "110100023060;110100023061",
                "poiid": "BV10013394",
                "lg": "4",
                "sp": "ba gou"
              },
              {
                "rs": "479 413",
                "udpx": "481 410;481 416",
                "su": "1",
                "udsu": "1;1",
                "n": "颐和园西门",
                "sid": "110100023060004",
                "p": "479 413",
                "r": "110100023060",
                "udsi": "110100023060004;110100023061006",
                "t": "0",
                "si": "110100023060004",
                "sl": "116.263248,39.985697",
                "udli": "110100023060;110100023061",
                "poiid": "BV10968850",
                "lg": "0",
                "sp": "yi he yuan xi men"
              },
              {
                "rs": "411 413",
                "udpx": "411 410;411 416",
                "su": "1",
                "udsu": "1;1",
                "n": "茶棚",
                "sid": "110100023060005",
                "p": "411 413",
                "r": "110100023060",
                "udsi": "110100023060005;110100023061005",
                "t": "0",
                "si": "110100023060005",
                "sl": "116.248100,39.982113",
                "udli": "110100023060;110100023061",
                "poiid": "BV10968847",
                "lg": "0",
                "sp": "cha peng"
              },
              {
                "rs": "354 400",
                "udpx": "356 401;351 401",
                "su": "1",
                "udsu": "1;1",
                "n": "万安",
                "sid": "110100023060006",
                "p": "354 400",
                "r": "110100023060",
                "udsi": "110100023060006;110100023061004",
                "t": "0",
                "si": "110100023060006",
                "sl": "116.231977,39.984001",
                "udli": "110100023060;110100023061",
                "poiid": "BV10968866",
                "lg": "2",
                "sp": "wan an"
              },
              {
                "rs": "340 373",
                "udpx": "340 375;340 370",
                "su": "1",
                "udsu": "1;1",
                "n": "国家植物园",
                "sid": "110100023060007",
                "p": "340 373",
                "r": "110100023060",
                "udsi": "110100023061003;110100023060007",
                "t": "0",
                "si": "110100023060007",
                "sl": "116.215722,39.993537",
                "udli": "110100023061;110100023060",
                "poiid": "BV10968849",
                "lg": "0",
                "sp": "GuoJia ZhiWuYuan"
              },
              {
                "rs": "291 373",
                "udpx": "291 370;291 375",
                "su": "1",
                "udsu": "1;1",
                "n": "香山",
                "sid": "110100023060009",
                "p": "291 373",
                "r": "110100023060",
                "udsi": "110100023060009;110100023061009",
                "t": "0",
                "si": "110100023060009",
                "sl": "116.204491,39.994056",
                "udli": "110100023060;110100023061",
                "poiid": "BV10968848",
                "lg": "0",
                "sp": "xiang shan"
              }
            ],
            "ln": "西郊线",
            "su": "1",
            "kn": "西郊线",
            "c": [
              "602 448",
              "564 448",
              "536 448",
              "534 448",
              "532 447",
              "532 446",
              "532 432",
              "532 417",
              "531 415",
              "529 413",
              "526 413",
              "481 413",
              "479 413",
              "448 413",
              "411 413",
              "359 413",
              "356 413",
              "354 412",
              "354 410",
              "354 401",
              "354 400",
              "354 387",
              "354 377",
              "353 375",
              "351 373",
              "347 373",
              "340 373",
              "317 373",
              "291 373"
            ],
            "lo": "0",
            "lp": [
              "391 444"
            ],
            "f": [
              {
                "c": [
                  "291 375",
                  "317 375",
                  "340 375",
                  "347 375",
                  "350 376",
                  "350 376",
                  "351 377",
                  "351 387",
                  "351 401",
                  "351 410",
                  "352 413",
                  "355 415",
                  "359 416",
                  "411 416",
                  "448 416",
                  "481 416",
                  "526 416",
                  "528 416",
                  "529 417",
                  "529 418",
                  "529 432",
                  "529 446",
                  "530 449",
                  "533 451",
                  "536 451",
                  "564 451",
                  "602 451"
                ],
                "li": "110100023061"
              },
              {
                "c": [
                  "602 445",
                  "564 445",
                  "536 445",
                  "535 445",
                  "535 445",
                  "535 445",
                  "535 432",
                  "535 417",
                  "534 413",
                  "531 411",
                  "527 410",
                  "481 410",
                  "448 410",
                  "411 410",
                  "359 410",
                  "357 410",
                  "357 410",
                  "356 409",
                  "356 401",
                  "356 387",
                  "356 376",
                  "355 373",
                  "352 371",
                  "348 370",
                  "340 370",
                  "317 370",
                  "291 370"
                ],
                "li": "110100023060"
              }
            ],
            "ls": "110100023060",
            "cl": "FC0601",
            "la": "",
            "x": 22,
            "li": "110100023060|110100023061"
          },
          {
            "st": [
              {
                "rs": "327 1176|327 1176",
                "udpx": "327 1179;327 1173",
                "su": "1",
                "udsu": "1;1",
                "n": "阎村东",
                "sid": "110100023092013",
                "p": "327 1176",
                "r": "110100023092|900000029622",
                "udsi": "900000029622008;900000029623011",
                "t": "1",
                "si": "110100023092013",
                "sl": "116.100817,39.729028",
                "udli": "900000029622;900000029623",
                "poiid": "BV10561755",
                "lg": "4",
                "sp": "yan cun dong"
              },
              {
                "rs": "287 1176",
                "udpx": "287 1173;287 1179",
                "su": "1",
                "udsu": "1;1",
                "n": "紫草坞",
                "sid": "900000029622007",
                "p": "287 1176",
                "r": "900000029622",
                "udsi": "900000029623012;900000029622007",
                "t": "0",
                "si": "900000029622007",
                "sl": "116.086720,39.724606",
                "udli": "900000029623;900000029622",
                "poiid": "BV10420734",
                "lg": "0",
                "sp": "zi cao wu"
              },
              {
                "rs": "247 1176",
                "udpx": "247 1173;247 1179",
                "su": "1",
                "udsu": "1;1",
                "n": "阎村",
                "sid": "900000029622006",
                "p": "247 1176",
                "r": "900000029622",
                "udsi": "900000029623013;900000029622006",
                "t": "0",
                "si": "900000029622006",
                "sl": "116.080165,39.716731",
                "udli": "900000029623;900000029622",
                "poiid": "BV10420737",
                "lg": "4",
                "sp": "yan cun"
              },
              {
                "rs": "206 1176",
                "udpx": "206 1173;206 1179",
                "su": "1",
                "udsu": "1;1",
                "n": "星城",
                "sid": "900000029622005",
                "p": "206 1176",
                "r": "900000029622",
                "udsi": "900000029623014;900000029622005",
                "t": "0",
                "si": "900000029622005",
                "sl": "116.061370,39.713681",
                "udli": "900000029623;900000029622",
                "poiid": "BV10420735",
                "lg": "0",
                "sp": "xing cheng"
              },
              {
                "rs": "165 1176",
                "udpx": "165 1173;165 1179",
                "su": "1",
                "udsu": "1;1",
                "n": "大石河东",
                "sid": "900000029622010",
                "p": "165 1176",
                "r": "900000029622",
                "udsi": "900000029623015;900000029622010",
                "t": "0",
                "si": "900000029622010",
                "sl": "116.039906,39.709893",
                "udli": "900000029623;900000029622",
                "poiid": "BV10881795",
                "lg": "4",
                "sp": "da shi he dong"
              },
              {
                "rs": "124 1176",
                "udpx": "124 1173;124 1179",
                "su": "1",
                "udsu": "1;1",
                "n": "马各庄",
                "sid": "900000029622004",
                "p": "124 1176",
                "r": "900000029622",
                "udsi": "900000029623016;900000029622004",
                "t": "0",
                "si": "900000029622004",
                "sl": "116.016606,39.705103",
                "udli": "900000029623;900000029622",
                "poiid": "BV10420736",
                "lg": "0",
                "sp": "ma ge zhuang"
              },
              {
                "rs": "84 1176",
                "udpx": "84 1173;84 1179",
                "su": "1",
                "udsu": "1;1",
                "n": "饶乐府",
                "sid": "900000029620004",
                "p": "84 1176",
                "r": "900000029622",
                "udsi": "900000029623017;900000029622003",
                "t": "0",
                "si": "900000029620004",
                "sl": "116.006103,39.701471",
                "udli": "900000029623;900000029622",
                "poiid": "BV10420727",
                "lg": "4",
                "sp": "rao le fu"
              },
              {
                "rs": "43 1176",
                "udpx": "43 1173;43 1179",
                "su": "1",
                "udsu": "1;1",
                "n": "房山城关",
                "sid": "900000029622002",
                "p": "43 1176",
                "r": "900000029622",
                "udsi": "900000029623018;900000029622002",
                "t": "0",
                "si": "900000029622002",
                "sl": "115.989599,39.706061",
                "udli": "900000029623;900000029622",
                "poiid": "BV10420731",
                "lg": "0",
                "sp": "fang shan cheng guan"
              },
              {
                "rs": "0 1176",
                "udpx": "0 1179;0 1173",
                "su": "1",
                "udsu": "1;1",
                "n": "燕山",
                "sid": "900000029622001",
                "p": "0 1176",
                "r": "900000029622",
                "udsi": "900000029622001;900000029623019",
                "t": "0",
                "si": "900000029622001",
                "sl": "115.973395,39.719615",
                "udli": "900000029622;900000029623",
                "poiid": "BV10420733",
                "lg": "4",
                "sp": "yan shan"
              }
            ],
            "ln": "燕房线",
            "su": "1",
            "kn": "地铁燕房线",
            "c": [
              "327 1176",
              "287 1176",
              "247 1176",
              "206 1176",
              "165 1176",
              "124 1176",
              "84 1176",
              "43 1176",
              "0 1176"
            ],
            "lo": "0",
            "lp": [
              "61 1115"
            ],
            "f": [
              {
                "c": [
                  "0 1179",
                  "43 1179",
                  "84 1179",
                  "124 1179",
                  "165 1179",
                  "206 1179",
                  "247 1179",
                  "287 1179",
                  "327 1179"
                ],
                "li": "900000029622"
              },
              {
                "c": [
                  "327 1173",
                  "287 1173",
                  "247 1173",
                  "206 1173",
                  "165 1173",
                  "124 1173",
                  "84 1173",
                  "43 1173",
                  "0 1173"
                ],
                "li": "900000029623"
              }
            ],
            "ls": "900000029622",
            "cl": "EE782E",
            "la": "",
            "x": 23,
            "li": "900000029622|900000029623"
          },
          {
            "st": [
              {
                "rs": "1116 935|1116 935|1116 935",
                "udpx": "1119 935;1113 935",
                "su": "1",
                "udsu": "1;1",
                "n": "宋家庄",
                "sid": "110100023100001",
                "p": "1116 935",
                "r": "110100023100|110100023282|110100023102",
                "udsi": "110100023102014;110100023103002",
                "t": "1",
                "si": "110100023100001",
                "sl": "116.428368,39.845849",
                "udli": "110100023102;110100023103",
                "poiid": "BV10000743",
                "lg": "3",
                "sp": "song jia zhuang"
              },
              {
                "rs": "1116 969",
                "udpx": "1113 970;1119 968",
                "su": "1",
                "udsu": "1;1",
                "n": "肖村",
                "sid": "110100023102013",
                "p": "1116 969",
                "r": "110100023102",
                "udsi": "110100023103003;110100023102013",
                "t": "0",
                "si": "110100023102013",
                "sl": "116.448364,39.834217",
                "udli": "110100023103;110100023102",
                "poiid": "BV10011446",
                "lg": "2",
                "sp": "xiao cun"
              },
              {
                "rs": "1136 999",
                "udpx": "1134 1001;1139 997",
                "su": "1",
                "udsu": "1;1",
                "n": "小红门",
                "sid": "110100023102012",
                "p": "1136 999",
                "r": "110100023102",
                "udsi": "110100023103004;110100023102012",
                "t": "0",
                "si": "110100023102012",
                "sl": "116.459226,39.827951",
                "udli": "110100023103;110100023102",
                "poiid": "BV10012008",
                "lg": "2",
                "sp": "xiao hong men"
              },
              {
                "rs": "1152 1023",
                "udpx": "1150 1025;1155 1022",
                "su": "1",
                "udsu": "1;1",
                "n": "旧宫",
                "sid": "110100023102011",
                "p": "1152 1023",
                "r": "110100023102",
                "udsi": "110100023103005;110100023102011",
                "t": "0",
                "si": "110100023102011",
                "sl": "116.460789,39.806910",
                "udli": "110100023103;110100023102",
                "poiid": "BV10000335",
                "lg": "2",
                "sp": "jiu gong"
              },
              {
                "rs": "1167 1046",
                "udpx": "1170 1044;1165 1047",
                "su": "1",
                "udsu": "1;1",
                "n": "亦庄桥",
                "sid": "110100023102010",
                "p": "1167 1046",
                "r": "110100023102",
                "udsi": "110100023102010;110100023103006",
                "t": "0",
                "si": "110100023102010",
                "sl": "116.480307,39.803011",
                "udli": "110100023102;110100023103",
                "poiid": "BV10013453",
                "lg": "2",
                "sp": "yi zhuang qiao"
              },
              {
                "rs": "1185 1072",
                "udpx": "1188 1071;1183 1074",
                "su": "1",
                "udsu": "1;1",
                "n": "亦庄文化园",
                "sid": "110100023102009",
                "p": "1185 1072",
                "r": "110100023102",
                "udsi": "110100023102009;110100023103007",
                "t": "0",
                "si": "110100023102009",
                "sl": "116.490632,39.806890",
                "udli": "110100023102;110100023103",
                "poiid": "BV10013452",
                "lg": "2",
                "sp": "yi zhuang wen hua yuan"
              },
              {
                "rs": "1201 1097",
                "udpx": "1204 1095;1199 1099",
                "su": "1",
                "udsu": "1;1",
                "n": "万源街",
                "sid": "110100023102008",
                "p": "1201 1097",
                "r": "110100023102",
                "udsi": "110100023102008;110100023103008",
                "t": "0",
                "si": "110100023102008",
                "sl": "116.505403,39.802971",
                "udli": "110100023102;110100023103",
                "poiid": "BV10013451",
                "lg": "2",
                "sp": "wan yuan jie"
              },
              {
                "rs": "1219 1122",
                "udpx": "1222 1121;1217 1124",
                "su": "1",
                "udsu": "1;1",
                "n": "荣京东街",
                "sid": "110100023102007",
                "p": "1219 1122",
                "r": "110100023102",
                "udsi": "110100023102007;110100023103009",
                "t": "0",
                "si": "110100023102007",
                "sl": "116.513321,39.793189",
                "udli": "110100023102;110100023103",
                "poiid": "BV10003511",
                "lg": "2",
                "sp": "rong jing dong jie"
              },
              {
                "rs": "1234 1147",
                "udpx": "1232 1148;1237 1145",
                "su": "1",
                "udsu": "1;1",
                "n": "荣昌东街",
                "sid": "110100023102006",
                "p": "1235 1147",
                "r": "110100023102",
                "udsi": "110100023103010;110100023102006",
                "t": "0",
                "si": "110100023102006",
                "sl": "116.521688,39.782832",
                "udli": "110100023103;110100023102",
                "poiid": "BV10013450",
                "lg": "2",
                "sp": "rong chang dong jie"
              },
              {
                "rs": "1273 1174",
                "udpx": "1272 1176;1273 1171",
                "su": "1",
                "udsu": "1;1",
                "n": "同济南路",
                "sid": "110100023102005",
                "p": "1273 1174",
                "r": "110100023102",
                "udsi": "110100023103011;110100023102005",
                "t": "0",
                "si": "110100023102005",
                "sl": "116.539901,39.772962",
                "udli": "110100023103;110100023102",
                "poiid": "BV10007921",
                "lg": "4",
                "sp": "tong ji nan lu"
              },
              {
                "rs": "1327 1174",
                "udpx": "1327 1176;1327 1171",
                "su": "1",
                "udsu": "1;1",
                "n": "经海路",
                "sid": "110100023102004",
                "p": "1327 1174",
                "r": "110100023102",
                "udsi": "110100023103012;110100023102004",
                "t": "0",
                "si": "110100023102004",
                "sl": "116.562321,39.783673",
                "udli": "110100023103;110100023102",
                "poiid": "BV10013449",
                "lg": "4",
                "sp": "jing hai lu"
              },
              {
                "rs": "1380 1174",
                "udpx": "1380 1176;1380 1171",
                "su": "1",
                "udsu": "1;1",
                "n": "次渠南",
                "sid": "110100023102003",
                "p": "1380 1174",
                "r": "110100023102",
                "udsi": "110100023103013;110100023102003",
                "t": "0",
                "si": "110100023102003",
                "sl": "116.581357,39.795118",
                "udli": "110100023103;110100023102",
                "poiid": "BV10013448",
                "lg": "4",
                "sp": "ci qu nan"
              },
              {
                "rs": "1432 1174|1432 1174",
                "udpx": "1432 1171;1432 1176",
                "su": "1",
                "udsu": "1;1",
                "n": "次渠",
                "sid": "110100023102002",
                "p": "1432 1174",
                "r": "900000099933|110100023102",
                "udsi": "110100023102002;110100023103014",
                "t": "1",
                "si": "110100023102002",
                "sl": "116.591563,39.803550",
                "udli": "110100023102;110100023103",
                "poiid": "BV10011266",
                "lg": "1",
                "sp": "CiQu"
              },
              {
                "rs": "1479 1174",
                "udpx": "1479 1171;1479 1176",
                "su": "1",
                "udsu": "1;1",
                "n": "亦庄火车站",
                "sid": "110100023102015",
                "p": "1479 1174",
                "r": "110100023102",
                "udsi": "110100023102015;110100023103015",
                "t": "0",
                "si": "110100023102015",
                "sl": "116.601913,39.812607",
                "udli": "110100023102;110100023103",
                "poiid": "BV10013399",
                "lg": "2",
                "sp": "yi zhuang huo che zhan"
              }
            ],
            "ln": "亦庄线",
            "su": "1",
            "kn": "地铁亦庄线",
            "c": [
              "1116 935",
              "1116 969",
              "1136 999",
              "1152 1023",
              "1167 1046",
              "1185 1072",
              "1201 1097",
              "1219 1122",
              "1234 1146",
              "1234 1147",
              "1242 1156",
              "1247 1162",
              "1253 1167",
              "1260 1171",
              "1267 1173",
              "1273 1174",
              "1327 1174",
              "1380 1174",
              "1432 1174",
              "1479 1174"
            ],
            "lo": "0",
            "lp": [
              "1259 1233"
            ],
            "f": [
              {
                "c": [
                  "1479 1171",
                  "1432 1171",
                  "1380 1171",
                  "1327 1171",
                  "1273 1171",
                  "1267 1170",
                  "1261 1168",
                  "1255 1165",
                  "1249 1160",
                  "1244 1154",
                  "1237 1145",
                  "1237 1144",
                  "1222 1121",
                  "1204 1095",
                  "1188 1071",
                  "1170 1044",
                  "1155 1022",
                  "1139 997",
                  "1119 968",
                  "1119 935"
                ],
                "li": "110100023102"
              },
              {
                "c": [
                  "1113 935",
                  "1113 970",
                  "1134 1001",
                  "1150 1025",
                  "1165 1047",
                  "1183 1074",
                  "1199 1099",
                  "1217 1124",
                  "1232 1148",
                  "1239 1157",
                  "1245 1164",
                  "1252 1169",
                  "1258 1173",
                  "1266 1176",
                  "1272 1176",
                  "1327 1176",
                  "1380 1176",
                  "1432 1176",
                  "1479 1176"
                ],
                "li": "110100023103"
              }
            ],
            "ls": "110100023102",
            "cl": "F0087D",
            "la": "",
            "x": 24,
            "li": "110100023102|110100023103"
          }
        ],
        "o": "1015,660"
      };
    t.i ? (s.data = t,e(s)) : e(r)
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
            , l = h(e.elem, '.overlays')
            , u = parseInt(a.css(l, "left")) || 0
            , p = parseInt(a.css(l, "top")) || 0
            , d = o + n * r / 2 - u + i.opts.offset.x * r
            , f = c + n * r / 2 - p + i.opts.offset.y * r;
          a.css(i.elem, {
              top: (f - i.opts.offset.y * (r - 0.5) ) + "px",
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
  var n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NjgyNTVGRUI4NDExMUU1OTE5NkRCOEUxRTE0MjAwRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTFGOTNDMUY4NDAxMUU1ODlGRUFEQTNGNzJGODg4NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTFGOTNDMEY4NDAxMUU1ODlGRUFEQTNGNzJGODg4NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmYyMzcyNzhhLWQ5NzEtNGZlZS1hOTQxLTVmZmQzYTcxNDcxZCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjNmNkZWI3LTQwYWEtMTE3OS05YjhhLWE3MGUzZGE1YzUzMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsoJaUsAABE4SURBVHja7F0HdBVVGv5D7/0cmkBApEn3AEIQWVYQXAwIJJQQCEU9lCSoq0sAN6xnF1yVkgSkSAk9oAhSPAu4IEgAPXQQCCBNpEvvUvb/JpNseO/Om1fuzJv3mO+c/zyYmbyZud+79/7t/jfk8ePHZCN4kctuAptgGzbBNmyCbdgE27AJtmETbMMm2CbYRrAgj69f0PiFF+xW9AE7d+ywNsEWQnGWmjmkBkslltIsZdR3Lcpyj+UWy1WWG+q/z7BkOMg1uwf7F+VYXmNpxdJcJdQd5FellM51h1m2svzAsprlnE2w8ajOEsnSlaURS4iB96qhSl8WRGR2sSxl+ZLliE2wPBRg6cEygKWln54BP6TGqvyLJZ1lBksay11bi/YOmC/fZznBMtuP5IoQpj7TCfUZi9o92H2UZIlliXdjnsxG4cKFqWpoKFWuUiXzs3JlKlu2LBUvXpxKlCxJeXLnVq65f/8+3blzh27cuEG3bt2iO3fv0qWLF+nkyZN0/MQJOqV+4pwbKMvyCctwlmSWFJbLVmrMEF8D/hLNpBB1GB6rar26aNigATVs1IjCw8MplImViRNM9IoVK2j3rl20e88ed//sEksCyyyWR1Ywk6xCcEOWz1Vt2PWFDRtS+OuvU9t27ahwoUKm9IJbt2/Td+vW0YqVK2nXrl3u/Am07yGqYvZUE5xfVVri9aYL9NKYmBjpPdWbnp2amqr0bh08YEliGana3k8dwXVYFrHUd3VRly5dKDY2looXK2YpReHa9euUkpJCX3/9td6le1Ur4ODTRHB31cwoonXBG50707vvvWfaMOwtbvPwPW7cOFq2fLmry26yDGRZHOwEQ5H6p6qICJ0U9evXp8S//52qVq0aUB6Y48eP0z8++oj27t3r6rIxLKNUx4kpBJtpB+djWcgyQkRunjx5qE90NKXOnh1w5AJ4Zjw73gHvogG8+wK1LYLK0YFxdrk6FzmhVs2atGD+fBo2bBgFOvAO8+fNU95JAz3VtigULATjReCs76Bl9ixYsICee+45ChbUqFFDeaeuXbtqXYK2WGUGyUYTjKEIDvrWopMwe2bNnEkhISEUbMA7jRwxgoYPH651yZ/QNqzDGDpcG6lkgbV5LFGik599+im1adNG2otcZ7Nl27ZtihuyTJkydPPmzWx3Y4ECBahgwYJUqlQpqsJ2dIkSJUwle/369fTX99/XOo05OZqVrceBRjBcjsKf74Tx4+nll1+W9hIbvv+eRo8erfiX3QFs6pq1alGTJk2oWdOmVKdOHcqVy9jBbOPGjfTOu+9qnf6YCU4IJIIjVJsvxGhyT506RZHduytBBG9Rrlw5at++vSE+bQ9I7s4kLwmEObg2ZTrbQ0TDskxygeXffOMTucC5c+cU9yOUIgylhw8fNoRgvDvaQAOzuLPUtjrB8C3D/VhEpFDJnHOzcP6cvEwajGaYL3v26kWjPvyQLl+WH/lDG4xIEI7GhVnSmOT8ViYYgYMGIlMoLjbWkF7xzDPPSP9OEP3tt98qPRoRJNno1q2b4mMXAH75MVadg5tRZipLbkcnxvz58w1TYjC8RkREKCE9o4DwJMwdaOOy8OjRI+odHU2HDh1yPPWQpSXPx9us1IPhm5vuSC5cdtBujdRQoSCNnzBBMY2MAnpxX55iLl26JG/o5DYZnZhIefPmdTyFNpzOHSePlXowxt9kx3N9+/Sh+Ph4U2xNKFq7d+9WenKukBC6cPEiFeQel5t/ZLfZHr585QqdPXuWjhw5QhkZGfTgwQOP71GxYkWaOmWK8ikLSUlJNGfuXNGpeO7FyVYgGDlUSCMtnfN4gwYNaPasWZb0Mt29e5d++uknWr16NW3ctMkjLRwjxcwZM6hSpUrSnqdf//60xzkt6ApLdSb5sr8JhmI1wvH4yhUrpP7SjcLVq1cVv3FaWprb8zjIReSoZMmSUp7hzJkz1JHneZGziAke4bc5mMktow7PT6DLG28EBLkA3JZDhgyh5cuXU7t27dz6m19//VVxWPzxxx9SnqFChQpagYlYtY39pmQNJUFOsAtvjWVRunRp+njsWBo7ZgwVciOLBIF9zJ+y8I44VAp/QpxfCOZfVkHKzBx8ApGRkZZPs3GFV199leakpirauR4W8bAOP7gM4EfVvXt30alBalub3oOxRshp+BhmktZsJJ599llFkdJzokB/Gcu93t0ghx7i44SdFW3cwx8ED3Q8gEQ5mc4Af6J8+fI0edIkXUUKtnFySoqUe6Lt0IYCDDCVYB4ysMrPaa1QdHQ0BROgLSdNnChyRjwBpM7KClD06dNHdDhMbXPTenCk4wH4m0NDQynYULduXXpPR2nEUD158mQp90NCQqNGjUSnephJcITjgXCxHRcUgOL4YrNmLq/5YfNmT9YwucTrHTuKDnczhWAeKiqQIGLU1k0bMlAxcuRIXf0CQRVZmrwA9dW2N7wHtyeHYD5W+QWyaeQO4Ljp2cP1KImMjXMS4tPIH0ObOgBt3sEMgl9ymn/Fc4bPmP7FF/TFjBmWIblfv35UtKj2Wu+HDx/SV199JeVeGm3aygyCnbTnzp06GULu1KlTacqUKZYhuUiRIlrOiGysWbuWZBRZ1zCXWhhKMM8BKFX0hLqOVfNYTW8EuVmwEsmREREuzabffvuNfj5wQIqJhh+UA6ozByWM7MFO6zGqSjaNpk2f/gS5ViMZ4cKwsDCX1/z3u++k3Esjw7OGqQRXlphmCnKnTZumeR4ko3f7GxpmTDbSt2yRch+Ntq0ZkD1Yj9wsoHf7m+QWLVpQ/vzayY+//PILXblyxef7aLRtLVMJriKhB7tLrlVIBrlNmzTRPA8lS4bTo4ofhminPBWUKjKTXKuQ3EzHs3Xw4EGf71GufHnhyG0kwaUdD/iykMtbcq1AMnzvroDkPl+hUZeklCffkcdXgosVL+4XcnOSDLz15ptSiENhldmpqT5/D7xa7pS36BcToxSZEUGjbUsb2YOdfhCoIOcvco3oyUOHDqXXOnQwZRTAfXA/zcYWl4LIayTBTn46ODr8Sa5skrFwOzExUfoiOUe0atVKuY+rxe8a/v0iRhLsF4XKbJLhqULyHWLBRgDfiwQ/vUQCGfCUYKfkIzeLdhpObk6ScS9fgdAgsjmqVasm9flQjQff605qk0ae9k0jCXZa7/Hg4UPLkJt9P76XDJKRj4W8LF9NwZwm5eeTJ7udMK+xvMajZGxPtejfKbPcbzauX7umW2bw7bfeUkQP8ABFREa6HNrmzpljqjkEUlKSk6n/gAFK3Q9vgcABvseTHwvaVoDLRvZgpy9HzUaZw5eroQvOg9sGLhPVQvXq1ZWe7G3GKP5uEptf+B5PoNG2vxtJ8CnHA+fOnpWnEOTKRbVra1cxQEB969atfnFs1KtXT1G8PF0Ki+vxdyjR6Ck02vaUkQQ75YaiUrpMNG3a1LUDYdMm8hdgOn04apTbdb1w3aiRI702uTTa9rCRBDstR0f5e5nQ8/FuWL9eWf7pL3Tq1Mmlc8LRadJZnJnhFjTa9pCRBGc4jReSe3A9VqRc+bdhOqzfsIH8CbgXI10og0BEt27Kdb7glB96cIbRPTh37tzU9pVXXF6zePFi8jf+9sEHmi5NHHdRwtBtnBATnGEYwTt37IDeftTR0YFiZDKht0533759enWZDUeWS7OJQ1wY/9dzQboDrEEWmGVHmYOrRvZgIN3xAIqRyQSWbuiVSBDlbZkNuBrHffZZtkuz7vPPK/+X4YJMT08XHfY4F8gbgp3U2N3u7UTikWmhl2S+7ccflTob/gYcGHA9Io0HC8IFmZDeESzO6/LYhPC4Roe6fOI0OaxuSN+8WcnIlwUoU6gf6crXDT9x2qJFriqsByRQMTespXCjt4o8RJ8xtAerN3BKOFqzZo3Ul0SoLKpXL5fXHDt2TKkxGWxYu3at6PAeT8n1dogGljoeWLlqlfQX7d27t66fG7nS+3/+OagI1iif6NWaGG8JTnM8gB3BTkg2mTCfDRw40OU1qHSTkJAgJU3VCoD3SmN3tcWmEcxDxVGRNj1v3jzpL9yDlS3sgeAKWC4SP2yYz2WFrYC54qp36dzmR8zswcro6HgAm0PJdiPC8YHyu3pO/v379ysbaQUyyWg7jQ22ZnptkfjwPKhO7lSdMyk5WfqLIxITzfOxHrawaREXHy+t6o3Z0Cjmckk0JRpOMA8Zd/jDqTAF3IhGlPYdPHiwUv9SD7CN+/btq+xEFkhAnBvlFEU+HbWtTe/BwCQS5AhhXwbZgHcIiWruZETAh9srKkopqYC6zIGACRMnCt0BlLmDqdcwrBjpKlb1UYNRNo4ePepR+gwKkg/i3t8yLMyy+zMZWYw0IMsJb9+xg+Li4jxS6LCQC2X0/9ymjSE/PF9g9XLC+IgTDSVGFgRH8e9YJtndtN2cQD0vxJ2RAwayYW9DW0dKEPQHBA1QZhilDF3V5JCBQCgIjg84g7FP6hOJR/ny5aN5/PBG7Ut44MABpbLtxYsXDfl++LjR61EIzYgkdSxQi+ZOIDDt9rM0YoIf+HoPWSsb8CBvU+aGEtnAgyeOHm2YooMdy5BGi4Q4I4C85CVLltAn2nsdeQ20CdpGQC7a8E0Z5MokGMAuIU5DCnYVGShp5Z8I0KpRGXbwoEHKiGEEli1bRr9L3kNpDFsEgh1XgBRZO67IJhjAjk97RfOlrIqsWkMpfNYLFyzQXbfrbW87KdHPjlpaKGAqANpuuMxnl03wPcrcANlJ80FYD7uKGQnEh7Fd7fhx41xt0Oz1SCEDaAP0Xg2btyf33ntWJljRfaD5U4596rOAfQGxMNpotG7dmhYuXKhsnIEiqYV8LLOIQqQy9qDAu7vYZrY/k3tAdlsExfayeoC9vINtZ6T5bN++XVkD5e6+SbDnMSL4usNKsG0vq3w3mbhBtCdADPn06dN0/sIFJTABr9gjtoFhCxdmmzgvz+nYmBL2MhIAffWABesG0YopzIKUy/ZCjSwhQUkQD2Z8yQrVWPGcCyDPKZzJNSzGaTTBACbA1ZgaRSexXxDivVb1E3sLtCuUqaVLl2pdguUZHZlcQ5dLmlHCAS/wF5b/iE6iAaKiopQgQrAAHiq8kwty0RYd1bahQCc4i2TUHBYGPA9lZFBU796GJAuYDbwD3I94Jw2kqW1hykJnM4uwYJ7ppWrXQsVnzpw51L9/fyV8FmjAM+PZ8Q4u0obGqm1gWl6RGXOwCKiqjdrAmssAsEs2NtkqZPGtApCJMTEpSa/SO4LXSA91yozkOTgoCQaeZ1nE4jJSgGgOtocvppMfbTauX7+uuF81XI45sY8yt8QROjGCmWAARS+QETJMb7oIDw+nmJgYrSLZpgHpQBiGv9FfcIcQGmLkyMjQzEwIdoKz8CJlbhGvG/dr3LixUpC7bdu2pg3fGIbXrVunrN7YuXOnO3+CeC5CaLpRoaeFYABJA4NYPmJxq4QtSuu/1LIlNW/eXOqO3ADW56LgCza80ljKKQLW7iayfE6CmmJPO8FZQLlc5PkMJQ9K5yLtBsN3ldDQzE8WRIBQDgJVW/PlzZu9+hGr9+6z1o46VEjNOX/+vLJkBMMvwoL49LAmFoLFk9Qh2aPA8dNIcBaQDDWY5R2WsmRNXGAZr/ZYr7LtjSY4F1kXaLB/s1SlzPDjFgs92xb1mULVZ7TsUopAWDmNrP5UVZC9h/I22ByzgcnPgbzWLylzyc4RChAE2tL4I6pZBcH23NjF8SVVqkm+1zGWzZRZNgFRn9MUgAjk2gdo8Jn0/5V30LxrOgh+BGVUZQ374GTZVfAD31MVokvqd2U4yFUKAgRTcQsQ8qMqNmRp0TasjVx2E9gE27AJtmETbMMm2IZNsA2bYBs2wTbBNoIF/xNgABhvsV8PWeRdAAAAAElFTkSuQmCC"
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
