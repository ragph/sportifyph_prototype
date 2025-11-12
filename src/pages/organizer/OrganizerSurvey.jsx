import SurveyPage from "../../components/SurveyPage";
import { surveyQuestions } from "../../data/surveyData";

const OrganizerSurvey = () => {
  return <SurveyPage module="organizer" surveyData={surveyQuestions} />;
};

export default OrganizerSurvey;
