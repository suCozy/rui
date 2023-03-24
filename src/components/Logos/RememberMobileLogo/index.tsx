import { RememberLogoProps } from '../types';

export const RememberMobileLogo = ({
  className,
  color = 'white',
  height = 20,
  customElement,
  ref,
  ...props
}: RememberLogoProps) => (
  <div
    {...props}
    ref={ref}
    style={{
      width: 'fit-content',
      height,
      display: 'flex',
      alignItems: 'flex-end',
    }}
  >
    <svg
      className={className}
      height="100%"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M7.40069 0H0V19.9594H5.52411V1.36773C7.96998 1.71095 9.24353 2.86611 9.74532 4.82507C10.1077 6.23782 9.9456 8.33776 8.98823 9.64939L9.35504 10.1476C13.2168 10.1122 15.3677 7.98937 15.2291 5.03691C15.067 1.60466 11.9586 0 7.40069 0Z"
        fill={color}
      />
      <path
        d="M12.6335 11.2666L7.07494 11.2423C6.95243 11.3854 6.92969 11.412 6.80718 11.5545L10.8501 20H16.7902C16.8354 19.9292 16.865 19.8827 16.8945 19.8363L16.8952 19.8353C16.9249 19.7886 16.9546 19.742 17 19.6708L12.6335 11.2666Z"
        fill={color}
      />
    </svg>
    {customElement}
  </div>
);
