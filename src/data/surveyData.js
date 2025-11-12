import { IoClipboard, IoGift, IoCheckmarkCircle } from 'react-icons/io5';

export const surveys = [
  {
    id: 1,
    title: "Pickleball Skills Assessment",
    description: "Help us understand your playing level and preferences",
    reward: "50 Points",
    duration: "5 mins",
    icon: IoClipboard,
    gradient: "from-blue-500 to-blue-600",
    completed: false,
    banner: '/images/surveys/survey (1).jpg'
  },
  {
    id: 2,
    title: "Equipment Preferences Survey",
    description: "Share your thoughts on pickleball equipment and gear",
    reward: "30 Points",
    duration: "3 mins",
    icon: IoGift,
    gradient: "from-purple-500 to-purple-600",
    completed: false,
    banner: '/images/surveys/survey (2).jpg'
  },
  {
    id: 3,
    title: "Community Feedback",
    description: "Tell us about your experience with local pickleball community",
    reward: "40 Points",
    duration: "4 mins",
    icon: IoCheckmarkCircle,
    gradient: "from-green-500 to-green-600",
    completed: false,
    banner: '/images/surveys/survey (3).jpg'
  },
];

export const surveyQuestions = {
  1: {
    title: "Pickleball Skills Assessment",
    reward: "50 Points",
    icon: IoClipboard,
    gradient: "from-blue-500 to-blue-600",
    banner: '/images/surveys/survey (1).jpg',
    questions: [
      {
        id: 1,
        question: "How long have you been playing pickleball?",
        type: "multiple-choice",
        options: [
          "Less than 6 months",
          "6 months - 1 year",
          "1-2 years",
          "2-5 years",
          "More than 5 years",
        ],
      },
      {
        id: 2,
        question: "What is your current skill level?",
        type: "multiple-choice",
        options: [
          "Beginner (1.0-2.5)",
          "Intermediate (3.0-3.5)",
          "Advanced (4.0-4.5)",
          "Expert (5.0+)",
        ],
      },
      {
        id: 3,
        question: "How often do you play pickleball?",
        type: "multiple-choice",
        options: [
          "Once a week or less",
          "2-3 times a week",
          "4-5 times a week",
          "Daily",
        ],
      },
      {
        id: 4,
        question: "What aspect of your game would you like to improve most?",
        type: "multiple-choice",
        options: [
          "Serve and return",
          "Dinking and soft game",
          "Power shots and drives",
          "Court positioning",
          "Footwork and agility",
        ],
      },
      {
        id: 5,
        question: "Do you prefer singles or doubles play?",
        type: "multiple-choice",
        options: ["Singles", "Doubles", "Both equally", "No preference"],
      },
    ],
  },
  2: {
    title: "Equipment Preferences Survey",
    reward: "30 Points",
    icon: IoGift,
    gradient: "from-purple-500 to-purple-600",
    banner: '/images/surveys/survey (2).jpg',
    questions: [
      {
        id: 1,
        question: "What type of paddle do you currently use?",
        type: "multiple-choice",
        options: [
          "Graphite face",
          "Fiberglass face",
          "Carbon fiber face",
          "Wooden paddle",
          "Not sure",
        ],
      },
      {
        id: 2,
        question: "What paddle weight do you prefer?",
        type: "multiple-choice",
        options: [
          "Lightweight (under 7.3 oz)",
          "Medium (7.3-8.4 oz)",
          "Heavy (over 8.4 oz)",
          "Not sure",
        ],
      },
      {
        id: 3,
        question: "Which pickleball brand do you trust most?",
        type: "multiple-choice",
        options: [
          "Selkirk",
          "Paddletek",
          "Onix",
          "Gamma",
          "Engage",
          "Other",
        ],
      },
      {
        id: 4,
        question: "What type of balls do you prefer?",
        type: "multiple-choice",
        options: ["Indoor balls", "Outdoor balls", "Both", "No preference"],
      },
      {
        id: 5,
        question: "How much would you spend on a new paddle?",
        type: "multiple-choice",
        options: [
          "Under ₱2,000",
          "₱2,000 - ₱4,000",
          "₱4,000 - ₱6,000",
          "₱6,000 - ₱8,000",
          "Over ₱8,000",
        ],
      },
    ],
  },
  3: {
    title: "Community Feedback",
    reward: "40 Points",
    icon: IoCheckmarkCircle,
    gradient: "from-green-500 to-green-600",
    banner: '/images/surveys/survey (3).jpg',
    questions: [
      {
        id: 1,
        question: "How would you rate the pickleball community in your area?",
        type: "multiple-choice",
        options: [
          "Excellent",
          "Good",
          "Average",
          "Below Average",
          "Poor",
        ],
      },
      {
        id: 2,
        question: "What do you value most in a pickleball community?",
        type: "multiple-choice",
        options: [
          "Friendly and welcoming atmosphere",
          "Competitive play opportunities",
          "Social events and gatherings",
          "Skill development programs",
          "All of the above",
        ],
      },
      {
        id: 3,
        question: "How easy is it to find pickleball courts in your area?",
        type: "multiple-choice",
        options: [
          "Very easy",
          "Somewhat easy",
          "Neutral",
          "Somewhat difficult",
          "Very difficult",
        ],
      },
      {
        id: 4,
        question: "Would you be interested in joining a local pickleball club?",
        type: "multiple-choice",
        options: [
          "Yes, definitely",
          "Maybe",
          "Not sure",
          "Probably not",
          "No",
        ],
      },
      {
        id: 5,
        question:
          "What would encourage you to participate more in the community?",
        type: "multiple-choice",
        options: [
          "More tournaments",
          "Better facilities",
          "Lower costs",
          "More social events",
          "Coaching programs",
        ],
      },
    ],
  },
};
