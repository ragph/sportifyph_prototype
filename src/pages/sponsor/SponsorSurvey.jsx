import SurveyPage from "../../components/SurveyPage";
import { surveyQuestions } from "../../data/surveyData";

const SponsorSurvey = () => {
  return <SurveyPage module="sponsor" surveyData={surveyQuestions} />;
};

export default SponsorSurvey;
