import Heading from "../layout/Heading";
import DashboardMenu from "./DashboardMenu";

function DashboardPage({ children }) {
  return (
    <>
      <Heading title="Dashboard"></Heading>
      <DashboardMenu></DashboardMenu>
      {children ? children : <p>select a section</p>}
    </>
  );
}

export default DashboardPage;
