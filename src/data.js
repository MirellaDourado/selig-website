import lgLogo from './assets/lg-logotipo.png';
import samsungLogo from './assets/Samsung-Logo.png';
import motorolaLogo from './assets/Motorola-Logo-2.png';
import aocLogo from './assets/aoc-logo-1.png';
import appleLogo from './assets/Apple_logo_black.svg.png'
import philcoLogo from './assets/philco-logo.png'
import philipsLogo from './assets/Philips_logo_new.svg.png';
import tclLogo from './assets/tcl-logo-2.png'
import positivoLogo from './assets/positivo-logo.png'
import casasBahia from './assets/casasBahia-logo.png';
import fastLogo from './assets/fast-logo.png';
import ferreiraLogo from './assets/ferreira-logo.png';
import gaibimLogo from './assets/gaibim-logo.png';
import gazinLogo from './assets/gazin-logo.png';
import hapvidaLogo from './assets/hapvida-logo.png';
import magaluLogo from './assets/magalu-logo.png';
import hportuguesLogo from './assets/portugues-logo.png';
import lgProducts from './assets/lg-products.png';
import samsungProducts from './assets/samsung-products.png';
import motorolaProducts from './assets/motorola-products.png';
import philcoProducts from './assets/philco-products.png';
import philipsProducts from './assets/philips-products.png';
import appleProducts from './assets/apple-products.png';
import tclProducts from './assets/tcl-products.png';
import positivoProducts from './assets/positivo-products.png';
import aocProducts from './assets/aoc-products.png';




