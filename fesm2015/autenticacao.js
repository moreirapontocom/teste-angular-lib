import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class AutenticacaoService {
    constructor() { }
}
AutenticacaoService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AutenticacaoService_Factory() { return new AutenticacaoService(); }, token: AutenticacaoService, providedIn: "root" });
AutenticacaoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AutenticacaoService.ctorParameters = () => [];

class AutenticacaoComponent {
    constructor() { }
    ngOnInit() {
        console.log('Este console está dentro do projeto que eu instalei do GIT');
    }
}
AutenticacaoComponent.decorators = [
    { type: Component, args: [{
                selector: 'autentica',
                template: "<p>autentica works dentro do workspace!</p>\n\n<div class=\"teste\">s\u00F3 pra testar o estilo</div>",
                styles: [".teste{display:block;width:50px;height:50px;color:#fff;background-color:red}"]
            },] }
];
AutenticacaoComponent.ctorParameters = () => [];

class AutenticacaoModule {
}
AutenticacaoModule.decorators = [
    { type: NgModule, args: [{
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

export { AutenticacaoComponent, AutenticacaoModule, AutenticacaoService };
//# sourceMappingURL=autenticacao.js.map
