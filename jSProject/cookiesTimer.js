function Cookie(name, value, days) {
    d=new Date();
    if ( days < 0 ) { 
        d.setTime(0); 
    }
    else { 
        d.setTime(d.getTime() + days * 24*60*60*1000); 
    }
    return name + "=\"" + value + "\"; Expires=\"" + d.toUTCString() + "\"";
}
