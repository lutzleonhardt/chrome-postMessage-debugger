var postMessageDebugger = {
    init: function () {
        addEventListener("message", function (event) {

            console.groupCollapsed('Window "' + document.title + "' received message: ")
            console.log(event.data)
            console.groupCollapsed('JSON')
            console.log(JSON.stringify(event.data))
            console.groupEnd();
            console.groupEnd();
        })
    }
}

postMessageDebugger.init()
