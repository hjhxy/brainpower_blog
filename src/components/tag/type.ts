import { IComponentCommonProps } from "../Common";

export type PreviewColor = 'default' | 'success' | 'warning' | 'error'

/**
 * Component Tag相关参数
 */
export interface TagProps extends IComponentCommonProps{
    /**
     * 标签的背景颜色
     */
    color?: PreviewColor | (string & {});

    /**
     * 是否有边框
     */
    bordered?: boolean;

    /**
     * 点击关闭的回调事件
     */
    onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}