var $ = require("../lib/jquery-2.1.1.min.js");
$(function() {
	var page = {
		fashionInit: function() {
			this.fashow();
			this.faTab();
		},
		fashow: function() {
			$(".fashion-main").eq(0).show();
		},
		faTab: function() {
			$(".colligate-tab").on("click", ".tab", function() {
				$(this).addClass("active").siblings().removeClass("active");
				$(".fashion-main").eq($(this).index()).show().siblings(".fashion-main").hide();
			})
		}
	}
	page.fashionInit();
})