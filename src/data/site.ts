export type Lang = 'zh' | 'en' | 'ja';

export const languages: { code: Lang; label: string }[] = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
];

export const defaultLang: Lang = 'zh';

export const assets = {
  logo: '/assets/selected/logo-main.jpg',
  heroCampus: '/assets/selected/hero-campus.png',
  heroFloor: '/assets/selected/hero-floor.png',
  moldingFloor: '/assets/selected/molding-floor.png',
  assemblyLine: '/assets/selected/assembly-line.png',
  cleanroom: '/assets/selected/cleanroom.jpg',
  team: '/assets/selected/team.jpg',
  warehouse: '/assets/selected/warehouse.jpg',
  detailFactory: '/assets/selected/detail-factory.jpg',
} as const;

export const injectionMachines = [
  { brand: 'JSW', model: '110EL II', tonnage: '110', quantity: '2', serials: 'A2, A4' },
  { brand: 'JSW', model: 'AD', tonnage: '110', quantity: '2', serials: 'A1, A6' },
  { brand: 'JSW', model: '110EL III', tonnage: '110', quantity: '1', serials: 'A3' },
  { brand: 'JSW', model: '110EL III', tonnage: '220', quantity: '1', serials: 'A14' },
  { brand: 'JSW', model: '110EL III', tonnage: '280', quantity: '1', serials: 'A15' },
  { brand: 'HT', model: 'MA II', tonnage: '160', quantity: '3', serials: 'A7, A12, A13' },
  { brand: 'HT', model: 'MA III', tonnage: '120', quantity: '2', serials: 'A5, A10' },
  { brand: 'HT', model: 'MA III', tonnage: '160', quantity: '2', serials: 'A8, A9' },
  { brand: 'HT', model: 'MA II', tonnage: '160', quantity: '1', serials: 'A11' },
];

export const auxiliaryEquipment = [
  { name: '五轴机械手', code: 'A1, A2, A3, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15', status: '正常使用', vendor: '伯朗特' },
  { name: '单轴伺服机械手', code: 'A4', status: '正常使用', vendor: '伯朗特' },
  { name: '模温机', code: 'M01, M02, M03, M04', status: '正常使用', vendor: '阿尔法' },
  { name: '冻水机', code: 'D01, D02', status: '正常使用', vendor: '-' },
  { name: '吸料机', code: 'A1-A13, A16, A17', status: '正常使用', vendor: '-' },
  { name: '烘料桶', code: 'A1-A13, A16, A17', status: '正常使用', vendor: '-' },
  { name: '烤箱', code: '-', status: '-', vendor: '-' },
  { name: '机边碎料机', code: '8台 P1，9台 P2', status: '正常使用', vendor: '海天' },
];

export const otherEquipment = [
  { name: '超声机', qty: '8台' },
  { name: '移印机', qty: '4台' },
  { name: '贴纸机', qty: '3台' },
  { name: 'UV打印机', qty: '2台' },
];

export const serviceFlow = ['客户输入', '结构设计', '模具开发', '注塑成型', '后处理', '印刷', '电子模组', '组装', '包装', '出货'];

export const legacyProducts = ['计算器外壳', '键盘', '充电器外壳', '电子产品外壳', '结构件'];
export const currentProducts = ['儿童玩具', '教育玩具', '教具类产品', '益智产品', '预教娱乐产品', '塑胶+简单电子模块产品'];
export const currentMarkets = ['日本教育玩具体系', '儿童教具 / 预教娱乐产品', '以上海及日本市场为主'];
export const majorClients = ['Benesse / 倍乐生', '巧虎体系', 'Canon', 'CASIO', 'Samsung', '苹果供应链相关项目'];
export const moldingCapabilities = ['高光成型', '无尘成型', '双色成型', '叠层成型', '二次成型', '特殊材料成型'];
export const finishingCapabilities = ['UV印刷', '丝印（四色）', '镜片印刷', '烫金', '电镀', '橡胶油喷涂'];
export const electronicsCapabilities = ['SMT贴片', 'PCB / FPC 模组', 'Bonding', '镜头模组', '整机装配'];
export const assemblyLines = ['装配线 12条', '超声波 12台', '高周波 2台', '激光雕刻 1台', '条码打印 1台'];
export const qualityCerts = ['ISO9001', 'ISO14001', 'ICTI'];
export const qualityTools = ['二次元检测', 'XRF（有害物质检测）'];
export const coreStrengths = ['快速响应能力', '从设计到量产的一体化', '新产品导入（NPI）能力', '模具 + 注塑 + 电子 + 组装整合', '独立质量管理体系', '成本与品质平衡能力'];

