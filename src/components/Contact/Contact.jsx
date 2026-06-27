import { useNavigate } from "react-router-dom";

export const Contact = () => {

  const handleSubmit = () => {
    const navigate = useNavigate();
    navigate("/");
  }

  return (
    <>
    <div className="component">Contact</div>
    <button onClick={handleSubmit}>Back to Home</button>
    </>
  )
}
