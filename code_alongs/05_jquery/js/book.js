$(document).ready(function (){
    let dark_mode;
    $("#button-dark").click(function(){
        if (dark_mode == false){
            $("body")
            .css("background-color", "rgb(16, 16, 16")
            .css("color", "white");
            dark_mode = true;
        } else {
            $("body")
            .css("background-color", "white")
            .css("color","rgb(16, 16, 16");
            dark_mode = false;
        }
    });

    $("#button-zoom").click(function () {
        $("#cover-image").css("position", "absolute");
        $("#cover-image").animate(
          {
            width: "300px",
            left: "50%",
          },
          2000
        );
      });

    $("#button-zoomtext").click(function () {
        let font_size = $("para1").css("font-size").replace("px", "");
        font_size = Number(font_size);
        font_size++;
        $("p").css("font_size", font_size + "px");
    });
});