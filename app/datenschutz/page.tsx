import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Styles from "@/app/datenschutz/page.module.css";
 
export default function Datenschutz() {
  return (
    <>
      <Navbar />
 
      <main className={Styles["datenschutz-container"]}>
        <h1>Datenschutzerklärung</h1>
 
        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            [Name des Unternehmens] <br />
            [Adresse] <br />
            [E-Mail-Adresse]
          </p>
        </section>
 
        <section>
          <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>Beim Besuch unserer Website werden automatisch folgende Daten erfasst:</p>
          <ul>
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>verwendeter Browser</li>
            <li>Betriebssystem</li>
            <li>besuchte Seiten</li>
          </ul>
          <p>Diese Daten dienen der Sicherheit und technischen Bereitstellung der Website.</p>
        </section>
 
        <section>
          <h2>3. Nutzung von Daten bei Bestellungen</h2>
          <p>Wenn Sie in unserem Online-Shop bestellen, werden folgende Daten verarbeitet:</p>
          <ul>
            <li>Name</li>
            <li>Adresse</li>
            <li>E-Mail-Adresse</li>
            <li>Zahlungsinformationen</li>
            <li>Bestelldaten</li>
          </ul>
          <p>Diese Daten werden ausschließlich zur Abwicklung der Bestellung und Lieferung verwendet.</p>
        </section>
 
        <section>
          <h2>4. Weitergabe von Daten</h2>
          <p>Personenbezogene Daten werden nur weitergegeben, wenn dies erforderlich ist, z. B. an:</p>
          <ul>
            <li>Versanddienstleister (z. B. DHL)</li>
            <li>Zahlungsanbieter (z. B. PayPal, Kreditkartenanbieter)</li>
          </ul>
        </section>
 
        <section>
          <h2>5. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies, um Funktionen des Online-Shops zu ermöglichen und die
            Nutzung der Website zu verbessern. 
            Sie können Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren.
          </p>
        </section>
 
        <section>
          <h2>6. Speicherdauer</h2>
          <p>
            Ihre Daten werden nur so lange gespeichert, wie dies für die Vertragserfüllung oder
            gesetzliche Aufbewahrungspflichten erforderlich ist.
          </p>
        </section>
 
        <section>
          <h2>7. Rechte der Nutzer</h2>
          <p>Sie haben folgende Rechte nach der DSGVO:</p>
          <ul>
            <li>Auskunft über gespeicherte Daten</li>
            <li>Berichtigung falscher Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Beschwerde bei einer Datenschutzbehörde</li>
          </ul>
        </section>
 
        <section>
          <h2>8. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz können Sie uns unter folgender E-Mail kontaktieren:
            <br />
            [E-Mail-Adresse]
          </p>
        </section>
      </main>
 
      <Footer />
    </>
  );
}