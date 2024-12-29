import { FunctionalComponent } from '../../../stencil-public-runtime';
export interface FormFieldMessageProps {
  helpText?: string;
  errorText?: string;
}
/**
 * @part error-text - The error text element
 * @part help-text - The help text element
 */
declare const FormFieldMessage: FunctionalComponent<FormFieldMessageProps>;
export default FormFieldMessage;
