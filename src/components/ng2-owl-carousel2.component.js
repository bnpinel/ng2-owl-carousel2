"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:quotemark
var core_1 = require("@angular/core");
// tslint:disable-next-line:quotemark
var ng2_owl_carousel2_options_1 = require("../options/ng2-owl-carousel2.options");
exports.CarouselOptions = ng2_owl_carousel2_options_1.CarouselOptions;
exports.ScreenResolutionMap = ng2_owl_carousel2_options_1.ScreenResolutionMap;
exports.MergefitMap = ng2_owl_carousel2_options_1.MergefitMap;
var Ng2OwlCarouselComponent = (function () {
    function Ng2OwlCarouselComponent() {
        this.useAttributeSelector = false;
        this.defaultOptions = new ng2_owl_carousel2_options_1.CarouselOptions();
    }
    Ng2OwlCarouselComponent.prototype.ngOnInit = function () {
        if (this.options) {
            if (!(this.options instanceof ng2_owl_carousel2_options_1.CarouselOptions)) {
                this.options = Object.assign(this.defaultOptions, this.options);
            }
        }
    };
    Ng2OwlCarouselComponent.prototype.ngAfterViewInit = function () {
        var $carousel = $(".owl-carousel");
        /* Handle mouse scroll */
        if (this.options.mouseScroll) {
            // tslint:disable-next-line:typedef
            var onScrollHandler = function (e) {
                if (e.deltaY > 0) {
                    $carousel.trigger("next.owl");
                }
                else {
                    $carousel.trigger("prev.owl");
                }
                e.preventDefault();
            }.bind(this);
            $carousel.on("mousewheel", ".owl-stage", onScrollHandler);
        }
        $carousel.owlCarousel(this.options);
    };
    __decorate([
        core_1.Input()
    ], Ng2OwlCarouselComponent.prototype, "useAttributeSelector", void 0);
    __decorate([
        core_1.Input()
    ], Ng2OwlCarouselComponent.prototype, "options", void 0);
    Ng2OwlCarouselComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:quotemark
            selector: 'ng2-owl-carousel2',
            template: "<div *ngIf=\"useAttributeSelector\">\n  <ng-content class=\"owl-carousel\" select=\"[carousel-item]\"> </ng-content>\n  </div>\n  <div *ngIf=\"!useAttributeSelector\">\n  <ng-content select=\"carousel-item\"> </ng-content>\n  </div>"
        })
    ], Ng2OwlCarouselComponent);
    return Ng2OwlCarouselComponent;
}());
exports.Ng2OwlCarouselComponent = Ng2OwlCarouselComponent;
