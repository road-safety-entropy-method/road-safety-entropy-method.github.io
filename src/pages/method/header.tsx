import {CSSProperties, ReactNode} from "react";
import {Tag} from "antd";

type THeaderProps = {
    tag: string;
    children: ReactNode;
}

export const Header = ({ tag, children }: THeaderProps) => {
    const headerStyle: CSSProperties = {
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        marginBottom: '24px'
    }

    const pHeaderStyle: CSSProperties = {
        fontSize: '24px',
        fontWeight: 500
    }

    const tagStyle: CSSProperties = {
        fontSize: '24px',
        padding: '12px 16px',
    }

    return (
        <div style={headerStyle}>
            <Tag style={tagStyle} color={'processing'}>{tag}</Tag>
            <p style={pHeaderStyle}>{children}</p>
        </div>
    );
};