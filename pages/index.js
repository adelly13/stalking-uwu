import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const ppl = [
  {
    name: "Christina Asquith",
    linkedin: "christinaaasquith",
    website: "https://christinaasquith.com/",
    pfp: "christinaa.jpeg",
    description: "After 20 years reporting for top US/UK newsrooms, Christina has spent the past 9 years building two multi-million nonprofit organizations: The first is The Fuller Project, which gave voice to women by reporting hundreds of pieces of investigative journalism on issues impacting women for top national and international news outlets; and the second is Hack Club, which creates opportunity and transforms the lives of teenagers globally through engineering. She loves to code with her daughters.",
  },
  {
    name: "Christina Entcheva",
    linkedin: "centcheva",
    pfp: "christinae.jpeg",
    description: "Christina Entcheva is a software engineer and a tech leader who currently serves as the Director of Engineering at GitHub. With over a decade of experience in the industry, she has led engineering teams at various companies and contributed to building scalable software systems. Christina is also an advocate for diversity and inclusion in tech and actively works towards creating a more inclusive and equitable workplace."
  },
  {
    name:"Jessica Rovello",
    linkedin: "jessicarovello",
    pfp: "jessica.jpeg",
    description: "Jessica Rovello is the CEO and co-founder of Arkadium, which has developed more than 300 mobile and online games, including Microsoft Solitaire Collection, one of the most played games of all time. At age 24, Jessica pioneered digital viral marketing as the director of online services for Artisan Entertainment, where she produced the website for The Blair Witch Project. Jessica is the winner of the American Business Award for Executive of the Year, the Stevie Award for Entrepreneur of Year, was named one of SmartCEO's Future 50 and is a Crain's New York \"40 Under 40\" winner."
  },
  {
    name: "Julia Haart",
    linkedin: "juliahaart",
    pfp: "julia.jpeg",
    description: "Julia Haart is a fashion industry veteran and the ex-CEO of Elite World Group, one of the world's leading talent management companies. She is known for her entrepreneurial spirit and innovative approach to business, having successfully launched her own eponymous luxury shoe brand prior to joining Elite World Group. Julia is also the mother of four children, including her daughter Miryam, who is a talented coder and has been involved in the family's fashion and technology businesses. The Haart family's story has been featured in the Netflix docu-series \"My Unorthodox Life,\" which showcases their unconventional path to success."
  },
  {
    name: "Meridith Maskara",
    linkedin: "meridith-maskara-27885633",
    pfp: "meridith.jpeg",
    description: "Meridith Maskara is Chief Executive Officer of the Girl Scouts of Greater New York, a place which every girl feels empowered to lead in her community, the workplace, and the world."
  },
  {
    name: "Pinky Dewani",
    linkedin: "pinkydewani",
    pfp: "pinky.jpeg",
    description: "Pinky Dewani is a senior technology leader with over 15 years of experience in the industry. She is currently the Group Engineering Manager at Bloomberg LP, where she manages the Core Platform Group for Bloomberg Industry Verticals - Search, Machine Learning, Analytics, Data Management and Infrastructure. Prior to this role, she has been a software developer at Bloomberg."
  },
  {
    name: "Rachel Lim",
    linkedin: "rachel-lim-324a8ab6",
    pfp: "rachel.jpeg",
    description: "Rachel Lim is a creative technologist and the lead of the p5.js project, a JavaScript library that makes it easy to create interactive art, animations, and other creative projects in the browser. Prior to this, She was a software engineer at Vidcode where she wrote, tested, and published product features, integrations, and database scripts for the Vidcode platform."
  },
  {
    name: "Sara Chipps",
    linkedin: "sarajchipps",
    pfp: "sara.jpeg",
    description: "Sara Chipps is a Senior Engineering Manager for Flagship Web Infrastructure. She has been working on Software and the Open Source Community since 2001. Previously, she was an engineering manager at LinkedIn managing the front-end infrastructure team for LinkedIn.com. She is the cofounder of http://Jewelbots.com, a company dedicated towards drastically changing the number of girls entering STEM fields using hardware. She is also a board member of OpenJS Foundation.    "
  },
  {
    name: "Stacey Cunningham",
    linkedin: "stacey-cunningham-3400885",
    pfp: "stacey.jpeg",
    description: "Stacey Cunningham is the former President of NYSE Group, which includes the New York Stock Exchange, the world’s largest equity exchange and premier venue for capital raising. She was the NYSE’s 67th President and the first woman to lead the Exchange in its 228-year history. As President, Cunningham oversaw an organization that is home to 2,300 of the world’s largest, most influential, and most innovative companies. Currently, Cunningham sits on the Board of Directors of the New York Stock Exchange and is an advisor for private companies and Georgetown University's Psaros Center for Financial Markets and Policy. She has a degree in Industrial Engineering from Lehigh University, and previously served on the Boards of Catalyst and the Partnership for New York City."
  },
  {
    name: "Trina Spear",
    linkedin: "trina-spear-a510a91b",
    pfp: "trina.jpeg",
    description: "Trina Spear is the Co-CEO and Co-Founder of FIGS, the digitally native, DTC healthcare apparel and lifestyle brand creating technically advanced products for the modern healthcare professional. Prior to launching FIGS, Trina was an associate with the Blackstone Group – a leading global alternative investment business – in the firm’s hedge fund group. She also spent four years with Citigroup's investment banking and private equity divisions. Trina’s accolades include being named in Goldman Sachs’ 100 Most Intriguing Entrepreneurs (2018 & 2019); Endeavor Entrepreneur (Endeavor, 2015); Entrepreneur of the Year (Ernst & Young, Los Angeles Region, 2018)."
  }
]

export default function Home() {
  return (
    <>
      <main className='px-8 bg-gray-200'>
        <div className = "text-center text-10">
          Horizon Dinner Guest Info :D
        </div>
        <div className="grid grid-cols-3 gap-4 p-5">
          {ppl.map(person => (
            <Card key={person.name} {...person} />
          ))}
        </div>
      </main>
    </>
  )
}
