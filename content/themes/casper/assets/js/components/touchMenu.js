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
            // Bind the nav close button
            document.querySelector('.nav-close').addEventListener('click', function(e) {
                _this.closeMenu();
            });
            // Bind the nav open button
            document.querySelector('.menu-button').addEventListener('click', function(e) {
                _this.openMenu();
            });
            // Bind the content button (closes nav)
            document.querySelector('.nav-cover').addEventListener('click', function(e) {
                _this.closeMenu();
            });
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
                    _this.toggleTransition(false);
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
                        _this.setTransform(document.querySelector('.nav'), delta.x, 0, 0);
                        // Update the site wrapper position
                        _this.setTransform(document.querySelector('.site-wrapper'), -1 * navWidth + delta.x, 0, 0);
                    }
                }
            }, false);
            // Register the event handler for "menu.touchend"
            document.body.addEventListener('menu.touchend', function(e) {
                // If the nav is opened
                if (_this.isNavOpened()) {
                    // Add the transition duration
                    _this.toggleTransition(true);
                    var delta = _this.getDelta(_this._touchEndPosition);
                    // If dragged over 100px within less than 100ms
                    if ((Math.abs(delta.x / 2) > _this._dragDistanceThreshold && delta.time <= _this._dragTimeThreshold) || Math.abs(delta.x) > _this._dragDistanceThreshold ) {
                        // Closes the menu
                        _this.closeMenu();
                    } else {
                        // Opens the menu
                        _this.openMenu();
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
        return  /nav-opened/.test(document.body.className);
    };

    /**
     * Enables or disables the transition duration
     *
     * @access public
     * @param bool flag             Set to true to turn on or off
     * @return void
     */
    toggleTransition(flag)
    {
        if (flag) {
            document.querySelector('.nav').style.webkitTransitionDuration = '0.3s';
            document.querySelector('.site-wrapper').style.webkitTransitionDuration = '0.3s';
        } else {
            document.querySelector('.nav').style.webkitTransitionDuration = '0s';
            document.querySelector('.site-wrapper').style.webkitTransitionDuration = '0s';
        }
    }

    /**
     * Sets the transform for the given element
     *
     * @access public
     * @param element element
     * @param int x
     * @param int y
     * @param int z
     * @return void
     */
    setTransform(element, x, y, z)
    {
        element.style.webkitTransform = 'translate3D(' + x + 'px, ' + y + 'px, ' + z + 'px)';
    }

    /**
     * Opens the nav menu
     *
     * @access public
     * @return void
     */
    openMenu()
    {
        this.setTransform(document.querySelector('.nav'), 0, 0, 0);
        this.setTransform(document.querySelector('.site-wrapper'), -240, 0, 0);
        document.body.className = document.body.className.replace('nav-closed', 'nav-opened');
    }

    /**
     * Closes the nav menu
     *
     * @access public
     * @return void
     */
    closeMenu()
    {
        // Closes the menu
        document.querySelector('.nav').removeAttribute('style');
        document.querySelector('.site-wrapper').removeAttribute('style');
        document.body.className = document.body.className.replace('nav-opened', 'nav-closed');
    };

};
