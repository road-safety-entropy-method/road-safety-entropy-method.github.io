import {CSSProperties} from "react";

export const methodDivStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
}

export const methodPStyle: CSSProperties = {
    fontSize: '20px'
}

export const methodPCenterStyle: CSSProperties = {
    ...methodPStyle,
    ...{
        textAlign: 'center'
    }
}