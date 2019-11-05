import * as React from "react";
import { ReactNode } from "react";

const style = {
    display: 'flex',
}

type Props = {
    children: ReactNode | Element[],
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
    flexGrow?: number;
    width?: string;
}

export default ({ children, ...styleProps }: Props) => (
    <div style={{ ...style, ...styleProps }}>
        {children}
    </div>
)