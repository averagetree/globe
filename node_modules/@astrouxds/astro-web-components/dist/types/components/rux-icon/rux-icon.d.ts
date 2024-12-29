/**
 * @part icon - the icon in rux-icon
 */
export declare class RuxIcon {
  svg: string;
  /**
   * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
   */
  size: 'extra-small' | 'small' | 'normal' | 'large' | 'auto' | string;
  /**
   * The icon name
   */
  icon: string;
  render(): any;
}
