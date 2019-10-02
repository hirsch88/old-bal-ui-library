export declare class BalButton {
    /**
     * The theme type of the button. Given by bulma our css framework.
     */
    type: "is-primary" | "is-info";
    /**
     * If `true` the button is disabled
     */
    disabled: boolean;
    /**
     * If `true` the label is hidden and a loading spinner is shown instead.
     */
    loading: boolean;
    render(): any;
}
