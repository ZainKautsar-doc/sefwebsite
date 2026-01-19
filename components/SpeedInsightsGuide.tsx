import React, { useState } from 'react';
import { ChevronDown, Copy, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface CodeExample {
  framework: string;
  language: string;
  filename: string;
  code: string;
}

const SpeedInsightsGuide: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set([0]));
  const [selectedFramework, setSelectedFramework] = useState('nextjs');

  const frameworks = [
    'nextjs',
    'nextjs-app',
    'sveltekit',
    'remix',
    'create-react-app',
    'nuxt',
    'vue',
    'other',
    'astro',
    'html'
  ];

  const codeExamples: Record<string, CodeExample[]> = {
    nextjs: [
      {
        framework: 'nextjs',
        language: 'ts',
        filename: 'pages/_app.tsx',
        code: `import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`
      },
      {
        framework: 'nextjs',
        language: 'js',
        filename: 'pages/_app.jsx',
        code: `import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`
      }
    ],
    'nextjs-app': [
      {
        framework: 'nextjs-app',
        language: 'ts',
        filename: 'app/layout.tsx',
        code: `import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}`
      }
    ],
    'create-react-app': [
      {
        framework: 'create-react-app',
        language: 'ts',
        filename: 'App.tsx',
        code: `import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <SpeedInsights />
    </div>
  );
}`
      }
    ],
    remix: [
      {
        framework: 'remix',
        language: 'ts',
        filename: 'app/root.tsx',
        code: `import { SpeedInsights } from '@vercel/speed-insights/remix';

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* ... */}
        <SpeedInsights />
      </body>
    </html>
  );
}`
      }
    ],
    sveltekit: [
      {
        framework: 'sveltekit',
        language: 'ts',
        filename: 'src/routes/+layout.ts',
        code: `import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();`
      }
    ],
    vue: [
      {
        framework: 'vue',
        language: 'ts',
        filename: 'src/App.vue',
        code: `<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`
      }
    ],
    nuxt: [
      {
        framework: 'nuxt',
        language: 'ts',
        filename: 'layouts/default.vue',
        code: `<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`
      }
    ],
    other: [
      {
        framework: 'other',
        language: 'ts',
        filename: 'main.ts',
        code: `import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();`
      }
    ],
    astro: [
      {
        framework: 'astro',
        language: 'tsx',
        filename: 'BaseHead.astro',
        code: `---
import SpeedInsights from '@vercel/speed-insights/astro';
const { title, description } = Astro.props;
---
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<SpeedInsights />`
      }
    ],
    html: [
      {
        framework: 'html',
        language: 'html',
        filename: 'index.html',
        code: `<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>`
      }
    ]
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleStep = (stepIndex: number) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepIndex)) {
      newExpanded.delete(stepIndex);
    } else {
      newExpanded.add(stepIndex);
    }
    setExpandedSteps(newExpanded);
  };

  const steps = [
    {
      title: 'Prerequisites',
      content: (
        <div className="space-y-4 text-slate-400">
          <p>Before getting started with Speed Insights, ensure you have:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>A Vercel account. If you don't have one, you can <a href="https://vercel.com/signup" className="text-blue-400 hover:text-blue-300">sign up for free</a></li>
            <li>A Vercel project. If you don't have one, you can <a href="https://vercel.com/new" className="text-blue-400 hover:text-blue-300">create a new project</a></li>
            <li>The Vercel CLI installed on your machine</li>
          </ul>
          <div className="mt-6 p-4 bg-slate-950/50 rounded-xl border border-white/5">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3">Install Vercel CLI</p>
            <div className="space-y-3">
              {[
                { tab: 'pnpm', cmd: 'pnpm i vercel' },
                { tab: 'yarn', cmd: 'yarn i vercel' },
                { tab: 'npm', cmd: 'npm i vercel' },
                { tab: 'bun', cmd: 'bun i vercel' }
              ].map((pkg, idx) => (
                <div key={idx} className="bg-slate-900/50 p-3 rounded-lg">
                  <div className="text-xs text-slate-500 font-mono mb-1">{pkg.tab}</div>
                  <code className="text-sm text-emerald-400 font-mono">{pkg.cmd}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Enable Speed Insights in Vercel',
      content: (
        <div className="space-y-4 text-slate-400">
          <p>
            On the <a href="/dashboard" className="text-blue-400 hover:text-blue-300">/dashboard</a>, select your Project followed by the <span className="font-semibold">Speed Insights</span> tab. Then, select <span className="font-semibold">Enable</span> from the dialog.
          </p>
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <p className="text-sm">
              <span className="font-bold text-blue-400">💡 Note:</span> Enabling Speed Insights will add new routes (scoped at <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">/_vercel/speed-insights/*</code>) after your next deployment.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Add @vercel/speed-insights Package',
      content: (
        <div className="space-y-4 text-slate-400">
          <p>Using your package manager of choice, add the <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">@vercel/speed-insights</code> package:</p>
          <div className="space-y-3">
            {[
              { tab: 'pnpm', cmd: 'pnpm i @vercel/speed-insights' },
              { tab: 'yarn', cmd: 'yarn i @vercel/speed-insights' },
              { tab: 'npm', cmd: 'npm i @vercel/speed-insights' },
              { tab: 'bun', cmd: 'bun i @vercel/speed-insights' }
            ].map((pkg, idx) => (
              <div key={idx} className="bg-slate-950/50 p-3 rounded-lg">
                <div className="text-xs text-slate-500 font-mono mb-1">{pkg.tab}</div>
                <code className="text-sm text-emerald-400 font-mono">{pkg.cmd}</code>
              </div>
            ))}
          </div>
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <p className="text-sm">
              <span className="font-bold text-blue-400">📝 Note:</span> For HTML implementations, there is no need to install the package.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Integrate SpeedInsights Component',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-3">Select Your Framework:</label>
            <select
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value)}
              className="w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              {frameworks.map((fw) => (
                <option key={fw} value={fw}>
                  {fw.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          {codeExamples[selectedFramework]?.map((example, idx) => (
            <div key={idx} className="bg-slate-950/50 border border-white/5 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-white/5 bg-slate-900/50">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{example.filename}</p>
                  <p className="text-sm text-slate-400 font-mono mt-1">Language: {example.language}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(example.code, idx)}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 text-sm transition-colors"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-sm text-slate-300">
                <code>{example.code}</code>
              </pre>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'Deploy Your App to Vercel',
      content: (
        <div className="space-y-4 text-slate-400">
          <p>You can deploy your app to Vercel's global CDN by running:</p>
          <div className="bg-slate-950/50 p-4 rounded-lg border border-white/5">
            <code className="text-emerald-400 font-mono">vercel deploy</code>
          </div>
          <p className="text-sm">Alternatively, you can <a href="/docs/git#deploying-a-git-repository" className="text-blue-400 hover:text-blue-300">connect your project's git repository</a>, which will enable automatic deployments of your latest pushes and merges to main.</p>
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <p className="text-sm">
              <span className="font-bold text-blue-400">✅ Ready:</span> Once your app is deployed, it's ready to begin tracking performance metrics.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'View Your Data in the Dashboard',
      content: (
        <div className="space-y-4 text-slate-400">
          <p>Once your app is deployed and users have visited your site, you can view the data in the dashboard.</p>
          <p>
            Go to your <a href="/dashboard" className="text-blue-400 hover:text-blue-300">dashboard</a>, select your project, and click the <span className="font-semibold">Speed Insights</span> tab.
          </p>
          <p className="text-sm">After a few days of visitors, you'll be able to start exploring your metrics. For more information on how to use Speed Insights, see <a href="/docs/speed-insights/using-speed-insights" className="text-blue-400 hover:text-blue-300">Using Speed Insights</a>.</p>
        </div>
      )
    }
  ];

  return (
    <div className="py-32 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs">Getting Started Guide</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-montserrat">Getting started with Speed Insights</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              This guide will help you get started with using Vercel Speed Insights on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
              <div className="bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
                <button
                  onClick={() => toggleStep(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-900/70 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h4 className="text-xl font-bold text-white">{step.title}</h4>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-500 ${
                      expandedSteps.has(idx) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSteps.has(idx) && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-slate-950/50">
                    {step.content}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={600}>
          <div className="mt-20 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl">
            <h4 className="text-2xl font-bold text-white mb-4">Next Steps</h4>
            <p className="text-slate-400 mb-6">
              Now that you have Vercel Speed Insights set up, you can explore the following topics to learn more:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span><a href="/docs/speed-insights/package" className="text-blue-400 hover:text-blue-300">Learn how to use the @vercel/speed-insights package</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span><a href="/docs/speed-insights/metrics" className="text-blue-400 hover:text-blue-300">Learn about metrics</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span><a href="/docs/speed-insights/privacy-policy" className="text-blue-400 hover:text-blue-300">Read about privacy and compliance</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span><a href="/docs/speed-insights/limits-and-pricing" className="text-blue-400 hover:text-blue-300">Explore pricing</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span><a href="/docs/speed-insights/troubleshooting" className="text-blue-400 hover:text-blue-300">Troubleshooting</a></span>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={700}>
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              Learn more about how Vercel supports <a href="/docs/speed-insights/privacy-policy" className="text-blue-400 hover:text-blue-300">privacy and data compliance standards</a> with Vercel Speed Insights.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default SpeedInsightsGuide;
