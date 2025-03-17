type IconProps = {
    className?: string;
  };

  function FacebookLogo({ className = "" }: IconProps) {
    return (
      <img src="/images/facebook.svg" alt="Facebook Logo" className={`${className}`} />
    );
  }

  export default FacebookLogo;
