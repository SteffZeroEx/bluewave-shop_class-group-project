import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Styles from "@/app/impressum/page.module.css";

export default function Impressum() {
  return (
    <>
      <Navbar />

      <main className={Styles["impressum-container"]}>
        <h1>Impressum</h1>

        <section>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Dein Firmenname<br />
            Musterstraße 12<br />
            12345 Musterstadt<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: 01234 / 567890<br />
            E-Mail: kontakt@deinshop.de
          </p>
        </section>

        <section>
          <h2>Vertreten durch</h2>
          <p>Max Mustermann</p>
        </section>

        <section>
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a
            Umsatzsteuergesetz: DE123456789
          </p>
        </section>

        <section>
          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-
            Streitbeilegung (OS) bereit:  
            https://ec.europa.eu/consumers/odr/
          </p>
        </section>

        <section>
          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
