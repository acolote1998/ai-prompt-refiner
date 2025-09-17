# AI Prompt Refiner – Frontend

_Make your prompts sharper, clearer, and more effective._

**AI Prompt Refiner** is a web application built with **React and TypeScript** that helps users improve their AI prompts before sending them to a large language model (LLM). The app uses **Google Gemini** to analyze and refine user-provided prompts, making them more focused and likely to produce high-quality responses.

Live Version: https://acolote1998.github.io/ai-prompt-refiner/

### How It Works

1. **Write your prompt** – Enter any prompt you’d like to refine.
2. **Analysis by Gemini** – The app sends your prompt to Gemini, which provides:
   - A **refined version** of your original prompt, rewritten for maximum effectiveness with LLMs.
   - A **score breakdown** (1–10) across five key dimensions:
     - 🔹 Clarity
     - 🔹 Specificity
     - 🔹 Context provided
     - 🔹 Answerability
     - 🔹 Focus
   - **Written feedback** explaining strengths and weaknesses of your original prompt.
3. **Actionable tips** – Receive **three tailored tips** for improving your future prompts.

### Features

- ✍️ **Prompt refinement** – Get a better, optimized version of your input.
- 📊 **Prompt scoring** – Understand your prompt’s strengths and weaknesses with clear numerical ratings.
- 💬 **Feedback & suggestions** – Learn how to structure more effective prompts.
- 🧠 **Practical tips** – Get three concise tips based on your own prompt.
- 🔑 **Your key stays in your browser** – Requires your own **Gemini API key**, which is stored locally in your browser’s `localStorage` (no backend storage, no transmission to any server in this repo).

### Getting Started

1. Open the app and navigate to the `Settings` page (top navigation).
2. Paste your **Gemini API key** in the input and click “Save key”.
3. Go back to `Home`, write your prompt, and click “Refine”.

Notes:

- The key is stored under `localStorage["gemini_api_key"]` and read by the app when calling Gemini.
- You can update or clear the key anytime from `Settings`.

### Purpose

The app is designed for **students, developers, content creators, and AI enthusiasts** who want to get the most out of LLMs. Instead of guessing how to phrase a prompt, users can learn to **refine their thinking and prompt-writing skills** with immediate feedback.

This repository contains the **frontend component** of the project, which delivers the user experience, connects to Gemini, and displays the analyses in a simple, intuitive way. There is **no authentication** and **no database**; all Gemini key handling is client-side via `localStorage`.
