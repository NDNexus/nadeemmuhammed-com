
import { Icon } from "@iconify/react";

type AppIconProps = {
    icon: string;
    className?: string;
    width?: number;
    height?: number;
};

export function AppIcon({
    icon,
    className,
    width = 20,
    height = 20,
}: AppIconProps) {
    return (
        <Icon
            icon={icon}
            width={width}
            height={height}
            className={className}
        />
    );
}