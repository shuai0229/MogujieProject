var $ = require("../lib/jquery-2.1.1.min.js");
var swiper = new Swiper('.swiper-container');
$(function() {
	$('.datails_nav_tab').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	})
});
$('.datails_footer_cart_span').click(function() {
	$('.datails_zhe').show();
});
$('.datails_xiaban_goods_right_jia_ico').click(function() {
	$('.datails_zhe').hide();
	if('.datails_zhe') {

	}
});