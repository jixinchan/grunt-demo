$(function(){
  var $width=$('#width'),
      $height=$('#length'),
      $btnCal=$('#caculate'),
      $area=$('#area'),
      $perimeter=$('#perimeter');

  $btnCal.click(function(){
    var rect = rectangle();
    $perimeter.val(rect.perimeter($width.val(), $height.val()));
    $area.val(rect.area($width.val(), $height.val()));});
});
