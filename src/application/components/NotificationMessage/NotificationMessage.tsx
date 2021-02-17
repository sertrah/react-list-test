import React, { FunctionComponent } from "react";

import { createPortal } from "react-dom";

type NotificationMessageProps = {
  notifications: { id: number; title?: string; message?: string }[];
  mountingElement: Element;
  onClose: any;
};

const NotificationMessage: FunctionComponent<NotificationMessageProps> = ({
  notifications,
  mountingElement,
}) => {
  return createPortal(
    <div className="notification-container top-right">
      {notifications.map(({ id, title, message }) => (
        <div key={id} className="notify-styleee">
          <strong> {title}</strong>
          {message}
        </div>
      ))}
    </div>,
    mountingElement
  );
};

export default NotificationMessage;
