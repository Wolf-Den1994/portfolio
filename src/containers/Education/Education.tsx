import SlideToggleWrap from '../../components/SlideToggleWrap/SlideToggleWrap';
import Title from '../../components/Title/Title';
import certificateData from '../../data/certificates';
import './Education.scss';

const Education = () => {
  const handleClick = (link: string) => {
    window.open(link);
  };

  return (
    <div className="education">
      <Title text="Education" />
      <div className="certificates">
        {certificateData.map(({ sertName, course, date, moreInfo, blockAlignLeft, isMoreInfoImage, linkSert }) => (
          <SlideToggleWrap
            key={date}
            title={sertName}
            description={course}
            date={date}
            moreInfo={moreInfo}
            isMoreInfoImage={isMoreInfoImage}
            blockAlignLeft={blockAlignLeft}
            onClick={() => handleClick(linkSert)}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
