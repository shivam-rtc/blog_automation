import React, { useState, useRef, useEffect } from 'react';

const TooltipButton = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const tooltipId = 'tooltip-id';
  const buttonRef = useRef(null);

  const showTooltip = () => {
    setTooltipVisible(true);
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      hideTooltip();
    }
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('keydown', handleKeyDown);
      return () => button.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    <div
      className="tooltip-wrapper"
      style={{ display: 'inline-block', position: 'relative' }}
    >
      <button
        ref={buttonRef}
        aria-describedby={tooltipId}
        aria-label="Information"
        onFocus={showTooltip}
        onBlur={hideTooltip}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        style={{
          padding: '8px',
          border: 'none',
          background: 'none',
          cursor: 'pointer'
        }}
      >
        ℹ️ 
      </button>

      {isTooltipVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          style={{
            position: 'absolute',
            top: '120%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#333',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: '4px',
            fontSize: '14px',
            whiteSpace: 'nowrap',
            zIndex: 1000
          }}
        >
          This is helpful tooltip text.
        </div>
      )}
    </div>
  );
};

export default TooltipButton;
