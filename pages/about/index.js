import Router from "next/router";
import MainLayout from "../../components/MainLayout";
import styles from "./index.module.scss";
export default function About() {
  function handleClick() {
    Router.push("/");
  }

  return (
    <>
      <MainLayout title="About">
        <h1 className={styles.red}>About page</h1>
        <button onClick={() => handleClick()}>Go main button</button>
        <button onClick={() => Router.push("/posts")}>Go posts button</button>
      </MainLayout>
    </>
  );
}
