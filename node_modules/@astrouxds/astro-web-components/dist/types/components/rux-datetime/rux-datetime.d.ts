export declare class RuxDatetime {
  /**
   * The date time to be formatted
   */
  date: Date | string;
  /**
   * The locale
   */
  locale: string;
  /**
   * Format options for weekday
   */
  weekday?: 'narrow' | 'short' | 'long';
  /**
   * Format options for era
   */
  era?: 'narrow' | 'short' | 'long';
  /**
   * Format options for year
   */
  year?: 'numeric' | '2-digit';
  /**
   * Format options for month
   */
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  /**
   * Format options for day
   */
  day?: 'numeric' | '2-digit';
  /**
   * Format options for hour
   */
  hour?: 'numeric' | '2-digit';
  /**
   * Format options for minute
   */
  minute?: 'numeric' | '2-digit';
  /**
   * Format options for second
   */
  second?: 'numeric' | '2-digit';
  /**
   * Format options for Timezone name
   */
  timeZoneName?: 'short' | 'long';
  /**
   * Format options for Timezone
   */
  timeZone?: string;
  /**
   * Display date in 12 hour time.
   */
  hour12: boolean;
  render(): string;
}
