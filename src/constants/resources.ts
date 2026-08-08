export interface ResourceFile {
  label: string;
  href: string;
  sizeLabel: string;
}

export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
  fileType: string;
  files: ResourceFile[];
  comingSoon?: boolean;
}

export const RESOURCES: Resource[] = [
  {
    slug: 'marketing-playbook',
    title: 'The AI Marketing Playbook',
    description:
      'A start-to-finish system for running content, outreach, and reporting through Claude — set up a workspace that knows your brand voice, generate on-brand posts and visuals, find and reach new customers, and track what is actually working.',
    category: 'Guide',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/marketing-playbook/neuraflow-ai-marketing-playbook.pdf',
        sizeLabel: '450 KB',
      },
    ],
  },
  {
    slug: 'cowork-skills-pack',
    title: 'Claude Cowork Skills Starter Pack',
    description:
      'A ready-to-install set of 15 reusable Claude skills for common marketing and ops tasks — plus a plain-English setup guide so you can start using them the same day.',
    category: 'Toolkit',
    fileType: 'ZIP + PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/cowork-skills-pack/neuraflow-cowork-skills-guide.pdf',
        sizeLabel: '250 KB',
      },
      {
        label: 'Download Skills',
        href: '/resources/cowork-skills-pack/neuraflow-cowork-skills.zip',
        sizeLabel: '42 KB',
      },
    ],
  },
  {
    slug: 'microsoft-agent-365-briefing',
    title: 'What Microsoft Agent 365 Means for Your Business',
    description:
      "A plain-English briefing on Microsoft's Agent 365 platform and where Claude fits into it — what it actually changes for small teams evaluating AI agent tools.",
    category: 'Briefing',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Briefing',
        href: '/resources/microsoft-agent-365-briefing/neuraflow-agent-365-briefing.pdf',
        sizeLabel: '470 KB',
      },
    ],
  },
  {
    slug: 'animated-website-skill',
    title: 'Animated Scroll Website Skill',
    description:
      'A Claude skill that turns a video into a scroll-driven, frame-by-frame animated website — install it once, then generate cinematic landing pages from raw footage.',
    category: 'Toolkit',
    fileType: 'ZIP',
    files: [
      {
        label: 'Download Skill',
        href: '/resources/animated-website-skill/neuraflow-animated-website-skill.zip',
        sizeLabel: '24 KB',
      },
    ],
  },
  {
    slug: 'cowork-setup-prompt-pack',
    title: 'The 4 Levels of Claude Cowork',
    description:
      'A copy-paste prompt pack that takes Claude Cowork from an empty folder to a working system — foundation, skills, scheduled tasks, and a self-updating dashboard.',
    category: 'Prompt Pack',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Pack',
        href: '/resources/cowork-setup-prompt-pack/neuraflow-cowork-setup-prompt-pack.pdf',
        sizeLabel: '284 KB',
      },
    ],
  },
  {
    slug: 'cowork-system-prompt-pack',
    title: 'Your Simple Claude Cowork System (That Runs Itself)',
    description:
      'Eight prompts that build a complete Cowork setup end to end — workspace structure, a real CLAUDE.md, connected tools, an email-voice skill, and two automations that run on their own.',
    category: 'Prompt Pack',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Pack',
        href: '/resources/cowork-system-prompt-pack/neuraflow-cowork-system-prompt-pack.pdf',
        sizeLabel: '290 KB',
      },
    ],
  },
  {
    slug: 'claude-design-2-starter-pack',
    title: 'Start Building With Claude Design 2.0',
    description:
      'A follow-along prompt pack for Claude Design — prototypes, slide decks, a real design system, branded animation, and how to turn a finished design into a working app.',
    category: 'Prompt Pack',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Pack',
        href: '/resources/claude-design-2-starter-pack/neuraflow-claude-design-2-starter-pack.pdf',
        sizeLabel: '298 KB',
      },
    ],
  },
  {
    slug: 'higgsfield-cowork-pack',
    title: 'Higgsfield Cowork Pack',
    description:
      'Eight skills that turn Higgsfield into a full content pipeline inside Claude Cowork — UGC video ads, reusable characters, URL-to-ad, overnight batches, carousels, and infographics.',
    category: 'Toolkit',
    fileType: 'ZIP + PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/higgsfield-cowork-pack/neuraflow-higgsfield-cowork-pack-guide.pdf',
        sizeLabel: '270 KB',
      },
      {
        label: 'Download Skills',
        href: '/resources/higgsfield-cowork-pack/neuraflow-higgsfield-cowork-pack.zip',
        sizeLabel: '67 KB',
      },
    ],
  },
  {
    slug: 'nine-cowork-skills',
    title: 'The 9 Skills Pack',
    description:
      'Nine Cowork skills worth installing in one shot — a locked style system, a PDF-guide builder, live dashboards, and the tools that keep the rest of your skill library honest.',
    category: 'Toolkit',
    fileType: 'ZIP + PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/nine-cowork-skills/neuraflow-9-cowork-skills-guide.pdf',
        sizeLabel: '244 KB',
      },
      {
        label: 'Download Skills',
        href: '/resources/nine-cowork-skills/neuraflow-9-cowork-skills.zip',
        sizeLabel: '59 KB',
      },
    ],
  },
  {
    slug: 'free-cowork-skills-380',
    title: '380+ Free Claude Skills',
    description:
      'A curated map of the biggest community skill libraries for Claude Code — copy the files, drop them in your project, and Claude picks up hundreds of new tricks instantly.',
    category: 'Guide',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/free-cowork-skills-380/neuraflow-380-cowork-skills-guide.pdf',
        sizeLabel: '342 KB',
      },
    ],
  },
  {
    slug: 'cowork-plugins-guide',
    title: '11 Free Claude Cowork Plugins',
    description:
      "Anthropic's own library of free Cowork plugins for HR, finance, legal, sales, marketing, design, and ops — open source, two clicks to install.",
    category: 'Guide',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/cowork-plugins-guide/neuraflow-cowork-plugins-guide.pdf',
        sizeLabel: '341 KB',
      },
    ],
  },
  {
    slug: 'email-voice-skill',
    title: 'Email Voice Skill',
    description:
      'Teach Claude your real writing voice so every email it drafts sounds like you wrote it — reads your sent emails, builds a voice profile, and never sends on its own.',
    category: 'Toolkit',
    fileType: 'Skill + PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/email-voice-skill/neuraflow-email-voice-skill-guide.pdf',
        sizeLabel: '366 KB',
      },
      {
        label: 'Download Skill',
        href: '/resources/email-voice-skill/neuraflow-email-voice.skill',
        sizeLabel: '5 KB',
      },
    ],
  },
  {
    slug: 'live-artifacts-prompts',
    title: '5 Live Artifacts to Build',
    description:
      'Plug-and-play prompts for five real pages Claude builds and keeps updated for you — a morning command center, a revenue tracker, meeting prep, and more.',
    category: 'Prompt Pack',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/live-artifacts-prompts/neuraflow-live-artifacts-guide.pdf',
        sizeLabel: '330 KB',
      },
    ],
  },
  {
    slug: 'claude-code-hacks',
    title: '5 Claude Code Hacks',
    description:
      'Five small habits that turn Claude Code from a chatty assistant into a real workhorse — session resume, custom slash commands, hooks, MCP servers, and parallel subagents.',
    category: 'Guide',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Cheat Sheet',
        href: '/resources/claude-code-hacks/neuraflow-claude-code-hacks-cheatsheet.pdf',
        sizeLabel: '221 KB',
      },
    ],
  },
  {
    slug: 'claude-routine-setup',
    title: 'Claude Routines',
    description:
      'The version of Claude that keeps working after your laptop is closed — what routines are, how they work, and how to set up your first one in about ten minutes.',
    category: 'Guide',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/claude-routine-setup/neuraflow-claude-routine-setup-guide.pdf',
        sizeLabel: '371 KB',
      },
    ],
  },
  {
    slug: 'chatgpt-alternative-setup',
    title: 'Free ChatGPT Alternative Setup',
    description:
      'Set up Open WebUI in under 10 minutes — a free, private, unlimited ChatGPT-style app that runs on your own computer. No subscription, no data leaving your machine.',
    category: 'Guide',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/chatgpt-alternative-setup/neuraflow-free-chatgpt-alternative-setup-guide.pdf',
        sizeLabel: '320 KB',
      },
    ],
  },
  {
    slug: 'html-over-markdown',
    title: 'HTML Beats Markdown',
    description:
      'The one-line Claude upgrade straight from Anthropic’s own Claude Code team — the thesis, the receipts, and five paste-ready prompts to steal.',
    category: 'Guide',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/html-over-markdown/neuraflow-html-over-markdown-guide.pdf',
        sizeLabel: '253 KB',
      },
    ],
  },
  {
    slug: 'google-ai-tools',
    title: '7 Free Google AI Tools',
    description:
      "Free, from Google, and mostly hiding in plain sight — apps, design, music, marketing, and your own personal AI tutor.",
    category: 'Guide',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/google-ai-tools/neuraflow-7-free-google-ai-tools-guide.pdf',
        sizeLabel: '220 KB',
      },
    ],
  },
  {
    slug: 'gstack-ai-team',
    title: 'GStack: An AI Engineering Team in Claude Code',
    description:
      "Y Combinator's CEO open-sourced 23 Claude Code skills that turn Claude into a coordinated engineering team — CEO, designer, engineer, QA lead, security officer, and release manager.",
    category: 'Guide',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Guide',
        href: '/resources/gstack-ai-team/neuraflow-gstack-ai-engineering-team-guide.pdf',
        sizeLabel: '271 KB',
      },
    ],
  },
  {
    slug: 'anthropic-spacex-breakdown',
    title: 'Anthropic × SpaceX',
    description:
      'A plain-English breakdown of the deal that doubled Claude’s compute — what changed for paid users, and the stranger idea both companies floated: data centers in orbit.',
    category: 'Briefing',
    fileType: 'PDF',
    files: [
      {
        label: 'Download Briefing',
        href: '/resources/anthropic-spacex-breakdown/neuraflow-anthropic-spacex-breakdown.pdf',
        sizeLabel: '283 KB',
      },
    ],
  },
  {
    slug: 'claude-connectors-pack',
    title: 'Claude Connectors Pack',
    description:
      'Four connector-powered Cowork skills in one install — UGC product ads, listing and explainer infographics via Higgsfield, plus an email-voice skill that drafts replies that sound like you.',
    category: 'Toolkit',
    fileType: 'ZIP',
    files: [
      {
        label: 'Download Skills',
        href: '/resources/claude-connectors-pack/neuraflow-claude-connectors-pack.zip',
        sizeLabel: '24 KB',
      },
    ],
  },
];
