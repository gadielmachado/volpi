import svgPaths from "./imports/svg-74rj8itevs";
import svgPathsFigma from "./imports/svg-cklrrztagy";
import svgPathsBenefits from "./imports/svg-1iiihg4b8k";
import imgPexelsSebastians7310821 from "figma:asset/a88809abaa22b1b055a96a2959f15141fa594d8b.png";
import imgImage from "figma:asset/d7ae32da14d614c3666cba9ac0971d184fbfbc83.png";
import imgImage1 from "figma:asset/e86f842b36c44e9b637924e2cf170572a5369452.png";
import imgImage2 from "figma:asset/93cd5bac7a5a41c2b7e46ef5b2960dbf923270d5.png";
import imgPexelsBinyaminmellish1860771 from "figma:asset/45383a2c720b8f28d1b4fc26269437d644bed711.png";
import imgPexelsScottwebb1409631 from "figma:asset/24e7c1502c683931eeedeb7e27e820459be07fbb.png";
import imgPexelsDaliaAlRefai23537673217131036 from "figma:asset/112d19d11f8b90408f63b9dafd93ddb84460a031.png";
import imgEllipse3 from "figma:asset/d689daa8153ac1a6710ee20fac38cc20fbf5f8e5.png";
import imgRectangle23 from "figma:asset/4dd23c98ec12d5255f1487a5e837bc67290ce8f8.png";
import { useState, useEffect, createContext, useContext } from "react";

// Link do WhatsApp
const WHATSAPP_LINK = "https://wa.me/5527981357575?text=Ol%C3%A1%2C%20conheci%20a%20Volpi%20Investments%20pelo%20site%20e%20gostaria%20de%20conhecer%20mais%20sobre%20o%20projeto%20de%20dolarizar%20patrim%C3%B4nio%20e%20investir%20em%20um%20mercado%20de%20moeda%20forte%20e%20segura.";

// Função para abrir WhatsApp
const openWhatsApp = () => {
  window.open(WHATSAPP_LINK, '_blank');
};

// Contexto de idioma
type Language = 'pt' | 'en' | 'it' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Mapeamento de idiomas para exibição
const languageLabels: Record<Language, string> = {
  pt: 'PT-BR',
  en: 'EN-US',
  it: 'IT-IT',
  es: 'ES-ES'
};

