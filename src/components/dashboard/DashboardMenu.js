import { Link } from "react-router-dom";

export default function DashboardMenu() {
  return (
    <div className="dashboard">
      Sections:{" "}
      <Link to="/dashboard/posts" className="dashboard-links">
        Posts
      </Link>
    </div>
  );
}
