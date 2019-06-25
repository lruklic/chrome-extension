function hashCode(str) {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

function drawElement(name, top, left){   
    div = $("<div />")
        div.attr("id", name);
        div.attr("class", 'elementt')
        div.css("top", top - 10)
        div.css("left", left)
        div.css("position", "absolute")
        div.css("z-index", 999)
        div.html(name)

        $("body").append(div)
}