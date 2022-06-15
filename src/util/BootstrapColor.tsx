export enum BootstrapColor {
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
    muted,
    white
}

export const EnumToString = (color: BootstrapColor): String => {
    switch (color) {
        case BootstrapColor.primary:
            return "primary";
        case BootstrapColor.secondary:
            return "secondary";
        case BootstrapColor.success:
            return "success";
        case BootstrapColor.danger:
            return "danger";
        case BootstrapColor.warning:
            return "warning";
        case BootstrapColor.info:
            return "info";
        case BootstrapColor.light:
            return "light";
        case BootstrapColor.dark:
            return "dark";
        case BootstrapColor.muted:
            return "muted";
        case BootstrapColor.white:
            return "white";
        default:
            return "light";
    }
}