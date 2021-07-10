import React from "react";

const Footer = () => {

  return (<>
    <div className="footer">
      <p>
        Jeżeli aplikacja się zacięła, oznacza to, że znaleziono bardzo dużo
        miejscowości i renderowanie tego może trochę potrwać.
        <br />
        Możesz poczekać lub spróbować innego wzorca ;)
        <br />
        Nie, nie ma tu backendu.
      </p>
      <p>
        Dane miejscowości pochodzą z{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.geoportal.gov.pl/dane/panstwowy-rejestr-nazw-geograficznych"
        >
          PRNG
        </a>
        {". "}
        Model mapy pobrano z{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://gadm.org/download_country_v3.html"
        >
          GADM
        </a>{" "}
        i wyrenderowano za pomocą{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/zcreativelabs/react-simple-maps"
        >
          react-simple-maps
        </a>{"."}
      </p>
      <p>
        <b>Konrad Drozd 2021</b> -{" "}
        <a target="_blank" rel="noreferrer noopener" href="https://kdrozd.pl">
          kdrozd.pl
        </a>
      </p>
    </div>
    </>)
}
  

export default Footer;
