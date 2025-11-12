import SurveyPage from "../../components/SurveyPage";
import { surveyQuestions } from "../../data/surveyData";

const CoachSurvey = () => {
  return <SurveyPage module="coach" surveyData={surveyQuestions} />;
};

export default CoachSurvey;
