import React from "react";

function Button({ label, isError = false, textError, ...props }) {
    return (
      <React.Fragment>
          <div className="flex flex-column">
            <Button {...props}></Button>
        </div>
    </React.Fragment>
  );
}

export default Button;