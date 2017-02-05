
var gdpData = {
};
				jQuery(function(){
					jQuery('#geolocate_show_world').vectorMap({
						map: 'world_mill_en',
						backgroundColor: '#A1A1A1',
						series: {
						    regions: [{
						      values: gdpData,
							  hoverOpacity: 0.7,
    						  hoverColor: false,
						      scale: ['#C8EEFF', '#000066'],
						      normalizeFunction: 'polynomial'
						    }]
						},
						onRegionLabelShow: function(e, el, code){
						    el.html(el.html()+' ('+gdpData[code]+')');
						}
					});
				}) ; 
				
			