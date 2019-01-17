export interface ICommand {
    CanExecute(param: any): boolean;
    Execute(param: any): void;
}
export declare class DelegateCommand implements ICommand {
    private canExecute;
    private action;
    constructor(canExecute: (param: any) => boolean, action: (param: any) => void);
    CanExecute(param: any): boolean;
    Execute(param: any): void;
    /**
     * Create a command from given actions.
     * @param action executed action
     * @param canExecute can execue action
     */
    static From(action: (param?: any) => void, canExecute?: (param?: any) => boolean): ICommand;
}
