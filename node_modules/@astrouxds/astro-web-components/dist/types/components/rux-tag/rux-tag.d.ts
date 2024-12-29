import { StatusTags } from '../../common/commonTypes.module';
/**
 * @slot (default) - The text for the rux-tag
 * @part container - The container of the rux-tag's text
 */
export declare class RuxTag {
  /**
   *  Used to display a status of pass, fail, or unknown. If no status is provided or the provided status is not an accepted status type, the default is unknown.
   */
  status?: StatusTags;
  el: HTMLRuxTagElement;
  hasSlot: boolean;
  connectedCallback(): void;
  private _handleSlotChange;
  private _getValidStatus;
  render(): any;
}
