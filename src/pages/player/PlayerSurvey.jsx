import SurveyPage from "../../components/SurveyPage";
import { surveyQuestions } from "../../data/surveyData";

const PlayerSurvey = () => {
  return <SurveyPage module="player" surveyData={surveyQuestions} />;
};

export default PlayerSurvey;
