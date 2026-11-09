"use client";

import Link from "next/link";
import { useState } from "react";

const productsById = {
  SuperSites: "01",
  SuperApps: "02",
  SuperAutomations: "03",
  SuperAgents: "04",
  SuperDashboards: "05",
  SuperCare: "06",
} as const;

type ProductKey = keyof typeof productsById;

const questions = [
  {
    key: "problem",
    label: "This may take a second. What are you trying to fix?",
    options: [
      { label: "My website is not doing enough for me", score: { SuperSites: 2 } },
      { label: "We keep doing the same work by hand", score: { SuperAutomations: 2, SuperApps: 1 } },
      { label: "We need a custom tool or portal", score: { SuperApps: 2, SuperDashboards: 1 } },
      { label: "We answer the same questions over and over", score: { SuperAgents: 2 } },
    ],
  },
  {
    key: "audience",
    label: "Who needs to use what we build?",
    options: [
      { label: "Customers", score: { SuperSites: 1, SuperApps: 2 } },
      { label: "My team", score: { SuperApps: 1, SuperDashboards: 2 } },
      { label: "Just me, mostly", score: { SuperAutomations: 1, SuperDashboards: 1 } },
      { label: "Everyone in the company", score: { SuperDashboards: 2, SuperCare: 1 } },
    ],
  },
  {
    key: "outcome",
    label: "What would make this feel like a win?",
    options: [
      { label: "More people asking to work with us", score: { SuperSites: 2 } },
      { label: "Time back in the week", score: { SuperAutomations: 2 } },
      { label: "Decisions made on real numbers", score: { SuperDashboards: 2 } },
      { label: "Handling more without hiring more", score: { SuperAgents: 2, SuperApps: 1 } },
    ],
  },
];

const recommendationNotes: Record<ProductKey, string> = {
  SuperSites:
    "A cleaner, faster website usually gets you the most return for the least risk. We make it earn attention and turn it into work.",
  SuperApps:
    "You are describing something your business will live in every day. A custom app gives you a workflow that matches how you actually run.",
  SuperAutomations:
    "The fastest win is usually cutting the repeat work. We map the process, connect the tools, and put alerting where you will see it.",
  SuperAgents:
    "A grounded AI helper can carry a real load, but it needs boundaries and a human in charge. That is exactly how we build them.",
  SuperDashboards:
    "You want to see the numbers before they become surprises. We connect the data and build views around decisions, not decoration.",
  SuperCare:
    "You want it to keep working after launch. SuperCare keeps the systems we build monitored, maintained, and quietly improving.",
};

export function ProductQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<ProductKey | null>(null);

  const current = questions[step];

  function choose(score: Partial<Record<ProductKey, number>>) {
    const next = { ...scores };
    for (const [key, value] of Object.entries(score)) {
      next[key] = (next[key] ?? 0) + value;
    }
    setScores(next);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      const [top] = Object.entries(next).sort((a, b) => b[1] - a[1]);
      setResult(top[0] as ProductKey);
    }
  }

  function restart() {
    setStep(0);
    setScores({});
    setResult(null);
  }

  if (result) {
    return (
      <div className="quiz-result" role="status">
        <p className="section-index">YOUR BEST FIT</p>
        <h3>{result}</h3>
        <p>{recommendationNotes[result]}</p>
        <div className="hero-actions">
          <Link className="button primary" href={`/start?about=${result}`}>
            Start with {result} <span>↗</span>
          </Link>
          <button className="button quiet" type="button" onClick={restart}>
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      <p className="quiz-step">
        Question {step + 1} of {questions.length}
      </p>
      <h3>{current.label}</h3>
      <div className="quiz-options">
        {current.options.map((option) => (
          <button key={option.label} type="button" onClick={() => choose(option.score)}>
            {option.label}
          </button>
        ))}
      </div>
      <button className="quiz-back" type="button" onClick={restart}>
        Start over
      </button>
    </div>
  );
}