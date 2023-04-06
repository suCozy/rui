/** Transient처리한 Styled-Component의 Props을 풀어줌
 * @example { $color: string; className?: string } => { color: string; className?: string; }
 */
export type ConvertTransientProps<T> = {
  [K in keyof T as K extends `$${infer P}` ? P : K]: T[K];
};
