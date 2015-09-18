export default class touchMenu {

    constructor() {
        let _this = this;

        // Properties
        this._touchStartPosition = 0;
        this._touchMovePosition = 0;
        this._touchEndPosition = 0;
        this._dragDistanceThreshold = 150;
        this._dragTimeThreshold = 200;

        // Creat custom events
        this._touchStartEvent = new Event('menu.touchstart');
        this._touchMoveEvent = new Event('menu.touchmove');
        this._touchEndEvent = new Event('menu.touchend');

        // If touch support is present
        if ( 'ontouchstart' in document.documentElement ) {
            // Add the touchstart event
            document.body.addEventListener('touchstart', function(e) {
                var touch = e.changedTouches[0];
                // Set the touch start position
                _this._touchStartPosition = {
                    time: new Date().getTime(),
                    x: parseInt(touch.clientX, 10),
                    y: parseInt(touch.clientY, 10)
                };
                // Run the document event "menu.touchstart"
                document.body.dispatchEvent(_this._touchStartEvent);
            });
            // Add the touchmove event
            document.body.addEventListener('touchmove', function(e) {
                var touch = e.changedTouches[0];
                // Set the touch move position
                _this._touchMovePosition = {
                    time: new Date().getTime(),
                    x: parseInt(touch.clientX, 10),
                    y: parseInt(touch.clientY, 10)
                };
                // Run the document event "menu.touchend"
                document.body.dispatchEvent(_this._touchMoveEvent);
            });
            // Add the touchend event
            document.body.addEventListener('touchend', function(e) {
                var touch = e.changedTouches[0];
                // Set the touch end position
                _this._touchEndPosition = {
                    time: new Date().getTime(),
                    x: parseInt(touch.clientX, 10),
                    y: parseInt(touch.clientY, 10)
                };
                // Run the document event "zoe.menu.touchend"
                document.body.dispatchEvent(_this._touchEndEvent);
            });
            // Register the event handler for "menu.touchstart"
            document.body.addEventListener('menu.touchmove', function(e) {
                // If the nav is opened
                if (_this.isNavOpened()) {
                    // Remove the transition duration
                    $('.nav').css('transition-duration', '0');
                    $('.site-wrapper').css('transition-duration', '0');
                }
            }, false);
            // Register the event handler for "menu.touchmove"
            document.body.addEventListener('menu.touchmove', function(e) {
                // If the nav is opened
                if (_this.isNavOpened()) {
                    var delta = _this.getDelta(_this._touchMovePosition);
                    // Only update if delta is positive
                    if (delta.x > 0) {
                        var navWidth = $('.nav').width();
                        // Update the nav position
                        $('.nav').css('transform', 'translate3D(' + delta.x + 'px, 0, 0)');
                        // Update the site wrapper position
                        $('.site-wrapper').css('transform', 'translate3D(' + (-1 * navWidth + delta.x) + 'px, 0, 0)');
                    }
                }
            }, false);
            // Register the event handler for "menu.touchend"
            document.body.addEventListener('menu.touchend', function(e) {
                // If the nav is opened
                if (_this.isNavOpened()) {
                    // Add the transition duration
                    $('.nav').css('transition-duration', '0.3s');
                    $('.site-wrapper').css('transition-duration', '0.3s');
                    var delta = _this.getDelta(_this._touchEndPosition);
                    // If dragged over 100px within less than 100ms
                    if ((Math.abs(delta.x / 2) > _this._dragDistanceThreshold && delta.time <= _this._dragTimeThreshold) || Math.abs(delta.x) > _this._dragDistanceThreshold ) {
                        // Closes the menu
                        $('.nav, .site-wrapper').removeAttr('style');
                        $('body').toggleClass('nav-opened nav-closed');
                    } else {
                        // Opens the menu
                        $('.nav').css('transform', 'translate3D(0, 0, 0)');
                        $('.site-wrapper').css('transform', 'translate3D(-240px, 0, 0)');
                    }
                }
            }, false);
        }
    };

    /**
     * Return an delta object of the touch positions
     *
     * @param object currentPosition
     * @ereturn object
     */
    getDelta(currentPosition)
    {
        return {
            time: currentPosition.time - this._touchStartPosition.time,
            x: currentPosition.x - this._touchStartPosition.x,
            y: currentPosition.y - this._touchStartPosition.y
        };
    };

    /**
     * Checks to see if the nav is opened
     *
     * @access public
     * @return bool
     */
    isNavOpened()
    {
        return $('body').hasClass('nav-opened');
    };

};
