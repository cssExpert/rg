const Icons = {
  Brand: () => (
    <path
      fill="currentColor"
      d="M23.913 9H12v5.182h6.877c-1.004 2.795-3.628 4.76-6.738 4.76h-.129V24c13.793-.92 11.903-15 11.903-15M12 4.603V.007C7.334-.142 5.288 2.055 5.034 2.254V.007H0V13.5h5.034l.007-2.238v-.124C5.098 7.559 8.182 4.795 12 4.73z"
    />
  ),
} as const;

export type IconNames = keyof typeof Icons;
export default Icons;