export const translations = {
  zh: {
    htmlLang: 'zh-CN',
    metaTitle: '朗华电子塑胶 | 一体化制造官网',
    metaDescription: '中山市朗华电子塑胶有限公司，聚焦塑胶制造、电子配套与整机交付的一体化制造能力。',
    companyName: '中山市朗华电子塑胶有限公司',
    companyNameEn: 'Zhongshan Lonwalk Electronic & Plastic Co., Ltd.',
    nav: [
      { href: '', label: '首页' },
      { href: '/about', label: '关于朗华' },
      { href: '/capabilities', label: '制造能力' },
      { href: '/quality', label: '品质体系' },
      { href: '/contact', label: '联系我们' },
    ],
    common: {
      language: '语言',
      capabilities: '制造能力',
      contact: '联系我们',
      learnMore: '了解更多',
      address: '广东省中山市火炬开发区敬业路6号',
      phone: '0760-85335988',
      fax: '0760-85337551',
    },
    home: {
      kicker: 'Integrated Manufacturing',
      title: '塑胶制造与整机交付的一体化制造商',
      intro: '朗华长期服务高标准日本客户，围绕结构件、外壳件、教育玩具与消费类产品，建立了覆盖设计导入、模具开发、注塑成型、印刷、电子配套、组装与出货的完整制造链条。',
      cards: [
        { title: '客户基础', body: '长期服务日本高标准客户，具备严苛品质体系与稳定量产能力。' },
        { title: '当前方向', body: '当前客户方向以日本教育玩具体系、儿童教具、预教娱乐类产品为主。' },
        { title: '交付定位', body: '不是单纯注塑厂，而是可交付完整产品的整合制造商。' },
      ],
      clientTitle: '历史客户与项目经验',
      clientLead: '核心客户与项目经历覆盖教育内容、消费电子外壳与结构件项目。',
      marketTitle: '当前客户方向',
      marketLead: '当前业务重点聚焦日本与上海市场的教育玩具、儿童教具与预教娱乐产品。',
    },
    about: {
      title: '关于朗华',
      subtitle: '围绕客户经验、制造专长与发展脉络，建立清晰可信的企业表达。',
      introTitle: '擅长承接的项目类型',
      introBody: '朗华的核心底盘始终是塑胶制造、外壳件、结构件与注塑能力，但公司并不局限于单一塑件生产。客户即使只提供草图、概念图或初始需求，也可以配合完成结构优化、打样、报价、量产、组装、包装与出货。',
      historyTitle: '发展脉络',
      history: [
        { year: '90年代起', text: '团队长期经营电子类塑胶件、外壳件、模具与注塑相关业务。' },
        { year: '1998', text: '旧公司简介口径中的创立时间，代表对外经营与规模化制造阶段。' },
        { year: '2011', text: '形成现阶段的公司主体，工厂、土地与体系逐步整合到朗华体系下。' },
        { year: '当前', text: '客户方向已从早期电子结构件，转向教育玩具、儿童教具与日本市场项目。' },
      ],
      legacyTitle: '历史产品经验',
      currentTitle: '当前产品方向',
    },
    capabilities: {
      title: '制造能力',
      subtitle: '突出工艺链条、设备清单与整合交付能力。',
      processTitle: '服务链条',
      processLead: '从客户需求输入到最终出货，制造链条覆盖结构设计支持、模具开发、注塑、后处理、印刷、电子模组、整机组装与包装出货。',
      injectionTitle: '注塑能力',
      injectionLead: '注塑设备信息采用紧凑表格排版，配合单张车间图表达制造能力。',
      moldingTitle: '成型与表面处理能力',
      electronicsTitle: '电子与装配能力',
      electronicsLead: '公司具备电子与后段装配能力，能够把零件整合为可交付的完成品。',
      injectionTable: '注塑机设备清单',
      auxiliaryTable: '成型车间辅助设备',
      otherTable: '其他设备数量',
    },
    quality: {
      title: '品质体系',
      subtitle: '围绕高标准客户要求，建立成熟质量管理体系。',
      leadTitle: '质量管理逻辑',
      leadBody: '朗华长期服务高标准日本客户，建立了成熟质量管理体系。质量能力不只是认证展示，更体现在制程控制、检测能力、稳定量产与异常响应机制。',
      certTitle: '认证与检测',
    },
    contact: {
      title: '联系我们',
      subtitle: '如需项目导入、制造评估或量产协同，欢迎与我们联系。',
      formTitle: '联系表单',
      infoTitle: '联系信息',
    },
    footer: {
      company: '公司信息',
      contact: '联系信息',
      positioning: '设计、研发、注塑、印刷、电子与装配一体化制造',
    },
  },
  en: {
    htmlLang: 'en',
    metaTitle: 'Lonwalk | Integrated Manufacturing',
    metaDescription: 'Lonwalk provides integrated plastic molding, finishing, electronics support, and final product assembly.',
    companyName: 'Zhongshan Lonwalk Electronic & Plastic Co., Ltd.',
    companyNameEn: 'Zhongshan Lonwalk Electronic & Plastic Co., Ltd.',
    nav: [
      { href: '', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/capabilities', label: 'Capabilities' },
      { href: '/quality', label: 'Quality' },
      { href: '/contact', label: 'Contact' },
    ],
    common: {
      language: 'Language',
      capabilities: 'Capabilities',
      contact: 'Contact',
      learnMore: 'Learn more',
      address: 'No. 6 Jingye Road, Torch Development Zone, Zhongshan, Guangdong',
      phone: '0760-85335988',
      fax: '0760-85337551',
    },
    home: {
      kicker: 'Integrated Manufacturing',
      title: 'An integrated manufacturer for plastics and finished product delivery',
      intro: 'Lonwalk has built a disciplined manufacturing system for structural plastic parts, housings, educational toys, and consumer products, covering engineering support, tooling, molding, finishing, electronics support, assembly, packaging, and shipment.',
      cards: [
        { title: 'Client Base', body: 'Long-term service experience with high-standard Japanese customers and stable mass production requirements.' },
        { title: 'Current Focus', body: 'Current customer direction centers on educational toys, teaching aids, and pre-education entertainment products.' },
        { title: 'Positioning', body: 'Not only a molding factory, but an integrated manufacturer able to deliver complete products.' },
      ],
      clientTitle: 'Historical client and project experience',
      clientLead: 'The company has served branded programs across educational products, electronics housings, and structural components.',
      marketTitle: 'Current customer direction',
      marketLead: 'Current programs are concentrated in Japan and Shanghai, especially in educational toys and children’s learning products.',
    },
    about: {
      title: 'About Lonwalk',
      subtitle: 'A clear corporate narrative built around customer experience, manufacturing strength, and development history.',
      introTitle: 'Types of programs Lonwalk handles well',
      introBody: 'Plastic molding, housings, structural parts, and injection molding remain the operational core. At the same time, the company is not limited to single-part molding. Even when customers provide only sketches or concept references, Lonwalk can support structure optimization, sampling, quotation, mass production, assembly, packaging, and shipment.',
      historyTitle: 'Development path',
      history: [
        { year: 'Since the 1990s', text: 'The team accumulated long-term experience in electronic plastic parts, housings, tooling, and molding.' },
        { year: '1998', text: 'Legacy materials use 1998 as the historical founding reference point.' },
        { year: '2011', text: 'The current corporate entity was established after consolidation of factory, land, and operating systems.' },
        { year: 'Today', text: 'Customer direction has shifted from earlier electronics structures to educational toys and Japan-oriented programs.' },
      ],
      legacyTitle: 'Legacy product categories',
      currentTitle: 'Current product direction',
    },
    capabilities: {
      title: 'Capabilities',
      subtitle: 'Focused presentation of process chain, equipment, and integrated delivery capability.',
      processTitle: 'Service chain',
      processLead: 'From customer input to shipment, the manufacturing chain covers structural support, tooling, molding, finishing, printing, electronics modules, final assembly, packaging, and delivery.',
      injectionTitle: 'Injection molding capability',
      injectionLead: 'Machine information is presented in compact tables, paired with one workshop image.',
      moldingTitle: 'Molding and surface finishing',
      electronicsTitle: 'Electronics and assembly',
      electronicsLead: 'The company can integrate parts into complete deliverable products, not just molded components.',
      injectionTable: 'Injection molding machine list',
      auxiliaryTable: 'Auxiliary equipment in molding workshop',
      otherTable: 'Other equipment quantities',
    },
    quality: {
      title: 'Quality System',
      subtitle: 'A mature quality management system built through long-term service to demanding customers.',
      leadTitle: 'Quality management logic',
      leadBody: 'The quality system is expressed through process control, inspection capability, stable production, and responsive issue handling, not by certificates alone.',
      certTitle: 'Certifications and inspection resources',
    },
    contact: {
      title: 'Contact',
      subtitle: 'For project introduction, manufacturing review, or production cooperation, please contact us.',
      formTitle: 'Contact form',
      infoTitle: 'Contact information',
    },
    footer: {
      company: 'Company',
      contact: 'Contact',
      positioning: 'Integrated manufacturing across design support, molding, finishing, electronics, and assembly',
    },
  },
  ja: {
    htmlLang: 'ja',
    metaTitle: 'Lonwalk | 一体型製造メーカー',
    metaDescription: '朗華は成形、表面処理、電子対応、組立出荷までを一体で支援します。',
    companyName: '中山市朗華電子塑膠有限公司',
    companyNameEn: 'Zhongshan Lonwalk Electronic & Plastic Co., Ltd.',
    nav: [
      { href: '', label: 'ホーム' },
      { href: '/about', label: '会社紹介' },
      { href: '/capabilities', label: '製造能力' },
      { href: '/quality', label: '品質体制' },
      { href: '/contact', label: 'お問い合わせ' },
    ],
    common: {
      language: 'Language',
      capabilities: '製造能力',
      contact: 'お問い合わせ',
      learnMore: '詳しく見る',
      address: '広東省中山市火炬開発区敬業路6号',
      phone: '0760-85335988',
      fax: '0760-85337551',
    },
    home: {
      kicker: 'Integrated Manufacturing',
      title: 'プラスチック製造と完成品納入を担う一体型メーカー',
      intro: '朗華は構造部品、外装部品、教育玩具、消費財案件に対して、設計支援、金型、成形、表面処理、電子対応、組立、梱包、出荷までを一体で提供しています。',
      cards: [
        { title: '顧客基盤', body: '高水準の日本顧客を長期にわたり支援し、安定量産体制を確立しています。' },
        { title: '現在の重点', body: '現在は教育玩具、教具、幼児向けエンターテインメント製品が主要方向です。' },
        { title: '立ち位置', body: '単なる成形工場ではなく、完成品まで届けられる統合型メーカーです。' },
      ],
      clientTitle: '主要顧客と案件実績',
      clientLead: '教育系製品、電子外装、構造部品案件にわたる実績を保有しています。',
      marketTitle: '現在の顧客方向',
      marketLead: '現在の重点市場は日本および上海で、教育玩具や子ども向け学習製品が中心です。',
    },
    about: {
      title: '会社紹介',
      subtitle: '顧客経験、製造強み、発展の流れを簡潔に整理します。',
      introTitle: '朗華が得意とする案件',
      introBody: '朗華の基盤能力はプラスチック製造、外装、構造部品、射出成形にあります。ただし単純な成形工場に留まらず、スケッチや概念段階から構造最適化、試作、見積、量産、組立、梱包、出荷まで対応可能です。',
      historyTitle: '沿革',
      history: [
        { year: '1990年代以降', text: '電子系プラスチック部品、外装、金型、成形で長期経験を蓄積。' },
        { year: '1998', text: '旧会社資料における創業基準年。' },
        { year: '2011', text: '現在の会社主体として工場、土地、運営体制を統合。' },
        { year: '現在', text: '顧客方向は教育玩具、教具、日本向け案件へとシフト。' },
      ],
      legacyTitle: '従来の製品分野',
      currentTitle: '現在の製品分野',
    },
    capabilities: {
      title: '製造能力',
      subtitle: '工程、設備、統合納入力を明確に整理。',
      processTitle: 'サービスチェーン',
      processLead: '顧客入力から出荷まで、構造設計支援、金型開発、射出成形、後処理、印刷、電子モジュール、組立、梱包、出荷までを一体でつなぎます。',
      injectionTitle: '射出成形能力',
      injectionLead: '設備情報はコンパクトな表で整理し、画像は最小限に抑えています。',
      moldingTitle: '成形・表面処理能力',
      electronicsTitle: '電子対応・組立能力',
      electronicsLead: '成形部品だけでなく、完成品として納入可能な統合体制を持っています。',
      injectionTable: '射出成形設備一覧',
      auxiliaryTable: '成形補助設備',
      otherTable: 'その他設備数量',
    },
    quality: {
      title: '品質体制',
      subtitle: '高水準顧客への長期対応を通じて成熟した品質管理体制を構築。',
      leadTitle: '品質管理の考え方',
      leadBody: '品質は認証の有無だけではなく、工程管理、検査能力、安定量産、異常対応の仕組みとして表現されるべきだと考えています。',
      certTitle: '認証と検査資源',
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: '案件導入、製造評価、量産協力についてはこちらからご連絡ください。',
      formTitle: 'お問い合わせフォーム',
      infoTitle: '連絡先',
    },
    footer: {
      company: '会社情報',
      contact: '連絡先',
      positioning: '設計支援、成形、印刷、電子対応、組立までを一体で支援',
    },
  },
} as const;

export function isLang(value: string): value is Lang {
  return value === 'zh' || value === 'en' || value === 'ja';
}

export function t(lang: Lang) {
  return translations[lang];
}
