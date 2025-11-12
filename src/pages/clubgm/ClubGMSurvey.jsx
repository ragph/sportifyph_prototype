import SurveyPage from "../../components/SurveyPage";
import { surveyQuestions } from "../../data/surveyData";

const ClubGMSurvey = () => {
  return <SurveyPage module="clubgm" surveyData={surveyQuestions} />;
};

export default ClubGMSurvey;
