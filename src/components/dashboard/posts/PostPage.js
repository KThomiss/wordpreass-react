import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import DashboardPage from "../DashboardPage";
import PostList from "./PostList";

export default function PostPage() {
  return (
    <DashboardPage>
      <Heading content="Posts" />
      <p>
        <Link to="/dashboard/posts/add" className="dashboard-links">
          Add post
        </Link>
      </p>
      <PostList />
    </DashboardPage>
  );
}
