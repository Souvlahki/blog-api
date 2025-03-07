import "../styles/SuccessMsg.css";
    
function SuccessMsg({ msg }) {
  if (!msg) {
    return null;
  }

  return <div className="success-msg">{msg}</div>;
}

export default SuccessMsg;
