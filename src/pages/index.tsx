import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { api } from "../api/api";
import Banner from "../components/Banner";
import Caracteristicas from "../components/Caracteristicas";
import Header from "../components/Header";
import Separador from "../components/Separador";
import Slider from "../components/Slider";
import { ContinentData } from "../types/continent";

export default function Home(continents: ContinentData[]) {
  return (
    <Flex direction={"column"}>
      <Header />
      <Banner />
      <Caracteristicas />
      <Separador />

      <Heading
        fontSize={["lg", "3xl", "4xl"]}
        fontWeight="700"
        textAlign="center"
        color="gray.700"
        mb={["5", "14"]}
      >
        Vamos nessa <br /> Escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await api.get<ContinentData>();

  return {
    props: {
      continent: [...response.data]
    }
  }
}
