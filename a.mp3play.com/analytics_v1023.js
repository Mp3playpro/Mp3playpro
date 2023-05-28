$$.analytics = {
send: function (cmd,c,a,l,v) {
try{
var u = '//a.apkworldmod.com/analytics/collect_v1023';
u += '?cmd=' + cmd;
if(c){u += '&c=' + c;}
if(a){u += '&a=' + a;}
if(l){u += '&l=' + l;}
if(v){
if(typeof v == 'object'){
v=encodeURIComponent(JSON.stringify(v));
}
u += '&v=' + v;
}
u+='&hl='+(navigator.browserLanguage || navigator.language || navigator.userLanguage).toLowerCase();
u+='&t='+Date.now();
u+='&w='+encodeURIComponent(btoa(navigator.webdriver));
u+='&r='+encodeURIComponent(document.referrer);
u+='&u='+encodeURIComponent(location.href);
u+='&tzo='+new Date().getTimezoneOffset() / 60;
if (typeof page_config !== 'undefined' && page_config) {
u += '&page_config=' + encodeURIComponent(JSON.stringify(page_config))
}
if(window.sampleByapkworldmod.collect){
u+='&sample=1';
if(!$$.ltIE9){
var fp = $$.getFingerprintInfo();
u+='&f='+fp.fp;
u+='&fc='+fp.cid;
u+='&ff='+fp.fid;
}
}
$.ajax({
url: u,
type: 'GET',
dataType: 'jsonp',
jsonp: 'callback',
success: function (data) {
}
});
}catch(e){}
}
};
$$.analytics.send('pageview');