type IconProps = {
    className?: string;
  };

  function MonacoLogo({ className = "" }: IconProps) {
    return (
      <img src="/images/monaco-logo.svg" alt="Logo da monaco" className={`h-4 ${className}`} />
    );
  }

  export default MonacoLogo;
