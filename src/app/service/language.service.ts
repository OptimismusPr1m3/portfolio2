import { Injectable } from '@angular/core';
import i18next from 'i18next';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  header: { [key: string]: string } = {
    skills: '',
    aboutMe: '',
    contact: '',
  };

  aboutMe: { [key: string]: string } = {
    p1: '',
    p2: '',
    p3: '',
  };
  skills: { [key: string]: string } = {
    p1: '',
  };
  portfolio: { [key: string]: string } = {
    samplePhrase1: '',
    samplePhrase2: '',
  };
  contactSection: { [key: string]: string } = {
    cHead: '',
    problemHead: '',
    fillerP11: '',
    fillerP12: '',
    fillerP13: '',
    fillerP21: '',
    fillerP22: '',
    warn1: '',
    warn2: '',
    warn3: '',
    pPolicy1: '',
    pPolicy2: '',
    pPolicy3: '',
    placeHolder1: '',
    placeHolder2: '',
    placeHolder3: '',
    mSent: '',
  };
  imprint: { [key: string]: string } = {
    head: '',
    infoHead: '',
    contactH: '',
    phone: '',
    mail: '',
  };
  pPolicy_1: { [key: string]: string } = {
    head: '',
    pGlance: '',
    generalInfo: '',
    phraseGlance: '',
    dataCollection: '',
    responsible: '',
    phraseResponsible: '',
    howCollect: '',
    howCollPhrase: '',
    dataUse: '',
    dataUsePhrase: '',
    dataRights: '',
    dataRightsPhrase: '',
  };
  pPolicy_2: { [key: string]: string } = {
    hosting: '',
    provider: '',
    allinklPhrase1: '',
    allinklPhrase2: '',
  };
  pPolicy_3: { [key: string]: string } = {
    mandatory: '',
    dataProt: '',
    dataProtPhrase: '',
    controllerInfo: '',
    controllerPhrase1: '',
    controllerPhone: '',
    controllerMail: '',
    controllerPhrase2: '',
    storageDuration: '',
    storagePhrase: '',
    legalBasis: '',
    legalBasisPhrase: '',
    dataTransfer: '',
    dataTransferPhrase: '',
    recipients: '',
    recipientsPhrase: '',
    revocation: '',
    revocationPhrase: '',
    specialCases: '',
    specialCasesPhrase: '',
    lodgeRight: '',
    lodgeRightPhrase: '',
    portability: '',
    portabilityPhrase: '',
    correctionDeletion: '',
    correctionDeletionPhrase: '',
    restriction: '',
    restrictionPhrase: '',
    restrictionLi1: '',
    restrictionLi2: '',
    restrictionLi3: '',
    restrictionLi4: '',
    restrictionLi5: '',
  };
  pPolicy_4: { [key: string]: string } = {
    collWeb: '',
    contForm: '',
    contFormPhrase: '',
    inquiry: '',
    inquiryPhrase1: '',
    inquiryPhrase2: '',
  };
  footer: { [key: string]: string } = {
    imprint: ''
  };

  selectedLanguage = i18next;

  constructor() {
    i18next.init({
      lng: 'en',
      debug: false,
      resources: {
        en: {
          translation: {
            header: {
              aboutMe: 'About me',
              skills: 'Skills',
              contact: 'Contact',
            },
            aboutMe: {
              p1: `Hi, I am a Front-end developer based in Thüringen, Germany. I'm specialized in
                bringing ideas to life for designers and companies. Creativity and logical
                thinking are my strengths in connecting concepts to quality products. If you
                believe I'd be a good fit for your projects, feel free to get in touch!`,
              p2: `Since 2022, I've been enrolled in a part-time Bachelor's program in
                "Informatik", immersing myself in the diverse aspects of technology.
                Currently, I'm also undergoing an intensive Bootcamp program specializing in
                Frontend Development, aiming to further refine my practical skills and
                accelerate my growth. This dual educational journey has equipped me with a
                good theoretical foundation and strong practical insights into current
                industry practices.`,
              p3: `My nursing background since 2016 has enhanced my teamwork and adaptability
                skills. Working in healthcare emphasized collaboration, communication, and
                staying composed under pressure. These qualities, along with empathy and
                problem-solving abilities, are assets I bring to my role as a Frontend
                Developer, ensuring effective collaboration and client-focused project
                delivery.`,
            },
            skills: {
              p1: `I have gained experience in building projects with various front end
                technologies and concepts`,
            },
            portfolio: {
              samplePhrase1: `This page is a sample of my work! Scroll down to view other`,
              samplePhrase2: `projects I have developed.`,
            },
            contactSection: {
              cHead: 'Contact',
              problemHead: 'Got a problem to solve?',
              fillerP11:
                'Contact me through this form, I am interested in hearing',
              fillerP12:
                'you, knowing your ideas and contributing to your projects',
              fillerP13: 'with my work',
              fillerP21: 'Need a Frontend developer?',
              fillerP22: 'Contact me!',
              warn1: 'Your name is required',
              warn2: 'Your email is required',
              warn3: 'Please enter a message',
              pPolicy1: `I've read the`,
              pPolicy2: 'privacy policy',
              pPolicy3: 'and agree to the processing of my data as outlined',
              placeHolder1: 'Your Name',
              placeHolder2: 'Your email',
              placeHolder3: 'Your message',
              mSent: 'Message sent !',
            },
            imprint: {
              head: 'Imprint',
              infoH:
                'Information according to Section 5 of the German Telemedia Act (TMG)',
              contactH: 'Contact',
              phone: 'Phone:',
              mail: 'Email:',
              source: 'Quelle',
            },
            pPolicy_1: {
              head: 'Privacy Policy',
              pGlance: '1. Privacy at a glance',
              generalInfo: 'General Information',
              phraseGlance: `The following information provides a simple overview of what happens to
              your personal data when you visit this website. Personal data are all data
              with which you can be personally identified. Detailed information on data
              protection can be found in our privacy policy listed below this text.`,
              dataCollection: 'Data Collection on This Website',
              responsible:
                'Who is responsible for data collection on this website?',
              phraseResponsible: `Data processing on this website is carried out by the website operator.
              You can find their contact details in the "Controller's Notice" section of
              this privacy policy.`,
              howCollect: 'How do we collect your data?',
              howCollPhrase: `Your data is collected when you provide it to us. This can include data
              that you enter into a contact form. Other data is collected automatically
              or with your consent when you visit the website, by our IT systems. These
              are mainly technical data (e.g., internet browser, operating system, or
              time of page access). This data is collected automatically as soon as you
              enter this website.`,
              dataUse: 'What do we use your data for?',
              dataUsePhrase: `Some of the data is collected to ensure the proper functioning of the
              website. Other data may be used to analyze your user behavior.`,
              dataRights: 'What rights do you have regarding your data?',
              dataRightsPhrase: `You have the right to obtain free information about the origin,
              recipients, and purpose of your stored personal data at any time. You also
              have the right to request the correction or deletion of this data. If you
              have given consent to data processing, you can revoke this consent at any
              time for the future. Furthermore, under certain circumstances, you have
              the right to request the restriction of the processing of your personal
              data. You also have the right to lodge a complaint with the competent
              supervisory authority. You can contact us at any time regarding this and
              any other questions regarding data protection.`,
            },
            pPolicy_2: {
              hosting: '2. Hosting',
              provider:
                'We host the content of our website with the following provider:',
              allinklPhrase1: `The provider is ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich,
              Hauptstraße 68, 02742 Friedersdorf (hereinafter All-Inkl). For details,
              please refer to All-Inkl's privacy policy:`,
              allinklPhrase2: `. The use of All-Inkl is based on Art. 6(1)(f) GDPR. We have a legitimate
              interest in presenting our website as reliably as possible. If consent has
              been requested, the processing is carried out exclusively on the basis of
              Art. 6(1)(a) GDPR and § 25(1) TTDSG, insofar as the consent includes the
              storage of cookies or access to information on the user's terminal device
              (e.g., device fingerprinting) within the meaning of the TTDSG. The consent
              can be revoked at any time.`,
            },
            pPolicy_3: {
              mandatory: '3. General Information and Mandatory Information',
              dataProt: 'Data Protection',
              dataProtPhrase: `The operators of these pages take the protection of your personal data
            very seriously. We treat your personal data confidentially and in
            accordance with the statutory data protection regulations and this privacy
            policy. When you use this website, various personal data are collected.
            Personal data are data with which you can be personally identified. This
            privacy policy explains what data we collect and what we use it for. It
            also explains how and for what purpose this is done. We would like to
            point out that data transmission over the Internet (e.g., communication by
            e-mail) may have security vulnerabilities. A complete protection of the
            data against access by third parties is not possible.`,
              controllerInfo: 'Controller Information',
              controllerPhrase1:
                'The controller responsible for data processing on this website is:',
              controllerPhone: 'Phone:',
              controllerMail: 'Email:',
              controllerPhrase2: `The controller is the natural or legal person who alone or jointly with
            others decides on the purposes and means of processing personal data
            (e.g., names, email addresses, etc.)`,
              storageDuration: 'Storage Duration',
              storagePhrase: `Unless a specific storage period is mentioned within this privacy policy,
            your personal data will remain with us until the purpose for data
            processing ceases. If you assert a legitimate request for deletion or
            revoke consent for data processing, your data will be deleted unless we
            have other legally permissible reasons for storing your personal data
            (e.g., tax or commercial retention periods); in the latter case, deletion
            will occur after the expiration of these reasons.`,
              legalBasis:
                'General Information on Legal Basis for Data Processing on this Website',
              legalBasisPhrase: `If you have given consent to data processing, we process your personal
            data based on Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR if special categories
            of data are processed according to Art. 9(1) GDPR. In the event of
            explicit consent for the transfer of personal data to third countries,
            data processing is also based on Art. 49(1)(a) GDPR. If you have consented
            to the storage of cookies or access to information on your device (e.g.,
            via device fingerprinting), data processing additionally occurs based on §
            25(1) TTDSG. Consent can be revoked at any time. If your data is necessary
            for the performance of a contract or for the implementation of
            pre-contractual measures, we process your data based on Art. 6(1)(b) GDPR.
            Furthermore, we process your data if necessary to fulfill a legal
            obligation based on Art. 6(1)(c) GDPR. Data processing may also occur
            based on our legitimate interests according to Art. 6(1)(f) GDPR. Relevant
            legal bases for each individual case are provided in the following
            paragraphs of this privacy policy.`,
              dataTransfer: `Note on Data Transfer to Privacy-Insecure Third Countries and Transfer to
            US Companies not Certified under the EU-US Data Privacy Framework (DPF)`,
              dataTransferPhrase: `We use tools from companies based in privacy-insecure third countries as
            well as US tools whose providers are not certified under the EU-US Data
            Privacy Framework (DPF). When these tools are active, your personal data
            may be transferred to and processed in these states. We would like to
            point out that in privacy-insecure third countries, a level of data
            protection comparable to that of the EU cannot be guaranteed. We also note
            that the USA, as a safe third country, generally has a level of data
            protection comparable to that of the EU. Accordingly, data transfer to the
            USA is permissible if the recipient holds certification under the "EU-US
            Data Privacy Framework" (DPF) or has appropriate additional guarantees.
            Information on transfers to third countries, including data recipients,
            can be found in this privacy policy.`,
              recipients: 'Recipients of Personal Data',
              recipientsPhrase: `In the course of our business activities, we collaborate with various
            external entities. This may necessitate the transfer of personal data to
            these external entities. We only disclose personal data to external
            entities if necessary for contractual fulfillment, if legally required
            (e.g., disclosure of data to tax authorities), if we have a legitimate
            interest under Art. 6(1)(f) GDPR in the disclosure, or if another legal
            basis permits data disclosure. When using data processors, we only
            disclose personal data of our customers based on a valid data processing
            agreement. In the case of joint processing, a joint processing agreement
            is concluded.`,
              revocation: 'Revocation of Your Consent for Data Processing',
              revocationPhrase: `Many data processing operations are only possible with your express
            consent. You can revoke your consent at any time. The legality of the data
            processing carried out prior to the revocation remains unaffected by the
            revocation.`,
              specialCases: `Right to Object to Data Collection in Special Cases and to Direct
            Marketing (Art. 21 GDPR)`,
              specialCasesPhrase: `If data processing is based on Art. 6(1)(e) or (f) GDPR, you have the
            right to object to the processing of your personal data for reasons
            arising from your particular situation, including profiling based on these
            provisions. The respective legal basis for data processing can be found in
            this privacy policy. If you object, we will no longer process your
            personal data unless we can demonstrate compelling legitimate grounds for
            the processing that override your interests, rights, and freedoms, or the
            processing serves the assertion, exercise, or defense of legal claims
            (objection pursuant to Art. 21(1) GDPR). If your personal data is
            processed for direct marketing purposes, you have the right to object at
            any time to the processing of your personal data for such marketing,
            including profiling related to such direct marketing. If you object, your
            personal data will subsequently no longer be used for direct marketing
            purposes (objection pursuant to Art. 21(2) GDPR).`,
              lodgeRight:
                'Right to Lodge a Complaint with the Competent Supervisory Authority',
              lodgeRightPhrase: `In the event of violations of the GDPR, data subjects have the right to
            lodge a complaint with a supervisory authority, particularly in the member
            state of their habitual residence, place of work, or place of the alleged
            infringement. This right to lodge a complaint is without prejudice to
            other administrative or judicial remedies.`,
              portability: 'Right to Data Portability',
              portabilityPhrase: `You have the right to receive the personal data concerning you, which you
            have provided to us, in a structured, commonly used, and machine-readable
            format, and have the right to transmit those data to another controller
            without hindrance from us, provided that the processing is based on
            consent or a contract and is carried out by automated means. Where
            technically feasible, you also have the right to have the personal data
            transmitted directly from us to another controller upon request.`,
              correctionDeletion: 'Information, Correction, and Deletion',
              correctionDeletionPhrase: `Within the framework of applicable legal provisions, you have the right to
            free information about your stored personal data, its origin and
            recipients, and the purpose of data processing at any time, as well as a
            right to correct or delete this data. For this purpose and for any other
            questions regarding personal data, you can always contact us.`,
              restriction: 'Right to Restriction of Processing',
              restrictionPhrase: `You have the right to request the restriction of processing of your
            personal data. You can contact us at any time to exercise this right. The
            right to restrict processing exists in the following cases:`,
              restrictionLi1: `If you dispute the accuracy of your personal data stored with us, we
            usually need time to verify this. During the verification period, you
            have the right to request the restriction of processing of your personal
            data.`,
              restrictionLi2: `If the processing of your personal data was/were unlawful, you can
            request the restriction of data processing instead of deletion.`,
              restrictionLi3: `If we no longer need your personal data, but you need it/them for the
            exercise, defense, or assertion of legal claims, you have the right to
            request the restriction of processing of your personal data instead of
            deletion.`,
              restrictionLi4: `If you have objected pursuant to Art. 21(1) GDPR, a balancing of
            interests between yours and ours must be made. As long as it is not yet
            determined whose interests prevail, you have the right to request the
            restriction of processing of your personal data.`,
              restrictionLi5: `If you have restricted the processing of your personal data, these data
            – except for their storage – may only be processed with your consent or
            for the assertion, exercise, or defense of legal claims or for the
            protection of the rights of another natural or legal person or for
            reasons of important public interest of the European Union or a member
            state.`,
            },
            pPolicy_4: {
              collWeb: '4. Data Collection on This Website',
              contForm: 'Contact Form',
              contFormPhrase: `If you send us inquiries via the contact form, your information from the
              inquiry form, including the contact details you provided there, will be
              stored by us for the purpose of processing the inquiry and in case of
              follow-up questions. We do not disclose this data without your consent.
              The processing of this data is based on Art. 6(1)(b) GDPR if your request
              is related to the performance of a contract or is necessary for the
              implementation of pre-contractual measures. In all other cases, the
              processing is based on our legitimate interest in the effective processing
              of the inquiries sent to us (Art. 6(1)(f) GDPR) or on your consent (Art.
              6(1)(a) GDPR) if requested; the consent can be revoked at any time. The
              data entered by you in the contact form will remain with us until you
              request us to delete it, revoke your consent to storage, or the purpose
              for data storage no longer applies (e.g., after completion of processing
              your inquiry). Mandatory legal provisions – in particular retention
              periods – remain unaffected.`,
              inquiry: 'Inquiry via Email, Telephone, or Fax',
              inquiryPhrase1: `If you contact us by email, telephone, or fax, your inquiry including all
              resulting personal data (name, inquiry) will be stored and processed by us
              for the purpose of processing your request. We do not disclose this data
              without your consent. The processing of this data is based on Art. 6(1)(b)
              GDPR if your request is related to the performance of a contract or is
              necessary for the implementation of pre-contractual measures. In all other
              cases, the processing is based on our legitimate interest in the effective
              processing of the inquiries sent to us (Art. 6(1)(f) GDPR) or on your
              consent (Art. 6(1)(a) GDPR) if requested; the consent can be revoked at
              any time.`,
              inquiryPhrase2: `The data you submit to us via contact inquiries will remain with us until
              you request deletion, revoke your consent to storage, or the purpose for
              data storage ceases (e.g., after processing your inquiry is completed).
              Mandatory legal provisions - especially statutory retention periods -
              remain unaffected.`,
            },
            footer: {
              imprint: 'Imprint'
            }
          },
        },
        de: {
          translation: {
            header: {
              aboutMe: 'Über mich',
              skills: 'Skills',
              contact: 'Kontakt',
            },
            aboutMe: {
              p1: `Hallo, ich bin ein Frontend-Entwickler
              mit Sitz in Thüringen, Deutschland. Ich habe mich darauf spezialisiert,
              Ideen für Designer und Unternehmen zum Leben zu erwecken. Kreativität und
              logisches Denken sind meine Stärken, um Konzepte in hochwertige Produkte
              umzusetzen. Wenn Sie glauben, dass ich gut zu Ihren Projekten passen könnte,
              zögern Sie nicht, sich mit mir in Verbindung zu setzen!`,
              p2: `Seit 2022 bin ich eingeschrieben in einem Teilzeit-Bachelorstudium
              "Informatik", wo ich mich intensiv mit den vielfältigen Aspekten der
              Technologien beschäftige. Derzeit absolviere ich ebenfalls ein intensives
              Bootcamp-Programm mit Schwerpunkt auf der Frontend-Entwicklung, um meine
              praktischen Fähigkeiten weiter zu verfeinern und mein Wachstum in diesem
              Bereich zu beschleunigen. Diese duale Ausbildung hat mir eine solide
              theoretische Grundlage und fundierte praktische Einblicke in aktuelle
              Branchenpraktiken verschafft.`,
              p3: `Mein Hintergrund als Krankenpfleger hat meine Teamarbeit- und
              Anpassungsfähigkeiten verbessert. Die Arbeit im Gesundheitswesen betonte die
              Zusammenarbeit, Kommunikation und Ruhe in stressigen Situationen. Diese
              Eigenschaften, zusammen mit Empathie und Problemlösungsfähigkeiten, sind
              Werte, die ich in meine Rolle als Frontend-Entwickler einbringe und eine
              effektive Zusammenarbeit und kundenorientierte Projektabwicklung
              sicherstelle.`,
            },
            skills: {
              p1: `Ich habe Erfahrung im Aufbau von Projekten mit verschiedenen
              Frontend-Technologien und Konzepten gesammelt.`,
            },
            portfolio: {
              samplePhrase1: `Dieser Bereich ist ein Beispiel meiner Arbeit!`,
              samplePhrase2: `Scrolle nach unten, um weitere Projekte anzusehen, die ich entwickelt habe.`,
            },
            contactSection: {
              cHead: 'Kontakt',
              problemHead: 'Müssen Sie ein Problem lösen?',
              fillerP11:
                'Kontaktieren Sie mich über dieses Formular. Ich bin interessiert, von',
              fillerP12:
                'Ihnen zu hören, Ihre Ideen kennenzulernen und durch',
              fillerP13: 'meine Arbeit zu Ihren Projekten beizutragen.',
              fillerP21: 'Brauchen Sie einen Frontend-Entwickler?',
              fillerP22: 'Kontaktieren Sie mich!',
              warn1: 'Ihr Name ist erforderlich!',
              warn2: 'Ihre Email ist erforderlich!',
              warn3: 'Bitte geben Sie eine Nachricht ein!',
              pPolicy1: `Ich habe die`,
              pPolicy2: 'Datenschutzrichtlinie',
              pPolicy3: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
              placeHolder1: 'Ihr Name',
              placeHolder2: 'Ihre Email',
              placeHolder3: 'Ihre Nachricht',
              mSent: 'Gesendet !',
            },
            imprint: {
              head: 'Impressum',
              infoH: 'Angaben gemäß § 5 TMG',
              contactH: 'Kontakt',
              phone: 'Mobiltelefon:',
              mail: 'E-Mail:',
              source: 'Quelle',
            },
            pPolicy_1: {
              head: 'Datenschutzerklärung',
              pGlance: '1. Datenschutz auf einen Blick',
              generalInfo: 'Allgemeine Hinweise',
              phraseGlance: `Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.`,
              dataCollection: 'Datenerfassung auf dieser Website',
              responsible:
                'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
              phraseResponsible: `Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen`,
              howCollect: 'Wie erfassen wir Ihre Daten?',
              howCollPhrase: `Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
              Daten handeln, die Sie in ein Kontaktformular eingeben.
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
              des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten`,
              dataUse: 'Wofür nutzen wir Ihre Daten?',
              dataUsePhrase: `Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
              Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.`,
              dataRights: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
              dataRightsPhrase: `Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
              Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
              können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
              bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              `,
            },
            pPolicy_2: {
              hosting: '2. Hosting',
              provider:
                'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:',
              allinklPhrase1: `Anbieter ist die ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742
              Friedersdorf (nachfolgend All-Inkl). Details entnehmen Sie der Datenschutzerklärung von All-Inkl:`,
              allinklPhrase2: `. Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
              berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art.
              6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den
              Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG
              umfasst. Die Einwilligung ist jederzeit widerrufbar.
              `,
            },
            pPolicy_3: {
              mandatory: '3. Allgemeine Hinweise und Pflichtinformationen',
              dataProt: 'Datenschutz',
              dataProtPhrase: `Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
              dieser Datenschutzerklärung.
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
              Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
              und zu welchem Zweck das geschieht.
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
              möglich.`,
              controllerInfo: 'Hinweis zur verantwortlichen Stelle',
              controllerPhrase1:
                'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
              controllerPhone: 'Telefon:',
              controllerMail: 'E-Mail:',
              controllerPhrase2: `Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
              die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
              entscheidet.`,
              storageDuration: 'Speicherdauer',
              storagePhrase: `Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
              werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
              personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.`,
              legalBasis:
                'Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website',
              legalBasisPhrase: `Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
              nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
              personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
              49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
              Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
              auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
              Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
              Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
              zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
              Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
              DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
              Absätzen dieser Datenschutzerklärung informiert.`,
              dataTransfer: `Hinweis zur Datenweitergabe in datenschutzrechtlich nicht sichere Drittstaaten sowie
              die Weitergabe an US-Unternehmen, die nicht DPF-zertifiziert sind`,
              dataTransferPhrase: `Wir verwenden unter anderem Tools von Unternehmen mit Sitz in datenschutzrechtlich nicht sicheren
              Drittstaaten sowie US-Tools, deren Anbieter nicht nach dem EU-US-Data Privacy Framework (DPF)
              zertifiziert sind. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Staaten
              übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in datenschutzrechtlich unsicheren
              Drittstaaten kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann.
              Wir weisen darauf hin, dass die USA als sicherer Drittstaat grundsätzlich ein mit der EU vergleichbares
              Datenschutzniveau aufweisen. Eine Datenübertragung in die USA ist danach zulässig, wenn der Empfänger
              eine Zertifizierung unter dem „EU-US Data Privacy Framework“ (DPF) besitzt oder über geeignete
              zusätzliche Garantien verfügt. Informationen zu Übermittlungen an Drittstaaten einschließlich der
              Datenempfänger finden Sie in dieser Datenschutzerklärung.`,
              recipients: 'Empfänger von personenbezogenen Daten',
              recipientsPhrase: `Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
              ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
              Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
              Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
              an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
              haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
              Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
              Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
              gemeinsame Verarbeitung geschlossen.`,
              revocation: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
              revocationPhrase: `Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.`,
              specialCases: `Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
              Direktwerbung (Art. 21 DSGVO)`,
              specialCasesPhrase: `WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
              ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
              SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
              WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
              PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
              ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
              WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
              SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
              VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
              RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
              SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
              BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
              EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
              VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
              ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
              NACH ART. 21 ABS. 2 DSGVO).`,
              lodgeRight:
                'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
              lodgeRightPhrase: `Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
              verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.`,
              portability: 'Recht auf Datenübertragbarkeit',
              portabilityPhrase: `Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
              automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
              aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.`,
              correctionDeletion: 'Auskunft, Berichtigung und Löschung',
              correctionDeletionPhrase: `Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
              Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
              zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.`,
              restriction: 'Recht auf Einschränkung der Verarbeitung',
              restrictionPhrase: `Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
              folgenden Fällen:`,
              restrictionLi1: `Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
              in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.`,
              restrictionLi2: `Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
              statt der Löschung die Einschränkung der Datenverarbeitung verlangen.`,
              restrictionLi3: `Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
              Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
              Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen`,
              restrictionLi4: `Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
              Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
              überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen.`,
              restrictionLi5: `Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
              ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
              juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
              eines Mitgliedstaats verarbeitet werden.`,
            },
            pPolicy_4: {
              collWeb: '4. Datenerfassung auf dieser Website',
              contForm: 'Kontaktformular',
              contFormPhrase: `Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
              und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
              der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
              effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
              insbesondere Aufbewahrungsfristen – bleiben unberührt`,
              inquiry: 'Anfrage per E-Mail, Telefon oder Telefax',
              inquiryPhrase1: `Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
              bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
              der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
              effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.`,
              inquiryPhrase2: `Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
              insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.`,
            },
            footer: {
              imprint: 'Impressum'
            }
          },
        },
      },
    });
    this.setAreaLang(this.header, 'header');
    this.setAreaLang(this.aboutMe, 'aboutMe');
    this.setAreaLang(this.skills, 'skills');
    this.setAreaLang(this.portfolio, 'portfolio');
    this.setAreaLang(this.contactSection, 'contactSection');
    this.setAreaLang(this.imprint, 'imprint');
    this.setAreaLang(this.pPolicy_1, 'pPolicy_1');
    this.setAreaLang(this.pPolicy_2, 'pPolicy_2');
    this.setAreaLang(this.pPolicy_3, 'pPolicy_3');
    this.setAreaLang(this.pPolicy_4, 'pPolicy_4');
    this.setAreaLang(this.footer, 'footer');
  }

  setAreaLang(area: { [key: string]: string }, langArea: string) {
    for (let key in area) {
      area[key] = i18next.t(`${langArea}.${key}`);
    }
  }

  changeLang(language: string) {
    i18next.changeLanguage(language);
    this.setAreaLang(this.header, 'header');
    this.setAreaLang(this.aboutMe, 'aboutMe');
    this.setAreaLang(this.skills, 'skills');
    this.setAreaLang(this.portfolio, 'portfolio');
    this.setAreaLang(this.contactSection, 'contactSection');
    this.setAreaLang(this.imprint, 'imprint');
    this.setAreaLang(this.pPolicy_1, 'pPolicy_1');
    this.setAreaLang(this.pPolicy_2, 'pPolicy_2');
    this.setAreaLang(this.pPolicy_3, 'pPolicy_3');
    this.setAreaLang(this.pPolicy_4, 'pPolicy_4');
    this.setAreaLang(this.footer, 'footer');
  }
}
