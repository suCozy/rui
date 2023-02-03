import { RememberLogoProps } from '../types';

export const RememberSquareLogo = ({
  className,
  backgroundColor = '#F7F7EF',
  color = 'black',
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_222_7)">
        <path
          d="M18 0H2C0.895431 0 0 0.895431 0 2V18C0 19.1046 0.895431 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.895431 19.1046 0 18 0Z"
          fill={backgroundColor}
        />
        <path
          d="M12.919 10.7305L9.70869 10.7153C9.63269 10.7913 9.63269 10.8067 9.55652 10.8978L11.8995 15.7513H15.338C15.3837 15.6753 15.414 15.6448 15.4597 15.5688L12.9189 10.7305H12.919Z"
          fill={color}
        />
        <path
          d="M9.8913 4.24895H5.61597V15.7208H8.81097V5.02495C10.226 5.22278 10.9563 5.89211 11.2453 7.01811C11.4583 7.82445 11.367 9.04161 10.8041 9.78711L11.0171 10.0761C13.2536 10.0609 14.5013 8.82845 14.41 7.13961C14.334 5.17695 12.5386 4.24878 9.89113 4.24878L9.8913 4.24895Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_222_7">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
    {customElement}
  </div>
);
