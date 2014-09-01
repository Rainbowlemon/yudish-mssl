var app = function(){};

app.prototype.onHashChange = function(){
    var hash = location.hash || '#home';
    var activeClass = hash.substr(1) + '-page';
    var $nav = $('#page-nav');

    $('.active-page').removeClass('active-page');
    $nav.find('.active').removeClass('active');

    var $target = $('#' + activeClass),
        $targetNav = $nav.find('a[href="'+ hash +'"]');

    if ($target.length === 0) {
        $('#error-page').addClass('active-page');
    } else {
        $target.addClass('active-page');
        $targetNav.addClass('active');
    }
    document.body.className = activeClass;
    
    //Now scroll to top if not already at top
    if ($nav.hasClass('isStuck')) {
        setTimeout(function(){
            $('html,body').animate({
                'scrollTop': $nav.data('offset')
            }, 250);
        },3);
    }
};

app.prototype.setupRouter = function(){
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    this.onHashChange();
};

app.prototype.moveNav = function(){
    var windowY = window.pageYOffset;
    var $nav = $('#page-nav');
    var $main = $('main');
    
    if ($nav.data('offset') === void 0) {
        $nav.data('height', $nav.outerHeight(true));
        $nav.data('offset', $nav.offset().top);
    }
    
    if (windowY > $nav.data('offset') && !$('html').hasClass('mobile')) {
        $main.css('marginTop', $nav.data('height'));
        $nav.addClass('isStuck');
    } else {
        $nav.removeClass('isStuck');
        $main.css('marginTop', '');
    }
};

app.prototype.setMediaClass = function(){
    var width = $(window).outerWidth();
    
    if (width < 500){
        $('html').addClass('mobile');
    } else {
        $('html').removeClass('mobile');
    }
};

app.prototype.scrollTriggered = function(){
     this.moveNav();
};

app.prototype.resizeTriggered = function(e) {
    this.setMediaClass();
};

app.prototype.bindEvents = function(){
    $(document).on('scroll', this.scrollTriggered.bind(this));
    $(window).on('resize', this.resizeTriggered.bind(this));
    this.resizeTriggered();
};

app.prototype.init = function(){
    this.setupRouter();
    this.bindEvents();
};

window.App = new app();
App.init();