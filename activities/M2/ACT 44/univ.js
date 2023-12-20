$(document).ready(function() {
    // student counter
    // initial count
    let studentCount = Number($("#student-count").text());
  
    // click + 1
    $("#studentButton").click(function() {
      studentCount++;
      $('#student-count').text(studentCount);
    });


     // class enrollment
    $(".subject-item").click(function() {
        // background set to green
        $(this).toggleClass("subject-selected");
    });
    
});
  