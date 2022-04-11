interface Props {
  isFooter?: boolean;
}
export const Logo = ({ isFooter }: Props) => (
  <>
    <svg className={`logo logo__white ${isFooter ? "logo--footer" : ""}`}>
      <use xlinkHref="#icon-logo-white" />
    </svg>
    {!isFooter && (
      <svg className={`logo logo__black`}>
        <use xlinkHref="#icon-logo-black" />
      </svg>
    )}
  </>
);
