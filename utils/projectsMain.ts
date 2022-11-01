import { imgPaths } from 'utils/imgPaths'

export interface ProjectType {
  name: string
  description: string
  points: string[]
  tagUrls: string[]
  links: string[]
}

export const projects: ProjectType[] = [
  {
    name: 'Portfolio Site',
    description:
      'Personal portfolio and a personal blog is always a nice thing to have, so I handcrafted one for myself to showcase my blogs and projects',
    points: [
      '👾 Next.js for the core',
      '🧰 TypeScript for the language',
      '📝 MDX for the Blog',
      '📓 next-contentlayer for blog management',
      '🐱 Github comments and reactions',
      '💎 Prism to highlight the code blocks',
      '🌠 Framer Motion for animation',
      '💅 Sass for styling',
      '🔮 Vercel open graph dynamic image generation',
      '✨ SEO optimized',
    ],
    tagUrls: [imgPaths['Next.js'].path, imgPaths['Typescript'].path, imgPaths['Sass'].path],
    links: ['https://github.com/0xHecker/portfolio-next-sass', 'https://beddit-lac.vercel.app/'],
  },

  {
    name: 'Beddit server',
    description:
      'This project introduced me to whole new depths of patterns and fun Typescript and Graphql (ofc learnt from benawad himself), spent a lot of time around building this one and had much fun. took a lot of breaks to explore and learn the stuff in between like db modeling, postgres, next.js etc.',
    points: [
      '🏃 TypeScript Express, graphql for the server',
      '💎 Postgres typeorm combo for db. redis for sessions and cache',
      '👯 User auth, forgot password etc',
      '🔼 Posts timeline, edit, delete, upvotes/downvotes',
      '🐳 docker + digitalocean for the win (moved to free stuff later for hosting)',
    ],
    tagUrls: [
      imgPaths['Typescript'].path,
      imgPaths['GraphQL'].path,
      imgPaths['Apollo'].path,
      imgPaths['postgreSQL'].path,
      imgPaths['redis'].path,
      imgPaths['typeorm'].path,
      imgPaths['express'].path,
      imgPaths['dockerLogo'].path,
    ],
    links: ['https://github.com/0xHecker/beddit-web', 'https://beddit-lac.vercel.app/'],
  },

  {
    name: 'Beddit web',
    description:
      'Reddit clone (kind of) it is less of react stuff and more of apollo-graphql and caching, worked with next.js ssr, urql then apollo-graphql with tight typesystems',
    points: [
      '🌟 Next.js and Typescript',
      '🌊 User auth, forgot password etc, and CRUD functionality',
      '🌠 Chakra for the UI',
      '🍀 SSR and client side caching with urql then apollo gql',
    ],
    tagUrls: [imgPaths['Next.js'].path, imgPaths['Typescript'].path, imgPaths['GraphQL'].path, imgPaths['Apollo'].path],
    links: ['https://github.com/0xHecker/beddit-web', 'https://beddit-lac.vercel.app/'],
  },

  {
    name: 'Peresonal expense log',
    description:
      'Expense log - it does what it says. you can add your spendings and this app will categorize and you can search and sort to view the categorized data as per your needs',
    points: [
      '⚛ React with Typescript',
      '🌆 User auth etc, and CRUD functionality',
      '📝 Advanced transaction sorting and searching',
      '🔭 react-query for api queries',
      '✨ Sass for the styling',
    ],
    tagUrls: [imgPaths['Typescript'].path, imgPaths['React'].path, imgPaths['Sass'].path],
    links: ['https://github.com/0xHecker/personal-expense-log', 'https://personal-expense-log.vercel.app/'],
  },

  {
    name: 'Expense log server',
    description: 'It is the server for the expense-log client. implemented in typescript and express ',
    points: [
      '💎 Typescript and express for the server',
      '📂 User auth etc, and CRUD functionality for user data and transactions',
      '📝 Postgres for db and sessions (yes it is weird)',
      '🔺 prisma for easy db modeling and db typesystems',
    ],
    tagUrls: [
      imgPaths['express'].path,
      imgPaths['Typescript'].path,
      imgPaths['postgreSQL'].path,
      imgPaths['prisma'].path,
      imgPaths['dockerLogo'].path,
    ],
    links: ['https://github.com/0xHecker/personal-expense-log-server', 'https://personal-expense-log-server.onrender.com/'],
  },

  {
    name: 'Bookmarks API Nest.js',
    description: 'Save your favourite links as bookmarks with a note. built with Nest.js and TS in MVC pattern',
    points: [
      '💳 User Auth with Jwt',
      '🔒 Protected routes for CRUD operations',
      '💎 Personalized, can edit, add and delete saved links and user profile',
      '🐳 Dockerized',
      '🃏 e2e, integration tests with Jest, nestjs-testing and Pactum',
    ],
    tagUrls: [
      imgPaths['Typescript'].path,
      imgPaths['Nest.js'].path,
      imgPaths['postgreSQL'].path,
      imgPaths['prisma'].path,
      imgPaths['dockerLogo'].path,
      imgPaths['jest'].path,
    ],
    links: ['https://github.com/0xHecker/beddit-web'],
  },

  {
    name: 'Next fire blog',
    description:
      'A blog that is built with Next.js and firebase as backend. users can login, make blog posts edit and manage them with ease',
    points: [
      '🏃 Next.js for the frontend',
      '👮 Google oauth2, and CRUD functionality for user data and blogs',
      '🔥 Firebase for the backend',
      '📸 Image uploads ',
      '🌠 Live preview and reactions',
    ],
    tagUrls: [imgPaths['Next.js'].path, imgPaths['Typescript'].path, imgPaths['Firebase'].path],
    links: ['https://github.com/0xHecker/next-fireblog', 'http://next-fireblog.vercel.app/'],
  },

  {
    name: 'Natours',
    description:
      'It is a simple static landing page made with html and Sass, learnt a lot of advanced css patterns, cascading rules, BEM and Scss',
    tagUrls: [imgPaths['HTML5'].path, imgPaths['Sass'].path],
    points: ['🦆 BEM', '💆 Mixins, global variables', '🌠 Transitions and animations', '💃 Responsive design', '🚀 Scalable CSS patterns'],
    links: ['https://github.com/0xHecker/beddit-web', 'https://beddit-lac.vercel.app/'],
  },

  {
    name: 'Heart rate anomaly map',
    description:
      'Lorem ipsum dolor sit amet consectetur dolor officia recnt tenetur similique porro adipisicing elit. Architecto quae enim sit quas',
    points: ['📝 BEM', ' Mixins, global variables', '💎 Transitions and animations', '📝 Responsive design', '🌠 Scalable CSS patterns'],

    tagUrls: [
      imgPaths['Next.js'].path,
      imgPaths['Typescript'].path,
      imgPaths['GraphQL'].path,
      imgPaths['Apollo'].path,
      imgPaths['postgreSQL'].path,
      imgPaths['redis'].path,
      imgPaths['typeorm'].path,
      imgPaths['express'].path,
      imgPaths['docker'].path,
    ],
    links: ['https://github.com/0xHecker/beddit-web', 'https://beddit-lac.vercel.app/'],
  },
]
