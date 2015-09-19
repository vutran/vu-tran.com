import utils from './utils.js';

export default class touchMenu {

    constructor() {
        let _this = this;

        // Properties
        this._touchStartPosition = 0;
        this._touchMovePosition = 0;
        this._touchEndPosition = 0;
        this._dragDistanceThreshold = 150;
        this._dragTimeThreshold = 200;
        this._dragType = false;

        // Bind menu open/close triggers
        utils.listen(utils.q('.nav-close'), 'click', e => _this.closeMenu());
        utils.listen(utils.q('.menu-button'), 'click', e => _this.openMenu());
        utils.listen(utils.q('.nav-cover'), 'click', e => _this.closeMenu());

        // If touch support is present
        if ( 'ontouchstart' in document.documentElement ) {
            // Create custom events
            this._touchStartEvent = new Event('menu.touchstart');
            this._touchMoveEvent = new Event('menu.touchmove');
            this._touchEndEvent = new Event('menu.touchend');

            // Add the touchstart event
            utils.listen(document.body, 'touchstart', e => {
                _this._touchStartPosition = _this.getPosition(e.changedTouches[0]);
                // Run the document event "menu.touchstart"
                utils.dispatch(_this._touchStartEvent);
            });
            // Add the touchmove event
            utils.listen(document.body, 'touchmove', e => {
                // Set the touch move position
                _this._touchMovePosition = _this.getPosition(e.changedTouches[0]);
                // Run the document event "menu.touchend"
                utils.dispatch(_this._touchMoveEvent);
            });
            // Add the touchend event
            utils.listen(document.body, 'touchend', e => {
                // Set the touch end position
                _this._touchEndPosition = _this.getPosition(e.changedTouches[0]);
                // Run the document event "menu.touchend"
                utils.dispatch(_this._touchEndEvent);
            });

            // Register the event handler for "menu.touchstart"
            utils.listen(document.body, 'menu.touchstart', e => {
                // Set the drag type based on if the user is opening or closing
                if (_this.isNavOpened()) {
                    _this._dragType = 'closing';
                } else {
                    _this._dragType = 'opening';
                }
                // Remove the transition duration
                _this.toggleTransition(false);
            }, false);
            // Register the event handler for "menu.touchmove"
            utils.listen(document.body, 'menu.touchmove', e => {
                // If the nav is opened
                if (_this._dragType === 'closing' && _this.isNavOpened()) {
                    let delta = _this.getDelta(_this._touchMovePosition);
                    // Only update if delta is positive
                    if (delta.x > 0) {
                        let navWidth = utils.q('.nav').clientWidth;
                        // Update the nav position
                        _this.setTransform(utils.q('.nav'), delta.x, 0, 0);
                        // Update the site wrapper position
                        _this.setTransform(utils.q('.site-wrapper'), -1 * navWidth + delta.x, 0, 0);
                    }
                } else if (_this._dragType === 'opening') {
                    let delta = _this.getDelta(_this._touchMovePosition);
                    // Only update if delta is negative
                    if (delta.x < 0) {
                        let navWidth = utils.q('.nav').clientWidth;
                        // Show the menu
                        if (!_this.isNavOpened()) {
                            utils.removeClass(document.body, 'nav-closed');
                            utils.addClass(document.body, 'nav-opened');
                        }
                        // Update the nav position
                        _this.setTransform(utils.q('.nav'), (navWidth + delta.x), 0, 0);
                        // Update the site wrapper position
                        _this.setTransform(utils.q('.site-wrapper'), delta.x, 0, 0);
                    }
                }
            }, false);
            // Register the event handler for "menu.touchend"
            utils.listen(document.body, 'menu.touchend', e => {
                // If the nav is opened
                if (_this._dragType === 'closing' && _this.isNavOpened()) {
                    // Add the transition duration
                    _this.toggleTransition(true);
                    // Retrieve the delta positions
                    let delta = _this.getDelta(_this._touchEndPosition);
                    // Only update if delta is positive
                    if (delta.x > 0) {
                        // If dragged over 100px within less than 100ms
                        if ((Math.abs(delta.x / 2) > _this._dragDistanceThreshold && delta.time <= _this._dragTimeThreshold) || Math.abs(delta.x) > _this._dragDistanceThreshold ) {
                            // Closes the menu
                            _this.closeMenu();
                        } else {
                            // Opens the menu
                            _this.openMenu();
                        }
                    }
                } else if (_this._dragType === 'opening') {
                    // Add the transition duration
                    _this.toggleTransition(true);
                    // Retrieve the delta positions
                    let delta = _this.getDelta(_this._touchEndPosition);
                    // Only update if delta is negative
                    if (delta.x < 0) {
                        // If dragged over 100px within less than 100ms
                        if ((Math.abs(delta.x / 2) > _this._dragDistanceThreshold && delta.time <= _this._dragTimeThreshold) || Math.abs(delta.x) > _this._dragDistanceThreshold ) {
                            // Opens the menu
                            _this.openMenu();
                        } else {
                            // Closes the menu
                            _this.closeMenu();
                        }
                    }
                }
                // Reset the drag type
                _this._dragType = false;
            }, false);
        }
    };

    /**
     * Retrieve the touch position/time
     *
     * @access public
     * @param Touch touch
     * @return void
     */
    getPosition(touch)
    {
        return {
            time: new Date().getTime(),
            x: parseInt(touch.clientX, 10),
            y: parseInt(touch.clientY, 10)
        };
    }

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
        return utils.hasClass(document.body, 'nav-opened');
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
            utils.q('.nav').style.webkitTransitionDuration = '0.3s';
            utils.q('.site-wrapper').style.webkitTransitionDuration = '0.3s';
        } else {
            utils.q('.nav').style.webkitTransitionDuration = '0s';
            utils.q('.site-wrapper').style.webkitTransitionDuration = '0s';
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
        element.style.webkitTransform = `translate3D(${x}px, ${y}px, ${z}px)`;
    }

    /**
     * Opens the nav menu
     *
     * @access public
     * @return void
     */
    openMenu()
    {
        this.setTransform(utils.q('.nav'), 0, 0, 0);
        this.setTransform(utils.q('.site-wrapper'), -240, 0, 0);
        // Replace classes
        utils.removeClass(document.body, 'nav-closed');
        utils.removeClass(document.body, 'nav-opened');
        utils.addClass(document.body, 'nav-opened');
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
        utils.q('.nav').removeAttribute('style');
        utils.q('.site-wrapper').removeAttribute('style');
        // Replace classes
        utils.removeClass(document.body, 'nav-closed');
        utils.removeClass(document.body, 'nav-opened');
        utils.addClass(document.body, 'nav-closed');
    };

};
