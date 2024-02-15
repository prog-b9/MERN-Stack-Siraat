/* eslint-disable no-duplicate-case */
/* eslint-disable no-fallthrough */
import toast from "react-hot-toast";
import { ExclamationCircleFilled } from "@ant-design/icons";
const NotificationsToast = (type, msg) => {
  switch (type) {
    case "done":
      toast.success(msg, {
        style: {
          border: "2px solid var(--green)",
        },
      });
      break;
    case "error":
      toast.error(msg, {
        style: {
          border: "2px solid var(--red)",
        },
      });
      break;
    case "wait":
      toast.error(msg, {
        style: {
          border: "2px solid var(--yellow)",
        },
        icon: <ExclamationCircleFilled style={{ color: "var(--yellow)" }} />,
      });
      break;
    default:
    case "info":
      toast(msg);
      break;
  }
};

export default NotificationsToast;
