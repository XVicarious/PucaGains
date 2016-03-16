var total = 0;
$($("tr td:nth-child(5) div span").get().reverse()).each(function() {
  var thisT = $(this).text().substring(2);
  thisT = thisT.substring(0, thisT.length - 1);
  total += Number.parseInt(thisT);
});
alert(total);
