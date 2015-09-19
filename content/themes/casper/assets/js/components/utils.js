export default class utils {

    /**
     * Queries for the first element in the document (alias: document.querySelector())
     *
     * @access public
     * @param string selector
     * @return element
     */
    static q(selector)
    {
        return document.querySelector(selector);
    }

    /**
     * Registers a callback function to listen for a given event (alias: document.body.addEventListener())
     *
     * @access public
     * @param element element
     * @param string event
     * @param function callback
     * @param bool useCapture
     * @return void
     */
    static listen(element, event, callback, useCapture)
    {
        return element.addEventListener(event, callback, useCapture);
    }

    /**
     * Dispatches the given Event
     *
     * @access public
     * @param Event event
     * @return void
     */
    static dispatch(event)
    {
        document.body.dispatchEvent(event);
    }

    /**
     * Checks if the given element has the class
     *
     * @access public
     * @param element element
     * @param string className
     * @return bool
     */
    static hasClass(element, className)
    {
        var r = new RegExp(className);
        return r.test(element.className);
    }

    /**
     * Removes the CSS class to the given element
     *
     * @access public
     * @param element element
     * @param string className
     * @return void
     */
    static removeClass(element, className)
    {
        element.className = element.className.replace(className, '');
    }

    /**
     * Appends the CSS class to the given element
     *
     * @access public
     * @param element element
     * @param string className
     * @return void
     */
    static addClass(element, className)
    {
        element.className += ` ${className}`;
    }

}
