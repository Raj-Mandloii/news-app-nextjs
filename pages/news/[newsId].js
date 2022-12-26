import { useRouter } from "next/router";

const Datailpage = () => {
  
  const router = useRouter();

  // const newsId = router.query.newsId
  console.log(router.query.newsId);
  return <div>Datailpage</div>;
};

export default Datailpage;
