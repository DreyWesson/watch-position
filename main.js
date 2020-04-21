if (navigator.geolocation) {
  console.log("Geolocation is supported!");
} else {
  console.log("Geolocation is not supported for this Browser/OS version yet.");
}

window.onload = function () {
  var startPos;

  navigator.geolocation.getCurrentPosition(
    function ({ coords }) {
      startPos = coords;
      document.getElementById("startLat").innerHTML = startPos.latitude;
      document.getElementById("startLon").innerHTML = startPos.longitude;
    },
    function (error) {
      console.log("Error occurred. Error code: " + error.code);
    }
  );

  navigator.geolocation.watchPosition(function ({ coords }) {
    document.getElementById("currentLat").innerHTML = coords.latitude;
    document.getElementById("currentLon").innerHTML = coords.longitude;
    document.getElementById("distance").innerHTML = calculateDistance(
      startPos.latitude,
      startPos.longitude,
      coords.latitude,
      coords.longitude
    );
  });

  function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = (lat2 - lat1).toRad();
    var dLon = (lon2 - lon1).toRad();
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1.toRad()) *
        Math.cos(lat2.toRad()) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }
  Number.prototype.toRad = function () {
    return (this * Math.PI) / 180;
  };
};
