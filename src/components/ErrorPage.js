import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error__page">
      <h1>You appear to be lost</h1>
      <Link to="/" className="error-link">
        Go home
      </Link>
    </div>
  );
}
