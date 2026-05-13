import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { breadcrumb } from '@/lib/schema'

type LegalContent = { title: string; description: string; body: React.ReactNode }

const de: Record<string, LegalContent> = {
  imprint: {
    title: 'Impressum',
    description: 'Impressum der PMax Online S.L., Calle Cordova 5, 07184 Calvià, Mallorca, Spanien.',
    body: (
      <div className="prose">
        <p><em>PMax Online S.L. · Eingetragen im Handelsregister Palma de Mallorca · USt-IdNr. ES B57948123</em></p>
        <h2>Unternehmensangaben</h2>
        <p>
          <strong>PMax Online S.L.</strong><br />
          Calle Cordova, 5<br />
          07184 Calvià, Mallorca<br />
          Spanien
        </p>
        <p>
          USt-Identifikationsnummer: ES B57948123<br />
          Eingetragen im Handelsregister (Registro Mercantil) von Palma de Mallorca
        </p>
        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:hello@pmax.online">hello@pmax.online</a><br />
          Telefon: <a href="tel:+34871242160">+34 871 242 160</a>
        </p>
        <h2>Vertretungsberechtigter Geschäftsführer</h2>
        <p>Philipp Enders, Gründer &amp; Geschäftsführer</p>
        <h2>Rechtsform und Aufsicht</h2>
        <p>
          pmax Online S.L. ist eine Gesellschaft mit beschränkter Haftung (Sociedad de Responsabilidad Limitada, S.L.)
          nach spanischem Recht. Die Tätigkeit unterliegt keiner besonderen behördlichen Zulassung über die
          handelsrechtliche Eintragung hinaus.
        </p>
        <h2>Haftungshinweis</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
        <h2>Urheberrecht</h2>
        <p>
          Alle auf dieser Website veröffentlichten Inhalte (Texte, Grafiken, Logos) sind urheberrechtlich geschützt
          und Eigentum der PMax Online S.L. oder der jeweiligen Rechteinhaber. Eine Vervielfältigung oder Verwendung
          ist ohne schriftliche Genehmigung nicht gestattet.
        </p>
      </div>
    ),
  },
  privacy: {
    title: 'Datenschutzerklärung',
    description: 'Wie PMax Online S.L. personenbezogene Daten gemäß DSGVO und spanischem LOPDGDD erhebt, verarbeitet und schützt.',
    body: (
      <div className="prose">
        <p><em>Stand: 1. April 2026 · Gültig ab 1. April 2026</em></p>
        <p>
          Diese Datenschutzerklärung erläutert, wie PMax Online S.L. (&bdquo;pmax&ldquo;, &bdquo;wir&ldquo;, &bdquo;uns&ldquo;)
          personenbezogene Daten erhebt und verarbeitet, wenn Sie pmax.online besuchen oder uns als Dienstleister beauftragen.
          Sie ist gemäß der EU-Datenschutz-Grundverordnung (DSGVO) sowie dem spanischen Organgesetz zum Schutz
          personenbezogener Daten (LOPDGDD) verfasst.
        </p>
        <h2>1. Verantwortliche Stelle</h2>
        <p>PMax Online S.L., Calle Cordova 5, 07184 Calvià, Mallorca, Spanien. E-Mail: <a href="mailto:hello@pmax.online">hello@pmax.online</a>.</p>
        <h2>2. Erhobene Daten</h2>
        <h3>Beim Besuch unserer Website</h3>
        <ul>
          <li>Server-Protokolldateien (IP-Adresse, Browser-User-Agent, Referrer, Zeitstempel)</li>
          <li>Cookies und ähnliche Technologien (siehe unsere <a href="/de/legal/cookies">Cookie-Richtlinie</a>)</li>
          <li>Aggregierte, anonymisierte Analysedaten über Google Analytics 4 mit IP-Anonymisierung — ausschließlich nach Ihrer Einwilligung</li>
        </ul>
        <h3>Bei der Nutzung unseres Kontaktformulars</h3>
        <ul>
          <li>Name, Unternehmen, E-Mail-Adresse, Telefonnummer (optional), Ihre Nachricht</li>
        </ul>
        <h3>Als Kunde von pmax</h3>
        <ul>
          <li>Geschäftliche Kontaktdaten Ihrer Ansprechpartner</li>
          <li>Rechnungs- und Zahlungsdaten</li>
          <li>Zugangsdaten zu Ihren Marketing-Plattformen, die uns ausschließlich zur Leistungserbringung überlassen werden</li>
        </ul>
        <h2>3. Rechtsgrundlagen der Verarbeitung</h2>
        <ul>
          <li><strong>Art. 6 Abs. 1 lit. a DSGVO — Einwilligung</strong> für Analyse- und Marketing-Cookies</li>
          <li><strong>Art. 6 Abs. 1 lit. b DSGVO — Vertragserfüllung</strong> für die Verarbeitung von Kundendaten zur Leistungserbringung</li>
          <li><strong>Art. 6 Abs. 1 lit. f DSGVO — Berechtigtes Interesse</strong> für die Beantwortung eingehender Anfragen und die Sicherheit unserer Website</li>
          <li><strong>Art. 6 Abs. 1 lit. c DSGVO — Rechtliche Verpflichtung</strong> für die Aufbewahrung von Buchhaltungsunterlagen gemäß spanischem Steuerrecht</li>
        </ul>
        <h2>4. Speicherdauer</h2>
        <p>
          Anfragedaten: 24 Monate ab dem letzten Kontakt, sofern kein Kundenverhältnis entsteht. Kundendaten: Dauer des Auftrags
          plus 10 Jahre für Rechnungsunterlagen gemäß spanischem Steuerrecht. Server-Protokolle: 14 Tage. Analysedaten: 14 Monate.
        </p>
        <h2>5. Ihre Rechte</h2>
        <p>
          Gemäß DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Zur Ausübung Ihrer Rechte wenden Sie sich an{' '}
          <a href="mailto:hello@pmax.online">hello@pmax.online</a>. Sie haben außerdem das Recht, eine Beschwerde
          bei der spanischen Datenschutzbehörde (AEPD) unter{' '}
          <a href="https://www.aepd.es" target="_blank" rel="noopener">aepd.es</a> einzureichen.
        </p>
        <h2>6. Auftragsverarbeiter</h2>
        <p>Wir setzen folgende Auftragsverarbeiter ein, die jeweils durch einen Auftragsverarbeitungsvertrag (Art. 28 DSGVO) gebunden sind:</p>
        <ul>
          <li>Google Ireland Ltd. — Google Workspace, Google Analytics (EU-Server)</li>
          <li>HubSpot Ireland Ltd. — CRM</li>
          <li>Vercel Inc. — Website-Hosting (EU-Region)</li>
          <li>Sendgrid (Twilio Ireland Ltd.) — Transaktions-E-Mail</li>
        </ul>
        <p>Einige dieser Anbieter können Daten außerhalb des EWR übertragen. In diesen Fällen werden Übertragungen durch Standardvertragsklauseln (SCC) abgesichert.</p>
        <h2>7. Kontakt</h2>
        <p>
          Bei datenschutzrechtlichen Fragen: <a href="mailto:hello@pmax.online">hello@pmax.online</a>.
          Wir beantworten alle Anfragen innerhalb von 30 Tagen entsprechend den DSGVO-Anforderungen.
        </p>
      </div>
    ),
  },
  cookies: {
    title: 'Cookie-Richtlinie',
    description: 'Welche Cookies pmax.online verwendet, zu welchem Zweck und wie Sie diese steuern können. DSGVO-konform.',
    body: (
      <div className="prose">
        <p><em>Stand: 1. April 2026</em></p>
        <p>
          Diese Richtlinie erläutert, welche Cookies wir auf pmax.online verwenden, warum wir sie einsetzen
          und wie Sie diese steuern können. Cookies sind kleine Textdateien, die Ihr Browser beim Besuch einer
          Website auf Ihrem Gerät speichert.
        </p>
        <h2>Technisch notwendige Cookies</h2>
        <p>
          Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
          Sie speichern keine personenbezogenen Daten.
        </p>
        <table>
          <thead><tr><th>Cookie</th><th>Zweck</th><th>Laufzeit</th></tr></thead>
          <tbody>
            <tr><td>pmax_consent</td><td>Speichert Ihre Cookie-Einwilligungsauswahl</td><td>12 Monate</td></tr>
            <tr><td>pmax_session</td><td>Hält Ihren Sitzungsstatus aufrecht</td><td>Sitzung</td></tr>
          </tbody>
        </table>
        <h2>Analyse-Cookies (nur mit Einwilligung)</h2>
        <p>
          Wir nutzen Google Analytics 4, um zu verstehen, wie Besucher unsere Website verwenden.
          IP-Adressen werden vor der Verarbeitung anonymisiert. Wir geben diese Daten nicht an Werbetreibende weiter.
        </p>
        <table>
          <thead><tr><th>Cookie</th><th>Zweck</th><th>Laufzeit</th></tr></thead>
          <tbody>
            <tr><td>_ga</td><td>Unterscheidet einzelne Nutzer</td><td>14 Monate</td></tr>
            <tr><td>_ga_*</td><td>Persistiert den Sitzungsstatus (GA4)</td><td>14 Monate</td></tr>
          </tbody>
        </table>
        <h2>Marketing-Cookies (nur mit Einwilligung)</h2>
        <p>
          Wir verwenden Meta Pixel und LinkedIn Insight Tag für Remarketing — ausschließlich gegenüber Personen,
          die pmax.online bereits besucht haben. Wir betreiben kein dynamisches Produkt-Remarketing.
        </p>
        <h2>Einbettungen Dritter</h2>
        <p>
          Die Kontaktseite bindet einen Google Maps-iframe ein. Google kann dabei eigene Cookies setzen.
          Diese unterliegen der <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Datenschutzerklärung von Google</a>.
        </p>
        <h2>Einstellungen verwalten</h2>
        <p>
          Sie können Ihre Einwilligung jederzeit ändern oder widerrufen, indem Sie auf den Link
          &bdquo;Cookie-Einstellungen&ldquo; in unserem Footer klicken. Cookies können auch vollständig
          über Ihre Browsereinstellungen blockiert werden; dies kann die Funktionalität der Website beeinträchtigen.
        </p>
        <h2>Kontakt</h2>
        <p>
          Fragen: <a href="mailto:hello@pmax.online">hello@pmax.online</a>.
          Siehe auch unsere <a href="/de/legal/privacy">vollständige Datenschutzerklärung</a>.
        </p>
      </div>
    ),
  },
  terms: {
    title: 'Allgemeine Geschäftsbedingungen',
    description: 'AGB der PMax Online S.L. für Dienstleistungsverträge mit Kunden.',
    body: (
      <div className="prose">
        <p><em>Gültig ab 1. April 2026 · Gilt für das Verhältnis zwischen PMax Online S.L. und ihren Kunden.</em></p>
        <h2>1. Begriffsbestimmungen</h2>
        <p>
          &bdquo;pmax&ldquo;, &bdquo;wir&ldquo;, &bdquo;uns&ldquo; bezeichnet die PMax Online S.L., Calle Cordova 5,
          07184 Calvià, Mallorca, Spanien. &bdquo;Auftraggeber&ldquo;, &bdquo;Sie&ldquo; bezeichnet das Unternehmen,
          das mit uns einen Dienstleistungsvertrag abschließt. &bdquo;Leistungen&ldquo; bezeichnet die digitalen
          Marketing-Dienstleistungen gemäß dem jeweiligen Leistungsschein.
        </p>
        <h2>2. Vertragsschluss</h2>
        <p>
          Jeder Auftrag wird durch einen individuellen Leistungsschein (Statement of Work, SOW) geregelt, der auf
          diese AGB verweist und sie einbezieht. Bei Widersprüchen geht der Leistungsschein vor.
        </p>
        <h2>3. Vergütung und Zahlung</h2>
        <p>
          Die Vergütung ist im Leistungsschein angegeben, zuzüglich gesetzlicher Mehrwertsteuer. Retainer-Vergütungen
          werden monatlich im Voraus fakturiert und sind innerhalb von 14 Tagen fällig. Bei Zahlungsverzug fallen
          Zinsen in gesetzlicher spanischer Höhe an. Wir behalten uns vor, Leistungen bei mehr als 30 Tagen überfälligen
          Rechnungen zu pausieren.
        </p>
        <h2>4. Mediabudget</h2>
        <p>
          Mediabudgets (Google Ads, Meta, LinkedIn etc.) werden vom Auftraggeber direkt an die jeweilige Plattform
          gezahlt. pmax verwaltet keine Mediabudgets des Auftraggebers und erhält keine prozentuale Vergütung
          auf das Mediabudget.
        </p>
        <h2>5. Geistiges Eigentum</h2>
        <p>
          Alle im Rahmen eines Auftrags erstellten Deliverables gehen mit vollständiger Zahlung der jeweiligen
          Rechnung auf den Auftraggeber über. Wir behalten das Recht, Aufträge in nicht-vertraulicher, anonymisierter
          Form in unseren Marketingmaterialien zu referenzieren, sofern nicht schriftlich anders vereinbart.
        </p>
        <h2>6. Vertraulichkeit</h2>
        <p>
          Beide Parteien verpflichten sich, alle im Rahmen eines Auftrags offenbarten Informationen, die als
          vertraulich gekennzeichnet sind oder die eine vernünftige Person als vertraulich betrachten würde,
          geheim zu halten. Diese Verpflichtung gilt über die Beendigung des Auftrags hinaus.
        </p>
        <h2>7. Datenschutz</h2>
        <p>
          Soweit pmax im Auftrag des Auftraggebers personenbezogene Daten verarbeitet, schließen die Parteien
          einen Auftragsverarbeitungsvertrag (AV-Vertrag) gemäß Art. 28 DSGVO ab. Dieser ist Bestandteil des Auftrags.
        </p>
        <h2>8. Kündigung</h2>
        <p>
          Retainer-Aufträge können von beiden Parteien mit einer Frist von 30 Tagen schriftlich gekündigt werden.
          Projektaufträge können bei wesentlichem Vertragsbruch, der nicht innerhalb von 14 Tagen nach Mitteilung
          behoben wird, gekündigt werden.
        </p>
        <h2>9. Haftungsbeschränkung</h2>
        <p>
          Unsere Gesamthaftung aus jedem Auftrag ist auf die in den 12 Monaten vor dem haftungsbegründenden
          Ereignis geleisteten Vergütungen begrenzt. Nichts in diesen AGB schränkt die Haftung für Tod, Körperverletzung,
          Betrug oder nicht beschränkbare Haftungen nach spanischem Recht ein.
        </p>
        <h2>10. Geltendes Recht und Gerichtsstand</h2>
        <p>
          Diese AGB und alle Aufträge unterliegen spanischem Recht. Die Gerichte von Palma de Mallorca sind
          ausschließlich zuständig.
        </p>
      </div>
    ),
  },
}

