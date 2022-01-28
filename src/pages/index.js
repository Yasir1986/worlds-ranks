import CountriesTable from "../components/CountriesTable/CountriesTable";
import Layout from "../components/Layout/Layout"
import SearchInput from "../components/SearchInput/SearchInput"
import styles from "../styles/Home.module.css"

export default function Home({ countries }) {
  console.log(countries);
  return (
    <div>
      <Layout>
        <div className={styles.counts}>Found {countries.length} countries</div>
        <SearchInput placeholder="Filter By Name, Region or SubRegion" />
        <CountriesTable countries={countries} />
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
