/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
      _
  ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */


$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();



    $("#container").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // =========================
    // on event section      ===
    //==========================

    //
    // anime({
    //     targets: '.morphing-demo .polymorph',
    //     points: [
    //         { value: [
    //                 '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
    //                 '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
    //         },
    //         { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
    //         { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
    //         { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
    //     ],
    //     easing: 'easeOutQuad',
    //     duration: 2000,
    //     loop: true
    // });
    //


    let tl = gsap.timeline();
/*

    $('#momo').click(function () {

        console.log('momo');
    })

*/

    $('.menu').click(function (e) {


        // e.preventDefault();
        // e.stopPropagation();



        console.log('open clicked');
            if(clicker === true){


                $('#menu').addClass('on');
                $(this).fadeOut();


                tl.to('#menu > div',1,{
                    y:0,
                    opacity:1,
                    stagger: 0.1,
                    onComplete: ()=>{
                        clicker = false;
                    }
                })


            }

            console.log(clicker);


    })




    $('.close').click(function (e) {
        e.preventDefault();
        e.stopPropagation();



        console.log('close clicked');

             if(clicker === false){

                 $('#menu').removeClass('on');
                 $('.menu').fadeIn();

                 tl.to('#menu > div',1,{

                     y:100,
                     opacity:0,
                     stagger: -0.1,
                     onComplete: ()=>{
                         clicker = true;
                     }
                 })

                 console.log(clicker);
             }

    })






});













