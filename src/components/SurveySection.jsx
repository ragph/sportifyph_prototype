import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IoTime, IoGift, IoArrowForward } from 'react-icons/io5';

const SurveySection = ({ surveys, module }) => {
  const navigate = useNavigate();

  if (!surveys || surveys.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-text">Earn Rewards</h2>
        <button className="text-sm text-brand-primary hover:text-brand-primary-dark font-medium transition-colors">
          View All
        </button>
      </div>
      <div className="space-y-3">
        {surveys.map((survey) => (
          <div
            key={survey.id}
            onClick={() => navigate(`/${module}/survey/${survey.id}`)}
            className="relative rounded-xl overflow-hidden cursor-pointer transition-all group shadow-lg"
          >
            {/* Banner Image */}
            <img
              src={survey.banner}
              alt={survey.title}
              className="w-full h-auto object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-white text-xl mb-1 group-hover:text-brand-accent transition-colors">
                    {survey.title}
                  </h3>
                  <p className="text-xs">{survey.description}</p>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center text-xs text-white/80">
                      <IoTime className="mr-1" />
                      {survey.duration}
                    </span>
                    <span className="flex items-center text-xs font-bold text-yellow-400">
                      <IoGift className="mr-1" />
                      {survey.reward}
                    </span>
                  </div>
                </div>
                <IoArrowForward className="text-white group-hover:text-brand-accent transition-colors text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SurveySection.propTypes = {
  surveys: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      reward: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      banner: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      gradient: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
  module: PropTypes.string.isRequired,
};

export default SurveySection;
