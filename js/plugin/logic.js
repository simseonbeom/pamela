/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */
function Logic () {

    console.log("%c by.",'background:black; color:white;');
    console.log(
        "     _\n" +
        " ___(_)_     _\n" +
        "/ __| | \\   / |\n" +
        "\\__ \\ |  \\_/  |\n" +
        "|___/_|_|\\_/|_|\n" +
        "\n" +
        "Version : 1.5.0\n" +
        "Author  : SeonBeom Sim\n" +
        "Website : https://github.com/simseonbeom");


    console.log("%c - KindTiger - ",'background:black; color:white;');


    // class delay logic event
    $.fn.queueAddClass = function(className) {
        this.queue('fx', function(next) {
            $(this).addClass(className);
            next();
        });
        return this;
    };
    $.fn.queueRemoveClass = function(className) {
        this.queue('fx', function(next) {
            $(this).removeClass(className);
            next();
        });
        return this;
    };
    $.fn.queuetoggleClass = function(className) {
        this.queue('fx', function(next) {
            $(this).toggleClass(className);
            next();
        });
        return this;
    };




}