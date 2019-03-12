$(function(){
  var $width=$('#width'),
      $length=$('#length'),
      $btnCal=$('#caculate'),
      $area=$('#area'),
      $perimeter=$('#perimeter');

  $btnCal.click(function(){
    var rect = new rectangle($width.val(),$length.val());
    $area.val(rect.area());
    $perimeter.val(rect.perimeter());
  });
});
;/* exported Rectangle */
function rectangle(width,height) {
  var w = Number(width),
      h = Number(height);

  this.area = function() {
    return w * h;
            
  };

  this.perimeter = function() {
    return 2 * (w + h);
            
  };

}
