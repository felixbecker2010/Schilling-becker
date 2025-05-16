import Link from "next/link"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-6">Impressum & Datenschutzerklärung</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Impressum</h2>
            <p className="mb-1">Oskar Schilling</p>
            <p className="mb-1">SCHILLING & BECKER</p>
            <p className="mb-1">Südstraße, 28</p>
            <p className="mb-4">31275 Lehrte</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
            <p className="mb-1">Telefon: 017642986978</p>
            <p className="mb-4">E-Mail: info@schilling-becker.com</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p className="mb-4 text-gray-700">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Zentrale Kontaktstelle nach dem Digital Services Act - DSA (Verordnung (EU) 2022/265)
            </h2>
            <p className="mb-4 text-gray-700">
              Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt:
            </p>
            <p className="mb-1">E-Mail: info@schilling-becker.com</p>
            <p className="mb-1">Telefon: 017642986978</p>
            <p className="mb-4">Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Datenschutzerklärung</h2>

            <h3 className="text-xl font-medium mb-3">1. Datenschutz auf einen Blick</h3>
            <h4 className="text-lg font-medium mb-2">Allgemeine Hinweise</h4>
            <p className="mb-4 text-gray-700">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
              unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h4 className="text-lg font-medium mb-2">Datenerfassung auf dieser Website</h4>
            <h5 className="text-base font-medium mb-2">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h5>
            <p className="mb-4 text-gray-700">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
              Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>

            <h5 className="text-base font-medium mb-2">Wie erfassen wir Ihre Daten?</h5>
            <p className="mb-4 text-gray-700">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
              Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer
              Einwilligung beim Besuch der Website durch unsere IT- Systeme erfasst. Das sind vor allem technische Daten
              (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie diese Website betreten.
            </p>

            <h5 className="text-base font-medium mb-2">Wofür nutzen wir Ihre Daten?</h5>
            <p className="mb-4 text-gray-700">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
              Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge
              geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote,
              Bestellungen oder sonstige Auftragsanfragen verarbeitet.
            </p>

            <h5 className="text-base font-medium mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h5>
            <p className="mb-4 text-gray-700">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
              Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können
              Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
              bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren
              Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

            <h5 className="text-base font-medium mb-2">Analyse-Tools und Tools von Drittanbietern</h5>
            <p className="mb-4 text-gray-700">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem
              mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in
              der folgenden Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">2. Hosting</h3>
            <p className="mb-4 text-gray-700">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

            <h4 className="text-lg font-medium mb-2">Externes Hosting</h4>
            <p className="mb-4 text-gray-700">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
              werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
              sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mb-4 text-gray-700">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
              Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung
              von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
              Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4 text-gray-700">
              Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
              Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
            </p>
            <p className="mb-4 text-gray-700">Wir setzen folgende(n) Hoster ein:</p>
            <p className="mb-4 text-gray-700">
              Vercel Inc.
              <br />
              Covina, California
              <br />
              United States
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">3. Allgemeine Hinweise und Pflichtinformationen</h3>
            <h4 className="text-lg font-medium mb-2">Datenschutz</h4>
            <p className="mb-4 text-gray-700">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>
            <p className="mb-4 text-gray-700">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
              Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
              Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
              und zu welchem Zweck das geschieht.
            </p>
            <p className="mb-4 text-gray-700">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
              möglich.
            </p>

            <h4 className="text-lg font-medium mb-2">Hinweis zur verantwortlichen Stelle</h4>
            <p className="mb-4 text-gray-700">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-1">Oskar Schilling</p>
            <p className="mb-1">SCHILLING & BECKER</p>
            <p className="mb-1">Südstraße, 28</p>
            <p className="mb-1">31275 Lehrte</p>
            <p className="mb-1">Telefon: 017642986978</p>
            <p className="mb-4">E-Mail: info@schilling-becker.com</p>
            <p className="mb-4 text-gray-700">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o.
              Ä.) entscheidet.
            </p>

            <h4 className="text-lg font-medium mb-2">Speicherdauer</h4>
            <p className="mb-4 text-gray-700">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden
              Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
              personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h4 className="text-lg font-medium mb-2">
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
            </h4>
            <p className="mb-4 text-gray-700">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
              nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
              personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49
              Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
              Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung
              zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
              Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir
              Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern
              diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit.
              c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs.
              1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den
              folgenden Absätzen dieser Datenschutzerklärung informiert.
            </p>

            <h4 className="text-lg font-medium mb-2">Empfänger von personenbezogenen Daten</h4>
            <p className="mb-4 text-gray-700">
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist
              teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir
              geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
              Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von
              Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der
              Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
              Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
              Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
              gemeinsame Verarbeitung geschlossen.
            </p>

            <h4 className="text-lg font-medium mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
            <p className="mb-4 text-gray-700">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h4 className="text-lg font-medium mb-2">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h4>
            <p className="mb-4 text-gray-700 uppercase">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie
              jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung
              Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen
              gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie
              dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen
              Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
              nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
            </p>
            <p className="mb-4 text-gray-700 uppercase">
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht,
              jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
              derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in
              Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum
              Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </p>

            <h4 className="text-lg font-medium mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
            <p className="mb-4 text-gray-700">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
              verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>

            <h4 className="text-lg font-medium mb-2">Recht auf Datenübertragbarkeit</h4>
            <p className="mb-4 text-gray-700">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
              automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
              aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h4 className="text-lg font-medium mb-2">Auskunft, Berichtigung und Löschung</h4>
            <p className="mb-4 text-gray-700">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren
              Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h4 className="text-lg font-medium mb-2">Recht auf Einschränkung der Verarbeitung</h4>
            <p className="mb-4 text-gray-700">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu
              können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden
              Fällen:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
                in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li className="mb-2">
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der
                Löschung die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li className="mb-2">
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung
                oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li className="mb-2">
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren
                und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
                haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
            </ul>
            <p className="mb-4 text-gray-700">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
              ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen
              Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines
              Mitgliedstaats verarbeitet werden.
            </p>

            <h4 className="text-lg font-medium mb-2">SSL- bzw. TLS-Verschlüsselung</h4>
            <p className="mb-4 text-gray-700">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
              Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-
              Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
              „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="mb-4 text-gray-700">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
              von Dritten mitgelesen werden.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4. Datenerfassung auf dieser Website</h3>
            <h4 className="text-lg font-medium mb-2">Cookies</h4>
            <p className="mb-4 text-gray-700">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf
              Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
              werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
              gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p className="mb-4 text-gray-700">
              Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-
              Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen
              innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p className="mb-4 text-gray-700">
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
              Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
              von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet
              werden.
            </p>
            <p className="mb-4 text-gray-700">
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter,
              von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B.
              Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der
              Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch
              fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von
              Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
              ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die
              Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4 text-gray-700">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies
              nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
              das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p className="mb-4 text-gray-700">
              Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung
              entnehmen.
            </p>

            <h4 className="text-lg font-medium mb-2">Kontaktformular</h4>
            <p className="mb-4 text-gray-700">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4 text-gray-700">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
              mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
              der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p className="mb-4 text-gray-700">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h4 className="text-lg font-medium mb-2">Anfrage per E-Mail, Telefon oder Telefax</h4>
            <p className="mb-4 text-gray-700">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
              gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4 text-gray-700">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
              mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
              der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p className="mb-4 text-gray-700">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
              insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">5. Soziale Medien</h3>
            <h4 className="text-lg font-medium mb-2">Social-Media-Elemente mit Shariff</h4>
            <p className="mb-4 text-gray-700">
              Auf dieser Website werden Elemente von sozialen Medien verwendet (z. B. Facebook, X, Instagram, Pinterest,
              XING, LinkedIn, Tumblr).
            </p>
            <p className="mb-4 text-gray-700">
              Die Social-Media-Elemente können Sie in der Regel anhand der jeweiligen Social-Media-Logos erkennen. Um
              den Datenschutz auf dieser Website zu gewährleisten, verwenden wir diese Elemente nur zusammen mit der
              sogenannten „Shariff"-Lösung. Diese Anwendung verhindert, dass die auf dieser Website integrierten
              Social-Media-Elemente Ihre personenbezogenen Daten schon beim ersten Betreten der Seite an den jeweiligen
              Anbieter übertragen.
            </p>
            <p className="mb-4 text-gray-700">
              Erst wenn Sie das jeweilige Social-Media-Element durch Anklicken der zugehörigen Schaltfläche aktivieren,
              wird eine direkte Verbindung zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das Social-
              Media-Element aktivieren, erhält der jeweilige Anbieter die Information, dass Sie mit Ihrer IP-Adresse
              diese Website besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen Social-Media-Account (z. B.
              Facebook) eingeloggt sind, kann der jeweilige Anbieter den Besuch dieser Website Ihrem Benutzerkonto
              zuordnen.
            </p>
            <p className="mb-4 text-gray-700">
              Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs.
              1 TDDDG dar. Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p className="mb-4 text-gray-700">
              Der Einsatz des Dienstes erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz
              bestimmter Technologien einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.
            </p>

            <h4 className="text-lg font-medium mb-2">Instagram</h4>
            <p className="mb-4 text-gray-700">
              Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten
              durch die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
            </p>
            <p className="mb-4 text-gray-700">
              Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem
              Instagram-Server hergestellt. Instagram erhält dadurch Informationen über den Besuch dieser Website durch
              Sie.
            </p>
            <p className="mb-4 text-gray-700">
              Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die
              Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser
              Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine
              Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
            </p>
            <p className="mb-4 text-gray-700">
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und §
              25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4 text-gray-700">
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an
              Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand
              Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich
              (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung
              der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende
              Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung.
            </p>
            <p className="mb-4 text-gray-700">
              Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung
              festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:
              https://www.facebook.com/legal/controller_addendum. Laut dieser Vereinbarung sind wir für die Erteilung
              der Datenschutzinformationen beim Einsatz des Facebook- bzw. Instagram-Tools und für die
              datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die
              Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte (z. B.
              Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten können Sie direkt bei
              Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet,
              diese an Facebook weiterzuleiten.
            </p>
            <p className="mb-4 text-gray-700">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
              finden Sie hier: https://www.facebook.com/legal/EU_data_transfer_addendum,
              https://privacycenter.instagram.com/policy/ und https://de-de.facebook.com/help/566994660333381.
            </p>
            <p className="mb-4 text-gray-700">
              Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram:
              https://privacycenter.instagram.com/policy/.
            </p>
            <p className="mb-4 text-gray-700">
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF
              ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer
              Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF
              zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen
              hierzu erhalten Sie vom Anbieter unter folgendem Link:
              https://www.dataprivacyframework.gov/participant/4452.
            </p>
          </section>

          <div className="mt-8 pt-4 border-t">
            <Link href="/" className="inline-flex items-center text-gray-700 hover:text-gray-900">
              &larr; Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
