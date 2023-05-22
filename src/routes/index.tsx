import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Luxury Car Rental Dubai</h1>
      <Counter />
      <p>
        If you want to take your driving experience to the next level then consider Exotic Car Rental Dubai services. With a wide range of high-performance vehicles available, you can choose the perfect car to suit your style and taste. Whether you're looking for a thrilling weekend getaway or a special occasion, an Exotic and Luxury Car Rental in Dubai is sure to provide an unforgettable experience.
      </p>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
