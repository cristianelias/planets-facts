import type { NextPage } from "next";
import { useRouter } from "next/router";
import { pathDoesNotExist } from "../utils/validations";

const Planet: NextPage = (props) => {
  const router = useRouter();
  const { planet } = router.query;

  if (pathDoesNotExist(planet, planets)) {
    // redirect to earth / overview
  } else {
    // redirect to planet / overview
  }

  return <h1>1</h1>;
};

const getStaticPaths = () => {
  console.log("running getStaticPaths");

  return ["mercury", "earth"];
};

export default Planet;
