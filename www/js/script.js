var app = function(){};

app.prototype.setupRouter = function(){
    var processHash = function(){
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
    };
    
    window.addEventListener('hashchange', processHash);
    processHash();
};

app.prototype.moveNav = function(){
    var windowY = window.pageYOffset;
    var $nav = $('#page-nav');
    var $main = $('main');
    
    if ($nav.data('offset') === void 0) {
        $nav.data('height', $nav.outerHeight(true));
        $nav.data('offset', $nav.offset().top);
    }
    
    if (windowY > $nav.data('offset')) {
        $main.css('marginTop', $nav.data('height'));
        $nav.addClass('isStuck');
    } else {
        $nav.removeClass('isStuck');
        $main.css('marginTop', '');
    }
};

app.prototype.scrollTriggered = function(e){
     this.moveNav();
};

app.prototype.bindEvents = function(){
    $(document).on('scroll', this.scrollTriggered.bind(this));
};

app.prototype.init = function(){
    this.setupRouter();
    this.bindEvents();
};

window.App = new app();
App.init();