import "../styles/ErrorMsg.css";

function ErrorMsg({ err }) {
  if (!err) {
    return null;
  }
  return <div className="error-msg">{err}</div>;
}

export default ErrorMsg;
