function checkList() {
  var host = $("#host-input")[0].value;
  if ($.inArray(host, hostList) != -1) {
    $("#host-check-form-div").css("display", "none");
    $("#rsvp-form-div").css("display", "block");
    $("#rsvp-form")[0].party_rsvp_host.value = host;
  }
}

function attachButtonHandler() {
  console.log("inside attachButtonHandler()");

  $("#check-list-button").click(function () {
    console.log("inside anonymous function")
    checkList();
  })
}

$(function () {

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
  var loadingImage = "/assets/loading.gif";

  //This method initialises the modal popup
  $(".modal").click(function () {

    modalPopup(align,
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
        loadingImage);

  });

  $(".modal_info").click(function () {

    modalPopup(align,
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
        loadingImage);

  });

  $(".modal_rsvp").click(function () {

    modalPopup(align,
        top,
        width,
        padding,
        disableColor,
        disableOpacity,
        backgroundColor,
        borderColor,
        borderWeight,
        borderRadius,
        0,
        source_rsvp,
        loadingImage);

    setTimeout('attachButtonHandler()', 1500);

  });
  //This method hides the popup when the escape key is pressed
  $(window).keydown(function (e) {
    if (e.keyCode == 27) {
      closePopup(fadeOutTime);
    }
    if (e.keyCode == 13) {
      e.preventDefault();
      checkList();
    }
  });
});