const es: Record<string, LegalContent> = {
  imprint: {
    title: 'Aviso legal',
    description: 'Aviso legal de PMax Online S.L., Calle Cordova 5, 07184 Calvià, Mallorca, España.',
    body: (
      <div className="prose">
        <p><em>PMax Online S.L. · Inscrita en el Registro Mercantil de Palma de Mallorca · NIF ES B57948123</em></p>
        <h2>Datos de la empresa</h2>
        <p>
          <strong>PMax Online S.L.</strong><br />
          Calle Cordova, 5<br />
          07184 Calvià, Mallorca<br />
          España
        </p>
        <p>
          NIF: ES B57948123<br />
          Inscrita en el Registro Mercantil de Palma de Mallorca
        </p>
        <h2>Contacto</h2>
        <p>
          Email: <a href="mailto:hello@pmax.online">hello@pmax.online</a><br />
          Teléfono: <a href="tel:+34871242160">+34 871 242 160</a>
        </p>
        <h2>Administrador único</h2>
        <p>Philipp Enders, Fundador y Director</p>
        <h2>Información regulatoria</h2>
        <p>
          pmax Online S.L. es una sociedad de responsabilidad limitada constituida bajo la legislación española.
          Las actividades no están sujetas a autorización sectorial específica más allá del registro mercantil ordinario.
        </p>
        <h2>Aviso de responsabilidad</h2>
        <p>
          A pesar del cuidado puesto en el control del contenido, no asumimos responsabilidad por el contenido de
          los enlaces externos. Los responsables de las páginas enlazadas son exclusivamente sus operadores.
        </p>
        <h2>Propiedad intelectual</h2>
        <p>
          Todos los contenidos publicados en este sitio web (textos, gráficos, logotipos) están protegidos por
          derechos de autor y son propiedad de PMax Online S.L. o de los titulares de los derechos correspondientes.
          Su reproducción o uso sin autorización escrita no está permitida.
        </p>
      </div>
    ),
  },
  privacy: {
    title: 'Política de privacidad',
    description: 'Cómo PMax Online S.L. recoge, usa y protege los datos personales bajo el RGPD y la LOPDGDD española.',
    body: (
      <div className="prose">
        <p><em>Última actualización: 1 de abril de 2026 · En vigor desde el 1 de abril de 2026</em></p>
        <p>
          Esta política de privacidad explica cómo PMax Online S.L. (&ldquo;pmax&rdquo;, &ldquo;nosotros&rdquo;) recoge
          y trata datos personales cuando visitas pmax.online o nos contratas como proveedor de servicios. Está
          redactada de conformidad con el Reglamento General de Protección de Datos (RGPD) de la UE y la Ley
          Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
        </p>
        <h2>1. Responsable del tratamiento</h2>
        <p>PMax Online S.L., Calle Cordova 5, 07184 Calvià, Mallorca, España. Email: <a href="mailto:hello@pmax.online">hello@pmax.online</a>.</p>
        <h2>2. Datos que recopilamos</h2>
        <h3>Cuando visitas nuestra web</h3>
        <ul>
          <li>Ficheros de registro del servidor (dirección IP, agente de usuario, referrer, marca de tiempo)</li>
          <li>Cookies y tecnologías similares (consulta nuestra <a href="/es/legal/cookies">política de cookies</a>)</li>
          <li>Datos analíticos agregados y anonimizados a través de Google Analytics 4 con anonimización de IP y solo con tu consentimiento</li>
        </ul>
        <h3>Cuando rellenas nuestro formulario de contacto</h3>
        <ul>
          <li>Nombre, empresa, dirección de email, número de teléfono (opcional), el mensaje que nos envías</li>
        </ul>
        <h3>Cuando te conviertes en cliente</h3>
        <ul>
          <li>Datos de contacto profesionales de tu equipo</li>
          <li>Datos de facturación y pago</li>
          <li>Acceso a tus plataformas de marketing, cedido exclusivamente para la prestación de nuestros servicios</li>
        </ul>
        <h2>3. Base jurídica del tratamiento</h2>
        <ul>
          <li><strong>Art. 6.1.a RGPD — Consentimiento</strong> para cookies analíticas y de marketing</li>
          <li><strong>Art. 6.1.b RGPD — Ejecución de contrato</strong> para el tratamiento de datos de clientes en la prestación de servicios</li>
          <li><strong>Art. 6.1.f RGPD — Interés legítimo</strong> para responder a consultas entrantes y proteger nuestro sitio web</li>
          <li><strong>Art. 6.1.c RGPD — Obligación legal</strong> para conservar registros contables según la normativa fiscal española</li>
        </ul>
        <h2>4. Plazos de conservación</h2>
        <p>
          Datos de consulta: 24 meses desde el último contacto, salvo que se convierta en cliente. Datos de clientes: duración del
          encargo más 10 años para los registros de facturación exigidos por la normativa fiscal española. Registros del servidor: 14 días.
          Datos analíticos: 14 meses.
        </p>
        <h2>5. Tus derechos</h2>
        <p>
          En virtud del RGPD tienes derecho de acceso, rectificación, supresión, limitación del tratamiento,
          portabilidad y oposición al tratamiento. Para ejercer cualquiera de estos derechos, contacta con{' '}
          <a href="mailto:hello@pmax.online">hello@pmax.online</a>. También tienes derecho a presentar una
          reclamación ante la Agencia Española de Protección de Datos (AEPD) en{' '}
          <a href="https://www.aepd.es" target="_blank" rel="noopener">aepd.es</a>.
        </p>
        <h2>6. Encargados del tratamiento</h2>
        <p>Utilizamos los siguientes encargados, cada uno vinculado por un Acuerdo de Encargo de Tratamiento (Art. 28 RGPD):</p>
        <ul>
          <li>Google Ireland Ltd. — Google Workspace, Google Analytics (servidores UE)</li>
          <li>HubSpot Ireland Ltd. — CRM</li>
          <li>Vercel Inc. — Alojamiento web (región UE)</li>
          <li>Sendgrid (Twilio Ireland Ltd.) — Email transaccional</li>
        </ul>
        <p>Algunos de estos proveedores pueden transferir datos fuera del EEE. En tal caso, las transferencias están protegidas por Cláusulas Contractuales Tipo (CCT).</p>
        <h2>7. Contacto</h2>
        <p>
          Para consultas sobre privacidad: <a href="mailto:hello@pmax.online">hello@pmax.online</a>.
          Respondemos a todas las solicitudes de derechos en el plazo de 30 días exigido por el RGPD.
        </p>
      </div>
    ),
  },
  cookies: {
    title: 'Política de cookies',
    description: 'Qué cookies usa pmax.online, por qué y cómo puedes controlarlas. Conforme al RGPD.',
    body: (
      <div className="prose">
        <p><em>Última actualización: 1 de abril de 2026</em></p>
        <p>
          Esta política explica qué cookies utilizamos en pmax.online, por qué las utilizamos y cómo puedes
          controlarlas. Las cookies son pequeños archivos de texto que tu navegador almacena en tu dispositivo
          cuando visitas un sitio web.
        </p>
        <h2>Cookies estrictamente necesarias</h2>
        <p>
          Estas cookies son imprescindibles para el funcionamiento de la web y no pueden desactivarse en nuestros
          sistemas. No almacenan ningún dato de identificación personal.
        </p>
        <table>
          <thead><tr><th>Cookie</th><th>Finalidad</th><th>Duración</th></tr></thead>
          <tbody>
            <tr><td>pmax_consent</td><td>Guarda tu elección de consentimiento de cookies</td><td>12 meses</td></tr>
            <tr><td>pmax_session</td><td>Mantiene el estado de tu sesión</td><td>Sesión</td></tr>
          </tbody>
        </table>
        <h2>Cookies analíticas (solo con consentimiento)</h2>
        <p>
          Usamos Google Analytics 4 para entender cómo utilizan los visitantes nuestro sitio. Las direcciones IP
          se anonimizan antes del procesamiento. No compartimos estos datos con anunciantes.
        </p>
        <table>
          <thead><tr><th>Cookie</th><th>Finalidad</th><th>Duración</th></tr></thead>
          <tbody>
            <tr><td>_ga</td><td>Distingue usuarios únicos</td><td>14 meses</td></tr>
            <tr><td>_ga_*</td><td>Persiste el estado de sesión (GA4)</td><td>14 meses</td></tr>
          </tbody>
        </table>
        <h2>Cookies de marketing (solo con consentimiento)</h2>
        <p>
          Utilizamos Meta Pixel y LinkedIn Insight Tag para remarketing — exclusivamente a personas que ya han
          visitado pmax.online. No realizamos remarketing dinámico de productos.
        </p>
        <h2>Contenidos incrustados de terceros</h2>
        <p>
          La página de contacto incluye un iframe de Google Maps. Google puede establecer sus propias cookies
          cuando se carga. Estas se rigen por la{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">política de privacidad de Google</a>.
        </p>
        <h2>Gestionar tus preferencias</h2>
        <p>
          Puedes cambiar o retirar tu consentimiento en cualquier momento haciendo clic en el enlace
          &ldquo;Preferencias de cookies&rdquo; en nuestro pie de página. También puedes bloquear las cookies
          completamente desde la configuración de tu navegador; esto puede reducir la funcionalidad del sitio.
        </p>
        <h2>Contacto</h2>
        <p>
          Preguntas: <a href="mailto:hello@pmax.online">hello@pmax.online</a>.
          Consulta también nuestra <a href="/es/legal/privacy">política de privacidad completa</a>.
        </p>
      </div>
    ),
  },
  terms: {
    title: 'Términos y condiciones',
    description: 'Condiciones generales que rigen los encargos entre PMax Online S.L. y sus clientes.',
    body: (
      <div className="prose">
        <p><em>En vigor desde el 1 de abril de 2026 · Rige la relación entre PMax Online S.L. y sus clientes.</em></p>
        <h2>1. Definiciones</h2>
        <p>
          &ldquo;pmax&rdquo;, &ldquo;nosotros&rdquo; significa PMax Online S.L., Calle Cordova 5, 07184 Calvià,
          Mallorca, España. &ldquo;Cliente&rdquo;, &ldquo;tú&rdquo; significa la entidad que suscribe un contrato
          de encargo con nosotros. &ldquo;Servicios&rdquo; significa los servicios de marketing digital descritos
          en el correspondiente documento de alcance.
        </p>
        <h2>2. Encargo</h2>
        <p>
          Cada encargo se rige por un documento de alcance individual (Statement of Work, SOW) que hace referencia
          a estos términos y los incorpora. En caso de conflicto, prevalece el SOW.
        </p>
        <h2>3. Honorarios y pago</h2>
        <p>
          Los honorarios se indican en el SOW, sin incluir el IVA aplicable. Los honorarios de retainer se facturan
          mensualmente por adelantado y son exigibles en 14 días. El retraso en el pago devengará intereses al tipo
          legal español. Nos reservamos el derecho a suspender los servicios para facturas con más de 30 días de
          retraso.
        </p>
        <h2>4. Inversión publicitaria</h2>
        <p>
          La inversión publicitaria (Google Ads, Meta, LinkedIn, etc.) es pagada directamente por el Cliente a la
          plataforma correspondiente. pmax no gestiona inversión publicitaria del Cliente. No cobramos un porcentaje
          sobre la inversión publicitaria.
        </p>
        <h2>5. Propiedad intelectual</h2>
        <p>
          Todos los entregables creados en el marco de un encargo se transfieren al Cliente con el pago íntegro de
          la factura correspondiente. Nos reservamos el derecho a referenciar encargos en nuestros materiales de
          marketing de forma no confidencial y anonimizada, salvo acuerdo escrito en contrario.
        </p>
        <h2>6. Confidencialidad</h2>
        <p>
          Ambas partes acuerdan mantener la confidencialidad de toda la información revelada durante un encargo que
          esté identificada como confidencial o que una persona razonable consideraría confidencial. Esta obligación
          subsiste a la terminación del encargo.
        </p>
        <h2>7. Protección de datos</h2>
        <p>
          En la medida en que pmax trate datos personales por cuenta del Cliente, las partes suscribirán un Acuerdo
          de Encargo de Tratamiento (AET) de conformidad con el Art. 28 RGPD. El AET forma parte del encargo.
        </p>
        <h2>8. Resolución</h2>
        <p>
          Los encargos de retainer pueden ser resueltos por cualquiera de las partes con 30 días de preaviso escrito.
          Los encargos de proyecto pueden resolverse por incumplimiento material no subsanado en 14 días desde la
          notificación.
        </p>
        <h2>9. Limitación de responsabilidad</h2>
        <p>
          Nuestra responsabilidad total bajo cualquier encargo se limita a los honorarios abonados en los 12 meses
          anteriores al evento que da lugar a la reclamación. Nada en estos términos limita la responsabilidad por
          muerte, daños personales, fraude o cualquier responsabilidad que no pueda ser limitada por la legislación española.
        </p>
        <h2>10. Ley aplicable y jurisdicción</h2>
        <p>
          Estos términos y todos los encargos se rigen por la legislación española. Los juzgados y tribunales de
          Palma de Mallorca tienen jurisdicción exclusiva.
        </p>
      </div>
    ),
  },
}

const content: Record<string, Record<string, LegalContent>> = { de, es }

const titles: Record<string, Record<string, string>> = {
  de: { imprint: 'Impressum', privacy: 'Datenschutz', cookies: 'Cookie-Richtlinie', terms: 'AGB' },
  es: { imprint: 'Aviso legal', privacy: 'Privacidad', cookies: 'Cookies', terms: 'Condiciones' },
}

export function generateStaticParams() {
  return ['de','es'].flatMap(lang => ['imprint','privacy','cookies','terms'].map(slug => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const page = content[lang]?.[slug]
  if (!page) return {}
  return {
    title: `${page.title} — pmax`,
    description: page.description,
    robots: { index: false },
    alternates: { canonical: `https://pmax.online/${lang}/legal/${slug}/` },
  }
}

export default async function LegalPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const page = content[lang]?.[slug]
  if (!page) notFound()

  const p = `/${lang}`
  const legalLabel = lang === 'de' ? 'Rechtliches' : 'Legal'
  const homeLabel = 'Home'

  const jsonLd = breadcrumb([
    { name: homeLabel, url: `https://pmax.online/${lang}/` },
    { name: legalLabel, url: `https://pmax.online/${lang}/legal/imprint/` },
    { name: page.title, url: `https://pmax.online/${lang}/legal/${slug}/` },
  ])

  const legalSlugs = ['imprint', 'privacy', 'cookies', 'terms'] as const

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">

        <section className="page-intro" style={{ paddingBottom: 40 }}>
          <div className="container">
            <nav className="page-intro-crumbs" aria-label="Breadcrumb">
              <Link href={p}>Home</Link><span className="sep">/</span>
              <span>{page.title}</span>
            </nav>
            <h1 className="page-intro-title" style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}>
              {page.title}
            </h1>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 64, alignItems: 'flex-start' }}>
            {page.body}
            <nav style={{ position: 'sticky', top: 120, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {legalSlugs.map(s => (
                <Link
                  key={s}
                  href={`${p}/legal/${s}`}
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
                    letterSpacing: '1.5px', textTransform: 'uppercase',
                    color: s === slug ? 'var(--color-jelly-mint)' : '#949494',
                    paddingLeft: s === slug ? 12 : 0,
                    borderLeft: s === slug ? '2px solid var(--color-jelly-mint)' : '2px solid transparent',
                    transition: 'all 150ms ease',
                  }}
                >
                  {titles[lang]?.[s] ?? s}
                </Link>
              ))}
            </nav>
          </div>
        </section>

      </main>
      <Footer locale={lang} />
    </>
  )
}
