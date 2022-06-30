import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.query);
  //send request to backend to get data with id of router.query.projectId
  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  );
}

export default PortfolioProjectPage;
