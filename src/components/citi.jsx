import React from 'react';
import CitiPortrait from '../assets/images/citi-portrait.webp';
import CitiCohort from '../assets/images/citi-cohort.webp';

const ImpactMetric = ({ value, children }) => (
  <div className="border-l-4 border-[#e1242f] bg-[#f4f8fc] px-6 py-5 shadow-sm">
    <div className="text-5xl font-bold text-[#056dae]">{value}</div>
    <div className="mt-2 text-lg leading-snug text-slate-700">{children}</div>
  </div>
);

const CitiExperience = () => {
  return (
    <div>
      {/* Section 1: Introduction */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex justify-center">
            <h2 className="z-10 bg-gradient-to-r from-yellow-300 to-yellow-300 bg-no-repeat text-5xl font-bold [background-position:80%_100%] [background-size:80%_100%]">
              Experience
            </h2>
          </div>

          <div className="grid grid-cols-2 items-center gap-16">
            <div>
              <div className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#056dae]">
                Citi · Dallas, Texas · Summer 2026
              </div>
              <h3 className="text-6xl font-bold leading-[0.95]">
                <span className="block">Software</span>
                <span className="block">Engineering</span>
                <span className="block w-fit bg-gradient-to-r from-[#e1242f] to-[#e1242f] bg-no-repeat [background-position:0%_100%] [background-size:100%_17%]">
                  Intern
                </span>
              </h3>
              <p className="pt-12 text-xl leading-relaxed">
                At Citi, I learned what it means to build software inside a large,
                interconnected system. I helped create an <strong>observability dashboard</strong>
                {' '}for high-volume automation workflows, balancing speed, reliability, and
                clear communication.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-5 -rotate-3 rounded-[2rem] bg-[#056dae]" />
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[14px] border-[#e1242f] border-b-transparent border-l-transparent" />
              <img
                src={CitiPortrait}
                alt="Anthony Do at Citi in Dallas"
                className="relative aspect-square w-full rounded-[2rem] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Challenge and impact */}
      <section className="mx-auto flex min-h-screen w-[80vw] max-w-6xl flex-col justify-center">
        <div className="mb-16 text-6xl font-light italic leading-snug text-gray-600">
          <div>Built for scale.</div>
          <div className="w-fit bg-gradient-to-r from-[#e1242f] to-[#e1242f] bg-no-repeat pr-16 [background-position:100%_78%] [background-size:72%_18%]">
            Designed for trust.
          </div>
        </div>

        <div className="grid grid-cols-10 items-end gap-16">
          <div className="col-span-4 space-y-5">
            <ImpactMetric value="50%">faster alert response</ImpactMetric>
            <ImpactMetric value="10%">less manual intervention</ImpactMetric>
            <ImpactMetric value="~600">concurrent automation jobs</ImpactMetric>
          </div>

          <div className="col-span-6">
            <h3 className="mb-8 ml-auto w-fit bg-gradient-to-r from-[#e1242f] to-[#e1242f] bg-no-repeat text-5xl font-bold [background-position:80%_100%] [background-size:80%_35%]">
              The challenge
            </h3>
            <div className="space-y-6 text-justify text-xl leading-relaxed">
              <p>
                The difficult part was not simply rendering live data. The dashboard had
                to consume high-speed internal APIs without becoming tightly coupled to
                the complex systems behind them.
              </p>
              <p>
                I built a <strong>Spring Boot middleware layer</strong> to normalize and route
                payloads, then strengthened the workflow with testing and deployment practices
                across React, Jest, JUnit, Mockito, Kubernetes, and Jenkins. The experience taught
                me to treat reliability as part of the user experience—not just a back-end concern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Growth and collaboration */}
      <section className="min-h-screen w-full pb-40">
        <div className="relative mb-16 h-[72vh] w-full">
          <img
            src={CitiCohort}
            alt="Citi summer intern cohort in Dallas"
            className="h-full w-full object-cover [mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="flex flex-col gap-12">
            <h3 className="flex max-w-full flex-wrap items-baseline gap-x-4 text-6xl font-bold leading-tight text-gray-900">
              <span className="min-w-0 max-w-full [hyphens:manual]">
                Commu&shy;nication
              </span>
              <span className="w-fit bg-gradient-to-r from-[#e1242f] to-[#e1242f] bg-no-repeat text-[#056dae] [background-position:0%_100%] [background-size:100%_17%]">
                is key<span className="text-[#e1242f]">.</span>
              </span>
            </h3>

            <div className="w-full space-y-8 text-xl leading-relaxed text-gray-800">
              <p>
                At Citi, ambiguity was not something to eliminate before starting—it was something
                to <strong>communicate clearly</strong>. I learned to surface assumptions early, ask
                focused questions, and turn unclear requirements into decisions the team could
                evaluate together.
              </p>
              <p>
                Working across the front end, middleware, and CI/CD pipeline taught me to explain
                how a change moved through system boundaries and where its risks lived. Presenting
                functional prototypes to senior leaders strengthened my ability to make complex
                architecture and engineering tradeoffs understandable.
              </p>
              <p>
                The experience made me more comfortable moving forward without having every answer,
                as long as questions, constraints, and decisions stayed visible. I left Citi a more
                thoughtful, collaborative, and dependable developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CitiExperience;
