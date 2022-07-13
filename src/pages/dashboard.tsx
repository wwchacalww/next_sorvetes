import { Flex } from "@chakra-ui/react";
import { redirect } from "next/dist/server/api-utils";
import { destroyCookie } from "nookies";
import { useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  useEffect(() => {
    api.get("/me").then((response) => console.log(response));
  }, []);
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <Sidebar />
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
