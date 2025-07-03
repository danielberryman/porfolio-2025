"use client";

// import DiceCanvasWrapper from './components/DiceCanvasWrapper'
import FeatureBlock from './components/FeatureBlock'
// import SectionDivider from './components/SectionDivider'
// import Header from './components/Header'
// import dynamic from 'next/dynamic'
// import { ArrowRightIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
const isProd = process.env.NODE_ENV === 'production';

// const SearchClient = dynamic(() => import("./components/SearchClient"), { ssr: false });

export default function Home() {
  return (
    <main id="home">
      <div className="w-full flex flex-col justify-center items-center p-6">
        <h1 className="text-4xl md:text-5xl">DANIEL BERRYMAN</h1>
        <h2 className="text-2xl">Singer & Technologist</h2>
        <nav className="pt-5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-sky-600 hover:text-white transition cursor-pointer">
                <a href="#home">Home</a>
              </button>
              <button className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-sky-600 hover:text-white transition cursor-pointer">
                <a href="#singing">Singing</a>
              </button>
              <button className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-sky-600 hover:text-white transition cursor-pointer">
                <a href="#technology">Technology</a>
              </button>
              <button className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-sky-600 hover:text-white transition cursor-pointer">
                <a href="#projects">Projects</a>
              </button>
              <button className="px-4 py-2 bg-slate-400 text-white rounded hover:bg-sky-600 hover:text-white transition cursor-pointer">
                <a href="#more">More</a>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div className="w-full lg:w-1/2 relative aspect-[4/3]">
          <Image
            src={isProd ? "/portfolio-2025/images/headshot.jpg" : "/images/headshot.jpg"}
            alt="Daniel Berryman"
            className="absolute inset-0 w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-full lg:w-1/2 relative aspect-[4/3]">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full grid grid-cols-3 grid-rows-2">
              <button className="w-full font-bold p-3 bg-slate-400 hover:bg-sky-600 hover:text-white cursor-pointer transition flex items-center justify-center">
                See performances
              </button>
              <button className="w-full font-bold p-3 bg-slate-100 hover:bg-sky-600 hover:text-white cursor-pointer transition flex items-center justify-center">
                Join a voice workshop
              </button>
              <button className="w-full font-bold p-3 bg-slate-200 hover:bg-sky-600 hover:text-white cursor-pointer transition flex items-center justify-center">
                Book voice lessons
              </button>
              <button className="w-full font-bold p-3 bg-slate-200 hover:bg-sky-600 hover:text-white cursor-pointer transition flex items-center justify-center">
                Run tech audits
              </button>
              <button className="w-full font-bold p-3 bg-slate-300 hover:bg-sky-600 hover:text-white cursor-pointer transition flex items-center justify-center">
                Get primary tech care
              </button>
              <button className="w-full font-bold p-3 bg-slate-400 hover:bg-sky-600 hover:text-white cursor-pointer transition flex items-center justify-center">
                Buy tech tools
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <SearchClient /> */}
      <div className="w-full flex flex-col justify-center items-center p-5 bg-slate-800 text-white">
        <blockquote className="italic text-lg">
          “May we see ever more clearly & live ever more fully, together.”
        </blockquote>
        <p className="text-right font-semibold mt-2">— Me</p>
      </div>
      <div id="singing" className="w-full flex flex-col justify-center items-center bg-slate-100 p-5">
        <p className="text-2xl flex flex-row gap-2 justify-center items-center">Singing <a href="#home" className="text-slate-600 text-sm border border-slate-600 rounded-md px-2 py-1 cursor-pointer">Top</a></p>
      </div>
      {/* <div className="flex flex-col lg:flex-row lg:items-center p-5 pt-0 gap-7">
        
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Phase 2: Travel Guides</h2>
          <p className="text-lg italic text-gray-700 mb-6">Your first steps into the landscape.</p>
          <p className="text-base text-gray-600">
            Once you see clearly and have a blueprint, the real journey begins. Travel Guides are practical,
            compassionate supports for implementation — tools, templates, coaching, and companionship
            that help you move through uncertainty and build what’s true.
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Phase 3: Embodiment</h2>
          <p className="text-lg italic text-gray-700 mb-6">When the journey becomes you.</p>
          <p className="text-base text-gray-600">
            Embodiment is the quiet revolution that happens when clarity and practice take root.
            It's no longer about what you’re doing — it’s about who you’ve become. This phase is marked by
            integration, presence, and ease: the blueprint lives in your bones.
          </p>
        </div>
      </div> */}
      <div className="p-5 flex flex-col gap-10">
        <FeatureBlock
          title="Performer"
          subtitle="One Voice. Many Worlds. Always Human."
          description="I&apos;m a performer who moves fluidly between worlds—opera, musical theatre, and popular music. Trained as a tenor and storyteller, I bring emotional clarity and vocal versatility to every stage I step on. Whether I’m singing Puccini, Sondheim, or Paul Simon, my goal is the same: to connect, to communicate, and to create moments that feel alive."
          imageSrc={isProd ? "/portfolio-2025/images/singer3.png" : "/images/singer3.png"}
          imagePosition="right"
          actions={[
            {
              label: "See My Schedule", onClick: () => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
              }
            },
            {
              label: "Book a Performance", onClick: () => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
              }
            },
            {
              label: "Media", onClick: () => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
              }
            }
          ]}
        />
        <FeatureBlock
          title="Voice Teacher"
          subtitle="Targeted Awareness. Deep Listening."
          description="My teaching is rooted in the old tenors—those who sang with ease, not force. That sound changed my singing, and now it shapes how I teach. I focus on clean cord closure, breath coordination, and subtle muscular control so singers can unlock flexibility across any style."
          imageSrc={isProd ? "/portfolio-2025/images/teacher3.png" : "/images/teacher3.png"}
          imagePosition="right"
          actions={[
            {
              label: "Book a Lesson", onClick: () => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
              }
            }
          ]}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-slate-800 text-white p-5">
        <blockquote className="italic text-lg">
          “The human spirit must prevail over technology.”
        </blockquote>
        <p className="text-right font-semibold mt-2">— Albert Einstein</p>
      </div>
      <div id="technology" className="w-full flex flex-col justify-center items-center bg-slate-100 p-5">
        <p className="text-2xl flex flex-row gap-2 justify-center items-center">Technology <a href="#home" className="text-slate-600 text-sm border border-slate-600 rounded-md px-2 py-1 cursor-pointer">Top</a></p>
      </div>
      <div className="p-5 flex flex-col gap-10">
        <FeatureBlock
          title="Software Engineer"
          subtitle="Engineer the Solution. Elevate the System."
          description="I approach software engineering with curiosity, precision, and a drive to improve not just features, but the way we build them. I care about clean execution, scalable systems, and the processes that make great work repeatable. Success isn’t just shipping code—it’s learning from it, refining it, and building stronger foundations for the next problem to solve."
          imageSrc={isProd ? "/portfolio-2025/images/dev.png" : "/images/dev.png"}
          imageAlt="3D Dice"
          imagePosition="right"
          actions={[
            {
              label: "Github", onClick: () => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
              }
            },
            {
              label: "LinkedIn", onClick: () => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
              }
            }
          ]}
        />
        <FeatureBlock
          title="Primary Care Technologist"
          subtitle="Tech support for humans—not systems."
          description="As a Primary Care Technologist my goal is to help you understand what you actually need, fix what’s broken, and build systems that support YOUR life—not just enrich the system. My goal is to keep you in charge of your tools, your data, and your direction. I don’t work for the system. I work for you—with clarity, care, and a focus on sovereignty."
          imageSrc={isProd ? "/portfolio-2025/images/primary_care_tech2.png" : "/images/primary_care_tech2.png"}
          imageAlt="3D Dice"
          imagePosition="right"
          actions={[
            {
              label: "Explore My Services", onClick: () => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
              }
            }
          ]}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-slate-800 text-white p-5">
        <blockquote className="italic text-lg">
          “Clear eyes, full hearts, can’t lose.”
        </blockquote>
        <p className="text-right font-semibold mt-2">— Coach Taylor</p>
      </div>
      <div id="projects" className="w-full flex flex-col justify-center items-center p-5 bg-slate-100">
        <p className="text-2xl flex flex-row gap-2 justify-center items-center">Projects <a href="#home" className="text-slate-600 text-sm border border-slate-600 rounded-md px-2 py-1 cursor-pointer">Top</a></p>
      </div>
      <div className="p-5 flex flex-col gap-10">
        <FeatureBlock
          title="Theatre For The World"
          subtitle="Theater Belongs to the Makers."
          description="We&apos;re building digital tools and data platforms that invest in the people behind the performance—not to profit from their creativity, but to amplify it. Inspired by models like the Wikimedia Foundation, we believe in infrastructure that supports the community rather than extracting from it. This isn&apos;t about users. It&apos;s about contributors. It&apos;s about reclaiming our role not as the product, but the producers—of culture, of knowledge, of the next generation of theater. The future of theater isn&apos;t something we wait for. It&apos;s something we build, together."
          imageSrc={isProd ? "/portfolio-2025/images/tftw.png" : "/images/tftw.png"}
          imageAlt="3D Dice"
          imagePosition="right"
          actions={[
            {
              label: "Learn More", onClick: () => {
                window.open("https://www.theatrefortheworld.com", "_blank");
              }
            }
          ]}
        />
      </div>
      <div id="more" className="w-full flex flex-col justify-center items-center p-5 bg-slate-100">
        <p className="text-2xl flex flex-row gap-2 justify-center items-center">My Process <a href="#home" className="text-slate-600 text-sm border border-slate-600 rounded-md px-2 py-1 cursor-pointer">Top</a></p>
      </div>
      <div className="flex flex-col lg:flex-row p-6 gap-7 mb-5">
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <div className="w-full relative aspect-[4/4] flex flex-col items-center mb-5">
            <Image
              src={isProd ? "/portfolio-2025/images/lens.png" : "/images/lens.png"}
              alt="Lenses"
              className="absolute inset-0 w-full h-full object-cover rounded"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Phase 1: Lenses</h2>
            <p className="text-lg italic text-gray-700 mb-6">A shift in how you see.</p>
            <p className="text-base text-gray-600">
              Before we act, we learn to see. Phase 1 is about discovering the invisible structures behind voice,
              tech, and self — and learning to notice what you&apos;ve always missed. Because true freedom starts with clear sight.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <div className="w-full relative aspect-[4/4] flex flex-col items-center mb-5">
            <Image
              src={isProd ? "/portfolio-2025/images/guide.png" : "/images/guide.png"}
              alt="Travel Guides"
              className="absolute inset-0 w-full h-full object-cover rounded"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Phase 2: Travel Guides</h2>
            <p className="text-lg italic text-gray-700 mb-6">Your first steps into the landscape.</p>
            <p className="text-base text-gray-600">
              Once you see clearly you need a roadmap. Travel Guides are practical, compassionate supports for implementation — tools, templates, coaching, and companionship
              that help you move through uncertainty and build what&apos;s true.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <div className="w-full relative aspect-[4/4] flex flex-col items-center mb-5">
            <Image
              src={isProd ? "/portfolio-2025/images/body.png" : "/images/body.png"}
              alt="Embodiment"
              className="absolute inset-0 w-full h-full object-cover rounded"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Phase 3: Embodiment</h2>
            <p className="text-lg italic text-gray-700 mb-6">When the journey becomes you.</p>
            <p className="text-base text-gray-600">
              Embodiment is the quiet revolution that happens when clarity and practice take root.
              It&apos;s no longer about what you&apos;re doing — it&apos;s about who you&apos;ve become. This phase is marked by
              integration, presence, and ease: the blueprint lives in your bones.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-slate-800 text-white p-5">
        <blockquote className="italic text-lg">
          “Be yourself; everyone else is already taken.”
        </blockquote>
        <p className="text-right font-semibold mt-2">— Oscar Wilde</p>
      </div>
      {/* <div className="w-full flex flex-col justify-center items-center bg-slate-100 p-5">
        <p className="w-3/4 md:w-1/2 text-lg text-center">
          Hi! I'm Daniel. Thanks for stopping by. And making it this far! I see myself as a <span className="font-bold">many-sided die</span> by nature. Use the die below to explore the many sides of me.
        </p>
      </div> */}
      {/* <DiceCanvasWrapper /> */}
      <footer className="w-full flex justify-center items-center bg-slate-100 p-4">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </main>
  )
}
