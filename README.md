# Frontend Quiz App

A simple quiz application testing knowledge of HTML, CSS, JavaScript, and SASS.

## Features
- 4 quiz categories (HTML, CSS, JS, SASS)
- 10 random questions per quiz
- Dark/light mode toggle
- Progress tracking
- Score display

## How to Use
1. Clone this repository
2. Open `index.html` in your browser
3. Select a quiz topic
4. Answer 10 questions
5. View your final score

## File Structure
quiz-app/
├── index.html # Main HTML file
├── style.css # All styles
├── formula.js # Main JavaScript logic
├── *.json # Question databases
└── svgs/ # Icon assets


## Customizing Questions
Edit the JSON files to add/remove questions. Follow this format:
```json
{
  "question": "Your question?",
  "options": ["A", "B", "C", "D"],
  "answer": "Correct Answer"
}

Requirements

Modern web browser
No server/dependencies needed