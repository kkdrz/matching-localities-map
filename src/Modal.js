import React, { useState } from "react";

const Modal = () => {
  const TRACKING_COOKIE = "tracking-accepted=true";
  const [visible, setVisible] = useState(
    !document.cookie.includes(TRACKING_COOKIE)
  );

  function handleOk() {
    var date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
    document.cookie = TRACKING_COOKIE + "; expires=" + date.toUTCString();
    setVisible(false);
  }

  return (
    <div className={"modal"} hidden={!visible}>
      <div className={"modal-inner"}>
        <p>
          Korzystając z aplikacji zgadzasz się na zbieranie informacji o
          wyszukiwanych frazach i ciasteczka.
        </p>
        <p>
          Informacje zawierają tylko i wyłącznie treść wzorca i nie są łączone z
          innymi danymi.
        </p>

        <button
          className={"modal-button"}
          type="button"
          onClick={() => handleOk()}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
