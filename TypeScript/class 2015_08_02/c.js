var abc;
(function (abc) {
    function fn1() {
        alert(1);
    }
})(abc = exports.abc || (exports.abc = {}));
