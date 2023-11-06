function getCookieNames() {
    if ( document.cookie == "" ) return new Array();
    var c = document.cookie.split(";");
    var names = new Array(c.length);
    for (var i=0; i<c.length; i++)
        names[i] = c[i].substr(0, c[i].indexOf("="));
    return names;
}
function getCookieValue(name) {
    var cs = document.cookie.split(";");
    for (var k=0; k<cs.length; k++) {
        Nam = cs[k].substr(0, cs[k].indexOf("="));
        Val = cs[k].substr(cs[k].indexOf("=") + 1);
        if ( Nam == name )
            return unescape(Val);
    }
    return null;
}
