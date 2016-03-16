var total = 0;
$($("tr td:nth-child(5) div span").get().reverse()).each(function() {
  var thisT = $(this).text();
  thisT = thisT.substring(2, thisT.length - 1);
  total += Number.parseInt(thisT);
});
alert(total);
