"use client";

import { FormEvent, useEffect, useState } from "react";

type FormState = {
  name: string;
  email: string;
  businessName: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  businessName: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const selectedPlan = new URLSearchParams(window.location.search).get("plan");

    if (!selectedPlan) {
      return;
    }

    setFormState((current) => {
      const nextMessage = `Hi, I am interested in the ${selectedPlan} package.${current.message ? `\n\n${current.message}` : "\n\nI would like to discuss what is included and any additional features I may need."}`;

      if (current.message.includes(`the ${selectedPlan} package`)) {
        return current;
      }

      return {
        ...current,
        message: nextMessage,
      };
    });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = (await response.json()) as { message: string };

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setFeedback(data.message);
      setFormState(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-200">Name</span>
          <input
            required
            type="text"
            value={formState.name}
            onChange={(event) =>
              setFormState((current) => ({ ...current, name: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-200">Email</span>
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) =>
              setFormState((current) => ({ ...current, email: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
            placeholder="you@business.ie"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-200">Business name</span>
        <input
          required
          type="text"
          value={formState.businessName}
          onChange={(event) =>
            setFormState((current) => ({
              ...current,
              businessName: event.target.value,
            }))
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
          placeholder="Your business"
        />
      </label>

      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-200">Message</span>
        <textarea
          required
          rows={5}
          value={formState.message}
          onChange={(event) =>
            setFormState((current) => ({ ...current, message: event.target.value }))
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
          placeholder="Tell me a bit about your business, the package you are interested in, and any additional features you may need."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="button-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>

        <p className="text-sm text-slate-400">
          {feedback || "Enquiries are sent directly by email. Most replies can be sent within 1 business day."}
        </p>
      </div>
    </form>
  );
}
