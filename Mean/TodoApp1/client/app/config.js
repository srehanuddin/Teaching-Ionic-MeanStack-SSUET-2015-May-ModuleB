System.register([], function(exports_1) {
    var config;
    return {
        setters:[],
        execute: function() {
            config = {
                componentPath: "./app/components/",
                servicePath: "./app/services/",
                todos: [
                    "A", "B", "C", "D"
                ]
            };
            exports_1("default",config);
        }
    }
});
//# sourceMappingURL=config.js.map