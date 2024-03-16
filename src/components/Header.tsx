import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-start h-16 pl-12 gap-12 ">
        <div>Registration</div>
        <div className="flex gap-3 mr-2">
          <Link to="/">Home</Link>
          <Link to="form">Form</Link>
          <Link to="result">Result</Link>
        </div>
      </div>
    </>
  );
}