export const brandsArray = [
  { title: 'LG',
  warranty: {
      with1: ['Caixas de som', 'Televisores', 'Mycrosystem','Máquinas de lavar','Ar condicionados','Microondas'],
      with2: ['Geladeiras', 'Adegas', 'Notebooks', 'All in one', 'Monitores'],
      without1: ['Caixas de som', 'Televisores', 'Mycrosystem', 'Máquinas de lavar', 'Ar condicionados', 'Microondas'],
      without2: ['Geladeiras', 'Adegas', 'Notebooks', 'All in one', 'Monitores']
    },
  src: lgProducts,
  alt: 'Produtos LG',
  description:'A LG Corporation, fundada em 1947, é uma empresa sul-coreana que começou como um fabricante de produtos químicos e eletrônicos. Nos anos 1960, a LG começou a fabricar eletrônicos de consumo, como televisores e aparelhos de ar condicionado. Na década de 1990, entrou no mercado de telefonia móvel e ganhou reconhecimento global como um importante fabricante de celulares. Além disso, a LG possui divisões de eletrodomésticos, energia solar, sistemas de ar condicionado e soluções de negócios. A LG é conhecida por sua inovação, qualidade e alcance global.',
  path: '/lg'
  }, { title: 'Motorola',
  src: motorolaProducts,
  alt: 'Productos Motorola',
  warranty: {
      without1: ['Celulares'],
    },
  description:'A Motorola é uma empresa de tecnologia americana fundada em 1928. Inicialmente, fabricava baterias para rádios de carro e posteriormente entrou no mercado de eletrônicos e comunicações. Nos anos 1980, a Motorola foi pioneira no desenvolvimento de telefones celulares e lançou o icônico Motorola Razr em 2004. Em 2011, a empresa foi dividida em Motorola Solutions e Motorola Mobility. Esta última foi adquirida pela Lenovo em 2014, continuando a lançar smartphones inovadores sob a marca Motorola. A empresa tem um histórico de pioneirismo e contribuições significativas para a indústria de telefonia móvel.',
  path: '/motorola'
  }, { title: 'TCL',
  src: tclProducts,
  alt: 'Produtos TCL',
  warranty: {
      with1: ['Ar condicionado'],
      without1: ['Ar condicionado'],
    },
  description:'A TCL Corporation, uma empresa chinesa, foi fundada em 1981 como uma fabricante de fitas cassetes. Ao longo dos anos, expandiu-se para a produção de televisores, telefones celulares, eletrodomésticos e equipamentos de comunicação. A TCL é conhecida por oferecer produtos de qualidade a preços competitivos e adquiriu marcas como Thomson, BlackBerry e Alcatel. A empresa continua a se expandir globalmente e a investir em pesquisa e desenvolvimento, buscando inovação e satisfação do cliente.',
  path: '/tcl'
  }, { title: 'Samsung',
    src: samsungProducts,
    alt: 'Produtos Samsung',
  warranty: {
      without1: ['Televisores'],
    },
  description:'A Samsung é uma empresa sul-coreana fundada em 1938. Inicialmente, começou como uma empresa de comércio e exportação. Ao longo dos anos, expandiu-se para vários setores, incluindo eletrônicos, semicondutores, eletrodomésticos e muito mais. A Samsung ganhou destaque na indústria de eletrônicos ao entrar no mercado de telefonia móvel nos anos 1990 e tornou-se um dos principais fabricantes de smartphones do mundo. A empresa é conhecida por sua inovação, qualidade e design elegante. Além dos smartphones, a Samsung tem uma presença global em diversos setores e continua a ser uma das empresas mais influentes e poderosas do mundo da tecnologia.',
  path: '/samsung'
  }, { title: 'Positivo',
  warranty: {
      with1: ['Tablets', 'Notebooks'],
      without1: ['Celulares', 'Tablets', 'Notebooks', 'Computadores', 'Monitores'],
    },
  src: positivoProducts,
  alt: 'Produtos Positivo',
  description:'A Positivo Informática é uma empresa brasileira fundada em 1989. Em 1992, começou a fabricar seus próprios computadores, tornando-se uma das principais fabricantes de PCs no Brasil. A Positivo expandiu sua linha de produtos para incluir notebooks, tablets, smartphones e dispositivos educacionais. A Positivo é reconhecida por seu compromisso com a inovação e qualidade, oferecendo produtos acessíveis e confiáveis aos consumidores brasileiros. Com um forte foco na educação, a empresa fornece soluções tecnológicas e conteúdo educacional para escolas e instituições de ensino.',
  path: '/positivo'
  }, { title: 'Philco',
  warranty: {
      with1: ['Televisores'],
      without1: ['Televisores'],
    },
  src: philcoProducts,
  alt: 'Produtos Philco',
  description:'A Philco é uma empresa americana fundada em 1892 como Philadelphia Storage Battery Company. Começou fabricando baterias para equipamentos de comunicação e, ao longo dos anos, expandiu-se para a produção de rádios, televisores e outros eletrodomésticos. A Philco foi reconhecida por sua qualidade e inovação, introduzindo recursos como a primeira TV a cores de tela plana e o primeiro controle remoto sem fio. Passou por mudanças de propriedade ao longo dos anos e atualmente é uma marca licenciada que oferece uma variedade de produtos eletrônicos e eletrodomésticos. A história da Philco é marcada por sua tradição de inovação e qualidade.',
  path: '/philco'
  }, { title: 'Philips',
  src: philipsProducts,
  alt: 'Produtos Philips',
  warranty: {
      with1: ['Televisores'],
      without1: ['Televisores'],
    },
  description:'A Philips é uma empresa holandesa de tecnologia fundada em 1891 por Gerard Philips e Frederik Philips. A Philips se destacou na produção de rádios, televisores, equipamentos médicos, sistemas de áudio e vídeo, eletrodomésticos e iluminação. A empresa foi pioneira em tecnologias inovadoras, como o CD e o DVD, e é reconhecida por seu design elegante e funcional. A Philips tem um foco crescente em soluções de saúde, desenvolvendo equipamentos médicos avançados e soluções de saúde conectadas. Sua história é marcada por uma busca contínua pela inovação e excelência, fornecendo uma ampla gama de produtos e soluções tecnológicas para consumidores e empresas em todo o mundo.',
  path: '/philips'
  }, { title: 'Apple',
  src: appleProducts,
  alt: 'Produtos Apple',
  warranty: {
      without1: ['IPhones', 'Ipads', 'MACs', 'All in One'],
    },
  description:'A Apple Inc. é uma empresa de tecnologia americana fundada em 1976 por Steve Jobs, Steve Wozniak e Ronald Wayne. A Apple se tornou conhecida por seus computadores pessoais revolucionários, como o Apple II e o Macintosh, que introduziram recursos inovadores e interfaces amigáveis. Nos anos 2000, a Apple lançou produtos icônicos, como o iPod, iPhone e iPad, que transformaram as indústrias de música, telefonia móvel e tablets. A empresa também expandiu seus negócios para serviços e wearables, mantendo um foco na integração entre hardware, software e design elegante. A Apple é reconhecida por seu impacto duradouro na indústria de tecnologia e sua base de fãs leais em todo o mundo.',
  path: '/apple'
  }, { title: 'AOC',
    alt: 'Produtos AOC',
    src: aocProducts,
    description: 'A AOC, nascida nos EUA, se destacou por monitores e TVs. Fundada nos anos 30 como parte da Admiral Corporation, cresceu globalmente a partir dos 90. Focou em monitores de alta qualidade e preços acessíveis, com design atrativo e inovação. Adotou avanços tecnológicos, oferecendo monitores de alta resolução, atualizações rápidas e recursos avançados. Expansão para TVs e áudio, mantendo relevância global via inovação. Reconhecida no cenário tecnológico, destaca-se por produtos confiáveis e variados, fruto de uma jornada de adaptação e sucesso desde sua origem como subsidiária.',
    path: '/aoc',
    warranty: {
      with1: ['Televisores', 'Monitores'],
      without1: ['Televisores', 'Monitores'],
    }

  }
]

