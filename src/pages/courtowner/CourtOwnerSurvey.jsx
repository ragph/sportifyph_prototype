import SurveyPage from "../../components/SurveyPage";
import { surveyQuestions } from "../../data/surveyData";

const CourtOwnerSurvey = () => {
  return <SurveyPage module="courtowner" surveyData={surveyQuestions} />;
};

export default CourtOwnerSurvey;
