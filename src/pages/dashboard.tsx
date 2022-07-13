import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { useCan } from "../services/hooks/useCan";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const userCanSeeMetrics = useCan({
    roles: ["administrator"],
  });
  useEffect(() => {
    api.get("/me").then((response) => console.log(response));
  }, []);
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        {userCanSeeMetrics && <Sidebar />}
        {/* <Sidebar /> */}
      </Flex>
    </Flex>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/me");

  console.log(response.data);
  return {
    props: {},
  };
});