export const serviceArray = [
  { title: 'Assistência para produtos em garantia',
    description: '',
    path: '/dentro-de-garantia',
    brands: [{src: lgLogo, alt: 'Logo da LG', path:'/lg'}, {src: tclLogo, alt: 'Logo da TLC', path: '/tcl'}, {src: aocLogo, alt: 'Logo da AOC'}, {src: positivoLogo, alt: 'Logo da Positivo', path: '/positivo'}]},
  { title: 'Assistência para produtos fora de garantia',
    description: '',
    path: '/fora-de-garantia',
    brands: [{src: lgLogo, alt: 'Logo da LG', href: '/lg'}, {src: motorolaLogo,  alt: 'Logo da Motorola', href: '/motorola'} , {src: positivoLogo, alt: 'Logo da Positivo', href: '/positivo'}, {src: samsungLogo, alt: 'Logo da Samsung', href: '/positivo'}, {src: philipsLogo, alt: 'Logo da Philips', href: '/philips'}, {src: aocLogo, alt: 'Logo da AOC', href: '/aoc'}, {src: tclLogo, alt: 'Logo da TCL', href: '/tcl'}, {src: philcoLogo, alt: 'Logo da Philco', href: '/philco'}, {src: appleLogo, alt: 'Logo da Apple', href: 'apple'}]
  },
  {title: 'Epecializada',
    description: '',
    path:'/especializada',
    brands: [],
  }
]

export const logosArray = [
  { src: lgLogo, alt: 'LG', href:'/lg' },
  { src: samsungLogo, alt: 'Samsung', href:'/samsung' },
  { src: motorolaLogo, alt: 'Motorola', href:'/motorola' },
  { src: aocLogo, alt: 'AOC', href:'/aoc' },
  { src: appleLogo, alt: 'Apple', href:'/apple' },
  { src: philcoLogo, alt: 'Philco', href:'/philco' },
  { src: philipsLogo, alt: 'Philips', href:'/philips' },
  { src: tclLogo, alt: 'TCL', href:'/tcl' },
  { src: positivoLogo, alt: 'Positivo', href:'/positivo' },
]

export const partnersArray = [
  { src: casasBahia, alt: 'Casas Bahia' },
  { src: fastLogo, alt: 'Fast Shop' },
  { src: ferreiraLogo, alt: 'Ferreira Costa' },
  { src: gaibimLogo, alt: 'Lojas Gaibim' },
  { src: gazinLogo, alt: 'Gazin Atacado' },
  { src: hapvidaLogo, alt: 'Philco' },
  { src: magaluLogo, alt: 'Magalu' },
  { src: hportuguesLogo, alt: 'Hospital Português' },
]