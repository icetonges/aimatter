import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Budget Matter | How Federal Budget Works',
  description: 'Explore the U.S. federal budget process — formulation, laws, execution, and real-world portfolio projects.',
};

// ─── Projects data with FIXED image paths (leading /) ───────────────────────
// NOTE: Image paths use lowercase extensions (.jpg, .png) because Vercel runs
// on Linux which is case-sensitive. Run fix-public-assets.sh first to rename
// the actual files in public/ to match.
const projects = [
  {
    href: '/projects/tableau-citibike',
    image: '/img/tableau-1-citibike.jpg',
    title: 'Tableau Citi Bike Analysis',
    desc: "Use Tableau to conduct NYC's Citi Bike Share Program Usage analysis.",
  },
  {
    href: '/projects/project7',
    image: '/project7/spend-plan-demo.gif', // renamed from "Spend Plan Demo.gif"
    title: 'Budget Spend Plan Model',
    desc: 'Scenario-driven self-balance tool to plan and monitor Federal budget execution.',
  },
  {
    href: '/projects/project10',
    image: '/project10/book.gif',
    title: 'Python - Office Excel 1',
    desc: 'Use Python to Combine Excel Workbooks and/or Worksheets',
  },
  {
    href: '/projects/project11',
    image: '/project11/compare.gif',
    title: 'Python - Office Excel 2',
    desc: 'Use Python to Compare Data and Changes in Excel Workbook.',
  },
  {
    href: '/projects/project6',
    image: '/project6/project6.png',
    title: 'Machine Learning in Python',
    desc: 'Use Python Machine Learning to analyze and explore happiness.',
  },
  {
    href: '/projects/project9',
    image: '/project9/vba.jpg',
    title: 'Excel VBA Examples',
    desc: 'Use VBA functionalities to conduct data comparison, mining, analysis.',
  },
  {
    href: '/projects/project13',
    image: '/project13/project13.png',
    title: 'Federal Spending Dashboard',
    desc: 'Tableau based dashboard to track federal budget and spending.',
  },
  {
    href: '/projects/project14',
    image: '/project14/project14.png',
    title: 'Budget Execution',
    desc: 'Tableau based dashboard to track and compare budget execution.',
  },
  {
    href: '/projects/project15',
    image: '/project15/sqlalchemy.png',
    title: 'SQL Data, Python',
    desc: 'SQL Data, Python Data Analysis & Visualization',
  },
  {
    href: '/projects/project8',
    image: '/project8/project8.png',
    title: 'Python, JS D3, and Leaflet',
    desc: 'Conduct data mining, create map, add interactivity to the webpage.',
  },
  {
    href: '/projects/tableau-covid19',
    image: '/img/tableau-3-covid19.jpg',
    title: 'COVID-19 Dashboard',
    desc: 'Use Tableau to visualize the COVID-19 spread over last four months.',
  },
  {
    href: '/projects/tableau-federal-employment',
    image: '/img/tableau-2-fed-avg-salary.jpg',
    title: 'About Federal Employment',
    desc: 'Based on released FY 2018 data that is available to public.',
  },
  {
    href: '/projects/project5',
    image: '/img/project5.png',
    title: 'The Power of Plots',
    desc: 'Apply Python Matplotlib to a real-world situation',
  },
  {
    href: '/projects/project4',
    image: '/img/project4.png',
    title: 'Biodiversity Dashboard',
    desc: 'Use JavaScript, CSS, D3, Plotly to build interactive dashboard',
  },
  {
    href: '/projects/project12',
    image: '/project12/text.gif',
    title: 'Use Python to Analyze Text',
    desc: 'Perform Sentiment Analysis on Text.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-gray-600 text-white py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Budget Laws</h1>
        <p className="mt-3 text-gray-300 text-lg">Information pertaining to budget and finance policy</p>
      </section>

      {/* ── Feature Cards ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Welcome to Budget Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Budget Process',
                desc: 'How Federal budget is planned, formulated, executed, and reported.',
                href: '/process',
              },
              {
                title: 'Budget Laws',
                desc: 'Legislative and regulatory requirements set forth for financial management function.',
                href: '/policy',
              },
              {
                title: 'Portfolio',
                desc: 'Real-world applications',
                href: '/portfolio',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900">{card.title}</h3>
                <p className="text-gray-600 text-sm flex-1">{card.desc}</p>
                <Link
                  href={card.href}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors w-fit"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personal Projects ───────────────────────────────────────────── */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Personal Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group block bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project image */}
              <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={project.image.endsWith('.gif')} // GIFs need unoptimized
                />
              </div>
              {/* Project info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