// Traduções
const translations = {
  pt: {
    // Header
    aboutUs: "Sobre nós",
    services: "Serviços",
    benefits: "Benefícios",
    contactUs: "Fale conosco",
    learnMore: "Saber mais",
    language: "Idioma",
    
    // Hero Section
    companyTag: "VOLPI INVESTMENT REAL STATE",
    heroTitle: "Diversifique seu patrimônio em dólar com segurança e alta rentabilidade no mercado imobiliário da Flórida.",
    heroSubtitle: "Gestão profissional, Projetos estruturados, Retorno sólido para investidores brasileiros.",
    
    // Carousel Cards
    dollarPatrimony: "Patrimônio em Dólar",
    dollarPatrimonyDesc: "Proteja e multiplique seu patrimônio em moeda forte (dólar)",
    secureInvestment: "Investimento Seguro",
    secureInvestmentDesc: "Investimentos respaldados por expertise e regulamentação americana",
    highProfitability: "Alta Rentabilidade",
    highProfitabilityDesc: "Retornos superiores no mercado imobiliário da Flórida",
    professionalManagement: "Gestão Profissional",
    professionalManagementDesc: "Acompanhamento especializado de todos os seus investimentos",
    
    // Advantages Section
    ourAdvantages: "NOSSAS VANTAGENS",
    advantagesTitle: "Por que investir no mercado imobiliário da Flórida com a VOLPI Investments LLC?",
    marketExpansion: "Um mercado em plena expansão",
    marketExpansionDesc: "O setor imobiliário dos EUA representa 4,5% do PIB americano e está em expansão contínua.",
    globalDestination: "Destino de investimentos imobiliários globais",
    globalDestinationDesc: "A Flórida, com seu ambiente de negócios favorável e demanda crescente por imóveis residenciais, é um dos mercados mais atrativos para investidores estrangeiros.",
    multiplyPatrimony: "Multiplique seu patrimônio em dólar",
    multiplyPatrimonyDesc: "Ao investir com a VOLPI Investments LLC, você protege e multiplica seu patrimônio em moeda forte (dólar), com gestão profissional e projetos de alta performance.",
    
    // About Section
    aboutTitle: "Quem é a VOLPI Investments LLC?",
    whoWeAre: "Quem somos",
    whoWeAreDesc: "Empresa sediada na Flórida especializada em gestão de capital próprio e de terceiros, com foco em investimentos imobiliários.",
    operationalExpertise: "Expertise operacional",
    operationalExpertiseDesc: "Experiência consolidada em estruturação e gestão de projetos residenciais, tanto para venda quanto para aluguel.",
    leadership: "Liderança",
    leadershipDesc: "Liderada por Leonardo Volpi da Silva — profissional com mais de 21 anos de experiência no mercado financeiro e histórico comprovado de resultados.",
    
    // Solutions Section
    security: "SEGURANÇA",
    solutionsTitle: "Nossas soluções para você investir com segurança",
    investorAcquisition: "Captação de investidores",
    investorAcquisitionDesc: "conectamos investidores brasileiros às melhores oportunidades nos EUA.",
    constructionManagement: "Gestão completa de projetos de construção civil",
    constructionManagementDesc: "eficiência e qualidade em cada etapa.",
    propertyManagement: "Administração de imóveis",
    propertyManagementDesc: "total transparência e segurança na venda e locação.",
    projectDevelopment: "Desenvolvimento de empreendimentos próprios",
    projectDevelopmentDesc: "geração de lucro com venda e renda passiva.",
    solutionsCta: "Comece agora mesmo a diversificar seu patrimônio em dólar.",
    getInTouch: "Quero entrar em contato",
    
    // Benefits Section
    whyChooseVolpi: "Por que escolher a VOLPI?",
    benefitsSubtitle: "Diferenciais que protegem e valorizam seu capital",
    provenExperience: "Experiência e histórico comprovado",
    provenExperienceDesc: "cases de sucesso como Naked Laser, Naked Estética, Jump Trampolim Park, entre outros.",
    certification: "Certificação e compliance rigoroso",
    certificationDesc: "empresa registrada e em pleno funcionamento no estado da Flórida.",
    transparency: "Transparência e governança",
    transparencyDesc: "relatórios e acompanhamento completo para investidores.",
    
    // Testimonial
    testimonialText: "Após décadas de atuação no mercado financeiro, criei a VOLPI Investments LLC com um propósito claro: proporcionar aos investidores brasileiros uma porta segura e altamente rentável para o mercado imobiliário americano. Nosso compromisso é com a excelência e a transparência em cada investimento.",
    testimonialAuthor: "Leonardo Volpi",
    testimonialLocation: "São Paulo, BR",
    
    // CTA Section
    ctaTitle: "Comece agora mesmo a diversificar seu patrimônio em dólar.",
    ctaSubtitle: "Cadastre-se e receba nosso portfólio de oportunidades exclusivas.",
    receiveOpportunities: "Quero receber as Oportunidades",
    
    // Accessibility
    previous: "Anterior",
    next: "Próximo",
    goToSlide: "Ir para slide"
  },
  en: {
    // Header
    aboutUs: "About Us",
    services: "Services",
    benefits: "Benefits",
    contactUs: "Contact Us",
    learnMore: "Learn More",
    language: "Language",
    
    // Hero Section
    companyTag: "VOLPI INVESTMENT REAL STATE",
    heroTitle: "Diversify your dollar portfolio with security and high profitability in Florida's real estate market.",
    heroSubtitle: "Professional management, Structured projects, Solid returns for Brazilian investors.",
    
    // Carousel Cards
    dollarPatrimony: "Dollar Portfolio",
    dollarPatrimonyDesc: "Protect and multiply your assets in hard currency (dollar)",
    secureInvestment: "Secure Investment",
    secureInvestmentDesc: "Investments backed by American expertise and regulation",
    highProfitability: "High Profitability",
    highProfitabilityDesc: "Superior returns in Florida's real estate market",
    professionalManagement: "Professional Management",
    professionalManagementDesc: "Specialized monitoring of all your investments",
    
    // Advantages Section
    ourAdvantages: "OUR ADVANTAGES",
    advantagesTitle: "Why invest in Florida's real estate market with VOLPI Investments LLC?",
    marketExpansion: "A market in full expansion",
    marketExpansionDesc: "The US real estate sector represents 4.5% of American GDP and is in continuous expansion.",
    globalDestination: "Global real estate investment destination",
    globalDestinationDesc: "Florida, with its favorable business environment and growing demand for residential properties, is one of the most attractive markets for foreign investors.",
    multiplyPatrimony: "Multiply your dollar portfolio",
    multiplyPatrimonyDesc: "By investing with VOLPI Investments LLC, you protect and multiply your assets in hard currency (dollar), with professional management and high-performance projects.",
    
    // About Section
    aboutTitle: "Who is VOLPI Investments LLC?",
    whoWeAre: "Who we are",
    whoWeAreDesc: "Florida-based company specialized in managing proprietary and third-party capital, focusing on real estate investments.",
    operationalExpertise: "Operational expertise",
    operationalExpertiseDesc: "Consolidated experience in structuring and managing residential projects, both for sale and rental.",
    leadership: "Leadership",
    leadershipDesc: "Led by Leonardo Volpi da Silva — professional with over 21 years of experience in the financial market and proven track record of results.",
    
    // Solutions Section
    security: "SECURITY",
    solutionsTitle: "Our solutions for you to invest with security",
    investorAcquisition: "Investor acquisition",
    investorAcquisitionDesc: "we connect Brazilian investors to the best opportunities in the USA.",
    constructionManagement: "Complete construction project management",
    constructionManagementDesc: "efficiency and quality at every stage.",
    propertyManagement: "Property management",
    propertyManagementDesc: "total transparency and security in sales and leasing.",
    projectDevelopment: "Development of proprietary projects",
    projectDevelopmentDesc: "profit generation through sales and passive income.",
    solutionsCta: "Start diversifying your dollar portfolio right now.",
    getInTouch: "I want to get in touch",
    
    // Benefits Section
    whyChooseVolpi: "Why choose VOLPI?",
    benefitsSubtitle: "Differentials that protect and enhance your capital",
    provenExperience: "Proven experience and track record",
    provenExperienceDesc: "success cases like Naked Laser, Naked Estética, Jump Trampolim Park, among others.",
    certification: "Rigorous certification and compliance",
    certificationDesc: "registered company in full operation in the state of Florida.",
    transparency: "Transparency and governance",
    transparencyDesc: "complete reports and monitoring for investors.",
    
    // Testimonial
    testimonialText: "After decades of working in the financial market, I created VOLPI Investments LLC with a clear purpose: to provide Brazilian investors with a safe and highly profitable gateway to the American real estate market. Our commitment is to excellence and transparency in every investment.",
    testimonialAuthor: "Leonardo Volpi",
    testimonialLocation: "São Paulo, BR",
    
    // CTA Section
    ctaTitle: "Start diversifying your dollar portfolio right now.",
    ctaSubtitle: "Sign up and receive our portfolio of exclusive opportunities.",
    receiveOpportunities: "I want to receive the Opportunities",
    
    // Accessibility
    previous: "Previous",
    next: "Next",
    goToSlide: "Go to slide"
  },
  it: {
    // Header
    aboutUs: "Chi Siamo",
    services: "Servizi",
    benefits: "Vantaggi",
    contactUs: "Contattaci",
    learnMore: "Scopri di più",
    language: "Lingua",
    
    // Hero Section
    companyTag: "VOLPI INVESTMENT REAL STATE",
    heroTitle: "Diversifica il tuo patrimonio in dollari con sicurezza e alta redditività nel mercato immobiliare della Florida.",
    heroSubtitle: "Gestione professionale, Progetti strutturati, Rendimenti solidi per investitori brasiliani.",
    
    // Carousel Cards
    dollarPatrimony: "Patrimonio in Dollari",
    dollarPatrimonyDesc: "Proteggi e moltiplica il tuo patrimonio in valuta forte (dollaro)",
    secureInvestment: "Investimento Sicuro",
    secureInvestmentDesc: "Investimenti supportati da competenza e regolamentazione americana",
    highProfitability: "Alta Redditività",
    highProfitabilityDesc: "Rendimenti superiori nel mercato immobiliare della Florida",
    professionalManagement: "Gestione Professionale",
    professionalManagementDesc: "Monitoraggio specializzato di tutti i tuoi investimenti",
    
    // Advantages Section
    ourAdvantages: "I NOSTRI VANTAGGI",
    advantagesTitle: "Perché investire nel mercato immobiliare della Florida con VOLPI Investments LLC?",
    marketExpansion: "Un mercato in piena espansione",
    marketExpansionDesc: "Il settore immobiliare statunitense rappresenta il 4,5% del PIL americano ed è in continua espansione.",
    globalDestination: "Destinazione di investimenti immobiliari globali",
    globalDestinationDesc: "La Florida, con il suo ambiente commerciale favorevole e la crescente domanda di proprietà residenziali, è uno dei mercati più attraenti per gli investitori stranieri.",
    multiplyPatrimony: "Moltiplica il tuo patrimonio in dollari",
    multiplyPatrimonyDesc: "Investendo con VOLPI Investments LLC, proteggi e moltiplichi il tuo patrimonio in valuta forte (dollaro), con gestione professionale e progetti ad alte prestazioni.",
    
    // About Section
    aboutTitle: "Chi è VOLPI Investments LLC?",
    whoWeAre: "Chi siamo",
    whoWeAreDesc: "Azienda con sede in Florida specializzata nella gestione di capitali propri e di terzi, con focus sugli investimenti immobiliari.",
    operationalExpertise: "Competenza operativa",
    operationalExpertiseDesc: "Esperienza consolidata nella strutturazione e gestione di progetti residenziali, sia per vendita che per affitto.",
    leadership: "Leadership",
    leadershipDesc: "Guidata da Leonardo Volpi da Silva — professionista con oltre 21 anni di esperienza nel mercato finanziario e comprovato track record di risultati.",
    
    // Solutions Section
    security: "SICUREZZA",
    solutionsTitle: "Le nostre soluzioni per investire in sicurezza",
    investorAcquisition: "Acquisizione investitori",
    investorAcquisitionDesc: "colleghiamo gli investitori brasiliani alle migliori opportunità negli USA.",
    constructionManagement: "Gestione completa progetti di costruzione",
    constructionManagementDesc: "efficienza e qualità in ogni fase.",
    propertyManagement: "Amministrazione immobiliare",
    propertyManagementDesc: "totale trasparenza e sicurezza nella vendita e locazione.",
    projectDevelopment: "Sviluppo di progetti proprietari",
    projectDevelopmentDesc: "generazione di profitto attraverso vendite e reddito passivo.",
    solutionsCta: "Inizia subito a diversificare il tuo patrimonio in dollari.",
    getInTouch: "Voglio mettermi in contatto",
    
    // Benefits Section
    whyChooseVolpi: "Perché scegliere VOLPI?",
    benefitsSubtitle: "Differenziali che proteggono e valorizzano il tuo capitale",
    provenExperience: "Esperienza comprovata e track record",
    provenExperienceDesc: "casi di successo come Naked Laser, Naked Estética, Jump Trampolim Park, tra gli altri.",
    certification: "Certificazione rigorosa e compliance",
    certificationDesc: "azienda registrata e in piena operazione nello stato della Florida.",
    transparency: "Trasparenza e governance",
    transparencyDesc: "report completi e monitoraggio per gli investitori.",
    
    // Testimonial
    testimonialText: "Dopo decenni di lavoro nel mercato finanziario, ho creato VOLPI Investments LLC con un obiettivo chiaro: fornire agli investitori brasiliani una porta sicura e altamente redditizia verso il mercato immobiliare americano. Il nostro impegno è per l'eccellenza e la trasparenza in ogni investimento.",
    testimonialAuthor: "Leonardo Volpi",
    testimonialLocation: "São Paulo, BR",
    
    // CTA Section
    ctaTitle: "Inizia subito a diversificare il tuo patrimonio in dollari.",
    ctaSubtitle: "Iscriviti e ricevi il nostro portfolio di opportunità esclusive.",
    receiveOpportunities: "Voglio ricevere le Opportunità",
    
    // Accessibility
    previous: "Precedente",
    next: "Successivo",
    goToSlide: "Vai alla slide"
  },
  es: {
    // Header
    aboutUs: "Nosotros",
    services: "Servicios",
    benefits: "Beneficios",
    contactUs: "Cont��ctanos",
    learnMore: "Saber más",
    language: "Idioma",
    
    // Hero Section
    companyTag: "VOLPI INVESTMENT REAL STATE",
    heroTitle: "Diversifica tu patrimonio en dólares con seguridad y alta rentabilidad en el mercado inmobiliario de Florida.",
    heroSubtitle: "Gestión profesional, Proyectos estructurados, Retornos sólidos para inversores brasileños.",
    
    // Carousel Cards
    dollarPatrimony: "Patrimonio en Dólares",
    dollarPatrimonyDesc: "Protege y multiplica tu patrimonio en moneda fuerte (dólar)",
    secureInvestment: "Inversión Segura",
    secureInvestmentDesc: "Inversiones respaldadas por experiencia y regulación americana",
    highProfitability: "Alta Rentabilidad",
    highProfitabilityDesc: "Retornos superiores en el mercado inmobiliario de Florida",
    professionalManagement: "Gestión Profesional",
    professionalManagementDesc: "Monitoreo especializado de todas tus inversiones",
    
    // Advantages Section
    ourAdvantages: "NUESTRAS VENTAJAS",
    advantagesTitle: "¿Por qué invertir en el mercado inmobiliario de Florida con VOLPI Investments LLC?",
    marketExpansion: "Un mercado en plena expansión",
    marketExpansionDesc: "El sector inmobiliario estadounidense representa el 4,5% del PIB americano y está en continua expansión.",
    globalDestination: "Destino de inversiones inmobiliarias globales",
    globalDestinationDesc: "Florida, con su entorno empresarial favorable y la creciente demanda de propiedades residenciales, es uno de los mercados más atractivos para inversores extranjeros.",
    multiplyPatrimony: "Multiplica tu patrimonio en dólares",
    multiplyPatrimonyDesc: "Al invertir con VOLPI Investments LLC, proteges y multiplicas tu patrimonio en moneda fuerte (dólar), con gestión profesional y proyectos de alto rendimiento.",
    
    // About Section
    aboutTitle: "¿Quién es VOLPI Investments LLC?",
    whoWeAre: "Quiénes somos",
    whoWeAreDesc: "Empresa con sede en Florida especializada en gestión de capital propio y de terceros, enfocada en inversiones inmobiliarias.",
    operationalExpertise: "Experiencia operacional",
    operationalExpertiseDesc: "Experiencia consolidada en estructuración y gestión de proyectos residenciales, tanto para venta como para alquiler.",
    leadership: "Liderazgo",
    leadershipDesc: "Dirigida por Leonardo Volpi da Silva — profesional con más de 21 años de experiencia en el mercado financiero e historial comprobado de resultados.",
    
    // Solutions Section
    security: "SEGURIDAD",
    solutionsTitle: "Nuestras soluciones para que inviertas con seguridad",
    investorAcquisition: "Captación de inversores",
    investorAcquisitionDesc: "conectamos inversores brasileños con las mejores oportunidades en EE.UU.",
    constructionManagement: "Gestión completa de proyectos de construcción",
    constructionManagementDesc: "eficiencia y calidad en cada etapa.",
    propertyManagement: "Administración inmobiliaria",
    propertyManagementDesc: "total transparencia y seguridad en venta y alquiler.",
    projectDevelopment: "Desarrollo de emprendimientos propios",
    projectDevelopmentDesc: "generación de beneficio a través de ventas e ingresos pasivos.",
    solutionsCta: "Comienza ahora mismo a diversificar tu patrimonio en dólares.",
    getInTouch: "Quiero ponerme en contacto",
    
    // Benefits Section
    whyChooseVolpi: "¿Por qué elegir VOLPI?",
    benefitsSubtitle: "Diferenciales que protegen y valorizan tu capital",
    provenExperience: "Experiencia comprobada e historial",
    provenExperienceDesc: "casos de éxito como Naked Laser, Naked Estética, Jump Trampolim Park, entre otros.",
    certification: "Certificación rigurosa y compliance",
    certificationDesc: "empresa registrada y en pleno funcionamiento en el estado de Florida.",
    transparency: "Transparencia y gobernanza",
    transparencyDesc: "informes completos y seguimiento para inversores.",
    
    // Testimonial
    testimonialText: "Después de décadas de trabajo en el mercado financiero, creé VOLPI Investments LLC con un propósito claro: proporcionar a los inversores brasileños una puerta segura y altamente rentable hacia el mercado inmobiliario americano. Nuestro compromiso es con la excelencia y la transparencia en cada inversión.",
    testimonialAuthor: "Leonardo Volpi",
    testimonialLocation: "São Paulo, BR",
    
    // CTA Section
    ctaTitle: "Comienza ahora mismo a diversificar tu patrimonio en dólares.",
    ctaSubtitle: "Regístrate y recibe nuestro portafolio de oportunidades exclusivas.",
    receiveOpportunities: "Quiero recibir las Oportunidades",
    
    // Accessibility
    previous: "Anterior",
    next: "Siguiente",
    goToSlide: "Ir a la diapositiva"
  }
};

