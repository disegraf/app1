const item = 1;

    const title = document.getElementById("titleGame");
    const description = document.getElementById("description");

    var jqxhr = $.getJSON("https://spreadsheets.google.com/feeds/cells/1k_tqvUz9MohcLirBuaQG7d1eCaJOHA6PKOTjQy2Irqs/1/public/full?alt=json", function () {
      //console.log(jqxhr.responseJSON);
      const jsonContent = jqxhr.responseJSON;
      console.info(jsonContent.feed.entry);
      //console.log(jsonContent.feed.entry[0].content.$t);
      const arrayInfo = jsonContent.feed.entry;

      const datosJuego =
      {
        title: "title",
        description: "description"
      }
      //console.log(arrayInfo.length);
      for (let i = 0; i < arrayInfo.length; i++) {
        if (arrayInfo[i].title.$t == "A" + item) {
          datosJuego.title = arrayInfo[i].content.$t;
        }
        if (arrayInfo[i].title.$t == "B" + item) {
          datosJuego.description = arrayInfo[i].content.$t;
        }
      }

      title.innerHTML = datosJuego.title;
      description.innerHTML = datosJuego.description;

})