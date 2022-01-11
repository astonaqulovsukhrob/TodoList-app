import React from "react";

function Alert({ alert }) {
  return (
    alert !== null && (
      <div class={`alert alert-${alert.classType}`} role="alert">
        {alert.massege}
      </div>
    )
  );
}

export default Alert;
