var $$_$$ = {
    user : {"is_user_guest":true,"is_user_login":false,"avatar_url":"","display_name":"","isVerifiedEmail":false}
};
(function(d){var j=d.getElementById("nav-user");var n=d.getElementById("nav-user-a");var l=d.getElementById("nav-user-img");var b=d.getElementById("nav-user-name");var k=j.getAttribute("data-ref");var m="nextByapkworldmod('"+k+"')";if($$_$$.user.is_user_guest){n.setAttribute("href","/es/login");n.setAttribute("onclick",m)}else{n.setAttribute("href","javascript:void(0)");if($$_$$.user.avatar_url){l.setAttribute("src",$$_$$.user.avatar_url)}b.textContent=$$_$$.user.display_name;n.setAttribute("href","/es/u/"+$$_$$.user.id)}})(document);