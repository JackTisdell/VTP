function rescale(t,e,n,a,o){return a||(a=0),o||(o=1),(n-e)*(t-a)/(o-a)+e}function interleave(t,e){if(t.length!=e.length)throw"inputs must have the same length";C=new Array(2*t.length);for(let n=0;n<t.length;n++)C[2*n]=t[n],C[2*n+1]=e[n];return C}$(document).ready((()=>{const t=window.location.search,e=new URLSearchParams(t),n=parseInt(e.get("n")),a=parseFloat(e.get("nu")),o=e.get("version");let r=500;n&&(r=n);let l=4;a&&(l=a);let s="leading geodesic";"I"==o&&(s="leading straight cone",$("#modeltoggle-cb").prop("checked",!1));let i=Math.sqrt(r)/2,g=[-i,-i,i,i],d=new VTPState(r,1,l,s),c=1;d.randomize(g),d.addTargetComponent([0,0]);const m=document.getElementById("canvas");let h,p;function u(){h||(h=setInterval((()=>{d.render(m,g.map((t=>t*c)))}),40))}function T(){p||(p=setInterval((()=>{d.step(),$("#treadout").html(d.iteration)}),40))}function C(){clearInterval(p),p=null}u();const f=$("#playbutton-cb");f.change((()=>{f.prop("checked")?(T(),running=!0):(C(),running=!1)})),$("#skipbutton").on("click",(()=>{running&&C(),clearInterval(h),h=null;for(let t=0;t<100;t++)d.step();$("#treadout").html(d.iteration),u(),running&&T()})),$("#zoomin").on("click",(()=>c/=1.1)),$("#zoomout").on("click",(()=>c*=1.1));const k=$("#modeltoggle-cb");k.change((()=>{k.prop("checked")?d.speedModel="leading geodesic":d.speedModel="leading straight cone"}));const M=$("#textField-N");M.val(d.numAgents),$("#nForm").submit((()=>{if(r=parseInt(M.val()),!isNaN(r)&&r>0){i=Math.sqrt(r)/2,g=[-i,-i,i,i];let t=d.alignmentStrength;d=new VTPState(r,1,t),d.randomize(g),d.addTargetComponent([0,0]),c=1,$("#Nreadout").html(r)}}));const b=$("#textField-nu");b.val(d.alignmentStrength),$("#alignmentStrengthForm").submit((()=>{const t=parseFloat(b.val());!isNaN(t)&&t>0&&(d.alignmentStrength=t,$("#nureadout").html(t))})),$("#target-options *").click((function(){let t=!1;p&&(C(),t=!0),d.clearTargets();switch($(this).attr("id")){case"single-point":d.addTargetComponent([0,0]);break;case"two-point":d.addTargetComponent([-3,0]),d.addTargetComponent([3,0]);break;case"three-point":d.addTargetComponent([0,4]),d.addTargetComponent([-4*Math.sqrt(3)/2,-2]),d.addTargetComponent([4*Math.sqrt(3)/2,-2]);break;case"segment":d.addTargetComponent([-10,0,10,0]);break;case"cross":d.addTargetComponent([-10,-10,10,10],"+"),d.addTargetComponent([-10,10,10,-10],"-"),d.assignToTarget("+",0,Math.floor(r/2)),d.assignToTarget("-",Math.floor(r/2),r);break;case"ngon":let t=5;d.addTargetComponent(Array(2*t).fill(0).map(((e,n)=>n%2==0?5*Math.sin(n/2*2*Math.PI/t):5*Math.cos((n-1)/2*2*Math.PI/t))));break;case"nested-squares":d.addTargetComponent([-3,-3,3,-3,3,3,-3,3],"in"),d.addTargetComponent([-9,-9,9,-9,9,9,-9,9],"out"),d.assignToTarget("in",0,Math.floor(r/2)),d.assignToTarget("out",Math.floor(r/2),r)}t&&T()})),$("#export").on("click",(()=>{d.exportData()}))}));