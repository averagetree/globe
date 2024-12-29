import { Classification } from '../../common/commonTypes.module';
/**
 * @part footer - the footer banner
 * @part tag - the container for the tag
 * @part header - the container for the header banner
 *
 */
export declare class RuxClassificationMarking {
  el: HTMLRuxClassificationMarkingElement;
  /**
   * Defines which classification marking will be displayed.
   */
  classification: Classification;
  /**
   * Allows additional text labels to be added to the marking
   */
  label?: string;
  /**
   * Declares the marking as a `tag` rather than the default banner style
   */
  tag: boolean;
  isWrapper: boolean;
  private _handleSlotChange;
  connectedCallback(): void;
  disconnectedCallback(): void;
  get type(): 'tag' | 'banner';
  private _getDisplayData;
  render(): any;
}
