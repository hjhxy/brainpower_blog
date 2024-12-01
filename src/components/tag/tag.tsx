import React, { PropsWithChildren, useMemo } from 'react';
import { TagProps } from './type';
import { genClassNameArr } from '@/components/Common';
import Style from './index.module.scss';

const preColor = [
    'default',
    'success',
    'warning',
    'error'
]

const CLASS_MAP: Record<string, string> = {
    'we-tag': Style['we-tag'],
    'we-tag-default': Style['we-tag-default'],
    'we-tag-success': Style['we-tag-success'],
    'we-tag-error': Style['we-tag-error'],
    'we-tag-warning': Style['we-tag-warning'],
}

export const Tag: React.FC<PropsWithChildren<TagProps>> = (props) => {
    const { children, color = 'default', onClose, bordered = true } = props;

    const isPreColor = useMemo<boolean>(() => {
        return preColor.includes(color as string);
    }, [])

    // 生成类名
    const className = useMemo<string>(() => {
        const classNameArr =  genClassNameArr(
            'we-tag',
            {
                [`we-tag-${color}`]: isPreColor
            }
        )

        return classNameArr.map(item => CLASS_MAP[item]).filter(item => !!item).join(' ')
    }, [])
    
    return (
        <span
            className={ className }
            style={{
                border: bordered ? undefined : 'none'
            }}
            {...props}
        >
            <span>{children}</span>
            {
                onClose ? <span style={{marginLeft: 10}} onClick={onClose}>×</span> : null
            }
        </span>
    );
};
