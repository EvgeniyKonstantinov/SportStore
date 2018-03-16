import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChange } from "@angular/core";

@Directive({
    selector: "[counterOf]"
})

export class CounterDirective {

    constructor(private containter: ViewContainerRef, private template: TemplateRef<Object>){}

    @Input("counterOf") counter: number;

    ngOnChanges(changes: SimpleChange) {
        this.containter.clear();
        for(let i = 0; i < this.counter; i++) {
            this.containter.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    }
}

class CounterDirectiveContext {
    constructor(public $implicit: any){}
}