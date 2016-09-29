var GOOGLE_API_KEY = "AIzaSyDTwhpnhPO-drFV08PBSECXtTUwyCu833w";

var idNum = 0;

function postInfo(locationData) {
  console.log(locationData.results[0].geometry.location.lat)

  var template = $(".template").html();
  templat = template.replace("@@IDNUM@@", idNum);
  template = template.replace("@@LOCATION@@", locationData.results[0].address_components[1].short_name);
  template = template.replace("@@LATITUDE@@", locationData.results[0].geometry.location.lat);
  template = template.replace("@@LONGITUDE@@", locationData.results[0].geometry.location.lng);
  $(".container").append(template);
  }

  idNum++;
});
}

function getLocation(location) {
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=" + GOOGLE_API_KEY;
  $.ajax({
    url: url,
    success: postInfo
  });
}


$(function() {
  $(".addBtn").on("click", function() {
    var location = $(.locInput').val();
    if (location.length != 5) {
      $(".locInput").val("");
      return;
    }
    else {
      getLocation(location);
      $(".locInput").val("").focus();
      console.log(location);
    }
  });
