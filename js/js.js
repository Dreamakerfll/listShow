
function PrefixInteger(num, length) {
    return (Array(length).join('0') + num).slice(-length);
}

var baseUrl = 'images/items/投票界面-',
    loader = new PxLoader();

// add 100 images to the queue
for(var i=0; i < 22; i++) {
    // this time we'll create a PxLoaderImage instance instead of just
    // giving the loader the image url
    var number = 9+i;
    var pre = PrefixInteger(number,2);
    var pxImage = new PxLoaderImage(baseUrl + pre + ".png");

    // we can add our own properties for later use
    pxImage.imageNumber = i + 1;

    loader.add(pxImage);
}

// callback that runs every time an image loads
loader.addProgressListener(function(e) {
    console.log(e.resource.imageNumber);

    var process = parseInt(e.completedCount/e.totalCount*100);
    $('.process').css({'width':process+"%"});
    $('.touch_num').text(process+"%");
    if(process == 100){
        $('.mask').hide();
    }

});

loader.start();


$(function(){
    $('.appointment_status').click(function () {
        if(this.className.split(" ")[1] == 'go_appointment'){
            $(this).removeClass("go_appointment").addClass("appointmented");
        }else{
            $(this).removeClass("appointmented").addClass("go_appointment");
        }
    });

    $('.submit_div').click(function () {
        if(this.className.split(" ")[1] == 'submit'){
            $(this).removeClass("submit").addClass("submit_dis");
        }
    });
});

