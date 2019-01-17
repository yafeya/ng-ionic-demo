/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener, Inject } from '@angular/core';
import { CommandRepositoryToken, LoggerFactoryToken } from '../Tokens';
var InvokeCommandDirective = /** @class */ (function () {
    function InvokeCommandDirective(commandRepository, loggerFactory) {
        this.commandRepository = commandRepository;
        this.logger = loggerFactory.CreateLogger('InvokeCommand');
    }
    /**
     * @return {?}
     */
    InvokeCommandDirective.prototype.OnClicked = /**
     * @return {?}
     */
    function () {
        this.logger.Debug("Invoke command: " + this.CommandName + " with " + JSON.stringify(this.CommandParam));
        if (String.IsValid(this.CommandName)) {
            /** @type {?} */
            var command = this.commandRepository.GetCommand(this.CommandName);
            if (command != null && command.CanExecute(this.CommandParam)) {
                this.logger.Debug("Get command with name: " + this.CommandName + ", " + JSON.stringify(command));
                command.Execute(this.CommandParam);
            }
        }
    };
    InvokeCommandDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[InvokeCommand]'
                },] }
    ];
    /** @nocollapse */
    InvokeCommandDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CommandRepositoryToken,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [LoggerFactoryToken,] }] }
    ]; };
    InvokeCommandDirective.propDecorators = {
        CommandName: [{ type: Input, args: ['InvokeCommand',] }],
        CommandParam: [{ type: Input }],
        OnClicked: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return InvokeCommandDirective;
}());
export { InvokeCommandDirective };
if (false) {
    /** @type {?} */
    InvokeCommandDirective.prototype.CommandName;
    /** @type {?} */
    InvokeCommandDirective.prototype.CommandParam;
    /** @type {?} */
    InvokeCommandDirective.prototype.logger;
    /** @type {?} */
    InvokeCommandDirective.prototype.commandRepository;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52b2tlQ29tbWFuZERpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3lhZmV5YS1zeXN0ZW0tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3N5c3RlbS9jb21tYW5kL0ludm9rZUNvbW1hbmREaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFZLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sV0FBVyxDQUFDOztJQVduRSxnQ0FDNEMsaUJBQXFDLEVBQ2pELGFBQTZCO1FBRGpCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7UUFHN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQzdEOzs7O0lBR0QsMENBQVM7OztJQURUO1FBRUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQW1CLElBQUksQ0FBQyxXQUFXLGNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFHLENBQUMsQ0FBQztRQUVuRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFOztZQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVsRSxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDRCQUEwQixJQUFJLENBQUMsV0FBVyxVQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFHLENBQUMsQ0FBQztnQkFDNUYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDdEM7U0FDSjtLQUNKOztnQkE1QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzlCOzs7O2dEQVFRLE1BQU0sU0FBQyxzQkFBc0I7Z0RBQzdCLE1BQU0sU0FBQyxrQkFBa0I7Ozs4QkFQN0IsS0FBSyxTQUFDLGVBQWU7K0JBQ3JCLEtBQUs7NEJBV0wsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7aUNBdkJyQzs7U0FVYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlciwgSG9zdExpc3RlbmVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElDb21tYW5kUmVwb3NpdG9yeSB9IGZyb20gJy4vSUNvbW1hbmRSZXBvc2l0b3J5JztcclxuaW1wb3J0IHsgSUxvZ2dlckZhY3RvcnkgfSBmcm9tICcuLi9sb2dnaW5nL0lMb2dnZXJGYWN0b3J5JztcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gJy4uL2xvZ2dpbmcvSUxvZ2dlcic7XHJcbmltcG9ydCB7IENvbW1hbmRSZXBvc2l0b3J5VG9rZW4sIExvZ2dlckZhY3RvcnlUb2tlbiB9IGZyb20gJy4uL1Rva2Vucyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW0ludm9rZUNvbW1hbmRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW52b2tlQ29tbWFuZERpcmVjdGl2ZSB7XHJcbiAgICBASW5wdXQoJ0ludm9rZUNvbW1hbmQnKSBDb21tYW5kTmFtZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgQ29tbWFuZFBhcmFtOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IElMb2dnZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgQEluamVjdChDb21tYW5kUmVwb3NpdG9yeVRva2VuKSBwcml2YXRlIGNvbW1hbmRSZXBvc2l0b3J5OiBJQ29tbWFuZFJlcG9zaXRvcnksXHJcbiAgICAgICAgQEluamVjdChMb2dnZXJGYWN0b3J5VG9rZW4pIGxvZ2dlckZhY3Rvcnk6IElMb2dnZXJGYWN0b3J5KSB7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyRmFjdG9yeS5DcmVhdGVMb2dnZXIoJ0ludm9rZUNvbW1hbmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgICBPbkNsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuRGVidWcoYEludm9rZSBjb21tYW5kOiAke3RoaXMuQ29tbWFuZE5hbWV9IHdpdGggJHtKU09OLnN0cmluZ2lmeSh0aGlzLkNvbW1hbmRQYXJhbSl9YCk7XHJcblxyXG4gICAgICAgIGlmIChTdHJpbmcuSXNWYWxpZCh0aGlzLkNvbW1hbmROYW1lKSkge1xyXG4gICAgICAgICAgICBsZXQgY29tbWFuZCA9IHRoaXMuY29tbWFuZFJlcG9zaXRvcnkuR2V0Q29tbWFuZCh0aGlzLkNvbW1hbmROYW1lKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjb21tYW5kICE9IG51bGwgJiYgY29tbWFuZC5DYW5FeGVjdXRlKHRoaXMuQ29tbWFuZFBhcmFtKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuRGVidWcoYEdldCBjb21tYW5kIHdpdGggbmFtZTogJHt0aGlzLkNvbW1hbmROYW1lfSwgJHtKU09OLnN0cmluZ2lmeShjb21tYW5kKX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmQuRXhlY3V0ZSh0aGlzLkNvbW1hbmRQYXJhbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=