// Hook para usar o contexto de idioma
function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Provider de idioma
function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Dados do carousel com traduç��es
function useCarouselData() {
  const { t } = useLanguage();
  return [
    {
      id: 1,
      title: t('dollarPatrimony'),
      description: t('dollarPatrimonyDesc'),
      image: imgPexelsSebastians7310821,
      icon: "dollar"
    },
    {
      id: 2,
      title: t('secureInvestment'),
      description: t('secureInvestmentDesc'),
      image: imgImage,
      icon: "shield"
    },
    {
      id: 3,
      title: t('highProfitability'),
      description: t('highProfitabilityDesc'),
      image: imgImage1,
      icon: "chart"
    },
    {
      id: 4,
      title: t('professionalManagement'),
      description: t('professionalManagementDesc'),
      image: imgImage2,
      icon: "briefcase"
    }
  ];
}

function VolpiLogo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
        <div
          className="[grid-area:1_/_1] h-[37.511px] ml-0 mt-[4.366px] relative w-[58.242px]"
          data-name="Subtract"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 59 38"
          >
            <path
              d={svgPaths.p23ef4a00}
              fill="var(--fill-0, #CEB37E)"
              id="Subtract"
            />
          </svg>
        </div>
        <div className="[grid-area:1_/_1] font-['Lora:Medium',_sans-serif] font-medium leading-[19.7597px] ml-[71.828px] mt-0 relative text-[#ffffff] text-[17.2898px] text-left text-nowrap whitespace-pre">
          <p className="block mb-0">VOLPI</p>
          <p className="block">INVESMENTS</p>
        </div>
        <div className="[grid-area:1_/_1] font-['Aeonik:Medium',_sans-serif] ml-[71.828px] mt-[37.873px] not-italic relative text-[#ffffff] text-[4.10125px] text-left text-nowrap tracking-[0.861263px]">
          <p className="adjustLetterSpacing block leading-[13.124px] whitespace-pre">
            INVESTIMENTO IMOBILIÁRIO
          </p>
        </div>
        <div className="[grid-area:1_/_1] flex h-[44.375px] items-center justify-center ml-[64.067px] mt-0 relative w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[44.387px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-0.243px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 45 1"
                >
                  <line
                    stroke="var(--stroke-0, #CEB37E)"
                    strokeWidth="0.242552"
                    x2="44.387"
                    y1="0.878724"
                    y2="0.878724"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center cursor-pointer lg:hidden">
      <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
      <div className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
      <div className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
    </div>
  );
}

