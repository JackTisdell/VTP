var movieSelected=!1;function nSlider(){const e=$("#nslide"),t=$("#nslide ~ .label-container .label"),a=e.attr("min"),r=e.attr("max");var o=e.val(),i=(o-a)/(r-a);t.css("left",100*i+"%"),t.html(o),e.on("input",(function(){o=e.val(),i=(o-a)/(r-a),t.css("left",100*i+"%"),t.html(o)}))}function ICselect(){$(".IC-option").on("click",(function(){$(".IC-option").attr("data-selected","false"),$(this).attr("data-selected","true")}))}function nodeSelect(){$(".node").on("click",(function(){$(".node").attr("data-selected","false"),$(this).attr("data-selected","true")}))}function drawParameterWidget(){const e=$(".parameter-widget .xtick");for(i=0;i<e.length;i++)$(e[i]).html(i);const t=$("#nslide").val(),a=$('input[name="targ"]:checked').val(),r=$('input[name="man"]:checked').val(),o=$('.IC-option[data-selected="true"]').attr("data-spec");var l="";r&&(l=r.toUpperCase()[0]);const c=$(".parameter-widget .node");$(c[0]).css("width");var n,d,s,p,u,m,h;for(i=0;i<c.length;i++)p=(n=$(c[i])).attr("data-cond"),u=parseInt(p[0]),m=p[1],h=parseInt(p.substr(3,3)),icSpec=p.substr(7,2),u!=a||m!=l||h!=t||icSpec!=o?(n.css("opacity","0"),n.css("pointer-events","none"),n.attr("data-selected","false")):(n.css("opacity","1"),n.css("pointer-events","auto")),mu=n.attr("data-mu"),s=30*n.attr("data-nu"),d=100/e.length*mu,n.css("left",d+"%"),n.css("bottom",s+"%")}function redrawParameterWidget(){$(".button-row").change(drawParameterWidget),$("#nslide").change(drawParameterWidget),$(".IC-option").click(drawParameterWidget),$(".node").click(drawParameterWidget)}function serveVideo(){const e={torus_n300tar0mu0_87nu2icUU:'<iframe class="vid" width="560" height="315" src="https://www.youtube.com/embed/kz3RPHTv7N0?autoplay=1&playlist=kz3RPHTv7N0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',torus_n300tar0mu1_73nu2icUU:'<iframe class="vid" width="560" height="315" src="https://www.youtube.com/embed/iP4Bw21OFa8?autoplay=1&playlist=iP4Bw21OFa8&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',torus_n300tar0mu3_46nu2icUU:'<iframe class="vid" width="560" height="315" src="https://www.youtube.com/embed/r1fMxQPBPz0?autoplay=1&playlist=r1fMxQPBPz0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',torus_n300tar0mu0_87nu1icUU:'<iframe class="vid" width="560" height="315" src="https://www.youtube.com/embed/b0WMj1VSljo?autoplay=1&playlist=b0WMj1VSljo&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',torus_n300tar0mu1_73nu1icUU:'<iframe class="vid" width="560" height="315" src="https://www.youtube.com/embed/vSE0yF4NGhE?autoplay=1&playlist=vSE0yF4NGhE&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',torus_n300tar0mu3_46nu1icUU:'<iframe class="vid" width="560" height="315" src="https://www.youtube.com/embed/cj49cUUOJZ0?autoplay=1&playlist=cj49cUUOJZ0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',torus_n300tar0mu0_87nu0_5icUU:'<iframe class="vid" width="560" height="315" src="https://www.youtube.com/embed/34SkhISWwhQ?autoplay=1&playlist=34SkhISWwhQ&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};$(".player").html("<p>Select options to view simulation</p>");const t=$("#nslide").val(),a=$('input[name="targ"]:checked').val(),r=$('input[name="man"]:checked').val(),o=$('[data-selected="true"]');if(movieSelected=!1,2==o.length){movieSelected=!0;const i=$(o[0]).attr("data-spec"),l=$(o[1]).attr("data-mu").replaceAll(".","_"),c=$(o[1]).attr("data-nu").replaceAll(".","_");if(t&&a&&r&&i&&l&&c){const o=r+"_n"+t+"tar"+a+"mu"+l+"nu"+c+"ic"+i;$(".player").html(e[o])}}}function callVideo(){$(".button-row").change(serveVideo),$("#nslide").change(serveVideo),$(".IC-option").click(serveVideo),$(".node").click(serveVideo)}function getParamsFromURL(){const e=window.location.search,t=new URLSearchParams(e);if(t.has("n")&&t.has("numtar")&&t.has("dom")&&t.has("ic")&&t.has("mu")&&t.has("nu")){const e=parseInt(t.get("numtar")),d=t.get("dom"),s=parseInt(t.get("n")),p=t.get("ic"),u=parseFloat(t.get("mu")),m=parseFloat(t.get("nu")),h=$("#nslide"),w=h.attr("min"),y=h.attr("max"),f=h.attr("step");var a=!1;s>=w&&s<=y&&(s-w)%f==0&&(a=!0,console.log("blah"),h.val(s));const v=$("#target-selector input");var r;for(e>=0&&e<=3&&!0,i=0;i<v.length;i++)if(r=v[i],$(r).val()==e){$(r).prop("checked",!0);break}const b=$("#dom-selector input");var o;for(0!=d.localeCompare("torus")&&0!=d.localeCompare("sphere")||!0,i=0;i<b.length;i++)if(o=b[i],0==$(o).val().localeCompare(d)){$(o).prop("checked",!0);break}const g=$(".IC-option");var l=!1;for(i=0;i<g.length;i++)if(0==$(g[i]).attr("data-spec").localeCompare(p.toUpperCase())){$(g[i]).attr("data-selected","true"),l=!0;break}const k=$(".parameter-widget .node");var c=!1,n=k[0];for(i=0;i<k.length;i++)(n=$(k[i])).attr("data-mu")==u&&n.attr("data-nu")==m&&(c=!0,n.attr("data-selected","true"));a&&l&&c&&(movieSelected=!0)}}function copyLink(){const e=$(".share-button");e.click((function(){if(movieSelected){const a=$("#nslide").val(),r=$('input[name="targ"]:checked').val(),o=$('input[name="man"]:checked').val(),i=$('.IC-option[data-selected="true"]').attr("data-spec"),l=$('.node[data-selected="true"]'),c=l.attr("data-mu"),n=l.attr("data-nu");var t=new URLSearchParams;t.append("n",a),r&&t.append("numtar",r),o&&t.append("dom",o),i&&t.append("ic",i),c&&t.append("mu",c),n&&t.append("nu",n);copyToClipboard(window.location.origin+window.location.pathname+"?"+t.toString())&&e.html("link copied!")}else e.html("no selection");setTimeout((function(){e.html("copy link")}),3e3)}))}function copyToClipboard(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.bottom="-10px",document.body.appendChild(t),t.select();const a=document.execCommand("copy");return document.body.removeChild(t),a}$(document).ready((function(){getParamsFromURL(),nSlider(),ICselect(),drawParameterWidget(),redrawParameterWidget(),nodeSelect(),serveVideo(),callVideo(),copyLink()}));