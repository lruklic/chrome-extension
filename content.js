

var href = $("a[href^='http']").eq(0).attr("href");

// swap for jutarnji.hr
if (href.includes("jutarnji")) {
    var titles = $("h4.title a").toArray();
    for (title of titles) {
        var article = {};
        article.originalTitle = title.innerHTML;
        article.position = $(title).offset();
        article.hash = hashCode(article.originalTitle);
        console.log(article);
        drawElement("PROBA", article.position.top, article.position.left);
        title.innerHTML = "WAKANDDA FOREVAAAA"
    }

    var article = {
      "hash" : "123456",
      "title" : "Zvijezda prelazi u Real Madrid",
      "alternateTitle" : "Rakitic prelazi u Real Madrid"
  }

    $.ajax({
      url: "http://localhost:8085/api/article/create",
      type: "POST",
      data: JSON.stringify(article),
      contentType: 'application/json',
      success: function (data, textStatus, jqXHR) {
          console.log(data)
      }
    });
}

// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var firstHref = $("a[href^='http']").eq(0).attr("href");
  
        console.log(firstHref);
  
        // This line is new!
        chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
      }
    }
  );