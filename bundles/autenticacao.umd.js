(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('autenticacao', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.autenticacao = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var AutenticacaoService = /** @class */ (function () {
        function AutenticacaoService() {
        }
        return AutenticacaoService;
    }());
    AutenticacaoService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function AutenticacaoService_Factory() { return new AutenticacaoService(); }, token: AutenticacaoService, providedIn: "root" });
    AutenticacaoService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AutenticacaoService.ctorParameters = function () { return []; };

    var AutenticacaoComponent = /** @class */ (function () {
        function AutenticacaoComponent() {
        }
        AutenticacaoComponent.prototype.ngOnInit = function () {
            console.log('Este console está dentro do projeto que eu instalei do GIT');
        };
        return AutenticacaoComponent;
    }());
    AutenticacaoComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'autentica',
                    template: "<p>autentica works dentro do workspace!</p>\n\n<div class=\"teste\">s\u00F3 pra testar o estilo</div>",
                    styles: [".teste{display:block;width:50px;height:50px;color:#fff;background-color:red}"]
                },] }
    ];
    AutenticacaoComponent.ctorParameters = function () { return []; };

    var AutenticacaoModule = /** @class */ (function () {
        function AutenticacaoModule() {
        }
        return AutenticacaoModule;
    }());
    AutenticacaoModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AutenticacaoComponent],
                    imports: [],
                    exports: [AutenticacaoComponent]
                },] }
    ];

    /*
     * Public API Surface of autenticacao
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AutenticacaoComponent = AutenticacaoComponent;
    exports.AutenticacaoModule = AutenticacaoModule;
    exports.AutenticacaoService = AutenticacaoService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=autenticacao.umd.js.map
