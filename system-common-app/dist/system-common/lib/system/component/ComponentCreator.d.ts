import { ViewContainerRef, ComponentFactoryResolver, ComponentRef, Type, InjectionToken } from '@angular/core';
import { IComponentCreator } from './IComponentCreator';
export declare const ComponentCreatorToken: InjectionToken<{}>;
export declare class ComponentCreator implements IComponentCreator {
    private mViewContainer;
    private mComponentFactoryResolver;
    ViewContainer: ViewContainerRef;
    ComponentFactoryResolver: ComponentFactoryResolver;
    /**
    * Initialize
    */
    Initialize(viewContainer: ViewContainerRef, resolver: ComponentFactoryResolver): void;
    CreateComponent(componentType: Type<{}>, viewContainer?: ViewContainerRef): ComponentRef<{}>;
}
