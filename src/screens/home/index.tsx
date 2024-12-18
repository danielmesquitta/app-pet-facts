import { Button } from "@/components/button";
import { CuriosityCard } from "@/layouts/curiosity-card";
import { HomeHeader } from "@/layouts/home-header";
import { Wrapper } from "@/layouts/wrapper";
import { Link } from "expo-router";
import { Image } from "react-native";
import { Container, HomeContainer, HomeSubTitle, HomeTitle } from "./styles";

const curiosities = [
  {
    id: "1",
    title: "Ancient Origins",
    content:
      "The Shih Tzu breed originated in China and is believed to be one of the oldest dog breeds, dating back to the Tang Dynasty.",
  },
];

export function Home() {
  return (
    <Wrapper>
      <HomeHeader />

      <Container>
        <HomeContainer>
          <Image
            style={{
              width: 150,
              height: 150,
              objectFit: "contain",
            }}
            source={require("@assets/images/pets/dogs/golden-retriever.png")}
          />

          <HomeTitle>Did you know?</HomeTitle>
          <HomeSubTitle>
            Here is your daily curiosity about your Shih Tzu
          </HomeSubTitle>

          {curiosities.map((curiosity) => (
            <CuriosityCard
              key={curiosity.id}
              title={curiosity.title}
              content={curiosity.content}
            />
          ))}

          <Link href="/home/curiosities/history" asChild>
            <Button appearance="tertiary">View all curiosities</Button>
          </Link>
        </HomeContainer>
      </Container>
    </Wrapper>
  );
}
