import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Media Queries Website',
    description: 'A responsive layout project built with pure CSS media queries.',
    link: 'https://ahmedmahmoud00398.github.io/media-query-project/',
    image: '/mediaQueries .png'
  },
  {
    title: 'E-commerce Store',
    description: 'A modern e-commerce web app built with React and Stripe integration.',
    link: 'https://e-commerce-vert-gamma-49.vercel.app/',
    image: '/E-commerce.png'
  },
  {
    title: 'Landing Page',
    description: ' A sleek landing page designed with Native CSS and JavaScript.',
    link: ' https://ahmedmahmoud00398.github.io/bootstrapjs-project/',
    image: '/Landingpage.png'
  },
];

export default function Projects() {
  return (
    <>
      
      <main className="min-h-screen bg-[#030b16] text-white pt-24 px-6 border-b-2 border-blue-500" id="portfolio">
        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">My Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-[#101827] p-4 rounded-lg shadow hover:shadow-blue-500/40 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="h-40 w-full mb-4 overflow-hidden rounded">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block text-blue-500 hover:underline"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
