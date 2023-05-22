// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <A href="/">Home</A>
            <A href="https://renterpoint.com/luxury">Luxury Car Rental</A>
            <A href="https://renterpoint.com/sports">Supercar Rental</A>
             <A href="https://renterpoint.com/suv">SUV Rental</A>
            <A href="https://renterpoint.com/cheap">Cheap Car Rental</A>
             <A href="https://renterpoint.com/about-us">About us</A>
         
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
