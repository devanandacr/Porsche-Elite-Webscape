
import React from "react";

interface PorscheLogoProps {
  className?: string;
}

const PorscheLogo = ({ className = "h-8 w-auto text-white" }: PorscheLogoProps) => {
  return (
    <svg className={className} viewBox="0 0 200 25" fill="currentColor">
      <path d="M0 24.138h31.62V.707H0v23.431zm185.111-23.43v23.43h14.075V12.251h.102L187.462.707h-2.351zm-94.368 0v23.43h30.295V20.44h-20.538v-5.78h16.241v-3.697h-16.241V4.406h20.538V.707h-30.295zm51.942 0l-9.456 23.43h10.006l1.115-3.025h13.14l1.117 3.025h10.226l-9.625-23.43H142.685zm3.023 6.462l4.417 10.25h-8.789l4.372-10.25zM62.368.707v23.43h9.759V16.36h10.566c7.89 0 12.75-2.968 12.75-7.852 0-4.797-4.86-7.8-12.75-7.8h-20.325zm9.759 3.699h9.22c3.536 0 4.715 1.165 4.715 2.652 0 1.476-1.179 2.607-4.715 2.607h-9.22V4.406z"/>
    </svg>
  );
};

export default PorscheLogo;
