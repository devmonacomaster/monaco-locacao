type IconProps = {
    className?: string;
  };

  function FacebookIcon({ className = "" }: IconProps) {
    return (
      <img src="/images/facebook.svg" alt="Facebook Logo" className={`h-4 ${className}`} />
    );
  }

  export default FacebookIcon;
