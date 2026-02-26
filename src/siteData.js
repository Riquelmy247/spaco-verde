export const siteData = {
  branding: {
    name: 'Spaço Verde',
    tagline: 'O cenário perfeito para transformar momentos em memórias inesquecíveis',
    primaryColor: '#545e3b',
    secondaryColor: '#ffffff',
    logoAlt: 'Logo Spaço Verde',
  },
  contact: {
    whatsappNumber: '5534999926215',
    whatsappMessage: 'Olá, gostaria de mais informações sobre o Spaço Verde.',
    whatsappLink: 'https://wa.me/5534999926215',
    instagramMain: {
      handle: '@chacaraspacoverde',
      url: 'https://www.instagram.com/chacaraspacoverde/',
    },
    instagramCorporate: {
      handle: '@buffet_chacaraspacoverde',
      url: 'https://www.instagram.com/buffet_chacaraspacoverde/',
    },
    address: 'Anel Viário St. Oeste - Luizote de Freitas, Uberlândia - MG, 38400-402',
    googleMapsEmbed:
      'https://www.google.com/maps?q=Anel+Vi%C3%A1rio+St.+Oeste+-+Luizote+de+Freitas,+Uberl%C3%A2ndia+-+MG,+38400-402&output=embed',
  },
  about: {
    title: 'Quem Somos',
    description:
      'O Spaço Verde é uma chácara completa e acolhedora, pensada para receber os seus melhores momentos com elegância e conforto. Cercado por muito verde e uma atmosfera única, nosso espaço é ideal para casamentos, aniversários, formaturas, confraternizações e eventos corporativos que buscam um cenário inesquecível.',
    highlights: [
      'Ambiente integrado à natureza, com áreas internas e externas',
      'Estrutura versátil para diferentes formatos de eventos',
      'Equipe experiente para apoiar na organização do seu grande dia',
    ],
    eventTypes: [
      'Aniversários',
      'Casamentos',
      'Formaturas',
      'Confraternizações',
      'Eventos sociais',
      'Eventos corporativos',
    ],
  },
  services: {
    title: 'Serviços',
    socialEvents: {
      title: 'Eventos Sociais',
      description:
        'Um espaço completo para celebrar momentos especiais em família e entre amigos, com todo o conforto e charme que o seu evento merece.',
      items: ['Chácara completa', 'Buffet e decoração', 'Espaço interno e externo'],
    },
    corporateEvents: {
      title: 'Eventos Corporativos',
      description:
        'Estrutura ideal para encontros empresariais, treinamentos, confraternizações de equipe e eventos de relacionamento corporativo.',
      items: ['Eventos empresariais', 'Ambiente reservado e profissional', 'Apoio para personalização do evento'],
      instagramHandle: '@buffet_chacaraspacoverde',
      instagramUrl: 'https://www.instagram.com/buffet_chacaraspacoverde/',
    },
  },
  gallery: {
    title: 'Galeria de Fotos',
    description:
      'Conheça um pouco mais do nosso espaço. Em breve você poderá conferir aqui fotos reais dos eventos realizados no Spaço Verde.',
    categories: [
      { id: 'all', label: 'Todas' },
      { id: 'external', label: 'Local Externo' },
      { id: 'hall', label: 'Salão' },
      { id: 'parking', label: 'Estacionamento' },
      { id: 'leisure', label: 'Área de Lazer' },
      { id: 'decor', label: 'Decorações' },
      { id: 'buffet', label: 'Buffet' },
    ],
    images: [
      // Estrutura preparada para receber imagens futuramente
      // Exemplo:
      // {
      //   id: 'img1',
      //   category: 'external',
      //   src: '/images/external-1.jpg',
      //   alt: 'Vista externa da chácara Spaço Verde ao pôr do sol',
      // },
    ],
  },
  navigation: {
    links: [
      { id: 'home', label: 'Início', type: 'section', target: 'hero' },
      { id: 'about', label: 'Quem Somos', type: 'section', target: 'about' },
      { id: 'services', label: 'Serviços', type: 'section', target: 'services' },
      { id: 'gallery', label: 'Galeria de Fotos', type: 'route', target: '/galeria' },
      { id: 'contact', label: 'Contato', type: 'section', target: 'contact' },
    ],
  },
}

