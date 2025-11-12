import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { IoCheckmarkCircle, IoGift, IoClipboard } from "react-icons/io5";
import PageHeader from "./PageHeader";

const SurveyPage = ({ module, surveyData }) => {
  const navigate = useNavigate();
  const { surveyId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const survey = surveyData[surveyId] || surveyData[1];
  const totalQuestions = survey.questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Complete survey
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = () => {
    // Here you would typically save the survey results
    navigate(`/${module}/dashboard`);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-dark-bg pb-20">
        <div className="max-w-lg mx-auto">
          <PageHeader title="Survey Complete" showBack={false} />
          <div className="p-4">
            <div className="flex items-center justify-center min-h-[70vh]">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${survey.gradient} rounded-full flex items-center justify-center`}
                  >
                    <IoCheckmarkCircle className="text-6xl text-white" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-dark-text mb-3">
                  Survey Completed!
                </h1>
                <p className="text-dark-text-secondary mb-2">
                  Thank you for taking the time to complete this survey.
                </p>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <IoGift className="text-2xl text-green-500" />
                  <span className="text-xl font-bold text-green-500">
                    +{survey.reward}
                  </span>
                </div>
                <p className="text-sm text-dark-text-muted mb-6">
                  Your points have been added to your account!
                </p>
                <button
                  onClick={handleFinish}
                  className="px-8 py-3 bg-brand-primary hover:bg-brand-primary-dark text-white rounded-lg font-medium transition-all"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = survey.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      {/* Header */}
      <PageHeader
        title={survey.title}
        showBack={true}
        backPath={`/${module}/dashboard`}
      />

      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Progress Section */}
        <div className="bg-dark-bg-secondary p-4 rounded-md border-b border-dark-border">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <survey.icon className="text-xl text-brand-primary" />
              <span className="text-sm font-medium text-dark-text-secondary">
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
            </div>
            <span className="text-sm font-medium text-brand-primary">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-2 bg-dark-bg-tertiary rounded-full overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${survey.gradient} transition-all duration-300`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Survey Content */}
        <div className="space-y-6">
          {/* Survey Banner */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={survey.banner}
              alt={survey.title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <h1 className="text-xl font-bold text-white mb-1">
                    {survey.title}
                  </h1>
                  <p className="text-sm text-yellow-400 font-bold flex items-center gap-1">
                    <IoGift /> Earn {survey.reward}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-dark-bg-tertiary rounded-xl p-6 border border-dark-border">
            <h2 className="text-lg font-semibold text-dark-text mb-6">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    answers[currentQuestion] === option
                      ? "border-brand-primary bg-brand-primary/10 text-dark-text"
                      : "border-dark-border bg-dark-bg hover:border-dark-border-hover text-dark-text-secondary hover:text-dark-text"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {answers[currentQuestion] === option && (
                      <IoCheckmarkCircle className="text-brand-primary text-xl" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            {currentQuestion > 0 && (
              <button
                onClick={handlePrevious}
                className="flex-1 py-3 bg-dark-bg-tertiary hover:bg-dark-bg-hover text-dark-text border border-dark-border rounded-lg font-medium transition-all"
              >
                Previous
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                answers[currentQuestion]
                  ? "bg-brand-primary hover:bg-brand-primary-dark text-white"
                  : "bg-dark-bg-tertiary text-dark-text-muted cursor-not-allowed"
              }`}
            >
              {currentQuestion < totalQuestions - 1 ? "Next" : "Complete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SurveyPage.propTypes = {
  module: PropTypes.string.isRequired,
  surveyData: PropTypes.object.isRequired,
};

export default SurveyPage;
