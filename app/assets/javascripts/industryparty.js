$(document).ready(function() {

//Change these values to style your modal popup
    var source_info = "/parties/info";
    var source_rsvp = "/parties/rsvp";
    var source = "/parties/info";
    var width = 400;
    var align = "center";
    var top = 100;
    var padding = 10;
    var backgroundColor = "#FFFFFF";
    var borderColor = "#000000";
    var borderWeight = 4;
    var borderRadius = 5;
    var fadeOutTime = 300;
    var disableColor = "#666666";
    var disableOpacity = 40;
    var loadingImage = "relative_path_to_file/loading.gif";

    //This method initialises the modal popup
    $(".modal").click(function() {

        modalPopup( align,
            top,
            width,
            padding,
            disableColor,
            disableOpacity,
            backgroundColor,
            borderColor,
            borderWeight,
            borderRadius,
            fadeOutTime,
            source,
            loadingImage );

    });

    $(".modal_info").click(function() {

        modalPopup( align,
            top,
            width,
            padding,
            disableColor,
            disableOpacity,
            backgroundColor,
            borderColor,
            borderWeight,
            borderRadius,
            fadeOutTime,
            source_info,
            loadingImage );

    });

    $(".modal_rsvp").click(function() {

        modalPopup( align,
            top,
            width,
            padding,
            disableColor,
            disableOpacity,
            backgroundColor,
            borderColor,
            borderWeight,
            borderRadius,
            fadeOutTime,
            source_rsvp,
            loadingImage );

    });
    //This method hides the popup when the escape key is pressed
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            closePopup(fadeOutTime);
        }
    });

});