function NavigationMenu({ isMobile = false, onItemClick }: { isMobile?: boolean; onItemClick?: () => void }) {
  const { t } = useLanguage();
  const baseClass = isMobile 
    ? "flex flex-col space-y-6 p-6" 
    : "hidden lg:flex flex-row gap-[51px] items-center";

  return (
    <div className={`${baseClass} font-['Nunito:Regular',_sans-serif] font-normal text-[#ffffff] text-base`}>
      <div className="cursor-pointer hover:text-[#CEB37E] transition-colors" onClick={onItemClick}>
        <p className="block">{t('aboutUs')}</p>
      </div>
      <div className="cursor-pointer hover:text-[#CEB37E] transition-colors" onClick={onItemClick}>
        <p className="block">{t('services')}</p>
      </div>
      <div className="cursor-pointer hover:text-[#CEB37E] transition-colors" onClick={onItemClick}>
        <p className="block">{t('benefits')}</p>
      </div>
      <div className="cursor-pointer hover:text-[#CEB37E] transition-colors" onClick={onItemClick}>
        <p className="block">{t('contactUs')}</p>
      </div>
    </div>
  );
}

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Obter outras opções de idioma (excluir o atual)
  const otherLanguages = (Object.keys(languageLabels) as Language[]).filter(lang => lang !== language);

  return (
    <div className="hidden sm:flex relative language-selector">
      <div 
        className="flex items-center cursor-pointer hover:text-[#CEB37E] transition-colors"
        onClick={toggleDropdown}
      >
        <span className="font-['Nunito:Regular',_sans-serif] font-normal text-[#ffffff] text-base mr-2">
          {languageLabels[language]}
        </span>
        <svg
          className={`w-3 h-1.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 9"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 bg-[#06102E] border border-white/20 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-95 min-w-[100px] z-50">
          <div className="py-2">
            {otherLanguages.map((lang) => (
              <button
                key={lang}
                className="w-full px-4 py-2 text-left text-white hover:bg-white/10 hover:text-[#CEB37E] transition-colors font-['Nunito:Regular',_sans-serif] text-base"
                onClick={() => selectLanguage(lang)}
              >
                {languageLabels[lang]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLanguageSelector({ onItemClick }: { onItemClick?: () => void }) {
  const { language, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
    if (onItemClick) {
      onItemClick();
    }
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-language-selector')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Obter outras opções de idioma (excluir o atual)
  const otherLanguages = (Object.keys(languageLabels) as Language[]).filter(lang => lang !== language);

  return (
    <div className="w-full">
      {/* Separador */}
      <div className="border-t border-white/10 my-4"></div>
      
      {/* Mobile Language Dropdown */}
      <div className="px-6 relative mobile-language-selector">
        <div 
          className="flex items-center justify-between cursor-pointer hover:text-[#CEB37E] transition-colors py-2"
          onClick={toggleDropdown}
        >
          <span className="font-['Nunito:Regular',_sans-serif] font-normal text-[#ffffff] text-base">
            {languageLabels[language]}
          </span>
          <svg
            className={`w-3 h-1.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 14 9"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
        
        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="mt-2 bg-[#06102E] border border-white/20 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-95 w-full z-50">
            <div className="py-2">
              {otherLanguages.map((lang) => (
                <button
                  key={lang}
                  className="w-full px-4 py-3 text-left text-white hover:bg-white/10 hover:text-[#CEB37E] transition-colors font-['Nunito:Regular',_sans-serif] text-base"
                  onClick={() => selectLanguage(lang)}
                >
                  {languageLabels[lang]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function HeaderButton({ isMobile = false }: { isMobile?: boolean }) {
  const { t } = useLanguage();
  const buttonClass = isMobile 
    ? "bg-[#ceb37e] h-12 rounded-2xl w-full max-w-[280px] cursor-pointer hover:bg-[#b8a170] transition-colors"
    : "bg-[#ceb37e] h-[62px] rounded-[17px] w-[203px] cursor-pointer hover:bg-[#b8a170] transition-colors";

  return (
    <div className={buttonClass} onClick={openWhatsApp}>
      <div className="flex items-center justify-center h-full">
        <div className="font-['Lora:Regular',_sans-serif] font-normal text-[#000000] text-base">
          <p>{t('learnMore')}</p>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-between w-full max-w-none">
          <VolpiLogo />
          
          {/* Desktop Navigation */}
          <NavigationMenu />
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-[19px]">
            <LanguageSelector />
            <HeaderButton />
          </div>

          {/* Mobile Menu Button */}
          <div 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            <MobileMenuIcon isOpen={isMobileMenuOpen} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#06102E] border-t border-white/10 z-50">
          <NavigationMenu 
            isMobile={true} 
            onItemClick={() => setIsMobileMenuOpen(false)} 
          />
          
          {/* Mobile Language Selector */}
          <MobileLanguageSelector onItemClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="px-6 py-6 border-t border-white/10 mt-4">
            <HeaderButton isMobile={true} />
          </div>
        </div>
      )}
    </>
  );
}

function HeaderContainer() {
  return (
    <div className="h-[130px] relative w-full border-b border-[rgba(255,255,255,0.1)]">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[130px] items-center justify-center px-4 sm:px-8 lg:px-[116px] py-8 relative w-full">
          <Header />
        </div>
      </div>
    </div>
  );
}

function BackgroundImage({ currentImage }: { currentImage: string }) {
  return (
    <div className="absolute contents left-0 top-0">
      <div
        className="[background-size:234.23%_115.93%] absolute bg-[80.35%_100%] bg-no-repeat h-[816px] left-0 top-0 w-[669px] transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url('${currentImage}')` }}
      />
      <div
        className="absolute h-[816px] left-0 top-0 w-[660px]"
        style={{
          backgroundImage:
            "linear-gradient(69.3507deg, rgb(6, 16, 46) 23.17%, rgba(6, 16, 46, 0) 109.83%)",
        }}
      />
    </div>
  );
}

function NavigationArrow({
  direction = "right",
  onClick,
}: {
  direction?: "left" | "right";
  onClick?: () => void;
}) {
  const { t } = useLanguage();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`size-10 lg:size-14 cursor-pointer hover:bg-white/20 active:bg-white/30 transition-all duration-200 hover:scale-110 active:scale-95 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 ${
        direction === "left" ? "rotate-180 scale-y-[-100%]" : ""
      }`}
      onClick={handleClick}
      type="button"
      aria-label={direction === "left" ? t('previous') : t('next')}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 56 56"
      >
        <g>
          <path
            d={svgPaths.p16b77b80}
            stroke="white"
            strokeWidth="3"
          />
          <rect
            height="53"
            rx="26.5"
            stroke="white"
            strokeWidth="3"
            width="53"
            x="1.5"
            y="1.5"
          />
        </g>
      </svg>
    </button>
  );
}

function FeatureIcon({ iconType }: { iconType: string }) {
  switch (iconType) {
    case "dollar":
      return (
        <svg
          className="block w-6 h-6"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <g>
            <path
              d={svgPaths.p28e3d640}
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </g>
        </svg>
      );
    case "shield":
      return (
        <svg
          className="block w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "chart":
      return (
        <svg
          className="block w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case "briefcase":
      return (
        <svg
          className="block w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4a2 2 0 00-2-2H8a2 2 0 00-2 2v2m8 0v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6m8 0H6m8 0a2 2 0 012 2v8a2 2 0 01-2 2" />
        </svg>
      );
    default:
      return (
        <svg
          className="block w-6 h-6"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <g>
            <path
              d={svgPaths.p28e3d640}
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </g>
        </svg>
      );
  }
}

function FeatureCard({ currentCard }: { currentCard: ReturnType<typeof useCarouselData>[0] }) {
  return (
    <div className="backdrop-blur-[10.7px] backdrop-filter bg-[rgba(255,255,255,0.16)] relative rounded-[13px] shrink-0 w-full max-w-[345px] border border-[rgba(255,255,255,0.14)] border-dashed transition-all duration-500 ease-in-out">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start px-[26px] py-[25px] relative w-full">
          <div className="relative shrink-0 size-[55.5px]">
            <div className="absolute contents left-0 top-0">
              <div className="absolute bg-[rgba(255,255,255,0.09)] left-0 rounded-[3.96429px] size-[55.5px] top-0" />
              <div className="absolute left-[9.5px] size-9 top-2.5">
                <FeatureIcon iconType={currentCard.icon} />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-left w-full">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#ffffff] text-[20px] w-full">
                <p className="block leading-[30px]">{currentCard.title}</p>
              </div>
              <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[18px] text-[rgba(255,255,255,0.47)] w-full">
                <p className="block leading-[24.85px]">{currentCard.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavigationArrows({ onPrevClick, onNextClick }: { onPrevClick: () => void; onNextClick: () => void }) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <NavigationArrow direction="left" onClick={onPrevClick} />
        <NavigationArrow direction="right" onClick={onNextClick} />
      </div>
    </div>
  );
}

function CardAndArrows({ currentCard, onPrevClick, onNextClick }: { 
  currentCard: ReturnType<typeof useCarouselData>[0]; 
  onPrevClick: () => void; 
  onNextClick: () => void;
}) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col lg:flex-row gap-4 lg:gap-[67px] items-end justify-start p-0 relative">
        <FeatureCard currentCard={currentCard} />
        <div className="flex justify-center lg:justify-start">
          <NavigationArrows onPrevClick={onPrevClick} onNextClick={onNextClick} />
        </div>
      </div>
    </div>
  );
}

function HeroBackgroundSection({ currentCard, onPrevClick, onNextClick }: { 
  currentCard: ReturnType<typeof useCarouselData>[0]; 
  onPrevClick: () => void; 
  onNextClick: () => void;
}) {
  return (
    <div className="absolute h-[816px] left-0 lg:left-[780px] top-0 w-full lg:w-[660px]">
      <div className="flex flex-col items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[816px] items-center justify-end px-[49px] py-[34px] relative w-full lg:w-[660px]">
          <div className="absolute h-[816px] left-0 overflow-clip top-0 w-full lg:w-[660px]">
            <BackgroundImage currentImage={currentCard.image} />
          </div>
          <CardAndArrows 
            currentCard={currentCard} 
            onPrevClick={onPrevClick} 
            onNextClick={onNextClick}
          />
        </div>
      </div>
    </div>
  );
}

function HeroContent() {
  const { t } = useLanguage();
  
  return (
    <div className="relative shrink-0 w-full max-w-[598px]">
      <div className="box-border content-stretch flex flex-col gap-[37px] items-start justify-start p-0 relative w-full">
        <div className="bg-[rgba(255,255,255,0.07)] relative rounded-[165px] shrink-0 w-full max-w-[293px] border border-[rgba(225,225,225,0.14)]">
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[10px] relative w-full">
              <div className="font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-sm lg:text-base text-[rgba(255,255,255,0.51)] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">
                  {t('companyTag')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative shrink-0 w-full">
          <div className="[flex-flow:wrap] box-border content-end flex gap-3 items-end justify-start p-0 relative w-full">
            <div className="relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-[23px] items-start justify-start leading-[0] p-0 relative text-left w-full">
                <div className="font-['Lora:Medium',_sans-serif] font-medium relative shrink-0 text-[#ffffff] text-2xl sm:text-3xl lg:text-[42px] leading-tight lg:leading-[62px] w-full">
                  <p className="block">
                    {t('heroTitle')}
                  </p>
                </div>
                <div className="font-['Inter:Regular',_sans-serif] font-normal not-italic relative shrink-0 text-lg lg:text-[24px] text-[rgba(255,255,255,0.71)] w-full">
                  <p className="block leading-[normal]">
                    {t('heroSubtitle')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="bg-[#ceb37e] h-14 lg:h-[72px] relative rounded-lg shrink-0 w-full sm:w-[233px] cursor-pointer hover:bg-[#b8a170] transition-colors" onClick={openWhatsApp}>
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2.5 h-14 lg:h-[72px] items-center justify-center px-6 lg:px-[88px] py-[33px] relative w-full sm:w-[233px]">
                    <div className="font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-base text-left text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">{t('learnMore')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[rgba(255,255,255,0.07)] h-14 lg:h-[72px] relative rounded-lg shrink-0 w-full sm:w-[233px] cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors" onClick={openWhatsApp}>
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2.5 h-14 lg:h-[72px] items-center justify-center px-6 lg:px-[88px] py-[33px] relative w-full sm:w-[233px]">
                    <div className="font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-base text-left text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">
                        {t('contactUs')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselIndicators({ currentIndex, total, onIndicatorClick }: { 
  currentIndex: number; 
  total: number; 
  onIndicatorClick: (index: number) => void;
}) {
  const { t } = useLanguage();
  
  return (
    <div className="flex gap-2 lg:hidden justify-center mt-6">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-200 border-none outline-none ${
            index === currentIndex 
              ? 'bg-[#CEB37E] w-6' 
              : 'bg-white/30 hover:bg-white/50'
          }`}
          onClick={() => onIndicatorClick(index)}
          aria-label={`${t('goToSlide')} ${index + 1}`}
        />
      ))}
    </div>
  );
}

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselData = useCarouselData();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [carouselData.length]);

  const currentCard = carouselData[currentIndex];

  return (
    <div className="h-[816px] relative shrink-0 w-full overflow-hidden">
      <div className="absolute h-[816px] left-0 top-0 w-[1440px]">
        <HeroBackgroundSection 
          currentCard={currentCard} 
          onPrevClick={prevSlide} 
          onNextClick={nextSlide}
        />
        
        {/* Decorative Lines */}
        <div className="hidden lg:block absolute flex h-[816px] items-center justify-center left-[83px] top-0 w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[816px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 816 1"
                >
                  <line
                    stroke="white"
                    strokeOpacity="0.1"
                    x2="816"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block absolute flex h-[816px] items-center justify-center left-[780px] top-0 w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[816px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 816 1"
                >
                  <line
                    stroke="white"
                    strokeOpacity="0.1"
                    x2="816"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block absolute h-0 left-0 top-[816px] w-[1440px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1440 1"
            >
              <line
                stroke="white"
                strokeOpacity="0.1"
                x2="1440"
                y1="0.5"
                y2="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 h-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[816px] items-start justify-start px-4 sm:px-8 lg:px-[124px] py-8 lg:py-[130px] relative w-full">
          <HeroContent />
        </div>
        
        {/* Mobile Carousel Indicators */}
        <div className="px-4 sm:px-8 pb-4 lg:hidden">
          <CarouselIndicators 
            currentIndex={currentIndex} 
            total={carouselData.length} 
            onIndicatorClick={goToSlide}
          />
        </div>
      </div>
    </div>
  );
}

// Componentes de ícones específicos do Figma
function ChartIcon() {
  return (
    <svg
      className="block w-[26px] h-[25.94px]"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 26 26"
    >
      <g>
        <path
          d={svgPathsFigma.p338ca100}
          fill="white"
        />
        <path
          d={svgPathsFigma.p2da81e80}
          fill="white"
        />
      </g>
    </svg>
  );
}

function MoneyHomeIcon() {
  return (
    <svg
      className="block w-[30px] h-[30px]"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 30 30"
    >
      <g clipPath="url(#clip0_21_71)">
        <path
          d="M25 10.625V28.125H5V10.625"
          stroke="white"
          strokeMiterlimit="10"
          strokeWidth="2.5"
        />
        <path
          d={svgPathsFigma.p24629580}
          stroke="white"
          strokeMiterlimit="10"
          strokeWidth="2.5"
        />
        <path
          d={svgPathsFigma.p38bfb900}
          stroke="white"
          strokeMiterlimit="10"
          strokeWidth="2.5"
        />
        <path
          d="M15 8.125V11.875"
          stroke="white"
          strokeMiterlimit="10"
          strokeWidth="2.5"
        />
        <path
          d="M15 25.625V21.875"
          stroke="white"
          strokeMiterlimit="10"
          strokeWidth="2.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_21_71">
          <rect fill="white" height="30" width="30" />
        </clipPath>
      </defs>
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg
      className="block w-[28px] h-[28px]"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 28 28"
    >
      <g>
        <path
          d={svgPathsFigma.pba30280}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.33333"
        />
      </g>
    </svg>
  );
}

function IconCard({
  title,
  description,
  iconType,
}: {
  title: string;
  description: string;
  iconType: "chart" | "moneyHome" | "dollar";
}) {
  const renderIcon = () => {
    switch (iconType) {
      case "chart":
        return <ChartIcon />;
      case "moneyHome":
        return <MoneyHomeIcon />;
      case "dollar":
        return <DollarIcon />;
      default:
        return <ChartIcon />;
    }
  };

  return (
    <div className="w-full space-y-8 lg:space-y-[35px]">
      <div className="relative w-14 h-14">
        <div className="absolute bg-[rgba(255,255,255,0.09)] rounded w-14 h-14" />
        <div className="absolute inset-0 flex items-center justify-center">
          {renderIcon()}
        </div>
      </div>
      
      <div className="space-y-6 lg:space-y-8">
        <div className="font-['Lora:Regular',_sans-serif] text-[#ffffff] text-xl lg:text-[32px] leading-[35px] lg:leading-[37px]">
          <p>{title}</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] text-base lg:text-[18px] text-[rgba(255,255,255,0.47)] leading-[24.85px]">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function VantagesSection() {
  const { t } = useLanguage();
  
  return (
    <div className="w-full max-w-[1278px] mx-auto px-4 sm:px-8 lg:px-0 space-y-12 lg:space-y-[66px]">
      <div className="max-w-[724px] space-y-2 lg:space-y-[9px]">
        <div className="font-['Space_Grotesk:Regular',_sans-serif] font-normal text-[#ceb37e] text-base">
          <p>{t('ourAdvantages')}</p>
        </div>
        <div className="font-['Lora:Medium',_sans-serif] font-medium text-2xl lg:text-[36px] text-[#ffffff] leading-tight lg:leading-[62px]">
          <p>
            {t('advantagesTitle')}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-7">
        <IconCard
          title={t('marketExpansion')}
          description={t('marketExpansionDesc')}
          iconType="chart"
        />
        <IconCard
          title={t('globalDestination')}
          description={t('globalDestinationDesc')}
          iconType="moneyHome"
        />
        <IconCard
          title={t('multiplyPatrimony')}
          description={t('multiplyPatrimonyDesc')}
          iconType="dollar"
        />
      </div>
    </div>
  );
}

function AboutCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-full space-y-4 lg:space-y-[21px]">
      <div
        className="bg-center bg-cover bg-no-repeat h-48 lg:h-[300px] rounded-2xl w-full"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="space-y-2 lg:space-y-[9px]">
        <div className="font-['Lora:Medium',_sans-serif] font-medium text-xl lg:text-[32px] text-[#ffffff]">
          <p>{title}</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal text-base lg:text-[18px] text-[rgba(255,255,255,0.47)]">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <div className="w-full px-4 sm:px-8 lg:px-0 space-y-12 lg:space-y-[62px]">
      <div className="max-w-[589px] space-y-2 lg:space-y-[9px]">
        <div className="font-['Space_Grotesk:Regular',_sans-serif] font-normal text-[#ceb37e] text-base">
          <p>{t('ourAdvantages')}</p>
        </div>
        <div className="font-['Lora:Medium',_sans-serif] font-medium text-2xl lg:text-[36px] text-[#ffffff] leading-tight lg:leading-[62px]">
          <p>{t('aboutTitle')}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-[27px]">
        <AboutCard
          image={imgImage}
          title={t('whoWeAre')}
          description={t('whoWeAreDesc')}
        />
        <AboutCard
          image={imgImage1}
          title={t('operationalExpertise')}
          description={t('operationalExpertiseDesc')}
        />
        <AboutCard
          image={imgImage2}
          title={t('leadership')}
          description={t('leadershipDesc')}
        />
      </div>
    </div>
  );
}

function SolutionCard({
  number,
  title,
  description,
  image,
}: {
  number: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="h-48 lg:h-[260px] overflow-hidden relative rounded-2xl w-full">
      <div
        className="bg-center bg-cover bg-no-repeat absolute inset-0"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(105.091deg, rgba(6, 16, 46, 0.14) 2.1368%, rgba(7, 15, 39, 0.847) 47.467%, rgb(8, 15, 37) 83.789%)",
        }}
      />
      
      <div className="absolute top-2 left-4 font-['Lora:Medium',_sans-serif] font-medium text-6xl lg:text-[206.27px] text-[rgba(255,255,255,0.16)] leading-none">
        <p>{number}</p>
      </div>
      
      <div className="absolute bottom-4 right-4 left-4 lg:left-[291px] lg:right-4 space-y-2">
        <div className="font-['Lora:Regular',_sans-serif] font-normal text-lg lg:text-[32px] text-[rgba(255,255,255,0.8)] leading-tight lg:leading-[34px]">
          <p>{title}</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal text-sm lg:text-base text-[rgba(255,255,255,0.47)]">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function SolutionsSection() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-[#D9D9D9] w-full py-16 lg:py-[121px]">
      <div className="max-w-[1283px] mx-auto px-4 sm:px-8 lg:px-[66px] space-y-16 lg:space-y-[103px]">
        <div className="space-y-12 lg:space-y-[82px]">
          <div className="max-w-[640px] space-y-3">
            <div className="font-['Space_Grotesk:Regular',_sans-serif] font-normal text-[#ceb37e] text-lg lg:text-[20px]">
              <p>{t('security')}</p>
            </div>
            <div className="font-['Lora:Medium',_sans-serif] font-medium text-2xl lg:text-[48px] text-[#06102e] leading-tight lg:leading-[59px]">
              <p>
                {t('solutionsTitle')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[25px]">
            <SolutionCard
              number="01"
              title={t('investorAcquisition')}
              description={t('investorAcquisitionDesc')}
              image={imgPexelsSebastians7310821}
            />
            <SolutionCard
              number="02"
              title={t('constructionManagement')}
              description={t('constructionManagementDesc')}
              image={imgPexelsBinyaminmellish1860771}
            />
            <SolutionCard
              number="03"
              title={t('propertyManagement')}
              description={t('propertyManagementDesc')}
              image={imgPexelsScottwebb1409631}
            />
            <SolutionCard
              number="04"
              title={t('projectDevelopment')}
              description={t('projectDevelopmentDesc')}
              image={imgPexelsDaliaAlRefai23537673217131036}
            />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-[331px]">
          <div className="font-['Inter:Medium',_sans-serif] font-medium text-xl lg:text-[32px] text-[rgba(6,16,46,0.46)] leading-tight lg:leading-[49px] max-w-[640px]">
            <p>
              {t('solutionsCta')}
            </p>
          </div>
          <div className="bg-[#ceb37e] h-16 lg:h-24 rounded-full w-full lg:w-[303px] cursor-pointer hover:bg-[#b8a170] transition-colors" onClick={openWhatsApp}>
            <div className="flex items-center justify-center h-full px-8">
              <div className="font-['Space_Grotesk:Regular',_sans-serif] font-normal text-[#000000] text-lg lg:text-[20px]">
                <p>{t('getInTouch')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componentes de ícones específicos dos benefícios do Figma
function VerifiedIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
    >
      <path
        d={svgPathsBenefits.pc4a4800}
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CertifiedIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_39_71)">
        <path
          d={svgPathsBenefits.p3dc19620}
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_39_71">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CheckFileIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d={svgPathsBenefits.p26332d00}
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}

function BenefitCard({
  title,
  description,
  iconType,
}: {
  title: string;
  description: string;
  iconType: "verified" | "certified" | "checkFile";
}) {
  const renderIcon = () => {
    switch (iconType) {
      case "verified":
        return <VerifiedIcon />;
      case "certified":
        return <CertifiedIcon />;
      case "checkFile":
        return <CheckFileIcon />;
      default:
        return <VerifiedIcon />;
    }
  };

  return (
    <div className="h-auto lg:h-[518px] bg-[rgba(255,255,255,0.09)] rounded-2xl p-6 lg:p-8 w-full">
      <div className="flex flex-col justify-between h-full space-y-8">
        <div className="space-y-8">
          <div className="relative w-14 h-14">
            <div className="absolute bg-[rgba(255,255,255,0.09)] rounded w-14 h-14" />
            <div className="absolute inset-0 flex items-center justify-center">
              {renderIcon()}
            </div>
          </div>
          
          <div className="font-['Lora:Regular',_sans-serif] font-normal text-xl lg:text-[32px] text-[#ffffff] leading-tight lg:leading-[36px]">
            <p>{title}</p>
          </div>
        </div>
        
        <div className="font-['Inter:Regular',_sans-serif] font-normal text-base lg:text-[20px] text-[rgba(255,255,255,0.47)] leading-relaxed lg:leading-[30px]">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function BenefitsSection() {
  const { t } = useLanguage();
  
  return (
    <div className="w-full max-w-[1272px] mx-auto px-4 sm:px-8 lg:px-0 space-y-16 lg:space-y-[88px]">
      <div className="max-w-[640px] mx-auto text-center space-y-3">
        <div className="font-['Space_Grotesk:Regular',_sans-serif] font-normal text-[#ceb37e] text-lg lg:text-[20px]">
          <p>{t('security')}</p>
        </div>
        <div className="font-['Lora:Medium',_sans-serif] font-medium text-2xl lg:text-[48px] text-[#ffffff] leading-tight lg:leading-[59px]">
          <p>{t('whyChooseVolpi')}</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal text-lg lg:text-[24px] text-[rgba(255,255,255,0.71)]">
          <p>
            {t('benefitsSubtitle')}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[30px]">
        <BenefitCard
          title={t('provenExperience')}
          description={t('provenExperienceDesc')}
          iconType="verified"
        />
        <BenefitCard
          title={t('certification')}
          description={t('certificationDesc')}
          iconType="certified"
        />
        <BenefitCard
          title={t('transparency')}
          description={t('transparencyDesc')}
          iconType="checkFile"
        />
      </div>
    </div>
  );
}

function TestimonialSection() {
  const { t } = useLanguage();
  
  return (
    <div className="w-full max-w-[1277px] mx-auto px-4 sm:px-8 lg:px-0">
      <div className="box-border content-stretch flex flex-col gap-[65px] items-center justify-start p-0 relative w-full">
        {/* Linha horizontal decorativa */}
        <div
          className="flex items-center justify-center relative shrink-0 w-full"
          style={
            {
              "--transform-inner-width": "1200",
              "--transform-inner-height": "0",
              height:
                "calc(1px * ((var(--transform-inner-width) * 0.002349249552935362) + (var(--transform-inner-height) * 0.9999971985816956)))",
            } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[0.135deg] w-full">
            <div className="h-0 relative w-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1277 1"
                >
                  <line
                    stroke="white"
                    strokeOpacity="0.4"
                    x2="1277"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Texto do depoimento */}
        <div className="font-['Inter:Light_Italic',_sans-serif] font-light h-auto lg:h-[189px] italic leading-[0] relative shrink-0 text-[#ffffff] text-lg lg:text-[28px] text-center w-full max-w-[1041px]">
          <p className="block leading-[25px] lg:leading-[41.35px]">{`"${t('testimonialText')}"`}</p>
        </div>
        
        {/* Nome do autor */}
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[14.041px] h-auto lg:h-[53.045px] items-center justify-center ml-0 mt-0 p-0 relative w-auto lg:w-[221.543px]">
            <div className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-xl lg:text-[31.2032px] text-center text-nowrap">
              <p className="block leading-[40px] lg:leading-[80.8944px] whitespace-pre">
                {t('testimonialAuthor')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  const { t } = useLanguage();
  
  return (
    <div className="relative min-h-[600px] lg:h-[882px] w-full">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imgRectangle23}')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(74.6503deg, rgba(6, 16, 46, 0.96) 0.79005%, rgba(9, 25, 70, 0.733) 49.994%, rgba(18, 53, 148, 0) 109.94%)",
          }}
        />
      </div>
      
      <div className="relative z-10 px-4 sm:px-8 lg:px-[77px] py-16 lg:py-[195px] flex items-center min-h-[600px] lg:h-[882px]">
        <div className="max-w-[598px] space-y-8 lg:space-y-[37px]">
          <div className="bg-[rgba(255,255,255,0.07)] rounded-full px-4 py-2 w-fit border border-[rgba(225,225,225,0.14)]">
            <div className="font-['Space_Grotesk:Regular',_sans-serif] font-normal text-sm lg:text-base text-[rgba(255,255,255,0.51)]">
              <p>{t('companyTag')}</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="font-['Lora:Medium',_sans-serif] font-medium text-2xl lg:text-[48px] text-[#ffffff] leading-tight lg:leading-[62px]">
              <p>
                {t('ctaTitle')}
              </p>
            </div>
            <div className="font-['Inter:Regular',_sans-serif] font-normal text-lg lg:text-[24px] text-[rgba(255,255,255,0.71)]">
              <p>
                {t('ctaSubtitle')}
              </p>
            </div>
          </div>
          
          <div className="bg-[#ceb37e] h-14 lg:h-[72px] rounded-lg w-full max-w-[342px] cursor-pointer hover:bg-[#b8a170] transition-colors" onClick={openWhatsApp}>
            <div className="flex items-center justify-center h-full px-6">
              <div className="font-['Inter:Medium',_sans-serif] font-medium text-[#000000] text-base">
                <p>{t('receiveOpportunities')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <div className="bg-[#06102E] min-h-screen relative w-full overflow-hidden">
      <div className="flex flex-col">
        <HeaderContainer />
        <HeroSection />

        <div className="space-y-20 lg:space-y-[129px] py-16 lg:py-0">
          <div className="max-w-[1287px] mx-auto space-y-20 lg:space-y-[178px]">
            <VantagesSection />
            <AboutSection />
          </div>

          <SolutionsSection />

          <div className="py-16 lg:py-0">
            <BenefitsSection />
          </div>

          <div className="py-16 lg:py-0">
            <TestimonialSection />
          </div>

          <CTASection />
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}