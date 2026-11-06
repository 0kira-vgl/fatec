// Dados Oficiais Mapeados para o Vestibular FATEC - ADS Noturno
// Fonte: Provas e Gabaritos 2020-2026 e Banco de 30 Propostas de Redação

const FATEC_DATA = {
  curso: {
    nome: 'Análise e Desenvolvimento de Sistemas (ADS)',
    periodo: 'Noturno',
    formato_questoes: 60,
    tempo_prova: '5 horas',
    permanencia_minima: '15h30',
    pesos: {
      'Matemática': { peso: 2, questoes: 8, porcentagem: '22%' },
      'Raciocínio Lógico': { peso: 2, questoes: 5, porcentagem: '14%' },
      'Multidisciplinar': { peso: 1, questoes: 9, porcentagem: '12%' },
      'Português': { peso: 1, questoes: 8, porcentagem: '11%' },
      'Inglês': { peso: 1, questoes: 5, porcentagem: '7%' },
      'Humanas e Natureza': { peso: 1, questoes: 25, porcentagem: '34%' }
    },
    regras_ouro: [
      'Matemática e Raciocínio Lógico têm Peso 2 em ADS (valem juntos 36% da nota objetiva).',
      'A redação tem peso decisivo no desempate. Nota zero na redação ou na prova objetiva desclassifica imediatamente.',
      'A Fatec NÃO cobra decoreba: cada caderno é articulado em torno de um tema único interdisciplinar.',
      'Interpretação e raciocínio são mais cobrados do que teoria pura (mais de 36% das questões têm textos com fonte citada, gráficos ou charges).',
      'As fórmulas matemáticas e físicas costumam vir no enunciado (ex.: adote π = 3, E = mv²/2, c = λ·f). Calculadora é proibida.'
    ]
  },
  materias: [
  {
    "id": "matematica",
    "nome": "Matemática",
    "peso_ads": 2,
    "questoes_2026": 8,
    "fatia_nota": "22%",
    "descricao": "Foco central para ADS Noturno. Peso 2! Exatas com contas leves e aplicadas. Fórmulas dadas no enunciado.",
    "mais_recorrente": [
      {
        "topico": "Geometria Espacial e Plana",
        "detalhes": "Área, volume, perímetro, escala, círculo (presente em 8 de 8 provas)",
        "recorrencia": "8/8 provas"
      },
      {
        "topico": "Tratamento da Informação",
        "detalhes": "Interpretação de gráficos, tabelas, média, mediana, moda e porcentagem aplicada",
        "recorrencia": "7/8 provas"
      }
    ],
    "tambem_aparece": [
      {
        "topico": "Probabilidade e Análise Combinatória",
        "detalhes": "Princípio fundamental da contagem, arranjos, combinações e chances",
        "recorrencia": "5/8 provas"
      },
      {
        "topico": "Funções",
        "detalhes": "Funções de 1º e 2º grau, função exponencial e noções de logaritmos",
        "recorrencia": "4/8 provas"
      },
      {
        "topico": "Aritmética Básica e Proporções",
        "detalhes": "Razão, proporção e regra de três simples/composta",
        "recorrencia": "Frequente"
      },
      {
        "topico": "Sequências Numéricas",
        "detalhes": "Progressão Aritmética (PA) e Progressão Geométrica (PG)",
        "recorrencia": "Frequente"
      },
      {
        "topico": "Matrizes e Trigonometria",
        "detalhes": "Operações básicas com matrizes e trigonometria básica no triângulo retângulo",
        "recorrencia": "Ocasional"
      }
    ]
  },
  {
    "id": "raciocinio-logico",
    "nome": "Raciocínio Lógico",
    "peso_ads": 2,
    "questoes_2026": 5,
    "fatia_nota": "14%",
    "descricao": "Peso 2 decisivo em ADS! Junto com Matemática vale 36% da nota objetiva.",
    "mais_recorrente": [
      {
        "topico": "Lógica Proposicional",
        "detalhes": "Conectivos lógicos, proposições condicionais (se... então), bicondicional e equivalência/negação de frases (presente em todas de 2023/2 em diante)",
        "recorrencia": "5/8 provas"
      },
      {
        "topico": "Teoria dos Conjuntos e Quantificadores",
        "detalhes": "Diagramas de Venn, interseção, união, negação de quantificadores (\"todo\", \"algum\", \"nenhum\")",
        "recorrencia": "4/8 provas"
      }
    ],
    "tambem_aparece": [
      {
        "topico": "Analogias de Palavras",
        "detalhes": "Relações de proporcionalidade e significado (\"A está para B assim como C está para D\")"
      },
      {
        "topico": "Sequências e Padrões Lógicos",
        "detalhes": "Determinação da posição N em padrões repetitivos ou progressões visuais"
      },
      {
        "topico": "Lógica Temporal e Calendários",
        "detalhes": "Cálculo de dias da semana, datas e ciclos temporais"
      },
      {
        "topico": "Associação Lógica",
        "detalhes": "Quadros de dedução (\"quem fez o quê\", profissões, cores, cidades)"
      },
      {
        "topico": "Lógica Geométrica e Espacial",
        "detalhes": "Rotação de figuras, vistas ortogonais e simetria"
      }
    ]
  },
  {
    "id": "portugues",
    "nome": "Língua Portuguesa",
    "peso_ads": 1,
    "questoes_2026": 8,
    "fatia_nota": "11%",
    "descricao": "Totalmente focada em interpretação, charges, memes e figuras de linguagem. Não cobra escolas literárias!",
    "mais_recorrente": [
      {
        "topico": "Interpretação e Leitura Crítica",
        "detalhes": "Texto verbal e não-verbal, charges, quadrinhos, memes e infográficos",
        "recorrencia": "8/8 provas"
      },
      {
        "topico": "Figuras de Linguagem",
        "detalhes": "Metáfora, metonímia, personificação, paronomásia, antítese, conotação vs. denotação",
        "recorrencia": "7/8 provas"
      },
      {
        "topico": "Reescrita e Paráfrase",
        "detalhes": "Sentido global do texto, manutenção de sentido e correção gramatical",
        "recorrencia": "Maioria"
      }
    ],
    "tambem_aparece": [
      {
        "topico": "Coesão e Pronomes",
        "detalhes": "Função anafórica/catafórica de pronomes demonstrativos e relativos"
      },
      {
        "topico": "Preposições e Conectivos",
        "detalhes": "Valores semânticos das preposições e conjunções"
      },
      {
        "topico": "Gêneros e Tipologias Textuais",
        "detalhes": "Artigo de opinião, crônica, notícia, divulgação científica"
      },
      {
        "topico": "Formação de Palavras e Morfossintaxe",
        "detalhes": "Composição, derivação e tempos verbais no modo indicativo/subjuntivo"
      }
    ]
  },
  {
    "id": "multidisciplinar",
    "nome": "Multidisciplinar",
    "peso_ads": 1,
    "questoes_2026": 9,
    "fatia_nota": "12%",
    "descricao": "Cerca de 16% da prova! Questões que cruzam duas disciplinas aplicadas ao tema central do caderno.",
    "mais_recorrente": [
      {
        "topico": "Gráficos e Estatística Aplicada",
        "detalhes": "Cruzamento de dados numéricos e porcentagens com temas sociais ou históricos",
        "recorrencia": "Todas"
      },
      {
        "topico": "Linguagem e Charge Integrada",
        "detalhes": "Interpretação de sátiras visuais conectadas a fatos históricos e geopolíticos",
        "recorrencia": "Todas"
      },
      {
        "topico": "Ciências Exatas e Sociedade",
        "detalhes": "Química ou Física com cálculo simples aplicadas à ecologia, tecnologia ou saúde",
        "recorrencia": "Todas"
      }
    ],
    "tambem_aparece": [
      {
        "topico": "Português e Inglês com Ciências",
        "detalhes": "Textos em língua estrangeira ou de divulgação científica analisando impactos socioeconômicos"
      }
    ]
  },
  {
    "id": "ingles",
    "nome": "Inglês",
    "peso_ads": 1,
    "questoes_2026": 5,
    "fatia_nota": "7%",
    "descricao": "Textos autênticos (notícias, tirinhas, letras, resenhas). Sem gramática descontextualizada.",
    "mais_recorrente": [
      {
        "topico": "Inferência e Leitura de Textos Autênticos",
        "detalhes": "Compreensão de ideias principais e implícitas em notícias e artigos",
        "recorrencia": "8/8 provas"
      },
      {
        "topico": "Conectivos e Expressões de Transição",
        "detalhes": "due to, despite, so that, plenty of, however, therefore, although",
        "recorrencia": "8/8 provas"
      }
    ],
    "tambem_aparece": [
      {
        "topico": "Verbos Modais",
        "detalhes": "Significados de must, should, can, could, may em contextos de orientação ou dedução"
      },
      {
        "topico": "Sinônimos, Antônimos e Vocabulário",
        "detalhes": "Identificação do sentido de termos-chave pelo contexto"
      },
      {
        "topico": "Referência Pronominal",
        "detalhes": "Identificação do referente de pronomes (it, its, they, which)"
      }
    ]
  },
  {
    "id": "historia",
    "nome": "História",
    "peso_ads": 1,
    "questoes_2026": 5,
    "fatia_nota": "6,8%",
    "descricao": "Foco no mundo contemporâneo, revoluções tecnológicas, trabalho e sociedade brasileira.",
    "mais_recorrente": [
      {
        "topico": "Brasil Colonial e Escravidão",
        "detalhes": "Sistema escravista, resistência negra e indígena, estruturas sociais e racismo histórico",
        "recorrencia": "5+ provas"
      },
      {
        "topico": "Revoluções Industriais e Tecnologia",
        "detalhes": "Impactos sociais da mecanização, 1ª à 4ª Revolução Industrial e transformações no trabalho",
        "recorrencia": "5+ provas"
      },
      {
        "topico": "Guerra Fria e Ditaduras na América",
        "detalhes": "Bipolaridade mundial, regimes militares na América Latina e transições democráticas",
        "recorrencia": "5+ provas"
      }
    ],
    "tambem_aparece": [
      {
        "topico": "Antiguidade Clássica e Pré-História",
        "detalhes": "Democracia grega, direito romano e primeiras organizações humanas"
      },
      {
        "topico": "Povos Pré-Colombianos",
        "detalhes": "Sociedades Maia, Inca e Asteca antes da colonização"
      },
      {
        "topico": "Era Vargas e Brasil Contemporâneo",
        "detalhes": "Legislação trabalhista, industrialização nacional e cidadania"
      }
    ]
  },
  {
    "id": "geografia",
    "nome": "Geografia",
    "peso_ads": 1,
    "questoes_2026": 5,
    "fatia_nota": "6,8%",
    "descricao": "Geografia humana, transformações urbanas, meio ambiente e geopolítica.",
    "mais_recorrente": [
      {
        "topico": "Globalização e Relações de Trabalho",
        "detalhes": "Divisão internacional do trabalho, fluxos de capitais e tecnologias",
        "recorrencia": "5+ provas"
      },
      {
        "topico": "População e Indicadores Sociais",
        "detalhes": "Transição demográfica, pirâmides etárias, IDH e desigualdades regionais",
        "recorrencia": "5+ provas"
      },
      {
        "topico": "Meio Ambiente, Agropecuária e Solo",
        "detalhes": "Impactos ambientais, expansão agropecuária, desertificação e biomas",
        "recorrencia": "5+ provas"
      },
      {
        "topico": "Clima e Relevo",
        "detalhes": "Dinâmica climática, fenômenos extremos e relevo brasileiro",
        "recorrencia": "5+ provas"
      }
    ],
    "tambem_aparece": [
      {
        "topico": "Cartografia e Escala",
        "detalhes": "Cálculo de distância real vs. mapa, projeções e fusos horários"
      },
      {
        "topico": "Urbanização e Metropolização",
        "detalhes": "Problemas urbanos, segregação socioespacial e mobilidade"
      },
      {
        "topico": "Geopolítica e Tectônica",
        "detalhes": "Conflitos internacionais, recursos estratégicos e placas tectônicas"
      }
    ]
  },
  {
    "id": "fisica",
    "nome": "Física",
    "peso_ads": 1,
    "questoes_2026": 5,
    "fatia_nota": "6,8%",
    "descricao": "Questões práticas com fórmulas expressas no enunciado. Contas leves.",
    "mais_recorrente": [
      {
        "topico": "Mecânica Clássica",
        "detalhes": "Velocidade média, aceleração, leis de Newton, energia mecânica (cinética e potencial), conservação de energia",
        "recorrencia": "8/8 provas"
      },
      {
        "topico": "Grandezas e Unidades de Medida",
        "detalhes": "Compreensão de grandezas físicas e unidades aplicadas (A·h, FLOPS, nó marítimo, ano-luz)",
        "recorrencia": "Frequente"
      }
    ],
    "tambem_aparece": [
      {
        "topico": "Ondulatória e Acústica",
        "detalhes": "Relação fundamental c = λ·f, espectro eletromagnético e propriedades do som"
      },
      {
        "topico": "Eletrodinâmica e Potência",
        "detalhes": "Consumo de energia elétrica (E = P·Δt), potência e circuitos simples"
      },
      {
        "topico": "Termologia e Gases Ideais",
        "detalhes": "Equação geral dos gases e transformações térmicas"
      },
      {
        "topico": "Física Moderna",
        "detalhes": "Noções conceituais de relatividade e decaimento radioativo"
      }
    ]
  },
  {
    "id": "quimica",
    "nome": "Química",
    "peso_ads": 1,
    "questoes_2026": 5,
    "fatia_nota": "6,8%",
    "descricao": "Cálculos estequiométricos redondos e funções orgânicas do cotidiano.",
    "mais_recorrente": [
      {
        "topico": "Cálculo Químico e Soluções",
        "detalhes": "Conceito de mol, massa molar, concentração comum e molaridade, estequiometria com proporções simples",
        "recorrencia": "5/8 provas"
      },
      {
        "topico": "Química Orgânica",
        "detalhes": "Identificação de grupos funcionais (álcool, ácido carboxílico, éster, amina) e nomenclatura básica",
        "recorrencia": "4/8 provas"
      }
    ],
    "tambem_aparece": [
      {
        "topico": "Separação de Misturas e Fases",
        "detalhes": "Filtração, destilação simples/fracionada, decantação e mudanças de estado físico"
      },
      {
        "topico": "Ácidos, Bases e pH",
        "detalhes": "Funções inorgânicas e escala de pH (pH = -log[H+])"
      },
      {
        "topico": "Termoquímica e Ligações",
        "detalhes": "Reações endotérmicas e exotérmicas (ΔH), modelos atômicos e polaridade molecular"
      },
      {
        "topico": "Eletroquímica",
        "detalhes": "Pilhas galvânicas, oxirredução e corrosão"
      }
    ]
  },
  {
    "id": "biologia",
    "nome": "Biologia",
    "peso_ads": 1,
    "questoes_2026": 5,
    "fatia_nota": "6,8%",
    "descricao": "Foco em saúde pública, ecologia e biotecnologia aplicada.",
    "mais_recorrente": [
      {
        "topico": "Saúde Pública, Doenças e Saneamento",
        "detalhes": "Agentes etiológicos de viroses (dengue, pólio), verminoses, bactérias e o papel das vacinas e saneamento",
        "recorrencia": "5+ provas"
      },
      {
        "topico": "Ecologia e Sustentabilidade",
        "detalhes": "Cadeias alimentares, ciclos biogeoquímicos, desequilíbrios ecológicos e biodiversidade",
        "recorrencia": "5+ provas"
      },
      {
        "topico": "Fisiologia e Nutrição Humana",
        "detalhes": "Sistemas digestório, circulatório e relação com hábitos alimentares",
        "recorrencia": "Frequente"
      }
    ],
    "tambem_aparece": [
      {
        "topico": "Genética e Biotecnologia",
        "detalhes": "Sistema ABO, interpretação de heredogramas e DNA recombinante/transgênicos"
      },
      {
        "topico": "Microbiologia e Fermentação",
        "detalhes": "Processos biológicos na indústria e no ambiente"
      },
      {
        "topico": "Botânica e Evolução",
        "detalhes": "Adaptações vegetais e noções de seleção natural"
      }
    ]
  }
],
  redacoes_historicas: [
  {
    "ano": 2020,
    "semestre": "1º Semestre",
    "edicao": "2020/1 (aplicada em 08/12/2019)",
    "tema": "Empreendedorismo na sociedade brasileira do século XXI",
    "area": "Trabalho e Economia",
    "eixo_prova": "Trabalho: informalidade, apps de transporte, discriminação no emprego",
    "formato": "Tema afirmativo / dissertação ou narração",
    "id": "2020-1",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Predomina, na atualidade, a lógica da “engenharia da liofilização”, processualidade que se gestou a partir da reestruturação produtiva do capital, desencadeada nos países centrais desde meados dos anos 1970 e, no Brasil, a partir da segunda metade dos anos 1980, embora, de modo significativo, ao longo da década dos 1990. Esse movimento se caracterizou, no plano mais geral, por um lado, pela contração do trabalho estável e regulado, e, por outro, pela ampliação, em escala global, das formas desregulamentadas de trabalho precarizado, do “trabalho atípico”, de que é exemplo a infinitude de trabalhos terceirizados, part time*, subcontratados, “quarteirizados” etc. Outras formas de trabalho que frequentemente mascaram a superexploração - e mesmo autoexploração - são “empreendedorismo”, as falsas “cooperativas” e os trabalhos “voluntários”, exigidos pelo mercado de trabalho de modo compulsório, visto que se trata de requisito “obrigatório” na difícil busca por novos empregos, o que faz com que ninguém mais consiga um emprego se seu curriculum não acusar a realização de “trabalho voluntário”. Sem falar nos estagiários, que agora parecem fazer um pouco de tudo, quase sempre sem relação com sua formação real. <https://tinyurl.com/y6nchqmr> Acesso em: 19.10.2019. Adaptado.\n\n*trabalho de meio período."
      },
      {
        "numero": "II",
        "conteudo": "Muito se fala sobre o empreendedorismo no Brasil e sobre a importância dele – principalmente em períodos de recessão econômica. Dados divulgados pelo governo federal informam que, anualmente, algo como 600 mil empreendimentos são abertos em âmbito nacional. Além disso, em 2016, já são mais de 1,5 milhão de microempreendedores ao longo do mapa. O Brasil ocupa a primeira posição quando o assunto é abertura de novos empreendimentos. Uma pesquisa, realizada com base no índice da População Economicamente Ativa (PEA) e na taxa de desenvolvimento no Brasil, aponta que, nos últimos 10 anos, houve um aumento de 23% para 34,5%. Pois é: algo em torno de um terço da população economicamente ativa tem o negócio próprio. Essa pesquisa aponta, ainda, que, a cada 10 brasileiros com idade entre 18 e 64 anos, 3 têm um negócio ou estão trabalhando no desenvolvimento de empresas próprias. O empreendedorismo no Brasil pode ser separado em: empreendedorismo de necessidade e empreendedorismo de oportunidade. Nos mais recentes dados divulgados, a taxa de empreendedorismo de necessidade voltou a crescer de modo expressivo (o que é um reflexo da crise econômica, fazendo com que muitos encontrem nessa condição uma forma de lucrar mesmo em períodos de recessão). Entre 2002 e 2006, o empreendedorismo de necessidade foi o líder no que se refere à abertura de novos negócios. Já entre 2008 e 2014, quem se destacou foi o empreendedorismo de oportunidade (que leva em consideração características como inovação, planejamento estratégico e plano de divulgação). Em 2014, só para se ter uma ideia, 71% dos empreendimentos abertos eram de oportunidade. Porém, com a crise econômica voltando a “dar as caras” em todo o Brasil, o empreendedorismo de necessidade também ressurgiu, aparecendo em 44% dos negócios criados em 2015. <https://tinyurl.com/yc6fdx76> Acesso em: 19.10.2019. Adaptado."
      }
    ],
    "pagina_redacao": 22
  },
  {
    "ano": 2022,
    "semestre": "2º Semestre",
    "edicao": "2022/2 (aplicada em 17/07/2022)",
    "tema": "Desigualdade de gênero e mercado de trabalho no Brasil contemporâneo",
    "area": "Social e Trabalho",
    "eixo_prova": "Desigualdade e saúde pública: água, saneamento, mulheres, ODS",
    "formato": "Tema afirmativo / dissertação ou narração",
    "id": "2022-2",
    "textos": [
      {
        "numero": "I",
        "conteudo": "A desigualdade salarial de gênero é formada, muitas vezes, antes da entrada dos indivíduos no mercado de trabalho. No entanto, o mercado de trabalho pode funcionar como um reprodutor e consolidador dessa desigualdade. Por exemplo, algumas pessoas argumentam que mulheres, coincidentemente, têm preferência por certas profissões que pagam menos e, por isso, a desigualdade salarial não tem relação direta com a desigualdade de gênero. Para diversos cientistas sociais, compreender como essas preferências profissionais são firmadas é muito importante. O essencial aqui seria perguntar o porquê de mulheres estarem concentradas em cursos como educação e humanidades, além de comporem apenas 20 % dos profissionais de Engenharia ou 40 % dos profissionais de Economia. Será que existe um incentivo menor, na nossa cultura como um todo, para mulheres seguirem carreiras nas áreas mais ligadas às engenharias? <https://tinyurl.com/rfc4tbc> Acesso em: 20.04.2022. Adaptado."
      },
      {
        "numero": "II",
        "conteudo": "<https://tinyurl.com/3mfjdxmc> Acesso em: 21.04.2022. Original colorido."
      }
    ],
    "pagina_redacao": 22
  },
  {
    "ano": 2023,
    "semestre": "1º Semestre",
    "edicao": "2023/1",
    "tema": "Como se preparar para o mercado de trabalho diante dos avanços tecnológicos da 4ª Revolução Industrial?",
    "area": "Tecnologia e Trabalho",
    "eixo_prova": "Tecnologia e inovação: hidrogênio, telescópios, fazenda vertical",
    "formato": "Pergunta propositiva (solução)",
    "id": "2023-1",
    "textos": [
      {
        "numero": "I",
        "conteudo": "A Quarta Revolução Industrial é a transição em direção a novos sistemas que foram construídos sobre a infraestrutura da revolução digital, segundo o diretor executivo do Fórum Econômico Mundial. Ele ainda afirma que “há três razões pelas quais as transformações atuais não representam uma extensão da Terceira Revolução Industrial, mas a chegada de uma diferente: a velocidade, o alcance e o impacto nos sistemas. A velocidade dos avanços atuais não tem precedentes na história e está interferindo em quase todas as indústrias de todos os países”. Se por um lado, a Quarta Revolução Industrial pode acabar com cinco milhões de vagas de trabalho nos 15 países mais industrializados do mundo; por outro, ela tem o potencial de elevar os níveis globais de rendimento e melhorar a qualidade de vida de populações inteiras. São as mesmas populações que se beneficiaram com a chegada do mundo digital e a possibilidade de fazer transações comerciais a partir de um celular. Obviamente, o processo de transformação só beneficiará quem for capaz de inovar e se adaptar. <https://tinyurl.com/4yx24xkn> Acesso em: 09.11.2022. Adaptado."
      },
      {
        "numero": "II",
        "conteudo": "Cerca de 53 mil estudantes se formaram no Ensino Superior em cursos da área de Tecnologia da Informação em 2019, segundo os dados mais recentes do Inep (Instituto Nacional de Ensino Profissionalizante). Se o número se mantiver estável nos próximos anos, a Brasscom (Associação das Empresas de Tecnologia da Informação e Comunicação e de Tecnologias Digitais) estima que a oferta de profissionais deve continuar abaixo do necessário. Em 2025, por exemplo, os cerca de 50 mil formados na área ao ano no país serão menos de um quarto do necessário para ocupar pouco mais de 200 mil vagas projetadas para aquele ano. <https://tinyurl.com/3vcn2pjr> Acesso em: 09.11.2022. Adaptado."
      },
      {
        "numero": "III",
        "conteudo": "<https://tinyurl.com/yc45xmct> Acesso em: 12.12.2022. Original colorido."
      }
    ],
    "pagina_redacao": 23
  },
  {
    "ano": 2023,
    "semestre": "2º Semestre",
    "edicao": "2023/2",
    "tema": "Como combater a insegurança alimentar no Brasil?",
    "area": "Social e Direitos",
    "eixo_prova": "Alimentação e insegurança alimentar",
    "formato": "Pergunta propositiva (solução)",
    "id": "2023-2",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Segundo dados do Instituto Brasileiro de Geografia e Estatística (IBGE), entre 2013 e 2018, a insegurança alimentar grave* teve um crescimento anual de 8,0 %. Além disso, os resultados de uma pesquisa, realizada entre setembro e novembro de 2020, mostram que 116,8 milhões de brasileiros não tinham acesso pleno e permanente a alimentos e, desses, 19,1 milhões (9 % da população) estavam passando fome, número <https://tinyurl.com/3c453yum > Acesso em: 31.03.2023. Adaptado. que aumentou em 2022 para 33,1 milhões. *Insegurança alimentar grave, segundo IBGE, é ruptura nos padrões de alimentação resultante da falta de alimentos entre todos os moradores de um domicílio, incluindo as crianças. <https://tinyurl.com/2nx8rupv> Acesso em: 31.03.2023. Adaptado."
      },
      {
        "numero": "II",
        "conteudo": "Para o diretor executivo do Instituto Brasileiro de Análises Sociais (IBASE), o motivo de existir fome em um país que é um dos maiores produtores do mundo é a escolha política. O Brasil privilegia a produção de alimentos destinados à exportação por serem mais lucrativos e desconsidera a produção para consumo <https://tinyurl.com/yc3fh9yc> Acesso em: 30.03.2023. Adaptado. interno, que é menos rentável."
      },
      {
        "numero": "III",
        "conteudo": "O Brasil é hoje o segundo maior exportador de alimentos, atrás apenas dos Estados Unidos. O Brasil ampliou sua produção de grãos em 500 %, nas últimas quatro décadas, com um aumento de apenas 70 % <https://tinyurl.com/m4use7ue> Acesso em: 10.03.2023. Adaptado. na área plantada."
      },
      {
        "numero": "IV",
        "conteudo": "A Organização das Nações Unidas para a Alimentação e Agricultura (FAO) indica algumas medidas para combater a fome no mundo. Entre elas, estão a integração de políticas humanitárias em áreas de conflito; a ampliação da proteção dos sistemas alimentares, como a produção de pequenos agricultores; a prevenção às mudanças climáticas; e o fortalecimento de programas econômicos voltados a pessoas em situação de vulnerabilidade. Além desses objetivos, evitar o desperdício de alimentos também é uma forma apontada para diminuir o problema. De acordo com a FAO, um terço dos alimentos produzidos são desperdiçados diariamente, <https://tinyurl.com/7ven336t> Acesso em: 10.03.2023. reforçando os cenários de insegurança alimentar."
      }
    ],
    "pagina_redacao": 23
  },
  {
    "ano": 2024,
    "semestre": "1º Semestre",
    "edicao": "2024/1",
    "tema": "A importância da representatividade na Arte para a sociedade",
    "area": "Cultura e Social",
    "eixo_prova": "Arte e cultura brasileira: arte rupestre, Aleijadinho, Portinari, Banksy",
    "formato": "Tema afirmativo",
    "id": "2024-1",
    "textos": [
      {
        "numero": "I",
        "conteudo": "A representatividade tem como fator a construção de subjetividade e identidade de grupos e indivíduos que integram a sociedade. Isso significa que, por exemplo, quando uma mulher alcança o cargo mais alto do governo de um país, permite-se criar a subjetividade na identidade feminina de que outras mulheres também podem chegar lá. Da mesma forma, quando os programas televisivos alocam as atrizes negras como personagens com funções que servem às pessoas brancas, como trabalhadoras domésticas, também se cria – a partir de como são representadas – a subjetividade na população negra de que seu lugar é aquele. <https://tinyurl.com/5xpn7psr> Acesso em: 25.08.2023. Adaptado."
      },
      {
        "numero": "II",
        "conteudo": "No Brasil, durante um longo tempo, manifestações da cultura afro-brasileira não faziam parte das imagens oficiais. Por isso, tenderam a permanecer invisíveis em suas histórias, tecnologias e personagens. A representação dominante foi sempre a de um país branco, em geral europeu, masculino e exoticamente negro ou mestiço.\n\n<https://tinyurl.com/3e2v6m5e> Acesso em: 25.08.2023. Adaptado."
      },
      {
        "numero": "III",
        "conteudo": "“Desde 1500, com a chegada dos portugueses, há um preconceito enorme contra a gente, com os povos indígenas, falam que o indígena, quando usa o rap, ele perdeu a sua cultura. E, quando a gente mostra a nossa cultura, falam que o indígena é selvagem. Mas a gente vai continuar seguindo, mostrando nossa cultura, nossa arte e nossa tecnologia, que também é a nossa cultura!”, diz Owerá MC, rapper. São artistas como esse que lutam por representatividade no país e ainda encontram dificuldades ao adentrar na sociedade contemporânea. Mesmo com uma cultura rica em diversidades que compõem parte do Brasil, sua arte ainda é ignorada e, muitas vezes, silenciada.\n\n<https://tinyurl.com/48dftnrc> Acesso em: 12.09.2023. Adaptado."
      },
      {
        "numero": "IV",
        "conteudo": "Em mais de 50 países ao redor do mundo, milhões de pessoas foram às salas de cinema para assistir à estreia de “A Pequena Sereia”. A produção do filme ganhou notoriedade quando foi anunciado que a atriz Halle Bailey viveria a protagonista Ariel: uma atriz negra emprestaria sua pele para viver uma princesa da Disney. Além dos haters* preocupados em ter suas memórias da infância prejudicadas pela cor de um ser que não existe, as reações que realmente importam também viralizaram: crianças negras se reconhecendo na tela. A constatação de que a beleza não mora apenas em corpos brancos – mesmo que sejam corpos de sereia. Os efeitos da falta de representatividade podem ser duradouros para crianças negras: baixa autoestima, limitação de aspirações, desconexão cultural. Essa ausência também traz efeitos negativos nas vidas de crianças brancas. Não serem expostas à diversidade contribui para a perpetuação de estereótipos e preconceitos, além de privar essas crianças de oportunidades de aprendizado sobre a história. Sem exposição à diversidade racial, fica mais difícil compreender estruturas de poder e privilégio. *Hater(s): palavra inglesa usada para designar aqueles que odeiam; o(s) detrator(es). <https://tinyurl.com/3xvsbpd7> Acesso em: 25.08.2023. Adaptado."
      }
    ],
    "pagina_redacao": 22
  },
  {
    "ano": 2024,
    "semestre": "2º Semestre",
    "edicao": "2024/2",
    "tema": "Como superar a permanente exploração da América Latina?",
    "area": "Economia e Geopolítica",
    "eixo_prova": "América Latina: história, economia e integração",
    "formato": "Pergunta propositiva (solução)",
    "id": "2024-2",
    "textos": [
      {
        "numero": "I",
        "conteudo": "<http://tinyurl.com/495zpe68> Acesso em: 16.02.2024."
      },
      {
        "numero": "II",
        "conteudo": "Alguns países se especializam em ganhar e outros em perder. Nossa comarca no mundo, que hoje chamamos América Latina, foi precoce: especializou-se em perder desde os remotos tempos em que os europeus do Renascimento se aventuraram pelos mares e lhe cravaram os dentes na garganta. Passaram-se os séculos e a América Latina aprimorou suas funções. Ela já não é o reino das maravilhas em que a realidade superava a fábula e a imaginação era humilhada pelos troféus da conquista, as jazidas de ouro e as montanhas de prata. Mas a região continua trabalhando como serviçal, continua existindo para satisfazer as necessidades alheias, como fonte e reserva de petróleo e ferro, de cobre e carne, frutas e café, matérias-primas e alimentos destinados aos países ricos que, consumindo-os, ganham muito mais do que ganha a América Latina ao produzi-los. Eduardo Galeano, As Veias Abertas da América Latina."
      },
      {
        "numero": "III",
        "conteudo": "O capital humano é essencial em todos os aspectos do progresso humano. Desenvolver o capital humano ajuda as pessoas a melhorarem suas condições socioeconômicas e nos ajuda a alcançar nosso potencial por meio do acúmulo de conhecimento e de habilidades necessárias para tudo, desde conseguir o primeiro emprego até conseguir resolver grandes problemas como a mudança climática. Esse conhecimento também é fundamental para ajudar os países a reduzirem a pobreza e a desigualdade, aumentar a produtividade e acelerar o crescimento econômico. Pesquisas indicam que aumentar as habilidades cognitivas da força de trabalho de um país significa aumentar também o PIB. Então, para melhorar a vida dos cidadãos e lidar melhor com nossos desafios compartilhados, devemos investir mais no desenvolvimento humano. Este é o caminho para o Brasil e para a América Latina: aumentar nossos investimentos em capital humano. <https://tinyurl.com/4jb5pmwd> Acesso em: 01.04.2024. Adaptado."
      }
    ],
    "pagina_redacao": 22
  },
  {
    "ano": 2026,
    "semestre": "1º Semestre",
    "edicao": "2026/1 (aplicada em 14/12/2025)",
    "tema": "Como utilizar a tecnologia para combater a desinformação e disseminar o conhecimento científico?",
    "area": "Tecnologia e Educação",
    "eixo_prova": "Ciência, tecnologia e desinformação",
    "formato": "Pergunta propositiva (solução)",
    "id": "2026-1",
    "textos": [
      {
        "numero": "I",
        "conteudo": "<https://tinyurl.com/3xr7vf4b> Acesso em: 18.10.2024. Original colorido."
      },
      {
        "numero": "II",
        "conteudo": "Um dado importante retirado da pesquisa Truth Quest da Organização para a Cooperação e Desenvolvimento Econômico (OCDE) é a relação com as redes. “No mundo inteiro, o número de pessoas que frequentemente ou às vezes obtém a informação [pelas redes sociais] é muito grande”, diz o diretor do Centro de Inteligência Artificial da USP. A média mundial da quantidade de informações obtidas por meio dessas mídias é de 50%. O Brasil tem a maior taxa; já os japoneses, por exemplo, consomem apenas 25% das informações por meio das redes sociais. E não só os brasileiros são os que mais consomem, mas também os que mais confiam nas informações das mídias sociais (no Brasil, mais de 20% confiam muito). O estudo também aponta uma relação entre acreditar nas mídias sociais e não saber discernir notícias falsas de verdadeiras. Na média, aqueles que mais acreditavam nelas tiveram os piores desempenhos em identificar as fake news, acertando 54% das vezes. Quando as pessoas acreditam parcialmente nas mídias, a acurácia sobe para 59%, e sobe ainda mais (para 62%) quando elas acreditam pouco ou nada. < https://tinyurl.com/uwhhjud8> Acesso em: 14.09.2025. Adaptado."
      },
      {
        "numero": "III",
        "conteudo": "Para se contrapor a estes tempos de menosprezo ao conhecimento, é cada vez maior a motivação de muitos pesquisadores para usar as redes sociais como forma de divulgar seu trabalho e a ciência em geral, além de fazer uma ponte dela com a sociedade. Para combater a disseminação de notícias inverídicas que circulam nas redes, é necessário investir mais em educação e em meios de propagar conhecimentos. <https://tinyurl.com/4wdsv2uw> Acesso em: 14.09.2025. Adaptado."
      }
    ],
    "pagina_redacao": 22
  },
  {
    "ano": 2026,
    "semestre": "2º Semestre",
    "edicao": "2026/2",
    "tema": "Qual deve ser o papel do futebol no enfrentamento dos preconceitos sociais?",
    "area": "Social e Esporte",
    "eixo_prova": "Copa do Mundo e futebol",
    "formato": "Pergunta reflexiva/propositiva",
    "id": "2026-2",
    "textos": [
      {
        "numero": "I",
        "conteudo": "<https://tinyurl.com/2s492f36> Acesso em: 09.04.2026. Original colorido."
      },
      {
        "numero": "II",
        "conteudo": "O racismo não é a única forma de preconceito no futebol. Ao longo de 2019, contabilizaram-se 133 casos de discriminação no futebol, incluindo as machistas, as LGBT-fóbicas e as xenófobas. Desses, 118 aconteceram no Brasil e 15 com atletas brasileiros no exterior. Apesar do alto número de denúncias dessa natureza, somente dez foram julgadas e punidas pela Justiça Desportiva. As penas ora incidiram sobre a equipe que abrigava os infratores, ora sobre a torcida e ora sobre ambos. Considerando os 45 casos julgados entre 2014 e 2019, apenas 60% resultaram em alguma sanção para o clube ou para o atleta. <https://tinyurl.com/2p9nrru8> Acesso em: 09.04.2026. Adaptado."
      },
      {
        "numero": "III",
        "conteudo": "Entre 1981 e 1984, quando o Brasil ainda sofria com a restrição à liberdade de expressão nos últimos anos da ditadura militar, surgiu no futebol paulista um movimento de libertação, conhecido como Democracia Corinthiana. O nome era uma resposta irônica ao regime vigente e definiu com precisão a essência do movimento: dentro do clube vigorava uma democracia plena e radical. A gestão do time era conduzida de forma coletiva por um conselho que incluía os jogadores, subvertendo a pirâmide autoritária e a hierarquia tradicional do futebol. O jogador Sócrates, um dos líderes desse movimento, e seus companheiros tinham consciência de que o futebol poderia ser um palco para protestos, levando para os gramados bandeiras que iam muito além do esporte. <https://tinyurl.com/44xhm382> Acesso em: 09.04.2026. Adaptado."
      }
    ],
    "pagina_redacao": 23
  }
],
  propostas_treino: [
  {
    "id": 1,
    "titulo": "IA nos estudos",
    "categoria": "Tecnologia e Inteligência Artificial",
    "tema": "Como usar a inteligência artificial nos estudos sem substituir o pensamento do estudante?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Ferramentas de inteligência artificial generativa escrevem resumos, resolvem exercícios e até redigem textos em segundos. Muitos estudantes já as usam todos os dias, e parte dos professores relata dificuldade para saber o que foi produzido pelo aluno e o que veio da máquina."
      },
      {
        "numero": "II",
        "conteudo": "Pesquisadores em educação lembram que aprender exige esforço: errar, tentar de novo e organizar o próprio raciocínio. Quando a resposta pronta substitui esse processo, o estudante pode tirar boas notas sem ter aprendido o conteúdo."
      },
      {
        "numero": "III",
        "conteudo": "Por outro lado, a IA pode funcionar como tutor paciente: explica o mesmo ponto de várias formas, corrige erros e atende alunos que não têm aulas particulares, desde que o estudante saiba questioná-la e conferir as respostas."
      }
    ]
  },
  {
    "id": 2,
    "titulo": "Golpes digitais",
    "categoria": "Tecnologia e Inteligência Artificial",
    "tema": "Como proteger os brasileiros dos golpes digitais?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "O Pix, criado em 2020, tornou as transferências quase instantâneas e gratuitas para pessoas físicas. A mesma rapidez facilitou golpes: criminosos se passam por parentes, bancos ou lojas e convencem a vítima a transferir dinheiro em poucos minutos."
      },
      {
        "numero": "II",
        "conteudo": "Muitos golpes não dependem de falhas técnicas, mas de engenharia social: mensagens urgentes, ofertas boas demais e medo de perder a conta. Idosos e pessoas com pouca familiaridade com tecnologia estão entre as vítimas mais frequentes."
      },
      {
        "numero": "III",
        "conteudo": "Bancos, operadoras e o poder público têm adotado limites de valor noturnos, bloqueios temporários e campanhas de alerta, mas especialistas apontam que a rapidez de resposta após a fraude ainda é o maior gargalo."
      }
    ]
  },
  {
    "id": 3,
    "titulo": "Crianças e plataformas",
    "categoria": "Tecnologia e Inteligência Artificial",
    "tema": "Qual deve ser a responsabilidade das plataformas digitais na proteção de crianças e adolescentes?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Crianças e adolescentes passam horas em jogos, vídeos e redes sociais. Muitas plataformas foram pensadas para adultos e usam recursos que prendem a atenção, como rolagem infinita, recomendações automáticas e notificações constantes."
      },
      {
        "numero": "II",
        "conteudo": "O Estatuto da Criança e do Adolescente afirma que é dever da família, da sociedade e do Estado colocar crianças a salvo de qualquer forma de negligência, exploração e violência. O debate atual é como aplicar esse princípio ao ambiente digital."
      },
      {
        "numero": "III",
        "conteudo": "Defensores de regras mais rígidas pedem verificação de idade e responsabilização das empresas. Críticos alertam para riscos à privacidade e à liberdade de expressão, e lembram que família e escola também têm papel central."
      }
    ]
  },
  {
    "id": 4,
    "titulo": "Dependência de telas",
    "categoria": "Tecnologia e Inteligência Artificial",
    "tema": "Como reduzir a dependência de telas e redes sociais entre os jovens?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "O brasileiro está entre os povos que mais passam tempo conectados no mundo. Entre os jovens, o celular é usado para estudar, conversar, jogar e se divertir, muitas vezes ao mesmo tempo e até de madrugada."
      },
      {
        "numero": "II",
        "conteudo": "Estudos apontam relação entre uso excessivo de redes sociais, sono ruim, ansiedade e queda de concentração, embora seja difícil separar causa e consequência. Diversos países, e o próprio Brasil em escolas, passaram a restringir o celular em sala de aula."
      },
      {
        "numero": "III",
        "conteudo": "Educadores afirmam que proibir não basta: é preciso oferecer atividades presenciais atraentes e ensinar o jovem a perceber quando a tela deixou de ser ferramenta e virou hábito compulsivo."
      }
    ]
  },
  {
    "id": 5,
    "titulo": "Inclusão digital",
    "categoria": "Tecnologia e Inteligência Artificial",
    "tema": "Como ampliar a inclusão digital de idosos e de moradores de regiões isoladas no Brasil?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Serviços públicos, bancos e comércio migraram para aplicativos. Quem não tem internet estável, aparelho adequado ou familiaridade com o sistema encontra obstáculos para tarefas simples, como consultar benefício, agendar consulta ou pagar uma conta."
      },
      {
        "numero": "II",
        "conteudo": "A desigualdade digital não se resume a ter ou não acesso. Muitas famílias dividem um único celular, usam pacote de dados limitado ou não sabem se proteger de fraudes, o que torna o acesso precário."
      },
      {
        "numero": "III",
        "conteudo": "Iniciativas de escolas, bibliotecas e projetos comunitários ensinam idosos e moradores de regiões isoladas a usar a tecnologia, mas dependem de recursos e voluntários, e nem sempre chegam onde a necessidade é maior."
      }
    ]
  },
  {
    "id": 6,
    "titulo": "Privacidade e vigilância",
    "categoria": "Tecnologia e Inteligência Artificial",
    "tema": "Qual deve ser o limite entre segurança pública e privacidade na era da vigilância digital?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Câmeras com reconhecimento facial já são usadas em estádios, aeroportos e ruas de grandes cidades. Os defensores dizem que ajudam a localizar foragidos e desaparecidos e a reduzir a violência."
      },
      {
        "numero": "II",
        "conteudo": "A Lei Geral de Proteção de Dados, em vigor desde 2020, determina que dados pessoais sejam usados com finalidade clara e com segurança. Dados biométricos, como o rosto, exigem cuidado especial por não poderem ser trocados como uma senha."
      },
      {
        "numero": "III",
        "conteudo": "Pesquisas já mostraram que sistemas de reconhecimento facial podem errar mais com pessoas negras, o que aumenta o risco de abordagens indevidas e de prisões injustas."
      }
    ]
  },
  {
    "id": 7,
    "titulo": "Trabalho por aplicativos",
    "categoria": "Trabalho e Economia",
    "tema": "Como garantir direitos aos trabalhadores de aplicativos sem eliminar a flexibilidade que muitos valorizam?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Motoristas e entregadores de aplicativo escolhem seus horários e não têm chefe direto, mas dependem de algoritmos que definem corridas, preços e bloqueios. Muitos trabalham longas jornadas para alcançar uma renda razoável e arcam sozinhos com combustível, manutenção e acidentes."
      },
      {
        "numero": "II",
        "conteudo": "Parte dos trabalhadores valoriza a flexibilidade e teme que, com vínculo formal, as plataformas reduzam o número de vagas. Outra parte reclama de falta de proteção em caso de doença, acidente ou aposentadoria."
      },
      {
        "numero": "III",
        "conteudo": "O tema chegou à Justiça e ao Congresso, e vários países testam modelos intermediários, que garantem alguns direitos sem tratar a atividade como emprego tradicional."
      }
    ]
  },
  {
    "id": 8,
    "titulo": "Jornada de trabalho",
    "categoria": "Trabalho e Economia",
    "tema": "Qual o impacto da redução da jornada de trabalho para a sociedade brasileira?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "No Brasil, a jornada padrão prevista na Constituição é de até 44 horas semanais. Muitos trabalhadores do comércio e dos serviços cumprem escalas de seis dias de trabalho para um de folga, e discute-se reduzir esse tempo."
      },
      {
        "numero": "II",
        "conteudo": "Defensores da redução afirmam que mais tempo livre melhora a saúde, a vida familiar e até a produtividade. Alguns países fizeram testes com semanas de quatro dias e registraram boa satisfação dos trabalhadores."
      },
      {
        "numero": "III",
        "conteudo": "Representantes de pequenas empresas temem aumento de custos, demissões ou repasse aos preços, principalmente em atividades que funcionam todos os dias. Economistas lembram que o efeito depende do setor e de como a mudança for feita."
      }
    ]
  },
  {
    "id": 9,
    "titulo": "Jovens e primeiro emprego",
    "categoria": "Trabalho e Economia",
    "tema": "Como facilitar a entrada dos jovens no mercado de trabalho formal?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Jovens de 18 a 24 anos enfrentam taxa de desemprego maior que a da população em geral. Muitas vagas pedem experiência prévia, o que cria um círculo difícil de romper para quem busca o primeiro emprego."
      },
      {
        "numero": "II",
        "conteudo": "Parte dos jovens começa a trabalhar cedo na informalidade para ajudar a família, e acaba abandonando os estudos ou estudando à noite, cansada. Isso limita as oportunidades futuras."
      },
      {
        "numero": "III",
        "conteudo": "Programas de aprendizagem, estágios e cursos técnicos aproximam escola e empresa, mas muitas vezes oferecem poucas vagas e se concentram nos grandes centros."
      }
    ]
  },
  {
    "id": 10,
    "titulo": "Apostas online e endividamento",
    "categoria": "Trabalho e Economia",
    "tema": "Como enfrentar os impactos das apostas online no endividamento das famílias brasileiras?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "As apostas online, conhecidas como \"bets\", se popularizaram com anúncios de celebridades e influenciadores. O acesso pelo celular torna a aposta imediata e contínua, inclusive para quem tem pouca renda."
      },
      {
        "numero": "II",
        "conteudo": "Profissionais de saúde alertam que o jogo pode causar compulsão, e que muitas pessoas apostam o dinheiro de contas básicas, na esperança de recuperar perdas. O resultado pode ser endividamento e conflitos familiares."
      },
      {
        "numero": "III",
        "conteudo": "O governo passou a regulamentar o setor, com regras de publicidade e de identificação dos apostadores. Defensores da restrição pedem medidas mais duras, enquanto o setor afirma que a regulação combate o mercado ilegal."
      }
    ]
  },
  {
    "id": 11,
    "titulo": "Trabalho de cuidado",
    "categoria": "Trabalho e Economia",
    "tema": "Como valorizar o trabalho de cuidado e dividir melhor essa responsabilidade na sociedade?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Cuidar de crianças, idosos e doentes e organizar a casa é um trabalho essencial para a economia, mas em geral não é remunerado. No Brasil, ele recai principalmente sobre as mulheres, que dedicam mais horas semanais a essas tarefas que os homens."
      },
      {
        "numero": "II",
        "conteudo": "Com o envelhecimento da população, a demanda por cuidadores deve crescer. Muitas famílias não podem pagar ajuda profissional, e uma parte das mulheres reduz a jornada ou deixa o emprego para cuidar de parentes."
      },
      {
        "numero": "III",
        "conteudo": "Alguns países criaram redes públicas de cuidado, como creches em tempo integral, centros-dia para idosos e licenças parentais divididas entre pai e mãe."
      }
    ]
  },
  {
    "id": 12,
    "titulo": "Eventos climáticos extremos",
    "categoria": "Meio Ambiente e Cidades",
    "tema": "Como preparar as cidades brasileiras para enchentes, secas e ondas de calor?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Em 2024, enchentes devastaram cidades do Rio Grande do Sul, deixaram milhares de pessoas desabrigadas e mostraram como bairros inteiros podem ficar isolados em poucos dias. Ondas de calor e secas prolongadas também têm atingido outras regiões do país."
      },
      {
        "numero": "II",
        "conteudo": "Cientistas associam o aumento desses eventos às mudanças climáticas, mas lembram que os danos dependem também de como as cidades são construídas: ruas impermeabilizadas, rios canalizados e moradias em encostas ampliam o risco."
      },
      {
        "numero": "III",
        "conteudo": "Sistemas de alerta, planos de evacuação e obras de drenagem reduzem as perdas, mas exigem investimento contínuo e preparação da população, que precisa saber o que fazer quando o aviso chega."
      }
    ]
  },
  {
    "id": 13,
    "titulo": "Lixo eletrônico",
    "categoria": "Meio Ambiente e Cidades",
    "tema": "Como reduzir o descarte inadequado de lixo eletrônico no Brasil?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Celulares, computadores e eletrodomésticos são trocados cada vez mais rápido. Parte desses aparelhos acaba em gavetas, lixões ou descartada na rua, o que libera metais pesados no solo e na água."
      },
      {
        "numero": "II",
        "conteudo": "Esses equipamentos também contêm materiais valiosos, como cobre, ouro e terras raras, que podem ser recuperados pela reciclagem. Por isso, o lixo eletrônico é problema ambiental e oportunidade econômica."
      },
      {
        "numero": "III",
        "conteudo": "A política nacional de resíduos sólidos prevê que fabricantes e importadores recolham produtos usados, a chamada logística reversa. Na prática, poucos pontos de coleta são conhecidos da população."
      }
    ]
  },
  {
    "id": 14,
    "titulo": "Amazônia",
    "categoria": "Meio Ambiente e Cidades",
    "tema": "Como conciliar a preservação da Amazônia com o desenvolvimento de quem vive nela?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "A Amazônia abriga enorme biodiversidade, regula o clima de grande parte do continente e é a casa de povos indígenas e comunidades ribeirinhas. O desmatamento e as queimadas ameaçam esse equilíbrio."
      },
      {
        "numero": "II",
        "conteudo": "Milhares de pessoas vivem na região e precisam de renda, estradas, energia e serviços. Quando a floresta em pé não gera ganhos para quem mora ali, a derrubada para pasto ou garimpo se torna uma alternativa tentadora."
      },
      {
        "numero": "III",
        "conteudo": "Iniciativas de bioeconomia, como o manejo sustentável de castanha e açaí, a fiscalização por satélite e o pagamento por serviços ambientais têm sido apontadas como caminhos, mas ainda são pequenas diante do tamanho do problema."
      }
    ]
  },
  {
    "id": 15,
    "titulo": "Mobilidade urbana",
    "categoria": "Meio Ambiente e Cidades",
    "tema": "Como melhorar a mobilidade urbana nas grandes cidades brasileiras?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Em grandes cidades, muitos trabalhadores gastam mais de uma hora para chegar ao trabalho, boa parte dela em ônibus lotados ou no trânsito. O tempo perdido reduz o descanso, o estudo e o convívio familiar."
      },
      {
        "numero": "II",
        "conteudo": "O carro individual ocupa muito espaço e emite poluentes, mas continua sendo escolhido por quem não confia no transporte coletivo. Ciclovias, corredores de ônibus e metrô aumentam a atratividade de outras opções, quando são bem conectados."
      },
      {
        "numero": "III",
        "conteudo": "O custo do transporte público pesa no orçamento das famílias mais pobres. Algumas cidades subsidiam tarifas ou adotam a tarifa zero, o que levanta o debate sobre quem deve pagar a conta."
      }
    ]
  },
  {
    "id": 16,
    "titulo": "Saneamento básico",
    "categoria": "Meio Ambiente e Cidades",
    "tema": "Como universalizar o saneamento básico no Brasil?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "O Novo Marco Legal do Saneamento, de 2020, estabeleceu a meta de levar água tratada a 99% da população e coleta e tratamento de esgoto a 90% até 2033. Milhões de brasileiros ainda não têm rede de esgoto."
      },
      {
        "numero": "II",
        "conteudo": "A falta de saneamento está ligada a doenças como diarreia, verminoses e dengue, e afeta mais as crianças e as populações pobres. Estudos associam obras de saneamento a menos internações e melhor desempenho escolar."
      },
      {
        "numero": "III",
        "conteudo": "Para atingir a meta, é preciso investimento público e privado, fiscalização e atenção às cidades pequenas e às periferias, onde a rede costuma chegar por último."
      }
    ]
  },
  {
    "id": 17,
    "titulo": "Saúde mental dos jovens",
    "categoria": "Saúde e Bem-Estar",
    "tema": "Como cuidar da saúde mental dos jovens brasileiros?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Ansiedade, depressão e esgotamento têm sido relatados por muitos adolescentes e jovens adultos. Pressão por desempenho, insegurança com o futuro e comparação constante nas redes sociais aparecem entre os fatores citados."
      },
      {
        "numero": "II",
        "conteudo": "O atendimento psicológico na rede pública tem filas e poucos profissionais para a demanda. Quem não pode pagar atendimento particular frequentemente espera meses ou desiste."
      },
      {
        "numero": "III",
        "conteudo": "Escolas e universidades já testam núcleos de acolhimento, rodas de conversa e formação de professores para identificar sinais de sofrimento. Especialistas lembram que falar sobre o assunto reduz o estigma e ajuda a buscar ajuda mais cedo."
      }
    ]
  },
  {
    "id": 18,
    "titulo": "Envelhecimento da população",
    "categoria": "Saúde e Bem-Estar",
    "tema": "Como a sociedade brasileira pode se preparar para o envelhecimento da população?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "A população brasileira está envelhecendo: as pessoas vivem mais e têm menos filhos. Nas próximas décadas, a proporção de idosos deve crescer bastante, e a de jovens deve diminuir."
      },
      {
        "numero": "II",
        "conteudo": "Isso aumenta a demanda por saúde, cuidadores e aposentadorias, e reduz a quantidade de trabalhadores que contribuem para a previdência. Muitos idosos também vivem sozinhos ou com renda baixa."
      },
      {
        "numero": "III",
        "conteudo": "Por outro lado, há idosos ativos que trabalham, empreendem e participam da comunidade. Políticas de saúde preventiva, educação ao longo da vida e cidades acessíveis ajudam a viver mais e melhor."
      }
    ]
  },
  {
    "id": 19,
    "titulo": "Vacinação",
    "categoria": "Saúde e Bem-Estar",
    "tema": "Como recuperar as altas coberturas vacinais no Brasil?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "O Brasil já foi referência mundial em vacinação, e o Programa Nacional de Imunizações ajudou a eliminar doenças como a poliomielite. Nos últimos anos, porém, a cobertura de várias vacinas infantis ficou abaixo da meta."
      },
      {
        "numero": "II",
        "conteudo": "Entre os motivos citados estão a desinformação nas redes, a falsa sensação de que as doenças desapareceram e a dificuldade de chegar aos postos, principalmente para quem trabalha em horário comercial."
      },
      {
        "numero": "III",
        "conteudo": "Campanhas com linguagem simples, vacinação nas escolas e horários estendidos nos postos têm sido usados para recuperar a cobertura, mas dependem de aceitação e confiança da população."
      }
    ]
  },
  {
    "id": 20,
    "titulo": "Alimentação infantil",
    "categoria": "Saúde e Bem-Estar",
    "tema": "Como melhorar a alimentação das crianças brasileiras?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Alimentos ultraprocessados, como salgadinhos, refrigerantes e biscoitos recheados, ocupam espaço crescente na alimentação de crianças. Eles são baratos, duram muito e são amplamente anunciados."
      },
      {
        "numero": "II",
        "conteudo": "O excesso de peso na infância aumenta o risco de diabetes, pressão alta e problemas emocionais ao longo da vida. Ao mesmo tempo, muitas famílias ainda convivem com a insegurança alimentar, e por isso o problema não é só de falta ou de excesso, mas de qualidade."
      },
      {
        "numero": "III",
        "conteudo": "A merenda escolar deve priorizar alimentos frescos, e a compra da agricultura familiar é incentivada por lei. Especialistas também defendem regras mais claras para a publicidade dirigida à infância e rótulos fáceis de entender."
      }
    ]
  },
  {
    "id": 21,
    "titulo": "Evasão escolar",
    "categoria": "Educação e Cultura",
    "tema": "Como reduzir a evasão escolar no ensino médio?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Muitos jovens deixam a escola antes de concluir o ensino médio. Entre os motivos mais citados estão a necessidade de trabalhar, a gravidez na adolescência, a falta de interesse e a dificuldade de acompanhar as aulas."
      },
      {
        "numero": "II",
        "conteudo": "Estudos mostram que a evasão costuma começar com faltas repetidas e notas baixas, sinais que a escola pode identificar cedo. Em geral, atinge mais os jovens mais pobres, negros e das periferias."
      },
      {
        "numero": "III",
        "conteudo": "Programas de bolsa para permanência, ensino médio em tempo integral e cursos ligados ao mundo do trabalho têm sido usados para manter o aluno na escola, com resultados diferentes conforme a região."
      }
    ]
  },
  {
    "id": 22,
    "titulo": "Leitura",
    "categoria": "Educação e Cultura",
    "tema": "Como incentivar o hábito de leitura entre os brasileiros?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Pesquisas sobre hábitos de leitura indicam que uma parte significativa dos brasileiros lê poucos livros por ano. As bibliotecas públicas, em muitas cidades, têm acervos antigos e horários restritos."
      },
      {
        "numero": "II",
        "conteudo": "A leitura desenvolve vocabulário, argumentação e imaginação, e os alunos que leem mais costumam ter melhor desempenho em todas as disciplinas, inclusive em Matemática."
      },
      {
        "numero": "III",
        "conteudo": "Clubes de leitura, feiras de livros, audiolivros e comunidades de leitores nas redes sociais mostram que o interesse existe, mas depende de acesso e de incentivo na escola e em casa."
      }
    ]
  },
  {
    "id": 23,
    "titulo": "Ensino técnico e tecnológico",
    "categoria": "Educação e Cultura",
    "tema": "Como valorizar o ensino técnico e tecnológico como caminho para o mercado de trabalho?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Empresas de vários setores relatam dificuldade para encontrar profissionais técnicos qualificados, como eletricistas, mecânicos, analistas de dados e desenvolvedores. Ao mesmo tempo, muitos jovens estão desempregados."
      },
      {
        "numero": "II",
        "conteudo": "No Brasil, o diploma universitário tradicional ainda é visto como caminho principal de ascensão social, e o ensino técnico e tecnológico recebe menos prestígio, apesar de, em muitos casos, levar a empregos mais rápidos."
      },
      {
        "numero": "III",
        "conteudo": "Escolas técnicas e faculdades de tecnologia públicas têm alta procura, mas poucas vagas. Parcerias com empresas e estágios aproximam a formação do mercado."
      }
    ]
  },
  {
    "id": 24,
    "titulo": "Cultura popular",
    "categoria": "Educação e Cultura",
    "tema": "Como valorizar a cultura popular brasileira diante da globalização?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Festas juninas, congadas, bumba meu boi, capoeira, artesanato e culinária regional fazem parte do patrimônio cultural brasileiro. Muitas dessas tradições são mantidas por comunidades locais, com pouca ajuda financeira."
      },
      {
        "numero": "II",
        "conteudo": "A globalização e as plataformas de vídeo e música difundem produtos de todo o mundo. Isso amplia o repertório, mas pode reduzir o espaço e o interesse dos jovens pelas expressões locais."
      },
      {
        "numero": "III",
        "conteudo": "Registros como o tombamento e o reconhecimento como patrimônio imaterial protegem as tradições. Muitos mestres e artistas populares defendem também apoio direto, para que possam viver da própria arte e transmiti-la."
      }
    ]
  },
  {
    "id": 25,
    "titulo": "Violência e bullying nas escolas",
    "categoria": "Educação e Cultura",
    "tema": "Como combater o bullying e a violência nas escolas brasileiras?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Casos de agressões, ameaças e ataques em escolas chamaram a atenção do país. Professores e alunos relatam que o bullying, presencial e virtual, é frequente e nem sempre é levado a sério."
      },
      {
        "numero": "II",
        "conteudo": "O bullying pode causar isolamento, queda do rendimento escolar e problemas emocionais para quem sofre e também para quem pratica. A lei brasileira prevê programas escolares de combate à intimidação sistemática."
      },
      {
        "numero": "III",
        "conteudo": "Escolas que mantêm diálogo constante, oferecem apoio psicológico e envolvem as famílias relatam clima mais seguro. Medidas apenas punitivas, como suspensão, dificilmente resolvem a raiz do problema."
      }
    ]
  },
  {
    "id": 26,
    "titulo": "Violência contra a mulher",
    "categoria": "Direitos, Sociedade e Esporte",
    "tema": "Como enfrentar a violência contra a mulher no Brasil?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "A Lei Maria da Penha, de 2006, criou mecanismos para proteger mulheres da violência doméstica. Mesmo assim, casos de agressão e feminicídio continuam a ser registrados em todo o país, muitas vezes por parceiros ou ex-parceiros."
      },
      {
        "numero": "II",
        "conteudo": "Muitas vítimas hesitam em denunciar por dependência financeira, medo de retaliação ou descrédito. Delegacias especializadas e abrigos existem, mas não chegam a todos os municípios."
      },
      {
        "numero": "III",
        "conteudo": "Especialistas defendem que a prevenção passe também pela educação: discutir respeito e igualdade nas escolas e envolver os homens na mudança de comportamento."
      }
    ]
  },
  {
    "id": 27,
    "titulo": "Acessibilidade e inclusão",
    "categoria": "Direitos, Sociedade e Esporte",
    "tema": "Como promover a acessibilidade e a inclusão de pessoas com deficiência na sociedade brasileira?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "Calçadas quebradas, falta de rampas, transportes sem adaptação e sites que não funcionam com leitores de tela dificultam a vida de pessoas com deficiência. A Lei Brasileira de Inclusão garante direitos, mas muitos ainda não são cumpridos."
      },
      {
        "numero": "II",
        "conteudo": "A inclusão não depende só de estruturas físicas. Preconceito, falta de oportunidades de emprego e desinformação sobre as deficiências também excluem."
      },
      {
        "numero": "III",
        "conteudo": "Empresas que contratam pessoas com deficiência relatam que a adaptação do ambiente costuma ser simples e que equipes ficam mais colaborativas, mas a lei de cotas nem sempre é cumprida."
      }
    ]
  },
  {
    "id": 28,
    "titulo": "Desigualdade racial",
    "categoria": "Direitos, Sociedade e Esporte",
    "tema": "Como reduzir a desigualdade racial no Brasil?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "A população negra é maioria no Brasil, mas ganha menos, sofre mais com o desemprego e está menos presente em cargos de direção. As diferenças aparecem também na educação e na saúde."
      },
      {
        "numero": "II",
        "conteudo": "Políticas de cotas em universidades e concursos ampliaram o acesso de estudantes negros e de baixa renda ao ensino superior. Defensores apontam resultados positivos, e críticos pedem mais foco na melhoria da escola pública."
      },
      {
        "numero": "III",
        "conteudo": "O racismo também se manifesta em situações cotidianas: abordagens policiais, piadas, estereótipos na mídia. A lei pune a injúria racial e o racismo, mas muitas vítimas deixam de denunciar."
      }
    ]
  },
  {
    "id": 29,
    "titulo": "Esporte e inclusão",
    "categoria": "Direitos, Sociedade e Esporte",
    "tema": "Qual o papel do esporte na inclusão social e na formação dos jovens?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "O esporte escolar e comunitário ensina disciplina, trabalho em equipe e respeito às regras. Para muitos jovens de bairros pobres, quadras e projetos esportivos são um dos poucos espaços seguros de convívio."
      },
      {
        "numero": "II",
        "conteudo": "Apesar disso, parte das escolas públicas não tem quadra, professor de educação física ou material adequado. O sedentarismo cresce entre crianças e adolescentes."
      },
      {
        "numero": "III",
        "conteudo": "Atletas olímpicos e paralímpicos brasileiros frequentemente relatam ter começado em projetos sociais, o que reforça a importância de investir na base, e não só em alto rendimento."
      }
    ]
  },
  {
    "id": 30,
    "titulo": "Participação política e voto consciente",
    "categoria": "Direitos, Sociedade e Esporte",
    "tema": "Como estimular a participação política e o voto consciente da juventude?",
    "textos": [
      {
        "numero": "I",
        "conteudo": "O voto é obrigatório para a maioria dos brasileiros adultos, mas o interesse por política varia. Muitos eleitores dizem não confiar em partidos e têm dificuldade de lembrar em quem votaram."
      },
      {
        "numero": "II",
        "conteudo": "Informações sobre candidatos e propostas estão disponíveis em sites públicos, mas disputam espaço com boatos, vídeos manipulados e mensagens virais."
      },
      {
        "numero": "III",
        "conteudo": "Participação política vai além do voto: conselhos municipais, audiências públicas, associações de bairro e grêmios estudantis permitem influenciar decisões perto de casa."
      }
    ]
  }
],
  provas: [
  {
    "id": "2026-2",
    "ano": 2026,
    "semestre": 2,
    "semestre_label": "2º Semestre",
    "questoes": 60,
    "tema_central": "Copa do Mundo e Futebol: esporte, sociedade e cultura",
    "tema_redacao": "Qual deve ser o papel do futebol no enfrentamento dos preconceitos sociais?",
    "arquivo_prova": "provas/prova-2-2026.pdf",
    "arquivo_gabarito": "provas/gabarito-2-2026.pdf",
    "tamanho_prova": "1.5 MB",
    "tamanho_gabarito": "58 KB",
    "formato": "Formato novo (60 questões: 8 Matemática, 5 Lógica, 8 Português)",
    "pagina_redacao": 23
  },
  {
    "id": "2026-1",
    "ano": 2026,
    "semestre": 1,
    "semestre_label": "1º Semestre",
    "questoes": 60,
    "tema_central": "Ciência, Tecnologia e Combate à Desinformação",
    "tema_redacao": "Como utilizar a tecnologia para combater a desinformação e disseminar o conhecimento científico?",
    "arquivo_prova": "provas/prova-1-2026.pdf",
    "arquivo_gabarito": "provas/gabarito-1-2026.pdf",
    "tamanho_prova": "5.5 MB",
    "tamanho_gabarito": "58 KB",
    "formato": "Formato novo (60 questões: 8 Matemática, 5 Lógica, 8 Português)",
    "pagina_redacao": 22
  },
  {
    "id": "2024-2",
    "ano": 2024,
    "semestre": 2,
    "semestre_label": "2º Semestre",
    "questoes": 54,
    "tema_central": "América Latina: história, economia, exploração e integração",
    "tema_redacao": "Como superar a permanente exploração da América Latina?",
    "arquivo_prova": "provas/prova-2-2024.pdf",
    "arquivo_gabarito": "provas/gabarito-2-2024.pdf",
    "tamanho_prova": "1.9 MB",
    "tamanho_gabarito": "56 KB",
    "formato": "Formato clássico (54 questões)",
    "pagina_redacao": 22
  },
  {
    "id": "2024-1",
    "ano": 2024,
    "semestre": 1,
    "semestre_label": "1º Semestre",
    "questoes": 54,
    "tema_central": "Arte e Cultura Brasileira: arte rupestre, Portinari, representatividade",
    "tema_redacao": "A importância da representatividade na Arte para a sociedade",
    "arquivo_prova": "provas/prova-1-2024.pdf",
    "arquivo_gabarito": "provas/gabarito-1-2024.pdf",
    "tamanho_prova": "1.6 MB",
    "tamanho_gabarito": "56 KB",
    "formato": "Formato clássico (54 questões)",
    "pagina_redacao": 22
  },
  {
    "id": "2023-2",
    "ano": 2023,
    "semestre": 2,
    "semestre_label": "2º Semestre",
    "questoes": 54,
    "tema_central": "Alimentação e Insegurança Alimentar no Brasil",
    "tema_redacao": "Como combater a insegurança alimentar no Brasil?",
    "arquivo_prova": "provas/prova-2-2023.pdf",
    "arquivo_gabarito": "provas/gabarito-2-2023.pdf",
    "tamanho_prova": "1.9 MB",
    "tamanho_gabarito": "74 KB",
    "formato": "Formato clássico (54 questões)",
    "pagina_redacao": 23
  },
  {
    "id": "2023-1",
    "ano": 2023,
    "semestre": 1,
    "semestre_label": "1º Semestre",
    "questoes": 54,
    "tema_central": "Tecnologia, Inovação e 4ª Revolução Industrial",
    "tema_redacao": "Como se preparar para o mercado de trabalho diante dos avanços tecnológicos da 4ª Revolução Industrial?",
    "arquivo_prova": "provas/prova-1-2023.pdf",
    "arquivo_gabarito": "provas/Gabarito-1-2023.pdf",
    "tamanho_prova": "2.4 MB",
    "tamanho_gabarito": "85 KB",
    "formato": "Formato clássico (54 questões)",
    "pagina_redacao": 23
  },
  {
    "id": "2022-2",
    "ano": 2022,
    "semestre": 2,
    "semestre_label": "2º Semestre",
    "questoes": 54,
    "tema_central": "Desigualdade Social, Gênero e Saúde Pública",
    "tema_redacao": "Desigualdade de gênero e mercado de trabalho no Brasil contemporâneo",
    "arquivo_prova": "provas/Prova-2022.pdf",
    "arquivo_gabarito": "provas/Gabarito-2022.pdf",
    "tamanho_prova": "3.0 MB",
    "tamanho_gabarito": "89 KB",
    "formato": "Formato clássico (54 questões)",
    "pagina_redacao": 22
  },
  {
    "id": "2020-1",
    "ano": 2020,
    "semestre": 1,
    "semestre_label": "1º Semestre",
    "questoes": 54,
    "tema_central": "Trabalho e Sociedade no Século XXI: informalidade e gig economy",
    "tema_redacao": "Empreendedorismo na sociedade brasileira do século XXI",
    "arquivo_prova": "provas/prova-2020.pdf",
    "arquivo_gabarito": "provas/Gabarito-2020.pdf",
    "tamanho_prova": "1.7 MB",
    "tamanho_gabarito": "96 KB",
    "formato": "Formato clássico (54 questões)",
    "pagina_redacao": 22
  }
]
};
