var fHeight = 0;
if (oc_path == "climate_change_panel") {
    fHeight = 390;
    fWidth = 320;
} else if (oc_path == "climate_change_panel_sm") {
    fHeight = 309;
    fWidth = 161;
}
if (window.navigator.userAgent.indexOf("MSIE")) {
	fHeight += 7;
}
document.write('<iframe id="climate_change_panel" name="oc_climate_frame" width="' + fWidth + '" height="' + fHeight + '" scrolling="no" frameborder="0" style="border: 0;" allowtransparency="true" hspace="0" vspace="0" marginheight="0" marginwidth="0" src="' + window.oc_host_url + 'resources/' + window.oc_path + '"></iframe>');
