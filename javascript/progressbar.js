// code related to showing and updating progressbar shown as the image is being made

global_progressbar = null

onUiUpdate(function(){
	progressbar = gradioApp().getElementById('progressbar')
	if(progressbar!= null && progressbar != global_progressbar){
	    global_progressbar = progressbar

        var mutationObserver = new MutationObserver(function(m){
            txt2img_preview = gradioApp().getElementById('txt2img_preview')
            txt2img_gallery = gradioApp().getElementById('txt2img_gallery')

            img2img_preview = gradioApp().getElementById('img2img_preview')
            img2img_gallery = gradioApp().getElementById('img2img_gallery')

            if(txt2img_preview != null && txt2img_gallery != null){
                txt2img_preview.style.width = txt2img_gallery.clientWidth + "px"
                txt2img_preview.style.height = txt2img_gallery.clientHeight + "px"
            }

            if(img2img_preview != null && img2img_gallery != null){
                img2img_preview.style.width = img2img_gallery.clientWidth + "px"
                img2img_preview.style.height = img2img_gallery.clientHeight + "px"
            }

            window.setTimeout(requestProgress, 500)
        });
        mutationObserver.observe( progressbar, { childList:true, subtree:true })
	}
})

function requestProgress(){
    btn = gradioApp().getElementById("check_progress");
    if(btn==null) return;

    btn.click();
}
